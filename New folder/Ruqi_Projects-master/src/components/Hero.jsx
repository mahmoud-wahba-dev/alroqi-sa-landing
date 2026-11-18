import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from '../data/translations';

const heroImages = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop',
];

export const Hero = ({ language, onExploreProjects, onContactUs }) => {
  const t = translations[language];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveSlide((prev) => (prev + 1) % heroImages.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#11110F]"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <img
              src={heroImages[activeSlide]}
              alt={language === 'ar' ? 'مشروعات الرقي للتطوير العقاري والاستثمار في الرياض' : 'Al-Ruqi real estate development projects in Riyadh'}
              referrerPolicy="no-referrer"
              fetchPriority={activeSlide === 0 ? 'high' : 'auto'}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#11110F] via-[#11110F]/85 to-[#11110F]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#11110F]/50 to-[#11110F]/90" />
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #CCAE6E 1px, transparent 1px), linear-gradient(to bottom, #CCAE6E 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#25231E]/80 border border-[#CCAE6E]/40 text-[#CCAE6E] text-xs font-semibold tracking-wide backdrop-blur-md mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#CCAE6E] animate-ping" />
            <span>
              {language === 'ar'
                ? 'المملكة العربية السعودية | شريكك الموثوق في التطوير والاستثمار'
                : 'Kingdom of Saudi Arabia | Premier Real Estate Development'}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.2] mb-6"
          >
            {language === 'ar' ? (
              <>نطوّر العقار... <br /><span className="gold-gradient-text">ونصنع قيمة تدوم</span></>
            ) : (
              <>Developing Real Estate... <br /><span className="gold-gradient-text">Crafting Enduring Value</span></>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal mb-10 max-w-2xl"
          >
            {t.subSlogan}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onExploreProjects}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#CCAE6E] via-[#CCAE6E] to-[#CCAE6E] text-[#11110F] font-bold text-sm tracking-wide shadow-lg shadow-[#CCAE6E]/20 hover:shadow-xl hover:shadow-[#CCAE6E]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>{t.discoverProjects}</span>
              {language === 'ar'
                ? <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                : <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
            </button>
            <button
              onClick={onContactUs}
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm tracking-wide border border-[#CCAE6E]/40 backdrop-blur-md hover:border-[#CCAE6E] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.contactUs}</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              activeSlide === idx ? 'w-6 h-2 bg-[#CCAE6E]' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
