# popover — 10 Designs · undefined — 10 Diseños

Popover triggers and panels, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Triggers y paneles popover, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Click Trigger | Click Trigger Popover | Popover triggers and panels variant 1 / variante 1 | Triggers y paneles popover variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Focus Trigger | Focus Trigger Popover | Popover triggers and panels variant 2 / variante 2 | Triggers y paneles popover variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Terminal Popover | Terminal Popover | Popover triggers and panels variant 3 / variante 3 | Triggers y paneles popover variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Dark Popover | Dark Popover | Popover triggers and panels variant 4 / variante 4 | Triggers y paneles popover variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Gradient Popover | Gradient Popover | Popover triggers and panels variant 5 / variante 5 | Triggers y paneles popover variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Modal Overlay Popover | Modal Overlay Popover | Popover triggers and panels variant 6 / variante 6 | Triggers y paneles popover variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Transparent Popover | Transparent Popover | Popover triggers and panels variant 7 / variante 7 | Triggers y paneles popover variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Inline Popover | Inline Popover | Popover triggers and panels variant 8 / variante 8 | Triggers y paneles popover variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Multi-line Popover | Multi-line Popover | Popover triggers and panels variant 9 / variante 9 | Triggers y paneles popover variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Sticky Bottom Popover | Sticky Bottom Popover | Popover triggers and panels variant 10 / variante 10 | Triggers y paneles popover variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="popover"]; the accessible name is resolved from [data-testid="popover"] and focus-visible is verified on [data-testid=popover].

Cada diseño expone el hook de prueba [data-testid="popover"]; el nombre accesible se resuelve desde [data-testid="popover"] y el focus-visible se verifica en [data-testid=popover].

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
