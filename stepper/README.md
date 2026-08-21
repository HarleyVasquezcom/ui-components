# stepper — 10 Designs · undefined — 10 Diseños

Quantity steppers with min/max clamping, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Contadores de cantidad con límites min/max, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Classic Plus Minus | Más Menos Clásico | Quantity steppers with min/max clamping variant 1 / variante 1 | Contadores de cantidad con límites min/max variante 1 | +/- clicks and typing clamp at min/max / Los clics +/- y la escritura limitan en min/max |
| 02 | Pill Adjacent | Píldora Adyacente | Quantity steppers with min/max clamping variant 2 / variante 2 | Contadores de cantidad con límites min/max variante 2 | +/- clicks and typing clamp at min/max / Los clics +/- y la escritura limitan en min/max |
| 03 | Round Buttons | Botones Redondos | Quantity steppers with min/max clamping variant 3 / variante 3 | Contadores de cantidad con límites min/max variante 3 | +/- clicks and typing clamp at min/max / Los clics +/- y la escritura limitan en min/max |
| 04 | Terminal Step | Paso Terminal | Quantity steppers with min/max clamping variant 4 / variante 4 | Contadores de cantidad con límites min/max variante 4 | +/- clicks and typing clamp at min/max / Los clics +/- y la escritura limitan en min/max |
| 05 | Minimal Split | División Mínima | Quantity steppers with min/max clamping variant 5 / variante 5 | Contadores de cantidad con límites min/max variante 5 | +/- clicks and typing clamp at min/max / Los clics +/- y la escritura limitan en min/max |
| 06 | Bordered Sheet | Hoja con Borde | Quantity steppers with min/max clamping variant 6 / variante 6 | Contadores de cantidad con límites min/max variante 6 | +/- clicks and typing clamp at min/max / Los clics +/- y la escritura limitan en min/max |
| 07 | Gradient Buttons | Botones Degradados | Quantity steppers with min/max clamping variant 7 / variante 7 | Contadores de cantidad con límites min/max variante 7 | +/- clicks and typing clamp at min/max / Los clics +/- y la escritura limitan en min/max |
| 08 | Mono Counter | Contador Mono | Quantity steppers with min/max clamping variant 8 / variante 8 | Contadores de cantidad con límites min/max variante 8 | +/- clicks and typing clamp at min/max / Los clics +/- y la escritura limitan en min/max |
| 09 | Icon Square | Cuadro Icono | Quantity steppers with min/max clamping variant 9 / variante 9 | Contadores de cantidad con límites min/max variante 9 | +/- clicks and typing clamp at min/max / Los clics +/- y la escritura limitan en min/max |
| 10 | Ghost Inline | Fantasma en Línea | Quantity steppers with min/max clamping variant 10 / variante 10 | Contadores de cantidad con límites min/max variante 10 | +/- clicks and typing clamp at min/max / Los clics +/- y la escritura limitan en min/max |

Every design exposes the probe hook [data-testid="stepper"]; the accessible name is resolved from [data-testid="input"] and focus-visible is verified on [data-testid=input]; the contrast floor is measured against [data-testid=label].

Cada diseño expone el hook de prueba [data-testid="stepper"]; el nombre accesible se resuelve desde [data-testid="input"] y el focus-visible se verifica en [data-testid=input]; el piso de contraste se mide contra [data-testid=label].

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

© 2026 Harley Vásquez — UI Components Sprint 03 / Componentes UI Sprint 03.
