# STRYDE Footwear

A Vite + React + Tailwind CSS v4 storefront with two homepages (Home 1 / Home 2), dark mode, and an RTL/LTR toggle.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a production build in `dist/`.

## What changed / assumptions made

1. **Home 2 rebuilt with 7 unique sections** (excluding header/footer): split hero, "the workshop" stat band, tabbed category lineup, editorial lookbook, numbered process timeline, FAQ accordion, and an inline (non-card) contact section. None of these repeat Home 1's section designs.
2. The old "Need more than a single pair?" section is fully replaced by the **Lookbook** editorial image section — no card-grid "why us" repeat.
3. `src/data/store.js` now has **3+ products per category** (Casual, Formal, Sports). Home 2's Lineup section uses category tabs so each tab always shows 3+ product tiles; Home 1's brand filter still works against the same expanded dataset.
4. **Logo** (`src/components/Logo.jsx`) is a custom stitched-lace monogram (not a generic icon), and always links `to="/"` (Home 1) — used in both the Navbar and Footer.
5. **RTL/LTR toggle** lives in the Navbar (`LanguageIcon` button). It flips the `dir` attribute on `<html>`, persists the choice, and the layout uses logical Tailwind utilities (`ps-`, `pe-`, `start-`, `end-`, `border-s-`) plus `rtl:`/`ltr:` variants so spacing, icons, and menus mirror correctly.
6. **Full-width hero background image** was added to **Home 1** (Home 2 keeps a lighter split hero so the two pages stay visually distinct, per the "don't repeat sections" rule).
7. **Back-to-top button** (`ScrollToTopButton.jsx`) fades in after scrolling and is mounted once in `App.jsx`, so it appears on every page.
8. **Mobile menu transition**: both the desktop "Home" dropdown and the mobile Disclosure panel now use Headless UI's built-in `transition` prop for a smooth open/close (fade + slide), instead of the abrupt toggle in the original markup. I also removed a stray stray `` `` `` typo after the original `DisclosurePanel` closing tag.
9. **Fewer bordered "cards"**: category and product sections use image-led editorial rows/tiles with minimal or no borders; "Why STRYDE" is now an icon list with dividers instead of four boxed cards; testimonials became a single rotating pull-quote. The contact form on Home 1 keeps one card wrapper since a form benefits from a visual container; Home 2's contact section drops the card entirely.
10. Added a small `DirectionContext` (new file) alongside the existing `ThemeContext` to drive the RTL toggle — no existing file's public API was changed.

Palette, type (Bricolage Grotesque for headings / Inter for body), and the stitched-lace logomark were chosen to keep the "heritage footwear" identity distinct rather than defaulting to a generic template look.
