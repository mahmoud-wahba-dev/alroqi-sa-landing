import { mockServices, mockFaqs } from './data/mockData';

const pages = {
  home: {
    ar: { title: 'شركة مشروعات الرقي للتطوير والاستثمار العقاري في الرياض', description: 'مشروعات الرقي شركة تطوير واستثمار عقاري ومقاولات وتشطيبات وإدارة عقارية في الرياض، تقدم حلولاً عقارية متكاملة عبر المملكة العربية السعودية.' },
    en: { title: 'Al-Ruqi Projects | Real Estate Development in Riyadh', description: 'Al-Ruqi Projects provides real estate development, investment, contracting, construction, finishing and property management services in Riyadh, Saudi Arabia.' }
  },
  about: { ar: { title: 'من نحن | مشروعات الرقي للتطوير العقاري بالرياض', description: 'تعرف على مشروعات الرقي، رؤيتنا وخبرتنا في التطوير والاستثمار العقاري والمقاولات في الرياض والمملكة العربية السعودية.' }, en: { title: 'About Al-Ruqi Projects | Riyadh Real Estate Developer', description: 'Learn about Al-Ruqi Projects, our vision and our real estate development and investment expertise in Riyadh and Saudi Arabia.' } },
  projects: { ar: { title: 'مشاريعنا العقارية في الرياض والسعودية | مشروعات الرقي', description: 'استعرض المشاريع السكنية والتجارية والاستثمارية التي تطورها مشروعات الرقي في الرياض والمملكة العربية السعودية.' }, en: { title: 'Real Estate Projects in Riyadh | Al-Ruqi Projects', description: 'Explore residential, commercial and investment projects developed by Al-Ruqi Projects in Riyadh and Saudi Arabia.' } },
  development: { ar: { title: 'شركة تطوير عقاري في الرياض | مشروعات الرقي', description: 'خدمات التطوير العقاري المتكاملة في الرياض، تشمل دراسة الفرص واختيار المواقع والتصميم والتنفيذ وتسليم المشاريع ذات القيمة المستدامة.' }, en: { title: 'Real Estate Development Company in Riyadh | Al-Ruqi', description: 'Integrated real estate development services in Riyadh, including feasibility, land selection, design, construction and delivery.' } },
  services: { ar: { title: 'خدمات التطوير العقاري والمقاولات والإنشاءات بالرياض', description: 'التطوير والاستثمار العقاري والمقاولات والإنشاء والتشطيبات وإدارة العقارات وخدمات الملكية من مشروعات الرقي في الرياض.' }, en: { title: 'Real Estate, Contracting & Property Services in Riyadh', description: 'Real estate development and investment, construction, finishing, contracting and property management services by Al-Ruqi Projects.' } },
  contact: { ar: { title: 'تواصل معنا | مشروعات الرقي الرياض', description: 'تواصل مع فريق مشروعات الرقي للاستفسار عن التطوير والاستثمار العقاري والمقاولات والخدمات العقارية في الرياض.' }, en: { title: 'Contact Al-Ruqi Projects in Riyadh', description: 'Contact Al-Ruqi Projects about real estate development, investment, contracting and property services in Riyadh.' } }
};

export const viewPaths = { home: '', about: 'about', projects: 'projects', development: 'real-estate-development', services: 'services', contact: 'contact' };

export function pathToView(pathname, language) {
  const parts = pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
  if (parts[0] === 'en') parts.shift();
  const path = parts.join('/');
  if (!path) return 'home';
  return Object.entries(viewPaths).find(([, value]) => value === path)?.[0] || 'home';
}

export function viewUrl(view, language) {
  const prefix = language === 'en' ? '/en' : '';
  const suffix = viewPaths[view] ? `/${viewPaths[view]}` : '';
  return `${prefix}${suffix}` || '/';
}

function ensureMeta(name, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    if (property) element.setAttribute('property', name);
    else element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  return element;
}

