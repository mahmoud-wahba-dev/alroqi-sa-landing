import React from 'react';
import { Building2, Home, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { companyStats } from '../data/mockData';
import { translations } from '../data/translations';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
});

export const StatsSection = ({ language }) => {
  const t = translations[language];
  const icons = [
    <Building2 key="1" className="w-6 h-6 text-[#CCAE6E]" />,
    <Home key="2" className="w-6 h-6 text-[#CCAE6E]" />,
    <Award key="3" className="w-6 h-6 text-[#CCAE6E]" />,
    <CheckCircle2 key="4" className="w-6 h-6 text-[#CCAE6E]" />,
  ];

  return (
    <section id="stats-section" className="relative py-16 bg-[#11110F] text-white border-y border-[#CCAE6E]/30 overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#CCAE6E_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp()} className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#CCAE6E]">
            {language === 'ar' ? 'أرقام وإنجازات' : 'Key Milestones & Track Record'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">{t.stats.title}</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {companyStats.map((stat, idx) => (
            <motion.div key={idx} {...fadeUp(idx * 0.1)} className="relative p-6 rounded-xl bg-[#25231E]/60 border border-[#CCAE6E]/20 hover:border-[#CCAE6E]/50 transition-all duration-300 group backdrop-blur-xs flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-[#11110F] border border-[#CCAE6E]/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                {icons[idx]}
              </div>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight gold-gradient-text mb-2 block font-sans">{stat.number}</span>
              <p className="text-sm font-medium text-gray-200 leading-relaxed max-w-[200px]">
                {language === 'ar' ? stat.label.ar : stat.label.en}
              </p>
              <div className="w-8 h-0.5 bg-[#CCAE6E]/40 group-hover:w-16 group-hover:bg-[#CCAE6E] transition-all duration-300 mt-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
