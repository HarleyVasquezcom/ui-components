# list — 10 Designs · undefined — 10 Diseños

Selectable and reorderable lists, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Listas seleccionables y reordenables, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | List Grid Masonica | Masonic List | Selectable and reorderable lists variant 1 / variante 1 | Listas seleccionables y reordenables variante 1 | Click selects and reorders items / El clic selecciona y reordena ítems |
| 02 | List Minimal Bullets | Minimal Bullets List | Selectable and reorderable lists variant 2 / variante 2 | Listas seleccionables y reordenables variante 2 | Click selects and reorders items / El clic selecciona y reordena ítems |
| 03 | List Terminal | Terminal List | Selectable and reorderable lists variant 3 / variante 3 | Listas seleccionables y reordenables variante 3 | Click selects and reorders items / El clic selecciona y reordena ítems |
| 04 | List Dark | Dark List | Selectable and reorderable lists variant 4 / variante 4 | Listas seleccionables y reordenables variante 4 | Click selects and reorders items / El clic selecciona y reordena ítems |
| 05 | List Gradient | Gradient List | Selectable and reorderable lists variant 5 / variante 5 | Listas seleccionables y reordenables variante 5 | Click selects and reorders items / El clic selecciona y reordena ítems |
| 06 | List Mono | Mono List | Selectable and reorderable lists variant 6 / variante 6 | Listas seleccionables y reordenables variante 6 | Click selects and reorders items / El clic selecciona y reordena ítems |
| 07 | List Pill | Pill List | Selectable and reorderable lists variant 7 / variante 7 | Listas seleccionables y reordenables variante 7 | Click selects and reorders items / El clic selecciona y reordena ítems |
| 08 | List Checked | Checked List | Selectable and reorderable lists variant 8 / variante 8 | Listas seleccionables y reordenables variante 8 | Click selects and reorders items / El clic selecciona y reordena ítems |
| 09 | List Divider | Divider List | Selectable and reorderable lists variant 9 / variante 9 | Listas seleccionables y reordenables variante 9 | Click selects and reorders items / El clic selecciona y reordena ítems |
| 10 | List Editor | Editor List | Selectable and reorderable lists variant 10 / variante 10 | Listas seleccionables y reordenables variante 10 | Click selects and reorders items / El clic selecciona y reordena ítems |

Every design exposes the probe hook [data-testid="list"]; the accessible name is resolved from [data-testid="list"] and focus-visible is verified on [data-testid=list-item]; the contrast floor is measured against [data-testid=list].

Cada diseño expone el hook de prueba [data-testid="list"]; el nombre accesible se resuelve desde [data-testid="list"] y el focus-visible se verifica en [data-testid=list-item]; el piso de contraste se mide contra [data-testid=list].

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
