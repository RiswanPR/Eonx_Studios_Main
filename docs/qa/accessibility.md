# Eonx Accessibility Audit Report

## 1. Keyboard Navigation
- **Tab Sequence**: Logical top-to-bottom, left-to-right tab order across all interactive controls.
- **Focus Trap Management**:
  - Mobile navigation drawer locks focus within drawer when opened; unlocks on close.
  - Team member modals trap focus with `Tab`/`Shift+Tab` and dismiss on `Escape`.
- **Focus Indicators**: High-contrast periwinkle ring (`2px solid var(--color-periwinkle)`) visible against dark background on all focused elements.

## 2. Screen Reader Semantics
- **Landmarks**: Proper semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`).
- **Heading Hierarchy**: Exactly one `<h1>` per route with structured `<h2>` and `<h3>` descending order.
- **ARIA Attributes**: `aria-expanded`, `aria-controls`, `aria-label`, and `aria-hidden` applied to non-semantic visual artifacts (3D Canvas, background gradients).

## 3. Visual & Motion Adaptability
- **Color Contrast**: All body text meets WCAG AA standard (4.5:1 minimum against `#05060A` background).
- **Hover Independence**: No critical actions or content items require mouse hover. Touch devices and keyboard users have 100% feature parity.
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce`:
  - Three.js rotation and particle velocities dampen to minimal baseline.
  - Page transitions and text reveal animations resolve instantly with standard opacity transitions.
  - GSAP magnetic cursor effects deactivate immediately.

## 4. Form Accessibility
- **Label Associations**: All inputs in `/book-a-call` use explicit `<label>` tags with matching `htmlFor` and `id` attributes.
- **Error Identification**: Real-time error messages render with `aria-live="polite"` and clear textual instructions.
