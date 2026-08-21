# Divider — 10 Designs · Separador — 10 Diseños

Horizontal and vertical dividers, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Separadores horizontales y verticales, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Divider Solid | Sólido | Horizontal and vertical dividers variant 1 / variante 1 | Separadores horizontales y verticales variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Divider Dashed | Dasheado | Horizontal and vertical dividers variant 2 / variante 2 | Separadores horizontales y verticales variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Divider Gradient | Gradiente | Horizontal and vertical dividers variant 3 / variante 3 | Separadores horizontales y verticales variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Divider Minimal | Minimalista | Horizontal and vertical dividers variant 4 / variante 4 | Separadores horizontales y verticales variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Divider Double | Doble | Horizontal and vertical dividers variant 5 / variante 5 | Separadores horizontales y verticales variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Divider Glassmorphism | Glassmorphism | Horizontal and vertical dividers variant 6 / variante 6 | Separadores horizontales y verticales variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Divider Thick | Grueso | Horizontal and vertical dividers variant 7 / variante 7 | Separadores horizontales y verticales variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Divider Space | Espaciador | Horizontal and vertical dividers variant 8 / variante 8 | Separadores horizontales y verticales variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Divider Decorative | Decorativo | Horizontal and vertical dividers variant 9 / variante 9 | Separadores horizontales y verticales variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Divider Animated | Animado | Horizontal and vertical dividers variant 10 / variante 10 | Separadores horizontales y verticales variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="divider"]; the accessible name is resolved from [data-testid="divider"] and focus-visible is verified on [data-testid=divider].

Cada diseño expone el hook de prueba [data-testid="divider"]; el nombre accesible se resuelve desde [data-testid="divider"] y el focus-visible se verifica en [data-testid=divider].

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

© 2026 Harley Vásquez — UI Components Sprint 13 / Componentes UI Sprint 13.
