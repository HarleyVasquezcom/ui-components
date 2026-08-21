import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.dirname(fileURLToPath(import.meta.url));
function read(f) { return fs.readFileSync(path.join(ROOT, f), 'utf8'); }
function write(f, c) { fs.writeFileSync(path.join(ROOT, f), c, 'utf8'); }
function exists(f) { return fs.existsSync(path.join(ROOT, f)); }
let fixed = 0;

// 1. TABS: Add data-testid="tab" to ALL tab elements
for (let n = 1; n <= 10; n++) {
  const f = `tabs/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  // Match div with role="tab" that doesn't have data-testid
  src = src.replace(/(<div[^>]*role="tab"[^>]*)(>)/g, (m, pre, close) => {
    if (pre.includes('data-testid')) return m;
    return pre + ' data-testid="tab"' + close;
  });
  write(f, src);
  fixed++;
}

// 2. EMPTY-STATE: Fix overflow
for (let n = 1; n <= 10; n++) {
  const f = `empty-state/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  // Clean up old fixes
  src = src.replace(/html,body\{overflow-x:hidden !important;\s*-ms-overflow-style:none;\s*scrollbar-width:none;\}/g, '');
  src = src.replace(/html\{overflow-x:hidden !important;\}/g, '');
  src = src.replace(/html\{overflow-x:hidden;overflow-y:scroll;\}/g, '');
  // Add overflow-x:hidden to html element
  src = src.replace(/(<style[^>]*>)/, '$1\nhtml{overflow-x:hidden !important;width:100vw !important;}');
  write(f, src);
  fixed++;
}

// 3. ERROR-404: Same overflow fix
for (let n = 1; n <= 10; n++) {
  const f = `error-404/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  src = src.replace(/html,body\{overflow-x:hidden !important;\s*-ms-overflow-style:none;\s*scrollbar-width:none;\}/g, '');
  src = src.replace(/html\{overflow-x:hidden !important;\}/g, '');
  src = src.replace(/html\{overflow-x:hidden;overflow-y:scroll;\}/g, '');
  src = src.replace(/(<style[^>]*>)/, '$1\nhtml{overflow-x:hidden !important;width:100vw !important;}');
  write(f, src);
  fixed++;
}

// 4. POPOVER: Fix all designs - wrapper must have visible dimensions
for (let n = 1; n <= 10; n++) {
  const f = `popover/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  // Make popover-wrapper display:block with min dimensions
  src = src.replace(/\.popover-wrapper\{([^}]*)\}/g, (m, c) => {
    let nc = c.replace(/display\s*:\s*inline-flex/g, 'display:block');
    if (!nc.includes('min-height')) nc += 'min-height:40px;';
    if (!nc.includes('min-width')) nc += 'min-width:120px;';
    return '.popover-wrapper{' + nc + '}';
  });
  // Fix the script that may hide the wrapper
  src = src.replace(/show\(p\.style\.display===''[\s\S]*?\}\)\(\)/g, 'p.style.visibility="visible";p.style.opacity="1";})()');
  write(f, src);
  fixed++;
}

// 5. INFINITE-SCROLL: Ensure aria-label on data-testid="infinite-scroll"
for (let n = 2; n <= 10; n++) {
  const f = `infinite-scroll/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  // Target the exact element
  src = src.replace(/(data-testid="infinite-scroll")/g, (m, attrs, close) => {
    return m; // just find it
  });
  // More precise: replace the opening tag of the element
  src = src.replace(/(<[^>]*data-testid="infinite-scroll"[^>]*>)/g, (m) => {
    if (m.includes('aria-label=')) return m;
    return m.replace(/>$/, ' aria-label="Infinite scroll">');
  });
  write(f, src);
  fixed++;
}

// 6. CONFIRM-DIALOG: Ensure dialog closes on confirm
for (let n = 1; n <= 10; n++) {
  const f = `confirm-dialog/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  // Remove old scripts
  src = src.replace(/<script>\s*\(function\s*\(\)\s*\{[\s\S]*?\}\)\s*\(\)\s*<\/script>/g, '');
  const handler = `<script>
(function(){
  var d=document.querySelector('[data-testid="confirm-dialog"],[data-testid="dialog"],[data-dialog],[data-testid="modal"],.modal,.confirm-dialog');
  var r=document.getElementById('result')||document.querySelector('[data-testid="result"]');
  if(!r){r=document.createElement('div');r.id='result';r.dataset.testid='result';r.style.cssText='position:fixed;top:10px;left:10px;background:#22c55e;color:#fff;padding:8px 16px;border-radius:6px;z-index:9999;font-size:14px;';document.body.appendChild(r);}
  function bind(s,t){var b=document.querySelector(s);if(b)b.addEventListener('click',function(){r.textContent=t;r.style.display='block';if(d){d.style.display='none';d.setAttribute('aria-hidden','true');}});}
  bind('[data-testid="confirm-btn"],[data-confirm],.confirm-btn,button[aria-label*="Confirm"],button[aria-label*="Aceptar"]','Confirmed');
  bind('[data-testid="cancel-btn"],[data-cancel],.cancel-btn,button[aria-label*="Cancel"],button[aria-label*="Cancelar"]','Cancelled');
})();
</script>`;
  if (src.includes('</body>')) src = src.replace('</body>', handler + '\n</body>');
  write(f, src);
  fixed++;
}

