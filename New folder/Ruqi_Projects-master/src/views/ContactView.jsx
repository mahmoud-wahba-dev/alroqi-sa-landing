import React from 'react';
import { Headphones, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { translations } from '../data/translations';
import { ContactSection } from '../components/ContactSection';

export const ContactView = ({ language }) => {
  const t = translations[language];

  return (
    <div id="contact-page-view" className="w-full pt-28 pb-12 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#CCAE6E]/20 border border-[#CCAE6E]/40 text-[#11110F] text-xs font-bold tracking-wide mb-3">
            <Headphones className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'فريق الاستشارات العقارية' : 'Advisory & Client Relations'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11110F] tracking-tight">{t.contact.title}</h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed font-normal">{t.contact.subtitle}</p>
        </motion.div>

        <div className="max-w-2xl mx-auto mb-16">
          <div className="p-8 rounded-2xl bg-white border border-[#CCAE6E]/30 shadow-sm text-center sm:text-start flex flex-col sm:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-[#11110F] text-[#CCAE6E] flex items-center justify-center shrink-0 shadow-md"><Building2 className="w-7 h-7" /></div>
            <div className="flex-1">
              <span className="text-xs font-bold text-[#80652F] uppercase tracking-wider block">{language === 'ar' ? 'المقر الرئيسي' : 'Headquarters'}</span>
              <h4 className="text-xl font-bold text-[#11110F] mt-1 mb-2">{language === 'ar' ? 'مشروعات الرقي' : 'Al-Ruqi Projects'}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{language === 'ar' ? 'حي النسيم الشرقي، شارع حسان بن ثابت، الرياض' : 'Al Naseem Al Sharqi District, Hassan Bin Thabit St, Riyadh'}</p>
              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-wrap items-center justify-center sm:justify-start gap-4">
                <a href="tel:+966510856865" className="text-sm font-mono text-[#11110F] font-bold hover:text-[#80652F] transition-colors">+966510856865</a>
                <span className="text-gray-300 hidden sm:inline">•</span>
                <a href="https://wa.me/966510856865" target="_blank" rel="noreferrer" className="text-xs font-semibold text-[#25D366] hover:underline">{language === 'ar' ? 'محادثة مباشرة عبر واتساب' : 'Direct WhatsApp'}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xs">
          <ContactSection language={language} />
        </div>
      </div>
    </div>
  );
};
