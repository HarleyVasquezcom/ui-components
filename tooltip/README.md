# tooltip — 10 Designs · undefined — 10 Diseños

Tooltip triggers with hover reveals, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Triggers de tooltip con revelado al hover, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Hover Trigger | Hover Trigger Tooltip | Tooltip triggers with hover reveals variant 1 / variante 1 | Triggers de tooltip con revelado al hover variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Focus Trigger | Focus Trigger Tooltip | Tooltip triggers with hover reveals variant 2 / variante 2 | Triggers de tooltip con revelado al hover variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Dark Mode Trigger | Dark Mode Tooltip | Tooltip triggers with hover reveals variant 3 / variante 3 | Triggers de tooltip con revelado al hover variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Light Mode Trigger | Light Mode Tooltip | Tooltip triggers with hover reveals variant 4 / variante 4 | Triggers de tooltip con revelado al hover variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Gradient Trigger | Gradient Tooltip | Tooltip triggers with hover reveals variant 5 / variante 5 | Triggers de tooltip con revelado al hover variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Rounded Trigger | Rounded Tooltip | Tooltip triggers with hover reveals variant 6 / variante 6 | Triggers de tooltip con revelado al hover variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Blue Trigger | Blue Tooltip | Tooltip triggers with hover reveals variant 7 / variante 7 | Triggers de tooltip con revelado al hover variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Purple Trigger | Purple Tooltip | Tooltip triggers with hover reveals variant 8 / variante 8 | Triggers de tooltip con revelado al hover variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Green Trigger | Green Tooltip | Tooltip triggers with hover reveals variant 9 / variante 9 | Triggers de tooltip con revelado al hover variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Multi-line Tooltip | Multi-line Tooltip | Tooltip triggers with hover reveals variant 10 / variante 10 | Triggers de tooltip con revelado al hover variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="tooltip"]; the accessible name is resolved from [data-testid="tooltip"] and focus-visible is verified on [data-testid=tooltip].

Cada diseño expone el hook de prueba [data-testid="tooltip"]; el nombre accesible se resuelve desde [data-testid="tooltip"] y el focus-visible se verifica en [data-testid=tooltip].

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
