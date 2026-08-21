import { readFileSync, writeFileSync } from 'node:fs';
const CREDIT = '<footer class="credit">Harley Vásquez · <a href="https://www.linkedin.com/in/harleyvasquez" target="_blank" rel="noreferrer">linkedin.com/in/harleyvasquez</a></footer>';
const CREDIT_RE = /Harley Vásquez[\s\S]{0,200}linkedin\.com\/in\/harleyvasquez/;
let html = readFileSync('confirm-dialog/design-01.html', 'utf8');
console.log('hasBody>', /<\/body>/.test(html), 're>', CREDIT_RE.test(html));
html = html.replace(/<\/body>/, `${CREDIT}\n</body>`);
writeFileSync('confirm-dialog/design-01.html', html, 'utf8');
console.log('after>', readFileSync('confirm-dialog/design-01.html', 'utf8').includes('Harley Vásquez'));