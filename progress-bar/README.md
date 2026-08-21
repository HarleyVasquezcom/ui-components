# progress bar — 10 Designs · undefined — 10 Diseños

Progress bars: determinate, indeterminate and animated, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Barras de progreso: determinadas, indeterminadas y animadas, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Determinate | Determinate Progress Bar | Progress bars: determinate, indeterminate and animated variant 1 / variante 1 | Barras de progreso: determinadas, indeterminadas y animadas variante 1 | Click fills the bar (2 of 10) / El clic llena la barra (2 de 10) |
| 02 | Indeterminate | Indeterminate Progress Bar | Progress bars: determinate, indeterminate and animated variant 2 / variante 2 | Barras de progreso: determinadas, indeterminadas y animadas variante 2 | Click fills the bar (2 of 10) / El clic llena la barra (2 de 10) |
| 03 | Success | Success Progress Bar | Progress bars: determinate, indeterminate and animated variant 3 / variante 3 | Barras de progreso: determinadas, indeterminadas y animadas variante 3 | Click fills the bar (2 of 10) / El clic llena la barra (2 de 10) |
| 04 | Warning | Warning Progress Bar | Progress bars: determinate, indeterminate and animated variant 4 / variante 4 | Barras de progreso: determinadas, indeterminadas y animadas variante 4 | Click fills the bar (2 of 10) / El clic llena la barra (2 de 10) |
| 05 | Critical | Critical Progress Bar | Progress bars: determinate, indeterminate and animated variant 5 / variante 5 | Barras de progreso: determinadas, indeterminadas y animadas variante 5 | Click fills the bar (2 of 10) / El clic llena la barra (2 de 10) |
| 06 | Elastic Bar | Barra Elástica | Progress bars: determinate, indeterminate and animated variant 6 / variante 6 | Barras de progreso: determinadas, indeterminadas y animadas variante 6 | Click fills the bar (2 of 10) / El clic llena la barra (2 de 10) |
| 07 | 75% | 75% Progress Bar | Progress bars: determinate, indeterminate and animated variant 7 / variante 7 | Barras de progreso: determinadas, indeterminadas y animadas variante 7 | Click fills the bar (2 of 10) / El clic llena la barra (2 de 10) |
| 08 | 100% | 100% Progress Bar | Progress bars: determinate, indeterminate and animated variant 8 / variante 8 | Barras de progreso: determinadas, indeterminadas y animadas variante 8 | Click fills the bar (2 of 10) / El clic llena la barra (2 de 10) |
| 09 | Animated | Animated Progress Bar | Progress bars: determinate, indeterminate and animated variant 9 / variante 9 | Barras de progreso: determinadas, indeterminadas y animadas variante 9 | Click fills the bar (2 of 10) / El clic llena la barra (2 de 10) |
| 10 | Determinate with Color Change | Determinate with Color Change Progress Bar | Progress bars: determinate, indeterminate and animated variant 10 / variante 10 | Barras de progreso: determinadas, indeterminadas y animadas variante 10 | Click fills the bar (2 of 10) / El clic llena la barra (2 de 10) |

Every design exposes the probe hook [data-testid="progress-bar"]; the accessible name is resolved from [data-testid="progress-bar"] and focus-visible is verified on [data-testid=progress-bar] button, [data-testid=progress-bar] .progress-btn; the contrast floor is measured against [data-testid=label].

Cada diseño expone el hook de prueba [data-testid="progress-bar"]; el nombre accesible se resuelve desde [data-testid="progress-bar"] y el focus-visible se verifica en [data-testid=progress-bar] button, [data-testid=progress-bar] .progress-btn; el piso de contraste se mide contra [data-testid=label].

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

© 2026 Harley Vásquez — UI Components Sprint 11 / Componentes UI Sprint 11.
