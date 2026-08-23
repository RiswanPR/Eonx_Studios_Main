# Eonx QA Matrix

## Core Routes

- [x] /
- [x] /about
- [x] /services
- [x] /services/branding
- [x] /services/web-design
- [x] /services/web-development
- [x] /services/logo-design
- [x] /services/content-creation
- [x] /services/digital-marketing
- [x] /services/video-editing
- [x] /services/poster-design
- [x] /services/branding-materials
- [x] /work
- [x] /work/eonx-internal
- [x] /book-a-call
- [x] /privacy
- [x] /terms
- [x] /cookies

## Error Routes

- [x] Unknown route (/random) — Custom 404
- [x] Unknown service (/services/invalid) — Custom 404
- [x] Unknown project (/work/invalid) — Custom 404
- [x] Application error boundary (error.tsx)
- [x] API failure recovery

## Responsive

- [x] 390px (iPhone standard)
- [x] 430px (iPhone Pro Max)
- [x] 768px (iPad Mini / Portrait Tablet)
- [x] 1024px (iPad Pro / Landscape Tablet)
- [x] 1280px (Standard Laptop)
- [x] 1440px (MacBook Pro / Desktop)
- [x] 1920px (Ultra-wide Capped Viewport)

## Browser

- [x] Chrome (V8 / Chromium)
- [x] Safari (WebKit)
- [x] Firefox (Gecko)
- [x] Edge (Chromium)

## Interaction

- [x] Keyboard (Full Tab sequence, Escape modals, visible focus)
- [x] Touch (Fine pointer detection, no hover dependency)
- [x] Mouse (Magnetic smoothing, dynamic cursor)
- [x] Reduced motion (prefers-reduced-motion: reduce respected)

## 3D

- [x] WebGL available (R3F Canvas, Orbital Core, Rings, Atmosphere)
- [x] WebGL unavailable (Static SVG/CSS Orbital fallback)
- [x] High quality (Full fidelity)
- [x] Reduced quality (Lower DPR, capped particle density)
- [x] Static fallback (NEXT_PUBLIC_ENABLE_3D=false)

## Booking

- [x] Valid submission (Multi-step form completion)
- [x] Invalid submission (Zod field error recovery)
- [x] Spam submission (Honeypot trap rejection)
- [x] Network failure (User data preserved)
- [x] API failure (Sanitized error logged, friendly error UI)
- [x] Duplicate submission (In-flight guard active)

## SEO

- [x] Metadata (Title, description, Open Graph)
- [x] Canonical (Absolute URLs)
- [x] Robots (robots.txt configuration)
- [x] Sitemap (sitemap.xml dynamic generation)
- [x] OG (Rich social preview tags)
- [x] Structured data (Organization, WebSite, Service, CreativeWork)

## Security

- [x] Headers (nosniff, strict-origin, SAMEORIGIN, Permissions-Policy)
- [x] API validation (Strict Zod schema parsing)
- [x] Rate limit (Sliding window protection)
- [x] Secrets (Zero committed API keys or credentials)
- [x] Error handling (Sanitized telemetry with zero PII)

## Performance

- [x] LCP (< 2.5s on production build)
- [x] INP (< 200ms responsive interactions)
- [x] CLS (0 layout shift via reserved aspect ratios)
- [x] Mobile performance (Dynamic 3D chunking, responsive images)
- [x] 3D performance (Zero per-frame allocations, geometry memoization)
