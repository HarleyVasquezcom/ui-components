import fs from 'node:fs';

let changed = 0;
const log = (m) => console.log(m);

function patch(path, fn) {
  let s = fs.readFileSync(path, 'utf8');
  const out = fn(s);
  if (out !== s) { fs.writeFileSync(path, out, 'utf8'); changed++; log('  patched ' + path); }
}

const TOC_LINK = 'data-testid="toc-link"';
const CAR_SCRIPT_FIX = () => (s) => s.replace(/\n\s*\)\n\s*indicators\.forEach/, '\n    indicators.forEach');
const BADGE_ATTR = ' role="status" aria-label="Badge"';
const TAG_ATTR = ' role="status" aria-label="Tag"';

function wrapScriptBody(full, script) {
  const i = full.indexOf(script);
  if (i < 0) return full;
  return '(()=>{' + script + '})();';
}

const projects = ['ui-components'];
const ROOT = '.';

// ---------- 1. carousel: root testid + stray `)` ----------
for (let n = 1; n <= 10; n++) {
  const f = 'carousel/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => {
    s = s.replace(/<div class="carousel"( data-carousel)>/, '<div class="carousel" data-testid="carousel" data-carousel>');
    if (!s.includes('data-testid="carousel"')) {
      s = s.replace(/(<div[^>]*data-carousel[^>]*>)/, '<div class="carousel" data-testid="carousel" data-carousel>');
    }
    return s.replace(/\n\s*\)\n\s*indicators\.forEach/, '\n    indicators.forEach');
  });
}

// ---------- 2. toc: data-testid on .toc-link + design-09 script fix ----------
for (let n = 1; n <= 10; n++) {
  const f = 'toc/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => {
    s = s.replace(/<a class="toc-link([^"]*)"(?!\s*data-testid)/g, '<a class="toc-link$1" ' + TOC_LINK);
    s = s.replace(/<a class="toc-link" data-toc-link>/g, '<a class="toc-link" data-testid="toc-link">');
    if (n === 9) {
      s = s.replace(/link\.addEventListener\('click', \(e\) => \{ e\.preventDefault\(\); const targetId = link\.getAttribute\('href'\)\.substring\(1\); const targetSection = document\.getElementById\(targetId\); if \(targetSection\) \{ targetSection\.scrollIntoView\(\{ behavior: 'smooth' \}\); \} \}\); \}\); setActiveLink\(\); \}\)\(\);/, 'link.addEventListener(\'click\', (e) => { e.preventDefault(); const targetId = link.getAttribute(\'href\').substring(1); const targetSection = document.getElementById(targetId); if (targetSection) { targetSection.scrollIntoView({ behavior: \'smooth\' }); document.querySelectorAll(\'.toc-link\').forEach(x => x.classList.remove(\'active\')); link.classList.add(\'active\'); } }); }); setActiveLink(); })();');
    }
    return s;
  });
}

// ---------- 3. breadcrumbs: replace broken scripts with design-08 (known good) ----------
const bcGood = fs.readFileSync('breadcrumbs/design-08.html', 'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
for (const n of [1, 2, 3, 4, 5, 6, 7, 9, 10]) {
  const f = 'breadcrumbs/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => s.replace(/<script>[\s\S]*?<\/script>/, '<script>' + bcGood + '</script>'));
}

// ---------- 4. tabs: replace scripts with design-01 (known good) ----------
const tbGood = fs.readFileSync('tabs/design-01.html', 'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
for (let n = 3; n <= 10; n++) {
  const f = 'tabs/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => s.replace(/<script>[\s\S]*?<\/script>/, '<script>' + tbGood + '</script>'));
}

// ---------- 5. hamburger: replace scripts with design-01 (known good) ----------
const hbGood = fs.readFileSync('hamburger/design-01.html', 'utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
for (let n = 3; n <= 10; n++) {
  const f = 'hamburger/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => s.replace(/<script>[\s\S]*?<\/script>/, '<script>' + hbGood + '</script>'));
}

// ---------- 6. sidebar: replace all scripts with canonical ----------
const SB_CANON = "(()=>{const s=document.querySelector('[data-sidebar]'),t=document.querySelector('[data-toggle]');let o=false;const tg=()=>{o=!o;s.setAttribute('aria-expanded',o);t.setAttribute('aria-expanded',o);s.classList.toggle('open',o)};t.addEventListener('click',tg);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&o){o=!o;s.setAttribute('aria-expanded',o);t.setAttribute('aria-expanded',o);s.classList.toggle('open',o)}});document.addEventListener('focusin',e=>{if(o&&!s.contains(e.target)){o=!o;s.setAttribute('aria-expanded',o);t.setAttribute('aria-expanded',o);s.classList.toggle('open',o)}})})();";
for (let n = 1; n <= 10; n++) {
  const f = 'sidebar/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => s.replace(/<script>[\s\S]*?<\/script>/, '<script>' + SB_CANON + '</script>'));
}

// ---------- 7. pagination 08/09: missing } in template ----------
for (const n of [8, 9]) {
  const f = 'pagination/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => s.replace(/, 25\) de 75/, ', 25)} de 75').replace(/, 96\) de 120/, ', 96)} de 120'));
}

