// Simplified probe runner for Sprint 08 components
import path from 'node:path';
import fs from 'node:fs';
import crypto from 'node:crypto';

const TESTDIR = path.dirname(path.resolve('C:\\Users\\harle\\.traycer\\epics\\e5942e6d-d5e0-4ad4-9241-895c20c62e56\\ui-components\\tests\\probe.mjs'));
const ROOT = path.resolve(TESTDIR, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(TESTDIR, 'manifest.json'), 'utf8'));
const COMPONENTS = manifest.components;

const pad = (n) => String(n).padStart(2, '0');
const designFile = (slug, n) => path.join(ROOT, slug, `design-${pad(n)}.html`);

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
  const headerOk = m && Number(m[1]) === f.num;
  if (headerOk) { console.log('  PASS ' + tag + " header comment 'Design NN:'"); }
  else { console.log('  FAIL ' + tag + " header comment 'Design NN:'", m ? m[1] : 'no match'); }
  if (f.sprint >= 2) {
    const nameOk = src.includes('<!-- Design ' + pad(f.num) + ': ' + f.nameEN + ' / ' + f.nameES + ' -->');
    if (nameOk) { console.log('  PASS ' + tag + ' header matches manifest names'); }
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
console.log('  UNIQUE HASHES: ' + hashes.size + '/' + entries.length + ' - ' + (hashes.size === entries.length ? 'PASS' : 'FAIL'));

// Check specifically for badge, tag, timeline, charts
console.log('\n=== Sprint 08 components ===');
const sprint8 = COMPONENTS.filter(c => c.sprint === 8);
for (const comp of sprint8) {
  console.log('Component: ' + comp.nameEN + ' (slug: ' + comp.slug + ')');
  console.log('  Designs: ' + comp.designs.length);
  for (const d of comp.designs) {
    const f = designFile(comp.slug, d.n);
    const exists = fs.existsSync(f);
    const tag = comp.slug + '/design-' + pad(d.n);
    if (!exists) { console.log('  FAIL ' + tag + ' file missing'); continue; }
    const src = fs.readFileSync(f, 'utf8');
    const hash = crypto.createHash('sha256').update(src).digest('hex');
    const m = src.match(/<!--\s*Design\s+(\d{2}):/);
    const headerOk = m && Number(m[1]) === d.n;
    const creditOk = src.includes('Harley Vásquez') && src.includes('linkedin.com/in/harleyvasquez');
    const depsOk = !/<link[\s>]/i.test(src) && !/<script[^>]*src=/i.test(src) && !/@import\s+url\s*\(\s*["']?\s*https?:/i.test(src) && !/\bsrc=["']\s*https?:\/\//i.test(src);
    console.log('  Design ' + d.n + ': ' + (exists ? 'EXISTS' : 'MISSING') + ' header=' + (headerOk ? 'OK' : 'FAIL') + ' credit=' + (creditOk ? 'OK' : 'FAIL') + ' deps=' + (depsOk ? 'OK' : 'FAIL'));
    if (!hashes.has(hash)) hashes.add(hash);
  }
}
console.log('\nTotal unique hashes across Sprint 08: ' + hashes.size + '/' + (sprint8.reduce((sum, c) => sum + c.designs.length, 0)));