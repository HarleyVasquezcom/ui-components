# Empty State — 10 Designs · Estado vacío — 10 Diseños

Empty states with call-to-action, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Estados vacíos con llamada a la acción, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Empty State Illustration | Ilustración | Empty states with call-to-action variant 1 / variante 1 | Estados vacíos con llamada a la acción variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Empty State Dark | Oscuro | Empty states with call-to-action variant 2 / variante 2 | Estados vacíos con llamada a la acción variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Empty State Minimal | Minimalista | Empty states with call-to-action variant 3 / variante 3 | Estados vacíos con llamada a la acción variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Empty State with Illustration | Con Ilustración | Empty states with call-to-action variant 4 / variante 4 | Estados vacíos con llamada a la acción variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Empty State Illustrative | Ilustrativo | Empty states with call-to-action variant 5 / variante 5 | Estados vacíos con llamada a la acción variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Empty State Soft | Suave | Empty states with call-to-action variant 6 / variante 6 | Estados vacíos con llamada a la acción variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Empty State Card | Tarjeta | Empty states with call-to-action variant 7 / variante 7 | Estados vacíos con llamada a la acción variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Empty State with Background Pattern | Con Patrón | Empty states with call-to-action variant 8 / variante 8 | Estados vacíos con llamada a la acción variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Empty State with Emoji | Con Emoji | Empty states with call-to-action variant 9 / variante 9 | Estados vacíos con llamada a la acción variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Empty State with Action | Con Acción | Empty states with call-to-action variant 10 / variante 10 | Estados vacíos con llamada a la acción variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="empty"]; the accessible name is resolved from [data-testid="empty"] and focus-visible is verified on [data-testid=empty] .cta.

Cada diseño expone el hook de prueba [data-testid="empty"]; el nombre accesible se resuelve desde [data-testid="empty"] y el focus-visible se verifica en [data-testid=empty] .cta.

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
