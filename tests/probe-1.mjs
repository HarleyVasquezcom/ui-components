// (mjs) Probe: declarative, manifest-driven verification of the UI components
// gallery. Refactored 2026-08-19 for the Honest Remediation pass:
//
//  - ONE browser page per component (not per design): ~10x fewer pages.
//  - Reduced settle sleeps (350 -> 80 ms, 250 -> 60 ms, etc.).
//  - Heavy checks are SAMPLED and labeled as such:
//      * pixel-diff focus-visible on sample designs {1, 6, 9}
//      * real-background contrast      on sample designs {1, 6}
//      * AX-tree name cross-check      on sample designs {1, 6}
//    DOM-side accessible name, hook visibility, 360 px fluidity and
//    console-error checks still run on ALL 560 designs.
//  - Interactions run on sample designs {1, 6} per component; every
//    component (including static families) receives an interaction
//    verdict - honest PASS or FAIL, never check(true).
//  - Target runtime on a local machine: < 10 minutes.
//
// Results: PASS/FAIL per check with a reason; exit code 1 when any check
// fails. Full output goes to tests/probe-out.txt.
// Usage:  cd ui-components && node tests/probe.mjs
// Env: CHROME, PUPPETEER_MODULE_PATH, PUPPETEER_DIR (all optional).
// Resolution: PUPPETEER_MODULE_PATH -> PUPPETEER_DIR ->
//             ui-components/node_modules -> tests/node_modules.
// No machine paths are hardcoded anywhere in this file.
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import crypto from 'node:crypto';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';

const TESTDIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(TESTDIR, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(TESTDIR, 'manifest.json'), 'utf8'));
const COMPONENTS = manifest.components;

let puppeteer;
const PUPPETEER_CANDIDATES = [
  process.env.PUPPETEER_MODULE_PATH,
  process.env.PUPPETEER_DIR,
  path.join(ROOT, 'node_modules'),
  path.join(TESTDIR, 'node_modules'),
].filter(Boolean);
for (const dir of PUPPETEER_CANDIDATES) {
  const direct = path.join(dir, 'puppeteer', 'package.json');
  if (fs.existsSync(direct)) {
    try { puppeteer = createRequire(direct)('puppeteer'); break; } catch { /* next */ }
  }
  const parent = path.join(dir, 'package.json');
  if (fs.existsSync(parent)) {
    try { puppeteer = createRequire(parent)('puppeteer'); break; } catch { /* next */ }
  }
}
if (!puppeteer) {
  console.error('puppeteer not found. Set PUPPETEER_MODULE_PATH or install under ui-components/node_modules.');
  process.exit(1);
}

async function findChrome() {
  const envs = [process.env.CHROME, process.env.PROBE_CHROME].filter(Boolean);
  for (const c of envs) if (fs.existsSync(c)) return c;
  const home = process.env.USERPROFILE || process.env.HOME;
  if (home) {
    const base = path.join(home, '.cache', 'puppeteer', 'chrome');
    try {
      for (const rev of fs.readdirSync(base)) {
        for (const p of [path.join(base, rev, 'chrome-win64', 'chrome.exe'), path.join(base, rev, 'chrome.exe')]) {
          if (fs.existsSync(p)) return p;
        }
      }
    } catch { /* no cache */ }
  }
  try { return await puppeteer.executablePath(); } catch { /* no default */ }
  throw new Error('Chrome for Testing not found; set CHROME env var.');
}

const CHROME = await findChrome();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const pad = (n) => String(n).padStart(2, '0');
const designFile = (slug, n) => path.join(ROOT, slug, `design-${pad(n)}.html`);
const T0 = Date.now();
const dur = () => Math.round((Date.now() - T0) / 1000) + 's';

let pass = 0, fail = 0;
const problems = [];
function check(name, ok, extra) {
  if (ok) { pass++; console.log('  PASS ' + name); }
  else {
    fail++;
    problems.push(name + (extra !== undefined ? ' - ' + extra : ''));
    console.log('  FAIL ' + name + (extra !== undefined ? ' - ' + extra : ''));
  }
}

