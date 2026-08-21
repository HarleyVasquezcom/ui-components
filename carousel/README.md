# Carousel — 10 Designs · Carrusel — 10 Diseños

Image and content sliders, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Sliders de imágenes y contenido, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Carousel Fade Slide | Fade Slide Carousel | Image and content sliders variant 1 / variante 1 | Sliders de imágenes y contenido variante 1 | Prev/next buttons move the slide / Los botones prev/next mueven la diapositiva |
| 02 | Carousel Minimal Indicators | Minimal Indicators Carousel | Image and content sliders variant 2 / variante 2 | Sliders de imágenes y contenido variante 2 | Prev/next buttons move the slide / Los botones prev/next mueven la diapositiva |
| 03 | Carousel Terminal | Terminal Carousel | Image and content sliders variant 3 / variante 3 | Sliders de imágenes y contenido variante 3 | Prev/next buttons move the slide / Los botones prev/next mueven la diapositiva |
| 04 | Carousel Dark | Dark Carousel | Image and content sliders variant 4 / variante 4 | Sliders de imágenes y contenido variante 4 | Prev/next buttons move the slide / Los botones prev/next mueven la diapositiva |
| 05 | Carousel Gradient | Gradient Carousel | Image and content sliders variant 5 / variante 5 | Sliders de imágenes y contenido variante 5 | Prev/next buttons move the slide / Los botones prev/next mueven la diapositiva |
| 06 | Carousel Mono | Mono Carousel | Image and content sliders variant 6 / variante 6 | Sliders de imágenes y contenido variante 6 | Prev/next buttons move the slide / Los botones prev/next mueven la diapositiva |
| 07 | Carousel Pill | Pill Carousel | Image and content sliders variant 7 / variante 7 | Sliders de imágenes y contenido variante 7 | Prev/next buttons move the slide / Los botones prev/next mueven la diapositiva |
| 08 | Carousel Badge | Badge Carousel | Image and content sliders variant 8 / variante 8 | Sliders de imágenes y contenido variante 8 | Prev/next buttons move the slide / Los botones prev/next mueven la diapositiva |
| 09 | Carousel Underlined | Underlined Carousel | Image and content sliders variant 9 / variante 9 | Sliders de imágenes y contenido variante 9 | Prev/next buttons move the slide / Los botones prev/next mueven la diapositiva |
| 10 | Carousel Editor | Editor Carousel | Image and content sliders variant 10 / variante 10 | Sliders de imágenes y contenido variante 10 | Prev/next buttons move the slide / Los botones prev/next mueven la diapositiva |

Every design exposes the probe hook [data-testid="carousel"]; the accessible name is resolved from [data-testid="carousel"] and focus-visible is verified on [data-testid=carousel] [data-prev], [data-testid=carousel] [data-next].

Cada diseño expone el hook de prueba [data-testid="carousel"]; el nombre accesible se resuelve desde [data-testid="carousel"] y el focus-visible se verifica en [data-testid=carousel] [data-prev], [data-testid=carousel] [data-next].

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

© 2026 Harley Vásquez — UI Components Sprint 09 / Componentes UI Sprint 09.
