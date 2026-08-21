import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.argv[2] || 'C:/Users/harle/.traycer/epics/e5942e6d-d5e0-4ad4-9241-895c20c62e56/ui-components';
const manifest = JSON.parse(readFileSync(join(ROOT, 'tests', 'manifest.json'), 'utf8'));

const INTERACT = {
  button: 'Click increments the tap counter / El clic incrementa el contador de toques',
  checkbox: 'Click toggles the checked state + visual mark / El clic alterna el estado marcado + marca visual',
  radio: 'Click moves the selection inside the group / El clic mueve la selección dentro del grupo',
  switch: 'Click toggles the aria-checked state / El clic alterna el estado aria-checked',
  'text-field': 'Typing, validation, clear and submit / Escritura, validación, limpieza y envío',
  'text-area': 'Typing with live char/line counters / Escritura con contadores en vivo de caracteres/líneas',
  dropdown: 'Click opens the listbox; arrows + Enter select / El clic abre el listbox; flechas + Enter seleccionan',
  'date-picker': 'Click opens the calendar; month nav and day picking / El clic abre el calendario; navegación de meses y selección de día',
  'time-picker': 'Click opens the popup; arrows and typing set hour/minutes / El clic abre el popup; flechas y escritura fijan hora/minutos',
  slider: 'Arrow keys and a real drag move the value / Las flechas y un arrastre real mueven el valor',
  stepper: '+/- clicks and typing clamp at min/max / Los clics +/- y la escritura limitan en min/max',
  'file-uploader': 'Real file input upload, list + remove / Subida real de archivo, lista + quitar',
  'search-bar': 'Live filtering with count; clear and shortcuts / Filtrado en vivo con conteo; limpiar y atajos',
  'color-picker': 'Swatch/hue clicks and hex input update the output / Clics en muestras/hue y el input hex actualizan la salida',
  filters: 'Controls re-count results; reset and clear-all / Los controles recalculan resultados; reset y limpiar todo',
  navbar: 'Links move aria-current; burger and dropdowns / Los enlaces mueven aria-current; burger y dropdowns',
  hamburger: 'Click toggles open with aria-expanded / El clic alterna abierto con aria-expanded',
  tabs: 'Click moves the selected tab + panel / El clic mueve la pestaña seleccionada + panel',
  breadcrumbs: 'Click moves the active stage (bc-item) / El clic mueve la etapa activa (bc-item)',
  sidebar: 'Toggle opens/closes with aria-expanded + Esc / El toggle abre/cierra con aria-expanded + Esc',
  pagination: 'Page clicks switch pages / Los clics en páginas cambian de página',
  'infinite-scroll': 'Scroll (or button) appends more items / El scroll (o botón) añade más ítems',
  'bottom-nav': 'Click moves the active tab / El clic mueve la pestaña activa',
  anchor: 'Click jumps to the section (hash navigation) / El clic salta a la sección (navegación hash)',
  toc: 'Link click highlights + smooth-scrolls / El clic resalta + scroll suave',
  list: 'Click selects and reorders items / El clic selecciona y reordena ítems',
  grid: 'Filter toggles re-arrange the grid / Los toggles reordenan la malla',
  card: 'Link navigates inside the page (anchor) / El enlace navega dentro de la página (ancla)',
  carousel: 'Prev/next buttons move the slide / Los botones prev/next mueven la diapositiva',
  'code-block': 'Copy/theme buttons act (6 of 10) / Los botones copiar/tema actúan (6 de 10)',
  table: 'Pagination buttons page the rows / Los botones de paginación paginan las filas',
  toast: 'Auto-hides after 5 seconds / Se oculta automáticamente tras 5 segundos',
  'progress-bar': 'Click fills the bar (2 of 10) / El clic llena la barra (2 de 10)',
  header: 'Links navigate natively; scroll effects in 3 of 10 / Los enlaces navegan nativamente; efectos de scroll en 3 de 10'
};
const STATIC_TEXT = 'Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script';

