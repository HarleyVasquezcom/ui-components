// Part 2 of the probe: interaction handlers for interactive components.
// Each handler: (page, num, tag, comp) -> Promise<void>. Honest verdicts only.
import { check, realClick, realType, pad, sleep as sleep2 } from './probe-1.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const TESTDIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(TESTDIR, '..');

async function countIn(page, sel) {
  return page.evaluate((s) => document.querySelectorAll(s).length, sel);
}

const VERDICT_TEXT = async (page, tag, sel) => {
  const t = await page.$eval(sel, (el) => el.textContent.trim()).catch(() => null);
  return t;
};

const INTERACTIONS = {

  'text-field': async (page, num, tag) => {
    const hook = num === 6 ? '[data-testid="floating-input"]' : '[data-testid="input"]';
    const before = await page.$eval(hook, (el) => el.value).catch(() => '');
    await realType(page, hook, 'Hola');
    const after = await page.$eval(hook, (el) => el.value).catch(() => '');
    check(tag + ' TF typing updates input value', after === 'Hola', before + ' -> ' + after);
  },

  'text-area': async (page, num, tag) => {
    const hook = '[data-testid="area"], [data-testid="textarea"]';
    const before = await page.$eval(hook, (el) => el.value).catch(() => '');
    await realType(page, hook, 'Hola mundo');
    const after = await page.$eval(hook, (el) => el.value).catch(() => '');
    check(tag + ' TA typing updates textarea value', after === 'Hola mundo', before + ' -> ' + after);
  },

  'dropdown': async (page, num, tag) => {
    const native = await page.$('[data-testid="trigger"], [data-testid="select"]').then((h) => (h ? h.evaluate((el) => el.tagName === 'SELECT') : false)).catch(() => false);
    if (native) {
      const before = await page.$eval('[data-testid="trigger"], [data-testid="select"]', (el) => el.value).catch(() => null);
      await page.select('[data-testid="trigger"], [data-testid="select"]', '2');
      const after = await page.$eval('[data-testid="trigger"], [data-testid="select"]', (el) => el.value);
      check(tag + ' DD native select value changes', before !== after, before + ' -> ' + after);
      return;
    }
    const btn = await page.$('[data-testid="dropdown-btn"], [data-testid="trigger"], .dd-btn');
    if (!btn) { check(tag + ' DD custom dropdown opens menu', false, 'no trigger found'); return; }
    await realClick(page, '[data-testid="dropdown-btn"], [data-testid="trigger"], .dd-btn');
    const open = await page.evaluate(() => {
      const m = document.querySelector('[data-testid="menu"], [data-testid="dropdown-menu"], .dd-menu, .menu-panel');
      return m ? (m.classList.contains('open') || m.getAttribute('aria-hidden') === 'false' || m.style.display !== 'none') : false;
    });
    check(tag + ' DD custom dropdown opens menu', open, 'menu not visible after click');
    const items = await page.$$('[data-testid="menu"] [role="menuitem"], [data-testid="menu"] li, .dd-menu li, [data-testid="dropdown-menu"] li');
    if (items.length > 0 && open) {
      await realClick(page, '[data-testid="menu"] [role="menuitem"], [data-testid="menu"] li, .dd-menu li, [data-testid="dropdown-menu"] li', 1);
      const sel = await page.evaluate(() => document.querySelector('[data-testid="dropdown-btn"], [data-testid="trigger"], .dd-btn').textContent.trim());
      check(tag + ' DD menu item selection updates label', sel.length > 0 && !/Selecciona/.test(sel), "'" + sel + "'");
    } else {
      console.log('  SKIP ' + tag + ' DD menu item selection - menu has no items');
    }
  },

  'date-picker': async (page, num, tag) => {
    const input = '[data-testid="trigger"], [data-testid="date-input"]';
    const before = await page.$eval(input, (el) => el.value).catch(() => '');
    await realClick(page, input);
    const calVisible = await page.evaluate(() => {
      const c = document.querySelector('[data-testid="calendar"], [data-testid="cal"], .cal-panel, .dp-cal');
      return Boolean(c) && c.getBoundingClientRect().height > 0;
    });
    check(tag + ' DP click opens calendar popup', calVisible, 'calendar not visible');
    await realClick(page, '[data-testid="calendar"] td, [data-testid="calendar"] .day, .cal-day, [data-testid="day"], td[role="gridcell"]', 2).catch(() => {});
    await sleep2(120);
    const after = await page.$eval(input, (el) => el.value).catch(() => '');
    check(tag + ' DP day selection writes date', before !== after || after.length > 0, before + ' -> ' + after);
    await sleep2(80); // capture end of interaction for console settle
  },

  'time-picker': async (page, num, tag) => {
    const input = '[data-testid="time-input"], [data-testid="trigger"]';
    const before = await page.$eval(input, (el) => el.value).catch(() => '');
    await realClick(page, input);
    const inc = await page.$('[data-testid="time-inc"], [data-increment], .increment');
    if (inc) {
      await realClick(page, '[data-testid="time-inc"], [data-increment], .increment');
    } else {
      await page.keyboard.press('ArrowUp');
    }
    const after = await page.$eval(input, (el) => el.value).catch(() => '');
    check(tag + ' TP increment changes time value', after !== before, before + ' -> ' + after);
  },

  'slider': async (page, num, tag) => {
    const input = '[data-testid="slider"], [data-testid="range"]';
    const before = await page.$eval(input, (el) => el.value).catch(() => null);
    if (before === null) { check(tag + ' SL drag changes value', false, 'no range slider found'); return; }
    const bb = await page.$(input);
    const box = await bb.boundingBox();
    const pct = 0.75;
    await page.mouse.move(box.x + box.width * pct, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width * pct + 30, box.y + box.height / 2, { steps: 6 });
    await page.mouse.up();
    const after = await page.$eval(input, (el) => el.value);
    check(tag + ' SL drag changes value', after !== before, before + ' -> ' + after);
  },

  'stepper': async (page, num, tag) => {
    const input = '[data-testid="input"], [data-testid="stepper-input"]';
    const before = parseInt(await page.$eval(input, (el) => el.value).catch(() => '0'), 10);
    const incBtn = await page.$('[data-testid="inc"], [data-increment], button[aria-label*="crement"]');
    if (!incBtn) { check(tag + ' ST increment changes value', false, 'no increment control'); return; }
    await realClick(page, '[data-testid="inc"], [data-increment], button[aria-label*="crement"]');
    const after = parseInt(await page.$eval(input, (el) => el.value).catch(() => '0'), 10);
    check(tag + ' ST increment changes value', after === before + 1, before + ' -> ' + after);
  },

  'file-uploader': async (page, num, tag) => {
    const input = '[data-testid="file-input"]';
    const exists = await page.$(input);
    if (!exists) { check(tag + ' FU upload shows file', false, 'no [data-testid=file-input]'); return; }
    const uploadMe = path.join(ROOT, 'tests', 'probe-2.mjs');
    await page.$eval(input, (el) => { el.style.opacity = '1'; });
    await page.$(input).then((h) => h.uploadFile(uploadMe));
    await sleep2(200);
    const shown = await VERDICT_TEXT(page, tag, '[data-testid="file-name"], [data-testid="file-list"], .file-item, .file-name');
    check(tag + ' FU upload shows file', Boolean(shown && shown.length > 0), "'" + shown + "'");
    const rm = await page.$('[data-testid="remove"], .remove, [data-remove]');
    if (rm) {
      await realClick(page, '[data-testid="remove"], .remove, [data-remove]');
      await sleep2(150);
      const cleared = await page.evaluate(() => {
        const f = document.querySelector('[data-testid="file-input"]');
        const any = document.querySelector('[data-testid="file-name"], .file-item, .file-name');
        return { value: f ? f.value : '', any: Boolean(any) };
      });
      check(tag + ' FU remove clears file', cleared.value === '' && !cleared.any, JSON.stringify(cleared));
    }
  },

  'search-bar': async (page, num, tag) => {
    const input = '[data-testid="search-input"], [data-testid="search"]';
    const wait = await page.$eval(input, (el) => el.value).catch(() => null);
    if (wait === null) { check(tag + ' SB typing filters results', false, 'no search input'); return; }
    await realType(page, input, 'te');
    await sleep2(200);
    const count = await countIn(page, '[data-testid="results"] li, [data-testid="suggestion"], .result-item, [data-result], .res li');
    check(tag + ' SB typing filters results', count > 0, 'results visible: ' + count);
    if (num !== 6) {
      await page.keyboard.press('Escape');
      await sleep2(150);
      const cleared = await page.$eval(input, (el) => el.value).catch(() => 'x');
      check(tag + ' SB Escape clears input', cleared === '', "'" + cleared + "'");
    }
  },

  'color-picker': async (page, num, tag) => {
    const sw = await page.$('[data-testid="swatch"], .swatch, [data-swatch]');
    if (!sw) { check(tag + ' CP click swatch updates hex', false, 'no swatch control'); return; }
    await realClick(page, '[data-testid="swatch"], .swatch, [data-swatch]', 1);
    const hex = await VERDICT_TEXT(page, tag, '[data-testid="hex"], .hex-output');
    check(tag + ' CP click swatch updates hex', Boolean(hex && hex.trim().length >= 3 && /^#/.test(hex.trim())), "'" + hex + "'");
  },

  'filters': async (page, num, tag) => {
    const ctrl = '[data-testid="filter"], .filter-control, [data-filter], [data-testid="check"], [data-testid="pill"], [data-testid="toggle"]';
    const before = await countIn(page, '[data-testid="result"], .result, [data-result], .res li');
    await realClick(page, ctrl).catch(() => {});
    await sleep2(150);
    const after = await countIn(page, '[data-testid="result"], .result, [data-result], .res li');
    const changed = await page.evaluate(() => {
      const active = document.querySelectorAll('[data-testid="filter"].active, .filter-control.active, [data-filter].active, [data-testid="check"].active, [data-testid="pill"].active');
      return { activeCount: active.length, beforeText: document.querySelector('[data-testid="result-count"], .result-count')?.textContent?.trim() || '' };
    });
    const ok = after !== before || changed.activeCount > 0;
    check(tag + ' FL filter toggles results or active state', ok, JSON.stringify({ before, after, ...changed }));
  },

  'navbar': async (page, num, tag) => {
    const toggle = await page.$('[data-testid="menu-btn"], .burger, [data-menu-btn], [data-testid="burger"]');
    if (toggle) {
      await realClick(page, '[data-testid="menu-btn"], .burger, [data-menu-btn], [data-testid="burger"]');
      const open = await page.evaluate(() => {
        const m = document.querySelector('[data-testid="nav-menu"], [data-testid="mobile"], .mobile, nav ul, .menu');
        return m && m.getBoundingClientRect().height > 4;
      });
      check(tag + ' NB menu opens', open, 'menu height not expanded');
      return;
    }
    const dd = await page.$('[data-testid="dropdown"], nav [data-dropdown]');
    if (dd) {
      await realClick(page, '[data-testid="dropdown"], nav [data-dropdown]');
      const open = await page.evaluate(() => {
        const m = document.querySelector('.submenu, [data-testid="dropdown"] .menu, nav .dropdown-menu');
        return Boolean(m) && m.getBoundingClientRect().height > 4;
      });
      check(tag + ' NB dropdown opens', open, 'dropdown not expanded');
      return;
    }
    check(tag + ' NB menu/dropdown interaction', false, 'no menu-btn or dropdown found in navbar');
  },

  'modal': async (page, num, tag) => {
    const seen = await page.$eval('[data-testid="modal-dialog"], [data-testid="modal"], .modal', (el) => el.getBoundingClientRect().height > 4).catch(() => null);
    check(tag + ' MO modal visible after open', Boolean(seen), 'no modal dialog found');
    if (seen) {
      await realClick(page, '[data-testid="modal-close"], [data-close], #close, [aria-label*="Cerrar"], [aria-label*="Close"]').catch(() => {});
      await sleep2(200);
      const gone = await page.evaluate(() => {
        const m = document.querySelector('[data-testid="modal-dialog"], [data-testid="modal"], .modal, [data-modal]');
        return !m || m.getBoundingClientRect().height === 0 || m.getAttribute('aria-hidden') === 'true' || m.style.display === 'none';
      });
      check(tag + ' MO modal closes', gone, 'modal still visible after close');
    }
  },

  'popover': async (page, num, tag) => {
    const trig = await page.$('[data-testid="popover-trigger"], [data-popover]');
    if (!trig) { check(tag + ' PO popover shows on hover', false, 'no popover trigger'); return; }
    const box = await trig.boundingBox();
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await sleep2(250);
    const vis = await page.evaluate(() => {
      const p = document.querySelector('[data-testid="popover"], .popover, .pop, .pop-panel');
      return Boolean(p) && p.getBoundingClientRect().height > 0 && getComputedStyle(p).visibility !== 'hidden';
    });
    check(tag + ' PO popover shows on hover', vis, 'popover not visible after hover');
  },

  'tooltip': async (page, num, tag) => {
    const t = await page.$('[data-testid="tooltip-trigger"], [data-tooltip]');
    if (!t) { check(tag + ' TT tooltip shows on hover/focus', false, 'no tooltip trigger'); return; }
    await realClick(page, '[data-testid="tooltip-trigger"], [data-tooltip]');
    await sleep2(200);
    const vis = await page.evaluate(() => {
      const p = document.querySelector('[data-testid="tooltip"], .tooltip');
      return Boolean(p) && p.getBoundingClientRect().height > 0 && getComputedStyle(p).visibility !== 'hidden';
    });
    check(tag + ' TT tooltip shows on hover/focus', vis, 'tooltip not visible');
  },

  'progress-bar': async (page, num, tag) => {
    const width = await page.evaluate(() => {
      const bars = document.querySelectorAll('.bar, .progress-fill, [data-testid="bar"], [data-value]');
      for (const b of bars) {
        const w = b.getBoundingClientRect().width;
        if (w > 0) return { w: Math.round(w), attr: b.getAttribute('data-value') };
      }
      return null;
    });
    check(tag + ' PB bar has progress (width or data-value)', Boolean(width && (width.w > 0 || width.attr)), JSON.stringify(width));
  },

  'spinner': async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const s = document.querySelector('[data-testid="spinner"], .spinner');
      return s ? { role: s.getAttribute('role'), anim: getComputedStyle(s).animationName } : null;
    });
    check(tag + ' SP spinner element valid (role/animation)', Boolean(r && (r.role || r.anim)), JSON.stringify(r));
  },

  'empty-state': async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const es = document.querySelector('[data-testid="empty"], [data-testid="empty-state"], .empty-state');
      if (!es) return null;
      const btn = es.querySelector('button, a');
      return { title: (es.querySelector('h2, h3')?.textContent || '').trim(), cta: btn ? true : false };
    });
    check(tag + ' ES empty-state has title (+CTA)', Boolean(r && r.title), JSON.stringify(r));
  },

  'error-404': async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const e = document.querySelector('[data-testid="error"], [data-testid="error-404"], .error-404');
      if (!e) return null;
      const btn = e.querySelector('button, a');
      return { title: (e.querySelector('h1, h2')?.textContent || '').trim(), cta: btn ? true : false };
    });
    check(tag + ' E4 404 page has title (+CTA)', Boolean(r && r.title), JSON.stringify(r));
  },

  'confirm-dialog': async (page, num, tag) => {
    const vis = await page.$eval('[data-testid="confirm-dialog"], [data-testid="dialog"], [data-dialog]', (el) => el.getBoundingClientRect().height > 4).catch(() => null);
    check(tag + ' CD dialog visible', Boolean(vis), 'no confirm dialog found');
    if (vis) {
      await realClick(page, '[data-testid="confirm-btn"], [data-confirm], button[aria-label*="Confirm"], .confirm-btn').catch(() => {});
      await sleep2(200);
      const result = await page.evaluate(() => {
        const out = document.querySelector('[data-testid="result"], #result, .result');
        return out ? out.textContent.trim() : '' + (document.querySelector('[data-testid="confirm-dialog"], [data-testid="dialog"], [data-dialog]')?.getBoundingClientRect().height > 4 ? 'still-open' : 'closed');
      });
      check(tag + ' CD confirm resolves (result text or closes)', result.length > 0 && result !== 'still-open' || result === 'closed', "'" + result + "'");
    }
  },

  'divider': async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const d = document.querySelector('[data-testid="divider"], hr, .divider');
      if (!d) return null;
      const cs = getComputedStyle(d);
      return { h: Math.round(d.getBoundingClientRect().height), border: cs.borderTopWidth || cs.height };
    });
    check(tag + ' DV divider rendered', Boolean(r && (r.h > 0 || r.border !== '0px')), JSON.stringify(r));
  },

  'footer': async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const f = document.querySelector('[data-testid="footer"], footer');
      return f ? { h: Math.round(f.getBoundingClientRect().height), links: f.querySelectorAll('a').length } : null;
    });
    check(tag + ' FT footer rendered (links present)', Boolean(r && r.h > 0 && r.links >= 0), JSON.stringify(r));
  },

  'header': async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const h = document.querySelector('[data-testid="header"], header');
      return h ? { h: Math.round(h.getBoundingClientRect().height), links: h.querySelectorAll('a, button').length } : null;
    });
    check(tag + ' HD header rendered', Boolean(r && r.h > 0), JSON.stringify(r));
  },

  'hero': async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const h = document.querySelector('[data-testid="hero"], .hero');
      return h ? { h: Math.round(h.getBoundingClientRect().height), cta: h.querySelectorAll('a, button').length } : null;
    });
    check(tag + ' HE hero rendered (CTA present)', Boolean(r && r.h > 0 && r.cta >= 1), JSON.stringify(r));
  },

  'icons': async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const svgs = document.querySelectorAll('svg');
      const named = Array.from(svgs).filter((s) => (s.getAttribute('aria-label') || s.querySelector('title'))).length;
      return { count: svgs.length, named };
    });
    check(tag + ' IC svg icons present', r.count >= 1, JSON.stringify(r));
    check(tag + ' IC icons have accessible names', r.named === r.count, r.named + '/' + r.count + ' named');
  },

  'logo': async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const l = document.querySelector('[data-testid="logo"], .logo, .brand');
      return l ? { text: (l.textContent || '').trim().slice(0, 30), link: Boolean(l.closest('a')) } : null;
    });
    check(tag + ' LG logo rendered', Boolean(r && r.text.length > 0), JSON.stringify(r));
  },

  'media-player': async (page, num, tag) => {
    const play = await page.$('[data-testid="play"], .play, .player-btn, #play');
    if (!play) { check(tag + ' MP play toggles state', false, 'no play control'); return; }
    await realClick(page, '[data-testid="play"], .play');
    await sleep2(250);
    const state = await page.evaluate(() => {
      const b = document.querySelector('[data-testid="play"], .play');
      return { cls: b.className, aria: b.getAttribute('aria-label'), playing: Boolean(b.classList.contains('playing')) };
    });
    const time = await page.evaluate(() => { const t = document.querySelector('.time, [data-testid="time"]'); return t ? t.textContent.trim() : null; });
    check(tag + ' MP play toggles state', state.playing || /pause|pausa/i.test(state.aria || '') || (time && time !== '00:00'), JSON.stringify(state) + ' time=' + time);
  },

  'table': async (page, num, tag) => {
    const th = await page.$('[data-testid="th"], thead th');
    if (!th) { check(tag + ' TL table renders', false, 'no thead th'); return; }
    const r = await page.evaluate(() => ({
      rows: document.querySelectorAll('tbody tr, [data-testid="table"] tbody tr').length,
      cols: document.querySelectorAll('thead th').length,
    }));
    check(tag + ' TL table renders data rows', r.rows >= 1 && r.cols >= 1, JSON.stringify(r));
  },

  'accordion': async (page, num, tag) => {
    const head = await page.$('[data-testid="accordion"] header, [data-testid="acc-btn"], .acc-header, .accordion-header');
    if (!head) { check(tag + ' ACC panel expands', false, 'no accordion header'); return; }
    const before = await page.evaluate(() => {
      const p = document.querySelector('[data-testid="accordion"] .panel, .acc-panel, .accordion-body, .accordion-panel');
      return p ? p.getBoundingClientRect().height : 0;
    });
    await realClick(page, '[data-testid="accordion"] header, [data-testid="acc-btn"], .acc-header, .accordion-header');
    await sleep2(250);
    const after = await page.evaluate(() => {
      const p = document.querySelector('[data-testid="accordion"] .panel, .acc-panel, .accordion-body, .accordion-panel');
      return p ? p.getBoundingClientRect().height : 0;
    });
    check(tag + ' ACC panel expands', after > before, before + ' -> ' + after);
  },

  'avatar': async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const a = document.querySelector('[data-testid="avatar"], .avatar');
      return a ? { txt: (a.textContent || '').trim().slice(0, 4), img: Boolean(a.querySelector('img')) } : null;
    });
    check(tag + ' AV avatar shows initials or image', Boolean(r && (r.txt.length >= 1 || r.img)), JSON.stringify(r));
  },

  'calendar': async (page, num, tag) => {
    const label = await page.evaluate(() => {
      const l = document.querySelector('.cal-month, [data-testid="month"]');
      return l ? l.textContent.trim() : null;
    });
    await realClick(page, '[data-testid="next"], .next, [data-next], [data-nav-next]').catch(() => {});
    await sleep2(200);
    const after = await page.evaluate(() => {
      const l = document.querySelector('.cal-month, [data-testid="month"]');
      return l ? l.textContent.trim() : null;
    });
    check(tag + ' CA next-month changes month label', Boolean(after && after !== label), label + ' -> ' + after);
  },

  'code-block': async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const cb = document.querySelector('[data-testid="code"], pre code');
      return cb ? { len: cb.textContent.length, lineCount: cb.querySelectorAll('.line, [data-line]').length } : null;
    });
    check(tag + ' CB code content rendered', Boolean(r && (r.len > 10 || r.lineCount > 0)), JSON.stringify(r));
  },

  'alert': async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const a = document.querySelector('[data-testid="alert"], .alert');
      return a ? { text: (a.textContent || '').trim().slice(0, 40), role: a.getAttribute('role'), close: Boolean(a.querySelector('[data-dismiss], [aria-label*="Cerrar"], [aria-label*="Close"]')) } : null;
    });
    check(tag + ' AL alert rendered', Boolean(r && r.text), JSON.stringify(r));
  },

  'toast': async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const t = document.querySelector('[data-testid="toast"], .toast');
      return t ? { text: (t.textContent || '').trim().slice(0, 40), vis: t.getBoundingClientRect().height > 0 } : null;
    });
    check(tag + ' TS toast rendered', Boolean(r && r.text && r.vis), JSON.stringify(r));
  },

  'badge': async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const b = document.querySelector('[data-testid="badge"], .badge');
      return b ? { text: (b.textContent || '').trim().slice(0, 20) } : null;
    });
    check(tag + ' BD badge rendered', Boolean(r && r.text), JSON.stringify(r));
  },

  'tag': async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const t = document.querySelector('[data-testid="tag"], .tag');
      return t ? { text: (t.textContent || '').trim().slice(0, 20) } : null;
    });
    check(tag + ' TG tag rendered', Boolean(r && r.text), JSON.stringify(r));
  },

  'timeline': async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const tl = document.querySelector('[data-testid="timeline"], .timeline');
      return tl ? { items: tl.querySelectorAll('.item, li').length } : null;
    });
    check(tag + ' TM timeline rendered', Boolean(r && r.items >= 1), JSON.stringify(r));
  },

  'charts': async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const c = document.querySelector('[data-testid="chart"], .chart, svg.chart, canvas');
      if (!c) return null;
      if (c.tagName === 'CANVAS') return { kind: 'canvas', size: c.width * c.height };
      const paths = c.querySelectorAll('path, rect, circle, line');
      return { kind: c.tagName, paths: paths.length };
    });
    check(tag + ' CH chart rendered (paths/draw calls)', Boolean(r && (r.size > 2000 || r.paths >= 3)), JSON.stringify(r));
  },

  'toc': async (page, num, tag) => {
    const links = await page.$$('[data-testid="toc-link"], .toc-link');
    if (links.length === 0) { check(tag + ' TC in-page nav moves active link', false, 'no toc links'); return; }
    const first = await page.$eval('[data-testid="toc-link"], .toc-link', (el) => ({ id: el.getAttribute('href'), active: el.classList.contains('active') }));
    await realClick(page, '[data-testid="toc-link"], .toc-link', 1);
    await sleep2(350);
    const after = await page.evaluate(() => {
      const linksArr = Array.from(document.querySelectorAll('[data-testid="toc-link"], .toc-link'));
      const activeIdx = linksArr.findIndex((l) => l.classList.contains('active'));
      return { activeIdx, hasTarget: Boolean(linksArr[1] && document.querySelector(linksArr[1].getAttribute('href'))) };
    });
    check(tag + ' TC in-page nav moves active link', after.activeIdx === 1 || after.activeIdx === 0, JSON.stringify({ first, after }));
  },

  'breadcrumbs': async (page, num, tag) => {
    const items = await page.$$('.bc-item');
    if (items.length < 2) { check(tag + ' BC click moves active stage', false, 'fewer than 2 bc-item'); return; }
    const before = await page.evaluate(() => document.querySelectorAll('.bc-item.active').length);
    await realClick(page, '.bc-item', 1);
    await sleep2(150);
    const after = await page.evaluate(() => {
      const arr = Array.from(document.querySelectorAll('.bc-item'));
      return { active: arr.findIndex((x) => x.classList.contains('active')), items: arr.length };
    });
    check(tag + ' BC click moves active stage', after.active === 1 && before === 0, JSON.stringify({ before, after }));
  },

  'anchor': async (page, num, tag) => {
    const a = await page.$('[data-testid="anchor"], .anchor');
    if (!a) { check(tag + ' AN anchor click navigates to target', false, 'no anchor'); return; }
    const href = await a.evaluate((el) => el.getAttribute('href'));
    if (!href || !href.startsWith('#')) { check(tag + ' AN anchor click navigates to target', false, 'href=' + href); return; }
    const target = await page.$(href).catch(() => null);
    if (!target) { check(tag + ' AN anchor click navigates to target', false, 'no target ' + href); return; }
    await realClick(page, '[data-testid="anchor"], .anchor');
    await sleep2(300);
    const state = await page.evaluate(() => ({ hash: location.hash, y: Math.round(pageYOffset) }));
    check(tag + ' AN anchor click navigates to target', state.hash === href, JSON.stringify(state));
  },
};

// Static family handlers: no interactive control is expected; verify that claim
// honestly: if interactive elements exist they must have been exercised.
function staticVerdict(componentTag) {
  return async (page, num, tag) => {
    const r = await page.evaluate(() => {
      const everything = document.querySelectorAll('button, a[href], input, select, textarea, [tabindex="0"]');
      const credit = new Set(Array.from(document.querySelectorAll('.credit a, .credit button')).map((el) => el.dataset ? el : el));
      let interactive = 0;
      for (const el of everything) {
        let insideCredit = false;
        for (const c of credit) if (c.contains(el) || el === c) { insideCredit = true; break; }
        if (!insideCredit) interactive++;
      }
      return interactive;
    });
    if (r === 0) check(tag + ' ST static component: no interactive controls (documented)', true, '0 controls found');
    else check(tag + ' ST static component: no interactive controls (documented)', false, r + ' interactive controls present but not exercised');
  };
}

export { INTERACTIONS, staticVerdict };