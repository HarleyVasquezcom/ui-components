# Spinner — 10 Designs · Cargador — 10 Diseños

Loading spinners and progress visuals, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Cargadores y visuales de progreso, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Spinner Rotating | Giratorio | Loading spinners and progress visuals variant 1 / variante 1 | Cargadores y visuales de progreso variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Spinner Dark | Oscuro | Loading spinners and progress visuals variant 2 / variante 2 | Cargadores y visuales de progreso variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Spinner Gradient | Giratorio Gradiente | Loading spinners and progress visuals variant 3 / variante 3 | Cargadores y visuales de progreso variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Spinner Minimal | Minimalista | Loading spinners and progress visuals variant 4 / variante 4 | Cargadores y visuales de progreso variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Spinner Border | Con Borde | Loading spinners and progress visuals variant 5 / variante 5 | Cargadores y visuales de progreso variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Spinner Minimal Thin | Minimal Delgada | Loading spinners and progress visuals variant 6 / variante 6 | Cargadores y visuales de progreso variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Spinner Dual | Doble | Loading spinners and progress visuals variant 7 / variante 7 | Cargadores y visuales de progreso variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Spinner Pulse | Pulso | Loading spinners and progress visuals variant 8 / variante 8 | Cargadores y visuales de progreso variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Spinner Wave | Ola | Loading spinners and progress visuals variant 9 / variante 9 | Cargadores y visuales de progreso variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Spinner Neon | Neón | Loading spinners and progress visuals variant 10 / variante 10 | Cargadores y visuales de progreso variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="spinner"]; the accessible name is resolved from [data-testid="spinner"] and focus-visible is verified on [data-testid=spinner]; the contrast floor is measured against [data-testid=label].

Cada diseño expone el hook de prueba [data-testid="spinner"]; el nombre accesible se resuelve desde [data-testid="spinner"] y el focus-visible se verifica en [data-testid=spinner]; el piso de contraste se mide contra [data-testid=label].

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