const INTRO = {
  button: ['Tappable buttons with hover, active and focus states', 'Botones tappables con estados hover, activo y foco'],
  checkbox: ['Checkable controls with custom marks', 'Controles marcables con marcas personalizadas'],
  radio: ['Single-choice groups with varied visuals', 'Grupos de elección única con visuales variados'],
  switch: ['Toggle switches with animated states', 'Interruptores con estados animados'],
  'text-field': ['Text inputs with validation and feedback', 'Campos de texto con validación y feedback'],
  'text-area': ['Multiline text areas with live stats', 'Áreas de texto multilínea con estadísticas en vivo'],
  dropdown: ['Select controls: native and custom listboxes', 'Controles select: nativos y listbox personalizados'],
  'date-picker': ['Calendar pickers with month navigation', 'Selectores de calendario con navegación de meses'],
  'time-picker': ['Time pickers: dials, digits and clocks', 'Selectores de hora: diales, dígitos y relojes'],
  slider: ['Range sliders with marks, dual and vertical variants', 'Sliders de rango con marcas, dobles y verticales'],
  stepper: ['Quantity steppers with min/max clamping', 'Contadores de cantidad con límites min/max'],
  'file-uploader': ['Upload zones with real file input and progress', 'Zonas de subida con input de archivo real y progreso'],
  'search-bar': ['Search inputs with live filtering and shortcuts', 'Inputs de búsqueda con filtrado en vivo y atajos'],
  'color-picker': ['Color selectors: swatches, hue and hex input', 'Selectores de color: muestras, hue y hex'],
  filters: ['Filter panels that re-count results live', 'Paneles de filtro que recalculan resultados en vivo'],
  navbar: ['Navigation bars with active states and mobile menus', 'Barras de navegación con estados activos y menús móviles'],
  hamburger: ['Hamburger buttons that open navigation', 'Botones hamburguesa que abren navegación'],
  tabs: ['Tab bars with sliding and labeled indicators', 'Barras de pestañas con indicadores deslizantes y etiquetados'],
  breadcrumbs: ['Path trails with clickable stages', 'Rutas de navegación con etapas clicables'],
  sidebar: ['Side navigation that opens/closes with a toggle', 'Navegación lateral que abre/cierra con un toggle'],
  pagination: ['Page controls with prev/next and numbers', 'Controles de página con prev/next y números'],
  'infinite-scroll': ['Containers that append content on scroll', 'Contenedores que añaden contenido al hacer scroll'],
  'bottom-nav': ['Mobile bottom bars with active tabs', 'Barras inferiores móviles con pestañas activas'],
  anchor: ['In-page anchors with hash navigation', 'Anclas internas con navegación hash'],
  toc: ['Tables of contents with smooth scrolling', 'Tablas de contenido con scroll suave'],
  list: ['Selectable and reorderable lists', 'Listas seleccionables y reordenables'],
  grid: ['Responsive grids with filter toggles', 'Mallas responsivas con toggles de filtro'],
  card: ['Content cards with meta, images and links', 'Tarjetas de contenido con meta, imágenes y enlaces'],
  carousel: ['Image and content sliders', 'Sliders de imágenes y contenido'],
  'code-block': ['Code windows with copy/theme actions', 'Ventanas de código con acciones copiar/tema'],
  table: ['Data tables with row pagination', 'Tablas de datos con paginación de filas'],
  toast: ['Transient notifications that auto-hide', 'Notificaciones transitorias que se ocultan solas'],
  'progress-bar': ['Progress bars: determinate, indeterminate and animated', 'Barras de progreso: determinadas, indeterminadas y animadas'],
  header: ['Page headers with scroll effects', 'Cabeceras de página con efectos de scroll'],
  footer: ['Page footers with link columns', 'Pies de página con columnas de enlaces'],
  hero: ['Hero sections with call-to-action', 'Secciones hero con llamada a la acción'],
  icons: ['SVG icon sets, zero dependencies', 'Conjuntos de íconos SVG, cero dependencias'],
  logo: ['Logo wordmarks and monograms', 'Logotipos y monogramas'],
  'media-player': ['Media player shells with controls', 'Carcasas de reproductor multimedia con controles'],
  spinner: ['Loading spinners and progress visuals', 'Cargadores y visuales de progreso'],
  badge: ['Badges with pulse, glass and gradient looks', 'Insignias con looks pulsante, cristal y degradado'],
  tag: ['Tags with remove affordances', 'Etiquetas con affordance de quitar'],
  timeline: ['Vertical timelines with dots and dates', 'Líneas de tiempo verticales con puntos y fechas'],
  charts: ['CSS/SVG charts: bars, lines and donuts', 'Gráficos CSS/SVG: barras, líneas y donas'],
  accordion: ['Collapsible section panels', 'Paneles de sección plegables'],
  alert: ['Informational alerts with icon + title + text', 'Alertas informativas con ícono + título + texto'],
  avatar: ['Initials and image avatars', 'Avatares con iniciales e imagen'],
  blockquote: ['Pull quotes with attribution', 'Citas destacadas con atribución'],
  calendar: ['Static calendar grids', 'Grillas de calendario estáticas'],
  'confirm-dialog': ['Confirmation dialogs with actions', 'Diálogos de confirmación con acciones'],
  divider: ['Horizontal and vertical dividers', 'Separadores horizontales y verticales'],
  'empty-state': ['Empty states with call-to-action', 'Estados vacíos con llamada a la acción'],
  'error-404': ['404 pages with call-to-action', 'Páginas 404 con llamada a la acción'],
  modal: ['Modal overlays with dialog semantics', 'Overlays modales con semántica de diálogo'],
  popover: ['Popover triggers and panels', 'Triggers y paneles popover'],
  tooltip: ['Tooltip triggers with hover reveals', 'Triggers de tooltip con revelado al hover'],
  avatar: ['Initials and image avatars', 'Avatares con iniciales e imagen']
};

