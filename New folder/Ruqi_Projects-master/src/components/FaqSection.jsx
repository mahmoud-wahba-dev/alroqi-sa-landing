import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { mockFaqs } from '../data/mockData';
import { translations } from '../data/translations';

export const FaqSection = ({ language, onAskQuestion }) => {
  const t = translations[language];
  const [openFaqId, setOpenFaqId] = useState('faq-1');

  return (
    <section id="faq-section" className="py-20 lg:py-28 bg-[#F8F6F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#CCAE6E]/20 border border-[#CCAE6E]/40 text-[#11110F] text-xs font-bold tracking-wide mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'معلومات واستفسارات' : 'Knowledge & Inquiries'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11110F] tracking-tight">{t.faq.sectionTitle}</h2>
          <p className="text-base text-gray-600 mt-3 leading-relaxed">{t.faq.sectionSubtitle}</p>
        </motion.div>

        <div className="space-y-4">
          {mockFaqs.map((faq, idx) => {
            const isOpen = openFaqId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'bg-white border-[#CCAE6E] shadow-md' : 'bg-white/80 border-gray-200 hover:border-[#CCAE6E]/50'}`}
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-start flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#11110F]">
                    {language === 'ar' ? faq.question.ar : faq.question.en}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-[#11110F] text-[#CCAE6E] rotate-180' : 'bg-[#F2EEE4] text-gray-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 font-normal">
                        <p>{language === 'ar' ? faq.answer.ar : faq.answer.en}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-[#F2EEE4] border border-[#CCAE6E]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#11110F] text-[#CCAE6E] flex items-center justify-center shrink-0"><MessageSquare className="w-5 h-5" /></div>
            <div>
              <h4 className="text-sm font-bold text-[#11110F]">{language === 'ar' ? 'هل لديك استفسار آخر لم تجد إجابته هنا؟' : 'Have a custom inquiry not listed here?'}</h4>
              <p className="text-xs text-gray-600">{language === 'ar' ? 'فريقنا الاستشاري متواجد للإجابة على جميع تساؤلاتكم' : 'Our executive team is available to assist you promptly'}</p>
            </div>
          </div>
          <button onClick={onAskQuestion} className="px-6 py-2.5 rounded-lg bg-[#11110F] text-white text-xs font-bold hover:bg-[#25231E] transition-colors cursor-pointer shrink-0">
            {language === 'ar' ? 'اطرح سؤالك الآن' : 'Ask Your Question'}
          </button>
        </div>
      </div>
    </section>
  );
};
