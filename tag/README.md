# tag — 10 Designs · undefined — 10 Diseños

Tags with remove affordances, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Etiquetas con affordance de quitar, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Tag Pill | Pill Tag | Tags with remove affordances variant 1 / variante 1 | Etiquetas con affordance de quitar variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Tag Minimal | Minimal Tag | Tags with remove affordances variant 2 / variante 2 | Etiquetas con affordance de quitar variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Tag Terminal | Terminal Tag | Tags with remove affordances variant 3 / variante 3 | Etiquetas con affordance de quitar variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Tag Glass | Glass Tag | Tags with remove affordances variant 4 / variante 4 | Etiquetas con affordance de quitar variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Tag Gradient | Gradient Tag | Tags with remove affordances variant 5 / variante 5 | Etiquetas con affordance de quitar variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Tag Mono | Mono Tag | Tags with remove affordances variant 6 / variante 6 | Etiquetas con affordance de quitar variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Tag Pill (colored) | Pill Tag | Tags with remove affordances variant 7 / variante 7 | Etiquetas con affordance de quitar variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Tag Underlined | Underlined Tag | Tags with remove affordances variant 8 / variante 8 | Etiquetas con affordance de quitar variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Tag Editor | Editor Tag | Tags with remove affordances variant 9 / variante 9 | Etiquetas con affordance de quitar variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Tag Neon | Neon Tag | Tags with remove affordances variant 10 / variante 10 | Etiquetas con affordance de quitar variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="tag"]; the accessible name is resolved from [data-testid="tag"] and focus-visible is verified on [data-testid=tag]; the contrast floor is measured against [data-testid=label].

Cada diseño expone el hook de prueba [data-testid="tag"]; el nombre accesible se resuelve desde [data-testid="tag"] y el focus-visible se verifica en [data-testid=tag]; el piso de contraste se mide contra [data-testid=label].

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

© 2026 Harley Vásquez — UI Components Sprint 08 / Componentes UI Sprint 08.
