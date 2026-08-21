# Calendar — 10 Designs · Calendario — 10 Diseños

Static calendar grids, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Grillas de calendario estáticas, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Calendar Grid | Calendar Grid | Static calendar grids variant 1 / variante 1 | Grillas de calendario estáticas variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Calendar Minimal | Minimal Calendar | Static calendar grids variant 2 / variante 2 | Grillas de calendario estáticas variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Calendar Terminal | Terminal Calendar | Static calendar grids variant 3 / variante 3 | Grillas de calendario estáticas variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Calendar Dark | Dark Calendar | Static calendar grids variant 4 / variante 4 | Grillas de calendario estáticas variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Calendar Gradient | Gradient Calendar | Static calendar grids variant 5 / variante 5 | Grillas de calendario estáticas variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Calendar Mono | Mono Calendar | Static calendar grids variant 6 / variante 6 | Grillas de calendario estáticas variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Calendar Pill | Pill Calendar | Static calendar grids variant 7 / variante 7 | Grillas de calendario estáticas variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Calendar Rounded | Rounded Calendar | Static calendar grids variant 8 / variante 8 | Grillas de calendario estáticas variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Calendar Badge | Badge Calendar | Static calendar grids variant 9 / variante 9 | Grillas de calendario estáticas variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Calendar Editor | Editor Calendar | Static calendar grids variant 10 / variante 10 | Grillas de calendario estáticas variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="calendar"]; the accessible name is resolved from [data-testid="calendar"] and focus-visible is verified on [data-testid=calendar].

Cada diseño expone el hook de prueba [data-testid="calendar"]; el nombre accesible se resuelve desde [data-testid="calendar"] y el focus-visible se verifica en [data-testid=calendar].

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

© 2026 Harley Vásquez — UI Components Sprint 10 / Componentes UI Sprint 10.
