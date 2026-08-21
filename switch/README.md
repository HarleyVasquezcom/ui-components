# switch — 10 Designs · undefined — 10 Diseños

Toggle switches with animated states, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Interruptores con estados animados, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | iOS-Like | Estilo iOS | Toggle switches with animated states variant 1 / variante 1 | Interruptores con estados animados variante 1 | Click toggles the aria-checked state / El clic alterna el estado aria-checked |
| 02 | Cosmic Orbit | Órbita Cósmica | Toggle switches with animated states variant 2 / variante 2 | Interruptores con estados animados variante 2 | Click toggles the aria-checked state / El clic alterna el estado aria-checked |
| 03 | Split Label | Etiqueta Dividida | Toggle switches with animated states variant 3 / variante 3 | Interruptores con estados animados variante 3 | Click toggles the aria-checked state / El clic alterna el estado aria-checked |
| 04 | LED Terminal | Terminal con LED | Toggle switches with animated states variant 4 / variante 4 | Interruptores con estados animados variante 4 | Click toggles the aria-checked state / El clic alterna el estado aria-checked |
| 05 | Traffic Light | Semáforo | Toggle switches with animated states variant 5 / variante 5 | Interruptores con estados animados variante 5 | Click toggles the aria-checked state / El clic alterna el estado aria-checked |
| 06 | Feather Outline | Pluma de Contorno | Toggle switches with animated states variant 6 / variante 6 | Interruptores con estados animados variante 6 | Click toggles the aria-checked state / El clic alterna el estado aria-checked |
| 07 | Material Ripple | Onda Material | Toggle switches with animated states variant 7 / variante 7 | Interruptores con estados animados variante 7 | Click toggles the aria-checked state / El clic alterna el estado aria-checked |
| 08 | Minimal Slider | Deslizador Mínimo | Toggle switches with animated states variant 8 / variante 8 | Interruptores con estados animados variante 8 | Click toggles the aria-checked state / El clic alterna el estado aria-checked |
| 09 | Brutal Big | Grande Brutalista | Toggle switches with animated states variant 9 / variante 9 | Interruptores con estados animados variante 9 | Click toggles the aria-checked state / El clic alterna el estado aria-checked |
| 10 | Magnetic Hover | Imán al Hover | Toggle switches with animated states variant 10 / variante 10 | Interruptores con estados animados variante 10 | Click toggles the aria-checked state / El clic alterna el estado aria-checked |

Every design exposes the probe hook [data-testid="switch"]; the accessible name is resolved from [data-testid="switch"] and focus-visible is verified on [data-testid=switch].

Cada diseño expone el hook de prueba [data-testid="switch"]; el nombre accesible se resuelve desde [data-testid="switch"] y el focus-visible se verifica en [data-testid=switch].

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
