import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/AppContext";

const TrustSection = () => {
  const { t } = useTranslation();
  const { mode } = useAppContext();

  const title =
    mode === "adult"
      ? t("trust.title.adult", "Почему выбирают нас?")
      : t("trust.title.child", "Почему выбирают нас?");
  const subtitle =
    mode === "adult"
      ? t(
          "trust.subtitle.adult",
          "Ваше здоровье – наш приоритет. Доверие строится на результате."
        )
      : t(
          "trust.subtitle.child",
          "Каждая улыбка ребенка – это наша награда."
        );
  const trustButton =
    mode === "adult"
      ? t("trust.button.adult", "Подробнее")
      : t("trust.button.child", "Начать игру");

  const features =
    mode === "adult"
      ? [
          t("features.methodology.adult", "Современные методики и оборудование"),
          t("features.individual.adult", "Индивидуальный подход к каждому пациенту"),
          t("features.experienced.adult", "Опытные специалисты"),
          t("features.quality.adult", "Профессиональное обслуживание")
        ]
      : [
          t("features.methodology.child", "Интерактивные игровые методики"),
          t("features.individual.child", "Индивидуальное внимание к каждому ребенку"),
          t("features.experienced.child", "Дружелюбные детские специалисты"),
          t("features.quality.child", "Безопасная и уютная среда")
        ];

  const photos = [
    "/trust1.jpg",
    "/trust2.jpg",
    "/trust3.jpg",
    "/trust5.jpg",
  ];
  return (
    <section
      className="py-12"
      style={{ backgroundColor: "#eeedef", fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="w-full max-w-[1290px] h-auto mx-auto p-6 bg-gray-50 rounded-md shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#85848a]">{title}</h2>
          <p className="mt-4 text-xl text-[#85848a]">{subtitle}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {photos.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`aruana`}
                className="w-full h-48 object-cover rounded shadow"
              />
            ))}
          </div>
          <div className="md:w-1/2 space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-[#d8d9da] rounded shadow-sm hover:shadow transition duration-150"
              >
                <span className="text-2xl text-[#85848a]">✓</span>
                <p className="text-lg font-semibold text-[#85848a]">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-[#85848a] text-white text-xl font-semibold rounded hover:bg-gray-700 transition duration-150">
            {trustButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
