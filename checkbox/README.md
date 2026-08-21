# checkbox — 10 Designs · undefined — 10 Diseños

Checkable controls with custom marks, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Controles marcables con marcas personalizadas, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Iris Check | Marca Iris | Checkable controls with custom marks variant 1 / variante 1 | Controles marcables con marcas personalizadas variante 1 | Click toggles the checked state + visual mark / El clic alterna el estado marcado + marca visual |
| 02 | Select-a-Card | Elige una Tarjeta | Checkable controls with custom marks variant 2 / variante 2 | Controles marcables con marcas personalizadas variante 2 | Click toggles the checked state + visual mark / El clic alterna el estado marcado + marca visual |
| 03 | Flip Toggle | Interruptor Giratorio | Checkable controls with custom marks variant 3 / variante 3 | Controles marcables con marcas personalizadas variante 3 | Click toggles the checked state + visual mark / El clic alterna el estado marcado + marca visual |
| 04 | Squircle Ink | Tinta en Esquirculo | Checkable controls with custom marks variant 4 / variante 4 | Controles marcables con marcas personalizadas variante 4 | Click toggles the checked state + visual mark / El clic alterna el estado marcado + marca visual |
| 05 | Terminal [x] | Terminal con Corchetes | Checkable controls with custom marks variant 5 / variante 5 | Controles marcables con marcas personalizadas variante 5 | Click toggles the checked state + visual mark / El clic alterna el estado marcado + marca visual |
| 06 | Minimal Rule | Regla Mínima | Checkable controls with custom marks variant 6 / variante 6 | Controles marcables con marcas personalizadas variante 6 | Click toggles the checked state + visual mark / El clic alterna el estado marcado + marca visual |
| 07 | Filled Plate | Placa Rellena | Checkable controls with custom marks variant 7 / variante 7 | Controles marcables con marcas personalizadas variante 7 | Click toggles the checked state + visual mark / El clic alterna el estado marcado + marca visual |
| 08 | Gallery Check | Galería con Marca | Checkable controls with custom marks variant 8 / variante 8 | Controles marcables con marcas personalizadas variante 8 | Click toggles the checked state + visual mark / El clic alterna el estado marcado + marca visual |
| 09 | Scale Flick | Chasquido con Escala | Checkable controls with custom marks variant 9 / variante 9 | Controles marcables con marcas personalizadas variante 9 | Click toggles the checked state + visual mark / El clic alterna el estado marcado + marca visual |
| 10 | Mono Box | Caja Monoespaciada | Checkable controls with custom marks variant 10 / variante 10 | Controles marcables con marcas personalizadas variante 10 | Click toggles the checked state + visual mark / El clic alterna el estado marcado + marca visual |

Every design exposes the probe hook [data-testid="cb"]; the accessible name is resolved from [data-testid="cb"] input and focus-visible is verified on [data-testid=cb] input.

Cada diseño expone el hook de prueba [data-testid="cb"]; el nombre accesible se resuelve desde [data-testid="cb"] input y el focus-visible se verifica en [data-testid=cb] input.

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

© 2026 Harley Vásquez — UI Components Sprint 01 / Componentes UI Sprint 01.