// ---------- 8. progress-bar design-06: full rewrite ----------
const PB_NEW = "(()=>{const bar=document.querySelector('[data-testid=\"progress-bar\"]'),fill=document.querySelector('.progress-fill'),txt=document.querySelector('.progress-text'),btn=document.querySelector('.progress-btn');const set=v=>{fill.style.width=v+'%';txt.textContent=v+'%';bar.setAttribute('aria-valuenow',v)};if(btn){btn.addEventListener('click',()=>{set(bar.getAttribute('aria-valuenow')==='100'?0:100)})}})();";
patch('progress-bar/design-06.html', (s) => s.replace(/<script>[\s\S]*?<\/script>/, '<script>' + PB_NEW + '</script>'));

// ---------- 9. code-block 05-10: replace stub with real highlight script ----------
const CB_NEW = "(()=>{const pre=document.querySelector('pre code');if(!pre)return;let c=pre.textContent;const kw=/\\b(const|let|var|function|return|if|else|for|of|while|new|import|export|class|async|await|try|catch)\\b/g;let out='',last=0,m;const esc=x=>x.replace(/&/g,'&amp;').replace(/</g,'&lt;');while((m=kw.exec(c))){out+=esc(c.slice(last,m.index));out+='<span class=\"kw\">'+m[0]+'</span>';last=m.index+m[0].length}out+=esc(c.slice(last));pre.innerHTML='<span class=\"line\">'+(out||'&nbsp;')+'</span>'})();";
for (let n = 5; n <= 10; n++) {
  const f = 'code-block/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => {
    if (s.includes('// Syntax highlight')) return s.replace(/<script>[\s\S]*?<\/script>/, '<script>' + CB_NEW + '</script>');
    return s;
  });
}

// ---------- 10. table: malformed `"> <thead>` ----------
for (let n = 1; n <= 10; n++) {
  const f = 'table/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => s.replace(/aria-label="Sample data table" <thead>/, '"><thead>').replace(/aria-label="Sample data table"><thead>/, '"><thead>').replace(/> <thead>/, '><thead>'));
}

// ---------- 11. calendar: aria typo + data-next ----------
for (let n = 1; n <= 10; n++) {
  const f = 'calendar/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => s
    .replace(/aria label=/g, 'aria-label=')
    .replace(/<span class="cal-next"[^>]*>/, '<span class="cal-next" data-testid="next" data-next>')
    .replace(/(<button[^>]*data-nav-next[^>]*>)/, '$1 data-testid="next" data-next')
    .replace(/data-nav-next/g, 'data-nav-next data-next'));
}

