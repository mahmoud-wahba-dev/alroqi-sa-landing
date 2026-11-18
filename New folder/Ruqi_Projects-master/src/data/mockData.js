export const mockProjects = [
  {
    id: "project-naseem-1",
    order: 1,
    // Project 1 — Al-Naseem Al-Sharqi, Hassan Bin Thabit St.
    title: {
      ar: "مشروع عمارة النسيم الشرقي - تطوير واستثمار عقاري",
      en: "Al-Naseem Al-Sharqi Residential & Investment Building",
    },
    category: "residential",
    status: "completed",
    location: {
      ar: "حي النسيم الشرقي، شارع حسان بن ثابت",
      en: "Al-Naseem Al-Sharqi, Hassan Bin Thabit Street",
    },
    city: {
      ar: "الرياض",
      en: "Riyadh",
    },
    area: "700 م²",
    unitsCount: 23,
    completionRate: 100,
    expectedDelivery: "جاهز للاستثمار والتأجير",
    description: {
      ar: "مشروع تطوير عقاري واستثمار سكني استراتيجي في حي النسيم الشرقي على شارع حسان بن ثابت بمدينة الرياض. يمتد المشروع على مساحة 700 م² ويتكون من 3 أدوار تم تطويرها وتأهيلها بالكامل وفق أعلى معايير الجودة المعمارية والإنشائية، وتضم وحدات سكنية واستثمارية مهيأة لتحقيق أعلى عوائد تأجيرية مستدامة في موقع متميز بالقرب من كافة المحاور الحيوية.",
      en: "A prime residential real estate development and investment property in Al-Naseem Al-Sharqi, strategically situated on Hassan Bin Thabit Street in Riyadh. Spanning 700 sqm across 3 fully developed floors, combining contemporary rehabilitation, high rental yield potential, and strategic accessibility to major arterial roads.",
    },
    coverImage: "/images/al_naseem_building.jpg",
    gallery: ["/images/al_naseem_building.jpg"],
    features: {
      ar: [
        "موقع حيوي مباشر على شارع حسان بن ثابت بالنسيم الشرقي",
        "مبنى متكامل مكون من 3 أدوار مطورة بالكامل",
        "مساحة 700 م² بتوزيع هندسي واستثماري مدروس",
        "عمارة تطوير عقاري مجهزة للاستثمار السكني بعوائد مجزية",
        "بنية تحتية حديثة وتشطيبات عالية الجودة مع عزل متكامل",
      ],
      en: [
        "Prime location directly on Hassan Bin Thabit Street",
        "3 fully developed floors optimized for residential investment",
        "700 sqm total floor area with high yield design",
        "Turnkey real estate development with stable cash flow",
        "Upgraded infrastructure, modern finishes, and thermal insulation",
      ],
    },
    specs: [
      {
        label: { ar: "المساحة الإجمالية", en: "Total Area" },
        value: { ar: "700 م²", en: "700 sqm" },
      },
      {
        label: { ar: "عدد الأدوار", en: "Floors Count" },
        value: { ar: "3 أدوار", en: "3 Floors" },
      },
      {
        label: { ar: "نوع المشروع", en: "Project Type" },
        value: {
          ar: "عمارة تطوير عقاري واستثمار سكني",
          en: "Development & Residential Investment",
        },
      },
      {
        label: { ar: "الموقع الدقيق", en: "Specific Location" },
        value: {
          ar: "شارع حسان بن ثابت، النسيم الشرقي، الرياض",
          en: "Hassan Bin Thabit St., Al-Naseem, Riyadh",
        },
      },
    ],
  },
  // ─── Project 2 — Al-Naseem Al-Gharbi, Osama Bin Zaid St. ───────────────────
  {
    id: "project-naseem-2",
    order: 2,
    title: {
      ar: "عمارة النسيم الغربي - شارع أسامة بن زيد",
      en: "Al-Naseem Al-Gharbi Building — Osama Bin Zaid Street",
    },
    category: "residential",
    status: "in_progress",
    location: {
      ar: "حي النسيم الغربي، شارع أسامة بن زيد",
      en: "Al-Naseem Al-Gharbi, Osama Bin Zaid Street",
    },
    city: { ar: "الرياض", en: "Riyadh" },
    area: "1,300 م²",
    unitsCount: 30,
    completionRate: 80,
    expectedDelivery: "2025",
    description: {
      ar: "مشروع تطوير عقاري سكني في حي النسيم الغربي على شارع أسامة بن زيد بمدينة الرياض. يمتد المشروع على مساحة 1,300 م² ويتكون من دورين يضمان 30 وحدة سكنية، ويقع في موقع متميز يتيح سهولة الوصول إلى المحاور الرئيسية بالحي.",
      en: "A residential real estate development in Al-Naseem Al-Gharbi on Osama Bin Zaid Street, Riyadh. Spanning 1,300 sqm across 2 floors with 30 residential units, situated in a prime location with easy access to the district's main arterial roads.",
    },
    coverImage: "/images/proj2.jpg",
    gallery: ["/images/proj2.jpg"],
    features: {
      ar: [
        "موقع استراتيجي على شارع أسامة بن زيد بالنسيم الغربي",
        "30 وحدة سكنية موزعة على دورين",
        "مساحة إجمالية 1,300 م² بتخطيط وظيفي متكامل",
        "قريب من الخدمات والمرافق الحيوية بالحي",
        "فرصة استثمارية بعوائد تأجيرية مجزية",
      ],
      en: [
        "Strategic location on Osama Bin Zaid Street, Al-Naseem Al-Gharbi",
        "30 residential units across 2 floors",
        "1,300 sqm total area with functional layout",
        "Close proximity to key district amenities and services",
        "Strong rental yield investment opportunity",
      ],
    },
    specs: [
      {
        label: { ar: "المساحة الإجمالية", en: "Total Area" },
        value: { ar: "1,300 م²", en: "1,300 sqm" },
      },
      {
        label: { ar: "عدد الأدوار", en: "Floors Count" },
        value: { ar: "2 أدوار", en: "2 Floors" },
      },
      {
        label: { ar: "عدد الوحدات", en: "Total Units" },
        value: { ar: "30 وحدة", en: "30 Units" },
      },
      {
        label: { ar: "الموقع الدقيق", en: "Specific Location" },
        value: {
          ar: "شارع أسامة بن زيد، النسيم الغربي، الرياض",
          en: "Osama Bin Zaid St., Al-Naseem Al-Gharbi, Riyadh",
        },
      },
    ],
  },

  // ─── Project 3 — Al-Naseem Al-Sharqi, Al-Hamzah St. (3 floors) ─────────────
  {
    id: "project-naseem-3",
    order: 3,
    title: {
      ar: "عمارة النسيم الشرقي - شارع الحمزة (3 أدوار)",
      en: "Al-Naseem Al-Sharqi Building — Al-Hamzah Street (3 Floors)",
    },
    category: "residential",
    status: "in_progress",
    location: {
      ar: "حي النسيم الشرقي، شارع الحمزة (أبو هريرة سابقاً)",
      en: "Al-Naseem Al-Sharqi, Al-Hamzah Street (formerly Abu Hurairah St.)",
    },
    city: { ar: "الرياض", en: "Riyadh" },
    area: "650 م²",
    unitsCount: 9,
    completionRate: 100,
    expectedDelivery: "2025",
    description: {
      ar: "مشروع تطوير عقاري سكني في حي النسيم الشرقي على شارع الحمزة (المعروف سابقاً بشارع أبو هريرة) بمدينة الرياض. يمتد المشروع على مساحة 650 م² ويتكون من 3 أدوار تضم 9 وحدات سكنية في موقع حيوي بالقرب من المرافق الرئيسية.",
      en: "A residential real estate development in Al-Naseem Al-Sharqi on Al-Hamzah Street (formerly Abu Hurairah St.), Riyadh. Spanning 650 sqm across 3 floors with 9 residential units in a prime location near key district facilities.",
    },
    coverImage: "/images/proj3.jpg",
    gallery: ["/images/proj3.jpg"],
    features: {
      ar: [
        "موقع مميز على شارع الحمزة بالنسيم الشرقي",
        "9 وحدات سكنية موزعة على 3 أدوار",
        "مساحة 650 م² باستغلال أمثل للمساحات",
        "قريب من المرافق الحيوية والطرق الرئيسية",
        "استثمار سكني ذو عائد تأجيري مستقر",
      ],
      en: [
        "Prime location on Al-Hamzah Street, Al-Naseem Al-Sharqi",
        "9 residential units across 3 floors",
        "650 sqm with optimized space utilization",
        "Close to key amenities and main roads",
        "Stable rental yield residential investment",
      ],
    },
    specs: [
      {
        label: { ar: "المساحة الإجمالية", en: "Total Area" },
        value: { ar: "650 م²", en: "650 sqm" },
      },
      {
        label: { ar: "عدد الأدوار", en: "Floors Count" },
        value: { ar: "3 أدوار", en: "3 Floors" },
      },
      {
        label: { ar: "عدد الوحدات", en: "Total Units" },
        value: { ar: "9 وحدات", en: "9 Units" },
      },
      {
        label: { ar: "الموقع الدقيق", en: "Specific Location" },
        value: {
          ar: "شارع الحمزة، النسيم الشرقي، الرياض",
          en: "Al-Hamzah St., Al-Naseem Al-Sharqi, Riyadh",
        },
      },
    ],
  },

  // ─── Project 4 — Al-Naseem Al-Sharqi, Al-Hamzah St. (2 floors) ─────────────
  {
    id: "project-naseem-4",
    order: 4,
    title: {
      ar: "عمارة النسيم الشرقي - شارع الحمزة (2 أدوار)",
      en: "Al-Naseem Al-Sharqi Building — Al-Hamzah Street (2 Floors)",
    },
    category: "residential",
    status: "in_progress",
    location: {
      ar: "حي النسيم الشرقي، شارع الحمزة (أبو هريرة سابقاً)",
      en: "Al-Naseem Al-Sharqi, Al-Hamzah Street (formerly Abu Hurairah St.)",
    },
    city: { ar: "الرياض", en: "Riyadh" },
    area: "650 م²",
    unitsCount: 9,
    completionRate: 100,
    expectedDelivery: "2025",
    description: {
      ar: "مشروع تطوير عقاري سكني في حي النسيم الشرقي على شارع الحمزة (المعروف سابقاً بشارع أبو هريرة) بمدينة الرياض. يمتد المشروع على مساحة 650 م² ويتكون من دورين يضمان 9 وحدات سكنية، ضمن نفس الممر الاستثماري الحيوي بحي النسيم الشرقي.",
      en: "A residential real estate development in Al-Naseem Al-Sharqi on Al-Hamzah Street (formerly Abu Hurairah St.), Riyadh. Spanning 650 sqm across 2 floors with 9 residential units, within the same high-value investment corridor of Al-Naseem Al-Sharqi.",
    },
    coverImage:
      "/images/proj3.jpg",
    gallery: [
      "/images/proj3.jpg",
    ],
    features: {
      ar: [
        "موقع على شارع الحمزة بالنسيم الشرقي ضمن ممر استثماري نشط",
        "9 وحدات سكنية موزعة على دورين",
        "مساحة 650 م² بتصميم وظيفي عملي",
        "يكمل مجموعة مشاريع الرقي في النسيم الشرقي",
        "فرصة استثمارية ضمن محفظة متكاملة",
      ],
      en: [
        "Located on Al-Hamzah Street within an active investment corridor",
        "9 residential units across 2 floors",
        "650 sqm with practical functional design",
        "Complements Al-Ruqi's portfolio in Al-Naseem Al-Sharqi",
        "Investment opportunity within an integrated portfolio",
      ],
    },
    specs: [
      {
        label: { ar: "المساحة الإجمالية", en: "Total Area" },
        value: { ar: "650 م²", en: "650 sqm" },
      },
      {
        label: { ar: "عدد الأدوار", en: "Floors Count" },
        value: { ar: "2 أدوار", en: "2 Floors" },
      },
      {
        label: { ar: "عدد الوحدات", en: "Total Units" },
        value: { ar: "9 وحدات", en: "9 Units" },
      },
      {
        label: { ar: "الموقع الدقيق", en: "Specific Location" },
        value: {
          ar: "شارع الحمزة، النسيم الشرقي، الرياض",
          en: "Al-Hamzah St., Al-Naseem Al-Sharqi, Riyadh",
        },
      },
    ],
  },
  {
    id: "project-residential-villa-construction",
    order: 5,
    title: {
      ar: "تشييد فيلا سكنية",
      en: "Residential Villa Construction",
    },
    category: "residential",
    status: "in_progress",
    location: {
      ar: "الرياض حي الربوة ",
      en: "Riyadh, Al-Rabwa district",
    },
    area: "800 م²",
    completionRate: 100,
    description: {
      ar: "تنفيذ أعمال إنشائية وواجهات لفيلا سكنية بمعايير تنفيذ دقيقة ومتابعة مستمرة لمراحل العمل.",
      en: "Construction and façade works for a residential villa, delivered to precise execution standards with continuous monitoring throughout every stage of the work.",
    },
    coverImage: "/images/villa-construction-04.jpeg",
    gallery: [
      "/images/villa-construction-01.jpeg",
      "/images/villa-construction-02.jpeg",
      "/images/villa-construction-03.jpeg",
      "/images/villa-construction-04.jpeg",
      "/images/villa-construction-05.jpeg",
      "/images/villa-construction-06.jpeg",
      "/images/villa-construction-07.jpeg",
    ],
    features: {
      ar: [
        "الأعمال الإنشائية",
        "أعمال الواجهات",
        "الإشراف والمتابعة",
      ],
      en: [
        "Structural works",
        "Façade works",
        "Supervision and progress monitoring",
      ],
    },
    specs: [],
  },
  {
    id: "project-residential-villa-construction-nozha",
    order: 6,
    title: {
      ar: "تشييد فيلا سكنية",
      en: "Residential Villa Construction",
    },
    category: "residential",
    status: "in_progress",
    location: {
      ar: "الرياض، حي النزهة",
      en: "Riyadh, Al-Nozha district",
    },
    area: "700 م²",
    completionRate: 100,
    description: {
      ar: "تنفيذ أعمال إنشائية وواجهات لفيلا سكنية بمعايير تنفيذ دقيقة ومتابعة مستمرة لمراحل العمل.",
      en: "Construction and façade works for a residential villa, delivered to precise execution standards with continuous monitoring throughout every stage of the work.",
    },
    coverImage: "/images/villa-construction-nozha 4.jpeg",
    gallery: [
      "/images/villa-construction-nozha 4.jpeg",
      "/images/villa-construction-nozha 1.jpeg",
      "/images/villa-construction-nozha 2.jpeg",
      "/images/villa-construction-nozha 3.jpeg"
    ],
    features: {
      ar: [
        "الأعمال الإنشائية",
        "أعمال الواجهات",
        "الإشراف والمتابعة",
      ],
      en: [
        "Structural works",
        "Façade works",
        "Supervision and progress monitoring",
      ],
    },
    specs: [],
  },
  {
    id: "project-naseem-1-additional",
    order: 7,
    title: {
      ar: "مشروع عمارة النسيم الشرقي - تطوير واستثمار عقاري",
      en: "Al-Naseem Al-Sharqi Residential & Investment Building",
    },
    category: "residential",
    status: "completed",
    location: {
      ar: "حي النسيم الشرقي، شارع حسان بن ثابت",
      en: "Al-Naseem Al-Sharqi, Hassan Bin Thabit Street",
    },
    city: {
      ar: "الرياض",
      en: "Riyadh",
    },
    area: "700 م²",
    unitsCount: 13,
    completionRate: 100,
    expectedDelivery: "جاهز للاستثمار والتأجير",
    description: {
      ar: "مشروع تطوير عقاري واستثمار سكني استراتيجي في حي النسيم الشرقي على شارع حسان بن ثابت بمدينة الرياض. يمتد المشروع على مساحة 700 م² ويتكون من 3 أدوار تم تطويرها وتأهيلها بالكامل وفق أعلى معايير الجودة المعمارية والإنشائية، وتضم وحدات سكنية واستثمارية مهيأة لتحقيق أعلى عوائد تأجيرية مستدامة في موقع متميز بالقرب من كافة المحاور الحيوية.",
      en: "A prime residential real estate development and investment property in Al-Naseem Al-Sharqi, strategically situated on Hassan Bin Thabit Street in Riyadh. Spanning 700 sqm across 3 fully developed floors, combining contemporary rehabilitation, high rental yield potential, and strategic accessibility to major arterial roads.",
    },
    coverImage: "/images/al_naseem_building.jpg",
    gallery: ["/images/al_naseem_building.jpg"],
    features: {
      ar: [
        "موقع حيوي مباشر على شارع حسان بن ثابت بالنسيم الشرقي",
        "مبنى متكامل مكون من 3 أدوار مطورة بالكامل",
        "مساحة 700 م² بتوزيع هندسي واستثماري مدروس",
        "عمارة تطوير عقاري مجهزة للاستثمار السكني بعوائد مجزية",
        "بنية تحتية حديثة وتشطيبات عالية الجودة مع عزل متكامل",
      ],
      en: [
        "Prime location directly on Hassan Bin Thabit Street",
        "3 fully developed floors optimized for residential investment",
        "700 sqm total area with high yield design",
        "Turnkey real estate development with stable cash flow",
        "Upgraded infrastructure, modern finishes, and thermal insulation",
      ],
    },
    specs: [
      {
        label: { ar: "المساحة الإجمالية", en: "Total Area" },
        value: { ar: "700 م²", en: "700 sqm" },
      },
      {
        label: { ar: "عدد الأدوار", en: "Floors Count" },
        value: { ar: "3 أدوار", en: "3 Floors" },
      },
      {
        label: { ar: "نوع المشروع", en: "Project Type" },
        value: {
          ar: "عمارة تطوير عقاري واستثمار سكني",
          en: "Development & Residential Investment",
        },
      },
      {
        label: { ar: "الموقع الدقيق", en: "Specific Location" },
        value: {
          ar: "شارع حسان بن ثابت، النسيم الشرقي، الرياض",
          en: "Hassan Bin Thabit St., Al-Naseem, Riyadh",
        },
      },
    ],
  },
  {
    id: "project-sunrise-school-renovation",
    order: 8,
    title: {
      ar: "تطوير وترميم مدرسة SunRise",
      en: "SunRise School Development & Renovation",
    },
    category: "commercial",
    status: "in_progress",
    location: {
      ar: "الرياض حي الورود",
      en: "Riyadh, Al-Wurud District"
    },
    area: "700 م²",
    completionRate: 100,
    description: {
      ar: "أعمال تطوير وترميم لمدرسة SunRise مع متابعة مستمرة لمراحل العمل.",
      en: "Development and renovation works for SunRise School, with ongoing monitoring throughout the work.",
    },
    coverImage: "/images/sunrise6.jpeg",
    gallery: [
      "/images/sunrise1.jpeg",
      "/images/sunrise2.jpeg",
      "/images/sunrise3.jpeg",
      "/images/sunrise4.jpeg",
      "/images/sunrise5.jpeg",
      "/images/sunrise6.jpeg",
      "/images/sunrise7.jpeg",
      "/images/sunrise8.jpeg",
    ],
    features: {
      ar: [
        "أعمال تطوير المدرسة",
        "أعمال الترميم",
        "الإشراف والمتابعة",
      ],
      en: [
        "School development works",
        "Renovation works",
        "Supervision and progress monitoring",
      ],
    },
    specs: [],
  },
];

