// Single source of truth for page copy and facts.
//
// Everything here was taken from the company's own repo
// (github.com/devadelyousf/Ruqi_Projects: translations, llms.txt, services data).
// Do NOT add numbers, licences or claims that are not in that source.
//
// Deliberately left out: the repo's `companyStats` (+45 projects, +1,850 units,
// +18 years, 100%) and the "15 year warranty" / Wafi / CMA claims. They live in a
// file named mockData.js and the company's own llms.txt says not to infer
// licences or performance figures. Add them back only once the client confirms them.

export const company = {
  name: 'مشروعات الرقي',
  fullName: 'مشروعات الرقي للتطوير والاستثمار العقاري',
  descriptor: 'شركة سعودية مقرها الرياض',
  phone: '+966510856865',
  phoneDisplay: '+966 51 085 6865',
  whatsapp: 'https://wa.me/966510856865',
  email: 'alruqiprojects@gmail.com',
}

export const hero = {
  // From the "General Contracting" service description in the repo.
  headline: 'نرتقي بمشاريع البناء إلى مستوى جديد من التميّز',
  // From the repo's llms.txt entity summary.
  lead: 'تطوير واستثمار عقاري، ومقاولات عامة، وتشطيبات، ومشاريع سكنية وتجارية في الرياض.',
  primaryCta: { label: 'استعرض المشاريع', href: '#projects' },
  secondaryCta: { label: 'تحدث معنا عبر واتساب', href: company.whatsapp },
  // Photo from the company's own site: Nozha villa, Riyadh.
  image: {
    src: '/images/hero-nozha.webp',
    srcSmall: '/images/hero-nozha-640.webp',
    width: 960,
    height: 1280,
    alt: 'ممر في فيلا سكنية بحي النزهة، إضاءة دافئة ونباتات على امتداد الجدار',
    caption: 'تشييد فيلا سكنية، حي النزهة، الرياض',
  },
}

// Statement from the repo's "General Contracting" service copy.
export const manifesto = {
  text: 'نرتقي بمشاريع البناء إلى مستوى جديد من التميّز، من خلال تنفيذ احترافي يجمع بين دقة التفاصيل، وفخامة الجودة، وأعلى معايير الإتقان في كل مرحلة من مراحل المشروع.',
}

