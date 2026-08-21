# slider — 10 Designs · undefined — 10 Diseños

Range sliders with marks, dual and vertical variants, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Sliders de rango con marcas, dobles y verticales, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Classic Range | Range Clásico | Range sliders with marks, dual and vertical variants variant 1 / variante 1 | Sliders de rango con marcas, dobles y verticales variante 1 | Arrow keys and a real drag move the value / Las flechas y un arrastre real mueven el valor |
| 02 | Filled Track | Pista Rellena | Range sliders with marks, dual and vertical variants variant 2 / variante 2 | Sliders de rango con marcas, dobles y verticales variante 2 | Arrow keys and a real drag move the value / Las flechas y un arrastre real mueven el valor |
| 03 | Dual Range | Doble Manija | Range sliders with marks, dual and vertical variants variant 3 / variante 3 | Sliders de rango con marcas, dobles y verticales variante 3 | Arrow keys and a real drag move the value / Las flechas y un arrastre real mueven el valor |
| 04 | Step Dots | Puntos de Paso | Range sliders with marks, dual and vertical variants variant 4 / variante 4 | Sliders de rango con marcas, dobles y verticales variante 4 | Arrow keys and a real drag move the value / Las flechas y un arrastre real mueven el valor |
| 05 | Vertical Trim | Afilada Vertical | Range sliders with marks, dual and vertical variants variant 5 / variante 5 | Sliders de rango con marcas, dobles y verticales variante 5 | Arrow keys and a real drag move the value / Las flechas y un arrastre real mueven el valor |
| 06 | Gradient Track | Pista Degradada | Range sliders with marks, dual and vertical variants variant 6 / variante 6 | Sliders de rango con marcas, dobles y verticales variante 6 | Arrow keys and a real drag move the value / Las flechas y un arrastre real mueven el valor |
| 07 | Minimal Line | Línea Mínima | Range sliders with marks, dual and vertical variants variant 7 / variante 7 | Sliders de rango con marcas, dobles y verticales variante 7 | Arrow keys and a real drag move the value / Las flechas y un arrastre real mueven el valor |
| 08 | Bubble Value | Valor Burbuja | Range sliders with marks, dual and vertical variants variant 8 / variante 8 | Sliders de rango con marcas, dobles y verticales variante 8 | Arrow keys and a real drag move the value / Las flechas y un arrastre real mueven el valor |
| 09 | Dark Track | Pista Oscura | Range sliders with marks, dual and vertical variants variant 9 / variante 9 | Sliders de rango con marcas, dobles y verticales variante 9 | Arrow keys and a real drag move the value / Las flechas y un arrastre real mueven el valor |
| 10 | Ramp Marks | Marcas de Rampa | Range sliders with marks, dual and vertical variants variant 10 / variante 10 | Sliders de rango con marcas, dobles y verticales variante 10 | Arrow keys and a real drag move the value / Las flechas y un arrastre real mueven el valor |

Every design exposes the probe hook [data-testid="slider"]; the accessible name is resolved from input[type="range"] and focus-visible is verified on input[type=range]; the contrast floor is measured against [data-testid=label].

Cada diseño expone el hook de prueba [data-testid="slider"]; el nombre accesible se resuelve desde input[type="range"] y el focus-visible se verifica en input[type=range]; el piso de contraste se mide contra [data-testid=label].

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
