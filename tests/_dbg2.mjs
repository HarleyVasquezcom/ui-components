import { readFileSync } from 'node:fs';
for (const f of ['confirm-dialog/design-02.html', 'avatar/design-01.html']) {
  const h = readFileSync(f, 'utf8');
  console.log(f, 'dialog-tid>', h.includes('data-testid="dialog"'), 'avatar-tid>', h.includes('data-testid="avatar"'));
}
const s = readFileSync('tests/fix-schema.mjs', 'utf8');
const i = s.indexOf('for (const slug');
console.log('union line>', s.slice(i, i + 200));
const j = s.indexOf("const RULES = {");
console.log('RULES has confirm-dialog>', s.slice(j, s.indexOf('};', j)).includes('confirm-dialog'));