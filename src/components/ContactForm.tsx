import React from "react";
import contacts from "../locales/contacts";
import ButtonWith2GISLogo from "./TwoGISButton";

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
    <div className="w-full max-w-[1290px] mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
        {t.howToFindUs}
      </h2>
      <p className="text-lg font-medium text-gray-600 text-center mb-6">
      {isChildMode ? `${t.address}` : 'ул. Алмалы, 35А'}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="text-center">
          <p className="text-gray-800 font-semibold">{t.phoneLabel}</p>
          <p className="text-primary-pink text-xl">{isChildMode ? `${t.phone}` : '8 (7272) 62 12 08'}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-800 font-semibold">{t.emailLabel}</p>
          <p className="text-primary-pink text-xl">{isChildMode ? t.email : 'info@aruanaclinic.kz'}</p>
        </div>
      </div>

      {/* Кнопка 2GIS */}
      <div className="flex justify-center mb-8">
        <ButtonWith2GISLogo isChildMode={isChildMode} />
      </div>

      <div className="overflow-hidden rounded-lg shadow-lg">
        <iframe
          title="yamaps"
          src={
            isChildMode
              ? "https://yandex.ru/map-widget/v1/?ll=76.963665%2C43.214283&z=16&pt=76.963665,43.214283"
              : "https://yandex.ru/map-widget/v1/?ll=76.919556%2C43.195502&z=16&pt=76.919556,43.195502"
          }
          width="100%"
          height="400"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
