import React, { useEffect, useState } from 'react';
import { X, MapPin, CheckCircle2, MessageSquare, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from '../data/translations';

export const ProjectDetailModal = ({ project, isOpen, onClose, language, onInquire }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  if (!isOpen || !project) return null;
  const t = translations[language];
  const images = project.gallery?.length > 0 ? project.gallery : [project.coverImage];
  const activeImage = images[activeImageIndex] ?? images[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#11110F]/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-[#F8F6F0] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#CCAE6E]/40 overflow-hidden my-4 max-h-[92vh] flex flex-col"
          >
            <button onClick={onClose} className="absolute top-4 end-4 sm:top-6 sm:end-6 z-20 w-10 h-10 rounded-full bg-[#11110F]/80 hover:bg-[#11110F] text-white flex items-center justify-center backdrop-blur-md transition-colors border border-white/20 cursor-pointer">
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-8">
              {/* Title */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-md text-xs font-bold bg-[#11110F] text-white">
                    {project.category === 'residential' ? t.projects.filterResidential : project.category === 'commercial' ? t.projects.filterCommercial : t.projects.filterInvestment}
                  </span>
                  <span className="px-3 py-1 rounded-md text-xs font-semibold text-gray-700 bg-gray-100 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#80652F]" />{language === 'ar' ? project.location.ar : project.location.en}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11110F]">{language === 'ar' ? project.title.ar : project.title.en}</h2>
              </div>

              {/* Gallery */}
              <div className="space-y-3">
                <div className="relative h-72 sm:h-96 lg:h-[440px] rounded-2xl overflow-hidden bg-[#11110F] border border-[#CCAE6E]/30 shadow-inner">
                  <img src={activeImage} alt={language === 'ar' ? project.title.ar : project.title.en} referrerPolicy="no-referrer" className="w-full h-full object-contain object-center transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11110F]/60 via-transparent to-transparent pointer-events-none" />
                  {images.length > 1 && (
                    <>
                      <button onClick={() => setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#11110F]/80 hover:bg-[#11110F] text-white flex items-center justify-center border border-white/20 cursor-pointer"><ChevronLeft className="w-5 h-5" /></button>
                      <button onClick={() => setActiveImageIndex((prev) => (prev + 1) % images.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#11110F]/80 hover:bg-[#11110F] text-white flex items-center justify-center border border-white/20 cursor-pointer"><ChevronRight className="w-5 h-5" /></button>
                    </>
                  )}
                </div>
                {images.length > 1 && (
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    {images.map((img, idx) => (
                      <button key={idx} onClick={() => setActiveImageIndex(idx)} className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${activeImageIndex === idx ? 'border-[#CCAE6E] scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                        <img src={img} alt={`${language === 'ar' ? project.title.ar : project.title.en} - صورة مصغرة`}
                        referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  project.area && project.area !== '—' && { label: t.projects.areaLabel, value: project.area },
                  project.unitsCount != null && { label: language === 'ar' ? 'عدد الوحدات' : 'Total Units', value: `${project.unitsCount} ${language === 'ar' ? 'وحدة' : 'Units'}` },
                  project.expectedROI && { label: t.projects.roiLabel, value: project.expectedROI, gold: true },
                  project.completionRate != null && { label: t.projects.completionLabel, value: `${project.completionRate}%` },
                ].filter(Boolean).map((m, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-[#CCAE6E]/30 shadow-xs">
                    <span className="text-[11px] text-gray-500 block uppercase font-medium">{m.label}</span>
                    <span className={`text-sm sm:text-base font-bold font-mono ${m.gold ? 'text-[#80652F]' : 'text-[#11110F]'}`}>{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#11110F] border-b border-gray-200 pb-2">{t.projects.projectOverview}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{language === 'ar' ? project.description.ar : project.description.en}</p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#11110F] border-b border-gray-200 pb-2">{t.projects.projectFeatures}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(language === 'ar' ? project.features.ar : project.features.en).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-200 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#80652F] shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs */}
              {project.specs?.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#11110F] border-b border-gray-200 pb-2">{t.projects.projectSpecs}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-200 text-xs sm:text-sm">
                        <span className="font-semibold text-gray-600">{language === 'ar' ? spec.label.ar : spec.label.en}</span>
                        <span className="font-bold text-[#11110F]">{language === 'ar' ? spec.value.ar : spec.value.en}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a href="https://wa.me/966510856865" target="_blank" rel="noreferrer" className="p-3.5 rounded-xl bg-[#25D366] text-white hover:opacity-90 transition-opacity flex items-center justify-center"><MessageSquare className="w-5 h-5" /></a>
                  <button onClick={() => { onClose(); onInquire(project); }} className="flex-1 sm:flex-initial px-8 py-3.5 rounded-xl bg-[#11110F] hover:bg-[#25231E] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <Sparkles className="w-4 h-4 text-[#CCAE6E]" /><span>{t.projects.inquireProject}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
