
import { useTranslation } from "react-i18next";
import UTMHandler from "../components/UTMHandler";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto p-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
      <UTMHandler />
      <h2 className="text-3xl font-bold text-[#23556d] mb-6">
        {t("about.title", "Немного о нас")}
      </h2>
      <p className="mb-4 text-lg text-[#23556d]">{t("about.mission")}</p>
      <p className="mb-4 text-lg text-[#23556d] font-semibold">{t("about.happiness")}</p>
      <p className="mb-4 text-lg text-[#23556d]">{t("about.professionalism")}</p>
      <p className="mb-4 text-lg text-[#23556d]">{t("about.responsibility")}</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <p className="text-4xl font-bold text-[#23556d]">{t("about.counters.patients")}</p>
          <p className="mt-2 text-xl text-[#23556d]">1000</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-[#23556d]">{t("about.counters.doctors")}</p>
          <p className="mt-2 text-xl text-[#23556d]">10</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-[#23556d]">{t("about.counters.massagists")}</p>
          <p className="mt-2 text-xl text-[#23556d]">10</p>
        </div>
      </div>
    </div>
  );
};

export default About;