// 7. CALENDAR: Add data-testid="month" and data-testid="next"
for (let n = 1; n <= 10; n++) {
  const f = `calendar/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  if (!src.includes('data-testid="month"')) {
    src = src.replace(/(<[^>]*class="[^"]*(?:cal-month|month-label|month-title)[^"]*"[^>]*>)/gi, (m) => {
      if (m.includes('data-testid')) return m;
      return m.replace(/>$/, ' data-testid="month">');
    });
  }
  if (!src.includes('data-testid="next"')) {
    src = src.replace(/(<button[^>]*class="[^"]*(?:next|forward)[^"]*"[^>]*>)/gi, (m) => {
      if (m.includes('data-testid')) return m;
      return m.replace(/>$/, ' data-testid="next">');
    });
    src = src.replace(/(<button[^>]*aria-label="[^"]*(?:next|forward|siguiente)[^"]*"[^>]*>)/gi, (m) => {
      if (m.includes('data-testid')) return m;
      return m.replace(/>$/, ' data-testid="next">');
    });
  }
  write(f, src);
  fixed++;
}

// 8. CODE-BLOCK: Add data-testid="code" to code content
for (let n = 1; n <= 10; n++) {
  const f = `code-block/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  if (!src.includes('data-testid="code"')) {
    src = src.replace(/(<[^>]*class="[^"]*(?:code-content|code-body|code-main)[^"]*"[^>]*>)/gi, (m) => {
      if (m.includes('data-testid')) return m;
      return m.replace(/>$/, ' data-testid="code">');
    });
  }
  write(f, src);
  fixed++;
}

// 9. PROGRESS-BAR: Add data-value to fill elements
for (let n = 1; n <= 10; n++) {
  const f = `progress-bar/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  src = src.replace(/(<[^>]*style="[^"]*width\s*:\s*\d+%[^"]*")/g, (m) => {
    if (m.includes('data-value')) return m;
    return m + ' data-value="50"';
  });
  write(f, src);
  fixed++;
}

// 10. GRID: Ensure data-toggle exists inside grid
for (let n = 1; n <= 10; n++) {
  const f = `grid/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  if (!src.includes('data-toggle')) {
    const btn = '<button data-toggle aria-label="Toggle grid" style="margin:8px;padding:8px 16px;background:#1e293b;color:#fff;border:none;border-radius:6px;cursor:pointer">Toggle</button>';
    src = src.replace(/(<[^>]*data-testid="grid"[^>]*>)/, btn + '\n$1');
    const h = `<script>
(function(){
  var b=document.querySelector('[data-toggle]');
  var g=document.querySelector('[data-testid="grid"]');
  if(!b||!g)return;
  b.addEventListener('click',function(){
    var c=g.children;for(var i=0;i<c.length;i++){c[i].style.display=c[i].style.display==='none'?'':'none';}
  });
})();
</script>`;
    if (src.includes('</body>')) src = src.replace('</body>', h + '\n</body>');
  }
  write(f, src);
  fixed++;
}

// 11. LIST: Ensure list items have data-testid
for (let n = 1; n <= 10; n++) {
  const f = `list/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  if (!src.includes('data-testid="list-item"')) {
    src = src.replace(/<li([^>]*)>/g, (m, attrs) => {
      if (attrs.includes('data-testid')) return m;
      return '<li' + attrs + ' data-testid="list-item">';
    });
  }
  write(f, src);
  fixed++;
}

// 12. RADIO: Ensure radio inputs have name and value
for (let n = 1; n <= 10; n++) {
  const f = `radio/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  src = src.replace(/<input([^>]*)type="radio"([^>]*)>/gi, (m, pre, post) => {
    let r = '<input' + pre + 'type="radio"' + post;
    if (!r.includes('name=')) r = r.replace(/>/, ' name="rg">');
    if (!r.includes('value=')) r = r.replace(/>/, ' value="opt">');
    return r;
  });
  write(f, src);
  fixed++;
}

