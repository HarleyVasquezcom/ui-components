# Code Block — 10 Designs · Bloque de código — 10 Diseños

Code windows with copy/theme actions, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Ventanas de código con acciones copiar/tema, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Syntax Highlight | Syntax Highlight | Code windows with copy/theme actions variant 1 / variante 1 | Ventanas de código con acciones copiar/tema variante 1 | Copy/theme buttons act (6 of 10) / Los botones copiar/tema actúan (6 de 10) |
| 02 | Minimal Fence | Minimal Fence | Code windows with copy/theme actions variant 2 / variante 2 | Ventanas de código con acciones copiar/tema variante 2 | Copy/theme buttons act (6 of 10) / Los botones copiar/tema actúan (6 de 10) |
| 03 | Terminal Fence | Terminal Fence | Code windows with copy/theme actions variant 3 / variante 3 | Ventanas de código con acciones copiar/tema variante 3 | Copy/theme buttons act (6 of 10) / Los botones copiar/tema actúan (6 de 10) |
| 04 | Gradient Fence | Gradient Fence | Code windows with copy/theme actions variant 4 / variante 4 | Ventanas de código con acciones copiar/tema variante 4 | Copy/theme buttons act (6 of 10) / Los botones copiar/tema actúan (6 de 10) |
| 05 | Code Block Gradient | Gradiente | Code windows with copy/theme actions variant 5 / variante 5 | Ventanas de código con acciones copiar/tema variante 5 | Copy/theme buttons act (6 of 10) / Los botones copiar/tema actúan (6 de 10) |
| 06 | Code Block Neo-Brutalist | Neo-Brutalista | Code windows with copy/theme actions variant 6 / variante 6 | Ventanas de código con acciones copiar/tema variante 6 | Copy/theme buttons act (6 of 10) / Los botones copiar/tema actúan (6 de 10) |
| 07 | Code Block Dark Minimal | Oscuro Minimalista | Code windows with copy/theme actions variant 7 / variante 7 | Ventanas de código con acciones copiar/tema variante 7 | Copy/theme buttons act (6 of 10) / Los botones copiar/tema actúan (6 de 10) |
| 08 | Code Block Solarized | Solarized | Code windows with copy/theme actions variant 8 / variante 8 | Ventanas de código con acciones copiar/tema variante 8 | Copy/theme buttons act (6 of 10) / Los botones copiar/tema actúan (6 de 10) |
| 09 | Code Block Dracula | Dracula | Code windows with copy/theme actions variant 9 / variante 9 | Ventanas de código con acciones copiar/tema variante 9 | Copy/theme buttons act (6 of 10) / Los botones copiar/tema actúan (6 de 10) |
| 10 | Code Block One Dark | One Dark | Code windows with copy/theme actions variant 10 / variante 10 | Ventanas de código con acciones copiar/tema variante 10 | Copy/theme buttons act (6 of 10) / Los botones copiar/tema actúan (6 de 10) |

Every design exposes the probe hook [data-testid="code-block"]; the accessible name is resolved from [data-testid="code-block"] and focus-visible is verified on [data-testid=code-block] [data-copy], [data-testid=code-block] [data-theme].

Cada diseño expone el hook de prueba [data-testid="code-block"]; el nombre accesible se resuelve desde [data-testid="code-block"] y el focus-visible se verifica en [data-testid=code-block] [data-copy], [data-testid=code-block] [data-theme].

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

© 2026 Harley Vásquez — UI Components Sprint 10 / Componentes UI Sprint 10.
