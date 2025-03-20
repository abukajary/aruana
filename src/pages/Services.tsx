import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import UTMHandler from "../components/UTMHandler";
import { prices } from "../locales/prices";
import Popup from "../components/PopUp";
import NavLinks from "../components/NavLinks";

interface PricingTableProps {
  title: string;
  headers: string[];
  rows: string[][];
}

const PricingTable: React.FC<PricingTableProps> = ({
  title,
  headers,
  rows,
}) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold text-[#85848a] mb-4 text-center">
      {title}
    </h3>
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-[#d8d9da]">
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="px-4 py-2 border border-gray-300 text-left font-semibold text-[#85848a]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx} className="odd:bg-white even:bg-[#eeedef]">
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-4 py-2 border border-gray-300 text-[#333333]"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ServicesPage: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isKids = location.pathname.includes("kids");

  const serviceData = useMemo(() => {
    const lang = i18n.language as keyof typeof prices;
    return prices[lang]?.[isKids ? "kids" : "adults"] ?? {};
  }, [isKids, i18n.language]);

  return (
    <>
      <NavLinks />
      <div className="min-h-screen font-montserrat">
        <UTMHandler />
        <header className="bg-white py-6">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl font-bold">
              {t("nav.services", "Услуги")}
            </h1>
          </div>
        </header>

        <Popup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          title="Акция до конца апреля!"
          footerButtons={[
            {
              label: "Получить консультацию",
              onClick: () => (window.location.href = "/appointment"),
              className:
                "bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md",
            },
            {
              label: "Закрыть",
              onClick: () => setIsPopupOpen(false),
              className: "bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md",
            },
          ]}
        >
          <p className="text-gray-700">
            Подарите своему ребёнку заботу и здоровье уже сегодня!
          </p>
          <ul className="mt-2 text-gray-700 space-y-2">
            <li>
              🎉 Первичный приём Неонатолога и Педиатра + массаж 2 дня в
              подарок.
            </li>
            <li>
              ✔ Первичный приём педиатра 15 000тг – консультация, осмотр,
              рекомендации.
            </li>
            <li>
              ✔ 2 дней массажа в подарок – профессиональный детский массаж.
            </li>
            <li>🔹 Массаж для общего укрепления организма.</li>
            <li>📅 Сроки акции: 26.03.2025 - 30.04.2025.</li>
            <li>📍 Адрес: проспект Достык 125, Aruana Kids.</li>
            <li>📞 Запись: 8771 030 96 53.</li>
          </ul>
        </Popup>

        <main className="max-w-7xl mx-auto px-4 py-8">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-[#85848a] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#605f65] cursor-pointer"
          >
            Открыть акцию
          </button>
          {"outpatient" in serviceData && (
            <PricingTable
              title={serviceData.outpatient.title}
              headers={serviceData.outpatient.headers}
              rows={serviceData.outpatient.rows}
            />
          )}
          {"stationary" in serviceData && serviceData.stationary && (
            <PricingTable
              title={serviceData.stationary.title}
              headers={serviceData.stationary.headers}
              rows={serviceData.stationary.rows}
            />
          )}
          {"massage" in serviceData && serviceData.massage && (
            <PricingTable
              title={serviceData.massage.title}
              headers={serviceData.massage.headers}
              rows={serviceData.massage.rows}
            />
          )}

          {"packs" in serviceData && serviceData.packs && (
            <>
              <PricingTable
                title={serviceData.packs.title}
                headers={serviceData.packs.headers}
                rows={serviceData.packs.rows}
              />
              {"additional" in serviceData.packs && (
                <PricingTable
                  title={serviceData.packs.additional.title}
                  headers={serviceData.packs.additional.headers}
                  rows={serviceData.packs.additional.rows}
                />
              )}
              {"note" in serviceData.packs && (
                <p className="text-gray-600 mt-4">{serviceData.packs.note}</p>
              )}
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default ServicesPage;