export const mockServices = [
  {
    id: "development",
    iconName: "Building2",
    title: { ar: "المقاولات العامة", en: "General Contracting" },
    shortDesc: {
      ar: "دراسة وتطوير المخططات والأبراج السكنية والتجارية من الفكرة حتى التسليم وفق أعلى المعايير.",
      en: "Master planning and developing residential and commercial landmarks from concept to handover.",
    },
    fullDesc: {
ar: "نرتقي بمشاريع البناء إلى مستوى جديد من التميّز، من خلال تنفيذ احترافي يجمع بين دقة التفاصيل، وفخامة الجودة، وأعلى معايير الإتقان في كل مرحلة من مراحل المشروع.",
      en: "We elevate construction projects through professional execution, exceptional craftsmanship, and the highest standards of quality. From initial construction to final handover, we turn visions into reality with precision, excellence, and lasting value.",
    },
    features: {
      ar: [
         "دراسات الجدوى وتحليل السوق العقاريتنفيذ مشاريع البناء والإنشاءات.",
        "أعمال الترميم والتجديد والتطوير.",
        "التشطيبات الداخلية والخارجية.",
        "الإشراف على المشاريع ومتابعة التنفيذ."
      ],
      en: [
         "Building Construction & Structural Works",
        "Renovation, Restoration & Property Upgrades",
        "Interior & Exterior Finishing",
        "Project Supervision & Execution Management"
      ],
    },
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "project-management",
    iconName: "Briefcase",
    title: {
      ar: "إدارة وتطوير المشاريع",
      en: "Project Management & Development",
    },
    shortDesc: {
      ar: "إدارة هندسية وتنفيذية شاملة تضمن تسليم المشاريع في الوقت المحدد وضمن الميزانية المعتمدة.",
      en: "Comprehensive engineering and executive oversight ensuring on-time and on-budget project delivery.",
    },
    fullDesc: {
      ar: "نطبق أحدث منهجيات إدارة المشاريع العالمية (PMI & BIM) لضبط الجداول الزمنية، مراقبة التكاليف بدقة متناهية، وإدارة سلاسل الإمداد والمقاولين لضمان أعلى معايير الجودة والسلامة المهنية.",
      en: "We apply world-class project management methodologies (PMI & BIM) to control project schedules, strictly monitor budgets, and oversee contractor ecosystems to ensure pinnacle quality and safety.",
    },
    features: {
      ar: [
        "إشراف هندسي وتنفيذي دقيق",
        "إدارة التكاليف وهندسة القيمة (Value Engineering)",
        "تطبيق تقنيات نمذجة معلومات البناء (BIM)",
        "مراقبة الجودة والتسليم وفق المواصفات القياسية",
      ],
      en: [
        "Rigorous On-site Engineering Supervision",
        "Cost Control & Value Engineering",
        "BIM & Smart Construction Technology",
        "Quality Assurance & Handover Protocols",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "contracting-finishes",
    iconName: "Hammer",
    title: {
      ar: "التشطيبات الفاخرة",
      en: "Luxury Finishes",
    },
    shortDesc: {
       ar: "تنفيذ المقاولات الإنشائية والتشطيبات الديكورية الفاخرة بأيدي خبراء وأرقى الخامات العالمية.",
      en: "Executing structural contracting and ultra-luxury architectural finishes with premium global materials."
    },
    fullDesc: {
       ar: "فريقنا الإنشائي والتشغيلي المتخصص ينفذ أعمال الهيكل الإنشائي والتشطيبات المعمارية الراقية، مستخدماً أفضل أنواع الرخام الطبيعي، الأخشاب المعالجة، والواجهات الزجاجية الذكية المعزولة حرارياً.",
      en: "Our specialized construction crews execute structural works and refined architectural finishes utilizing imported natural marbles, engineered hardwoods, and high-performance thermal glazing facades.",
    },
    features: {
      ar: [
        "أعمال المقاولات العامة والإنشاءات التخصصية",
        "توريد وتركيب أرقى مواد التشطيب العالمية",
        "أعمال الديكور والتكسيات الداخلية والخارجية",
        "عزل مائي وحراري متقدم مع ضمانات ممتدة",
      ],
      en: [
        "General Contracting & Specialized Civil Works",
        "Sourcing & Installing Premier Finishing Materials",
        "Interior Architecture & Façade Claddings",
        "Advanced Thermal & Water Insulation with Warranties",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "renovation",
    iconName: "Sparkles",
    title: {
      ar: "ترميم وتجديد المباني",
      en: "Building Renovation & Modernization",
    },
    shortDesc: {
      ar: "إعادة إحياء وتحديث العقارات والمباني القائمة لرفع قيمتها السوقية وكفاءتها التشغيلية.",
      en: "Revitalizing and modernizing existing properties to elevate market valuation and efficiency.",
    },
    fullDesc: {
      ar: "نحول العقارات القديمة والتقليدية إلى مبانٍ عصرية متوافقة مع متطلبات السوق الحالية عبر التدعيم الإنشائي، تحديث الواجهات الخارجية، واستبدال الأنظمة الكهروميكانيكية بأنظمة ذكية وموفرة للطاقة.",
      en: "We transform vintage properties into contemporary assets through structural reinforcement, dynamic facade updates, and retrofitting MEP systems with smart, energy-efficient infrastructure.",
    },
    features: {
      ar: [
        "إعادة تصميم الواجهات الخارجية (Façade Facelift)",
        "تحديث الأنظمة الكهروميكانيكية والتكييف المركزي",
        "رفع كفاءة استهلاك الطاقة وخفض التكاليف التشغيلية",
        "تعظيم القيمة السوقية والإيجارية للأصل العقاري",
      ],
      en: [
        "Façade Redesign & Modern Architectural Facelift",
        "MEP & Central HVAC System Retrofitting",
        "Energy Efficiency Optimization (Green Retrofit)",
        "Maximizing Asset Market Value & Rental Cashflows",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "supply",
    iconName: "Truck",
    title: { ar: "توريد", en: "Supply & Procurement" },
    shortDesc: {
      ar: "توريد مواد البناء والتشطيبات وفق المواصفات المعتمدة وبجودة موثوقة.",
      en: "Reliable sourcing of construction and finishing materials to approved specifications.",
    },
    fullDesc: {
      ar: "نقدم حلولًا راقية في توريد الرخام والمغاسل، بتشكيلة مختارة تجمع بين فخامة التصميم، وجودة الخامات، ودقة التفاصيل، لتضفي لمسة من الأناقة والتميّز على المساحات السكنية والتجارية.",
      en: "We provide premium marble and washbasin solutions that combine luxurious design, superior material quality, and exceptional craftsmanship. Our carefully selected range adds elegance and sophistication to residential and commercial spaces.",
    },
    features: {
      ar: [
        "توريد الرخام الطبيعي والصناعي.",
        "توريد مغاسل الحمامات بتصاميم عصرية وفاخرة.",
        "توريد مغاسل رخام بتصاميم مخصصة.",
        "توفير خيارات متنوعة من الألوان والخامات والتشطيبات."
      ],
      en: [
        "Natural and Engineered Marble Supply",
        "Luxury Bathroom Washbasins",
        "Custom-Designed Marble Washbasins",
        "توفير خيارات متنوعة من الألوان والخامات والتشطيبات."
      ],
    },
    image:
      "https://cdn.salla.sa/jZRWwm/4c977b09-f3e3-40c4-8ab4-ea388c6df77a-1000x1000-zxzBQ8suvolit2d4H5FITsDLpdASFR4FvXAooyxX.jpg",
  },
];

export const mockFaqs = [
  {
    id: "faq-1",
    category: "general",
    question: {
      ar: "ما هي الخدمات الرئيسية التي تقدمها شركة مشروعات الرقي؟",
      en: "What are the core services provided by Al-Ruqi Projects?",
    },
    answer: {
      ar: "نقدم منظومة متكاملة تشمل التطوير العقاري للمشاريع السكنية والتجارية، هيكلة وإدارة الاستثمارات والصناديق العقارية، إدارة وتطوير المشاريع الهندسية، المقاولات العامة والتشطيبات الفاخرة، ترميم وتحديث المباني، وإدارة وتشغيل الأصول والمحافظ العقارية.",
      en: "We provide an integrated ecosystem including residential and commercial real estate development, investment and fund management, engineering project management, general contracting and luxury finishes, building renovation, and real estate asset management.",
    },
  },
  {
    id: "faq-2",
    category: "investment",
    question: {
      ar: "هل توفرون فرصاً للمستثمرين الأفراد والشركات في مشاريعكم؟",
      en: "Do you offer investment opportunities for individual and corporate investors?",
    },
    answer: {
      ar: "نستقبل الاستفسارات من المستثمرين الأفراد والشركات ونناقش معهم الفرص المتاحة وفق طبيعة كل مشروع. تتفاوت آلية المشاركة حسب المشروع، والمستندات التنظيمية، ودراسة الجدوى؛ ويُنصح بمراجعة المخاطر والوثائق القانونية قبل أي قرار استثماري.",
      en: "We welcome inquiries from individual and corporate investors and discuss available opportunities according to each project. Participation structures vary by project, regulatory documents and feasibility study; investors should review the risks and legal documents before making an investment decision.",
    },
  },
  {
    id: "faq-3",
    category: "development",
    question: {
      ar: "ما هي أنواع المشاريع العقارية التي تعملون على تطويرها؟",
      en: "What types of real estate projects do you develop?",
    },
    answer: {
      ar: "نعمل على مجموعة متنوعة من المشاريع المتميزة: المجمعات السكنية المغلقة والفلل الفارهة، الأبراج المكتبية والمراكز الإدارية الذكية، البوليفارد والمجمعات التجارية والترفيهية، والمجمعات اللوجستية الحديثة في مختلف مدن المملكة.",
      en: "We develop a diverse portfolio of premier projects: gated luxury residential communities, smart corporate office towers, commercial boulevard complexes, and modern logistics hubs across key Saudi metropolitan hubs.",
    },
  },
  {
    id: "faq-4",
    category: "development",
    question: {
      ar: "هل يمكن التعاون مع ملاك الأراضي لتطوير مشاريع مشتركة؟",
      en: "Can you partner with landowners for joint development projects?",
    },
    answer: {
      ar: "بالتأكيد، نرحب دائماً بالشراكات الاستراتيجية مع ملاك الأراضي بنظام التطوير المشترك (Joint Venture) أو التطوير مقابل حصص عينية، حيث نقوم بإعداد دراسة الجدوى وتوفير التمويل والتصميم والتنفيذ والتسويق.",
      en: "Absolutely. We welcome strategic joint ventures with landowners where we provide full feasibility studies, financing architecture, master design, construction, and monetization management.",
    },
  },
  {
    id: "faq-5",
    category: "general",
    question: {
      ar: "كيف يمكن التواصل وحجز جلسة استشارية مع فريق الخبراء؟",
      en: "How can I schedule a consultation with your advisory team?",
    },
    answer: {
      ar: 'يمكنكم طلب استشارة عبر نموذج التواصل في الموقع أو مراسلتنا مباشرة على واتساب أو الاتصال بالمكتب على الرقم الظاهر في صفحة التواصل.',
      en: 'You can request a consultation through the website contact form, direct WhatsApp message, or the office number listed on the Contact page.',
    },
  },
];

export const companyStats = [
  {
    number: "+45",
    label: {
      ar: "مشروع عقاري منجز وقيد التطوير",
      en: "Delivered & Active Projects",
    },
  },
  {
    number: "+1,850",
    label: {
      ar: "وحدة سكنية وتجارية فاخرة",
      en: "Luxury Residential & Commercial Units",
    },
  },
  {
    number: "+18",
    label: {
      ar: "سنة من الخبرة والريادة في السوق السعودي",
      en: "Years of Market Excellence in KSA",
    },
  },
  {
    number: "100%",
    label: {
      ar: "التزام بأعلى معايير الجودة والمواعيد",
      en: "Commitment to Quality & Delivery Timeline",
    },
  },
];

export const whyChooseUsPoints = [
  {
    icon: "ShieldCheck",
    title: {
      ar: "جودة التنفيذ المعتمدة",
      en: "Certified Construction Quality",
    },
    desc: {
      ar: "نطبق أدق معايير كود البناء السعودي مع استخدام أرقى المواد العالمية وضمانات إنشائية تصل إلى 15 عاماً.",
      en: "Applying strict Saudi Building Code compliance with global-grade materials and structural warranties up to 15 years.",
    },
  },
  {
    icon: "TrendingUp",
    title: {
      ar: "خبرة عريقة في السوق العقاري",
      en: "Deep Saudi Market Expertise",
    },
    desc: {
      ar: "فريق قيادي يتمتع بأكثر من 18 عاماً من المعرفة المتعمقة بديناميكيات الاستثمار والنمو العمراني في المملكة.",
      en: "Executive leadership with 18+ years navigating urban development dynamics and investment growth across KSA.",
    },
  },
  {
    icon: "MapPin",
    title: { ar: "اختيار مواقع استراتيجية", en: "Prime Strategic Locations" },
    desc: {
      ar: "ننتقي أراضينا في أكثر المناطق الحيوية نمواً وقرباً من المحاور الرئيسية والمشاريع الكبرى في الرياض وجدة والشرقية.",
      en: "Carefully acquiring land in high-growth corridors proximate to mega projects in Riyadh, Jeddah, and Eastern Province.",
    },
  },
  {
    icon: "Layers",
    title: {
      ar: "إدارة احترافية للمشاريع",
      en: "Professional Project Governance",
    },
    desc: {
      ar: "حوكمة مؤسسية وتقنيات نمذجة البناء الحديثة (BIM) تضمن الشفافية والتحكم التام في الميزانيات والجداول.",
      en: "Corporate governance and modern BIM methodologies ensuring complete transparency, cost control, and timelines.",
    },
  },
  {
    icon: "Clock",
    title: {
      ar: "الالتزام الصارم بالمواعيد",
      en: "Strict Milestone Adherence",
    },
    desc: {
      ar: "سجل حافل في تسليم المشاريع قبل أو في مواعيدها المحددة مع المحافظة على أعلى مستويات الإتقان.",
      en: "A proven track record of delivering projects on or ahead of schedule without compromising architectural excellence.",
    },
  },
  {
    icon: "Compass",
    title: {
      ar: "حلول عقارية متكاملة",
      en: "Comprehensive Real Estate Solutions",
    },
    desc: {
      ar: "شريكك العقاري الواحد: من دراسة الجدوى وتصميم المخطط إلى البناء والتسويق والإدارة الاستثمارية المستدامة.",
      en: "Your single-source real estate partner: from feasibility and master plan to buildout, leasing, and asset management.",
    },
  },
];
