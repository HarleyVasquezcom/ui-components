# pagination — 10 Designs · undefined — 10 Diseños

Page controls with prev/next and numbers, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Controles de página con prev/next y números, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Paginación Numérica Clásica | Classic Numerical Pagination | Page controls with prev/next and numbers variant 1 / variante 1 | Controles de página con prev/next y números variante 1 | Page clicks switch pages / Los clics en páginas cambian de página |
| 02 | Paginación con Bordes Suaves | Pagination with Border Radius | Page controls with prev/next and numbers variant 2 / variante 2 | Controles de página con prev/next y números variante 2 | Page clicks switch pages / Los clics en páginas cambian de página |
| 03 | Paginación Minimalista | Minimalist Pagination | Page controls with prev/next and numbers variant 3 / variante 3 | Controles de página con prev/next y números variante 3 | Page clicks switch pages / Los clics en páginas cambian de página |
| 04 | Paginación con Background Gradiente | Gradient Background Pagination | Page controls with prev/next and numbers variant 4 / variante 4 | Controles de página con prev/next y números variante 4 | Page clicks switch pages / Los clics en páginas cambian de página |
| 05 | Paginación con Tarjetas de Contenido | Content Cards Pagination | Page controls with prev/next and numbers variant 5 / variante 5 | Controles de página con prev/next y números variante 5 | Page clicks switch pages / Los clics en páginas cambian de página |
| 06 | Paginación Oscura | Dark Mode Pagination | Page controls with prev/next and numbers variant 6 / variante 6 | Controles de página con prev/next y números variante 6 | Page clicks switch pages / Los clics en páginas cambian de página |
| 07 | Paginación con Visualización de Saltos | Jump-Through Pagination | Page controls with prev/next and numbers variant 7 / variante 7 | Controles de página con prev/next y números variante 7 | Page clicks switch pages / Los clics en páginas cambian de página |
| 08 | Paginación con Avatar de Usuario | User Avatar Pagination | Page controls with prev/next and numbers variant 8 / variante 8 | Controles de página con prev/next y números variante 8 | Page clicks switch pages / Los clics en páginas cambian de página |
| 09 | Paginación con Íconos de Nube | Cloud Icon Pagination | Page controls with prev/next and numbers variant 9 / variante 9 | Controles de página con prev/next y números variante 9 | Page clicks switch pages / Los clics en páginas cambian de página |
| 10 | Paginación con Efecto Hover 3D | 3D Hover Effect Pagination | Page controls with prev/next and numbers variant 10 / variante 10 | Controles de página con prev/next y números variante 10 | Page clicks switch pages / Los clics en páginas cambian de página |

Every design exposes the probe hook [data-testid="pagination"]; the accessible name is resolved from [data-testid="pagination"] and focus-visible is verified on [data-testid=pagination] button, [data-testid=pagination] a, [data-testid=pagination] .page-link.

Cada diseño expone el hook de prueba [data-testid="pagination"]; el nombre accesible se resuelve desde [data-testid="pagination"] y el focus-visible se verifica en [data-testid=pagination] button, [data-testid=pagination] a, [data-testid=pagination] .page-link.

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

© 2026 Harley Vásquez — UI Components Sprint 06 / Componentes UI Sprint 06.