// Real projects from the repo (src/data/mockData.js). Not included on purpose:
//  - status / completion labels: the repo marks the same project both
//    "in_progress" and 100%, so they are not reliable;
//  - unit count for project 1: the repo gives 23 in one entry and 13 in a duplicate.
export const projects = {
  title: 'مشاريعنا',
  items: [
    {
      id: 'naseem-sharqi-hassan',
      name: 'عمارة النسيم الشرقي',
      street: 'شارع حسان بن ثابت',
      district: 'حي النسيم الشرقي، الرياض',
      type: 'تطوير واستثمار سكني',
      area: '700 م²',
      floors: '3 أدوار',
      units: null,
      image: '/images/naseem-sharqi-night.webp',
      alt: 'عمارة النسيم الشرقي في شارع حسان بن ثابت ليلاً',
      description:
        'مشروع تطوير عقاري واستثمار سكني في حي النسيم الشرقي على شارع حسان بن ثابت بمدينة الرياض. يمتد المشروع على مساحة 700 م² ويتكون من 3 أدوار تم تطويرها وتأهيلها بالكامل وفق أعلى معايير الجودة المعمارية والإنشائية.',
      features: [
        'موقع حيوي مباشر على شارع حسان بن ثابت',
        'مبنى متكامل من 3 أدوار مطورة بالكامل',
        'توزيع هندسي واستثماري مدروس',
        'تشطيبات عالية الجودة مع عزل متكامل',
      ],
    },
    {
      id: 'naseem-gharbi-osama',
      name: 'عمارة النسيم الغربي',
      street: 'شارع أسامة بن زيد',
      district: 'حي النسيم الغربي، الرياض',
      type: 'تطوير سكني',
      area: '1,300 م²',
      floors: '2 أدوار',
      units: '30 وحدة',
      image: '/images/naseem-gharbi.webp',
      alt: 'واجهة عمارة النسيم الغربي في شارع أسامة بن زيد',
      description:
        'مشروع تطوير عقاري سكني في حي النسيم الغربي على شارع أسامة بن زيد بمدينة الرياض. يمتد المشروع على مساحة 1,300 م² ويتكون من دورين يضمان 30 وحدة سكنية.',
      features: [
        'موقع استراتيجي على شارع أسامة بن زيد',
        '30 وحدة سكنية موزعة على دورين',
        'مساحة إجمالية 1,300 م² بتخطيط وظيفي',
        'قريب من الخدمات والمرافق الحيوية بالحي',
      ],
    },
    {
      id: 'naseem-sharqi-hamzah-3',
      name: 'عمارة النسيم الشرقي',
      street: 'شارع الحمزة، ثلاثة أدوار',
      district: 'حي النسيم الشرقي، الرياض',
      type: 'تطوير سكني',
      area: '650 م²',
      floors: '3 أدوار',
      units: '9 وحدات',
      image: '/images/naseem-hamzah.webp',
      alt: 'عمارة النسيم الشرقي في شارع الحمزة',
      description:
        'مشروع تطوير عقاري سكني في حي النسيم الشرقي على شارع الحمزة (أبو هريرة سابقاً). يمتد المشروع على مساحة 650 م² ويتكون من 3 أدوار تضم 9 وحدات سكنية.',
      features: [
        'موقع مميز على شارع الحمزة',
        '9 وحدات سكنية موزعة على 3 أدوار',
        'مساحة 650 م² باستغلال أمثل للمساحات',
        'قريب من المرافق الحيوية والطرق الرئيسية',
      ],
    },
    {
      id: 'naseem-sharqi-hamzah-2',
      name: 'عمارة النسيم الشرقي',
      street: 'شارع الحمزة، دوران',
      district: 'حي النسيم الشرقي، الرياض',
      type: 'تطوير سكني',
      area: '650 م²',
      floors: '2 أدوار',
      units: '9 وحدات',
      image: '/images/naseem-hamzah.webp',
      alt: 'عمارة النسيم الشرقي في شارع الحمزة',
      description:
        'مشروع تطوير عقاري سكني في حي النسيم الشرقي على شارع الحمزة (أبو هريرة سابقاً). يمتد المشروع على مساحة 650 م² ويتكون من دورين يضمان 9 وحدات سكنية.',
      features: [
        'موقع على شارع الحمزة ضمن ممر استثماري نشط',
        '9 وحدات سكنية موزعة على دورين',
        'مساحة 650 م² بتصميم وظيفي',
        'يكمل مشاريع الرقي في النسيم الشرقي',
      ],
    },
    {
      id: 'villa-rabwa',
      name: 'تشييد فيلا سكنية',
      street: 'حي الربوة',
      district: 'الرياض',
      type: 'مقاولات',
      area: '800 م²',
      floors: null,
      units: null,
      image: '/images/projects/villa-rabwa/4.webp',
      alt: 'فيلا سكنية أثناء التنفيذ في حي الربوة',
      description:
        'تنفيذ أعمال إنشائية وواجهات لفيلا سكنية بمعايير تنفيذ دقيقة ومتابعة مستمرة لمراحل العمل.',
      features: ['الأعمال الإنشائية', 'أعمال الواجهات', 'الإشراف والمتابعة'],
    },
    {
      id: 'villa-nozha',
      name: 'تشييد فيلا سكنية',
      street: 'حي النزهة',
      district: 'الرياض',
      type: 'مقاولات',
      area: '700 م²',
      floors: null,
      units: null,
      image: '/images/projects/villa-nozha/4.webp',
      alt: 'فناء فيلا سكنية في حي النزهة بإضاءة دافئة ونباتات على الجدار',
      description:
        'تنفيذ أعمال إنشائية وواجهات لفيلا سكنية بمعايير تنفيذ دقيقة ومتابعة مستمرة لمراحل العمل.',
      features: ['الأعمال الإنشائية', 'أعمال الواجهات', 'الإشراف والمتابعة'],
    },
    {
      id: 'sunrise-school',
      name: 'تطوير وترميم مدرسة SunRise',
      street: 'حي الورود',
      district: 'الرياض',
      type: 'تجاري، ترميم',
      area: '700 م²',
      floors: null,
      units: null,
      image: '/images/projects/sunrise-school/5.webp',
      alt: 'واجهة مدرسة SunRise وساحتها الخضراء في حي الورود',
      description: 'أعمال تطوير وترميم لمدرسة SunRise مع متابعة مستمرة لمراحل العمل.',
      features: ['أعمال تطوير المدرسة', 'أعمال الترميم', 'الإشراف والمتابعة'],
    },
  ],
}

