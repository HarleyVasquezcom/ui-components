# Blockquote — 10 Designs · Bloque de cita — 10 Diseños

Pull quotes with attribution, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Citas destacadas con atribución, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Blockquote Main | Bloque Principal | Pull quotes with attribution variant 1 / variante 1 | Citas destacadas con atribución variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Blockquote Dark | Oscuro | Pull quotes with attribution variant 2 / variante 2 | Citas destacadas con atribución variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Blockquote Gradient | Gradiente | Pull quotes with attribution variant 3 / variante 3 | Citas destacadas con atribución variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Blockquote Minimal | Minimalista | Pull quotes with attribution variant 4 / variante 4 | Citas destacadas con atribución variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Blockquote with Border | Con Borde | Pull quotes with attribution variant 5 / variante 5 | Citas destacadas con atribución variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Blockquote Glassmorphism | Glassmorphism | Pull quotes with attribution variant 6 / variante 6 | Citas destacadas con atribución variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Blockquote Colorful | Colorido | Pull quotes with attribution variant 7 / variante 7 | Citas destacadas con atribución variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Blockquote Rounded | Con Borde Redondeado | Pull quotes with attribution variant 8 / variante 8 | Citas destacadas con atribución variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Blockquote with Icon | Con Icono | Pull quotes with attribution variant 9 / variante 9 | Citas destacadas con atribución variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Blockquote Light | Claro | Pull quotes with attribution variant 10 / variante 10 | Citas destacadas con atribución variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="blockquote"]; the accessible name is resolved from [data-testid="blockquote"] and focus-visible is verified on [data-testid=blockquote].

Cada diseño expone el hook de prueba [data-testid="blockquote"]; el nombre accesible se resuelve desde [data-testid="blockquote"] y el focus-visible se verifica en [data-testid=blockquote].

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

© 2026 Harley Vásquez — UI Components Sprint 09 / Componentes UI Sprint 09.