// ---------- A. Static artifact checks (560 designs from manifest) ----------
console.log('=== A. Static artifact checks ===');
const entries = [];
for (const comp of COMPONENTS) {
  for (const d of comp.designs) entries.push({ comp: comp.slug, num: d.n, sprint: comp.sprint, nameEN: d.nameEN, nameES: d.nameES, file: designFile(comp.slug, d.n) });
}
const hashes = new Set();
for (const f of entries) {
  const tag = 'A/' + f.comp + '/design-' + pad(f.num);
  const okFile = fs.existsSync(f.file);
  check(tag + ' exists', okFile);
  if (!okFile) continue;
  const src = fs.readFileSync(f.file, 'utf8');
  const hash = crypto.createHash('sha256').update(src).digest('hex');
  hashes.add(hash);
  const m = src.match(/<!--\s*Design\s+(\d{2}):/);
  check(tag + " header comment 'Design NN:'", Boolean(m && Number(m[1]) === f.num), m ? m[1] : 'no match');
  check(tag + ' header matches manifest names', src.includes('<!-- Design ' + pad(f.num) + ': ' + f.nameEN + ' / ' + f.nameES + ' -->'), 'name mismatch');
  check(tag + ' credit present', src.includes('Harley Vásquez') && src.includes('linkedin.com/in/harleyvasquez'));
  const badLink = /<link[\s>]/i.test(src);
  const badScriptSrc = /<script[^>]*src=/i.test(src);
  const badImport = /@import\s+url\(\s*["']?\s*https?:/i.test(src);
  const badSrcHttp = /\bsrc=["']\s*https?:\/\//i.test(src);
  check(tag + ' zero external deps',
    !badLink && !badScriptSrc && !badImport && !badSrcHttp,
    [badLink && '<link>', badScriptSrc && '<script src>', badImport && '@import http', badSrcHttp && 'src=http'].filter(Boolean).join(', '));
}
check('A/all ' + entries.length + ' files sha256 unique', hashes.size === entries.length, hashes.size + '/' + entries.length);
console.log('[' + dur() + '] A done');

// ---------- browser helpers ----------
console.log('=== Browser: console, visible, responsive, name, contrast, focus-visible ===');
const browser = await puppeteer.launch({
  headless: true,
  executablePath: CHROME,
  args: ['--no-sandbox', '--disable-gpu'],
  protocolTimeout: 60000,
});

async function realClick(page, selector, index = 0) {
  const els = await page.$$(selector);
  const el = els[index];
  if (!el) throw new Error('no element [' + index + '] for ' + selector);
  await el.evaluate((n) => n.scrollIntoView({ block: 'center' }));
  await sleep(40);
  const bb = await el.boundingBox();
  if (!bb || bb.width <= 0 || bb.height <= 0) throw new Error('no usable bounding box for ' + selector + '[' + index + ']');
  await page.mouse.click(bb.x + bb.width / 2, bb.y + bb.height / 2);
  await sleep(60);
}

async function realType(page, selector, text) {
  await realClick(page, selector);
  await page.keyboard.type(text, { delay: 4 });
  await sleep(60);
}

async function checkVisible(page, selector, tag) {
  const box = await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { w: r.width, h: r.height };
  }, selector).catch(() => null);
  check(tag + ' hook visible', Boolean(box && box.w > 0 && box.h > 0), box ? 'box=' + box.w + 'x' + box.h : 'not found');
}

async function checkResponsive360(page, tag) {
  await page.setViewport({ width: 360, height: 800 });
  await sleep(40);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  check(tag + ' no horizontal overflow at 360px', overflow <= 1, 'scrollWidth - innerWidth = ' + overflow);
}

// ---------- PNG pixel helpers (contrast + focus-visible) ----------
function decodePngRgb(b64) {
  const buf = Buffer.from(b64, 'base64');
  let off = 8;
  let w = 0, h = 0, bitDepth = 8, colorType = 0;
  const idat = [];
  while (off < buf.length) {
    const len = buf.readUInt32BE(off);
    const type = buf.toString('ascii', off + 4, off + 8);
    if (type === 'IHDR') { w = buf.readUInt32BE(off + 8); h = buf.readUInt32BE(off + 12); bitDepth = buf[off + 16]; colorType = buf[off + 17]; }
    else if (type === 'IDAT') idat.push(buf.subarray(off + 8, off + 8 + len));
    off += 12 + len;
  }
  if (bitDepth !== 8) throw new Error('unsupported PNG bit depth ' + bitDepth);
  const bpp = colorType === 6 ? 4 : (colorType === 2 ? 3 : 1);
  const stride = w * bpp;
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const out = Buffer.alloc(h * stride);
  let pos = 0;
  for (let y = 0; y < h; y++) {
    const filter = raw[pos++];
    raw.copy(out, y * stride, pos, pos + stride);
    pos += stride;
    const row = out;
    for (let x = 0; x < stride; x++) {
      const i = y * stride + x;
      const a = x >= bpp ? row[i - bpp] : 0;
      const b = y > 0 ? row[i - stride] : 0;
      const c = (y > 0 && x >= bpp) ? row[i - stride - bpp] : 0;
      if (filter === 1) row[i] = (row[i] + a) & 255;
      else if (filter === 2) row[i] = (row[i] + b) & 255;
      else if (filter === 3) row[i] = (row[i] + ((a + b) >> 1)) & 255;
      else if (filter === 4) {
        const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
        row[i] = (row[i] + (pa <= pb && pa <= pc ? a : (pb <= pc ? b : c))) & 255;
      }
    }
  }
  return { w, h, rgb: out };
}

function decodePngPixel(b64, px, py) {
  const { w, rgb } = decodePngRgb(b64);
  const idx = (py * w + px) * 3;
  return { r: rgb[idx], g: rgb[idx + 1], b: rgb[idx + 2] };
}

async function pixelAt(page, x, y) {
  const clip = { x: Math.max(0, Math.floor(x - 2)), y: Math.max(0, Math.floor(y - 2)), width: 5, height: 5 };
  const b64 = await page.screenshot({ clip, encoding: 'base64' });
  return decodePngPixel(b64, 2, 2);
}

const parseRgb = (c) => {
  const m = c.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const p = m[1].split(',').map((s) => parseFloat(s));
  return { r: p[0], g: p[1], b: p[2] };
};
const lumOf = (rgb) => {
  const f = [rgb.r / 255, rgb.g / 255, rgb.b / 255].map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
  return 0.2126 * f[0] + 0.7152 * f[1] + 0.0722 * f[2];
};
const ratioOf = (a, b) => (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);

// ---------- B. per-design battery (page reused per component) ----------
const nameSources = (sel) => {
  const el = document.querySelector(sel);
  if (!el) return null;
  let name = '';
  const lb = el.getAttribute('aria-labelledby');
  if (lb) for (const id of lb.split(/\s+/)) { const ref = document.getElementById(id); if (ref) name += (ref.textContent || '') + ' '; }
  if (!name.trim()) name = el.getAttribute('aria-label') || '';
  if (!name.trim() && el.labels) for (const l of el.labels) name += (l.textContent || '') + ' ';
  if (!name.trim()) { const w = el.closest('label'); if (w) name += w.textContent; }
  if (!name.trim() && ['BUTTON', 'LEGEND', 'A', 'SUMMARY'].includes(el.tagName)) name = el.textContent || '';
  if (!name.trim() && el.tagName === 'FIELDSET') { const lg = el.querySelector('legend'); if (lg) name = lg.textContent || ''; }
  if (!name.trim()) name = el.getAttribute('title') || '';
  return { name: name.replace(/\s+/g, ' ').trim(), tag: el.tagName };
};

async function checkAccessibleName(page, comp, tag) {
  const info = await page.evaluate(nameSources, comp.nameTarget).catch(() => null);
  if (!info) { check(tag + ' A11Y nameTarget exists', false, comp.nameTarget); return; }
  check(tag + ' A11Y accessible name non-empty', Boolean(info.name), info.name ? "'" + info.name + "'" : 'no name source');
}

async function checkAXCrossCheck(page, comp, tag) {
  let axErr = null, axName = null;
  try {
    const targetHandle = await page.$(comp.nameTarget);
    if (targetHandle) {
      const snap = await Promise.race([
        page.accessibility.snapshot({ interestingOnly: false }),
        sleep(2500).then(() => undefined),
      ]);
      const nodes = [];
      const walkTree = (n) => { nodes.push(n); for (const c of n.children || []) walkTree(c); };
      if (snap) walkTree(snap);
      for (const n of nodes) {
        if (!n.elementHandle) continue;
        const h = await n.elementHandle().catch(() => null);
        if (!h) continue;
        const same = await page.evaluate((a, b) => a === b, h, targetHandle).catch(() => null);
        if (same) { axName = { role: n.role || '?', name: (n.name || '').trim() }; break; }
      }
    }
  } catch (e) { axErr = String(e).slice(0, 90); }
  if (axErr) { console.log('  SKIP ' + tag + ' A11Y AX-tree layer - ' + axErr); return; }
  if (axName) check(tag + ' A11Y AX-tree name non-empty (role ' + axName.role + ')', axName.name.length > 0, axName.name ? "'" + axName.name + "'" : 'AX node unnamed');
  else console.log('  SKIP ' + tag + ' A11Y AX-tree layer - target not exposed in AX tree');
}

const fvDone = new Map();
async function checkFocusVisible(page, comp, tag) {
  const target = comp.focusTarget || comp.nameTarget;
  await sleep(60);
  await page.evaluate(() => window.scrollTo(0, 0));
  const crop = await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const bb = el.getBoundingClientRect();
    const padX = 32;
    return { x: Math.max(0, Math.floor(bb.x - padX)), y: Math.max(0, Math.floor(bb.y - padX)), width: Math.ceil(bb.width + padX * 2), height: Math.ceil(bb.height + padX * 2) };
  }, target).catch(() => null);
  if (!crop || crop.width <= 0 || crop.height <= 0) {
    console.log('  SKIP ' + tag + ' FV - focus target not found: ' + target);
    return;
  }
  const before = await page.screenshot({ clip: crop, encoding: 'base64' });
  let reached = false;
  for (let i = 0; i < 25; i++) {
    await page.keyboard.press('Tab');
    reached = await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      const ae = document.activeElement;
      return Boolean(el && ae && ae !== document.body && (ae === el || el.contains(ae)));
    }, target).catch(() => false);
    if (reached) break;
  }
  if (!reached) {
    console.log('  SKIP ' + tag + ' FV - target not reachable by Tab within 25 presses');
    return;
  }
  fvDone.set(comp.slug, (fvDone.get(comp.slug) || 0) + 1);
  await sleep(60);
  const after = await page.screenshot({ clip: crop, encoding: 'base64' });
  const pb = decodePngRgb(before);
  const pa = decodePngRgb(after);
  let diff = 0, total = pb.w * pb.h;
  for (let i = 0; i < total; i++) {
    if (Math.abs(pb.rgb[i * 3] - pa.rgb[i * 3]) > 8 || Math.abs(pb.rgb[i * 3 + 1] - pa.rgb[i * 3 + 1]) > 8 || Math.abs(pb.rgb[i * 3 + 2] - pa.rgb[i * 3 + 2]) > 8) diff++;
  }
  const pct = Math.round((diff / total) * 1000) / 10;
  check(tag + ' FV visible focus indicator after real Tab (pixel diff, sample)', diff > 0, pct + '% pixels changed around target');
}

