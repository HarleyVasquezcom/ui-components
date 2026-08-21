# tabs — 10 Designs · undefined — 10 Diseños

Tab bars with sliding and labeled indicators, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Barras de pestañas con indicadores deslizantes y etiquetados, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Card Switch | Conmutador de Tarjeta | Tab bars with sliding and labeled indicators variant 1 / variante 1 | Barras de pestañas con indicadores deslizantes y etiquetados variante 1 | Click moves the selected tab + panel / El clic mueve la pestaña seleccionada + panel |
| 02 | Minimal Indicators | Indicadores Mínimos | Tab bars with sliding and labeled indicators variant 2 / variante 2 | Barras de pestañas con indicadores deslizantes y etiquetados variante 2 | Click moves the selected tab + panel / El clic mueve la pestaña seleccionada + panel |
| 03 | Pill Separated | Píldora Separada | Tab bars with sliding and labeled indicators variant 3 / variante 3 | Barras de pestañas con indicadores deslizantes y etiquetados variante 3 | Click moves the selected tab + panel / El clic mueve la pestaña seleccionada + panel |
| 04 | Dark Tabs | Tabs Oscuros | Tab bars with sliding and labeled indicators variant 4 / variante 4 | Barras de pestañas con indicadores deslizantes y etiquetados variante 4 | Click moves the selected tab + panel / El clic mueve la pestaña seleccionada + panel |
| 05 | Gradient Indicators | Indicadores Degradados | Tab bars with sliding and labeled indicators variant 5 / variante 5 | Barras de pestañas con indicadores deslizantes y etiquetados variante 5 | Click moves the selected tab + panel / El clic mueve la pestaña seleccionada + panel |
| 06 | Mono Labels | Etiquetas Mono | Tab bars with sliding and labeled indicators variant 6 / variante 6 | Barras de pestañas con indicadores deslizantes y etiquetados variante 6 | Click moves the selected tab + panel / El clic mueve la pestaña seleccionada + panel |
| 07 | Numbered Steps | Pasos Numerados | Tab bars with sliding and labeled indicators variant 7 / variante 7 | Barras de pestañas con indicadores deslizantes y etiquetados variante 7 | Click moves the selected tab + panel / El clic mueve la pestaña seleccionada + panel |
| 08 | Underlined Switch | Intercambio Subrayado | Tab bars with sliding and labeled indicators variant 8 / variante 8 | Barras de pestañas con indicadores deslizantes y etiquetados variante 8 | Click moves the selected tab + panel / El clic mueve la pestaña seleccionada + panel |
| 09 | Icon Only | Solo Ícono | Tab bars with sliding and labeled indicators variant 9 / variante 9 | Barras de pestañas con indicadores deslizantes y etiquetados variante 9 | Click moves the selected tab + panel / El clic mueve la pestaña seleccionada + panel |
| 10 | Terminal Switch | Conmutador Terminal | Tab bars with sliding and labeled indicators variant 10 / variante 10 | Barras de pestañas con indicadores deslizantes y etiquetados variante 10 | Click moves the selected tab + panel / El clic mueve la pestaña seleccionada + panel |

Every design exposes the probe hook [data-testid="tab"]; the accessible name is resolved from [data-testid="tab"] and focus-visible is verified on [data-testid=tab].

Cada diseño expone el hook de prueba [data-testid="tab"]; el nombre accesible se resuelve desde [data-testid="tab"] y el focus-visible se verifica en [data-testid=tab].

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

© 2026 Harley Vásquez — UI Components Sprint 05 / Componentes UI Sprint 05.
