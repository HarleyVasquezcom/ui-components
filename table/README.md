# Data Table — 10 Designs · Tabla de datos — 10 Diseños

Data tables with row pagination, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Tablas de datos con paginación de filas, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Table Striped Row | Table with Striped Rows | Data tables with row pagination variant 1 / variante 1 | Tablas de datos con paginación de filas variante 1 | Pagination buttons page the rows / Los botones de paginación paginan las filas |
| 02 | Table Minimal | Minimal Table | Data tables with row pagination variant 2 / variante 2 | Tablas de datos con paginación de filas variante 2 | Pagination buttons page the rows / Los botones de paginación paginan las filas |
| 03 | Table Terminal | Terminal Table | Data tables with row pagination variant 3 / variante 3 | Tablas de datos con paginación de filas variante 3 | Pagination buttons page the rows / Los botones de paginación paginan las filas |
| 04 | Table Dark | Dark Table | Data tables with row pagination variant 4 / variante 4 | Tablas de datos con paginación de filas variante 4 | Pagination buttons page the rows / Los botones de paginación paginan las filas |
| 05 | Table Gradient | Gradient Table | Data tables with row pagination variant 5 / variante 5 | Tablas de datos con paginación de filas variante 5 | Pagination buttons page the rows / Los botones de paginación paginan las filas |
| 06 | Table Mono | Mono Table | Data tables with row pagination variant 6 / variante 6 | Tablas de datos con paginación de filas variante 6 | Pagination buttons page the rows / Los botones de paginación paginan las filas |
| 07 | Table Pill | Pill Table | Data tables with row pagination variant 7 / variante 7 | Tablas de datos con paginación de filas variante 7 | Pagination buttons page the rows / Los botones de paginación paginan las filas |
| 08 | Table Badge | Badge Table | Data tables with row pagination variant 8 / variante 8 | Tablas de datos con paginación de filas variante 8 | Pagination buttons page the rows / Los botones de paginación paginan las filas |
| 09 | Table Underlined | Underlined Table | Data tables with row pagination variant 9 / variante 9 | Tablas de datos con paginación de filas variante 9 | Pagination buttons page the rows / Los botones de paginación paginan las filas |
| 10 | Table Editor | Editor Table | Data tables with row pagination variant 10 / variante 10 | Tablas de datos con paginación de filas variante 10 | Pagination buttons page the rows / Los botones de paginación paginan las filas |

Every design exposes the probe hook [data-testid="table"]; the accessible name is resolved from [data-testid="table"] and focus-visible is verified on [data-testid=table] button, [data-testid=table] a.

Cada diseño expone el hook de prueba [data-testid="table"]; el nombre accesible se resuelve desde [data-testid="table"] y el focus-visible se verifica en [data-testid=table] button, [data-testid=table] a.

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

© 2026 Harley Vásquez — UI Components Sprint 09 / Componentes UI Sprint 09.
