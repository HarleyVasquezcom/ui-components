# Media Player — 10 Designs · Reproductor multimedia — 10 Diseños

Media player shells with controls, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Carcasas de reproductor multimedia con controles, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Media Player Main | Principal | Media player shells with controls variant 1 / variante 1 | Carcasas de reproductor multimedia con controles variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Media Player Dark | Oscuro | Media player shells with controls variant 2 / variante 2 | Carcasas de reproductor multimedia con controles variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Media Player Minimal | Minimalista | Media player shells with controls variant 3 / variante 3 | Carcasas de reproductor multimedia con controles variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Media Player Controls | Controles | Media player shells with controls variant 4 / variante 4 | Carcasas de reproductor multimedia con controles variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Media Player Progress | Progreso | Media player shells with controls variant 5 / variante 5 | Carcasas de reproductor multimedia con controles variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Media Player Glassmorphism | Glassmorphism | Media player shells with controls variant 6 / variante 6 | Carcasas de reproductor multimedia con controles variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Media Player Compact | Compacto | Media player shells with controls variant 7 / variante 7 | Carcasas de reproductor multimedia con controles variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Media Player with Seek | Con Seek | Media player shells with controls variant 8 / variante 8 | Carcasas de reproductor multimedia con controles variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Media Player with Playlist | Con Playlist | Media player shells with controls variant 9 / variante 9 | Carcasas de reproductor multimedia con controles variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Media Player Mini | Mini | Media player shells with controls variant 10 / variante 10 | Carcasas de reproductor multimedia con controles variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="media-player"]; the accessible name is resolved from [data-testid="media-player"] and focus-visible is verified on [data-testid=media-player] button.

Cada diseño expone el hook de prueba [data-testid="media-player"]; el nombre accesible se resuelve desde [data-testid="media-player"] y el focus-visible se verifica en [data-testid=media-player] button.

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

© 2026 Harley Vásquez — UI Components Sprint 14 / Componentes UI Sprint 14.
