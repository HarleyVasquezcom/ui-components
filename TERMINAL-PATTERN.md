# Terminal Chrome Pattern (single reference)

**Scope**: the four terminal-flavored designs in this gallery form a deliberate visual family:
`button/design-04.html` (Terminal Pulse), `checkbox/design-05.html` (Terminal [x]),
`radio/design-09.html` (Mono Brackets), `switch/design-04.html` (LED Terminal).

They intentionally share near-identical `.termbar` chrome. This file is the canonical
copy of that pattern. Do **not** copy-paste divergent variants into new designs — copy
from here so the family stays consistent, and keep one terminal design per component.

## Structure (inside `<main class="stage">`, as its first child)

```html
<div class="termbar" aria-hidden="true">
  <span><b>bash</b> — ui-kit v1.0</span>
  <span>● ● ●</span>
</div>
```

## Canonical CSS (both blocks are required together)

```css
.termbar {
  display: flex; justify-content: space-between; align-items: center;
  padding: 8px 14px; margin: -24px -56px 0 0;
  background: #111; border-bottom: 1px solid <accent>;
  font-size: .75rem; color: <muted>;
}
```

```css
.stage {
  /* ...existing stage rules... */
  overflow: hidden;   /* REQUIRED: clips the .termbar negative-margin overhang */
}
```

### Why the negative margin + overflow:hidden pair

- `margin: -24px -56px 0 0` makes the termbar bleed to the stage's left/right edges
  (and above its top), removing the padding gap that would otherwise frame the bar.
- The bar overhangs the stage's content box by up to 32px on the right at 360px
  viewports. `overflow: hidden` on `.stage` clips that overhang so it can never
  create document-level horizontal scrolling (probe B3 asserts
  `scrollWidth - innerWidth <= 1` at 360px).

Change either side of the pair without the other and you get either a padded gap
(no negative margin) or horizontal overflow at 360px (no `overflow: hidden`).

## Conventions shared by the family

- Green-on-black palette with an accent (e.g. `#33ff66`), monospace stack.
- Real UI text in EN with the EN+ES bilingual subtitle below the `h1`.
- `data-testid` hooks identical to the rest of the component family
  (e.g. `[data-testid="btn"]`, `[data-testid="switch"]`).
- Credit footer unchanged (`Harley Vásquez · linkedin.com/in/harleyvasquez`).
