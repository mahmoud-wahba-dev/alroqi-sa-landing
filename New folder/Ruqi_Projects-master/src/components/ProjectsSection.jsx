import React, { useState } from 'react';
import { Building2, MapPin, ArrowUpRight, ArrowLeft, ArrowRight, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { translations } from '../data/translations';
import { mockProjects } from '../data/mockData';

export const ProjectsSection = ({ language, projects = mockProjects, onSelectProject, onViewAllProjects }) => {
  const t = translations[language];
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: t.projects.filterAll },
    { id: 'residential', label: t.projects.filterResidential },
    { id: 'commercial', label: t.projects.filterCommercial },
    { id: 'investment', label: t.projects.filterInvestment },
    { id: 'in_progress', label: t.projects.filterInProgress },
    { id: 'completed', label: t.projects.filterCompleted },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'in_progress') return p.status === 'in_progress';
    if (activeFilter === 'completed') return p.status === 'completed';
    return p.category === activeFilter;
  });

  return (
    <section id="projects-section" className="py-20 lg:py-28 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center md:text-start max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#CCAE6E]/20 border border-[#CCAE6E]/40 text-[#11110F] text-xs font-bold tracking-wide mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#80652F]" />
              <span>{language === 'ar' ? 'سجل الإنجازات' : 'Signature Portfolio'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#11110F] tracking-tight">{t.projects.sectionTitle}</h2>
            <p className="text-base text-gray-600 mt-2 leading-relaxed">{t.projects.sectionSubtitle}</p>
          </motion.div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeFilter === filter.id
                  ? 'bg-[#11110F] text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-[#F2EEE4] border border-gray-200 hover:border-[#CCAE6E]/50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-3xl border border-[#CCAE6E]/30 p-8 sm:p-12 shadow-sm max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#11110F] text-[#CCAE6E] flex items-center justify-center mx-auto mb-5 shadow-md"><Building2 className="w-8 h-8" /></div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#11110F] mb-3">{language === 'ar' ? 'مشاريعنا الجديدة قيد الإعداد' : 'New Projects Under Preparation'}</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, 6).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                onClick={() => onSelectProject(project)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#CCAE6E]/20 hover:border-[#CCAE6E] shadow-sm hover:shadow-2xl hover:shadow-[#11110F]/10 transition-all duration-500 flex flex-col cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img src={project.coverImage} alt={language === 'ar' ? project.title.ar : project.title.en} referrerPolicy="no-referrer" className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11110F]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase bg-[#11110F]/90 text-white backdrop-blur-md border border-[#CCAE6E]/30">
                      {project.category === 'residential' ? t.projects.filterResidential : project.category === 'commercial' ? t.projects.filterCommercial : t.projects.filterInvestment}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center text-white text-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#CCAE6E] mr-1" />
                    <span className="font-medium truncate">{language === 'ar' ? project.location.ar : project.location.en}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#11110F] group-hover:text-[#80652F] transition-colors leading-snug mb-2.5 line-clamp-1">{language === 'ar' ? project.title.ar : project.title.en}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 mb-5">{language === 'ar' ? project.description.ar : project.description.en}</p>
                    <div className="grid grid-cols-1 gap-2 pt-4 border-t border-gray-100 mb-5">
                      <div className="bg-[#F2EEE4] p-2.5 rounded-lg">
                        <span className="text-[10px] text-gray-600 block uppercase font-medium">{t.projects.areaLabel}</span>
                        <span className="text-xs font-bold text-[#11110F] font-mono">{project.area}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs font-bold text-[#11110F] group-hover:text-[#80652F] flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /><span>{t.projects.viewDetails}</span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F2EEE4] group-hover:bg-[#11110F] text-[#11110F] group-hover:text-[#CCAE6E] flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {filteredProjects.length > 0 && (
          <div className="text-center mt-14">
            <button onClick={onViewAllProjects} className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white border-2 border-[#11110F] text-[#11110F] font-bold text-sm hover:bg-[#11110F] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer group">
              <span>{t.projects.viewAllProjects}</span>
              {language === 'ar' ? <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#80652F]" /> : <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#80652F]" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
