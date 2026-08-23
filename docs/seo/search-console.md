# Search Console & Webmaster Setup Playbook

## 1. Google Search Console (GSC)

### Verification
- Add domain property (DNS TXT record preferred) or URL prefix with HTML file / meta tag verification.
- Connect after configuring the final production domain in `NEXT_PUBLIC_SITE_URL`.

### Sitemap Submission
- Submit sitemap endpoint: `https://<production-domain>/sitemap.xml`.
- Confirm status reports "Success" with all indexed static and dynamic URLs detected.

### Monitoring Playbook
- **Index Coverage**: Track indexed valid pages vs. excluded pages (ensure test routes stay excluded).
- **Performance**: Monitor impressions, clicks, CTR, and average position across brand and service queries.
- **Core Web Vitals**: Verify LCP, INP, and CLS pass on mobile and desktop.
- **Structured Data / Rich Results**: Monitor Schema.org validation for BreadcrumbList, Organization, and WebSite.

---

## 2. Bing Webmaster Tools

### Verification & Setup
- Import verified Google Search Console property or verify via DNS TXT / XML file.
- Submit `https://<production-domain>/sitemap.xml`.

### Indexing & Performance
- Monitor Bingbot crawl efficiency, URL inspection results, and keyword queries.

---

## 3. Pre-Launch Configuration Checklist
- [ ] Production domain configured in `NEXT_PUBLIC_SITE_URL`
- [ ] Robots.txt verified on live domain
- [ ] Sitemap.xml verified on live domain
- [ ] Google Search Console domain ownership verified
- [ ] Bing Webmaster Tools domain ownership verified
- [ ] Initial sitemap crawl completed
