import React from 'react';
import { motion } from 'motion/react';
import { translations } from '../data/translations';

const testimonialImages = [
  '/images/customer-testimonial-1.jpg',
  '/images/customer-testimonial-2.jpg',
  '/images/customer-testimonial-3.jpg',
];

export const TestimonialsSection = ({ language }) => {
  const t = translations[language];

  return (
    <section id="testimonials-section" className="py-20 lg:py-28 bg-[#F2EEE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#CCAE6E]/20 border border-[#CCAE6E]/40 text-[#11110F] text-xs font-bold tracking-wide mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#80652F]" />
            <span>{language === 'ar' ? 'شهادات نعتز بها' : 'Endorsements & Trust'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11110F] tracking-tight">{t.testimonials.sectionTitle}</h2>
          <p className="text-base text-gray-600 mt-3 leading-relaxed">{t.testimonials.sectionSubtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {testimonialImages.map((image, idx) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-white rounded-2xl p-3 border border-[#CCAE6E]/25 shadow-sm hover:shadow-xl hover:shadow-[#11110F]/5 transition-all duration-300"
            >
              <img
                src={image}
                alt={language === 'ar' ? `صورة تقييم عميل رقم ${idx + 1}` : `Customer testimonial ${idx + 1}`}
                className="w-full h-auto max-h-[460px] object-contain rounded-lg"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
