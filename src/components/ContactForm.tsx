import React from "react";
import contacts from "../locales/contacts";

const ContactForm: React.FC = () => {
  const pathname = window.location.pathname;
  const isChildMode = pathname.includes("/aruanakids");

  const lang = pathname.includes("/kk")
    ? "kk"
    : pathname.includes("/en")
    ? "en"
    : "ru";

  const t = contacts[lang][isChildMode ? "kids" : "adults"];

  return (
    <div className="w-full max-w-[1290px] mx-auto p-6 bg-gray-50 rounded-md shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.howToFindUs}</h2>
      <p className="text-lg font-semibold text-gray-700 mb-4">{t.address}</p>

      <div className="space-y-4">
        <div className="text-center">
          <p className="text-gray-900 font-semibold">{t.phoneLabel}</p>
          <p className="text-primary-pink">{t.phone}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-900 font-semibold">{t.emailLabel}</p>
          <p className="text-primary-pink">{t.email}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <iframe
          title="2gis aruana"
          src={t.map2gis}
          width="100%"
          height="250"
          className="rounded-md shadow-md"
          allowFullScreen
          loading="lazy"
        ></iframe>
        <iframe
          title="yamaps aruana"
          src={t.mapYandex}
          width="100%"
          height="250"
          className="rounded-md shadow-md"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
