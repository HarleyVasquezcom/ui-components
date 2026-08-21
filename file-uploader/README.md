# file uploader — 10 Designs · undefined — 10 Diseños

Upload zones with real file input and progress, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Zonas de subida con input de archivo real y progreso, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Drag Drop Hero | Hero de Arrastre | Upload zones with real file input and progress variant 1 / variante 1 | Zonas de subida con input de archivo real y progreso variante 1 | Real file input upload, list + remove / Subida real de archivo, lista + quitar |
| 02 | Dashed Zone | Zona de Guiones | Upload zones with real file input and progress variant 2 / variante 2 | Zonas de subida con input de archivo real y progreso variante 2 | Real file input upload, list + remove / Subida real de archivo, lista + quitar |
| 03 | List with Remove | Lista con Quitar | Upload zones with real file input and progress variant 3 / variante 3 | Zonas de subida con input de archivo real y progreso variante 3 | Real file input upload, list + remove / Subida real de archivo, lista + quitar |
| 04 | Card Grid | Rejilla de Tarjetas | Upload zones with real file input and progress variant 4 / variante 4 | Zonas de subida con input de archivo real y progreso variante 4 | Real file input upload, list + remove / Subida real de archivo, lista + quitar |
| 05 | Minimal Button | Botón Mínimo | Upload zones with real file input and progress variant 5 / variante 5 | Zonas de subida con input de archivo real y progreso variante 5 | Real file input upload, list + remove / Subida real de archivo, lista + quitar |
| 06 | Drop Zone Gradient | Zona Degradada | Upload zones with real file input and progress variant 6 / variante 6 | Zonas de subida con input de archivo real y progreso variante 6 | Real file input upload, list + remove / Subida real de archivo, lista + quitar |
| 07 | Compact Inline | Inline Compacto | Upload zones with real file input and progress variant 7 / variante 7 | Zonas de subida con input de archivo real y progreso variante 7 | Real file input upload, list + remove / Subida real de archivo, lista + quitar |
| 08 | Dark Panel | Panel Oscuro | Upload zones with real file input and progress variant 8 / variante 8 | Zonas de subida con input de archivo real y progreso variante 8 | Real file input upload, list + remove / Subida real de archivo, lista + quitar |
| 09 | Terminal Drop | Drop Terminal | Upload zones with real file input and progress variant 9 / variante 9 | Zonas de subida con input de archivo real y progreso variante 9 | Real file input upload, list + remove / Subida real de archivo, lista + quitar |
| 10 | Progress Inline | Progreso en Línea | Upload zones with real file input and progress variant 10 / variante 10 | Zonas de subida con input de archivo real y progreso variante 10 | Real file input upload, list + remove / Subida real de archivo, lista + quitar |

Every design exposes the probe hook [data-testid="dropzone"]; the accessible name is resolved from [data-testid="file-input"] and focus-visible is verified on [data-testid=file-input-wrap]; the contrast floor is measured against [data-testid=label].

Cada diseño expone el hook de prueba [data-testid="dropzone"]; el nombre accesible se resuelve desde [data-testid="file-input"] y el focus-visible se verifica en [data-testid=file-input-wrap]; el piso de contraste se mide contra [data-testid=label].

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

© 2026 Harley Vásquez — UI Components Sprint 03 / Componentes UI Sprint 03.
