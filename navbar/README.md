# navbar — 10 Designs · undefined — 10 Diseños

Navigation bars with active states and mobile menus, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Barras de navegación con estados activos y menús móviles, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Sticky Glow | Pegajoso Resplandor | Navigation bars with active states and mobile menus variant 1 / variante 1 | Barras de navegación con estados activos y menús móviles variante 1 | Links move aria-current; burger and dropdowns / Los enlaces mueven aria-current; burger y dropdowns |
| 02 | Minimal Links | Enlaces Mínimos | Navigation bars with active states and mobile menus variant 2 / variante 2 | Barras de navegación con estados activos y menús móviles variante 2 | Links move aria-current; burger and dropdowns / Los enlaces mueven aria-current; burger y dropdowns |
| 03 | Pill Tabs | Pestañas Píldora | Navigation bars with active states and mobile menus variant 3 / variante 3 | Barras de navegación con estados activos y menús móviles variante 3 | Links move aria-current; burger and dropdowns / Los enlaces mueven aria-current; burger y dropdowns |
| 04 | Terminal Menu | Menú Terminal | Navigation bars with active states and mobile menus variant 4 / variante 4 | Barras de navegación con estados activos y menús móviles variante 4 | Links move aria-current; burger and dropdowns / Los enlaces mueven aria-current; burger y dropdowns |
| 05 | Glass Bar | Barra de Cristal | Navigation bars with active states and mobile menus variant 5 / variante 5 | Barras de navegación con estados activos y menús móviles variante 5 | Links move aria-current; burger and dropdowns / Los enlaces mueven aria-current; burger y dropdowns |
| 06 | Dark Lines | Líneas Oscuras | Navigation bars with active states and mobile menus variant 6 / variante 6 | Barras de navegación con estados activos y menús móviles variante 6 | Links move aria-current; burger and dropdowns / Los enlaces mueven aria-current; burger y dropdowns |
| 07 | Centered Logo | Logo Centrado | Navigation bars with active states and mobile menus variant 7 / variante 7 | Barras de navegación con estados activos y menús móviles variante 7 | Links move aria-current; burger and dropdowns / Los enlaces mueven aria-current; burger y dropdowns |
| 08 | Underline Slide | Deslizamiento Subrayado | Navigation bars with active states and mobile menus variant 8 / variante 8 | Barras de navegación con estados activos y menús móviles variante 8 | Links move aria-current; burger and dropdowns / Los enlaces mueven aria-current; burger y dropdowns |
| 09 | Corporate Clean | Corporativo Limpio | Navigation bars with active states and mobile menus variant 9 / variante 9 | Barras de navegación con estados activos y menús móviles variante 9 | Links move aria-current; burger and dropdowns / Los enlaces mueven aria-current; burger y dropdowns |
| 10 | Mono Badges | Insignias Mono | Navigation bars with active states and mobile menus variant 10 / variante 10 | Barras de navegación con estados activos y menús móviles variante 10 | Links move aria-current; burger and dropdowns / Los enlaces mueven aria-current; burger y dropdowns |

Every design exposes the probe hook [data-testid="link"]; the accessible name is resolved from [data-testid="link"] and focus-visible is verified on [data-testid=link]; the contrast floor is measured against .brand.

Cada diseño expone el hook de prueba [data-testid="link"]; el nombre accesible se resuelve desde [data-testid="link"] y el focus-visible se verifica en [data-testid=link]; el piso de contraste se mide contra .brand.

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
