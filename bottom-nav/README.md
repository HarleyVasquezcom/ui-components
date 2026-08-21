# bottom nav — 10 Designs · undefined — 10 Diseños

Mobile bottom bars with active tabs, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Barras inferiores móviles con pestañas activas, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Bottom Navigation Clásico | Classic Bottom Navigation | Mobile bottom bars with active tabs variant 1 / variante 1 | Barras inferiores móviles con pestañas activas variante 1 | Click moves the active tab / El clic mueve la pestaña activa |
| 02 | Bottom Navigation con Íconos de Bordes | Border Icon Bottom Nav | Mobile bottom bars with active tabs variant 2 / variante 2 | Barras inferiores móviles con pestañas activas variante 2 | Click moves the active tab / El clic mueve la pestaña activa |
| 03 | Bottom Navigation con Background Gradient | Gradient Background | Mobile bottom bars with active tabs variant 3 / variante 3 | Barras inferiores móviles con pestañas activas variante 3 | Click moves the active tab / El clic mueve la pestaña activa |
| 04 | Bottom Navigation con Tarjetas Flotantes | Floating Cards Bottom Nav | Mobile bottom bars with active tabs variant 4 / variante 4 | Barras inferiores móviles con pestañas activas variante 4 | Click moves the active tab / El clic mueve la pestaña activa |
| 05 | Bottom Navigation con Indicador de Actividad | Active Indicator Bottom Nav | Mobile bottom bars with active tabs variant 5 / variante 5 | Barras inferiores móviles con pestañas activas variante 5 | Click moves the active tab / El clic mueve la pestaña activa |
| 06 | Bottom Navigation con Border Radius | Border Radius Bottom Nav | Mobile bottom bars with active tabs variant 6 / variante 6 | Barras inferiores móviles con pestañas activas variante 6 | Click moves the active tab / El clic mueve la pestaña activa |
| 07 | Bottom Navigation con Animación de Hover | Hover Animation Bottom Nav | Mobile bottom bars with active tabs variant 7 / variante 7 | Barras inferiores móviles con pestañas activas variante 7 | Click moves the active tab / El clic mueve la pestaña activa |
| 08 | Bottom Navigation con Sombras | Shadow Bottom Nav | Mobile bottom bars with active tabs variant 8 / variante 8 | Barras inferiores móviles con pestañas activas variante 8 | Click moves the active tab / El clic mueve la pestaña activa |
| 09 | Bottom Navigation con Badge de Cuentas | Account Badge Bottom Nav | Mobile bottom bars with active tabs variant 9 / variante 9 | Barras inferiores móviles con pestañas activas variante 9 | Click moves the active tab / El clic mueve la pestaña activa |
| 10 | Bottom Navigation con Efecto Lupa | Search Magnifier Effect Bottom Nav | Mobile bottom bars with active tabs variant 10 / variante 10 | Barras inferiores móviles con pestañas activas variante 10 | Click moves the active tab / El clic mueve la pestaña activa |

Every design exposes the probe hook [data-testid="bottom-nav"]; the accessible name is resolved from [data-testid="bottom-nav"] and focus-visible is verified on [data-testid=bottom-nav].

Cada diseño expone el hook de prueba [data-testid="bottom-nav"]; el nombre accesible se resuelve desde [data-testid="bottom-nav"] y el focus-visible se verifica en [data-testid=bottom-nav].

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

© 2026 Harley Vásquez — UI Components Sprint 06 / Componentes UI Sprint 06.
