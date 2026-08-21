# timeline — 10 Designs · undefined — 10 Diseños

Vertical timelines with dots and dates, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Líneas de tiempo verticales con puntos y fechas, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Timeline Striped | Striped Timeline | Vertical timelines with dots and dates variant 1 / variante 1 | Líneas de tiempo verticales con puntos y fechas variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Timeline Minimal | Minimal Timeline | Vertical timelines with dots and dates variant 2 / variante 2 | Líneas de tiempo verticales con puntos y fechas variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Timeline Terminal | Terminal Timeline | Vertical timelines with dots and dates variant 3 / variante 3 | Líneas de tiempo verticales con puntos y fechas variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Timeline Glass | Glass Timeline | Vertical timelines with dots and dates variant 4 / variante 4 | Líneas de tiempo verticales con puntos y fechas variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Timeline Gradient | Gradient Timeline | Vertical timelines with dots and dates variant 5 / variante 5 | Líneas de tiempo verticales con puntos y fechas variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Timeline Mono | Mono Timeline | Vertical timelines with dots and dates variant 6 / variante 6 | Líneas de tiempo verticales con puntos y fechas variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Timeline Pill | Pill Timeline | Vertical timelines with dots and dates variant 7 / variante 7 | Líneas de tiempo verticales con puntos y fechas variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Timeline Underlined | Underlined Timeline | Vertical timelines with dots and dates variant 8 / variante 8 | Líneas de tiempo verticales con puntos y fechas variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Timeline Badge | Badge Timeline | Vertical timelines with dots and dates variant 9 / variante 9 | Líneas de tiempo verticales con puntos y fechas variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Timeline Editor | Editor Timeline | Vertical timelines with dots and dates variant 10 / variante 10 | Líneas de tiempo verticales con puntos y fechas variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="timeline"]; the accessible name is resolved from [data-testid="timeline"] and focus-visible is verified on [data-testid=timeline]; the contrast floor is measured against [data-testid=label].

Cada diseño expone el hook de prueba [data-testid="timeline"]; el nombre accesible se resuelve desde [data-testid="timeline"] y el focus-visible se verifica en [data-testid=timeline]; el piso de contraste se mide contra [data-testid=label].

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
