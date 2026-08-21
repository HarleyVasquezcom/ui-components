# time picker — 10 Designs · undefined — 10 Diseños

Time pickers: dials, digits and clocks, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Selectores de hora: diales, dígitos y relojes, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Rolling Dial | Dial Giratorio | Time pickers: dials, digits and clocks variant 1 / variante 1 | Selectores de hora: diales, dígitos y relojes variante 1 | Click opens the popup; arrows and typing set hour/minutes / El clic abre el popup; flechas y escritura fijan hora/minutos |
| 02 | Split Flap Digits | Dígitos de Flap Dividido | Time pickers: dials, digits and clocks variant 2 / variante 2 | Selectores de hora: diales, dígitos y relojes variante 2 | Click opens the popup; arrows and typing set hour/minutes / El clic abre el popup; flechas y escritura fijan hora/minutos |
| 03 | Analog Dial | Esfera Análoga | Time pickers: dials, digits and clocks variant 3 / variante 3 | Selectores de hora: diales, dígitos y relojes variante 3 | Click opens the popup; arrows and typing set hour/minutes / El clic abre el popup; flechas y escritura fijan hora/minutos |
| 04 | Digital Readout | Lectura Digital | Time pickers: dials, digits and clocks variant 4 / variante 4 | Selectores de hora: diales, dígitos y relojes variante 4 | Click opens the popup; arrows and typing set hour/minutes / El clic abre el popup; flechas y escritura fijan hora/minutos |
| 05 | Clock Face 12h | Esfera 12h | Time pickers: dials, digits and clocks variant 5 / variante 5 | Selectores de hora: diales, dígitos y relojes variante 5 | Click opens the popup; arrows and typing set hour/minutes / El clic abre el popup; flechas y escritura fijan hora/minutos |
| 06 | Minimal Inline | Inline Mínimo | Time pickers: dials, digits and clocks variant 6 / variante 6 | Selectores de hora: diales, dígitos y relojes variante 6 | Click opens the popup; arrows and typing set hour/minutes / El clic abre el popup; flechas y escritura fijan hora/minutos |
| 07 | Dark Popover | Popover Oscuro | Time pickers: dials, digits and clocks variant 7 / variante 7 | Selectores de hora: diales, dígitos y relojes variante 7 | Click opens the popup; arrows and typing set hour/minutes / El clic abre el popup; flechas y escritura fijan hora/minutos |
| 08 | Terminal Time | Hora Terminal | Time pickers: dials, digits and clocks variant 8 / variante 8 | Selectores de hora: diales, dígitos y relojes variante 8 | Click opens the popup; arrows and typing set hour/minutes / El clic abre el popup; flechas y escritura fijan hora/minutos |
| 09 | Slate Split | División Pizarra | Time pickers: dials, digits and clocks variant 9 / variante 9 | Selectores de hora: diales, dígitos y relojes variante 9 | Click opens the popup; arrows and typing set hour/minutes / El clic abre el popup; flechas y escritura fijan hora/minutos |
| 10 | Gradient Wheel | Rueda Degradada | Time pickers: dials, digits and clocks variant 10 / variante 10 | Selectores de hora: diales, dígitos y relojes variante 10 | Click opens the popup; arrows and typing set hour/minutes / El clic abre el popup; flechas y escritura fijan hora/minutos |

Every design exposes the probe hook [data-testid="trigger"]; the accessible name is resolved from [data-testid="trigger"] and focus-visible is verified on [data-testid=trigger]; the contrast floor is measured against [data-testid=label].

Cada diseño expone el hook de prueba [data-testid="trigger"]; el nombre accesible se resuelve desde [data-testid="trigger"] y el focus-visible se verifica en [data-testid=trigger]; el piso de contraste se mide contra [data-testid=label].

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
