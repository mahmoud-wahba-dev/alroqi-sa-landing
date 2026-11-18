import React from 'react';
import { Building2, Target, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { translations } from '../data/translations';

export const AboutView = ({ language, onRequestConsultation }) => {
  const t = translations[language];

  return (
    <div id="about-page-view" className="w-full pt-28 pb-20 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#CCAE6E]/20 border border-[#CCAE6E]/40 text-[#11110F] text-xs font-bold tracking-wide mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'نبذة عن الشركة ومسيرتها' : 'Company Profile & Heritage'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11110F] tracking-tight">
            {language === 'ar' ? 'مشروعات الرقي... نصنع قيمة تدوم' : 'Al-Ruqi Projects... Enduring Value'}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed font-normal">{t.aboutBriefText}</p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            {
              icon: <Eye className="w-7 h-7" />,
              title: { ar: 'رؤيتنا', en: 'Our Vision' },
              text: { ar: 'أن نكون الخيار الرائد والأول في المملكة العربية السعودية في مجال التطوير والاستثمار العقاري، عبر تقديم مشاريع استثنائية ترتقي بجودة الحياة وتصنع عوائد مجزية ومستدامة للأجيال القادمة.', en: 'To be the preeminent real estate development and investment firm in Saudi Arabia, crafting iconic environments that enhance quality of life and yield sustained generational wealth.' },
              dark: true,
            },
            {
              icon: <Target className="w-7 h-7" />,
              title: { ar: 'رسالتنا', en: 'Our Mission' },
              text: { ar: 'تطوير مشاريع عقارية متكاملة تعتمد على أدق المعايير الهندسية، واختيار المواقع الاستراتيجية، وتطبيق حلول الاستدامة والذكاء الاصطناعي لإثراء تجربة الساكن وتعظيم أرباح المستثمر.', en: 'Delivering end-to-end real estate landmarks engineered with supreme rigor, strategic acquisitions, and smart sustainable solutions that empower residents and maximize investor capital.' },
              dark: false,
            },
          ].map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 sm:p-10 rounded-3xl border shadow-xl relative overflow-hidden ${card.dark ? 'bg-[#11110F] text-white border-[#CCAE6E]/40' : 'bg-white text-[#11110F] border-[#CCAE6E]/30'}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${card.dark ? 'bg-[#25231E] border border-[#CCAE6E]/40 text-[#CCAE6E]' : 'bg-[#F2EEE4] border border-[#CCAE6E]/30 text-[#80652F]'}`}>{card.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{language === 'ar' ? card.title.ar : card.title.en}</h3>
              <p className={`text-sm sm:text-base leading-relaxed ${card.dark ? 'text-gray-200' : 'text-gray-600'}`}>{language === 'ar' ? card.text.ar : card.text.en}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#11110F]">{language === 'ar' ? 'قيمنا الجوهرية' : 'Our Core Values'}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: { ar: 'النزاهة والشفافية', en: 'Integrity & Transparency' }, desc: { ar: 'تقارير مالية وهندسية دورية واضحة تضع ثقة العميل والمستثمر أولاً.', en: 'Transparent audits and milestone disclosures anchoring trust.' } },
              { title: { ar: 'إتقان التنفيذ', en: 'Pinnacle Craftsmanship' }, desc: { ar: 'لا مساومة على الجودة، من الأساسات الإنشائية حتى أدق التشطيبات.', en: 'Zero compromise on construction quality and materials.' } },
              { title: { ar: 'الاستدامة والابتكار', en: 'Innovation & Sustainability' }, desc: { ar: 'مبانٍ صديقة للبيئة وأنظمة ذكية ترفع الكفاءة التشغيلية.', en: 'Eco-conscious green design reducing lifetime operating overhead.' } },
              { title: { ar: 'تعظيم القيمة', en: 'Value Maximization' }, desc: { ar: 'صناعة أصول عقارية تزداد قيمتها وجاذبيتها الاستثمارية مع مرور الزمن.', en: 'Creating assets that appreciate and generate robust yields.' } },
            ].map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="p-6 rounded-2xl bg-white border border-[#CCAE6E]/20 shadow-xs">
                <span className="text-xs font-mono font-bold text-[#80652F] block mb-2">0{i + 1}</span>
                <h4 className="text-base font-bold text-[#11110F] mb-2">{language === 'ar' ? v.title.ar : v.title.en}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{language === 'ar' ? v.desc.ar : v.desc.en}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="rounded-2xl bg-[#11110F] p-8 sm:p-10 text-white text-center border border-[#CCAE6E]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-start">
            <h3 className="text-xl font-bold text-white">{language === 'ar' ? 'هل تود بحث فرصة شراكة مع مشروعات الرقي؟' : 'Interested in Exploring a Partnership with Al-Ruqi?'}</h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">{language === 'ar' ? 'نرحب بملاك الأراضي، المستثمرين، والشركاء الاستراتيجيين' : 'We welcome landowners, institutional investors, and strategic partners'}</p>
          </div>
          <button onClick={onRequestConsultation} className="px-8 py-3.5 rounded-xl bg-[#CCAE6E] text-[#11110F] font-bold text-xs sm:text-sm hover:bg-[#CCAE6E] transition-colors cursor-pointer shrink-0">
            {t.requestConsultation}
          </button>
        </div>
      </div>
    </div>
  );
};
