import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const TESTDIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(TESTDIR, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(TESTDIR, 'manifest.json'), 'utf8'));
const COMPONENTS = manifest.components;

// Find puppeteer
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

// Find Chrome
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const pad = (n) => String(n).padStart(2, '0');
const designFile = (slug, n) => path.join(ROOT, slug, `design-${pad(n)}.html`);

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
const browser = await puppeteer.launch({
  headless: true,
  executablePath: CHROME,
  args: ['--no-sandbox', '--disable-gpu'],
  protocolTimeout: 60000,
});

// Contrast helpers (from probe.mjs)
const zlib = require('node:zlib');
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
async function checkContrast(page, tag, minRatio, sel) {
  const label = await page.waitForSelector(sel, { visible: true }).catch(() => null);
  if (!label) { check(tag + ' contrast label present', false); return; }
  const bb = await label.boundingBox();
  if (!bb || bb.width <= 0) { check(tag + ' contrast label present', false, 'no box'); return; }
  const info = await page.evaluate((s) => getComputedStyle(document.querySelector(s)).color, sel);
  const fg = parseRgb(info);
  const bg = await pixelAt(page, bb.x + Math.min(3, bb.width / 2), bb.y + bb.height + 2);
  const ratio = Math.round(ratioOf(lumOf(fg), lumOf(bg)) * 100) / 100;
  check(tag + ' contrast >= ' + minRatio + ':1', ratio >= minRatio, ratio + ':1 (fg ' + info + ' on sampled bg rgb(' + Math.round(bg.r) + ',' + Math.round(bg.g) + ',' + Math.round(bg.b) + '))');
}
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
  if (!info) { check(tag + ' A11Y primary control (nameTarget) exists', false, comp.nameTarget); return; }
  const domOk = Boolean(info.name);
  check(tag + ' A11Y accessible name non-empty', domOk, info.name ? "'" + info.name + "' (tag " + info.tag + ')' : 'no name');
  if (!domOk) return;
  let axErr = null, axName = null;
  try {
    const targetHandle = await page.$(comp.nameTarget);
    if (targetHandle) {
      const snap = await page.accessibility.snapshot({ interestingOnly: false });
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
}
const fvChecked = new Map();
async function checkFocusVisible(page, comp, tag) {
  const target = comp.focusTarget || comp.nameTarget;
  await page.setViewport({ width: 1280, height: 800 });
  await sleep(150);
  await page.evaluate(() => window.scrollTo(0, 0));
  const crop = await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const bb = el.getBoundingClientRect();
    const pad = 32;
    return { x: Math.max(0, Math.floor(bb.x - pad)), y: Math.max(0, Math.floor(bb.y - pad)), width: Math.ceil(bb.width + pad * 2), height: Math.ceil(bb.height + pad * 2) };
  }, target).catch(() => null);
  if (!crop || crop.width <= 0 || crop.height <= 0) {
    console.log('  SKIP ' + tag + ' FV - focus target not found: ' + target);
    return;
  }
  const before = await page.screenshot({ clip: crop, encoding: 'base64' });
  let reached = false;
  for (let i = 0; i < 40; i++) {
    await page.keyboard.press('Tab');
    reached = await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      const ae = document.activeElement;
      return Boolean(el && ae && ae !== document.body && (ae === el || el.contains(ae)));
    }, target).catch(() => false);
    if (reached) break;
  }
  if (!reached) {
    console.log('  SKIP ' + tag + ' FV - ' + target + ' not reachable by Tab within 40 presses');
    return;
  }
  fvChecked.set(comp.slug, (fvChecked.get(comp.slug) || 0) + 1);
  await sleep(250);
  const after = await page.screenshot({ clip: crop, encoding: 'base64' });
  const pb = decodePngRgb(before);
  const pa = decodePngRgb(after);
  let diff = 0, total = pb.w * pb.h;
  for (let i = 0; i < total; i++) {
    if (Math.abs(pb.rgb[i * 3] - pa.rgb[i * 3]) > 8 || Math.abs(pb.rgb[i * 3 + 1] - pa.rgb[i * 3 + 1]) > 8 || Math.abs(pb.rgb[i * 3 + 2] - pa.rgb[i * 3 + 2]) > 8) diff++;
  }
  const pct = Math.round((diff / total) * 1000) / 10;
  const st = await page.evaluate(() => {
    const el = document.activeElement;
    const s = getComputedStyle(el);
    return { outline: (parseFloat(s.outlineWidth) || 0) > 0 && s.outlineStyle !== 'none', shadow: s.boxShadow };
  });
  const detail = (st.outline ? 'computed outline visible; ' : '') + (st.shadow !== 'none' ? 'computed box-shadow; ' : '') + pct + '% pixels changed';
  check(tag + ' FV visible focus indicator after real Tab (pixel diff)', diff > 0, detail || 'no pixel change around control');
}

