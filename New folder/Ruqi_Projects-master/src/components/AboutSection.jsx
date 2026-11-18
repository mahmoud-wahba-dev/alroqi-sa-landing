import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { translations } from '../data/translations';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export const AboutSection = ({ language, onReadMore }) => {
  const t = translations[language];

  return (
    <section id="about-brief-section" className="py-20 lg:py-28 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#CCAE6E]/15 border border-[#CCAE6E]/30 text-[#11110F] text-xs font-bold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#80652F]" />
              <span>{t.aboutUsTitle}</span>
            </motion.div>
            <motion.h2 {...fadeUp(0.1)} className="text-3xl sm:text-4xl font-bold text-[#11110F] tracking-tight leading-snug">
              {t.brandName}{' '}
              <span className="text-[#80652F] block sm:inline">{t.brandSubtitle}</span>
            </motion.h2>
            <motion.p {...fadeUp(0.2)} className="text-lg text-gray-700 leading-relaxed font-normal">{t.aboutBriefText}</motion.p>
            <motion.p {...fadeUp(0.25)} className="text-base text-gray-600 leading-relaxed">
              {language === 'ar'
                ? 'نعمل بفلسفة تطويرية ترتكز على إثراء المشهد الحضري بالمملكة العربية السعودية، ونواكب مستهدفات رؤية المملكة 2030 من خلال تحفيز النمو الاستثماري وتقديم مجتمعات سكنية ومراكز أعمال مستدامة وعالية الجودة.'
                : 'Guided by an urban enrichment philosophy across the Kingdom of Saudi Arabia, we align directly with Saudi Vision 2030 by catalyzing institutional investment growth and engineering sustainable, premier residential and business ecosystems.'}
            </motion.p>
            <motion.div {...fadeUp(0.3)} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: { ar: 'معايير هندسية صارمة', en: 'Rigorous Engineering Standards' }, desc: { ar: 'مطابقة تامة لكود البناء السعودي مع إشراف استشاري دوري', en: 'Full Saudi Building Code compliance with certified audits' } },
                { title: { ar: 'رؤية استثمارية مستدامة', en: 'Sustainable Investment Vision' }, desc: { ar: 'تعظيم التدفقات النقدية والأرباح الرأسمالية للمستثمرين', en: 'Maximizing recurring cashflows and long-term capital yields' } },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#CCAE6E]/20 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-[#11110F]/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#80652F]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#11110F]">{language === 'ar' ? item.title.ar : item.title.en}</h4>
                    <p className="text-xs text-gray-600 mt-0.5">{language === 'ar' ? item.desc.ar : item.desc.en}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div {...fadeUp(0.35)} className="pt-4">
              <button
                onClick={onReadMore}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[#11110F] text-white text-sm font-semibold hover:bg-[#25231E] transition-colors shadow-sm group cursor-pointer"
              >
                <span>{t.aboutReadMore}</span>
                {language === 'ar'
                  ? <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#CCAE6E]" />
                  : <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#CCAE6E]" />}
              </button>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.2)} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 rounded-2xl border border-[#CCAE6E]/50 -z-10 translate-x-2 translate-y-2" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt={language === 'ar' ? 'مشروع تطوير عقاري حديث لمشروعات الرقي في الرياض' : 'Modern real estate development project by Al-Ruqi Projects in Riyadh'}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-[420px] object-cover object-center transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11110F]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#11110F]/90 backdrop-blur-md border border-[#CCAE6E]/40 text-white flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#CCAE6E] font-semibold block">{language === 'ar' ? 'التزام تام بالجودة' : 'Certified Excellence'}</span>
                    <span className="text-sm font-bold text-white">{language === 'ar' ? 'كود البناء السعودي والتراخيص المعتمدة' : 'Saudi Building Code & Certified Quality'}</span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#25231E] flex items-center justify-center text-[#CCAE6E]">
                    <Building2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
