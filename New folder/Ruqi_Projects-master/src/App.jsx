import React, { useState, useEffect } from 'react';
import { applySeo, pathToView, viewUrl } from './seo';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectDetailModal } from './views/ProjectDetailModal';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ProjectsView } from './views/ProjectsView';
import { DevelopmentView } from './views/DevelopmentView';
import { ServicesView } from './views/ServicesView';
import { ContactView } from './views/ContactView';

export default function App() {
  const initialPath = window.location.pathname;
  const initialLanguage = initialPath === '/en' || initialPath.startsWith('/en/') ? 'en' : 'ar';
  const [language, setLanguage] = useState(initialLanguage);
  const [currentView, setCurrentView] = useState(pathToView(initialPath, initialLanguage));
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState('development');

  // Consultation Modal State
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledProjectName, setPrefilledProjectName] = useState('');

  // Synchronize HTML dir and lang attributes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    applySeo(currentView, language);
  }, [language, currentView]);

  useEffect(() => {
    const handlePopState = () => {
      const nextLanguage = window.location.pathname === '/en' || window.location.pathname.startsWith('/en/') ? 'en' : 'ar';
      setLanguage(nextLanguage);
      setCurrentView(pathToView(window.location.pathname, nextLanguage));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (view) => {
    const url = viewUrl(view, language);
    if (window.location.pathname !== url) window.history.pushState({}, '', url);
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (nextLanguage) => {
    setLanguage(nextLanguage);
    window.history.pushState({}, '', viewUrl(currentView, nextLanguage));
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleSelectService = (serviceId) => {
    setSelectedServiceId(serviceId);
    handleNavigate('services');
  };

  const handleOpenConsultation = (serviceType = '', projectName = '') => {
    setPrefilledService(serviceType);
    setPrefilledProjectName(projectName);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#171511] selection:bg-[#CCAE6E]/30 selection:text-[#11110F]">
      <AnnouncementBar />
      {/* Sticky Luxury Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={handleNavigate}
        language={language}
        setLanguage={handleLanguageChange}
        onRequestConsultation={() => handleOpenConsultation()}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full">
        {currentView === 'home' && (
          <HomeView
            language={language}
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
            onSelectService={handleSelectService}
            onRequestConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentView === 'about' && (
          <AboutView
            language={language}
            onRequestConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentView === 'projects' && (
          <ProjectsView
            language={language}
            onSelectProject={handleSelectProject}
            onRequestConsultation={(pName) => handleOpenConsultation('dev', pName)}
          />
        )}
        {currentView === 'development' && (
          <DevelopmentView
            language={language}
            onRequestConsultation={(s) => handleOpenConsultation(s || 'dev')}
          />
        )}
        {currentView === 'services' && (
          <ServicesView
            language={language}
            initialServiceId={selectedServiceId}
            onRequestConsultation={(s) => handleOpenConsultation(s || 'dev')}
          />
        )}
        {currentView === 'contact' && (
          <ContactView language={language} />
        )}
      </main>

      {/* Project Details Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        language={language}
        onInquire={(proj) => {
          setIsProjectModalOpen(false);
          const pTitle = language === 'ar' ? proj.title.ar : proj.title.en;
          handleOpenConsultation('dev', pTitle);
        }}
      />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        language={language}
        prefilledService={prefilledService}
        prefilledProject={prefilledProjectName}
      />

      {/* Floating WhatsApp Button */}
      <aside aria-label="WhatsApp Quick Support" className="fixed bottom-6 end-6 z-40 flex flex-col items-center gap-3">
        <a
          href="https://wa.me/966510856865"
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 border-2 border-white group"
          title={language === 'ar' ? 'محادثة واتساب فورية مع مستشار' : 'Chat with an Advisor on WhatsApp'}
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-6 h-6 group-hover:rotate-6 transition-transform" />
        </a>
      </aside>

      {/* Footer */}
      <Footer
        language={language}
        onNavigate={handleNavigate}
        onRequestConsultation={() => handleOpenConsultation()}
      />
    </div>
  );
}
