import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

const R = (from, to) => [from, to];

const PER_FILE = {
  'tabs/design-03.html': R("add('active')})})();", "add('active')})})})();"),
  'tabs/design-04.html': R("add('active')})})();", "add('active')})})})();"),
  'tabs/design-05.html': R("add('active')})})();", "add('active')})})})();"),
  'tabs/design-06.html': R("add('active')})})();", "add('active')})})})();"),
  'tabs/design-07.html': R("add('active')})})();", "add('active')})})})();"),
  'tabs/design-08.html': R("add('active')})})();", "add('active')})})})();"),
  'tabs/design-09.html': R("add('active')})})();", "add('active')})})})();"),
  'tabs/design-10.html': R("add('active')})})();", "add('active')})})})();"),
  'breadcrumbs/design-01.html': R("(active')})})();", "(active')})})})();"),
  'breadcrumbs/design-02.html': R("(active')})})();", "(active')})})})();"),
  'breadcrumbs/design-03.html': R("(active')})})();", "(active')})})})();"),
  'breadcrumbs/design-04.html': R("(active')})})();", "(active')})})})();"),
  'breadcrumbs/design-05.html': R("(active')})})();", "(active')})})})();"),
  'breadcrumbs/design-06.html': R("(active')})})();", "(active')})})})();"),
  'breadcrumbs/design-07.html': R("(active')})})();", "(active')})})})();"),
  'breadcrumbs/design-09.html': R("(active')})})();", "(active')})})})();"),
  'breadcrumbs/design-10.html': R("(active')})})();", "(active')})})})();"),
  'progress-bar/design-06.html': R("'aria-valuenow',v)},btn.addEventListener", "'aria-valuenow',v)};btn.addEventListener"),
};

const COMMON = [
  ['},else{', '}else{'],
  ["}},t.addEventListener('click',tg),document.addEventListener('keydown'", "}};t.addEventListener('click',tg);document.addEventListener('keydown'"),
  ["toggle('open',o)},t.addEventListener('click',tg),document.addEventListener('keydown'", "toggle('open',o)};t.addEventListener('click',tg);document.addEventListener('keydown'"),
  ["}}),document.addEventListener('focusin'", "}});document.addEventListener('focusin'"),
  ["'none;if(open){", "'none';if(open){"],
  ["const e=document.createElement('span');o.style.display='none';", "const o=document.createElement('span');o.style.display='none';"],
  ['toggle()', 't()'],
  ["active'}},h.addEventListener('click',t),c.addEventListener('click',t),", "active'}};h.addEventListener('click',t);c.addEventListener('click',t);"),
  ["active'},h.addEventListener('click',t),c.addEventListener('click',t),", "active'}};h.addEventListener('click',t);c.addEventListener('click',t);"),
  ["active'}},h.addEventListener('click',t),c.addEventListener('click'),", "active'}};h.addEventListener('click',t);c.addEventListener('click',t);"),
  ["{t()}}),document.addEventListener('click'", "{t()}});document.addEventListener('click'"),
  ['\n    )\n    indicators.forEach', '\n    indicators.forEach'],
  ['active")})})();"', 'active")})})})();"'],
];

let repaired = 0, stillBroken = 0;
const failures = [];

for (const slug of fs.readdirSync(ROOT)) {
  if (!/^[a-z0-9-]+$/.test(slug) || slug === 'tests' || slug === 'node_modules') continue;
  for (const f of fs.readdirSync(path.join(ROOT, slug))) {
    if (!/^design-\d{2}\.html$/.test(f)) continue;
    const p = path.join(ROOT, slug, f);
    const html = fs.readFileSync(p, 'utf8');
    const m = html.match(/<script>([\s\S]*?)<\/script>/);
    if (!m) continue;
    let code = m[1];
    const before = code;
    for (const [from, to] of [...COMMON, ...(PER_FILE[`${slug}/${f}`] ? [PER_FILE[`${slug}/${f}`]] : [])]) {
      if (from && code.includes(from)) code = code.split(from).join(to);
    }
    try { new Function(code); }
    catch (e) { new Function(before); stillBroken++; failures.push({ file: slug + '/' + f, err: e.message.slice(0, 90) }); continue; }
    if (code !== before) {
      fs.writeFileSync(p, html.replace(m[1], code), 'utf8');
      repaired++;
    }
  }
}

console.log('repaired:', repaired, 'stillBroken:', stillBroken);
for (const f of failures) console.log('STILL BROKEN', JSON.stringify(f));