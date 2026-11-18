import React from 'react';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { WhyUsSection } from '../components/WhyUsSection';
import { CtaBanner } from '../components/CtaBanner';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';

export const HomeView = ({ language, onNavigate, onSelectProject, onSelectService, onRequestConsultation }) => {
  return (
    <div id="home-view" className="w-full">
      <Hero language={language} onExploreProjects={() => onNavigate('projects')} onContactUs={() => onNavigate('contact')} />
      <AboutSection language={language} onReadMore={() => onNavigate('about')} />
      <ServicesSection language={language} onSelectService={(id) => { onSelectService(id); onNavigate('services'); }} onViewAllServices={() => onNavigate('services')} />
      <ProjectsSection language={language} onSelectProject={onSelectProject} onViewAllProjects={() => onNavigate('projects')} />
      <WhyUsSection language={language} />
      <CtaBanner language={language} onContactClick={onRequestConsultation} />
      <TestimonialsSection language={language} />
      <FaqSection language={language} onAskQuestion={onRequestConsultation} />
      <ContactSection language={language} />
    </div>
  );
};