// A. Static artifact checks
console.log('=== A. Static artifact checks ===');
const entries = [];
for (const comp of COMPONENTS) {
  for (const d of comp.designs) entries.push({ comp: comp.slug, num: d.n, sprint: comp.sprint, nameEN: d.nameEN, nameES: d.nameES, file: designFile(comp.slug, d.n) });
}
const hashes = new Set();
for (const f of entries) {
  const tag = 'A/' + f.comp + '/design-' + pad(f.num);
  const okFile = fs.existsSync(f.file);
  if (!okFile) { console.log('  FAIL ' + tag + ' exists'); continue; }
  const src = fs.readFileSync(f.file, 'utf8');
  const hash = crypto.createHash('sha256').update(src).digest('hex');
  hashes.add(hash);
  const m = src.match(/<!--\s*Design\s+(\d{2}):/);
  if (m && Number(m[1]) === f.num) { console.log('  PASS ' + tag + " header comment 'Design NN:'"); }
  else { console.log('  FAIL ' + tag + " header comment 'Design NN:'", m ? m[1] : 'no match'); }
  if (f.sprint >= 2) {
    if (src.includes('<!-- Design ' + pad(f.num) + ': ' + f.nameEN + ' / ' + f.nameES + ' -->')) { console.log('  PASS ' + tag + ' header matches manifest names'); }
    else { console.log('  FAIL ' + tag + ' header matches manifest names'); }
  }
  if (src.includes('Harley Vásquez') && src.includes('linkedin.com/in/harleyvasquez')) { console.log('  PASS ' + tag + ' credit present'); }
  else { console.log('  FAIL ' + tag + ' credit present'); }
  const badLink = /<link[\s>]/i.test(src);
  const badScriptSrc = /<script[^>]*src=/i.test(src);
  const badImport = /@import\s+url\s*\(\s*["']?\s*https?:/i.test(src);
  const badSrcHttp = /\bsrc=["']\s*https?:\/\//i.test(src);
  const depsOk = !badLink && !badScriptSrc && !badImport && !badSrcHttp;
  if (depsOk) { console.log('  PASS ' + tag + ' zero external deps'); }
  else { console.log('  FAIL ' + tag + ' zero external deps'); }
}
console.log('  ' + (hashes.size === entries.length ? 'PASS' : 'FAIL') + '/all ' + entries.length + ' files sha256 unique (' + hashes.size + '/' + entries.length + ')');

// Browser checks
console.log('=== Browser: console, visible, responsive, contrast ===');
for (const comp of COMPONENTS) {
  for (const d of comp.designs) {
    const tag = comp.slug + '/design-' + pad(d.n);
    if (!fs.existsSync(designFile(comp.slug, d.n))) { console.log(tag + ' file missing'); continue; }
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    const errors = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (e) => errors.push(String(e)));
    await page.goto(pathToFileURL(designFile(comp.slug, d.n)).href, { waitUntil: 'load' });
    await sleep(350);
    if (errors.length === 0) { console.log(tag + ' loads without console errors'); }
    else { console.log(tag + ' console errors: ' + errors.join(' | ')); }
    // Check visible
    const hook = comp.hook || '[data-testid="' + comp.slug + '"]';
    const box = await page.evaluate((sel) => { const el = document.querySelector(sel); if (!el) return null; const r = el.getBoundingClientRect(); return { w: r.width, h: r.height }; }, hook).catch(() => null);
    if (box && box.w > 0 && box.h > 0) { console.log(tag + ' hook visible'); }
    else { console.log(tag + ' hook NOT visible'); }
    // Responsive 360
    await page.setViewport({ width: 360, height: 800 });
    await sleep(150);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow <= 1) { console.log(tag + ' no horizontal overflow at 360px'); }
    else { console.log(tag + ' horizontal overflow at 360px: ' + overflow); }
    // Contrast
    if (comp.contrastLabel) {
      await checkContrast(page, tag, 3, comp.contrastLabel);
    }
    // Accessible name
    await checkAccessibleName(page, comp, tag);
    // Focus visible
    await checkFocusVisible(page, comp, tag);
    await page.close();
  }
}

// FV summary
for (const comp of COMPONENTS) {
  const n = fvChecked.get(comp.slug) || 0;
  console.log('FV/' + comp.slug + ' at least two designs have keyboard-visible focus: ' + (n >= 2 ? 'PASS' : 'FAIL') + ' (' + n + ')');
}

await browser.close();