# card — 10 Designs · undefined — 10 Diseños

Content cards with meta, images and links, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Tarjetas de contenido con meta, imágenes y enlaces, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Card Image Caption | Card with Image and Caption | Content cards with meta, images and links variant 1 / variante 1 | Tarjetas de contenido con meta, imágenes y enlaces variante 1 | Link navigates inside the page (anchor) / El enlace navega dentro de la página (ancla) |
| 02 | Card Minimal Meta | Card with Minimal Metadata | Content cards with meta, images and links variant 2 / variante 2 | Tarjetas de contenido con meta, imágenes y enlaces variante 2 | Link navigates inside the page (anchor) / El enlace navega dentro de la página (ancla) |
| 03 | Card Terminal | Terminal Card | Content cards with meta, images and links variant 3 / variante 3 | Tarjetas de contenido con meta, imágenes y enlaces variante 3 | Link navigates inside the page (anchor) / El enlace navega dentro de la página (ancla) |
| 04 | Card Gradient | Card with Gradient Background | Content cards with meta, images and links variant 4 / variante 4 | Tarjetas de contenido con meta, imágenes y enlaces variante 4 | Link navigates inside the page (anchor) / El enlace navega dentro de la página (ancla) |
| 05 | Card Dark | Dark Card | Content cards with meta, images and links variant 5 / variante 5 | Tarjetas de contenido con meta, imágenes y enlaces variante 5 | Link navigates inside the page (anchor) / El enlace navega dentro de la página (ancla) |
| 06 | Card Gradient Two | Card with Gradient Two Colors | Content cards with meta, images and links variant 6 / variante 6 | Tarjetas de contenido con meta, imágenes y enlaces variante 6 | Link navigates inside the page (anchor) / El enlace navega dentro de la página (ancla) |
| 07 | Card Mono | Mono Card | Content cards with meta, images and links variant 7 / variante 7 | Tarjetas de contenido con meta, imágenes y enlaces variante 7 | Link navigates inside the page (anchor) / El enlace navega dentro de la página (ancla) |
| 08 | Card Pill | Card with Pill Shapes | Content cards with meta, images and links variant 8 / variante 8 | Tarjetas de contenido con meta, imágenes y enlaces variante 8 | Link navigates inside the page (anchor) / El enlace navega dentro de la página (ancla) |
| 09 | Card Badge | Card with Badge | Content cards with meta, images and links variant 9 / variante 9 | Tarjetas de contenido con meta, imágenes y enlaces variante 9 | Link navigates inside the page (anchor) / El enlace navega dentro de la página (ancla) |
| 10 | Card Editor | Card Editor | Content cards with meta, images and links variant 10 / variante 10 | Tarjetas de contenido con meta, imágenes y enlaces variante 10 | Link navigates inside the page (anchor) / El enlace navega dentro de la página (ancla) |

Every design exposes the probe hook [data-testid="card"]; the accessible name is resolved from [data-testid="card"] and focus-visible is verified on [data-testid=card-link]; the contrast floor is measured against [data-testid=card].

Cada diseño expone el hook de prueba [data-testid="card"]; el nombre accesible se resuelve desde [data-testid="card"] y el focus-visible se verifica en [data-testid=card-link]; el piso de contraste se mide contra [data-testid=card].

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

© 2026 Harley Vásquez — UI Components Sprint 07 / Componentes UI Sprint 07.
