# text area — 10 Designs · undefined — 10 Diseños

Multiline text areas with live stats, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Áreas de texto multilínea con estadísticas en vivo, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Editorial Sheet | Hoja Editorial | Multiline text areas with live stats variant 1 / variante 1 | Áreas de texto multilínea con estadísticas en vivo variante 1 | Typing with live char/line counters / Escritura con contadores en vivo de caracteres/líneas |
| 02 | Terminal Mono | Mono Terminal | Multiline text areas with live stats variant 2 / variante 2 | Áreas de texto multilínea con estadísticas en vivo variante 2 | Typing with live char/line counters / Escritura con contadores en vivo de caracteres/líneas |
| 03 | Note Paper | Papel de Notas | Multiline text areas with live stats variant 3 / variante 3 | Áreas de texto multilínea con estadísticas en vivo variante 3 | Typing with live char/line counters / Escritura con contadores en vivo de caracteres/líneas |
| 04 | Glass Panel | Panel de Cristal | Multiline text areas with live stats variant 4 / variante 4 | Áreas de texto multilínea con estadísticas en vivo variante 4 | Typing with live char/line counters / Escritura con contadores en vivo de caracteres/líneas |
| 05 | Code Editor | Editor de Código | Multiline text areas with live stats variant 5 / variante 5 | Áreas de texto multilínea con estadísticas en vivo variante 5 | Typing with live char/line counters / Escritura con contadores en vivo de caracteres/líneas |
| 06 | Minimal Line | Línea Mínima | Multiline text areas with live stats variant 6 / variante 6 | Áreas de texto multilínea con estadísticas en vivo variante 6 | Typing with live char/line counters / Escritura con contadores en vivo de caracteres/líneas |
| 07 | Bordered Plate | Placa con Borde | Multiline text areas with live stats variant 7 / variante 7 | Áreas de texto multilínea con estadísticas en vivo variante 7 | Typing with live char/line counters / Escritura con contadores en vivo de caracteres/líneas |
| 08 | Draft Document | Documento Borrador | Multiline text areas with live stats variant 8 / variante 8 | Áreas de texto multilínea con estadísticas en vivo variante 8 | Typing with live char/line counters / Escritura con contadores en vivo de caracteres/líneas |
| 09 | Soft Field | Campo Suave | Multiline text areas with live stats variant 9 / variante 9 | Áreas de texto multilínea con estadísticas en vivo variante 9 | Typing with live char/line counters / Escritura con contadores en vivo de caracteres/líneas |
| 10 | Mono Gutter | Mono con Gutter | Multiline text areas with live stats variant 10 / variante 10 | Áreas de texto multilínea con estadísticas en vivo variante 10 | Typing with live char/line counters / Escritura con contadores en vivo de caracteres/líneas |

Every design exposes the probe hook [data-testid="area"]; the accessible name is resolved from [data-testid="area"] and focus-visible is verified on [data-testid=area]; the contrast floor is measured against [data-testid=label].

Cada diseño expone el hook de prueba [data-testid="area"]; el nombre accesible se resuelve desde [data-testid="area"] y el focus-visible se verifica en [data-testid=area]; el piso de contraste se mide contra [data-testid=label].

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

© 2026 Harley Vásquez — UI Components Sprint 02 / Componentes UI Sprint 02.
