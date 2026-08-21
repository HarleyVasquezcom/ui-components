# charts — 10 Designs · undefined — 10 Diseños

CSS/SVG charts: bars, lines and donuts, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Gráficos CSS/SVG: barras, líneas y donas, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Bar Chart | Bar Chart | CSS/SVG charts: bars, lines and donuts variant 1 / variante 1 | Gráficos CSS/SVG: barras, líneas y donas variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Minimal Line | Minimal Line Chart | CSS/SVG charts: bars, lines and donuts variant 2 / variante 2 | Gráficos CSS/SVG: barras, líneas y donas variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Terminal Chart | Terminal Chart | CSS/SVG charts: bars, lines and donuts variant 3 / variante 3 | Gráficos CSS/SVG: barras, líneas y donas variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Gradient Chart | Gradient Chart | CSS/SVG charts: bars, lines and donuts variant 4 / variante 4 | Gráficos CSS/SVG: barras, líneas y donas variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Mono Chart | Mono Chart | CSS/SVG charts: bars, lines and donuts variant 5 / variante 5 | Gráficos CSS/SVG: barras, líneas y donas variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Pill Chart | Pill Chart | CSS/SVG charts: bars, lines and donuts variant 6 / variante 6 | Gráficos CSS/SVG: barras, líneas y donas variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Neon Chart | Neon Chart | CSS/SVG charts: bars, lines and donuts variant 7 / variante 7 | Gráficos CSS/SVG: barras, líneas y donas variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Underlined Chart | Underlined Chart | CSS/SVG charts: bars, lines and donuts variant 8 / variante 8 | Gráficos CSS/SVG: barras, líneas y donas variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Editor Chart | Editor Chart | CSS/SVG charts: bars, lines and donuts variant 9 / variante 9 | Gráficos CSS/SVG: barras, líneas y donas variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Dashboard Chart | Dashboard Chart | CSS/SVG charts: bars, lines and donuts variant 10 / variante 10 | Gráficos CSS/SVG: barras, líneas y donas variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="chart"]; the accessible name is resolved from [data-testid="chart"] and focus-visible is verified on [data-testid=chart]; the contrast floor is measured against [data-testid=label].

Cada diseño expone el hook de prueba [data-testid="chart"]; el nombre accesible se resuelve desde [data-testid="chart"] y el focus-visible se verifica en [data-testid=chart]; el piso de contraste se mide contra [data-testid=label].

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

© 2026 Harley Vásquez — UI Components Sprint 08 / Componentes UI Sprint 08.