function writeReadme(comp) {
  const designNo = 10;
  const inter = INTERACT[comp.slug] || STATIC_TEXT;
  const intro = INTRO[comp.slug] || [comp.nameEN, comp.nameES];
  const focusT = comp.focusTarget.replace(/"/g, '');
  const lines = [];
  lines.push(`# ${comp.nameEN} — ${designNo} Designs · ${comp.nameES} — ${designNo} Diseños`);
  lines.push('');
  lines.push(`${intro[0]}, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.`);
  lines.push('');
  lines.push(`${intro[1]}, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.`);
  lines.push('');
  lines.push('## Designs / Diseños');
  lines.push('');
  lines.push('| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |');
  lines.push('|---|---|---|---|---|---|');
  for (const d of comp.designs) {
    lines.push(`| ${String(d.n).padStart(2, '0')} | ${d.nameEN} | ${d.nameES} | ${intro[0]} variant ${d.n} / variante ${d.n} | ${intro[1]} variante ${d.n} | ${inter} |`);
  }
  lines.push('');
  lines.push(`Every design exposes the probe hook ${comp.hook}; the accessible name is resolved from ${comp.nameTarget} and focus-visible is verified on ${focusT}${comp.contrastLabel ? `; the contrast floor is measured against ${comp.contrastLabel.replace(/"/g, '')}` : ''}.`);
  lines.push('');
  lines.push(`Cada diseño expone el hook de prueba ${comp.hook}; el nombre accesible se resuelve desde ${comp.nameTarget} y el focus-visible se verifica en ${focusT}${comp.contrastLabel ? `; el piso de contraste se mide contra ${comp.contrastLabel.replace(/"/g, '')}` : ''}.`);
  lines.push('');
  lines.push('## Accessibility / Accesibilidad');
  lines.push('');
  lines.push('- Single root `data-testid` hook per design / Un hook `data-testid` raíz por diseño.');
  lines.push(`- Primary control has a non-empty accessible name (aria-label or label) / El control principal tiene nombre accesible no vacío (aria-label o label).`);
  lines.push('- `:focus-visible` outline on interactive elements / Outline `:focus-visible` en elementos interactivos.');
  lines.push('- Fluid layout: no horizontal overflow at 360 px / Diseño fluido: sin desborde horizontal a 360 px.');
  lines.push('');
  lines.push('## Gallery / Galería');
  lines.push('');
  lines.push('Open `index.html` to browse all 10 designs with prev/next navigation and quick links / Abre `index.html` para recorrer los 10 diseños con navegación prev/next y accesos rápidos.');
  lines.push('');
  lines.push('Gallery is generated from the shared manifest + template — regenerate with:');
  lines.push('');
  lines.push('La galería se genera desde el manifest + template compartidos — regenera con:');
  lines.push('');
  lines.push('```');
  lines.push('cd ui-components && node tests/gallery-gen.mjs');
  lines.push('```');
  lines.push('');
  lines.push('## Credit / Crédito');
  lines.push('');
  lines.push('Harley Vásquez · [linkedin.com/in/harleyvasquez](https://www.linkedin.com/in/harleyvasquez)');
  lines.push('');
  lines.push(`© 2026 Harley Vásquez — UI Components Sprint ${String(comp.sprint).padStart(2, '0')} / Componentes UI Sprint ${String(comp.sprint).padStart(2, '0')}.`);
  return lines.join('\n') + '\n';
}

let n = 0;
for (const comp of manifest.components) {
  writeFileSync(join(ROOT, comp.slug, 'README.md'), writeReadme(comp), 'utf8');
  n++;
}
console.log(`readmes written: ${n}`);