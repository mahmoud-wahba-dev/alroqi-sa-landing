import React from 'react';
import { ArrowLeft, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { translations } from '../data/translations';

export const CtaBanner = ({ language, onContactClick }) => {
  const t = translations[language];

  return (
    <section id="cta-banner-section" className="py-16 sm:py-20 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-[#11110F] p-8 sm:p-12 lg:p-16 border border-[#CCAE6E]/40 shadow-2xl"
        >
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-20 scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#11110F] via-[#11110F]/95 to-[#11110F]/90" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25231E]/90 border border-[#CCAE6E]/40 text-[#CCAE6E] text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'شراكات استراتيجية وتطوير مشترك' : 'Strategic Partnerships & Co-Development'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">{t.cta.title}</h2>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal max-w-2xl mx-auto">{t.cta.text}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-[#CCAE6E] via-[#CCAE6E] to-[#CCAE6E] text-[#11110F] font-bold text-base hover:shadow-xl hover:shadow-[#CCAE6E]/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>{t.cta.button}</span>
                {language === 'ar'
                  ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                  : <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
              </button>
              <a
                href="https://wa.me/966510856865"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-[#CCAE6E]/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-4 h-4 text-[#CCAE6E]" />
                <span>{t.contact.whatsapp}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
