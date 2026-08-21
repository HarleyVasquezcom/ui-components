# Logo — 10 Designs · Logotipo — 10 Diseños

Logo wordmarks and monograms, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Logotipos y monogramas, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Logo Wordmark | Marca de Palabra | Logo wordmarks and monograms variant 1 / variante 1 | Logotipos y monogramas variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Logo Monogram | Monograma | Logo wordmarks and monograms variant 2 / variante 2 | Logotipos y monogramas variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Logo Symbol | Símbolo | Logo wordmarks and monograms variant 3 / variante 3 | Logotipos y monogramas variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Logo Minimal | Minimalista | Logo wordmarks and monograms variant 4 / variante 4 | Logotipos y monogramas variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Logo Gradient | Gradiente | Logo wordmarks and monograms variant 5 / variante 5 | Logotipos y monogramas variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Logo Rounded | Redondeado | Logo wordmarks and monograms variant 6 / variante 6 | Logotipos y monogramas variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Logo Monochrome | Monocromo | Logo wordmarks and monograms variant 7 / variante 7 | Logotipos y monogramas variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Logo with Tagline | Con Lema | Logo wordmarks and monograms variant 8 / variante 8 | Logotipos y monogramas variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Logo with Circle | Con Círculo | Logo wordmarks and monograms variant 9 / variante 9 | Logotipos y monogramas variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Logo Icon Only | Solo Ícono | Logo wordmarks and monograms variant 10 / variante 10 | Logotipos y monogramas variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="logo"]; the accessible name is resolved from [data-testid="logo"] and focus-visible is verified on [data-testid=logo].

Cada diseño expone el hook de prueba [data-testid="logo"]; el nombre accesible se resuelve desde [data-testid="logo"] y el focus-visible se verifica en [data-testid=logo].

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

© 2026 Harley Vásquez — UI Components Sprint 14 / Componentes UI Sprint 14.
