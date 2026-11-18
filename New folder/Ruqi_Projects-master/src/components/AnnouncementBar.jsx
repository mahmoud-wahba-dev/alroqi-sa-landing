import React from 'react';
import { Sparkles } from 'lucide-react';

const message = 'قريبا انطلاق ابلكيشن قسم الصيانة ترقبو';
const marqueeItems = Array.from({ length: 3 }, (_, index) => index);

export const AnnouncementBar = () => {
  return (
    <aside
      className="announcement-bar"
      aria-label="إعلانات مشروعات الرقي"
      dir="rtl"
    >
      <div className="announcement-inner">
        <div className="announcement-viewport">
          <div className="announcement-track is-rtl">
            <div className="announcement-group">
              {marqueeItems.map((item) => (
                <span className="announcement-item" key={item}>
                  <Sparkles aria-hidden="true" />
                  <span className="announcement-message">{message}</span>
                  <span className="announcement-dot" aria-hidden="true" />
                </span>
              ))}
            </div>
            <div className="announcement-group" aria-hidden="true">
              {marqueeItems.map((item) => (
                <span className="announcement-item" key={item}>
                  <Sparkles aria-hidden="true" />
                  <span className="announcement-message">{message}</span>
                  <span className="announcement-dot" aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
