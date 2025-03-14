import React from "react";
import contacts from "../locales/contacts";

const ContactPage: React.FC = () => {
  const pathname = window.location.pathname;
  const isChildMode = pathname.includes("/aruanakids");

  // Определяем язык (по умолчанию русский)
  const lang = pathname.includes("/kk")
    ? "kk"
    : pathname.includes("/en")
    ? "en"
    : "ru";

  const t = contacts[lang][isChildMode ? "kids" : "adults"];

  return (
    <div className="w-full max-w-[1290px] h-auto mx-auto p-6 bg-gray-50 rounded-md shadow-lg">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.title}</h2>
      <p className="text-lg font-semibold text-gray-700 mb-10">{t.address}</p>
      <div className="space-y-6">
        <div>
          <p className="text-gray-900 font-semibold">{t.phoneLabel}</p>
          <p className="text-primary-pink">{t.phone}</p>
        </div>
        <div>
          <p className="text-gray-900 font-semibold">{t.emailLabel}</p>
          <p className="text-primary-pink">{t.email}</p>
        </div>
        <div>
          <p className="text-gray-900 font-semibold">WhatsApp</p>
          <p className="text-primary-pink">{t.whatsapp}</p>
        </div>
        <div>
          <p className="text-gray-900 font-semibold">Instagram</p>
          <p className="text-primary-pink">
            <a href={t.instagram} target="_blank" rel="noopener noreferrer">
              {t.instagram}
            </a>
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t.mapLabel}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <iframe
              title="2gis"
              src={t.map2gis}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <iframe
              title="yamaps"
              src={t.mapYandex}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
