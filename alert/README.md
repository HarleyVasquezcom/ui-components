# Alert — 10 Designs · Alerta — 10 Diseños

Informational alerts with icon + title + text, each self-contained in a single HTML file with zero external dependencies (no CDN, no fonts, no icons). Built by **Harley Vásquez**.

Alertas informativas con ícono + título + texto, cada una autocontenida en un solo archivo HTML sin dependencias externas (sin CDN, sin fuentes, sin íconos). Creado por **Harley Vásquez**.

## Designs / Diseños

| # | Name EN / Nombre EN | Name ES / Nombre ES | Description EN | Descripción ES | Interaction / Interacción |
|---|---|---|---|---|---|
| 01 | Info Alert | Alerta de Información | Informational alerts with icon + title + text variant 1 / variante 1 | Alertas informativas con ícono + título + texto variante 1 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 02 | Warning Alert | Alerta de Advertencia | Informational alerts with icon + title + text variant 2 / variante 2 | Alertas informativas con ícono + título + texto variante 2 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 03 | Error Alert | Alerta de Error | Informational alerts with icon + title + text variant 3 / variante 3 | Alertas informativas con ícono + título + texto variante 3 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 04 | Success Alert | Éxito | Informational alerts with icon + title + text variant 4 / variante 4 | Alertas informativas con ícono + título + texto variante 4 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 05 | Alert with Close Button | Alerta con botón de cierre | Informational alerts with icon + title + text variant 5 / variante 5 | Alertas informativas con ícono + título + texto variante 5 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 06 | Alert with Timeout | Alerta con tiempo límite | Informational alerts with icon + title + text variant 6 / variante 6 | Alertas informativas con ícono + título + texto variante 6 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 07 | Alert Dismissible | Alerta Dismissible | Informational alerts with icon + title + text variant 7 / variante 7 | Alertas informativas con ícono + título + texto variante 7 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 08 | Alert inline | Alerta Inline | Informational alerts with icon + title + text variant 8 / variante 8 | Alertas informativas con ícono + título + texto variante 8 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 09 | Alert with Icon Right | Alerta con ícono a la derecha | Informational alerts with icon + title + text variant 9 / variante 9 | Alertas informativas con ícono + título + texto variante 9 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |
| 10 | Alert with Description List | Alerta con Lista Descriptiva | Informational alerts with icon + title + text variant 10 / variante 10 | Alertas informativas con ícono + título + texto variante 10 | Rendered content; no scripted interaction / Contenido renderizado; sin interacción por script |

Every design exposes the probe hook [data-testid="alert"]; the accessible name is resolved from [data-testid="alert"] and focus-visible is verified on [data-testid=alert].

Cada diseño expone el hook de prueba [data-testid="alert"]; el nombre accesible se resuelve desde [data-testid="alert"] y el focus-visible se verifica en [data-testid=alert].

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
