# Avatar — 10 Designs · Avatar — 10 Diseños

Initials and image avatars, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Avatares con iniciales e imagen, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Avatar Classic | Classic Avatar | Initials and image avatars variant 1 / variante 1 | Avatares con iniciales e imagen variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Avatar Bordered | Bordered Avatar | Initials and image avatars variant 2 / variante 2 | Avatares con iniciales e imagen variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Avatar Terminal | Terminal Avatar | Initials and image avatars variant 3 / variante 3 | Avatares con iniciales e imagen variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Avatar Rounded | Rounded Avatar | Initials and image avatars variant 4 / variante 4 | Avatares con iniciales e imagen variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Avatar Initials | Initials Avatar | Initials and image avatars variant 5 / variante 5 | Avatares con iniciales e imagen variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Avatar Circle Color | Circle Color Avatar | Initials and image avatars variant 6 / variante 6 | Avatares con iniciales e imagen variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Avatar Square | Square Avatar | Initials and image avatars variant 7 / variante 7 | Avatares con iniciales e imagen variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Avatar Monogram | Monogram Avatar | Initials and image avatars variant 8 / variante 8 | Avatares con iniciales e imagen variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Avatar Minimal | Minimal Avatar | Initials and image avatars variant 9 / variante 9 | Avatares con iniciales e imagen variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Avatar Floating | Floating Avatar | Initials and image avatars variant 10 / variante 10 | Avatares con iniciales e imagen variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="avatar"]; the accessible name is resolved from [data-testid="avatar"] and focus-visible is verified on [data-testid=avatar].

Cada diseño expone el hook de prueba [data-testid="avatar"]; el nombre accesible se resuelve desde [data-testid="avatar"] y el focus-visible se verifica en [data-testid=avatar].

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
