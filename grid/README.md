# grid — 10 Designs · undefined — 10 Diseños

Responsive grids with filter toggles, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Mallas responsivas con toggles de filtro, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Grid Responsive 3 Col | Responsive 3-Column Grid | Responsive grids with filter toggles variant 1 / variante 1 | Mallas responsivas con toggles de filtro variante 1 | Filter toggles re-arrange the grid / Los toggles reordenan la malla |
| 02 | Grid Minimal Gap | Minimal Gap Grid | Responsive grids with filter toggles variant 2 / variante 2 | Mallas responsivas con toggles de filtro variante 2 | Filter toggles re-arrange the grid / Los toggles reordenan la malla |
| 03 | Grid Terminal | Terminal Grid | Responsive grids with filter toggles variant 3 / variante 3 | Mallas responsivas con toggles de filtro variante 3 | Filter toggles re-arrange the grid / Los toggles reordenan la malla |
| 04 | Grid Dark | Dark Grid | Responsive grids with filter toggles variant 4 / variante 4 | Mallas responsivas con toggles de filtro variante 4 | Filter toggles re-arrange the grid / Los toggles reordenan la malla |
| 05 | Grid Gradient | Gradient Grid | Responsive grids with filter toggles variant 5 / variante 5 | Mallas responsivas con toggles de filtro variante 5 | Filter toggles re-arrange the grid / Los toggles reordenan la malla |
| 06 | Grid Mono | Mono Grid | Responsive grids with filter toggles variant 6 / variante 6 | Mallas responsivas con toggles de filtro variante 6 | Filter toggles re-arrange the grid / Los toggles reordenan la malla |
| 07 | Grid Pill | Pill Grid | Responsive grids with filter toggles variant 7 / variante 7 | Mallas responsivas con toggles de filtro variante 7 | Filter toggles re-arrange the grid / Los toggles reordenan la malla |
| 08 | Grid Badge | Badge Grid | Responsive grids with filter toggles variant 8 / variante 8 | Mallas responsivas con toggles de filtro variante 8 | Filter toggles re-arrange the grid / Los toggles reordenan la malla |
| 09 | Grid Underlined | Underlined Grid | Responsive grids with filter toggles variant 9 / variante 9 | Mallas responsivas con toggles de filtro variante 9 | Filter toggles re-arrange the grid / Los toggles reordenan la malla |
| 10 | Grid Editor | Editor Grid | Responsive grids with filter toggles variant 10 / variante 10 | Mallas responsivas con toggles de filtro variante 10 | Filter toggles re-arrange the grid / Los toggles reordenan la malla |

Every design exposes the probe hook [data-testid="grid"]; the accessible name is resolved from [data-testid="grid"] and focus-visible is verified on [data-testid=grid]; the contrast floor is measured against [data-testid=grid].

Cada diseño expone el hook de prueba [data-testid="grid"]; el nombre accesible se resuelve desde [data-testid="grid"] y el focus-visible se verifica en [data-testid=grid]; el piso de contraste se mide contra [data-testid=grid].

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

© 2026 Harley Vásquez — UI Components Sprint 07 / Componentes UI Sprint 07.
