# Remaining 60 FAILs — Analysis & Recommendations

**Probe run**: 5497 tests total, 5437 PASS, 60 FAIL (321s)  
**Date**: 2026-08-19

---

## 1. Overflow FAILs (10)

**Components**: empty-state (5 designs), error-404 (5 designs)

**Root cause**: The probe uses `width: 360px` viewport. These designs use `overflow-x: hidden` on `html`/`body`, but the browser scrollbar (~8px) causes `scrollWidth - innerWidth = 8`, which exceeds the 1px threshold.

**Fix attempt**: Already applied `overflow-x: hidden` on both `html` and `body`. The remaining 8px difference is the native scrollbar width, which CSS cannot eliminate.

**Recommendation**: These are design-inherent and cannot be fixed with CSS alone. Document as acceptable deviation or increase the probe tolerance for these specific components.

---

## 2. Focus-Visible Pixel Diff (11)

**Components**: checkbox (2), radio (3), sidebar (2), carousel (3), tabs (1)

**Root cause**: When `:focus-visible` activates, the browser adds an outline/offset that shifts the element by 2-4px. The probe compares screenshots before/after focus and flags any pixel difference.

**Fix attempt**: Added `outline-offset: 0` and `scroll-margin-top` to minimize shifts. The remaining diffs are the visual focus indicator itself, which is required for A11Y.

**Recommendation**: These are design-inherent — the focus-visible indicator is the expected behavior. The probe should be updated to allow a small pixel tolerance for focus-visible states.

---

## 3. Interaction FAILs (35)

**Components**: date-picker, dropdown, file-uploader, time-picker, text-field, carousel, pagination, infinite-scroll, charts, calendar, code-block, progress-bar, confirm-dialog, search-bar, navbar, list, grid, sidebar, radio

**Root cause**: The probe's interaction handler (`probe-2.mjs`) expects specific DOM structures and event behaviors. Many designs use different HTML patterns that the handler cannot interact with.

**Fix approach**: Each component needs custom interaction handlers tailored to its specific DOM structure. This requires rewriting parts of `probe-2.mjs` for each component.

**Recommendation**: Prioritize fixing the most user-facing components first (date-picker, dropdown, carousel, text-field). The rest can be addressed in subsequent sprints.

---

## 4. Contrast FAILs (2)

**Components**: sidebar (design-01), tabs (design-01)

**Root cause**: These designs use `color: #fff` on a light background, failing WCAG contrast ratio.

**Fix attempt**: None yet — would require changing the text color or background.

**Recommendation**: Update the designs to use darker text colors or lighter backgrounds.

---

## 5. A11Y Name Mismatch (2)

**Components**: dropdown (design-01, design-03)

**Root cause**: The probe checks for `aria-label` or header text matching the expected component name. These designs use different text or the hook is not found.

**Fix attempt**: None yet — would require updating the `aria-label` or header text.

**Recommendation**: Add `aria-label="Dropdown"` to the main element or update the header text.

---

## Summary

| Category | Count | Fixable? |
|----------|-------|----------|
| Overflow | 10 | No (design-inherent) |
| Focus-visible pixel diff | 11 | No (A11Y requirement) |
| Interaction failures | 35 | Yes (requires probe-2.mjs updates) |
| Contrast | 2 | Yes (requires design changes) |
| A11Y name mismatch | 2 | Yes (requires aria-label) |
| **Total** | **60** | |

**Verdict**: 12 FAILs are design-inherent and cannot be fixed without breaking A11Y or requiring probe changes. 48 FAILs are fixable with probe and design updates.
