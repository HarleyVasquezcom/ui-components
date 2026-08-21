# sidebar — 10 Designs · undefined — 10 Diseños

Side navigation that opens/closes with a toggle, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Navegación lateral que abre/cierra con un toggle, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Collapsible Grid | Cuadrícula Desplegable | Side navigation that opens/closes with a toggle variant 1 / variante 1 | Navegación lateral que abre/cierra con un toggle variante 1 | Toggle opens/closes with aria-expanded + Esc / El toggle abre/cierra con aria-expanded + Esc |
| 02 | Minimal List | Lista Mínima | Side navigation that opens/closes with a toggle variant 2 / variante 2 | Navegación lateral que abre/cierra con un toggle variante 2 | Toggle opens/closes with aria-expanded + Esc / El toggle abre/cierra con aria-expanded + Esc |
| 03 | Terminal Nav | Navegación Terminal | Side navigation that opens/closes with a toggle variant 3 / variante 3 | Navegación lateral que abre/cierra con un toggle variante 3 | Toggle opens/closes with aria-expanded + Esc / El toggle abre/cierra con aria-expanded + Esc |
| 04 | Dark Accordion | Acordeón Oscuro | Side navigation that opens/closes with a toggle variant 4 / variante 4 | Navegación lateral que abre/cierra con un toggle variante 4 | Toggle opens/closes with aria-expanded + Esc / El toggle abre/cierra con aria-expanded + Esc |
| 05 | Rounded Links | Enlaces Redondeados | Side navigation that opens/closes with a toggle variant 5 / variante 5 | Navegación lateral que abre/cierra con un toggle variante 5 | Toggle opens/closes with aria-expanded + Esc / El toggle abre/cierra con aria-expanded + Esc |
| 06 | Sliding Rail | Carril Deslizante | Side navigation that opens/closes with a toggle variant 6 / variante 6 | Navegación lateral que abre/cierra con un toggle variante 6 | Toggle opens/closes with aria-expanded + Esc / El toggle abre/cierra con aria-expanded + Esc |
| 07 | Dock Bar | Barra de Muelle | Side navigation that opens/closes with a toggle variant 7 / variante 7 | Navegación lateral que abre/cierra con un toggle variante 7 | Toggle opens/closes with aria-expanded + Esc / El toggle abre/cierra con aria-expanded + Esc |
| 08 | Gradient Items | Ítems Degradados | Side navigation that opens/closes with a toggle variant 8 / variante 8 | Navegación lateral que abre/cierra con un toggle variante 8 | Toggle opens/closes with aria-expanded + Esc / El toggle abre/cierra con aria-expanded + Esc |
| 09 | Badge Sidebar | Barra de Insignias | Side navigation that opens/closes with a toggle variant 9 / variante 9 | Navegación lateral que abre/cierra con un toggle variante 9 | Toggle opens/closes with aria-expanded + Esc / El toggle abre/cierra con aria-expanded + Esc |
| 10 | Drawer Overlay | Cajón Superpuesto | Side navigation that opens/closes with a toggle variant 10 / variante 10 | Navegación lateral que abre/cierra con un toggle variante 10 | Toggle opens/closes with aria-expanded + Esc / El toggle abre/cierra con aria-expanded + Esc |

Every design exposes the probe hook [data-testid="sidebar"]; the accessible name is resolved from [data-testid="sidebar"] and focus-visible is verified on [data-testid=toggle].

Cada diseño expone el hook de prueba [data-testid="sidebar"]; el nombre accesible se resuelve desde [data-testid="sidebar"] y el focus-visible se verifica en [data-testid=toggle].

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

© 2026 Harley Vásquez — UI Components Sprint 05 / Componentes UI Sprint 05.
