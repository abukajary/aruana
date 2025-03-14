import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/AppContext";

const DirectionsSection = () => {
  const { t } = useTranslation();
  const { mode } = useAppContext();

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
    <section
      className="py-12"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-[#85848a] mb-8">
          {t("directions.title", "Наши направления")}
        </h2>
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 p-6 rounded-lg bg-white shadow">
          <div className="flex-1 text-center">
            <h3 className="text-2xl font-semibold text-[#85848a] mb-4">{cardiorehab.title}</h3>
            <p className="text-xl text-[#606060]">{cardiorehab.description}</p>
          </div>
          <div className="flex-1 text-center">
            <h3 className="text-2xl font-semibold text-[#85848a] mb-4">{neurorehab.title}</h3>
            <p className="text-xl text-[#606060]">{neurorehab.description}</p>
          </div>
          <div className="flex-1 text-center">
            <h3 className="text-2xl font-semibold text-[#85848a] mb-4">{ortho.title}</h3>
            <p className="text-xl text-[#606060]">{ortho.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectionsSection;
