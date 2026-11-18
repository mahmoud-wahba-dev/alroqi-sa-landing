import React from 'react';
import { Building2, TrendingUp, Briefcase, Hammer, Sparkles, ShieldCheck, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { mockServices } from '../data/mockData';
import { translations } from '../data/translations';

const getIcon = (iconName) => {
  const cls = 'w-6 h-6 text-[#11110F]';
  const icons = { Building2: <Building2 className={cls} />, TrendingUp: <TrendingUp className={cls} />, Briefcase: <Briefcase className={cls} />, Hammer: <Hammer className={cls} />, Sparkles: <Sparkles className={cls} />, ShieldCheck: <ShieldCheck className={cls} /> };
  return icons[iconName] || <Building2 className={cls} />;
};

export const ServicesSection = ({ language, onSelectService, onViewAllServices }) => {
  const t = translations[language];

  return (
    <section id="services-section" className="py-20 lg:py-28 bg-[#F2EEE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#CCAE6E]/20 border border-[#CCAE6E]/40 text-[#11110F] text-xs font-bold tracking-wide mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#80652F]" />
              <span>{language === 'ar' ? 'حلولنا المؤسسية' : 'Corporate Capabilities'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#11110F] tracking-tight">{t.services.sectionTitle}</h2>
            <p className="text-base text-gray-600 mt-3 leading-relaxed">{t.services.sectionSubtitle}</p>
          </motion.div>
          <button onClick={onViewAllServices} className="inline-flex items-center gap-2 text-sm font-bold text-[#11110F] hover:text-[#80652F] transition-colors self-start md:self-auto cursor-pointer">
            <span>{t.services.viewAllServices}</span>
            {language === 'ar' ? <ArrowLeft className="w-4 h-4 text-[#80652F]" /> : <ArrowRight className="w-4 h-4 text-[#80652F]" />}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onSelectService(service.id)}
              className="bg-white rounded-2xl p-7 border border-[#CCAE6E]/20 hover:border-[#CCAE6E] shadow-sm hover:shadow-xl hover:shadow-[#11110F]/5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-xl bg-[#F2EEE4] border border-[#CCAE6E]/30 flex items-center justify-center group-hover:bg-[#11110F] transition-all duration-300">
                    <div className="group-hover:[&_svg]:text-[#CCAE6E] transition-colors">{getIcon(service.iconName)}</div>
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-600 group-hover:text-[#80652F] transition-colors">0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-[#11110F] mb-3 group-hover:text-[#80652F] transition-colors">{language === 'ar' ? service.title.ar : service.title.en}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">{language === 'ar' ? service.shortDesc.ar : service.shortDesc.en}</p>
                <ul className="space-y-2 mb-6 border-t border-gray-100 pt-4">
                  {(language === 'ar' ? service.features.ar : service.features.en).slice(0, 2).map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#80652F] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#11110F] group-hover:text-[#80652F]">
                <span>{t.services.exploreService}</span>
                {language === 'ar' ? <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1.5" /> : <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
