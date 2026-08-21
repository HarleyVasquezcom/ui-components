# radio — 10 Designs · undefined — 10 Diseños

Single-choice groups with varied visuals, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Grupos de elección única con visuales variados, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Native Revisit | Nativo Revisitado | Single-choice groups with varied visuals variant 1 / variante 1 | Grupos de elección única con visuales variados variante 1 | Click moves the selection inside the group / El clic mueve la selección dentro del grupo |
| 02 | Pill Group | Grupo de Píldoras | Single-choice groups with varied visuals variant 2 / variante 2 | Grupos de elección única con visuales variados variante 2 | Click moves the selection inside the group / El clic mueve la selección dentro del grupo |
| 03 | Choice Cards | Tarjetas de Elección | Single-choice groups with varied visuals variant 3 / variante 3 | Grupos de elección única con visuales variados variante 3 | Click moves the selection inside the group / El clic mueve la selección dentro del grupo |
| 04 | Dial Knob | Perilla Giratoria | Single-choice groups with varied visuals variant 4 / variante 4 | Grupos de elección única con visuales variados variante 4 | Click moves the selection inside the group / El clic mueve la selección dentro del grupo |
| 05 | Orbit Moons | Lunas Orbitales | Single-choice groups with varied visuals variant 5 / variante 5 | Grupos de elección única con visuales variados variante 5 | Click moves the selection inside the group / El clic mueve la selección dentro del grupo |
| 06 | Minimal Dot | Punto Mínimo | Single-choice groups with varied visuals variant 6 / variante 6 | Grupos de elección única con visuales variados variante 6 | Click moves the selection inside the group / El clic mueve la selección dentro del grupo |
| 07 | Tick Mark | Marca de Verificación | Single-choice groups with varied visuals variant 7 / variante 7 | Grupos de elección única con visuales variados variante 7 | Click moves the selection inside the group / El clic mueve la selección dentro del grupo |
| 08 | Big Touch | Gran Área Táctil | Single-choice groups with varied visuals variant 8 / variante 8 | Grupos de elección única con visuales variados variante 8 | Click moves the selection inside the group / El clic mueve la selección dentro del grupo |
| 09 | Mono Brackets | Corchetes Monospace | Single-choice groups with varied visuals variant 9 / variante 9 | Grupos de elección única con visuales variados variante 9 | Click moves the selection inside the group / El clic mueve la selección dentro del grupo |
| 10 | Gradient Border | Borde Degradado | Single-choice groups with varied visuals variant 10 / variante 10 | Grupos de elección única con visuales variados variante 10 | Click moves the selection inside the group / El clic mueve la selección dentro del grupo |

Every design exposes the probe hook [data-testid="group"]; the accessible name is resolved from [data-testid="group"] input[type="radio"] and focus-visible is verified on [data-testid=group] input[type=radio].

Cada diseño expone el hook de prueba [data-testid="group"]; el nombre accesible se resuelve desde [data-testid="group"] input[type="radio"] y el focus-visible se verifica en [data-testid=group] input[type=radio].

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

© 2026 Harley Vásquez — UI Components Sprint 01 / Componentes UI Sprint 01.
