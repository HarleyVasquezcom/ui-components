import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = path.resolve('.');

async function main() {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-gpu'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  const wide = async (dir, nums) => {
    for (const n of nums) {
      const f = path.join(ROOT, dir, `design-${String(n).padStart(2, '0')}.html`);
      await page.goto(pathToFileURL(f).href, { waitUntil: 'load' });
      await page.setViewport({ width: 360, height: 800 });
      const r = await page.evaluate(() => {
        const out = [];
        for (const el of document.querySelectorAll('*')) {
          const w = el.getBoundingClientRect().width;
          if (w > 361 || el.scrollWidth > el.clientWidth + 1) {
            out.push({ tag: el.tagName, cls: String(el.className).slice(0, 40), w: Math.round(w), sw: el.scrollWidth, cw: el.clientWidth, x: Math.round(el.getBoundingClientRect().x) });
          }
        }
        return { doc: document.documentElement.scrollWidth, out: out.slice(0, 6) };
      });
      console.log('WIDE', dir + '/' + n, JSON.stringify(r));
    }
  };
  await wide('empty-state', [1, 2, 4, 5, 8]);
  await wide('error-404', [1, 2, 3, 4, 5]);

  const dump = async (dir, n, sel) => {
    const f = path.join(ROOT, dir, `design-${String(n).padStart(2, '0')}.html`);
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(pathToFileURL(f).href, { waitUntil: 'load' });
    const body = await page.evaluate((s) => {
      const el = s ? document.querySelector(s) : document.body;
      return el ? el.textContent.trim().replace(/\s+/g, ' ').slice(0, 500) : 'NULL';
    }, sel);
    console.log('BODY', dir + '/' + n, JSON.stringify(body.slice(0, 400)));
    const scripts = await page.evaluate(() => Array.from(document.querySelectorAll('script')).map((s) => s.textContent.trim().slice(0, 300)));
    console.log('SCR', dir + '/' + n, JSON.stringify(scripts));
  };
  await dump('accordion', 1);
  await dump('confirm-dialog', 1);
  await dump('date-picker', 1);
  await dump('dropdown', 6);
  await dump('filters', 1);
  await dump('grid', 1);
  await dump('infinite-scroll', 1);
  await dump('search-bar', 1);
  await dump('time-picker', 1);
  await dump('timeline', 1);
  await dump('code-block', 1);
  await dump('charts', 1);
  await dump('file-uploader', 1);
  await dump('anchor', 6);
  await dump('carousel', 1);
  await dump('calendar', 1);
  await dump('progress-bar', 6);
  await dump('text-field', 1);
  await dump('tabs', 1);

  await browser.close();
}
main().catch((e) => { console.error(e); process.exit(1); });