export function applySeo(view, language) {
  const content = pages[view]?.[language] || pages.home[language];
  const origin = import.meta.env.VITE_SITE_URL || window.location.origin;
  const canonical = new URL(viewUrl(view, language), origin).href;
  const alternateAr = new URL(viewUrl(view, 'ar'), origin).href;
  const alternateEn = new URL(viewUrl(view, 'en'), origin).href;

  document.title = content.title;
  ensureMeta('description').setAttribute('content', content.description);
  ensureMeta('robots').setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  ensureMeta('og:title', true).setAttribute('content', content.title);
  ensureMeta('og:description', true).setAttribute('content', content.description);
  ensureMeta('og:type', true).setAttribute('content', 'website');
  ensureMeta('og:locale', true).setAttribute('content', language === 'ar' ? 'ar_SA' : 'en_SA');
  ensureMeta('og:url', true).setAttribute('content', canonical);
  ensureMeta('twitter:card').setAttribute('content', 'summary_large_image');
  ensureMeta('twitter:title').setAttribute('content', content.title);
  ensureMeta('twitter:description').setAttribute('content', content.description);

  let canonicalLink = document.head.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = canonical;

  for (const existing of document.head.querySelectorAll('link[data-seo-alternate]')) existing.remove();
  for (const [hreflang, href] of [['ar-SA', alternateAr], ['en-SA', alternateEn], ['x-default', alternateAr]]) {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = hreflang;
    link.href = href;
    link.dataset.seoAlternate = '';
    document.head.appendChild(link);
  }

  applyStructuredData(view, canonical, language);
}

function applyStructuredData(view, canonical, language) {
  applyStructuredDataGraph(view, canonical, language);
}

function applyStructuredDataGraph(view, canonical, language) {
  const baseUrl = import.meta.env.VITE_SITE_URL || window.location.origin;
  const graph = [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'مشروعات الرقي للتطوير والاستثمار العقاري',
      alternateName: 'Al-Ruqi Projects',
      url: `${baseUrl}/`,
      logo: `${baseUrl}/images/al-ruqi-mark.jpg`,
      email: 'alruqiprojects@gmail.com',
      telephone: '+966510856865',
      description: language === 'ar'
        ? 'شركة سعودية في الرياض تقدم خدمات التطوير والاستثمار العقاري والمقاولات والإنشاء والتشطيبات وإدارة العقارات.'
        : 'A Saudi real estate company based in Riyadh providing development, investment, general contracting, construction, finishing and property management services.',
      sameAs: [
        'https://www.facebook.com/profile.php?id=61591063980099',
        'https://www.instagram.com/alruqiprojects/',
        'https://www.tiktok.com/@raqi_projects'
      ],
      address: { '@type': 'PostalAddress', addressLocality: 'Riyadh', addressRegion: 'Riyadh Region', addressCountry: 'SA' },
      areaServed: [
        { '@type': 'City', name: 'Riyadh' },
        { '@type': 'Country', name: 'Saudi Arabia' }
      ]
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: `${baseUrl}/`,
      name: 'مشروعات الرقي للتطوير والاستثمار العقاري',
      inLanguage: ['ar-SA', 'en-SA'],
      publisher: { '@id': `${baseUrl}/#organization` }
    },
    {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: document.title,
      description: document.querySelector('meta[name="description"]')?.content,
      inLanguage: language === 'ar' ? 'ar-SA' : 'en-SA',
      isPartOf: { '@id': `${baseUrl}/#website` },
      about: { '@id': `${baseUrl}/#organization` }
    }
  ];
  if (view === 'services') {
    for (const service of mockServices) {
      graph.push({
        '@type': 'Service',
        '@id': `${baseUrl}${canonical.includes('/en/') ? '/en/services' : '/services'}#${service.id}`,
        name: language === 'ar' ? service.title.ar : service.title.en,
        description: language === 'ar' ? service.fullDesc.ar : service.fullDesc.en,
        provider: { '@id': `${baseUrl}/#organization` },
        areaServed: { '@type': 'City', name: 'Riyadh' },
        serviceType: language === 'ar' ? service.title.ar : service.title.en
      });
    }
  }
  if (view === 'home') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: mockFaqs.map((faq) => ({
        '@type': 'Question',
        name: language === 'ar' ? faq.question.ar : faq.question.en,
        acceptedAnswer: {
          '@type': 'Answer',
          text: language === 'ar' ? faq.answer.ar : faq.answer.en
        }
      }))
    });
  }
  if (view !== 'home') {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: language === 'ar' ? 'الرئيسية' : 'Home', item: `${baseUrl}/` },
        { '@type': 'ListItem', position: 2, name: document.title, item: canonical }
      ]
    });
  }

  let script = document.head.querySelector('script[data-seo-schema]');
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seoSchema = '';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}
