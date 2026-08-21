import { readFileSync, readdirSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: node tests/build-manifest.mjs <ui-components-root>'); process.exit(1); }

// slug -> { sprint, hook, nameTarget, focusTarget, contrastLabel?, designFlags? }
const C = {
  badge:       { sprint: 8, hook: '[data-testid="badge"]', nt: 1, ft: 1, cl: '[data-testid="label"]' },
  tag:         { sprint: 8, hook: '[data-testid="tag"]', nt: 1, ft: 1, cl: '[data-testid="label"]' },
  timeline:    { sprint: 8, hook: '[data-testid="timeline"]', nt: 1, ft: 1, cl: '[data-testid="label"]' },
  charts:      { sprint: 8, hook: '[data-testid="chart"]', nt: 1, ft: 1, cl: '[data-testid="label"]' },
  button:      { sprint: 1, hook: '[data-testid="btn"]', nt: 1, ft: 1 },
  checkbox:    { sprint: 1, hook: '[data-testid="cb"]', nt: '[data-testid="cb"] input', ft: '[data-testid="cb"] input' },
  radio:       { sprint: 1, hook: '[data-testid="group"]', nt: '[data-testid="group"] input[type="radio"]', ft: '[data-testid="group"] input[type="radio"]' },
  switch:      { sprint: 1, hook: '[data-testid="switch"]', nt: 1, ft: 1 },
  'text-field': { sprint: 2, hook: '[data-testid="field"]', nt: 1, ft: 1, cl: '[data-testid="label"]', df: { 6: { floating: true } } },
  'text-area': { sprint: 2, hook: '[data-testid="area"]', nt: 1, ft: 1, cl: '[data-testid="label"]' },
  dropdown:    { sprint: 2, hook: '[data-testid="trigger"]', nt: 1, ft: 1, cl: '[data-testid="label"]', df: { 1: { nativeSelect: true } } },
  'date-picker': { sprint: 2, hook: '[data-testid="trigger"]', nt: 1, ft: 1, cl: '[data-testid="label"]', df: { 4: { dualMonth: true } } },
  'time-picker': { sprint: 3, hook: '[data-testid="trigger"]', nt: 1, ft: 1, cl: '[data-testid="label"]', df: { 5: { amPm: true }, 10: { amPm: true } } },
  slider:      { sprint: 3, hook: '[data-testid="slider"]', nt: 'input[type="range"]', ft: 1, cl: '[data-testid="label"]', df: { 3: { dual: true }, 4: { marks: true }, 5: { vertical: true }, 10: { marks: true } } },
  stepper:     { sprint: 3, hook: '[data-testid="stepper"]', nt: '[data-testid="input"]', ft: 1, cl: '[data-testid="label"]' },
  'file-uploader': { sprint: 3, hook: '[data-testid="dropzone"]', nt: '[data-testid="dropzone"]', ft: '[data-testid="dropzone"]', cl: '[data-testid="label"]', df: { 6: { progress: true }, 10: { progress: true } } },
  'search-bar': { sprint: 4, hook: '[data-testid="search"]', nt: 1, ft: 1, cl: '[data-testid="label"]', df: { 2: { escape: true }, 4: { slash: true }, 6: { ctrlk: true }, 8: { escape: true }, 9: { escape: true } } },
  'color-picker': { sprint: 4, hook: '[data-testid="hex"]', nt: '[data-testid="swatch"], [data-testid="hue"]', ft: '[data-testid="swatch"], [data-testid="hue"]', cl: '[data-testid="label"]', df: { 3: { hue: true }, 4: { hue: true }, 5: { hexin: true }, 7: { hexin: true }, 8: { hue: true }, 9: { hexin: true } } },
  filters:     { sprint: 4, hook: '[data-testid="count"]', nt: '[data-testid="check"], [data-testid="pill"], [data-testid="range"], [data-testid="toggle"], [data-testid="dot"]', ft: '[data-testid="check"], [data-testid="pill"], [data-testid="range"], [data-testid="toggle"], [data-testid="dot"]', cl: '[data-testid="label"]', df: { 2: { control: 'pill', clear: true }, 3: { control: 'range', clear: true }, 4: { control: 'toggle' }, 7: { control: 'pill' }, 9: { control: 'dot', clear: true } } },
  navbar:      { sprint: 4, hook: '[data-testid="link"]', nt: 1, ft: 1, cl: '.brand', df: { 1: { dropdown: true }, 4: { dropdown: true }, 5: { dropdown: true }, 8: { dropdown: true }, 9: { dropdown: true } } },
  hamburger:   { sprint: 5, hook: '[data-testid="hamburger"]', nt: 1, ft: 1 },
  tabs:        { sprint: 5, hook: '[data-testid="tab"]', nt: 1, ft: '[data-testid="tab"]' },
  breadcrumbs: { sprint: 5, hook: '[data-testid="bc-home"]', nt: 1, ft: 1 },
  sidebar:     { sprint: 5, hook: '[data-testid="sidebar"]', nt: 1, ft: '[data-testid="toggle"]' },
  pagination:  { sprint: 6, hook: '[data-testid="pagination"]', nt: 1, ft: '[data-testid="pagination"] button, [data-testid="pagination"] a, [data-testid="pagination"] .page-link' },
  'infinite-scroll': { sprint: 6, hook: '[data-testid="infinite-scroll"]', nt: 1, ft: 1 },
  'bottom-nav': { sprint: 6, hook: '[data-testid="bottom-nav"]', nt: 1, ft: 1 },
  anchor:      { sprint: 6, hook: '[data-testid="anchor"]', nt: 1, ft: 1 },
  toc:         { sprint: 7, hook: '[data-testid="toc"]', nt: '[data-testid="toc-link"]', ft: '[data-testid="toc-link"]', cl: '[data-testid="toc-link"]' },
  card:        { sprint: 7, hook: '[data-testid="card"]', nt: 1, ft: '[data-testid="card-link"]', cl: '[data-testid="card"]' },
  list:        { sprint: 7, hook: '[data-testid="list"]', nt: 1, ft: '[data-testid="list-item"]', cl: '[data-testid="list"]' },
  grid:        { sprint: 7, hook: '[data-testid="grid"]', nt: 1, ft: 1, cl: '[data-testid="grid"]' },
  modal:       { sprint: 11, hook: '[data-testid="modal"]', nt: 1, ft: 1 },
  popover:     { sprint: 11, hook: '[data-testid="popover"]', nt: 1, ft: 1 },
  tooltip:     { sprint: 11, hook: '[data-testid="tooltip"]', nt: 1, ft: 1 },
  'progress-bar': { sprint: 11, hook: '[data-testid="progress-bar"]', nt: 1, ft: '[data-testid="progress-bar"] button, [data-testid="progress-bar"] .progress-btn', cl: '[data-testid="label"]' },
  accordion:   { sprint: 9, hook: '[data-testid="accordion"]', nt: 1, ft: 1 },
  alert:       { sprint: 10, hook: '[data-testid="alert"]', nt: 1, ft: 1 },
  avatar:      { sprint: 9, hook: '[data-testid="avatar"]', nt: 1, ft: 1 },
  blockquote:  { sprint: 9, hook: '[data-testid="blockquote"]', nt: 1, ft: 1 },
  calendar:    { sprint: 10, hook: '[data-testid="calendar"]', nt: 1, ft: 1 },
  carousel:    { sprint: 9, hook: '[data-testid="carousel"]', nt: 1, ft: '[data-testid="carousel"] [data-prev], [data-testid="carousel"] [data-next]' },
  'code-block': { sprint: 10, hook: '[data-testid="code-block"]', nt: 1, ft: '[data-testid="code-block"] [data-copy], [data-testid="code-block"] [data-theme]' },
  'confirm-dialog': { sprint: 12, hook: '[data-testid="dialog"]', nt: 1, ft: '[data-testid="dialog"] button' },
  divider:     { sprint: 13, hook: '[data-testid="divider"]', nt: 1, ft: 1 },
  'empty-state': { sprint: 12, hook: '[data-testid="empty"]', nt: 1, ft: '[data-testid="empty"] .cta' },
  'error-404': { sprint: 12, hook: '[data-testid="error"]', nt: 1, ft: '[data-testid="error"] .cta' },
  footer:      { sprint: 13, hook: '[data-testid="footer"]', nt: 1, ft: '[data-testid="footer"] a' },
  header:      { sprint: 13, hook: '[data-testid="header"]', nt: 1, ft: '[data-testid="header"] a' },
  hero:        { sprint: 13, hook: '[data-testid="hero"]', nt: 1, ft: '[data-testid="hero"] .cta' },
  icons:       { sprint: 14, hook: '[data-testid="icons"]', nt: 1, ft: 1 },
  logo:        { sprint: 14, hook: '[data-testid="logo"]', nt: 1, ft: 1 },
  'media-player': { sprint: 14, hook: '[data-testid="media-player"]', nt: 1, ft: '[data-testid="media-player"] button' },
  spinner:     { sprint: 12, hook: '[data-testid="spinner"]', nt: 1, ft: 1, cl: '[data-testid="label"]' },
  table:       { sprint: 9, hook: '[data-testid="table"]', nt: 1, ft: '[data-testid="table"] button, [data-testid="table"] a' },
  toast:       { sprint: 10, hook: '[data-testid="toast"]', nt: 1, ft: '[data-testid="toast"] button, [data-testid="toast"] a' }
};

const EN = {
  accordion: ['Accordion', 'Alternador'],
  alert: ['Alert', 'Alerta'],
  avatar: ['Avatar', 'Avatar'],
  blockquote: ['Blockquote', 'Bloque de cita'],
  calendar: ['Calendar', 'Calendario'],
  carousel: ['Carousel', 'Carrusel'],
  'code-block': ['Code Block', 'Bloque de código'],
  'confirm-dialog': ['Confirm Dialog', 'Diálogo de confirmación'],
  divider: ['Divider', 'Separador'],
  'empty-state': ['Empty State', 'Estado vacío'],
  'error-404': ['Error 404', 'Error 404'],
  footer: ['Footer', 'Pie de página'],
  header: ['Header', 'Cabecera'],
  hero: ['Hero', 'Hero'],
  icons: ['Icons', 'Iconos'],
  logo: ['Logo', 'Logotipo'],
  'media-player': ['Media Player', 'Reproductor multimedia'],
  spinner: ['Spinner', 'Cargador'],
  table: ['Data Table', 'Tabla de datos'],
  toast: ['Toast', 'Toast']
};

const NAME_PAT = /<!--\s*Design\s+(\d{1,2}):\s*([^/]+?)\s*\/\s*([^>]+?)\s*-->/;
const pad = (n) => String(n).padStart(2, '0');

const components = [];
for (const slug of Object.keys(C)) {
  const dir = join(ROOT, slug);
  if (!statSync(dir).isDirectory()) { console.error(`missing dir ${slug}`); process.exit(1); }
  const files = readdirSync(dir).filter((f) => /^design-\d{2}\.html$/.test(f)).sort();
  if (files.length !== 10) { console.error(`bad design count ${slug}: ${files.length}`); process.exit(1); }
  const conf = C[slug];
  const designs = [];
  for (const f of files) {
    const src = readFileSync(join(dir, f), 'utf8');
    const m = src.match(NAME_PAT);
    if (!m || Number(m[1]) !== Number(f.match(/\d{2}/)[0])) { console.error(`header check failed ${slug}/${f}`); process.exit(1); }
    designs.push({ n: Number(m[1]), nameEN: m[2].trim(), nameES: m[3].trim() });
  }
  designs.sort((a, b) => a.n - b.n);
  const ns = new Set(designs.map((d) => d.nameEN + d.nameES));
  if (ns.size !== 10) { console.error(`non-unique design names in ${slug}`); process.exit(1); }
  const js = {
    slug,
    sprint: conf.sprint,
    nameEN: (EN[slug] || [slug.replace(/-/g, ' ')] )[0],
    nameES: (EN[slug] || [slug.replace(/-/g, ' ')])[1],
    hook: conf.hook,
    nameTarget: conf.nt === 1 ? conf.hook : conf.nt,
    focusTarget: conf.ft === 1 ? conf.nt === 1 ? conf.hook : conf.nt : conf.ft
  };
  if (conf.cl) js.contrastLabel = conf.cl;
  if (conf.df) js.designFlags = conf.df;
  js.designs = designs;
  components.push(js);
}

components.sort((a, b) => a.sprint - b.sprint || a.slug.localeCompare(b.slug));
const manifest = { gallery: { generatedBy: 'tests/gallery-gen.mjs', templateVersion: 1 }, components };
writeFileSync(join(ROOT, 'tests', 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
console.log(`manifest written: ${components.length} components, ${components.reduce((s, c) => s + c.designs.length, 0)} designs`);