---
name: accessibility-review
description: Manually audit this site's HTML/CSS against WCAG 2.1 AA — contrast, ARIA labeling, focus states, semantic structure, alt text, keyboard navigation. Use when asked to check, audit, or review accessibility/a11y, or before shipping a new page.
---

# Accessibility review — SiboSolutions site

This is a static, no-build, dark-themed site (plain HTML + inline CSS + Tailwind CDN, no JS framework). There is no automated a11y tooling wired in (no axe, no Lighthouse CI) — this skill is a manual, read-the-code checklist. Go through every `.html` file in the repo root each time.

## 1. Accessible name vs visible text (WCAG 2.5.3 — Label in Name)

Grep for `aria-label=` across all HTML files. For every element that ALSO has visible text content (links, buttons — not icon-only controls):

- The `aria-label` must contain the visible text verbatim (case-insensitive substring match is fine), or be removed entirely and let the visible text serve as the accessible name.
- Flag any `aria-label` that paraphrases instead of matches — e.g. visible "Explore ASL Resources" vs `aria-label="Explore ASL learning resources"` is a violation. Screen readers announce the label, not the visible text; Voice Control/Dragon users say the visible text to activate it and will fail if they don't match.
- `aria-label`s on icon-only links (logo mark, mailto icon, nav landmarks) are fine and expected — they have no visible text to conflict with.

## 2. Color contrast (WCAG 1.4.3 — 4.5:1 normal text, 3:1 large text/UI)

Site's `:root` tokens (may drift — re-check current values, don't trust this list blindly):
`--c-bg: #07091A`, `--c-surface: #0E1228`, `--c-elevated: #151C38`, `--c-teal: #00C9A7`, `--c-rose: #E8507A`, `--c-amber: #F5A623`, `--c-text: #ECF0FF`, `--c-muted: #7A8BAD`.

- `--c-muted` on `--c-bg`/`--c-surface` is the riskiest pairing on the site (low-contrast gray-blue on near-black) — check any new body copy using `.section-desc`, `.card-desc`, `.why-desc`, `.footer-copy`, etc. against a contrast calculator before assuming it passes.
- Teal/rose text on dark backgrounds generally passes; verify if a new tint/opacity variant is introduced (e.g. `rgba(0,201,167,0.x)` at low opacity used as *text* color, not just decoration).
- Never rely on color alone to convey state (e.g. "FREE" tags already pair color with text label — keep that pattern).

## 3. Focus states (WCAG 2.4.7 — Focus Visible)

Every interactive element (`<a>`, button-like elements) must have a `:focus-visible` rule with a visible outline — check `nav-links a`, `nav-cta`, `btn-primary`, `btn-secondary`, `card-cta`, `contact-email`, `footer-links a`. If a new interactive element is added without a matching `:focus-visible` rule, flag it.

## 4. Semantic structure & landmarks

- One `<h1>` per page (in the hero), then `<h2>` for major sections, `<h3>` for cards within — no skipped levels.
- `<nav>` elements need `aria-label` when there's more than one per page (main nav vs footer nav) — already the pattern here, keep it.
- Interactive groups of cards should use `<article>`/`aria-labelledby` pointing at their own heading id (existing pattern in `.service-card` / `.detail-card`) — verify new cards follow it.

## 5. Images & non-text content (WCAG 1.1.1)

- Every `<img>` needs descriptive `alt` text (not filename, not "image of..."). Decorative SVG icons must have `aria-hidden="true"` and live inside a wrapper, not carry their own alt/label.
- Check `<svg>` icons inside buttons/links are `aria-hidden="true"` so screen readers don't double-announce icon + text.

## 6. Keyboard & pointer-event traps

- Any `::before`/`::after` pseudo-element that is `position: absolute` and overlaps interactive content (e.g. the `.service-card::before` glow overlay) MUST have `pointer-events: none`. Absolutely-positioned `z-index: auto` elements paint on top of normal in-flow siblings per CSS stacking rules and will silently swallow clicks/hover/focus on real controls underneath if this is missing. This bit the site once already (index.html `.service-card::before`, tech-support.html `.detail-card::before`) — check any new decorative overlay for this before shipping.
- Confirm nothing sets `cursor: default` or removes default focus/hover behavior on a real link/button.

## 7. Motion & animation

- `scroll-hint` bob animation and hover transforms are decorative only — fine as-is since nothing depends on them for comprehension. If a new animation conveys required information, it needs a non-animated equivalent or should respect `prefers-reduced-motion`.

## How to run this review

1. `grep -n 'aria-label=' *.html` and manually diff each against its sibling visible text.
2. `grep -n '::before\|::after' *.html` and check every absolutely-positioned pseudo-element for `pointer-events: none` if it overlaps real content.
3. Skim each page's heading order (`grep -n '<h[1-4]'`).
4. Check every `<img` tag has a non-empty, descriptive `alt`.
5. Spot-check any new/changed text color against its background with a contrast ratio in mind — flag anything using `--c-muted` at small font sizes for closer manual review.
6. Report findings inline, file:line, with the concrete WCAG criterion and the user-facing failure (not just "this violates a rule").
