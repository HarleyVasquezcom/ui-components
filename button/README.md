# button — 10 Designs · undefined — 10 Diseños

Tappable buttons with hover, active and focus states, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Botones tappables con estados hover, activo y foco, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Glass Aero | Vidrio Aéreo | Tappable buttons with hover, active and focus states variant 1 / variante 1 | Botones tappables con estados hover, activo y foco variante 1 | Click increments the tap counter / El clic incrementa el contador de toques |
| 02 | Neumorph Soft | Neumorfismo Suave | Tappable buttons with hover, active and focus states variant 2 / variante 2 | Botones tappables con estados hover, activo y foco variante 2 | Click increments the tap counter / El clic incrementa el contador de toques |
| 03 | Neo Brutalist | Neo Brutalista | Tappable buttons with hover, active and focus states variant 3 / variante 3 | Botones tappables con estados hover, activo y foco variante 3 | Click increments the tap counter / El clic incrementa el contador de toques |
| 04 | Terminal Pulse | Terminal con Pulso | Tappable buttons with hover, active and focus states variant 4 / variante 4 | Botones tappables con estados hover, activo y foco variante 4 | Click increments the tap counter / El clic incrementa el contador de toques |
| 05 | Gradient Mesh | Malla de Degradado | Tappable buttons with hover, active and focus states variant 5 / variante 5 | Botones tappables con estados hover, activo y foco variante 5 | Click increments the tap counter / El clic incrementa el contador de toques |
| 06 | Outline Draft | Contorno en Boceto | Tappable buttons with hover, active and focus states variant 6 / variante 6 | Botones tappables con estados hover, activo y foco variante 6 | Click increments the tap counter / El clic incrementa el contador de toques |
| 07 | Skeuo 3D Chunk | Botón 3D Esqueuomorfo | Tappable buttons with hover, active and focus states variant 7 / variante 7 | Botones tappables con estados hover, activo y foco variante 7 | Click increments the tap counter / El clic incrementa el contador de toques |
| 08 | Pill Bokeh | Píldora Bokeh | Tappable buttons with hover, active and focus states variant 8 / variante 8 | Botones tappables con estados hover, activo y foco variante 8 | Click increments the tap counter / El clic incrementa el contador de toques |
| 09 | Editorial Sharp | Editorial Afilado | Tappable buttons with hover, active and focus states variant 9 / variante 9 | Botones tappables con estados hover, activo y foco variante 9 | Click increments the tap counter / El clic incrementa el contador de toques |
| 10 | Neon Void | Vacío Neón | Tappable buttons with hover, active and focus states variant 10 / variante 10 | Botones tappables con estados hover, activo y foco variante 10 | Click increments the tap counter / El clic incrementa el contador de toques |

Every design exposes the probe hook [data-testid="btn"]; the accessible name is resolved from [data-testid="btn"] and focus-visible is verified on [data-testid=btn].

Cada diseño expone el hook de prueba [data-testid="btn"]; el nombre accesible se resuelve desde [data-testid="btn"] y el focus-visible se verifica en [data-testid=btn].

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

© 2026 Harley Vásquez — UI Components Sprint 01 / Componentes UI Sprint 01.
