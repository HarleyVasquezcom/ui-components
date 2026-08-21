# dropdown — 10 Designs · undefined — 10 Diseños

Select controls: native and custom listboxes, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Controles select: nativos y listbox personalizados, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Custom Select Native | Select Nativo Personalizado | Select controls: native and custom listboxes variant 1 / variante 1 | Controles select: nativos y listbox personalizados variante 1 | Click opens the listbox; arrows + Enter select / El clic abre el listbox; flechas + Enter seleccionan |
| 02 | Listbox Custom | Listbox Personalizado | Select controls: native and custom listboxes variant 2 / variante 2 | Controles select: nativos y listbox personalizados variante 2 | Click opens the listbox; arrows + Enter select / El clic abre el listbox; flechas + Enter seleccionan |
| 03 | Pill Menu | Menú Píldora | Select controls: native and custom listboxes variant 3 / variante 3 | Controles select: nativos y listbox personalizados variante 3 | Click opens the listbox; arrows + Enter select / El clic abre el listbox; flechas + Enter seleccionan |
| 04 | Searchable Select | Select con Búsqueda | Select controls: native and custom listboxes variant 4 / variante 4 | Controles select: nativos y listbox personalizados variante 4 | Click opens the listbox; arrows + Enter select / El clic abre el listbox; flechas + Enter seleccionan |
| 05 | Mega Simple | Mega Simple | Select controls: native and custom listboxes variant 5 / variante 5 | Controles select: nativos y listbox personalizados variante 5 | Click opens the listbox; arrows + Enter select / El clic abre el listbox; flechas + Enter seleccionan |
| 06 | Minimal Caret | Caret Mínimo | Select controls: native and custom listboxes variant 6 / variante 6 | Controles select: nativos y listbox personalizados variante 6 | Click opens the listbox; arrows + Enter select / El clic abre el listbox; flechas + Enter seleccionan |
| 07 | Card Options | Opciones en Tarjeta | Select controls: native and custom listboxes variant 7 / variante 7 | Controles select: nativos y listbox personalizados variante 7 | Click opens the listbox; arrows + Enter select / El clic abre el listbox; flechas + Enter seleccionan |
| 08 | Dark Popover | Popover Oscuro | Select controls: native and custom listboxes variant 8 / variante 8 | Controles select: nativos y listbox personalizados variante 8 | Click opens the listbox; arrows + Enter select / El clic abre el listbox; flechas + Enter seleccionan |
| 09 | Sectioned List | Lista por Secciones | Select controls: native and custom listboxes variant 9 / variante 9 | Controles select: nativos y listbox personalizados variante 9 | Click opens the listbox; arrows + Enter select / El clic abre el listbox; flechas + Enter seleccionan |
| 10 | Animated List | Lista Animada | Select controls: native and custom listboxes variant 10 / variante 10 | Controles select: nativos y listbox personalizados variante 10 | Click opens the listbox; arrows + Enter select / El clic abre el listbox; flechas + Enter seleccionan |

Every design exposes the probe hook [data-testid="trigger"]; the accessible name is resolved from [data-testid="trigger"] and focus-visible is verified on [data-testid=trigger]; the contrast floor is measured against [data-testid=label].

Cada diseño expone el hook de prueba [data-testid="trigger"]; el nombre accesible se resuelve desde [data-testid="trigger"] y el focus-visible se verifica en [data-testid=trigger]; el piso de contraste se mide contra [data-testid=label].

## Accessibility / Accesibilidad

- Single root `data-testid` hook per design / Un hook `data-testid` raíz por diseño.
- Primary control has a non-empty accessible name (aria-label or label) / El control principal tiene nombre accesible no vacío (aria-label o label).
- `:focus-visible` outline on interactive elements / Outline `:focus-visible` en elementos interactivos.
- Fluid layout: no horizontal overflow at 360 px / Diseño fluido: sin desborde horizontal a 360 px.

## Gallery / Galería

Open `index.html` to browse all 10 designs with prev/next navigation and quick links / Abre `index.html` para recorrer los 10 diseños con navegación prev/next y accesos rápidos.

Gallery is generated from the shared manifest + template — regenerate with:

La galería se genera desde el manifest + template compartidos — regenera con:

```
cd ui-components && node tests/gallery-gen.mjs
```

## Credit / Crédito

Harley Vásquez · [linkedin.com/in/harleyvasquez](https://www.linkedin.com/in/harleyvasquez)

© 2026 Harley Vásquez — UI Components Sprint 02 / Componentes UI Sprint 02.
