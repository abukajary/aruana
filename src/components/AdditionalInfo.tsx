import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/AppContext";


const TrustSection = () => {
  const { t } = useTranslation();
  const { mode } = useAppContext();

  const trustMessage =
    mode === "adult"
      ? t("trust.message.adult", "Мы верим, что каждый шаг к здоровью – это шаг к счастливой жизни!")
      : t("trust.message.child", "Каждая игра – это шаг к здоровому будущему!");
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

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-base text-[#606060] mb-6">{trustMessage}</p>
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center space-x-2">
              <span className="text-green-600 text-xl">✓</span>
              <p className="text-[22px] font-semibold text-[#606060]">{feature}</p>
            </div>
          ))}
        </div>
        <button className="px-6 py-3 bg-[#141414] text-white text-xl font-semibold rounded transition hover:bg-gray-700">
          {trustButton}
        </button>
      </div>
    </section>
  );
};

/* =====================================================
   DirectionsSection – карточки направлений реабилитации
===================================================== */
const DirectionsSection = () => {
  const { t } = useTranslation();
  const { mode } = useAppContext();

  // Определяем текст карточек в зависимости от режима
  const cardiorehab =
    mode === "adult"
      ? {
          title: t("directions.cardiorehab.title.adult", "Кардиореабилитация"),
          description: t(
            "directions.cardiorehab.description.adult",
            "Восстановление после кардиозаболеваний, укрепление сердечно-сосудистой системы."
          )
        }
      : {
          title: t("directions.cardiorehab.title.child", "Детская забота о сердце"),
          description: t(
            "directions.cardiorehab.description.child",
            "Забота о сердце с раннего возраста через игру."
          )
        };

  const neurorehab =
    mode === "adult"
      ? {
          title: t("directions.neurorehab.title.adult", "Неврореабилитация"),
          description: t(
            "directions.neurorehab.description.adult",
            "Помощь при ДЦП, задержках развития, последствиях инсультов и травм."
          )
        }
      : {
          title: t("directions.neurorehab.title.child", "Детская неврореабилитация"),
          description: t(
            "directions.neurorehab.description.child",
            "Поддержка развития и координации движений."
          )
        };

  const ortho =
    mode === "adult"
      ? {
          title: t("directions.ortho.title.adult", "Ортопедическая реабилитация"),
          description: t(
            "directions.ortho.description.adult",
            "Восстановление после травм, операций, исправление осанки."
          )
        }
      : {
          title: t("directions.ortho.title.child", "Детская ортопедическая поддержка"),
          description: t(
            "directions.ortho.description.child",
            "Поддержка правильного развития осанки и моторики."
          )
        };

  return (
    <section className="py-12 bg-[#f7f7f5]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-neutral-800 mb-8">
          {t("directions.title", "Наши направления")}
        </h2>
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 p-6 rounded-lg bg-white shadow">
          <div className="flex-1 text-center">
            <h3 className="text-2xl font-semibold text-neutral-800 mb-4">{cardiorehab.title}</h3>
            <p className="text-xl text-[#606060]">{cardiorehab.description}</p>
          </div>
          <div className="flex-1 text-center">
            <h3 className="text-2xl font-semibold text-neutral-800 mb-4">{neurorehab.title}</h3>
            <p className="text-xl text-[#606060]">{neurorehab.description}</p>
          </div>
          <div className="flex-1 text-center">
            <h3 className="text-2xl font-semibold text-neutral-800 mb-4">{ortho.title}</h3>
            <p className="text-xl text-[#606060]">{ortho.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =====================================================
   CertificatesSection – секция сертификатов
===================================================== */
const CertificatesSection = () => {
  const { t } = useTranslation();
  const { mode } = useAppContext();

  // Используем разные заголовки для взрослой и детской версий (при необходимости)
  const title =
    mode === "adult"
      ? t("certificates.title.adult", "Наши сертификаты")
      : t("certificates.title.child", "Наши достижения");

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl font-semibold text-neutral-800 mb-6">{title}</h2>
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

/* =====================================================
   Общий компонент, объединяющий все секции AdditionalInfo
===================================================== */
export const AdditionalInfo = () => {
  return (
    <div>
      <TrustSection />
      <DirectionsSection />
      <CertificatesSection />
    </div>
  );
};

export default AdditionalInfo;
