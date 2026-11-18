import React from 'react';
import { Building2, CheckCircle2, ArrowLeft, ArrowRight, Handshake } from 'lucide-react';
import { motion } from 'motion/react';
import { translations } from '../data/translations';

export const DevelopmentView = ({ language, onRequestConsultation }) => {
  const t = translations[language];

  const steps = [
    { num: '01', title: { ar: 'دراسات الجدوى واستملاك الأراضي الاستراتيجية', en: 'Feasibility & Strategic Land Acquisition' }, desc: { ar: 'تحليل ديموغرافي واقتصادي دقيق لمعدلات الطلب، تحديد أفضل الاستخدامات العقارية، وفحص الصكوك والتراخيص.', en: 'In-depth market demographics, Highest and Best Use analysis, zoning audit, and legal clearance.' } },
    { num: '02', title: { ar: 'التصميم المعماري والهندسي المبتكر', en: 'Architectural & Master Design Innovation' }, desc: { ar: 'صياغة تصاميم هندسية معاصرة تجمع بين الهوية المحلية والتقنيات الذكية مع اعتماد تراخيص كود البناء السعودي.', en: 'Engineering contextual architecture blending cultural identity with smart automation and full SBC compliance.' } },
    { num: '03', title: { ar: 'الهيكلة التمويلية وتراخيص وافي', en: 'Financial Structuring & Wafi Licensing' }, desc: { ar: 'تأهيل المشاريع واعتمادها من برنامج البيع على الخارطة (وافي) وتأسيس حسابات الضمان البنكية.', en: 'Securing Wafi off-plan regulatory approvals and establishing escrow accounts.' } },
    { num: '04', title: { ar: 'التنفيذ الإنشائي وإدارة الجودة (BIM)', en: 'BIM Construction & Quality Oversight' }, desc: { ar: 'تطبيق أحدث تقنيات نمذجة معلومات البناء ومراقبة الجداول الزمنية وهندسة القيمة.', en: 'Deploying advanced BIM modeling, schedule compression, and rigorous on-site quality assurance.' } },
    { num: '05', title: { ar: 'التسليم المتقن وإدارة ما بعد البيع', en: 'Commissioning & Post-Handover Care' }, desc: { ar: 'إجراءات فحص وتسليم شاملة، وثائق الضمان الإنشائي الممتد، ونقل إدارة المجمع للتشغيل المستدام.', en: 'Exacting snagging protocols, comprehensive 10+ year warranty handovers, and long-term facility onboarding.' } },
  ];

  return (
    <div id="development-page-view" className="w-full pt-28 pb-20 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#CCAE6E]/20 border border-[#CCAE6E]/40 text-[#11110F] text-xs font-bold tracking-wide mb-3">
            <Building2 className="w-3.5 h-3.5" /><span>{language === 'ar' ? 'حلول التطوير العقاري الشامل' : 'Comprehensive Development Framework'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11110F] tracking-tight">
            {language === 'ar' ? 'نبتكر معالم معمارية تصنع المستقبل' : 'Engineering Tomorrow\'s Architectural Landmarks'}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed font-normal">
            {language === 'ar' ? 'تتولى مشروعات الرقي قيادة دورة حياة التطوير العقاري من المفهوم الأولي وحتى اكتمال المجتمع العمراني.' : 'Al-Ruqi Projects leads the complete real estate lifecycle from initial thesis to vibrant built reality.'}
          </p>
        </motion.div>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#11110F] leading-snug">
              {language === 'ar' ? 'فلسفة التطوير في مشروعات الرقي: الجودة، الكفاءة، والأثر المستدام' : 'Our Development Philosophy: Precision, Efficiency, and Sustainable Impact'}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {language === 'ar' ? 'نؤمن بأن التطوير العقاري ليس مجرد تشييد للمباني، بل صناعة بيئات متكاملة تُثري جودة الحياة وترفع القيمة الاقتصادية.' : 'We view real estate development not merely as physical construction, but as the creation of thriving ecosystems that elevate human well-being and multiply asset value.'}
            </p>
            <div className="space-y-3 pt-2">
              {[{ ar: 'توافق كامل مع كود البناء السعودي (SBC)', en: 'Saudi Building Code (SBC) Certified' }, { ar: 'تطبيق معايير المباني الخضراء LEED', en: 'LEED Green Building Practices' }, { ar: 'أنظمة منازل ذكية مدمجة (Smart Tech)', en: 'Embedded Smart Home & IoT Automation' }, { ar: 'ضمانات إنشائية ممتدة تصل إلى 15 سنة', en: 'Extended 15-Year Structural Warranties' }].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#CCAE6E]/25 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#80652F] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#11110F]">{language === 'ar' ? item.ar : item.en}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"               alt="تطوير عقاري ومقاولات حديثة لمشروعات الرقي في الرياض" referrerPolicy="no-referrer" loading="lazy" className="w-full h-[440px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11110F]/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#11110F]/90 backdrop-blur-md border border-[#CCAE6E]/40 text-white">
                <span className="text-xs text-[#CCAE6E] font-bold block">{language === 'ar' ? 'معيار الريادة المعمارية' : 'Architectural Benchmark'}</span>
                <span className="text-sm font-semibold">{language === 'ar' ? 'أبراج ومجمعات سكنية وتجارية بمعايير عالمية' : 'World-Class Towers & Master Communities'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Lifecycle */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#11110F]">{language === 'ar' ? 'منهجية ومراحل التطوير العقاري' : 'Our 5-Stage Development Methodology'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
                className="p-7 rounded-2xl bg-white border border-[#CCAE6E]/20 shadow-sm hover:shadow-lg transition-all"
              >
                <span className="text-2xl font-extrabold text-[#CCAE6E] font-mono block mb-3">{step.num}</span>
                <h3 className="text-base font-bold text-[#11110F] mb-2">{language === 'ar' ? step.title.ar : step.title.en}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{language === 'ar' ? step.desc.ar : step.desc.en}</p>
              </motion.div>
            ))}
            <div className="p-7 rounded-2xl bg-[#11110F] text-white border border-[#CCAE6E]/40 flex flex-col justify-between">
              <div>
                <Handshake className="w-8 h-8 text-[#CCAE6E] mb-3" />
                <h3 className="text-base font-bold text-white mb-2">{language === 'ar' ? 'هل تمتلك أرضاً وترغب بتطويرها؟' : 'Own Strategic Land for Development?'}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{language === 'ar' ? 'نوفر نموذج الشراكة الاستراتيجية والتطوير المشترك بعوائد استثنائية للملاك.' : 'We offer strategic joint-venture co-development with superior equity yields.'}</p>
              </div>
              <button onClick={() => onRequestConsultation('land')} className="mt-4 w-full py-3 rounded-lg bg-[#CCAE6E] text-[#11110F] font-bold text-xs hover:bg-[#CCAE6E] transition-colors cursor-pointer">
                {language === 'ar' ? 'قدم أرضك للتطوير الآن' : 'Submit Land for JV'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
