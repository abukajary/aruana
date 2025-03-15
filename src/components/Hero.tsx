import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();
  const { mode, setMode } = useAppContext();
  const navigate = useNavigate();

  const handleModeChange = (newMode: "adult" | "child") => {
    setMode(newMode);
    navigate(newMode === "adult" ? "/aruanaclinic" : "/aruanakids");
  };

  return (
    <div className="relative w-full bg-[#f4f4f4] flex flex-col items-center">
      <div className=" w-full mx-auto flex flex-col md:flex-row items-center p-4 md:p-6 lg:px-16">
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-base font-bold text-[#23556d]">
            {t("hero.welcome_to_aruana")}
          </p>
          <h1 className="text-4xl font-bold capitalize text-[#23556d]">
            {t("hero.rehab_center_for")}
          </h1>
          <div className="flex space-x-4">
            <button
              onClick={() => handleModeChange("adult")}
              className={`px-5 py-2 rounded-lg text-base font-bold uppercase transition ${
                mode === "adult"
                  ? "bg-[#2b2e4a] text-white"
                  : "text-[#2b2e4a] bg-gray-200"
              }`}
            >
              <img
                src={
                  mode === "adult"
                    ? "/aivory/горизонтальный/png/logo_aivory_Монтажная область 1 копия.png"
                    : "/aivory/горизонтальный/png/logo_aivory-04.png"
                }
                alt="Логотип"
                className="w-[200px]"
              />
            </button>
            <button
              onClick={() => handleModeChange("child")}
              className={`px-5 py-2 rounded-lg text-base font-bold uppercase transition ${
                mode === "child"
                  ? "bg-[#2b2e4a] text-white"
                  : "text-[#2b2e4a] bg-gray-200"
              }`}
            >
              <img
                src="/aruana_kids_logo_Монтажная область 1.png"
                alt=""
                className="w-[200px]"
              />
            </button>
          </div>
          <p className="text-base font-medium text-[#23556d]">
            {mode === "adult"
              ? t("hero.adults_rehab_text")
              : t("hero.kids_rehab_text")}
          </p>
          <button
            onClick={() => navigate("/appointment")}
            className="px-5 py-2.5 rounded-lg bg-white text-base font-bold text-[#23556d] border border-[#23556d]"
          >
            {t("hero.consultation")}
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-end mt-10 md:mt-0">
          <img
            src={mode === "adult" ? "/mainclinic.jpg" : "/mainkids.jpg"}
            alt="Rehab Center"
            className="max-w-full max-h-[400px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
