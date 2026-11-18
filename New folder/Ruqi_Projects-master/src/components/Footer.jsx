import React from 'react';
import { ArrowUp, ShieldCheck, CheckCircle } from 'lucide-react';
import { translations } from '../data/translations';
import { Logo } from './Logo';

export const Footer = ({ language, onNavigate, onRequestConsultation }) => {
  const t = translations[language];

  return (
    <footer id="main-footer" className="bg-[#11110F] text-white border-t border-[#CCAE6E]/30 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#CCAE6E]/20">

          {/* Company Identity */}
          <div className="lg:col-span-5 space-y-6">
            <Logo language={language} variant="light" size="lg" onClick={() => onNavigate('home')} />
            <p className="text-xs text-gray-300 leading-relaxed font-normal max-w-md">{t.footer.aboutCompany}</p>
            <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-[#11110F] border border-[#CCAE6E]/30">
              <div className="w-8 h-8 rounded-lg bg-[#25231E] flex items-center justify-center text-[#CCAE6E] font-bold text-xs">2030</div>
              <div className="text-start">
                <span className="text-xs font-bold text-white block">{language === 'ar' ? 'رؤية المملكة 2030' : 'Saudi Vision 2030'}</span>
                <span className="text-[10px] text-[#CCAE6E]">{language === 'ar' ? 'نساهم في بناء مستقبل عمراني مستدام' : 'Building a Sustainable Urban Future'}</span>
              </div>
            </div>
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-[#CCAE6E] uppercase tracking-wider block mb-2.5">{t.footer.socialMedia}</span>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/profile.php?id=61591063980099" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-[#11110F] border border-[#CCAE6E]/30 hover:border-[#CCAE6E] text-gray-300 hover:text-[#CCAE6E] hover:bg-[#25231E] flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@raqi_projects" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-9 h-9 rounded-lg bg-[#11110F] border border-[#CCAE6E]/30 hover:border-[#CCAE6E] text-gray-300 hover:text-[#CCAE6E] hover:bg-[#25231E] flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43V12.9a8.16 8.16 0 0 0 5.73 2.27V11.7a4.82 4.82 0 0 1-3.77-1.46V6.69z"/></svg>
                </a>
                <a href="https://www.instagram.com/alruqiprojects/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-[#11110F] border border-[#CCAE6E]/30 hover:border-[#CCAE6E] text-gray-300 hover:text-[#CCAE6E] hover:bg-[#25231E] flex items-center justify-center transition-all duration-300 group">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#CCAE6E] border-b border-[#CCAE6E]/20 pb-2">{t.footer.quickLinks}</h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              {[['home', t.nav.home], ['about', t.nav.about], ['projects', t.nav.projects], ['development', t.nav.development], ['services', t.nav.services], ['contact', t.nav.contact]].map(([view, label]) => (
                <li key={view}>
                  <button onClick={() => onNavigate(view)} className="hover:text-[#CCAE6E] transition-colors cursor-pointer">{label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#CCAE6E] border-b border-[#CCAE6E]/20 pb-2">{t.footer.legalTitle}</h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#CCAE6E] shrink-0" /><span>{t.footer.wafiCertified}</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#CCAE6E] shrink-0" /><span>{t.footer.sbcCompliant}</span></div>
            </div>
            <div className="pt-2">
              <button onClick={onRequestConsultation} className="w-full py-3 rounded-lg bg-gradient-to-r from-[#CCAE6E] to-[#CCAE6E] text-[#11110F] font-bold text-xs hover:opacity-90 transition-opacity shadow-md cursor-pointer">
                {t.requestConsultation}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center sm:text-start">{t.footer.rightsReserved} {new Date().getFullYear()}</p>
          <div className="flex items-center gap-6">
            <a href="mailto:alruqiprojects@gmail.com" className="text-[#CCAE6E] hover:underline">alruqiprojects@gmail.com</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded-full bg-[#11110F] border border-[#CCAE6E]/30 hover:border-[#CCAE6E] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
