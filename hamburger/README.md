# hamburger — 10 Designs · undefined — 10 Diseños

Hamburger buttons that open navigation, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Botones hamburguesa que abren navegación, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Classic Slide | Deslizado Clásico | Hamburger buttons that open navigation variant 1 / variante 1 | Botones hamburguesa que abren navegación variante 1 | Click toggles open with aria-expanded / El clic alterna abierto con aria-expanded |
| 02 | Minimal Reveal | Revelado Mínimo | Hamburger buttons that open navigation variant 2 / variante 2 | Botones hamburguesa que abren navegación variante 2 | Click toggles open with aria-expanded / El clic alterna abierto con aria-expanded |
| 03 | Terminal Slide | Deslizado Terminal | Hamburger buttons that open navigation variant 3 / variante 3 | Botones hamburguesa que abren navegación variante 3 | Click toggles open with aria-expanded / El clic alterna abierto con aria-expanded |
| 04 | Glass Expand | Expansión de Cristal | Hamburger buttons that open navigation variant 4 / variante 4 | Botones hamburguesa que abren navegación variante 4 | Click toggles open with aria-expanded / El clic alterna abierto con aria-expanded |
| 05 | Pill Hamburger | Hamburguesa Píldora | Hamburger buttons that open navigation variant 5 / variante 5 | Botones hamburguesa que abren navegación variante 5 | Click toggles open with aria-expanded / El clic alterna abierto con aria-expanded |
| 06 | Mono Bars | Barras Mono | Hamburger buttons that open navigation variant 6 / variante 6 | Botones hamburguesa que abren navegación variante 6 | Click toggles open with aria-expanded / El clic alterna abierto con aria-expanded |
| 07 | Rounded Reveal | Revelado con Radio | Hamburger buttons that open navigation variant 7 / variante 7 | Botones hamburguesa que abren navegación variante 7 | Click toggles open with aria-expanded / El clic alterna abierto con aria-expanded |
| 08 | Gradient Slide | Deslizado Degradado | Hamburger buttons that open navigation variant 8 / variante 8 | Botones hamburguesa que abren navegación variante 8 | Click toggles open with aria-expanded / El clic alterna abierto con aria-expanded |
| 09 | Inline Icon | Ícono en Línea | Hamburger buttons that open navigation variant 9 / variante 9 | Botones hamburguesa que abren navegación variante 9 | Click toggles open with aria-expanded / El clic alterna abierto con aria-expanded |
| 10 | Hamburger con Close Botón | Hamburger con Botón de Close | Hamburger buttons that open navigation variant 10 / variante 10 | Botones hamburguesa que abren navegación variante 10 | Click toggles open with aria-expanded / El clic alterna abierto con aria-expanded |

Every design exposes the probe hook [data-testid="hamburger"]; the accessible name is resolved from [data-testid="hamburger"] and focus-visible is verified on [data-testid=hamburger].

Cada diseño expone el hook de prueba [data-testid="hamburger"]; el nombre accesible se resuelve desde [data-testid="hamburger"] y el focus-visible se verifica en [data-testid=hamburger].

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
