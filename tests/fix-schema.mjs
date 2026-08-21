import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: node tests/fix-schema.mjs <ui-components-root>'); process.exit(1); }

const CREDIT = '<footer class="credit">Harley Vásquez · <a href="https://www.linkedin.com/in/harleyvasquez" target="_blank" rel="noreferrer">linkedin.com/in/harleyvasquez</a></footer>';
const CREDIT_RE = /Harley Vásquez[\s\S]{0,200}linkedin\.com\/in\/harleyvasquez/;
const pad2 = (n) => String(Number(n)).padStart(2, '0');

const RULES = {
  accordion:      { cls: 'accordion', tid: 'accordion', label: 'Accordion design' },
  alert:          { cls: 'alert', tid: 'alert', label: 'Alert design' },
  anchor:         { cls: 'anchor', tid: 'anchor', label: 'Anchor section link' },
  avatar:         { cls: 'avatar', tid: 'avatar', label: 'Avatar design' },
  badge:          { cls: 'badge', tid: 'badge', label: null },
  blockquote:     { cls: 'blockquote', tid: 'blockquote', label: 'Blockquote design' },
  'bottom-nav':   { cls: 'bottom-nav', tid: 'bottom-nav', label: 'Bottom navigation' },
  calendar:       { cls: 'calendar', tid: 'calendar', label: 'Calendar design' },
  card:           { cls: 'card', tid: 'card', label: 'Card design' },
  charts:         { cls: 'chart', tid: 'chart', label: 'Chart design' },
  'code-block':   { cls: 'code-block', tid: 'code-block', label: 'Code block', altCls: 'code' },
  'confirm-dialog': { cls: 'dialog', tid: 'dialog', label: 'Confirm dialog' },
  divider:        { cls: 'divider', tid: 'divider', label: 'Divider design' },
  'empty-state':  { cls: 'empty', tid: 'empty', label: 'Empty state' },
  'error-404':    { cls: 'error', tid: 'error', label: '404 page' },
  footer:         { cls: 'footer', tid: 'footer', label: 'Page footer' },
  grid:           { cls: 'grid', tid: 'grid', label: 'Responsive grid' },
  header:         { cls: 'header', tid: 'header', label: 'Page header' },
  hero:           { cls: 'hero', tid: 'hero', label: 'Hero section' },
  icons:          { cls: 'icons', tid: 'icons', label: 'Icon set' },
  list:           { cls: 'list-item', tid: 'list', label: 'List design' },
  logo:           { clsPrefix: 'logo-', tid: 'logo', label: 'Brand logo' },
  'media-player': { cls: 'media-player', tid: 'media-player', label: 'Media player' },
  modal:          { cls: 'modal', tid: 'modal', label: 'Modal design' },
  popover:        { cls: 'popover', tid: 'popover', label: 'Popover design' },
  spinner:        { cls: 'spinner', tid: 'spinner', label: 'Loader design' },
  table:          { cls: 'table', tid: 'table', label: 'Sample data table', tagFallback: 'table' },
  tag:            { cls: 'tag', tid: 'tag', label: null },
  timeline:       { cls: 'timeline', tid: 'timeline', label: 'Timeline design' },
  toc:            { cls: 'toc', tid: 'toc', label: 'Table of contents' },
  tooltip:        { cls: 'tooltip-wrapper', tid: 'tooltip', label: 'Tooltip design' },
  toast:          { cls: 'toast', tid: 'toast', label: 'Toast notification' }
};

const EXTRAS = {
  breadcrumbs: [
    { cls: 'bc-home', tid: 'bc-home', label: 'Breadcrumb home' }
  ],
  tabs: [
    { cls: 'tab', tid: 'tab', label: 'Tab' }
  ],
  sidebar: [
    { cls: 'sidebar', tid: 'sidebar', label: 'Sidebar' },
    { cls: 'toggle', tid: 'toggle', label: null }
  ],
  pagination: [
    { cls: 'pagination-wrapper', tid: 'pagination', label: 'Pagination' }
  ],
  'infinite-scroll': [
    { cls: 'grid', tid: 'infinite-scroll', label: 'Infinite scroll list' }
  ],
  'progress-bar': [
    { cls: 'progress-wrapper', tid: 'progress-bar', label: 'Progress bar' },
    { clsContains: 'label', tid: 'label', label: null }
  ]
};

function insertTag(html, rule) {
  if (!rule || !rule.cls) return html;
  const needle = `class="${rule.cls}"`;
  let found = html.indexOf(needle);
  if (found < 0) {
    if (rule.altCls) {
      const altNeedle = `class="${rule.altCls}"`;
      found = html.indexOf(altNeedle);
      if (found < 0) return html;
      return insertTagAt(html, found, altNeedle.length, rule);
    }
    return html;
  }
  return insertTagAt(html, found, needle.length, rule);
}

function insertTagAt(html, found, len, rule) {
  const seg = html.slice(found, found + len + 60);
  let attrs = `data-testid="${rule.tid}"`;
  if (rule.label && !/aria-label=/.test(seg)) attrs += ` aria-label="${rule.label}"`;
  if (/data-testid=/.test(seg)) {
    if (rule.label && !/aria-label=/.test(seg)) {
      return html.slice(0, found + len) + ` aria-label="${rule.label}"` + html.slice(found + len);
    }
    return html;
  }
  return html.slice(0, found + len) + ` ${attrs}` + html.slice(found + len);
}

