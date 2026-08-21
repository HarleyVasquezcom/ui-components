# Accordion — 10 Designs · Alternador — 10 Diseños

Collapsible section panels, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Paneles de sección plegables, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Accordion Classic | Classic Accordion | Collapsible section panels variant 1 / variante 1 | Paneles de sección plegables variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Accordion Minimal | Minimal Accordion | Collapsible section panels variant 2 / variante 2 | Paneles de sección plegables variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Accordion Terminal | Terminal Accordion | Collapsible section panels variant 3 / variante 3 | Paneles de sección plegables variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Accordion Nested | Nested Accordion | Collapsible section panels variant 4 / variante 4 | Paneles de sección plegables variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Accordion Chevron | Chevron Accordion | Collapsible section panels variant 5 / variante 5 | Paneles de sección plegables variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Accordion Bordered | Bordered Accordion | Collapsible section panels variant 6 / variante 6 | Paneles de sección plegables variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Accordion Numeric | Numeric Accordion | Collapsible section panels variant 7 / variante 7 | Paneles de sección plegables variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Accordion Terminal Numeric | Terminal Numeric Accordion | Collapsible section panels variant 8 / variante 8 | Paneles de sección plegables variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Accordion Ghost | Ghost Accordion | Collapsible section panels variant 9 / variante 9 | Paneles de sección plegables variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Accordion Floating | Floating Accordion | Collapsible section panels variant 10 / variante 10 | Paneles de sección plegables variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="accordion"]; the accessible name is resolved from [data-testid="accordion"] and focus-visible is verified on [data-testid=accordion].

Cada diseño expone el hook de prueba [data-testid="accordion"]; el nombre accesible se resuelve desde [data-testid="accordion"] y el focus-visible se verifica en [data-testid=accordion].

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
