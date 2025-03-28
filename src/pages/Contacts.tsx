import React from "react";
import contacts from "../locales/contacts";
import NavLinks from "../components/NavLinks";
import ButtonWith2GISLogo from "../components/TwoGISButton";
import { useAppContext } from "../contexts/AppContext";

const ContactPage: React.FC = () => {
  const pathname = window.location.pathname;
  const { mode } = useAppContext();
  const isChildMode = mode === 'child'

  const lang = pathname.includes("/kk")
    ? "kk"
    : pathname.includes("/en")
    ? "en"
    : "ru";

  const t = contacts[lang][isChildMode ? "kids" : "adults"];

  return (
    <>
      <header className="bg-primary-blue ">
        <NavLinks />
      </header>
      <main className="w-full max-w-[1290px] mx-auto p-6 bg-gray-100 rounded-md shadow-xl">
        {/* Информация о контактах */}
        <section className="mb-10 text-center">
          {/* <h2 className="text-5xl font-extrabold text-gray-900 mb-8">{t.title}</h2> */}
          <p className="text-xl font-medium text-gray-700">{isChildMode ? `${t.address}` : 'ул. Алмалы, 35А'}</p>
        </section>

        {/* Карточка с контактами */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-gray-900">{t.phoneLabel}</p>
            <p className="text-primary-pink text-xl">{isChildMode ? `${t.phone}` : '8 (7272) 62 12 08'}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-gray-900">{t.emailLabel}</p>
            <p className="text-primary-pink text-xl">{isChildMode ? t.email : 'info@aruanaclinic.kz'}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-lg font-semibold text-gray-900">Instagram</p>
            <a
              href={isChildMode ? t.instagram : 'https://www.instagram.com/aruana_clinic/'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-pink text-xl hover:underline"
            >
              {isChildMode ? t.instagram : 'https://www.instagram.com/aruana_clinic/'}
            </a>
          </div>
        </section>

        {/* Карта и кнопка 2GIS */}
        <section className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">{t.mapLabel}</h3>
          <div className="mb-6">
            <ButtonWith2GISLogo isChildMode={isChildMode} />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              title="yamaps"
              src={isChildMode ? 'https://yandex.ru/map-widget/v1/?ll=76.963665%2C43.214283&z=16&pt=76.963665,43.214283' : 'https://yandex.ru/map-widget/v1/?ll=76.919556%2C43.195502&z=16&pt=76.919556,43.195502'
              }
              width="100%"
              height="400"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;