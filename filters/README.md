# filters — 10 Designs · undefined — 10 Diseños

Filter panels that re-count results live, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Paneles de filtro que recalculan resultados en vivo, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Checkbox List | Lista de Casillas | Filter panels that re-count results live variant 1 / variante 1 | Paneles de filtro que recalculan resultados en vivo variante 1 | Controls re-count results; reset and clear-all / Los controles recalculan resultados; reset y limpiar todo |
| 02 | Pill Chips | Chips de Píldora | Filter panels that re-count results live variant 2 / variante 2 | Paneles de filtro que recalculan resultados en vivo variante 2 | Controls re-count results; reset and clear-all / Los controles recalculan resultados; reset y limpiar todo |
| 03 | Slider Range | Rango Deslizante | Filter panels that re-count results live variant 3 / variante 3 | Paneles de filtro que recalculan resultados en vivo variante 3 | Controls re-count results; reset and clear-all / Los controles recalculan resultados; reset y limpiar todo |
| 04 | Toggle Rows | Filas Interruptor | Filter panels that re-count results live variant 4 / variante 4 | Paneles de filtro que recalculan resultados en vivo variante 4 | Controls re-count results; reset and clear-all / Los controles recalculan resultados; reset y limpiar todo |
| 05 | Accordion Counts | Acordeón con Conteos | Filter panels that re-count results live variant 5 / variante 5 | Paneles de filtro que recalculan resultados en vivo variante 5 | Controls re-count results; reset and clear-all / Los controles recalculan resultados; reset y limpiar todo |
| 06 | Dark Panel | Panel Oscuro | Filter panels that re-count results live variant 6 / variante 6 | Paneles de filtro que recalculan resultados en vivo variante 6 | Controls re-count results; reset and clear-all / Los controles recalculan resultados; reset y limpiar todo |
| 07 | Card Grid | Rejilla de Tarjetas | Filter panels that re-count results live variant 7 / variante 7 | Paneles de filtro que recalculan resultados en vivo variante 7 | Controls re-count results; reset and clear-all / Los controles recalculan resultados; reset y limpiar todo |
| 08 | Minimal Checks | Casillas Mínimas | Filter panels that re-count results live variant 8 / variante 8 | Paneles de filtro que recalculan resultados en vivo variante 8 | Controls re-count results; reset and clear-all / Los controles recalculan resultados; reset y limpiar todo |
| 09 | Color Filter | Filtro de Color | Filter panels that re-count results live variant 9 / variante 9 | Paneles de filtro que recalculan resultados en vivo variante 9 | Controls re-count results; reset and clear-all / Los controles recalculan resultados; reset y limpiar todo |
| 10 | Terminal Tail | Cola de Terminal | Filter panels that re-count results live variant 10 / variante 10 | Paneles de filtro que recalculan resultados en vivo variante 10 | Controls re-count results; reset and clear-all / Los controles recalculan resultados; reset y limpiar todo |

Every design exposes the probe hook [data-testid="count"]; the accessible name is resolved from [data-testid="check"], [data-testid="pill"], [data-testid="range"], [data-testid="toggle"], [data-testid="dot"] and focus-visible is verified on [data-testid=check], [data-testid=pill], [data-testid=range], [data-testid=toggle], [data-testid=dot]; the contrast floor is measured against [data-testid=label].

Cada diseño expone el hook de prueba [data-testid="count"]; el nombre accesible se resuelve desde [data-testid="check"], [data-testid="pill"], [data-testid="range"], [data-testid="toggle"], [data-testid="dot"] y el focus-visible se verifica en [data-testid=check], [data-testid=pill], [data-testid=range], [data-testid=toggle], [data-testid=dot]; el piso de contraste se mide contra [data-testid=label].

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

© 2026 Harley Vásquez — UI Components Sprint 04 / Componentes UI Sprint 04.
