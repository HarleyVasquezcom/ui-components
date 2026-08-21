# Confirm Dialog — 10 Designs · Diálogo de confirmación — 10 Diseños

Confirmation dialogs with actions, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Diálogos de confirmación con acciones, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Confirm Dialog Modal | Modal | Confirmation dialogs with actions variant 1 / variante 1 | Diálogos de confirmación con acciones variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Confirm Dialog Dark | Oscuro | Confirmation dialogs with actions variant 2 / variante 2 | Diálogos de confirmación con acciones variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Confirm Dialog Gradient | Gradiente | Confirmation dialogs with actions variant 3 / variante 3 | Diálogos de confirmación con acciones variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Confirm Dialog Minimal | Minimalista | Confirmation dialogs with actions variant 4 / variante 4 | Diálogos de confirmación con acciones variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Confirm Dialog with Icon | Con Icono | Confirmation dialogs with actions variant 5 / variante 5 | Diálogos de confirmación con acciones variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Confirm Dialog Border | Con Borde | Confirmation dialogs with actions variant 6 / variante 6 | Diálogos de confirmación con acciones variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Confirm Dialog Slide-in | Deslizante | Confirmation dialogs with actions variant 7 / variante 7 | Diálogos de confirmación con acciones variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Confirm Dialog with Image | Con Imagen | Confirmation dialogs with actions variant 8 / variante 8 | Diálogos de confirmación con acciones variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Confirm Dialog Fullscreen | Pantalla Completa | Confirmation dialogs with actions variant 9 / variante 9 | Diálogos de confirmación con acciones variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Confirm Dialog with Icon and Text | Con Icono y Texto | Confirmation dialogs with actions variant 10 / variante 10 | Diálogos de confirmación con acciones variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="dialog"]; the accessible name is resolved from [data-testid="dialog"] and focus-visible is verified on [data-testid=dialog] button.

Cada diseño expone el hook de prueba [data-testid="dialog"]; el nombre accesible se resuelve desde [data-testid="dialog"] y el focus-visible se verifica en [data-testid=dialog] button.

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

© 2026 Harley Vásquez — UI Components Sprint 12 / Componentes UI Sprint 12.
