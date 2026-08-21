# Header — 10 Designs · Cabecera — 10 Diseños

Page headers with scroll effects, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Cabeceras de página con efectos de scroll, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Header Sticky | Header Fijo | Page headers with scroll effects variant 1 / variante 1 | Cabeceras de página con efectos de scroll variante 1 | Links navigate natively; scroll effects in 3 of 10 / Los enlaces navegan nativamente; efectos de scroll en 3 de 10 |
| 02 | Header Minimal | Minimalista | Page headers with scroll effects variant 2 / variante 2 | Cabeceras de página con efectos de scroll variante 2 | Links navigate natively; scroll effects in 3 of 10 / Los enlaces navegan nativamente; efectos de scroll en 3 de 10 |
| 03 | Header Dark | Oscuro | Page headers with scroll effects variant 3 / variante 3 | Cabeceras de página con efectos de scroll variante 3 | Links navigate natively; scroll effects in 3 of 10 / Los enlaces navegan nativamente; efectos de scroll en 3 de 10 |
| 04 | Header Gradient | Gradiente | Page headers with scroll effects variant 4 / variante 4 | Cabeceras de página con efectos de scroll variante 4 | Links navigate natively; scroll effects in 3 of 10 / Los enlaces navegan nativamente; efectos de scroll en 3 de 10 |
| 05 | Header Transparent | Transparente | Page headers with scroll effects variant 5 / variante 5 | Cabeceras de página con efectos de scroll variante 5 | Links navigate natively; scroll effects in 3 of 10 / Los enlaces navegan nativamente; efectos de scroll en 3 de 10 |
| 06 | Header Minimal Dark | Minimal Oscuro | Page headers with scroll effects variant 6 / variante 6 | Cabeceras de página con efectos de scroll variante 6 | Links navigate natively; scroll effects in 3 of 10 / Los enlaces navegan nativamente; efectos de scroll en 3 de 10 |
| 07 | Header Sticky with Search | Header Fijo con Búsqueda | Page headers with scroll effects variant 7 / variante 7 | Cabeceras de página con efectos de scroll variante 7 | Links navigate natively; scroll effects in 3 of 10 / Los enlaces navegan nativamente; efectos de scroll en 3 de 10 |
| 08 | Header Condensed | Condensado | Page headers with scroll effects variant 8 / variante 8 | Cabeceras de página con efectos de scroll variante 8 | Links navigate natively; scroll effects in 3 of 10 / Los enlaces navegan nativamente; efectos de scroll en 3 de 10 |
| 09 | Header with Avatar | Header con Avatar | Page headers with scroll effects variant 9 / variante 9 | Cabeceras de página con efectos de scroll variante 9 | Links navigate natively; scroll effects in 3 of 10 / Los enlaces navegan nativamente; efectos de scroll en 3 de 10 |
| 10 | Header Mobile First | Mobile First | Page headers with scroll effects variant 10 / variante 10 | Cabeceras de página con efectos de scroll variante 10 | Links navigate natively; scroll effects in 3 of 10 / Los enlaces navegan nativamente; efectos de scroll en 3 de 10 |

Every design exposes the probe hook [data-testid="header"]; the accessible name is resolved from [data-testid="header"] and focus-visible is verified on [data-testid=header] a.

Cada diseño expone el hook de prueba [data-testid="header"]; el nombre accesible se resuelve desde [data-testid="header"] y el focus-visible se verifica en [data-testid=header] a.

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

© 2026 Harley Vásquez — UI Components Sprint 13 / Componentes UI Sprint 13.
