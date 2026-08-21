import puppeteer from 'puppeteer';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const ROOT = path.resolve('.');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function main() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-gpu'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  const go = async (f) => { await page.goto(pathToFileURL(path.join(ROOT, f)).href, { waitUntil: 'load' }); await sleep(60); };

  await go('carousel/design-01.html');
  console.log('CAR FULL:', await page.evaluate(() => Array.from(document.querySelectorAll('script')).map((s) => s.textContent).join('\n')));

  await go('pagination/design-01.html');
  await page.evaluate(() => { const l = document.querySelectorAll('[data-testid="pagination"] a[href="#"]')[1]; l.scrollIntoView({ block: 'center' }); });
  await sleep(40);
  const bb = await page.evaluate(() => { const r = document.querySelectorAll('[data-testid="pagination"] a[href="#"]')[1].getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height }; });
  await page.mouse.click(bb.x + bb.w / 2, bb.y + bb.h / 2);
  await sleep(80);
  console.log('PG click2:', await page.evaluate(() => JSON.stringify({ act: document.querySelector('[data-testid="pagination"] .active')?.textContent.trim(), items: Array.from(document.querySelectorAll('.page-item')).map((x) => x.className.split(' ').filter((c) => c !== 'active').join('') + (x.className.includes('active') ? '[A]' : '')).join(',') })));

  await go('sidebar/design-01.html');
  const sbb = await page.evaluate(() => { const r = document.querySelector('[data-testid="toggle"]').getBoundingClientRect(); return { x: r.x, y: r.y, w: r.width, h: r.height }; });
  await page.mouse.click(sbb.x + sbb.w / 2, sbb.y + sbb.h / 2);
  await sleep(80);
  console.log('SB click:', await page.evaluate(() => JSON.stringify({ ex: document.querySelector('[data-testid="sidebar"]').getAttribute('aria-expanded'), open: document.querySelector('[data-testid="sidebar"]').classList.contains('open') })));
  console.log('SB scripts:', await page.evaluate(() => Array.from(document.querySelectorAll('script')).map((s) => s.textContent.slice(0, 160)).join(' || ')));

  await go('navbar/design-01.html');
  await page.setViewport({ width: 600, height: 800 });
  await sleep(40);
  console.log('NB 600px burger box:', await page.evaluate(() => { const r = document.querySelector('[data-testid="burger"]')?.getBoundingClientRect(); return r ? { w: r.width, h: r.height } : 'missing' }));

  await go('date-picker/design-01.html');
  console.log('DP day btn:', await page.evaluate(() => {
    const cal = document.querySelector('[data-testid="cal"]');
    const btns = cal ? Array.from(cal.querySelectorAll('button')).map((b) => b.getAttribute('aria-label') + '|' + b.className).slice(0, 6) : [];
    return JSON.stringify(btns);
  }));

  await go('checkbox/design-06.html');
  console.log('CB06:', await page.evaluate(() => JSON.stringify({ css: Array.from(document.querySelectorAll('style')).map((s) => s.textContent).join('').replace(/\s+/g, ' ').slice(-500), inp: (document.querySelector('[data-testid="cb"] input') || {}).outerHTML?.slice(0, 200) })));

  await go('grid/design-01.html');
  console.log('GR:', await page.evaluate(() => JSON.stringify({ ghtml: (document.querySelector('[data-testid="grid"]') || {}).outerHTML?.slice(0, 240), loadmore: Array.from(document.querySelectorAll('[data-load-more], button')).map((b) => b.outerHTML.slice(0, 120)) })));

  await go('contrast' === 'x' ? 'button/design-01.html' : 'accordion/design-01.html');
  console.log('ACC:', await page.evaluate(() => JSON.stringify({ head: (document.querySelector('.accordion-header') || {}).outerHTML?.slice(0, 160), body: (document.querySelector('.accordion-body, .panel') || {}).outerHTML?.slice(0, 140) })));
  await go('confirm-dialog/design-01.html');
  console.log('CD:', await page.evaluate(() => JSON.stringify(Array.from(document.querySelectorAll('[data-testid="dialog"] button, .dialog button, [data-testid="dialog"]')).map((e) => e.outerHTML.slice(0, 140)))));
  await go('table/design-01.html');
  console.log('TB:', await page.evaluate(() => JSON.stringify((document.querySelector('table') || {}).outerHTML?.slice(0, 400))));
  await go('charts/design-01.html');
  console.log('CH:', await page.evaluate(() => JSON.stringify((document.querySelector('[data-testid="chart"]') || {}).outerHTML?.slice(0, 400))));
  await go('timeline/design-01.html');
  console.log('TM:', await page.evaluate(() => JSON.stringify((document.querySelector('[data-testid="timeline"]') || {}).outerHTML?.slice(0, 400))));
  await go('code-block/design-01.html');
  console.log('CB:', await page.evaluate(() => JSON.stringify((document.querySelector('pre') || {}).outerHTML?.slice(0, 300))));
  await go('icons/design-01.html');
  console.log('IC:', await page.evaluate(() => JSON.stringify(Array.from(document.querySelectorAll('svg')).slice(0, 4).map((s) => s.outerHTML.slice(0, 110)))));

  await browser.close();
}
main().catch((e) => { console.error(e); process.exit(1); });