import puppeteer from 'puppeteer';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const ROOT = path.resolve('.');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function main() {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-gpu'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  const go = async (f) => { await page.goto(pathToFileURL(path.join(ROOT, f)).href, { waitUntil: 'load' }); await sleep(60); };

  await go('date-picker/design-01.html');
  console.log('DP:', await page.evaluate(() => {
    const cal = document.querySelector('[data-testid="cal"]');
    const cells = cal ? Array.from(cal.querySelectorAll('td, button, [class*="day"]')).slice(0, 6).map((c) => c.className + '|' + c.textContent.trim().slice(0, 4) + '|' + (c.getAttribute('aria-label') || '') + '|tag=' + c.tagName) : ['no cal'];
    return JSON.stringify({ trigger: document.querySelector('[data-testid="trigger"]').outerHTML.slice(0, 200), cur: (document.querySelector('[data-testid="cur"]') || {}).textContent, cells });
  }));

  await go('filters/design-01.html');
  console.log('FL:', await page.evaluate(() => {
    const checks = Array.from(document.querySelectorAll('[data-testid="check"], [data-testid="pill"], .filter-control, [data-filter]')).map((c) => c.outerHTML.slice(0, 140));
    const script = Array.from(document.querySelectorAll('script')).map((s) => s.textContent).join('\n');
    return JSON.stringify({ checks: checks.slice(0, 3), script: script.slice(-800) });
  }));

  await go('file-uploader/design-01.html');
  console.log('FU:', await page.evaluate(() => {
    const list = document.querySelector('[data-testid="list"]');
    return JSON.stringify({ dz: (document.querySelector('[data-testid="dropzone"]') || {}).outerHTML?.slice(0, 220), list: list ? list.outerHTML.slice(0, 260) : 'no list', empty: (document.querySelector('[data-testid="empty"]') || {}).textContent });
  }));

  await go('anchor/design-06.html');
  console.log('AN:', await page.evaluate(() => {
    const a = document.querySelector('[data-testid="anchor"], .anchor');
    return JSON.stringify(a ? { tag: a.outerHTML.slice(0, 260) } : 'no anchor');
  }));

  await go('calendar/design-01.html');
  console.log('CA:', await page.evaluate(() => JSON.stringify(Array.from(document.querySelectorAll('.cal-prev, .cal-next, [data-next], [data-testid="next"], [class*="next"], [class*="prev"], span')).slice(0, 12).map((e) => e.outerHTML.slice(0, 120)))));

  await go('progress-bar/design-06.html');
  console.log('PB:', await page.evaluate(() => JSON.stringify({ html: document.querySelector('[data-testid="progress-bar"]').outerHTML.slice(0, 500) })));

  await go('time-picker/design-01.html');
  console.log('TP:', await page.evaluate(() => JSON.stringify({ popup: (document.querySelector('[data-testid="popup"]') || {}).outerHTML?.slice(0, 300), value: (document.querySelector('[data-testid="value"]') || {}).textContent, display: (document.querySelector('[data-testid="display"]') || {}).textContent, trig: (document.querySelector('[data-testid="trigger"]') || {}).textContent })));

  await go('pagination/design-01.html');
  await page.click('[data-testid="pagination"] a[href="#"]');
  console.log('PG:', await page.evaluate(() => JSON.stringify({ act: document.querySelector('[data-testid="pagination"] .active')?.textContent.trim(), info: document.querySelector('[data-testid="pagination"] .page-info')?.textContent.trim(), items: Array.from(document.querySelectorAll('[data-testid="pagination"] .page-item')).map((x) => x.className + ':' + x.textContent.trim()) })));

  await go('navbar/design-01.html');
  try {
    const t = await page.$('[data-testid="menu-btn"], .burger, [data-menu-btn], [data-testid="burger"]');
    console.log('NB toggle found:', Boolean(t));
    const b = await t.boundingBox();
    await page.mouse.click(b.x + b.width / 2, b.y + b.height / 2);
    await sleep(80);
    console.log('NB after click:', await page.evaluate(() => JSON.stringify({ mobile: (document.querySelector('.mobile, [data-testid="mobile"]') || {}).getBoundingClientRect?.().height, mstyle: (document.querySelector('.mobile, [data-testid="mobile"]') || {}).getAttribute('style') })));
  } catch (e) { console.log('NB crash:', String(e).slice(0, 200)); }

  await go('dropdown/design-01.html');
  console.log('DD:', await page.evaluate(() => JSON.stringify(Array.from(document.querySelectorAll('option')).map((o) => o.value + '=' + o.textContent))));

  await go('carousel/design-01.html');
  console.log('CR before:', await page.evaluate(() => Array.from(document.querySelectorAll('[data-testid="carousel"] .slide')).map((s) => s.classList.contains('active')).join(',')));
  await page.click('[data-testid="carousel"] [data-next]');
  await sleep(80);
  console.log('CR after:', await page.evaluate(() => Array.from(document.querySelectorAll('[data-testid="carousel"] .slide')).map((s) => s.classList.contains('active')).join(',')));

  await go('toc/design-01.html');
  console.log('TOC contrast:', await page.evaluate(() => {
    const el = document.querySelector('[data-testid="toc-link"]');
    return JSON.stringify({ color: getComputedStyle(el).color, bg: getComputedStyle(el.closest('.toc, nav')).backgroundColor });
  }));
  await go('avatar/design-01.html');
  console.log('AV contrast:', await page.evaluate(() => { const a = document.querySelector('.avatar'); return JSON.stringify({ color: getComputedStyle(a).color, bg: getComputedStyle(a).backgroundColor }); }));

  await go('popover/design-01.html');
  console.log('PO:', await page.evaluate(() => JSON.stringify({ trig: (document.querySelector('[data-testid="popover-trigger"], [aria-haspopup], .info, .btn, [data-popover]') || {}).outerHTML?.slice(0, 180), panel: Array.from(document.querySelectorAll('[class*="pop"]')).map((e) => e.outerHTML.slice(0, 120)).slice(0, 3) })));

  await go('list/design-01.html');
  console.log('LS:', await page.evaluate(() => JSON.stringify(Array.from(document.querySelectorAll('[data-testid="list"] > *')).slice(0, 3).map((e) => e.outerHTML.slice(0, 140)))));

  await go('sidebar/design-01.html');
  const crop = await page.evaluate(() => { const el = document.querySelector('[data-testid="toggle"]'); const bb = el.getBoundingClientRect(); return { x: Math.max(0, bb.x - 32), y: Math.max(0, bb.y - 32), width: bb.width + 64, height: bb.height + 64 }; });
  const b1 = await page.screenshot({ clip: crop, encoding: 'base64' });
  for (let i = 0; i < 12; i++) { await page.keyboard.press('Tab'); const on = await page.evaluate(() => document.activeElement === document.querySelector('[data-testid="toggle"]')); if (on) break; }
  await sleep(60);
  const b2 = await page.screenshot({ clip: crop, encoding: 'base64' });
  console.log('SB FV same bytes:', b1 === b2, 'activeEl:', await page.evaluate(() => document.activeElement.outerHTML.slice(0, 100)));

  await browser.close();
}
main().catch((e) => { console.error(e); process.exit(1); });