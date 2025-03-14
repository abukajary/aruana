import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/AppContext";

const CertificatesSection = () => {
  const { t } = useTranslation();
  const { mode } = useAppContext();

  const title =
    mode === "adult"
      ? t("certificates.title.adult", "Наши сертификаты")
      : t("certificates.title.child", "Наши достижения");

  return (
    <section
      className="py-12"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl font-semibold text-[#85848a] mb-6">{title}</h2>
        <div className="flex justify-center items-center space-x-10 opacity-40 mb-8">
          <img src="image-122.png" alt="Certificate" className="w-52 h-auto object-contain" />
          <img src="image-122.png" alt="Certificate" className="w-52 h-auto object-contain" />
          <img src="image-122.png" alt="Certificate" className="w-52 h-auto object-contain" />
          <img src="image-122.png" alt="Certificate" className="w-52 h-auto object-contain" />
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