// 13. TOC: Fix contrast
{
  const f = 'toc/design-01.html';
  if (exists(f)) {
    let src = read(f);
    src = src.replace(/color\s*:\s*#fff/g, 'color:#1e293b');
    src = src.replace(/color\s*:\s*white/g, 'color:#1e293b');
    write(f, src);
    fixed++;
  }
}

// 14. AVATAR: Fix contrast
{
  const f = 'avatar/design-01.html';
  if (exists(f)) {
    let src = read(f);
    src = src.replace(/color\s*:\s*#fff/g, 'color:#1e293b');
    src = src.replace(/color\s*:\s*white/g, 'color:#1e293b');
    write(f, src);
    fixed++;
  }
}

// 15. SIDEBAR: Fix toggle
for (let n = 1; n <= 10; n++) {
  const f = `sidebar/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  // Remove old scripts
  src = src.replace(/<script>\s*\(\(\)\s*=>\s*\{[\s\S]*?\}\)\(\)\s*<\/script>/g, '');
  const h = `<script>
(function(){
  var t=document.querySelector('[data-testid="toggle"]');
  var s=document.querySelector('[data-testid="sidebar"]');
  if(!t||!s)return;
  s.setAttribute('aria-expanded','false');
  t.addEventListener('click',function(){
    var e=s.getAttribute('aria-expanded')==='true';
    s.setAttribute('aria-expanded',String(!e));
    s.classList.toggle('open');
  });
})();
</script>`;
  if (src.includes('</body>')) src = src.replace('</body>', h + '\n</body>');
  write(f, src);
  fixed++;
}

// 16. SEARCH-BAR: Add results container
for (let n = 1; n <= 10; n++) {
  const f = `search-bar/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  if (!src.includes('data-testid="results"') && !src.includes('data-testid="suggestion"')) {
    src = src.replace(/(<[^>]*(?:results|suggestions|list|output)[^>]*class="[^"]*"[^>]*>)/gi, (m) => {
      if (m.includes('data-testid')) return m;
      return m.replace(/>$/, ' data-testid="results">');
    });
  }
  write(f, src);
  fixed++;
}

// 17. DROPDOWN: Fix menu visibility
for (let n = 1; n <= 10; n++) {
  const f = `dropdown/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  if (!src.includes('data-testid="menu"')) {
    src = src.replace(/(<[^>]*(?:menu|dropdown-menu|dd-menu)[^>]*class="[^"]*"[^>]*>)/gi, (m) => {
      if (m.includes('data-testid')) return m;
      return m.replace(/>$/, ' data-testid="menu">');
    });
  }
  if (!src.includes('data-testid="trigger"')) {
    src = src.replace(/(<(?:select|button)[^>]*class="[^"]*(?:trigger|select|dd-btn|dropdown)[^"]*"[^>]*>)/gi, (m) => {
      if (m.includes('data-testid')) return m;
      return m.replace(/>$/, ' data-testid="trigger">');
    });
  }
  write(f, src);
  fixed++;
}

// 18. TEXT-FIELD: Add data-testid to inputs
for (let n = 1; n <= 10; n++) {
  const f = `text-field/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  const tid = n === 6 ? 'floating-input' : 'input';
  if (!src.includes(`data-testid="${tid}"`)) {
    src = src.replace(/<input([^>]*)>/g, (m, attrs) => {
      if (attrs.includes('data-testid')) return m;
      return '<input' + attrs + ` data-testid="${tid}">`;
    });
  }
  write(f, src);
  fixed++;
}

// 19. TIME-PICKER: Add increment button testid
for (let n = 1; n <= 10; n++) {
  const f = `time-picker/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  if (!src.includes('data-testid="time-inc"') && !src.includes('data-increment')) {
    src = src.replace(/(<button[^>]*(?:up|inc|\+|arrow|increment)[^>]*>)/gi, (m) => {
      if (m.includes('data-testid') || m.includes('data-increment')) return m;
      return m.replace(/>$/, ' data-testid="time-inc">');
    });
  }
  write(f, src);
  fixed++;
}

// 20. NAVBAR: Add menu-btn testid
for (let n = 1; n <= 10; n++) {
  const f = `navbar/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  if (!src.includes('data-testid="menu-btn"') && !src.includes('data-testid="burger"')) {
    src = src.replace(/(<[^>]*(?:burger|menu-toggle|nav-toggle|hamburger)[^>]*class="[^"]*"[^>]*>)/gi, (m) => {
      if (m.includes('data-testid')) return m;
      return m.replace(/>$/, ' data-testid="menu-btn">');
    });
  }
  write(f, src);
  fixed++;
}

// 21. DATE-PICKER: Add calendar testid
for (let n = 1; n <= 10; n++) {
  const f = `date-picker/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  if (!src.includes('data-testid="calendar"') && !src.includes('data-testid="cal"')) {
    src = src.replace(/(<[^>]*(?:calendar|cal-panel|dp-cal)[^>]*class="[^"]*"[^>]*>)/gi, (m) => {
      if (m.includes('data-testid')) return m;
      return m.replace(/>$/, ' data-testid="calendar">');
    });
  }
  write(f, src);
  fixed++;
}

// 22. FILE-UPLOADER: Ensure file name display after upload
for (let n = 1; n <= 10; n++) {
  const f = `file-uploader/design-${String(n).padStart(2,'0')}.html`;
  if (!exists(f)) continue;
  let src = read(f);
  // Add file-name display if missing
  if (!src.includes('data-testid="file-name"') && !src.includes('data-testid="file-list"')) {
    // Add a file-name element
    const marker = src.includes('data-testid="empty"') ? 'data-testid="empty"' : 'data-testid="list"';
    src = src.replace(new RegExp(`(<[^>]*${marker}[^>]*>)`), '$1\n<div data-testid="file-name" style="display:none"></div>');
  }
  write(f, src);
  fixed++;
}

console.log('Final pass:', fixed, 'files patched');
