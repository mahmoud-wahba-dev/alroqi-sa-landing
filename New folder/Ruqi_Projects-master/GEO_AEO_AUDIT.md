# GEO and AEO Audit

## Audit Scope

Audited the React 18/Vite application, public pages, FAQ content, service data, project portfolio, organization metadata and robots configuration. The company is an Arabic-first real estate and contracting business based in Riyadh.

## Findings

### Critical or high

- AI systems need explicit entity descriptions; the site now includes organization descriptions and `about`, `knowsAbout`, area-served and same-as signals in JSON-LD.
- FAQ answers existed but were not exposed as machine-readable FAQ data. Home-page FAQ content is now represented by FAQPage JSON-LD, sourced from the visible page data.
- Service entities were presented as UI cards only. `/services` now emits Service nodes linked to the same Organization entity identifier.
- AI crawler access should remain explicit; robots.txt does not block known public crawlers and includes supplementary llms.txt documentation.
- The SPA and route metadata must not replace canonical HTML at scale. Server-rendered or prerendered primary pages remain the preferred production architecture when crawl budget or citation fidelity is material.

### Accuracy risks requiring verification

- Existing marketing copy includes company statistics, investment yield language, years of experience, project counts, locations and certifications. These statements are not automatically facts until supported by current corporate evidence.
- Existing FAQ copy has been made more conservative around investment opportunities and the consultation contact method. A complete audit should remove unsupported claims from visible copy rather than only structured data.
- Verify branch claims, headquarters address, commercial registration, professional licenses, WAFI certifications, and project delivery figures before publishing them as entity facts.

## Implemented Entity and Answer Content

- Consistent Organization entity identifier: `VITE_SITE_URL/#organization` (or deployment origin fallback).
- Organization description, Saudi market area, Riyadh locality, contact details and verified social profile URLs.
- WebSite and WebPage nodes connected to the Organization through `publisher` and `about` properties.
- Service nodes on the services route, linked to the Organization.
- FAQPage nodes on the home page, generated only from the visible FAQ answers.
- Breadcrumb nodes for supporting routes.
- Supplementary [public/llms.txt](public/llms.txt) describing the business without invented credentials or results.

## Answer Engine Content Strategy

### Core Arabic questions

- ما هي خدمات شركة مشروعات الرقي؟
- هل تقدم شركة مشروعات الرقي فرص استثمار عقاري؟
- ما المشاريع التي تطورها مشروعات الرقي؟
- هل يمكن التعاون مع مالك أرض لتطوير مشروع مشترك؟
- كيف يمكن طلب استشارة عقارية في الرياض؟

### Core English questions

- What services does Al-Ruqi Projects provide?
- Does Al-Ruqi Projects offer real estate investment opportunities?
- What types of projects does the company develop?
- Can landowners partner on development projects?
- How can customers request a consultation in Riyadh?

Answers should remain concise, directly answer the question, and distinguish verified facts from project-specific estimates. Add Saudi regulatory caveats and link to official authoritative sources where relevant.

## Arabic and English AI-Friendly Content

The current site has independent Arabic and English UI copy and route variants. Future content pages should use an Arabic-first structure with one canonical language page per language, reciprocal hreflang links, native terminology, complete definitions, and a consistent transliteration of the company name.

Recommended landing pages:

1. Real estate development in Riyadh / التطوير العقاري في الرياض
2. Real estate investment in Riyadh / الاستثمار العقاري في الرياض
3. Residential and commercial property development / التطوير العقاري السكني والتجاري
4. General contracting and construction in Riyadh / المقاولات والإنشاءات في الرياض
5. Villa construction and finishing / إنشاء وتشطيب الفلل
6. Property management / إدارة العقارات
7. Project case studies based only on documented projects
8. Market insights that cite current official Saudi data sources

## E-E-A-T and Brand Authority

- Add an About page section with founding year, founders and ownership only after documentary verification.
- Publish named leadership profiles, biographies and professional experience where authorized.
- Publish methodology pages explaining feasibility, design coordination, procurement, quality control and handover.
- Add project case studies with scope, location, delivery status, responsible teams and verifiable media.
- Maintain exact consistency for company name, phone, email, postal address, website and service-area terminology across profiles and directories.
- Link only to reputable Saudi public organizations, industry bodies and real publications. Use citations for market data.
- Obtain backlinks through genuine partnerships, project news, expert commentary and useful research—not paid placements presented as independent editorial.

## AI Crawler Accessibility Report

- Public routes are allowed in robots.txt.
- No AI crawler is specifically blocked.
- XML sitemap and canonical routes are available.
- Primary explanations are part of rendered React content, though crawler render reliability is best assured by server rendering, prerendering or static generation for key pages.
- `llms.txt` is supplementary public documentation and should not be treated as a replacement for visible content or structured data.
- Avoid blocking JavaScript, CSS, images and font assets required to render public pages.

## 90-Day Plan

### Days 1-30: Accuracy and indexability

1. Set the production `VITE_SITE_URL` and canonical host.
2. Verify company facts, address, phone, contacts, licenses and social profiles.
3. Remove unsupported achievements and inflated/incomplete statistics from visible content.
4. Deploy server-side/prerendered HTML for primary routes if crawl tests show inconsistent content rendering.
5. Submit the sitemap and inspect coverage in Search Console.
6. Validate Organization, Service, FAQPage and Breadcrumb JSON-LD.

### Days 31-60: Topical authority

1. Publish the six core service pages in Arabic and English.
2. Add two thoroughly documented project case studies.
3. Publish two source-backed Riyadh market articles.
4. Create expert methodology and risk/content pages.
5. Build a structured internal-link plan from the homepage and services page to landing pages.

### Days 61-90: Distribution and measurement

1. Complete and verify Google Business Profile and local directory consistency.
2. Earn relevant backlinks from Saudi real-estate, construction and business publications.
3. Monitor branded citations, impressions, AI visibility prompts and referral traffic.
4. Update stale projects, dates and investment language.
5. Run quarterly factual, schema and citation audits.

## Success Measurement

Use Search Console, analytics, branded search volume, referral mentions, indexed routes, qualified inquiries and citation audits. Do not treat AI answer inclusion as guaranteed or as the only success metric. No ranking or inclusion outcome should be promised.
