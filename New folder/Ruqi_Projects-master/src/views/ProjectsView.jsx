import React, { useState } from 'react';
import { Building2, MapPin, Search, ArrowUpRight, Eye, LayoutGrid, List } from 'lucide-react';
import { motion } from 'motion/react';
import { translations } from '../data/translations';
import { mockProjects } from '../data/mockData';

export const ProjectsView = ({ language, projects = mockProjects, onSelectProject, onRequestConsultation }) => {
  const t = translations[language];
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'residential' && p.category !== 'residential') return false;
    if (activeCategory === 'commercial' && p.category !== 'commercial') return false;
    if (activeCategory === 'investment' && p.category !== 'investment') return false;
    if (activeCategory === 'in_progress' && p.status !== 'in_progress') return false;
    if (activeCategory === 'completed' && p.status !== 'completed') return false;
    if (!searchQuery.trim()) return true;
    return (p.title.ar + p.title.en + p.location.ar + p.location.en).toLowerCase().includes(searchQuery.toLowerCase());
  });

  const filters = [
    { id: 'all', label: t.projects.filterAll }, { id: 'residential', label: t.projects.filterResidential },
    { id: 'commercial', label: t.projects.filterCommercial }, { id: 'investment', label: t.projects.filterInvestment },
    { id: 'in_progress', label: t.projects.filterInProgress }, { id: 'completed', label: t.projects.filterCompleted },
  ];

  return (
    <div id="projects-page-view" className="w-full pt-28 pb-20 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center md:text-start max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#CCAE6E]/20 border border-[#CCAE6E]/40 text-[#11110F] text-xs font-bold tracking-wide mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#80652F]" /><span>{language === 'ar' ? 'معرض المشاريع الاستراتيجية' : 'Portfolio of Strategic Projects'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11110F] tracking-tight">{t.projects.sectionTitle}</h1>
            <p className="text-base text-gray-600 mt-2 leading-relaxed">{t.projects.sectionSubtitle}</p>
          </motion.div>
        </div>

        {/* Search & filter bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#CCAE6E]/25 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute start-4 top-1/2 -translate-y-1/2" />
              <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder={language === 'ar' ? 'ابحث باسم المشروع أو الموقع...' : 'Search by project name or location...'} className="w-full ps-11 pe-4 py-2.5 text-xs sm:text-sm bg-[#F8F6F0] border border-gray-200 rounded-xl focus:outline-none focus:border-[#11110F]" />
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto py-1">
              {filters.map((c) => (
                <button key={c.id} onClick={() => setActiveCategory(c.id)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${activeCategory === c.id ? 'bg-[#11110F] text-white shadow-xs' : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'}`}>{c.label}</button>
              ))}
            </div>
            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg border border-gray-200 shrink-0 self-end sm:self-auto">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md cursor-pointer ${viewMode === 'grid' ? 'bg-white text-[#11110F] shadow-xs' : 'text-gray-500'}`}><LayoutGrid className="w-4 h-4" /></button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-md cursor-pointer ${viewMode === 'list' ? 'bg-white text-[#11110F] shadow-xs' : 'text-gray-500'}`}><List className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-6 px-1">
          <span>{language === 'ar' ? `عرض ${filteredProjects.length} مشروع` : `Showing ${filteredProjects.length} projects`}</span>
          {searchQuery && <button onClick={() => setSearchQuery('')} className="text-[#80652F] hover:underline font-semibold cursor-pointer">{language === 'ar' ? 'إعادة ضبط البحث' : 'Clear search'}</button>}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="py-16 sm:py-20 text-center bg-white rounded-3xl border border-[#CCAE6E]/30 p-8 sm:p-12 shadow-sm max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#11110F] text-[#CCAE6E] flex items-center justify-center mx-auto mb-5 shadow-md"><Building2 className="w-8 h-8" /></div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#11110F] mb-3">{language === 'ar' ? 'لا توجد مشاريع حالياً' : 'No projects yet'}</h3>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
                onClick={() => onSelectProject(project)} className="group bg-white rounded-2xl overflow-hidden border border-[#CCAE6E]/20 hover:border-[#CCAE6E] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer relative"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img src={project.coverImage} alt={language === 'ar' ? project.title.ar : project.title.en} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11110F]/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-[#11110F]/90 text-white backdrop-blur-md">{project.category === 'residential' ? t.projects.filterResidential : project.category === 'commercial' ? t.projects.filterCommercial : t.projects.filterInvestment}</span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white text-xs flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#CCAE6E]" /><span>{language === 'ar' ? project.location.ar : project.location.en}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#11110F] group-hover:text-[#80652F] transition-colors mb-2 line-clamp-1">{language === 'ar' ? project.title.ar : project.title.en}</h3>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">{language === 'ar' ? project.description.ar : project.description.en}</p>
                    <div className="grid grid-cols-1 gap-2 pt-3 border-t border-gray-100 mb-4 text-xs">
                      <div className="bg-[#F2EEE4] p-2 rounded"><span className="text-[10px] text-gray-500 block">{t.projects.areaLabel}</span><span className="font-bold text-[#11110F] font-mono">{project.area}</span></div>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#11110F] group-hover:text-[#80652F]">
                    <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /><span>{t.projects.viewDetails}</span></span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProjects.map((project) => (
              <div key={project.id} onClick={() => onSelectProject(project)} className="group bg-white rounded-2xl overflow-hidden border border-[#CCAE6E]/20 hover:border-[#CCAE6E] shadow-sm hover:shadow-lg transition-all p-5 flex flex-col md:flex-row items-center gap-6 cursor-pointer">
                <div className="w-full md:w-60 h-44 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                  <img src={project.coverImage} alt={language === 'ar' ? project.title.ar : project.title.en} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex-1 w-full space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#11110F] text-white">{project.category === 'residential' ? t.projects.filterResidential : project.category === 'commercial' ? t.projects.filterCommercial : t.projects.filterInvestment}</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#80652F]" /><span>{language === 'ar' ? project.location.ar : project.location.en}</span></span>
                  </div>
                  <h3 className="text-lg font-bold text-[#11110F] group-hover:text-[#80652F]">{language === 'ar' ? project.title.ar : project.title.en}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{language === 'ar' ? project.description.ar : project.description.en}</p>
                </div>
                <div className="shrink-0 flex items-center gap-2">
                  <button className="px-5 py-2.5 rounded-lg bg-[#11110F] text-white font-bold text-xs flex items-center gap-1"><span>{t.projects.viewDetails}</span><ArrowUpRight className="w-3.5 h-3.5" /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
