// Part 3 of the probe: main driver. Merges handlers, runs the B battery
// (one page per component, all 10 designs) and C interactions (samples 1,6),
// then prints the G summary and exits 1 when any check failed.
import { pathToFileURL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  INTERACTIONS as INT1, check, sleep, pad, checkContrast, checkAXCrossCheck,
  checkFocusVisible, checkVisible, checkResponsive360, checkAccessibleName,
  browser, pass, fail, problems, T0,
} from './probe-1.mjs';
import { INTERACTIONS as INT2, staticVerdict } from './probe-2.mjs';

const TESTDIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(TESTDIR, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(TESTDIR, 'manifest.json'), 'utf8'));
const COMPONENTS = manifest.components;
const ALL = { ...INT1, ...INT2 };

console.log('=== B. Per-design battery (one page per component) ===');
const FV_SAMPLE = new Set([1, 6, 9]);
const HEAVY_SAMPLE = new Set([1]);
const AX_SAMPLE = new Set([1]);

for (const comp of COMPONENTS) {
  const errors = [];
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  page.on('pageerror', (e) => errors.push('pageerror: ' + String(e).slice(0, 120)));
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push('console: ' + msg.text().slice(0, 120)); });

  for (const d of comp.designs) {
    const file = path.join(ROOT, comp.slug, `design-${pad(d.n)}.html`);
    const tag = 'B/' + comp.slug + '/design-' + pad(d.n);
    errors.length = 0;
    if (!fs.existsSync(file)) { check(tag + ' file exists', false); continue; }
    await page.goto(pathToFileURL(file).href, { waitUntil: 'load' }).catch((e) => check(tag + ' loads without network error', false, String(e).slice(0, 80)));
    await sleep(50);
    const zeroErrors = errors.length === 0;
    check(tag + ' no console errors', zeroErrors, errors.join(' | '));
    await checkVisible(page, comp.nameTarget, tag);
    await checkAccessibleName(page, comp, tag);
    await checkResponsive360(page, tag);
    await page.setViewport({ width: 1280, height: 900 });
    if (HEAVY_SAMPLE.has(d.n)) {
      await checkContrast(page, tag, comp.contrastLabel || comp.nameTarget);
    }
    if (AX_SAMPLE.has(d.n)) {
      await checkAXCrossCheck(page, comp, tag);
    }
    if (FV_SAMPLE.has(d.n) && comp.focusTarget) {
      await checkFocusVisible(page, comp, tag + ' FV');
    }
  }

  console.log('=== C. Interactions: ' + comp.slug + ' ===');
  const handler = ALL[comp.slug] || staticVerdict(comp.slug);
  for (const sn of [1, 6]) {
    const file = path.join(ROOT, comp.slug, `design-${pad(sn)}.html`);
    const tag = 'C/' + comp.slug + '/design-' + pad(sn);
    errors.length = 0;
    if (!fs.existsSync(file)) { check(tag + ' sample exists', false); continue; }
    await page.goto(pathToFileURL(file).href, { waitUntil: 'load' }).catch(() => {});
    await sleep(50);
    check(tag + ' no console errors (interaction)', errors.length === 0, errors.join(' | '));
    try {
      await handler(page, sn, tag, comp);
    } catch (e) {
      check(tag + ' interaction handler ran without crash', false, String(e && e.message || e).slice(0, 100));
    }
  }
  await page.close();

  console.log('[' + (Math.round((Date.now() - T0) / 1000)) + 's] ' + comp.slug + ' done');
}

console.log('=== G. Summary ===');
const duration = Math.round((Date.now() - T0) / 1000);
console.log(JSON.stringify({ pass, fail, durationSec: duration }));
for (const p of problems) console.log('FAIL: ' + p);
await browser.close();
process.exit(fail > 0 ? 1 : 0);