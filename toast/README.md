# Toast — 10 Designs · Toast — 10 Diseños

Transient notifications that auto-hide, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Notificaciones transitorias que se ocultan solas, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Info Toast | Toast de Información | Transient notifications that auto-hide variant 1 / variante 1 | Notificaciones transitorias que se ocultan solas variante 1 | Auto-hides after 5 seconds / Se oculta automáticamente tras 5 segundos |
| 02 | Success Toast | Éxito | Transient notifications that auto-hide variant 2 / variante 2 | Notificaciones transitorias que se ocultan solas variante 2 | Auto-hides after 5 seconds / Se oculta automáticamente tras 5 segundos |
| 03 | Warning Toast | Advertencia | Transient notifications that auto-hide variant 3 / variante 3 | Notificaciones transitorias que se ocultan solas variante 3 | Auto-hides after 5 seconds / Se oculta automáticamente tras 5 segundos |
| 04 | Warning Toast with Auto-close | Advertencia con auto-cierre | Transient notifications that auto-hide variant 4 / variante 4 | Notificaciones transitorias que se ocultan solas variante 4 | Auto-hides after 5 seconds / Se oculta automáticamente tras 5 segundos |
| 05 | Error Toast | Error | Transient notifications that auto-hide variant 5 / variante 5 | Notificaciones transitorias que se ocultan solas variante 5 | Auto-hides after 5 seconds / Se oculta automáticamente tras 5 segundos |
| 06 | Warning Toast with Close | Advertencia con cierre | Transient notifications that auto-hide variant 6 / variante 6 | Notificaciones transitorias que se ocultan solas variante 6 | Auto-hides after 5 seconds / Se oculta automáticamente tras 5 segundos |
| 07 | Info Toast avec Icône | Toast con ícono | Transient notifications that auto-hide variant 7 / variante 7 | Notificaciones transitorias que se ocultan solas variante 7 | Auto-hides after 5 seconds / Se oculta automáticamente tras 5 segundos |
| 08 | Toast with Action | Toast con Acción | Transient notifications that auto-hide variant 8 / variante 8 | Notificaciones transitorias que se ocultan solas variante 8 | Auto-hides after 5 seconds / Se oculta automáticamente tras 5 segundos |
| 09 | Toast with Progress Bar | Toast con Barra de Progreso | Transient notifications that auto-hide variant 9 / variante 9 | Notificaciones transitorias que se ocultan solas variante 9 | Auto-hides after 5 seconds / Se oculta automáticamente tras 5 segundos |
| 10 | Toast Dark | Oscuro | Transient notifications that auto-hide variant 10 / variante 10 | Notificaciones transitorias que se ocultan solas variante 10 | Auto-hides after 5 seconds / Se oculta automáticamente tras 5 segundos |

Every design exposes the probe hook [data-testid="toast"]; the accessible name is resolved from [data-testid="toast"] and focus-visible is verified on [data-testid=toast] button, [data-testid=toast] a.

Cada diseño expone el hook de prueba [data-testid="toast"]; el nombre accesible se resuelve desde [data-testid="toast"] y el focus-visible se verifica en [data-testid=toast] button, [data-testid=toast] a.

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
