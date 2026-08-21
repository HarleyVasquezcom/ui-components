import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const manifest = JSON.parse(readFileSync(join(here, 'manifest.json'), 'utf8'));
const template = readFileSync(join(here, 'gallery-template.html'), 'utf8');

if (manifest.gallery?.generatedBy !== 'tests/gallery-gen.mjs') {
  console.error('manifest.json: missing/incorrect gallery.generatedBy marker');
  process.exit(1);
}

const pad = (n) => String(n).padStart(2, '0');

// Regenerates index.html for EVERY component in the manifest (all sprints),
// from the shared template + manifest. Deterministic and safe: identical
// inputs produce identical output (idempotency verified by re-running).
const components = manifest.components;
for (const comp of components) {
  const links = comp.designs
    .map((d) => `  <a href="design-${pad(d.n)}.html" data-i="${d.n}">${pad(d.n)} · ${d.nameEN}</a>`)
    .join('\n');
  const html = template
    .split('__TITLE__').join(`${comp.nameEN} — 10 Designs`)
    .split('__TITLE_ES__').join(`${comp.nameES} · 10 diseños`)
    .split('__LINKS__').join(links);
  writeFileSync(join(root, comp.slug, 'index.html'), html, 'utf8');
  console.log(`generated ${comp.slug}/index.html (${comp.designs.length} links)`);
}