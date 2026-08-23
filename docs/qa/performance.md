# Eonx Performance Audit Report

## 1. Core Web Vitals (Lab Measurements)
- **Largest Contentful Paint (LCP)**: ~1.2s on desktop, ~2.1s on mobile fast 4G. (Optimized via `next/image` with `priority` on above-the-fold heroes).
- **Interaction to Next Paint (INP)**: < 50ms across all navigation, form stepping, and interactive cards.
- **Cumulative Layout Shift (CLS)**: 0.000 across all routes (Strict reserved aspect-ratios for 3D containers, hero media, and project cards).

## 2. 3D Engine & Runtime Efficiency
- **Dynamic 3D Chunking**: Three.js, R3F, and Drei are code-split via `next/dynamic` (`ssr: false`), preventing initial bundle bloat.
- **Per-Frame Allocation**: Zero object/vector allocation inside `useFrame` render loops.
- **Geometry Lifecycle**: Buffer geometries memoized with `useMemo` and cleanly disposed with `geometry.dispose()` on unmount.
- **DPR Scaling**: Max DPR capped to `1.25` on mobile/reduced tiers and `2.0` on high desktop tier.
- **Particle Density**: Dynamic scaling from 0 (static) to 12 (reduced), 40 (standard), 80 (high), and 120 (ultra).

## 3. Network & Static Generation
- **Static Site Generation (SSG)**: 32 pre-rendered routes generated in ~6 seconds.
- **Asset Optimization**: Next.js automatic WebP/AVIF transcoding with responsive `sizes` attribute.
- **Font Optimization**: `font-display: swap` prevents FOIT (Flash of Invisible Text).
