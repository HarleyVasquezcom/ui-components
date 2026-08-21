# text field — 10 Designs · undefined — 10 Diseños

Text inputs with validation and feedback, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Campos de texto con validación y feedback, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Glass Input | Input de Cristal | Text inputs with validation and feedback variant 1 / variante 1 | Campos de texto con validación y feedback variante 1 | Typing, validation, clear and submit / Escritura, validación, limpieza y envío |
| 02 | Line Only | Solo Línea | Text inputs with validation and feedback variant 2 / variante 2 | Campos de texto con validación y feedback variante 2 | Typing, validation, clear and submit / Escritura, validación, limpieza y envío |
| 03 | Filled Plate | Placa Rellena | Text inputs with validation and feedback variant 3 / variante 3 | Campos de texto con validación y feedback variante 3 | Typing, validation, clear and submit / Escritura, validación, limpieza y envío |
| 04 | Terminal Prompt | Prompt de Terminal | Text inputs with validation and feedback variant 4 / variante 4 | Campos de texto con validación y feedback variante 4 | Typing, validation, clear and submit / Escritura, validación, limpieza y envío |
| 05 | Underline Animated | Subrayado Animado | Text inputs with validation and feedback variant 5 / variante 5 | Campos de texto con validación y feedback variante 5 | Typing, validation, clear and submit / Escritura, validación, limpieza y envío |
| 06 | Floating Label | Etiqueta Flotante | Text inputs with validation and feedback variant 6 / variante 6 | Campos de texto con validación y feedback variante 6 | Typing, validation, clear and submit / Escritura, validación, limpieza y envío |
| 07 | Search Like | Como Búsqueda | Text inputs with validation and feedback variant 7 / variante 7 | Campos de texto con validación y feedback variante 7 | Typing, validation, clear and submit / Escritura, validación, limpieza y envío |
| 08 | Mono Editorial | Mono Editorial | Text inputs with validation and feedback variant 8 / variante 8 | Campos de texto con validación y feedback variante 8 | Typing, validation, clear and submit / Escritura, validación, limpieza y envío |
| 09 | Gradient Border | Borde Degradado | Text inputs with validation and feedback variant 9 / variante 9 | Campos de texto con validación y feedback variante 9 | Typing, validation, clear and submit / Escritura, validación, limpieza y envío |
| 10 | Icon Inline | Icono En Línea | Text inputs with validation and feedback variant 10 / variante 10 | Campos de texto con validación y feedback variante 10 | Typing, validation, clear and submit / Escritura, validación, limpieza y envío |

Every design exposes the probe hook [data-testid="field"]; the accessible name is resolved from [data-testid="field"] and focus-visible is verified on [data-testid=field]; the contrast floor is measured against [data-testid=label].

Cada diseño expone el hook de prueba [data-testid="field"]; el nombre accesible se resuelve desde [data-testid="field"] y el focus-visible se verifica en [data-testid=field]; el piso de contraste se mide contra [data-testid=label].

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
