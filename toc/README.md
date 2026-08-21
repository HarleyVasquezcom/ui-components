# toc — 10 Designs · undefined — 10 Diseños

Tables of contents with smooth scrolling, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Tablas de contenido con scroll suave, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | TOC Sticky Header | Sticky Header TOC | Tables of contents with smooth scrolling variant 1 / variante 1 | Tablas de contenido con scroll suave variante 1 | Link click highlights + smooth-scrolls / El clic resalta + scroll suave |
| 02 | TOC Minimal Grid | Minimal Grid TOC | Tables of contents with smooth scrolling variant 2 / variante 2 | Tablas de contenido con scroll suave variante 2 | Link click highlights + smooth-scrolls / El clic resalta + scroll suave |
| 03 | TOC Terminal | Terminal TOC | Tables of contents with smooth scrolling variant 3 / variante 3 | Tablas de contenido con scroll suave variante 3 | Link click highlights + smooth-scrolls / El clic resalta + scroll suave |
| 04 | TOC Glass | Glass TOC | Tables of contents with smooth scrolling variant 4 / variante 4 | Tablas de contenido con scroll suave variante 4 | Link click highlights + smooth-scrolls / El clic resalta + scroll suave |
| 05 | TOC Dark | Dark TOC | Tables of contents with smooth scrolling variant 5 / variante 5 | Tablas de contenido con scroll suave variante 5 | Link click highlights + smooth-scrolls / El clic resalta + scroll suave |
| 06 | TOC Gradient | Gradient TOC | Tables of contents with smooth scrolling variant 6 / variante 6 | Tablas de contenido con scroll suave variante 6 | Link click highlights + smooth-scrolls / El clic resalta + scroll suave |
| 07 | TOC Mono | Mono TOC | Tables of contents with smooth scrolling variant 7 / variante 7 | Tablas de contenido con scroll suave variante 7 | Link click highlights + smooth-scrolls / El clic resalta + scroll suave |
| 08 | TOC Pill | Pill TOC | Tables of contents with smooth scrolling variant 8 / variante 8 | Tablas de contenido con scroll suave variante 8 | Link click highlights + smooth-scrolls / El clic resalta + scroll suave |
| 09 | TOC Inline | Inline TOC | Tables of contents with smooth scrolling variant 9 / variante 9 | Tablas de contenido con scroll suave variante 9 | Link click highlights + smooth-scrolls / El clic resalta + scroll suave |
| 10 | TOC Editor | Editor TOC | Tables of contents with smooth scrolling variant 10 / variante 10 | Tablas de contenido con scroll suave variante 10 | Link click highlights + smooth-scrolls / El clic resalta + scroll suave |

Every design exposes the probe hook [data-testid="toc"]; the accessible name is resolved from [data-testid="toc-link"] and focus-visible is verified on [data-testid=toc-link]; the contrast floor is measured against [data-testid=toc-link].

Cada diseño expone el hook de prueba [data-testid="toc"]; el nombre accesible se resuelve desde [data-testid="toc-link"] y el focus-visible se verifica en [data-testid=toc-link]; el piso de contraste se mide contra [data-testid=toc-link].

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
