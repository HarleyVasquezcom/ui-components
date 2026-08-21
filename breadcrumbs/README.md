# breadcrumbs — 10 Designs · undefined — 10 Diseños

Path trails with clickable stages, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Rutas de navegación con etapas clicables, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Glass Trail | Rastro de Cristal | Path trails with clickable stages variant 1 / variante 1 | Rutas de navegación con etapas clicables variante 1 | Click moves the active stage (bc-item) / El clic mueve la etapa activa (bc-item) |
| 02 | Minimal Separator | Separador Mínimo | Path trails with clickable stages variant 2 / variante 2 | Rutas de navegación con etapas clicables variante 2 | Click moves the active stage (bc-item) / El clic mueve la etapa activa (bc-item) |
| 03 | Terminal Path | Ruta Terminal | Path trails with clickable stages variant 3 / variante 3 | Rutas de navegación con etapas clicables variante 3 | Click moves the active stage (bc-item) / El clic mueve la etapa activa (bc-item) |
| 04 | Dark Trail | Ruta Oscura | Path trails with clickable stages variant 4 / variante 4 | Rutas de navegación con etapas clicables variante 4 | Click moves the active stage (bc-item) / El clic mueve la etapa activa (bc-item) |
| 05 | Gradient Path | Ruta Degradada | Path trails with clickable stages variant 5 / variante 5 | Rutas de navegación con etapas clicables variante 5 | Click moves the active stage (bc-item) / El clic mueve la etapa activa (bc-item) |
| 06 | Mono Breadcrumbs | Monogramas | Path trails with clickable stages variant 6 / variante 6 | Rutas de navegación con etapas clicables variante 6 | Click moves the active stage (bc-item) / El clic mueve la etapa activa (bc-item) |
| 07 | Pill Breadcrumbs | Píldoras | Path trails with clickable stages variant 7 / variante 7 | Rutas de navegación con etapas clicables variante 7 | Click moves the active stage (bc-item) / El clic mueve la etapa activa (bc-item) |
| 08 | Mono Stages | Etapas Mono | Path trails with clickable stages variant 8 / variante 8 | Rutas de navegación con etapas clicables variante 8 | Click moves the active stage (bc-item) / El clic mueve la etapa activa (bc-item) |
| 09 | Editor Trail | Sendero de Editor | Path trails with clickable stages variant 9 / variante 9 | Rutas de navegación con etapas clicables variante 9 | Click moves the active stage (bc-item) / El clic mueve la etapa activa (bc-item) |
| 10 | Home Functional | Home Funcional | Path trails with clickable stages variant 10 / variante 10 | Rutas de navegación con etapas clicables variante 10 | Click moves the active stage (bc-item) / El clic mueve la etapa activa (bc-item) |

Every design exposes the probe hook [data-testid="bc-home"]; the accessible name is resolved from [data-testid="bc-home"] and focus-visible is verified on [data-testid=bc-home].

Cada diseño expone el hook de prueba [data-testid="bc-home"]; el nombre accesible se resuelve desde [data-testid="bc-home"] y el focus-visible se verifica en [data-testid=bc-home].

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
