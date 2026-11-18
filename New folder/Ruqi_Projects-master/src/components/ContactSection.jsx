import React, { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, MessageSquare, CheckCircle2, Building2, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { translations } from '../data/translations';
import { submitConsultation, validateConsultation } from '../services/consultationsService';

export const ContactSection = ({ language }) => {
  const t = translations[language];
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const submissionInProgress = useRef(false);

  const [formData, setFormData] = useState({ name: '', phone: '', email: '', serviceType: 'dev', projectCity: 'riyadh', message: '' });

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
    } catch (err) {
      console.error('Contact form error:', err);
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

  return (
    <section id="contact-section" className="py-20 lg:py-28 bg-[#F2EEE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#CCAE6E]/20 border border-[#CCAE6E]/40 text-[#11110F] text-xs font-bold tracking-wide mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#80652F]" /><span>{language === 'ar' ? 'تواصل مباشر' : 'Direct Inquiry'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11110F] tracking-tight">{t.contact.title}</h2>
          <p className="text-base text-gray-600 mt-3 leading-relaxed">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#11110F] rounded-2xl p-8 text-white border border-[#CCAE6E]/30 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-[#CCAE6E]/20 pb-4">{t.contact.directChannels}</h3>
              {[
                { icon: <MapPin className="w-5 h-5" />, label: t.contact.headquarters, value: t.contact.headquartersAddress, href: null },
                { icon: <Phone className="w-5 h-5" />, label: t.contact.phone, value: t.contact.phoneValue, href: `tel:${t.contact.phoneValue}` },
                { icon: <MessageSquare className="w-5 h-5" />, label: t.contact.whatsapp, value: t.contact.whatsappValue, href: 'https://wa.me/966510856865', green: true },
                { icon: <Mail className="w-5 h-5" />, label: t.contact.emailAddress, value: t.contact.emailValue, href: `mailto:${t.contact.emailValue}` },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.green ? 'bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366]' : 'bg-[#25231E] border border-[#CCAE6E]/40 text-[#CCAE6E]'}`}>{item.icon}</div>
                  <div>
                    <h4 className={`text-xs font-semibold uppercase ${item.green ? 'text-[#25D366]' : 'text-[#CCAE6E]'}`}>{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-sm font-bold text-white hover:text-[#CCAE6E] transition-colors mt-1 block font-mono">{item.value}</a>
                    ) : (
                      <p className="text-sm text-gray-200 mt-1 leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4 pt-2 border-t border-[#CCAE6E]/20">
                <div className="w-10 h-10 rounded-xl bg-[#25231E] border border-[#CCAE6E]/40 flex items-center justify-center shrink-0 text-[#CCAE6E]"><Clock className="w-5 h-5" /></div>
                <div>
                  <h4 className="text-xs font-semibold text-[#CCAE6E] uppercase">{t.contact.workingHours}</h4>
                  <p className="text-xs text-gray-300 mt-1">{t.contact.workingHoursValue}</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl p-4 border border-[#CCAE6E]/25 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#80652F]" /><span className="text-xs font-bold text-[#11110F]">{language === 'ar' ? 'موقع المقر (الرياض)' : 'HQ Location (Riyadh)'}</span></div>
                <a href="https://www.google.com/maps?q=24.7197225,46.8470032" target="_blank" rel="noopener noreferrer" className="text-[11px] text-[#80652F] hover:underline font-semibold flex items-center gap-1">
                  <span>24.7197° N, 46.8470° E</span><ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden bg-gray-200 border border-gray-100">
                <iframe title="Al-Ruqi Projects HQ" src="https://maps.google.com/maps?q=24.7197225,46.8470032&hl=ar&z=16&output=embed" className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#CCAE6E]/30 shadow-lg">
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-[#11110F]/10 flex items-center justify-center mb-6 border-2 border-[#CCAE6E]"><CheckCircle2 className="w-12 h-12 text-[#11110F]" /></div>
                  <h4 className="text-2xl font-bold text-[#11110F] mb-3">{t.contact.successTitle}</h4>
                  <p className="text-base text-gray-700 max-w-md mx-auto leading-relaxed mb-8">{t.contact.successMessage}</p>
                  <button onClick={() => { setIsSubmitted(false); setFormData({ name: '', phone: '', email: '', serviceType: 'dev', projectCity: 'riyadh', message: '' }); }} className="px-8 py-3.5 rounded-lg bg-[#11110F] text-white font-medium text-sm hover:bg-[#25231E] transition-colors">
                    {language === 'ar' ? 'إرسال طلب آخر' : 'Submit Another Request'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="border-b border-gray-100 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-[#11110F]">{t.contact.formTitle}</h3>
                    <p className="text-xs text-gray-500 mt-1">{language === 'ar' ? 'يرجى ملء النموذج أدناه وسيقوم مستشارنا العقاري بالرد عليكم بأسرع وقت' : 'Fill in the form and our advisory team will respond promptly'}</p>
                  </div>
                  {error && <p role="alert" className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800">{error}</p>}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#11110F] mb-1.5">{t.contact.fullName} <span className="text-[#80652F]">*</span></label>
                      <input type="text" autoComplete="name" required value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setError(''); }} placeholder={t.contact.fullNamePlaceholder} className="w-full px-4 py-3 text-sm bg-[#F8F6F0] border border-gray-300 rounded-lg focus:outline-none focus:border-[#11110F] focus:ring-1 focus:ring-[#11110F] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#11110F] mb-1.5">{t.contact.phoneNumber} <span className="text-[#80652F]">*</span></label>
                      <input type="tel" inputMode="tel" autoComplete="tel" required value={formData.phone} onChange={(e) => { setFormData({ ...formData, phone: e.target.value }); setError(''); }} placeholder={t.contact.phoneNumberPlaceholder} className="w-full px-4 py-3 text-sm bg-[#F8F6F0] border border-gray-300 rounded-lg focus:outline-none focus:border-[#11110F] transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#11110F] mb-1.5">{t.contact.emailAddress} <span className="text-[#80652F]">*</span></label>
                      <input type="email" autoComplete="email" required value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setError(''); }} placeholder={t.contact.emailAddressPlaceholder} className="w-full px-4 py-3 text-sm bg-[#F8F6F0] border border-gray-300 rounded-lg focus:outline-none focus:border-[#11110F] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#11110F] mb-1.5">{t.contact.city}</label>
                      <select value={formData.projectCity} onChange={(e) => setFormData({ ...formData, projectCity: e.target.value })} className="w-full px-4 py-3 text-sm bg-[#F8F6F0] border border-gray-300 rounded-lg focus:outline-none focus:border-[#11110F] transition-colors">
                        {Object.entries(t.contact.cityOptions).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#11110F] mb-1.5">{t.contact.serviceType} <span className="text-[#80652F]">*</span></label>
                    <select required value={formData.serviceType} onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })} className="w-full px-4 py-3 text-sm bg-[#F8F6F0] border border-gray-300 rounded-lg focus:outline-none focus:border-[#11110F] transition-colors">
                      {Object.entries(t.contact.serviceOptions).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#11110F] mb-1.5">{t.contact.message}</label>
                    <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder={t.contact.messagePlaceholder} className="w-full px-4 py-3 text-sm bg-[#F8F6F0] border border-gray-300 rounded-lg focus:outline-none focus:border-[#11110F] transition-colors resize-none" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl bg-gradient-to-r from-[#11110F] to-[#25231E] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-70">
                    {isSubmitting ? <span>{t.contact.submitting}</span> : <><Send className="w-4 h-4 text-[#CCAE6E]" /><span>{t.contact.submitButton}</span></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
