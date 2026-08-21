# modal — 10 Designs · undefined — 10 Diseños

Modal overlays with dialog semantics, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Overlays modales con semántica de diálogo, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Confirm Modal | Confirm Modal | Modal overlays with dialog semantics variant 1 / variante 1 | Overlays modales con semántica de diálogo variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Minimal Modal | Minimal Modal | Modal overlays with dialog semantics variant 2 / variante 2 | Overlays modales con semántica de diálogo variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Terminal Modal | Terminal Modal | Modal overlays with dialog semantics variant 3 / variante 3 | Overlays modales con semántica de diálogo variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Dark Modal | Dark Modal | Modal overlays with dialog semantics variant 4 / variante 4 | Overlays modales con semántica de diálogo variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Gradient Modal | Gradient Modal | Modal overlays with dialog semantics variant 5 / variante 5 | Overlays modales con semántica de diálogo variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Mono Modal | Mono Modal | Modal overlays with dialog semantics variant 6 / variante 6 | Overlays modales con semántica de diálogo variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Pill Modal | Pill Modal | Modal overlays with dialog semantics variant 7 / variante 7 | Overlays modales con semántica de diálogo variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Underlined Modal | Underlined Modal | Modal overlays with dialog semantics variant 8 / variante 8 | Overlays modales con semántica de diálogo variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Badge Modal | Badge Modal | Modal overlays with dialog semantics variant 9 / variante 9 | Overlays modales con semántica de diálogo variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Editor Modal | Editor Modal | Modal overlays with dialog semantics variant 10 / variante 10 | Overlays modales con semántica de diálogo variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="modal"]; the accessible name is resolved from [data-testid="modal"] and focus-visible is verified on [data-testid=modal].

Cada diseño expone el hook de prueba [data-testid="modal"]; el nombre accesible se resuelve desde [data-testid="modal"] y el focus-visible se verifica en [data-testid=modal].

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
