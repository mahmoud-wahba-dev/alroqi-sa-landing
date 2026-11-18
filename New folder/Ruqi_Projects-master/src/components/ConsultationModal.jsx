import React, { useEffect, useRef, useState } from 'react';
import { X, CheckCircle2, Phone, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from '../data/translations';
import { submitConsultation, validateConsultation } from '../services/consultationsService';

export const ConsultationModal = ({ isOpen, onClose, language, prefilledService = '', prefilledProject = '' }) => {
  const t = translations[language];
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const submissionInProgress = useRef(false);
  const closeTimer = useRef(null);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: prefilledService || 'dev',
    budgetRange: 'medium',
    projectCity: 'riyadh',
    message: prefilledProject ? (language === 'ar' ? `استفسار بخصوص: ${prefilledProject}` : `Inquiry regarding: ${prefilledProject}`) : '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submissionInProgress.current) return;
    const data = {
      fullName: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: t.contact.cityOptions[formData.projectCity],
      serviceType: t.contact.serviceOptions[formData.serviceType],
      projectDetails: formData.message,
    };
    const validationError = validateConsultation(data);
    if (validationError) {
      setError(t.contact[validationError]);
      return;
    }

    submissionInProgress.current = true;
    setIsSubmitting(true);
    setError('');
    try {
      await submitConsultation(data);
      setIsSubmitted(true);
      closeTimer.current = setTimeout(() => {
        closeTimer.current = null;
        handleResetAndClose();
      }, 3000);
    } catch (err) {
      console.error('Consultation submit error:', err);
      setError(
        err.message === 'FORM_NOT_CONFIGURED' || err.message === 'MAIL_NOT_CONFIGURED'
          ? t.contact.formNotConfigured
          : t.contact.submissionError,
      );
    } finally {
      submissionInProgress.current = false;
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = null;
    setIsSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#11110F]/70 backdrop-blur-md"
          onClick={handleResetAndClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-[#F8F6F0] rounded-2xl shadow-2xl border border-[#CCAE6E]/30 overflow-hidden my-8 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#11110F] text-white p-6 relative flex items-center justify-between border-b border-[#CCAE6E]/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#25231E] border border-[#CCAE6E]/40 flex items-center justify-center text-[#CCAE6E]"><Sparkles className="w-5 h-5" /></div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.contact.formTitle}</h3>
                  <p className="text-xs text-[#CCAE6E]/90 mt-0.5">{t.brandName} — {t.brandSubtitle}</p>
                </div>
              </div>
              <button onClick={handleResetAndClose} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto">
              {isSubmitted ? (
                <div role="status" aria-live="polite" className="py-12 text-center flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-[#11110F]/10 flex items-center justify-center mb-6 border-2 border-[#CCAE6E]">
                    <CheckCircle2 className="w-12 h-12 text-[#11110F]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#11110F] mb-3">{t.contact.successTitle}</h4>
                  <p className="text-base text-gray-700 max-w-md mx-auto leading-relaxed mb-8">{t.contact.successMessage}</p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a href="https://wa.me/966510856865" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-semibold text-sm hover:opacity-95 transition-all shadow-md">
                      <Phone className="w-4 h-4" />{t.contact.whatsapp}
                    </a>
                    <button onClick={handleResetAndClose} className="px-6 py-3 rounded-lg bg-[#11110F] text-white font-medium text-sm hover:bg-[#25231E] transition-colors">
                      {language === 'ar' ? 'إغلاق النافذة' : 'Close Window'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {error && <p role="alert" className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800">{error}</p>}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#11110F] mb-1.5">{t.contact.fullName} <span className="text-[#80652F]">*</span></label>
                      <input type="text" autoComplete="name" required value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setError(''); }} placeholder={t.contact.fullNamePlaceholder} className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#11110F] focus:ring-1 focus:ring-[#11110F] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#11110F] mb-1.5">{t.contact.phoneNumber} <span className="text-[#80652F]">*</span></label>
                      <input type="tel" inputMode="tel" autoComplete="tel" required value={formData.phone} onChange={(e) => { setFormData({ ...formData, phone: e.target.value }); setError(''); }} placeholder={t.contact.phoneNumberPlaceholder} className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#11110F] focus:ring-1 focus:ring-[#11110F] transition-colors text-start" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#11110F] mb-1.5">{t.contact.emailAddress} <span className="text-[#80652F]">*</span></label>
                      <input type="email" autoComplete="email" required value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setError(''); }} placeholder={t.contact.emailAddressPlaceholder} className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#11110F] focus:ring-1 focus:ring-[#11110F] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#11110F] mb-1.5">{t.contact.city}</label>
                      <select value={formData.projectCity} onChange={(e) => setFormData({ ...formData, projectCity: e.target.value })} className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#11110F] transition-colors">
                        <option value="riyadh">{t.contact.cityOptions.riyadh}</option>
                        <option value="jeddah">{t.contact.cityOptions.jeddah}</option>
                        <option value="khobar">{t.contact.cityOptions.khobar}</option>
                        <option value="other">{t.contact.cityOptions.other}</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#11110F] mb-1.5">{t.contact.serviceType} <span className="text-[#80652F]">*</span></label>
                    <select required value={formData.serviceType} onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })} className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#11110F] transition-colors">
                      {Object.entries(t.contact.serviceOptions).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#11110F] mb-1.5">{t.contact.message}</label>
                    <textarea rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder={t.contact.messagePlaceholder} className="w-full px-4 py-3 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#11110F] transition-colors resize-none" />
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                      <span>{language === 'ar' ? 'استجابة سريعة ومباشرة من الفريق التنفيذي' : 'Direct advisory response within 24 hours'}</span>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#11110F] to-[#25231E] text-white font-medium text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all cursor-pointer disabled:opacity-75">
                      {isSubmitting ? <span>{t.contact.submitting}</span> : <><Send className="w-4 h-4 text-[#CCAE6E]" /><span>{t.contact.submitButton}</span></>}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