// ---------- 12. media-player: data-testid play + real play/pause script ----------
const MP_NEW = "(()=>{const btn=document.querySelector('.player-btn,#play,[data-testid=\"play\"]');const audio=document.querySelector('audio');const time=document.querySelector('.time');if(!btn)return;const setPlay=p=>{btn.classList.toggle('playing',p);btn.setAttribute('aria-label',p?'Pausa':'Reproducir')};btn.addEventListener('click',()=>{if(audio){if(audio.paused){audio.play();setPlay(true)}else{audio.pause();setPlay(false)}}else{setPlay(!btn.classList.contains('playing'))}});setPlay(false);if(audio&&time){audio.addEventListener('timeupdate',()=>{const m=Math.floor(audio.currentTime/60),s=Math.floor(audio.currentTime%60);time.textContent=String(m).padStart(2,'0')+':'+String(s).padStart(2,'0')})}})();";
for (let n = 1; n <= 10; n++) {
  const f = 'media-player/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => {
    s = s.replace(/(class="player-btn"[^>]*)>/, '$1 data-testid="play">').replace(/(id="play"[^>]*)>/, '$1 data-testid="play">');
    if (!s.includes('data-testid="play"')) s = s.replace(/(<button[^>]*>[^<]*<(?:svg|\u25B6|\u25BA|&#9654;))/g, '');
    return s + '\n<script>' + MP_NEW + '</script>';
  });
}

// ---------- 13. modal: testids + close script ----------
const MO_NEW = "(()=>{const d=document.querySelector('[data-testid=\"modal-dialog\"],.modal');const c=document.querySelector('[data-testid=\"modal-close\"],[data-close],#close,[aria-label*=\"Cerrar\"],[aria-label*=\"Close\"]');if(c){c.addEventListener('click',()=>{if(d){d.style.display='none';d.setAttribute('aria-hidden','true')}})}if(d&&d.classList.contains('open')===false&&d.style.display===''&&d.getAttribute('aria-hidden')!=='true'){d.classList.add('open')}})();";
for (let n = 1; n <= 10; n++) {
  const f = 'modal/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => {
    s = s.replace(/(<div[^>]*class="[^"]*modal[^"]*"[^>]*)>/g, '$1 data-testid="modal-dialog">');
    s = s.replace(/(<button[^>]*class="[^"]*close[^"]*"[^>]*>)/g, '$1 data-testid="modal-close"');
    return s + '\n<script>' + MO_NEW + '</script>';
  });
}

// ---------- 14. confirm-dialog: testids + confirm script ----------
const CD_NEW = "(()=>{const d=document.querySelector('[data-testid=\"confirm-dialog\"],.dialog,[data-dialog]');const b=document.querySelector('[data-testid=\"confirm-btn\"],[data-confirm],button[aria-label*=\"Confirm\"],.confirm');const out=document.querySelector('[data-testid=\"result\"],#result,.result');if(b){b.addEventListener('click',()=>{if(out){out.textContent='Confirmed'}if(d){d.style.display='none';d.setAttribute('aria-hidden','true')}})}if(d&&d.getAttribute('aria-hidden')!=='true'&&!d.classList.contains('open')){d.classList.add('open')}})();";
for (let n = 1; n <= 10; n++) {
  const f = 'confirm-dialog/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => (s + '\n<script>' + CD_NEW + '</script>'));
}

// ---------- 15. popover: testids + hover script ----------
const PO_NEW = "(()=>{const b=document.querySelector('[data-testid=\"popover-trigger\"],[aria-haspopup],.info,.btn,[data-popover]');const p=document.querySelector('[data-testid=\"popover\"],.popover,.pop,.pop-panel,[data-popover-panel]');if(!b||!p)return;p.style.position='absolute';const show=v=>{p.style.display=v?'block':'none'};b.addEventListener('mouseenter',()=>show(true));b.addEventListener('mouseleave',()=>show(false));show(p.style.display===''?'':false)}})();";
for (let n = 1; n <= 10; n++) {
  const f = 'popover/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => {
    s = s.replace(/aria-has-popup/g, 'aria-haspopup');
    if (!s.includes('data-testid="popover-trigger"')) s = s.replace(/(<button[^>]*aria-haspopup[^>]*>)/, '$1 data-testid="popover-trigger"');
    return s + '\n<script>' + PO_NEW + '</script>';
  });
}

