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
  const nxt = await page.$('[data-carousel] [data-next]');
  const nb = await nxt.boundingBox();
  console.log('CAR click handle:', await page.evaluate(() => Array.from(document.querySelectorAll('[data-carousel] .slide')).map((s) => s.classList.contains('active')).join(',')));
  await nxt.click();
  await sleep(80);
  console.log('CAR after handle.click:', await page.evaluate(() => Array.from(document.querySelectorAll('[data-carousel] .slide')).map((s) => s.classList.contains('active')).join(',')), 'btnBox', JSON.stringify(nb), 'z', await page.evaluate(() => getComputedStyle(document.querySelector('[data-carousel] [data-next]')).zIndex + ' pe=' + getComputedStyle(document.querySelector('[data-carousel] [data-next]')).pointerEvents));

  await go('sidebar/design-01.html');
  console.log('SB programmatic=', await page.evaluate(() => {
    const b = document.querySelector('[data-testid="toggle"]');
    b.click();
    return { ex: document.querySelector('[data-testid="sidebar"]').getAttribute('aria-expanded') };
  }));
  await go('sidebar/design-01.html');
  const t = await page.$('[data-testid="toggle"]');
  await t.focus();
  await sleep(40);
  console.log('SB ring CSS:', await page.evaluate(() => { const s = document.querySelector('style').textContent; return JSON.stringify({ has: s.includes('toggle') && s.includes('focus-visible'), focused: document.activeElement === document.querySelector('[data-testid="toggle"]') }); }));
  console.log('SB focus style:', await page.evaluate(() => { const b = document.querySelector('[data-testid="toggle"]'); return JSON.stringify({ outline: getComputedStyle(b).outline, boxShadow: getComputedStyle(b).boxShadow.slice(0, 40) }); }));

  await go('navbar/design-01.html');
  await page.setViewport({ width: 380, height: 700 });
  await sleep(60);
  console.log('NB 380px burger:', await page.evaluate(() => { const r = document.querySelector('[data-testid="burger"]')?.getBoundingClientRect(); return r ? { w: Math.round(r.width), h: Math.round(r.height) } : 'missing'; }));

  await go('date-picker/design-01.html');
  console.log('DP cal html:', await page.evaluate(() => (document.querySelector('[data-testid="cal"]') || {}).innerHTML?.slice(0, 700)));

  await go('pagination/design-01.html');
  console.log('PG full script:', await page.evaluate(() => Array.from(document.querySelectorAll('script')).map((s) => s.textContent).join('\n')));

  await go('code-block/design-01.html');
  console.log('CB01 body:', await page.evaluate(() => {
    const el = document.querySelector('[data-testid="code-block"]');
    return JSON.stringify(el ? el.outerHTML.slice(0, 500) : 'MISSING');
  }));

  await go('charts/design-01.html');
  console.log('CH inner:', await page.evaluate(() => (document.querySelector('[data-testid="chart"]') || {}).innerHTML?.slice(-600)));

  const browser2 = await browser.close();
}
main().catch((e) => { console.error(e); process.exit(1); });