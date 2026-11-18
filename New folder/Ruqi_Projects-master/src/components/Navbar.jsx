import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, ArrowUpRight } from 'lucide-react';
import { translations } from '../data/translations';
import { Logo } from './Logo';

export const Navbar = ({ currentView, setCurrentView, language, setLanguage, onRequestConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'development', label: t.nav.development },
    { id: 'services', label: t.nav.services },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (view) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed left-0 right-0 z-40 transition-all duration-400 ${
        isScrolled
          ? 'bg-[#F8F6F0]/95 backdrop-blur-md shadow-md shadow-[#11110F]/5 py-3.5 border-b border-[#CCAE6E]/20'
          : 'bg-[#F8F6F0]/80 backdrop-blur-sm py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo language={language} variant="dark" size="nav" onClick={() => handleNavClick('home')} />

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer relative ${
                    isActive ? 'text-[#11110F] font-bold' : 'text-gray-700 hover:text-[#11110F] hover:bg-[#CCAE6E]/10'
                  }`}
                >
                  {item.label}
                  {isActive && <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#CCAE6E] rounded-full" />}
                </button>
              );
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#11110F] bg-white border border-[#CCAE6E]/30 hover:border-[#CCAE6E] rounded-lg transition-all shadow-xs cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#80652F]" />
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>
            <button
              onClick={onRequestConsultation}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#11110F] hover:bg-[#25231E] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer border border-[#CCAE6E]/30"
            >
              <span className="w-2 h-2 rounded-full bg-[#CCAE6E] animate-pulse" />
              <span>{t.requestConsultation}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#CCAE6E]" />
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="p-2 text-xs font-semibold text-[#11110F] bg-white border border-[#CCAE6E]/30 rounded-lg"
            >
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#11110F] bg-white border border-gray-200 hover:bg-gray-50 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#F8F6F0] border-b border-[#CCAE6E]/30 shadow-xl py-6 px-6 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 text-base rounded-xl font-medium transition-colors text-start ${
                    isActive ? 'bg-[#11110F] text-white font-bold' : 'text-gray-800 hover:bg-[#CCAE6E]/15'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#CCAE6E]" />}
                </button>
              );
            })}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col gap-3">
            <button
              onClick={() => { setIsMobileMenuOpen(false); onRequestConsultation(); }}
              className="w-full py-3.5 px-4 bg-[#11110F] text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#CCAE6E]" />
              <span>{t.requestConsultation}</span>
            </button>
            <a
              href="tel:+966510856865"
              className="w-full py-3 px-4 bg-white border border-[#CCAE6E]/40 text-[#11110F] font-semibold text-xs rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#80652F]" />
              <span>{t.contact.phoneValue}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
