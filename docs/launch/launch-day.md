# Eonx Launch Day Runbook

## Phase 1: Pre-Deployment Verification
1. Run final automated pipeline:
   ```bash
   npm run lint && npm run typecheck && npm run build
   ```
2. Confirm P0 = 0 and P1 = 0 on `docs/qa/launch-blockers.md`.
3. Verify release tag `v1.0.0` points to target commit.

## Phase 2: Deployment Execution
1. Trigger production deployment on hosting platform.
2. Monitor build logs for static generation completion.
3. Validate HTTP 200 on apex domain.

## Phase 3: Post-Deployment Smoke Test
1. **Core Routes**: Visit `/`, `/about`, `/services`, `/work`, `/book-a-call`, `/privacy`, `/terms`, `/cookies`.
2. **3D Experience**: Confirm orbital rendering and WebGL fallback on low-power devices.
3. **Lead Pipeline**: Perform one live test submission on `/book-a-call` and confirm delivery.
4. **Headers & SEO**: Validate `curl -I https://DOMAIN` security headers and check `/robots.txt` and `/sitemap.xml`.
5. **Search Console**: Submit production sitemap URL to Google Search Console.
