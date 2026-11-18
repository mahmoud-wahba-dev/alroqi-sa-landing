import React from 'react';
import { ShieldCheck, TrendingUp, MapPin, Layers, Clock, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { whyChooseUsPoints } from '../data/mockData';
import { translations } from '../data/translations';

const getIcon = (iconName) => {
  const cls = 'w-6 h-6 text-[#80652F]';
  const icons = { ShieldCheck: <ShieldCheck className={cls} />, TrendingUp: <TrendingUp className={cls} />, MapPin: <MapPin className={cls} />, Layers: <Layers className={cls} />, Clock: <Clock className={cls} />, Compass: <Compass className={cls} /> };
  return icons[iconName] || <ShieldCheck className={cls} />;
};

export const WhyUsSection = ({ language }) => {
  const t = translations[language];

  return (
    <section id="why-us-section" className="py-20 lg:py-28 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#CCAE6E]/20 border border-[#CCAE6E]/40 text-[#11110F] text-xs font-bold tracking-wide mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#80652F]" />
            <span>{language === 'ar' ? 'قيمنا التنافسية' : 'Competitive Advantages'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11110F] tracking-tight">{t.whyUs.sectionTitle}</h2>
          <p className="text-base text-gray-600 mt-3 leading-relaxed">{t.whyUs.sectionSubtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-[#CCAE6E]/20 hover:border-[#CCAE6E] shadow-sm hover:shadow-xl hover:shadow-[#11110F]/5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F2EEE4] border border-[#CCAE6E]/30 flex items-center justify-center mb-6 group-hover:bg-[#11110F] transition-colors duration-300">
                  <div className="group-hover:[&_svg]:text-[#CCAE6E] transition-colors">{getIcon(point.icon)}</div>
                </div>
                <h3 className="text-xl font-bold text-[#11110F] mb-3 group-hover:text-[#80652F] transition-colors">{language === 'ar' ? point.title.ar : point.title.en}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">{language === 'ar' ? point.desc.ar : point.desc.en}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-[#80652F] font-semibold">
                <span>{language === 'ar' ? 'معيار مؤسسي ثابت' : 'Institutional Benchmark'}</span>
                <span className="font-mono text-gray-400">0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