function fixCard(html) {
  let h = html;
  const m = h.match(/<article class="card"/);
  if (m && !/id="card-1"/.test(h.slice(m.index, m.index + 60))) {
    h = h.slice(0, m.index) + '<article class="card" id="card-1"' + h.slice(m.index + '<article class="card"'.length);
  }
  const l = h.match(/<a class="card-link" href="#">/);
  if (l) h = h.replace(l[0], '<a class="card-link" href="#card-1" data-testid="card-link">');
  return h;
}

let stats = { files: 0, headers: 0, credits: 0, testids: 0, titles: 0 };

for (const slug of readdirSync(ROOT).filter((n) => /^[a-z0-9-]+$/.test(n)).filter((n) => !['tests', 'node_modules'].includes(n)).sort()) {
  const dir = join(ROOT, slug);
  if (!existsSync(dir)) { console.log(`SKIP: no dir ${slug}`); continue; }
  let n = 0;
  for (const f of readdirSync(dir).filter((x) => /^design-\d{2}\.html$/.test(x)).sort()) {
    const p = join(dir, f);
    let html = readFileSync(p, 'utf8');
    const orig = html;
    stats.files++; n++;

    if (!/<!-- Design \d{1,2}: [^>]+ -->/.test(html)) {
      html = html.replace(/<body/i, '<!-- Design X: ? / ? -->\n<body');
      stats.headers++;
    }
    if (/<title>[^<]*<\/style>/.test(html)) {
      html = html.replace(/<title>([^<]*)<\/style>/, '<title>$1</title>');
      stats.titles++;
    }
    if (!/<title>[^<]*<\/title>/.test(html) && /<head>/.test(html)) {
      const hm = html.match(/<!--\s*Design\s+(\d{1,2}):\s*([^<]+?)\s*\/\s*[^>]+-->/);
      const title = hm ? `${hm[2].trim()} — Design ${pad2(hm[1])}` : 'Design';
      html = html.replace(/<head>/, `<head>\n<title>${title}</title>`);
      stats.titles++;
    }
    if (!CREDIT_RE.test(html) && /<\/body>/.test(html)) {
      html = html.replace(/<\/body>/, `${CREDIT}\n</body>`);
      stats.credits++;
    }
    const rule = RULES[slug];
    if (rule && !html.includes(`data-testid="${rule.tid}"`)) {
      html = insertTag(html, rule);
      if (html.includes(`data-testid="${rule.tid}"`)) stats.testids++;
    }
    if (EXTRAS[slug]) for (const ex of EXTRAS[slug]) {
      if (ex.clsContains) {
        const m = html.match(new RegExp(`class="([a-z0-9-]*${ex.clsContains}[a-z0-9-]*)"`));
        if (m && !html.includes(`data-testid="${ex.tid}"`)) {
          html = insertTagAt(html, m.index, m[0].length, { tid: ex.tid, label: ex.label });
          if (html.includes(`data-testid="${ex.tid}"`)) stats.testids++;
        }
      } else if (!html.includes(`data-testid="${ex.tid}"`)) {
        html = insertTag(html, ex);
        if (html.includes(`data-testid="${ex.tid}"`)) stats.testids++;
      }
    }
    if (slug === 'card') html = fixCard(html);
    if (html !== orig) writeFileSync(p, html, 'utf8');
  }
  if (n !== 10) console.log(`  ${slug}: ${n} design files (expected 10)`);
}

const sidebar10 = join(ROOT, 'sidebar', 'design-10.html');
if (existsSync(sidebar10)) {
  let h = readFileSync(sidebar10, 'utf8');
  const newHeader = '<!-- Design 10: Drawer Overlay / Cajón Superpuesto -->';
  if (!h.includes(newHeader)) {
    h = h.replace(/<!-- Design 10: [^>]* -->/, newHeader);
    writeFileSync(sidebar10, h, 'utf8');
    stats.headers++;
  }
}

console.log(`fixed: files=${stats.files} headers=${stats.headers} credits=${stats.credits} testids=${stats.testids} titles=${stats.titles}`);
console.log('--- assertion pass ---');
const allComps = readdirSync(ROOT).filter((n) => /^[a-z0-9-]+$/.test(n)).filter((n) => !['tests', 'node_modules'].includes(n)).sort();
let issues = 0;
for (const slug of allComps) {
  const dir = join(ROOT, slug);
  const files = readdirSync(dir).filter((f) => /^design-\d{2}\.html$/.test(f)).sort();
  if (files.length !== 10) { console.log(`  ${slug}: ${files.length} design files (expected 10)`); issues++; }
  for (const f of files) {
    const html = readFileSync(join(dir, f), 'utf8');
    const bp = html.indexOf('<body');
    if (bp < 0) { console.log(`  ${slug}/${f}: NO BODY`); issues++; continue; }
    if (!/<!-- Design \d{1,2}: [^/]+ \/ [^>]+ -->/.test(html)) { console.log(`  ${slug}/${f}: BAD HEADER`); issues++; }
    if (!/<title>[^<]*<\/title>/.test(html)) { console.log(`  ${slug}/${f}: BAD TITLE`); issues++; }
    if (!CREDIT_RE.test(html)) { console.log(`  ${slug}/${f}: MISSING CREDIT`); issues++; }
    const rule = RULES[slug];
    if (rule && !html.includes(`data-testid="${rule.tid}"`)) { console.log(`  ${slug}/${f}: MISSING ${rule.tid}`); issues++; }
    if (EXTRAS[slug]) for (const ex of EXTRAS[slug]) {
      if (ex.clsContains) continue;
      if (!html.includes(`data-testid="${ex.tid}"`)) { console.log(`  ${slug}/${f}: MISSING ${ex.tid}`); issues++; }
    }
  }
}
console.log(`assertion done, issues=${issues}`);