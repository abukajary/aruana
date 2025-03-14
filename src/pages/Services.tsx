import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import UTMHandler from "../components/UTMHandler";
import { prices } from "../locales/prices";

interface PricingTableProps {
  title: string;
  headers: string[];
  rows: string[][];
}

const PricingTable: React.FC<PricingTableProps> = ({ title, headers, rows }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold text-[#85848a] mb-4 text-center">{title}</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-[#d8d9da]">
            {headers.map((header, idx) => (
              <th key={idx} className="px-4 py-2 border border-gray-300 text-left font-semibold text-[#85848a]">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx} className="odd:bg-white even:bg-[#eeedef]">
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-2 border border-gray-300 text-[#333333]">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ServicesPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isKids = location.pathname.includes("kids");

  const serviceData = useMemo(() => {
    const lang = i18n.language as keyof typeof prices;
    return prices[lang]?.[isKids ? "kids" : "adults"] ?? {};
  }, [isKids, i18n.language]);

  return (
    <div className="min-h-screen font-montserrat">
      <UTMHandler />
      <header className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">{t("nav.services", "Услуги")}</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
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
      </main>
    </div>
  );
};

export default ServicesPage;
