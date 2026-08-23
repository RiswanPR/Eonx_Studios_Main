# Eonx Pre-Launch Checklist

## 1. Environment & Configuration
- [ ] Set `NEXT_PUBLIC_SITE_URL` to canonical production domain (e.g. `https://eonxstudios.com`).
- [ ] Configure `NEXT_PUBLIC_ENABLE_3D=true` (or `false` if running on static CDN).
- [ ] Configure `CRM_API_KEY`, `EMAIL_API_KEY`, and `SCHEDULER_API_KEY` in production secrets manager (Vercel / Cloudflare / AWS).
- [ ] Verify zero `.env.local` or development tokens in build artifacts.

## 2. DNS & SSL Readiness
- [ ] Confirm DNS A/CNAME records configured for apex and `www` domains.
- [ ] Verify automatic SSL / TLS certificate provisioning.
- [ ] Confirm apex to `www` (or `www` to apex) 301 redirect is active.

## 3. SEO & Analytics Staging
- [ ] Verify Google Search Console DNS verification TXT record.
- [ ] Set `NEXT_PUBLIC_ANALYTICS_ENABLED=true` and attach `NEXT_PUBLIC_ANALYTICS_ID` when provider is active.
- [ ] Test sitemap discovery at `/sitemap.xml`.
