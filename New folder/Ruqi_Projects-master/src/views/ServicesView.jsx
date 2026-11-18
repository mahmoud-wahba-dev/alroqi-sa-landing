import React, { useState, useEffect } from 'react';
import { Building2, TrendingUp, Briefcase, Hammer, Sparkles, ShieldCheck, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { mockServices } from '../data/mockData';
import { translations } from '../data/translations';

const getIcon = (iconName, cls = 'w-6 h-6 text-[#CCAE6E]') => {
  const icons = { Building2: <Building2 className={cls} />, TrendingUp: <TrendingUp className={cls} />, Briefcase: <Briefcase className={cls} />, Hammer: <Hammer className={cls} />, Sparkles: <Sparkles className={cls} />, ShieldCheck: <ShieldCheck className={cls} /> };
  return icons[iconName] || <Building2 className={cls} />;
};

export const ServicesView = ({ language, initialServiceId, onRequestConsultation }) => {
  const t = translations[language];
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId || mockServices[0].id);

  useEffect(() => {
    if (initialServiceId) { setSelectedServiceId(initialServiceId); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  }, [initialServiceId]);

  const activeService = mockServices.find((s) => s.id === selectedServiceId) || mockServices[0];

  return (
    <div id="services-page-view" className="w-full pt-28 pb-20 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#CCAE6E]/20 border border-[#CCAE6E]/40 text-[#11110F] text-xs font-bold tracking-wide mb-3">
            <Briefcase className="w-3.5 h-3.5" /><span>{language === 'ar' ? 'حلولنا وخدماتنا المتكاملة' : 'Integrated Corporate Services'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11110F] tracking-tight">{t.services.sectionTitle}</h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed font-normal">{t.services.sectionSubtitle}</p>
        </motion.div>

        {/* Service selector tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {mockServices.map((service) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <button key={service.id} onClick={() => setSelectedServiceId(service.id)}
                className={`p-4 rounded-xl text-start transition-all cursor-pointer flex flex-col justify-between ${isSelected ? 'bg-[#11110F] text-white shadow-lg border border-[#CCAE6E]/50' : 'bg-white text-gray-700 hover:bg-[#F2EEE4] border border-gray-200'}`}
              >
                <div className="mb-2">{getIcon(service.iconName)}</div>
                <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-[#11110F]'}`}>{language === 'ar' ? service.title.ar : service.title.en}</span>
              </button>
            );
          })}
        </div>

        {/* Active service detail */}
        <motion.div key={activeService.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-[#CCAE6E]/30 shadow-xl mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#11110F] flex items-center justify-center">{getIcon(activeService.iconName)}</div>
                <div>
                  <span className="text-xs text-[#80652F] font-semibold uppercase tracking-wider block">{language === 'ar' ? 'الخدمة المختارة' : 'Selected Service'}</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#11110F]">{language === 'ar' ? activeService.title.ar : activeService.title.en}</h2>
                </div>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">{language === 'ar' ? activeService.fullDesc.ar : activeService.fullDesc.en}</p>
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold text-[#11110F]">{language === 'ar' ? 'ما تشمله هذه الخدمة:' : 'Deliverables & Capabilities:'}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(language === 'ar' ? activeService.features.ar : activeService.features.en).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F2EEE4] border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-[#80652F] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-gray-800">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={() => onRequestConsultation(activeService.id)} className="px-8 py-3.5 rounded-xl bg-[#11110F] hover:bg-[#25231E] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer">
                <span>{language === 'ar' ? `طلب استشارة في ${activeService.title.ar}` : `Consultation on ${activeService.title.en}`}</span>
                {language === 'ar' ? <ArrowLeft className="w-4 h-4 text-[#CCAE6E]" /> : <ArrowRight className="w-4 h-4 text-[#CCAE6E]" />}
              </button>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <img src={activeService.image} alt={language === 'ar' ? activeService.title.ar : activeService.title.en} referrerPolicy="no-referrer" className="w-full h-80 sm:h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11110F]/75 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* All services overview grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockServices.map((s, idx) => (
            <div key={s.id} className="bg-white rounded-2xl p-7 border border-[#CCAE6E]/20 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F2EEE4] flex items-center justify-center">{getIcon(s.iconName, 'w-5 h-5 text-[#11110F]')}</div>
                  <span className="text-xs font-mono font-bold text-gray-400">0{idx + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-[#11110F] mb-2">{language === 'ar' ? s.title.ar : s.title.en}</h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">{language === 'ar' ? s.shortDesc.ar : s.shortDesc.en}</p>
              </div>
              <button onClick={() => { setSelectedServiceId(s.id); window.scrollTo({ top: 400, behavior: 'smooth' }); }} className="pt-4 border-t border-gray-100 text-xs font-bold text-[#80652F] hover:text-[#11110F] flex items-center justify-between cursor-pointer">
                <span>{t.services.exploreService}</span>
                {language === 'ar' ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