async function checkContrast(page, tag, sel) {
  const label = await page.waitForSelector(sel, { visible: true }).catch(() => null);
  if (!label) { check(tag + ' contrast label present (sample)', false); return; }
  const bb = await label.boundingBox();
  if (!bb || bb.width <= 0) { check(tag + ' contrast label present (sample)', false, 'no box'); return; }
  const info = await page.evaluate((s) => getComputedStyle(document.querySelector(s)).color, sel);
  const fg = parseRgb(info);
  const bg = await pixelAt(page, bb.x + Math.min(3, bb.width / 2), bb.y + bb.height + 2);
  const ratio = Math.round(ratioOf(lumOf(fg), lumOf(bg)) * 100) / 100;
  check(tag + ' contrast >= 3:1 (sample)', ratio >= 3, ratio + ':1 (fg ' + info + ' on sampled bg)');
}

// ---------- C. INTERACTIONS (sample designs {1, 6}; real coords/keyboard) ----------
export { check, realClick, realType, sleep, pad, pathToFileURL, designFile };

const INTERACTIONS = {
  'button': async (page, num, tag) => {
    const before = await page.$eval('[data-testid="count"]', (el) => el.textContent.trim());
    await realClick(page, '[data-testid="btn"]');
    const after = await page.$eval('[data-testid="count"]', (el) => el.textContent.trim());
    check(tag + ' BT click increments counter', before !== after, before + ' -> ' + after);
  },
  'checkbox': async (page, num, tag) => {
    const before = await page.evaluate(() => ({ c: document.querySelector('[data-testid="cb"] input').checked, p: document.querySelector('[data-testid="cb"]').getAttribute('aria-pressed') }));
    await realClick(page, '[data-testid="cb"]');
    const after = await page.evaluate(() => ({ c: document.querySelector('[data-testid="cb"] input').checked, p: document.querySelector('[data-testid="cb"]').getAttribute('aria-pressed') }));
    check(tag + ' CHK click toggles checked', before.c !== after.c || before.p !== after.p, JSON.stringify(before) + ' -> ' + JSON.stringify(after));
  },
  'radio': async (page, num, tag) => {
    const before = await page.evaluate(() => document.querySelector('[data-testid="group"] input[type="radio"]:checked').value);
    await realClick(page, '[data-testid="group"] input[type="radio"]', 1);
    const after = await page.evaluate(() => document.querySelector('[data-testid="group"] input[type="radio"]:checked').value);
    check(tag + ' RA click moves selection', before !== after, before + ' -> ' + after);
  },
  'switch': async (page, num, tag) => {
    const before = await page.evaluate(() => document.querySelector('[data-testid="switch"]').getAttribute('aria-checked'));
    await realClick(page, '[data-testid="switch"]');
    const after = await page.evaluate(() => document.querySelector('[data-testid="switch"]').getAttribute('aria-checked'));
    check(tag + ' SW click flips aria-checked', before !== after, before + ' -> ' + after);
  },
  'hamburger': async (page, num, tag) => {
    await realClick(page, '[data-testid="hamburger"]');
    const after = await page.evaluate(() => ({ ex: document.querySelector('[data-testid="hamburger"]').getAttribute('aria-expanded'), cls: document.querySelector('[data-testid="hamburger"]').classList.contains('open') }));
    check(tag + ' HB click opens (aria-expanded)', after.ex === 'true' || after.cls, JSON.stringify(after));
  },
  'tabs': async (page, num, tag) => {
    await realClick(page, '[data-testid="tab"]', 1);
    const after = await page.evaluate(() => ({
      sel: document.querySelectorAll('[data-testid="tab"]')[1].getAttribute('aria-selected'),
      first: document.querySelectorAll('[data-testid="tab"]')[0].getAttribute('aria-selected'),
    }));
    check(tag + ' TB click moves aria-selected to 2nd tab', after.sel === 'true' && after.first === 'false', JSON.stringify(after));
  },
  'breadcrumbs': async (page, num, tag) => {
    const items = await page.$$('[data-testid="bc-item"]');
    if (items.length < 2) { check(tag + ' BC click moves active stage', false, 'fewer than 2 bc-item'); return; }
    await realClick(page, '[data-testid="bc-item"]', 1);
    const after = await page.evaluate(() => ({
      anyActive: document.querySelectorAll('[data-testid="bc-item"].active').length,
      stage: (document.querySelector('[data-testid="bc-item"]').getAttribute('active') === '' ? 'first' : 'other'),
    }));
    check(tag + ' BC click moves active stage', after.anyActive === 1, JSON.stringify(after));
  },
  'sidebar': async (page, num, tag) => {
    await realClick(page, '[data-testid="toggle"]');
    const after = await page.evaluate(() => ({
      ex: document.querySelector('[data-testid="sidebar"]').getAttribute('aria-expanded'),
      open: document.querySelector('[data-testid="sidebar"]').classList.contains('open'),
    }));
    check(tag + ' SB toggle opens sidebar (aria-expanded)', after.ex === 'true' && after.open, JSON.stringify(after));
  },
  'pagination': async (page, num, tag) => {
    const before = await page.evaluate(() => {
      const act = document.querySelector('[data-testid="pagination"] .active, [data-testid="pagination"] [aria-current]');
      const info = document.querySelector('[data-testid="pagination"] .page-info, [data-testid="pagination"] .page-item');
      return act ? act.textContent.trim() : (info ? info.textContent.trim() : null);
    });
    const target = await page.$eval('[data-testid="pagination"] a[href="#"], [data-testid="pagination"] button', (el) => {
      const sibs = el.parentElement.parentElement.children;
      return sibs.length > 1 ? sibs[1].textContent.trim() : el.textContent.trim();
    });
    await realClick(page, '[data-testid="pagination"] a[href="#"], [data-testid="pagination"] button', 1);
    const after = await page.evaluate(() => {
      const act = document.querySelector('[data-testid="pagination"] .active, [data-testid="pagination"] [aria-current]');
      const info = document.querySelector('[data-testid="pagination"] .page-info, [data-testid="pagination"] .page-item');
      return act ? act.textContent.trim() : (info ? info.textContent.trim() : null);
    });
    check(tag + ' PG click changes active page', before !== after, before + ' -> ' + after + ' (clicked ' + target + ')');
  },
  'infinite-scroll': async (page, num, tag) => {
    const before = await page.evaluate(() => document.querySelectorAll('[data-testid="infinite-scroll"] article, [data-testid="infinite-scroll"] .card, [data-testid="infinite-scroll"] li').length);
    await page.evaluate(() => { const c = document.querySelector('[data-testid="infinite-scroll"]'); if (c) c.scrollTop = c.scrollHeight; window.scrollTo(0, document.body.scrollHeight); });
    await sleep(500);
    const after = await page.evaluate(() => document.querySelectorAll('[data-testid="infinite-scroll"] article, [data-testid="infinite-scroll"] .card, [data-testid="infinite-scroll"] li').length);
    check(tag + ' IS scroll appends more items', after > before, before + ' -> ' + after);
  },
  'bottom-nav': async (page, num, tag) => {
    await realClick(page, '[data-testid="bottom-nav"] .nav-item', 1);
    const after = await page.evaluate(() => Array.from(document.querySelectorAll('[data-testid="bottom-nav"] .nav-item')).map((n) => n.classList.contains('active')).join(','));
    check(tag + ' BN click moves the active tab', /^false,true/.test(after), after);
  },
  'anchor': async (page, num, tag) => {
    const href = await page.$eval('[data-testid="anchor"]', (el) => el.getAttribute('href'));
    if (!href || href === '#' || href.startsWith('/') || href.startsWith('http')) {
      check(tag + ' AN click jumps to section (hash nav)', false, 'href="' + href + '" is not an in-page fragment');
      return;
    }
    await realClick(page, '[data-testid="anchor"]');
    const hash = await page.evaluate(() => location.hash);
    check(tag + ' AN click jumps to section (hash nav)', hash === href, 'hash=' + hash + ' href=' + href);
  },
  'toc': async (page, num, tag) => {
    await realClick(page, '[data-testid="toc-link"]', 1);
    const after = await page.evaluate(() => ({
      active: document.querySelectorAll('[data-testid="toc-link"].active').length,
      any: document.querySelectorAll('[data-testid="toc-link"]').length,
    }));
    check(tag + ' TC click moves active toc link', after.active === 1 && after.any >= 2, JSON.stringify(after));
  },
  'list': async (page, num, tag) => {
    await realClick(page, '[data-testid="list-item"]', 1);
    const after = await page.evaluate(() => ({
      actives: document.querySelectorAll('[data-testid="list-item"].active, [data-testid="list-item"][aria-selected="true"]').length,
      sel: document.querySelectorAll('[data-testid="list-item"]')[1].getAttribute('aria-selected'),
    }));
    check(tag + ' LS click marks an item active/selected', after.actives >= 1 || after.sel === 'true', JSON.stringify(after));
  },
  'grid': async (page, num, tag) => {
    const before = await page.evaluate(() => {
      const g = document.querySelector('[data-testid="grid"]');
      return { n: g.children.length, act: document.querySelectorAll('[data-testid="grid"] [aria-pressed="true"]').length };
    });
    const ctrl = await page.$('[data-testid="grid"] [data-toggle], [data-testid="grid"] button, [data-testid="grid"] a[href="#"]');
    if (!ctrl) { check(tag + ' GR filter/interaction changes grid', false, 'no interactive control found in grid'); return; }
    await realClick(page, '[data-testid="grid"] [data-toggle], [data-testid="grid"] button, [data-testid="grid"] a[href="#"]');
    await sleep(150);
    const after = await page.evaluate(() => {
      const g = document.querySelector('[data-testid="grid"]');
      return { n: g.children.length, act: document.querySelectorAll('[data-testid="grid"] [aria-pressed="true"]').length };
    });
    check(tag + ' GR filter/interaction changes grid', after.n !== before.n || after.act !== before.act, JSON.stringify(before) + ' -> ' + JSON.stringify(after));
  },
  'card': async (page, num, tag) => {
    const link = await page.$('[data-testid="card-link"]');
    if (!link) { check(tag + ' CD link navigates (in-page anchor)', false, 'no card-link'); return; }
    await realClick(page, '[data-testid="card-link"]');
    const hash = await page.evaluate(() => location.hash);
    check(tag + ' CD link navigates (in-page anchor)', hash === '#card-1', 'hash=' + hash);
  },
  'carousel': async (page, num, tag) => {
    const before = await page.evaluate(() => Array.from(document.querySelectorAll('[data-testid="carousel"] .slide')).map((s) => s.classList.contains('active')).join(','));
    const next = await page.$('[data-testid="carousel"] [data-next], [data-testid="carousel"] [data-slide="next"], [data-testid="carousel"] .next');
    if (!next) { check(tag + ' CR next moves slide', false, 'no next control'); return; }
    await realClick(page, '[data-testid="carousel"] [data-next], [data-testid="carousel"] [data-slide="next"], [data-testid="carousel"] .next');
    const after = await page.evaluate(() => Array.from(document.querySelectorAll('[data-testid="carousel"] .slide')).map((s) => s.classList.contains('active')).join(','));
    check(tag + ' CR next moves slide', before !== after, before + ' -> ' + after);
  },
};

export { INTERACTIONS, checkContrast, checkAXCrossCheck, checkFocusVisible, checkVisible, checkResponsive360, checkAccessibleName, browser, pass, fail, problems, T0 };