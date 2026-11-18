# SEO Audit and Optimization Report

## Executive Summary

The project is a React 18 + Vite 6 Arabic-first single-page application, with an Express inquiry API and static content from `src/data/mockData.js`. The audit implemented crawlable text routes, language-aware metadata, canonical and hreflang support, JSON-LD, image accessibility improvements, an XML sitemap endpoint, and robots configuration. Search performance cannot be verified until a production deployment, analytics properties, and the final canonical hostname are configured.

## Framework and Architecture

- React 18 SPA built with Vite 6.
- Views are rendered in-browser rather than generated as server-rendered pages.
- Express serves the production build and falls back to `index.html` for application routes.
- Navigation now uses real paths for six primary views.
- Arabic and English use `/` and `/en/...` route variants.

## Issues Found and Severity

| Severity | Finding | Action |
|---|---|---|
| Critical | Primary pages had no indexable URL state, so navigation produced only client-side view changes. | Implemented history-backed URLs and Express SPA fallback. |
| Critical | Every language/view reused the same page title, description, and canonical in the initial implementation. | Added route and language-aware metadata, canonical URLs, and hreflang. |
| High | Structured data was absent. | Added Organization, WebSite, WebPage and conditional BreadcrumbList JSON-LD. |
| High | No sitemap or crawl directives existed. | Added robots.txt and a host-aware `/sitemap.xml` Express endpoint. |
| Medium | Some decorative/content images lacked useful alt text or lazy-loading. | Improved representative content-image alt text and loading hints. |
| Medium | Internationalization was client-side only. | Added /en route variants and Arabic/English document language switching. |
| Medium | Production canonical hostname is not represented in repository configuration. | Requires `VITE_SITE_URL` configuration in hosting/deployment. |
| Low | External JavaScript/CSS/font resources may affect render performance. | Keep font loading limited; measure before further optimization. |

## Implemented URL Structure

- Arabic: `/`, `/about`, `/real-estate-development`, `/projects`, `/services`, `/contact`
- English: `/en`, `/en/about`, `/en/real-estate-development`, `/en/projects`, `/en/services`, `/en/contact`

## Keyword Strategy

### Primary Arabic

- شركات تطوير عقاري في الرياض
- شركة تطوير عقاري بالرياض
- الاستثمار العقاري في الرياض
- شركة مقاولات في الرياض
- مقاولات وتشطيبات بالرياض
- إدارة عقارات في الرياض
- تطوير عقاري في السعودية

### Primary English

- Real estate development company in Riyadh
- Real estate investment in Riyadh
- Property development company Saudi Arabia
- Construction company in Riyadh
- Contracting company in Riyadh
- Property management in Riyadh

### Content Mapping

- `/real-estate-development`: development, land development, project planning and delivery.
- `/services`: contracting, construction, finishing, property management, investment services.
- `/projects`: residential, commercial and investment project landing pages; add individual indexable project URLs when project details are substantive.
- `/contact`: consultation and service-area conversion page.

## Recommended Content Program

Create authoritative Arabic articles before English translations, then localize pages independently. Topics include development feasibility, land partnership structures, off-plan purchase considerations, construction contracts, finishing specifications, property management, ROI methodology, Riyadh neighborhood investment analysis, and Saudi real estate regulations. Avoid guaranteed-return claims. Any numeric investment return must be expressly marked as an estimate and supported by assumptions.

## Manual Configuration Required

1. Set `VITE_SITE_URL` to the exact HTTPS production origin, including `www` only if that hostname is canonical.
2. Configure the same canonical hostname, HTTPS redirect, and remove duplicate HTTP/host variants in the hosting provider.
3. Replace the commented example in [public/robots.txt](public/robots.txt) with the production sitemap URL.
4. Verify company street address, postal code, latitude/longitude, opening hours and legal entity details. Add LocalBusiness JSON-LD only after verification.
5. Verify or replace phone, email, and social profile URLs.
6. Connect Google Search Console; submit the sitemap and inspect all indexable URLs.
7. Configure GA4 and Google Tag Manager only with IDs approved by the company.
8. Create/claim the Google Business Profile and ensure the website, phone, category, address and service areas match exactly.
9. Validate JSON-LD with Rich Results Test and Schema Markup Validator.
10. Run Lighthouse mobile/desktop testing on the deployed production origin; optimize LCP and CLS based on actual field measurements.

## SEO Performance Checklist

- [x] Real crawlable view URLs.
- [x] Arabic document direction and language switching.
- [x] Unique route/language title and description templates.
- [x] Canonical tags.
- [x] Arabic/English hreflang tags.
- [x] Organization, WebSite, WebPage and breadcrumb schema.
- [x] XML sitemap endpoint.
- [x] robots.txt.
- [x] SPA fallback for production routes.
- [ ] Production domain configured.
- [ ] LocalBusiness schema with verified business details.
- [ ] Search Console property and sitemap submission.
- [ ] GA4/GTM installed and tested.
- [ ] Google Business Profile connected and verified.
- [ ] Core Web Vitals pass on deployed pages.
- [ ] Internal content opportunity landing pages published.

## Validation Performed

Run `npm run build` and `npm test` before deployment. After deployment, verify status codes, canonical links, hreflang reciprocity, sitemap entries, robots directives, and structured data in Google's Rich Results Test.
