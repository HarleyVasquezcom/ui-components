# color picker — 10 Designs · undefined — 10 Diseños

Color selectors: swatches, hue and hex input, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Selectores de color: muestras, hue y hex, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Swatch Grid | Rejilla de Muestras | Color selectors: swatches, hue and hex input variant 1 / variante 1 | Selectores de color: muestras, hue y hex variante 1 | Swatch/hue clicks and hex input update the output / Clics en muestras/hue y el input hex actualizan la salida |
| 02 | Eye Dropper-ish | Estilo Gotero | Color selectors: swatches, hue and hex input variant 2 / variante 2 | Selectores de color: muestras, hue y hex variante 2 | Swatch/hue clicks and hex input update the output / Clics en muestras/hue y el input hex actualizan la salida |
| 03 | Hue Slider | Deslizador de Tono | Color selectors: swatches, hue and hex input variant 3 / variante 3 | Selectores de color: muestras, hue y hex variante 3 | Swatch/hue clicks and hex input update the output / Clics en muestras/hue y el input hex actualizan la salida |
| 04 | Wheel-ish | Rueda Cromática | Color selectors: swatches, hue and hex input variant 4 / variante 4 | Selectores de color: muestras, hue y hex variante 4 | Swatch/hue clicks and hex input update the output / Clics en muestras/hue y el input hex actualizan la salida |
| 05 | Palette Cards | Tarjetas de Paleta | Color selectors: swatches, hue and hex input variant 5 / variante 5 | Selectores de color: muestras, hue y hex variante 5 | Swatch/hue clicks and hex input update the output / Clics en muestras/hue y el input hex actualizan la salida |
| 06 | Minimal Squares | Cuadrados Mínimos | Color selectors: swatches, hue and hex input variant 6 / variante 6 | Selectores de color: muestras, hue y hex variante 6 | Swatch/hue clicks and hex input update the output / Clics en muestras/hue y el input hex actualizan la salida |
| 07 | Dark Dropper | Gotero Oscuro | Color selectors: swatches, hue and hex input variant 7 / variante 7 | Selectores de color: muestras, hue y hex variante 7 | Swatch/hue clicks and hex input update the output / Clics en muestras/hue y el input hex actualizan la salida |
| 08 | Gradient Spectrum | Espectro Degradado | Color selectors: swatches, hue and hex input variant 8 / variante 8 | Selectores de color: muestras, hue y hex variante 8 | Swatch/hue clicks and hex input update the output / Clics en muestras/hue y el input hex actualizan la salida |
| 09 | Mono Outline | Contorno Mono | Color selectors: swatches, hue and hex input variant 9 / variante 9 | Selectores de color: muestras, hue y hex variante 9 | Swatch/hue clicks and hex input update the output / Clics en muestras/hue y el input hex actualizan la salida |
| 10 | Glass Swatches | Muestras de Cristal | Color selectors: swatches, hue and hex input variant 10 / variante 10 | Selectores de color: muestras, hue y hex variante 10 | Swatch/hue clicks and hex input update the output / Clics en muestras/hue y el input hex actualizan la salida |

Every design exposes the probe hook [data-testid="hex"]; the accessible name is resolved from [data-testid="swatch"], [data-testid="hue"] and focus-visible is verified on [data-testid=swatch], [data-testid=hue]; the contrast floor is measured against [data-testid=label].

Cada diseño expone el hook de prueba [data-testid="hex"]; el nombre accesible se resuelve desde [data-testid="swatch"], [data-testid="hue"] y el focus-visible se verifica en [data-testid=swatch], [data-testid=hue]; el piso de contraste se mide contra [data-testid=label].

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