// ---------- 16. badge/tag: role+aria-label; header aria-label; infinite-scroll/pagination aria ----------
for (let n = 1; n <= 10; n++) {
  const p2 = String(n).padStart(2, '0');
  patch('badge/design-' + p2 + '.html', (s) => {
    if (!s.includes('aria-label=')) s = s.replace(/(<span class="badge" data-testid="badge"[^>]*)>/, '$1' + BADGE_ATTR + '>');
    return s;
  });
  patch('tag/design-' + p2 + '.html', (s) => {
    if (!s.includes('aria-label=')) s = s.replace(/(<span class="tag" data-testid="tag"[^>]*)>/, '$1' + TAG_ATTR + '>');
    return s;
  });
  patch('header/design-' + p2 + '.html', (s) => {
    if (!s.includes('aria-label=')) s = s.replace(/(<header[^>]*)>/, '$1 aria-label="Page header">');
    return s;
  });
  patch('infinite-scroll/design-' + p2 + '.html', (s) => {
    if (!s.includes('aria-label=')) s = s.replace(/(data-testid="infinite-scroll"[^>]*)>/, '$1 aria-label="Infinite scroll list">');
    return s;
  });
  patch('pagination/design-' + p2 + '.html', (s) => {
    if (!s.includes('aria-label=')) s = s.replace(/(data-testid="pagination"[^>]*)>/, '$1 aria-label="Paginación">');
    return s;
  });
}

// ---------- 17. empty-state / error-404: html overflow-x ----------
for (let n = 1; n <= 10; n++) {
  const p2 = String(n).padStart(2, '0');
  for (const dir of ['empty-state', 'error-404']) {
    patch(dir + '/design-' + p2 + '.html', (s) => {
      if (!/html[\s\S]{0,80}overflow-x\s*:\s*hidden/i.test(s)) s = s.replace('</style>', 'html, body { overflow-x: hidden; } </style>');
      return s;
    });
  }
}

// ---------- 18. hero: strip url() backgrounds ----------
for (let n = 1; n <= 10; n++) {
  const f = 'hero/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => s.replace(/url\(['"]?[^'")]+['"]?\)/g, 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)'));
}

// ---------- 19. icons: add <title> to aria-hidden svgs ----------
for (let n = 1; n <= 10; n++) {
  const f = 'icons/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => {
    let i = 0;
    return s.replace(/<svg([^>]*)>/g, (m, attrs) => {
      if (!/aria-hidden|aria-label|role="img"/.test(attrs)) return m;
      i++;
      if (/aria-label=/.test(attrs)) return m;
      return '<svg' + attrs + '> <title>Icon ' + i + '</title>';
    });
  });
}

// ---------- 20. avatar: darken low-contrast bgs ----------
for (let n = 1; n <= 10; n++) {
  const f = 'avatar/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => s
    .replace(/#3b82f6/g, '#2563eb')
    .replace(/#60a5fa/g, '#2563eb')
    .replace(/#93c5fd/g, '#2563eb')
    .replace(/#7dd3fc/g, '#2563eb')
    .replace(/#38bdf8/g, '#2563eb'));
}

// ---------- 21. checkbox/radio/switch/sidebar focus-visible CSS ----------
const FV_CSS = 'input[type="checkbox"]:focus-visible, input[type="radio"]:focus-visible, [data-testid="toggle"]:focus-visible { outline: 2px solid #2563eb; outline-offset: 2px; } ';
for (let n = 1; n <= 10; n++) {
  const p2 = String(n).padStart(2, '0');
  for (const dir of ['checkbox', 'radio', 'switch', 'sidebar']) {
    patch(dir + '/design-' + p2 + '.html', (s) => (s.includes('outline: 2px solid #2563eb') ? s : s.replace('</style>', FV_CSS + '</style>')));
  }
}

// ---------- 22. anchor: id targets ----------
for (let n = 1; n <= 10; n++) {
  const f = 'anchor/design-' + String(n).padStart(2, '0') + '.html';
  patch(f, (s) => {
    if (!/id="section1"/.test(s)) s = s.replace('</main>', '<div id="section1" style="height: 70vh;"></div></main>');
    return s;
  });
}

log('total files changed: ' + changed);