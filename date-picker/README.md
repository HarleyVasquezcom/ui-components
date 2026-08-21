# date picker — 10 Designs · undefined — 10 Diseños

Calendar pickers with month navigation, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Selectores de calendario con navegación de meses, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Calendar Grid | Grilla de Calendario | Calendar pickers with month navigation variant 1 / variante 1 | Selectores de calendario con navegación de meses variante 1 | Click opens the calendar; month nav and day picking / El clic abre el calendario; navegación de meses y selección de día |
| 02 | Minimal Inline | Inline Mínimo | Calendar pickers with month navigation variant 2 / variante 2 | Selectores de calendario con navegación de meses variante 2 | Click opens the calendar; month nav and day picking / El clic abre el calendario; navegación de meses y selección de día |
| 03 | Terminal Date | Fecha Terminal | Calendar pickers with month navigation variant 3 / variante 3 | Selectores de calendario con navegación de meses variante 3 | Click opens the calendar; month nav and day picking / El clic abre el calendario; navegación de meses y selección de día |
| 04 | Dual Month | Mes Doble | Calendar pickers with month navigation variant 4 / variante 4 | Selectores de calendario con navegación de meses variante 4 | Click opens the calendar; month nav and day picking / El clic abre el calendario; navegación de meses y selección de día |
| 05 | Compact Popover | Popover Compacto | Calendar pickers with month navigation variant 5 / variante 5 | Selectores de calendario con navegación de meses variante 5 | Click opens the calendar; month nav and day picking / El clic abre el calendario; navegación de meses y selección de día |
| 06 | Slate Minimal | Pizarra Mínima | Calendar pickers with month navigation variant 6 / variante 6 | Selectores de calendario con navegación de meses variante 6 | Click opens the calendar; month nav and day picking / El clic abre el calendario; navegación de meses y selección de día |
| 07 | Rounded Modern | Moderno Redondeado | Calendar pickers with month navigation variant 7 / variante 7 | Selectores de calendario con navegación de meses variante 7 | Click opens the calendar; month nav and day picking / El clic abre el calendario; navegación de meses y selección de día |
| 08 | Mono Grid | Grilla Mono | Calendar pickers with month navigation variant 8 / variante 8 | Selectores de calendario con navegación de meses variante 8 | Click opens the calendar; month nav and day picking / El clic abre el calendario; navegación de meses y selección de día |
| 09 | Festival Colors | Colores Festival | Calendar pickers with month navigation variant 9 / variante 9 | Selectores de calendario con navegación de meses variante 9 | Click opens the calendar; month nav and day picking / El clic abre el calendario; navegación de meses y selección de día |
| 10 | Editor Underline | Subrayado de Editor | Calendar pickers with month navigation variant 10 / variante 10 | Selectores de calendario con navegación de meses variante 10 | Click opens the calendar; month nav and day picking / El clic abre el calendario; navegación de meses y selección de día |

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

© 2026 Harley Vásquez — UI Components Sprint 02 / Componentes UI Sprint 02.
