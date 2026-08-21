# anchor — 10 Designs · undefined — 10 Diseños

In-page anchors with hash navigation, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Anclas internas con navegación hash, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | soft-link | soft-enlace | In-page anchors with hash navigation variant 1 / variante 1 | Anclas internas con navegación hash variante 1 | Click jumps to the section (hash navigation) / El clic salta a la sección (navegación hash) |
| 02 | bold-anchor | bold-ancla | In-page anchors with hash navigation variant 2 / variante 2 | Anclas internas con navegación hash variante 2 | Click jumps to the section (hash navigation) / El clic salta a la sección (navegación hash) |
| 03 | terminal-anchor | ancla terminal | In-page anchors with hash navigation variant 3 / variante 3 | Anclas internas con navegación hash variante 3 | Click jumps to the section (hash navigation) / El clic salta a la sección (navegación hash) |
| 04 | dark-minimal | oscuro-minimalista | In-page anchors with hash navigation variant 4 / variante 4 | Anclas internas con navegación hash variante 4 | Click jumps to the section (hash navigation) / El clic salta a la sección (navegación hash) |
| 05 | gradient-anchor | ancla gradient | In-page anchors with hash navigation variant 5 / variante 5 | Anclas internas con navegación hash variante 5 | Click jumps to the section (hash navigation) / El clic salta a la sección (navegación hash) |
| 06 | cite-link | enlace-cita | In-page anchors with hash navigation variant 6 / variante 6 | Anclas internas con navegación hash variante 6 | Click jumps to the section (hash navigation) / El clic salta a la sección (navegación hash) |
| 07 | list-anchor | ancla-lista | In-page anchors with hash navigation variant 7 / variante 7 | Anclas internas con navegación hash variante 7 | Click jumps to the section (hash navigation) / El clic salta a la sección (navegación hash) |
| 08 | section-jump | salto-sección | In-page anchors with hash navigation variant 8 / variante 8 | Anclas internas con navegación hash variante 8 | Click jumps to the section (hash navigation) / El clic salta a la sección (navegación hash) |
| 09 | quiz-anchor | ancla-quiz | In-page anchors with hash navigation variant 9 / variante 9 | Anclas internas con navegación hash variante 9 | Click jumps to the section (hash navigation) / El clic salta a la sección (navegación hash) |
| 10 | float-anchor | ancla-flotante | In-page anchors with hash navigation variant 10 / variante 10 | Anclas internas con navegación hash variante 10 | Click jumps to the section (hash navigation) / El clic salta a la sección (navegación hash) |

Every design exposes the probe hook [data-testid="anchor"]; the accessible name is resolved from [data-testid="anchor"] and focus-visible is verified on [data-testid=anchor].

Cada diseño expone el hook de prueba [data-testid="anchor"]; el nombre accesible se resuelve desde [data-testid="anchor"] y el focus-visible se verifica en [data-testid=anchor].

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
