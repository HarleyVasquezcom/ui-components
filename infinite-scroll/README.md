# infinite scroll — 10 Designs · undefined — 10 Diseños

Containers that append content on scroll, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Contenedores que añaden contenido al hacer scroll, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Infinite Scroll Cargas Manuales | Manual Load Infinite Scroll | Containers that append content on scroll variant 1 / variante 1 | Contenedores que añaden contenido al hacer scroll variante 1 | Scroll (or button) appends more items / El scroll (o botón) añade más ítems |
| 02 | Infinite Scroll con Animación de Skeletons | Skeleton Loading Animation | Containers that append content on scroll variant 2 / variante 2 | Contenedores que añaden contenido al hacer scroll variante 2 | Scroll (or button) appends more items / El scroll (o botón) añade más ítems |
| 03 | Infinite Scroll con Tarjetas Grid | Grid Card Infinite Scroll | Containers that append content on scroll variant 3 / variante 3 | Contenedores que añaden contenido al hacer scroll variante 3 | Scroll (or button) appends more items / El scroll (o botón) añade más ítems |
| 04 | Infinite Scroll con Tarjetas con Imagen Superior | Top Image Infinite Scroll | Containers that append content on scroll variant 4 / variante 4 | Contenedores que añaden contenido al hacer scroll variante 4 | Scroll (or button) appends more items / El scroll (o botón) añade más ítems |
| 05 | Infinite Scroll con Cards Minimalistas | Minimalist Cards Infinite Scroll | Containers that append content on scroll variant 5 / variante 5 | Contenedores que añaden contenido al hacer scroll variante 5 | Scroll (or button) appends more items / El scroll (o botón) añade más ítems |
| 06 | Infinite Scroll con Cards de Precio | Pricing Cards Infinite Scroll | Containers that append content on scroll variant 6 / variante 6 | Contenedores que añaden contenido al hacer scroll variante 6 | Scroll (or button) appends more items / El scroll (o botón) añade más ítems |
| 07 | Infinite Scroll con Tarjetas de Características | Feature Cards Infinite Scroll | Containers that append content on scroll variant 7 / variante 7 | Contenedores que añaden contenido al hacer scroll variante 7 | Scroll (or button) appends more items / El scroll (o botón) añade más ítems |
| 08 | Infinite Scroll con Tarjetas de Estadísticas | Stats Cards Infinite Scroll | Containers that append content on scroll variant 8 / variante 8 | Contenedores que añaden contenido al hacer scroll variante 8 | Scroll (or button) appends more items / El scroll (o botón) añade más ítems |
| 09 | Infinite Scroll con Tarjetas de Perfiles | User Profile Cards Infinite Scroll | Containers that append content on scroll variant 9 / variante 9 | Contenedores que añaden contenido al hacer scroll variante 9 | Scroll (or button) appends more items / El scroll (o botón) añade más ítems |
| 10 | Infinite Scroll con Tarjetas de Testimoniales | Testimonial Cards Infinite Scroll | Containers that append content on scroll variant 10 / variante 10 | Contenedores que añaden contenido al hacer scroll variante 10 | Scroll (or button) appends more items / El scroll (o botón) añade más ítems |

Every design exposes the probe hook [data-testid="infinite-scroll"]; the accessible name is resolved from [data-testid="infinite-scroll"] and focus-visible is verified on [data-testid=infinite-scroll].

Cada diseño expone el hook de prueba [data-testid="infinite-scroll"]; el nombre accesible se resuelve desde [data-testid="infinite-scroll"] y el focus-visible se verifica en [data-testid=infinite-scroll].

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
