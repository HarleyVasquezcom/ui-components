# search bar — 10 Designs · undefined — 10 Diseños

Search inputs with live filtering and shortcuts, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Inputs de búsqueda con filtrado en vivo y atajos, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Magic Glow | Resplandor Mágico | Search inputs with live filtering and shortcuts variant 1 / variante 1 | Inputs de búsqueda con filtrado en vivo y atajos variante 1 | Live filtering with count; clear and shortcuts / Filtrado en vivo con conteo; limpiar y atajos |
| 02 | Minimal Underline | Subrayado Mínimo | Search inputs with live filtering and shortcuts variant 2 / variante 2 | Inputs de búsqueda con filtrado en vivo y atajos variante 2 | Live filtering with count; clear and shortcuts / Filtrado en vivo con conteo; limpiar y atajos |
| 03 | Pill Together | Píldora Juntos | Search inputs with live filtering and shortcuts variant 3 / variante 3 | Inputs de búsqueda con filtrado en vivo y atajos variante 3 | Live filtering with count; clear and shortcuts / Filtrado en vivo con conteo; limpiar y atajos |
| 04 | Terminal Find | Búsqueda Terminal | Search inputs with live filtering and shortcuts variant 4 / variante 4 | Inputs de búsqueda con filtrado en vivo y atajos variante 4 | Live filtering with count; clear and shortcuts / Filtrado en vivo con conteo; limpiar y atajos |
| 05 | Glass Overlay | Cristal Overlay | Search inputs with live filtering and shortcuts variant 5 / variante 5 | Inputs de búsqueda con filtrado en vivo y atajos variante 5 | Live filtering with count; clear and shortcuts / Filtrado en vivo con conteo; limpiar y atajos |
| 06 | Rounded Hero | Hero Redondeado | Search inputs with live filtering and shortcuts variant 6 / variante 6 | Inputs de búsqueda con filtrado en vivo y atajos variante 6 | Live filtering with count; clear and shortcuts / Filtrado en vivo con conteo; limpiar y atajos |
| 07 | Mono Filter | Filtro Mono | Search inputs with live filtering and shortcuts variant 7 / variante 7 | Inputs de búsqueda con filtrado en vivo y atajos variante 7 | Live filtering with count; clear and shortcuts / Filtrado en vivo con conteo; limpiar y atajos |
| 08 | Dark Spotlight | Foco Oscuro | Search inputs with live filtering and shortcuts variant 8 / variante 8 | Inputs de búsqueda con filtrado en vivo y atajos variante 8 | Live filtering with count; clear and shortcuts / Filtrado en vivo con conteo; limpiar y atajos |
| 09 | Editor Search | Búsqueda Editor | Search inputs with live filtering and shortcuts variant 9 / variante 9 | Inputs de búsqueda con filtrado en vivo y atajos variante 9 | Live filtering with count; clear and shortcuts / Filtrado en vivo con conteo; limpiar y atajos |
| 10 | Gradient Edge | Borde Degradado | Search inputs with live filtering and shortcuts variant 10 / variante 10 | Inputs de búsqueda con filtrado en vivo y atajos variante 10 | Live filtering with count; clear and shortcuts / Filtrado en vivo con conteo; limpiar y atajos |

Every design exposes the probe hook [data-testid="search"]; the accessible name is resolved from [data-testid="search"] and focus-visible is verified on [data-testid=search]; the contrast floor is measured against [data-testid=label].

Cada diseño expone el hook de prueba [data-testid="search"]; el nombre accesible se resuelve desde [data-testid="search"] y el focus-visible se verifica en [data-testid=search]; el piso de contraste se mide contra [data-testid=label].

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

© 2026 Harley Vásquez — UI Components Sprint 04 / Componentes UI Sprint 04.