// Photo galleries. Projects with several photos on the company's site list them
// here (first = cover shown in the sheet); every other project falls back to its
// single image. Files live in public/images/projects/<slug>/<n>.webp.
const shots = (slug, order) => order.map((n) => `/images/projects/${slug}/${n}.webp`)
const galleries = {
  'villa-rabwa': shots('villa-rabwa', [4, 1, 2, 3, 5, 6, 7]),
  'villa-nozha': shots('villa-nozha', [4, 3, 2, 1]),
  'sunrise-school': shots('sunrise-school', [5, 6, 3, 1, 2, 4, 7, 8]),
}
projects.items = projects.items.map((project) => ({
  ...project,
  gallery: galleries[project.id] ?? [project.image],
}))

// Service copy from the repo (shortDesc and clean feature lines only).
export const services = {
  title: 'ما نقدمه',
  items: [
    {
      id: 'contracting',
      name: 'المقاولات العامة',
      desc: 'دراسة وتطوير المخططات والأبراج السكنية والتجارية من الفكرة حتى التسليم.',
      features: [
        'تنفيذ مشاريع البناء والإنشاءات',
        'أعمال الترميم والتجديد والتطوير',
        'التشطيبات الداخلية والخارجية',
        'الإشراف على المشاريع ومتابعة التنفيذ',
      ],
    },
    {
      id: 'management',
      name: 'إدارة وتطوير المشاريع',
      desc: 'إدارة هندسية وتنفيذية شاملة للمشاريع من التخطيط حتى التسليم.',
      features: [
        'إشراف هندسي وتنفيذي دقيق',
        'إدارة التكاليف وهندسة القيمة',
        'مراقبة الجودة والتسليم وفق المواصفات',
      ],
    },
    {
      id: 'finishes',
      name: 'التشطيبات الفاخرة',
      desc: 'تنفيذ المقاولات الإنشائية والتشطيبات الديكورية الراقية.',
      features: [
        'أعمال المقاولات العامة والإنشاءات التخصصية',
        'أعمال الديكور والتكسيات الداخلية والخارجية',
        'عزل مائي وحراري',
      ],
    },
    {
      id: 'renovation',
      name: 'ترميم وتجديد المباني',
      desc: 'إعادة إحياء وتحديث العقارات والمباني القائمة لرفع قيمتها وكفاءتها.',
      features: [
        'إعادة تصميم الواجهات الخارجية',
        'تحديث الأنظمة الكهروميكانيكية والتكييف',
        'رفع القيمة السوقية والإيجارية للأصل العقاري',
      ],
    },
    {
      id: 'supply',
      name: 'توريد',
      desc: 'توريد مواد البناء والتشطيبات وفق المواصفات المعتمدة.',
      features: [
        'توريد الرخام الطبيعي والصناعي',
        'توريد مغاسل الحمامات بتصاميم عصرية',
        'توريد مغاسل رخام بتصاميم مخصصة',
      ],
    },
  ],
}

export const contact = {
  title: 'ابدأ مشروعك معنا',
  lead: 'راسلنا على واتساب أو اتصل بالمكتب في الرياض، وسنرد عليك لمناقشة مشروعك.',
}
