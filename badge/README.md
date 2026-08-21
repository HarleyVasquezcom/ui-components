# badge — 10 Designs · undefined — 10 Diseños

Badges with pulse, glass and gradient looks, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Insignias con looks pulsante, cristal y degradado, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Badge Pulse | Pulse Badge | Badges with pulse, glass and gradient looks variant 1 / variante 1 | Insignias con looks pulsante, cristal y degradado variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Badge Minimal | Minimal Badge | Badges with pulse, glass and gradient looks variant 2 / variante 2 | Insignias con looks pulsante, cristal y degradado variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Badge Terminal | Terminal Badge | Badges with pulse, glass and gradient looks variant 3 / variante 3 | Insignias con looks pulsante, cristal y degradado variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Badge Glass | Glass Badge | Badges with pulse, glass and gradient looks variant 4 / variante 4 | Insignias con looks pulsante, cristal y degradado variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Badge Gradient | Gradient Badge | Badges with pulse, glass and gradient looks variant 5 / variante 5 | Insignias con looks pulsante, cristal y degradado variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Badge Mono | Mono Badge | Badges with pulse, glass and gradient looks variant 6 / variante 6 | Insignias con looks pulsante, cristal y degradado variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Badge Pill | Pill Badge | Badges with pulse, glass and gradient looks variant 7 / variante 7 | Insignias con looks pulsante, cristal y degradado variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Badge Underlined | Underlined Badge | Badges with pulse, glass and gradient looks variant 8 / variante 8 | Insignias con looks pulsante, cristal y degradado variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Badge Editor | Editor Badge | Badges with pulse, glass and gradient looks variant 9 / variante 9 | Insignias con looks pulsante, cristal y degradado variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Badge Neon | Neon Badge | Badges with pulse, glass and gradient looks variant 10 / variante 10 | Insignias con looks pulsante, cristal y degradado variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="badge"]; the accessible name is resolved from [data-testid="badge"] and focus-visible is verified on [data-testid=badge]; the contrast floor is measured against [data-testid=label].

Cada diseño expone el hook de prueba [data-testid="badge"]; el nombre accesible se resuelve desde [data-testid="badge"] y el focus-visible se verifica en [data-testid=badge]; el piso de contraste se mide contra [data-testid=label].

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
