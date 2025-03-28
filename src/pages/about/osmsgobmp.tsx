import { useLocation } from "react-router-dom";
import NavLinks from "../../components/NavLinks";

interface Section {
  title: string;
  content: string[];
  image?: string;
}

const AboutSection = ({ sections }: { sections: Section[] }) => (
  <div className="w-full">
    {sections.map((section, index) => (
      <div
        key={index}
        className={`flex flex-col md:flex-row ${
          index % 2 === 0 ? "" : "md:flex-row-reverse"
        } items-center gap-6 p-6`}
      >
        {section.image && (
          <div className="w-full md:w-1/2">
            <img
              src={section.image}
              alt={section.title}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        )}
        <div
          className={`w-full ${
            section.image ? "md:w-1/2" : "md:w-full"
          } text-justify`}
        >
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          {section.content.map((paragraph, contentIndex) => (
            <p
              key={contentIndex}
              className="text-gray-700 leading-relaxed mb-4 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const OsmsGobmp = () => {
  const location = useLocation();
  const isChildMode = location.pathname.includes("/aruanakids");
  const adultSections: Section[] = [
    
    {
      title: "ОСМС и ГОБМП ",
      content: [
        "Реабилитационный центр Aruana Clinic может оказывать услуги по системе Обязательного социального медицинского страхования (ОСМС) и Гарантированного объема бесплатной медицинской помощи (ГОБМП).",
        "Система ОСМС дает возможность пациентам получать более широкий спектр медицинских услуг, если они являются застрахованными лицами.",
        "Мы оказываем медицинскую реабилитацию после инсультов, инфарктов, травм и других заболеваний.",
        "Как получить реабилитацию по ОСМС и ГОБМП в Aruana Clinic ?",
        "1. Обратиться в поликлинику по месту прикрепления.",
        "2. Получить направление от лечащего врача.",
        "3.С направлением прийти к реабилитологу и получить заключение на портал.",
        "4. Начать курс лечения в соответствии с показаниями.",
        "Aruana Clinic стремится предоставить пациентам качественные и доступные услуги реабилитации, в том числе в рамках госпрограмм. Уточнить возможность прохождения лечения по ОСМС и ГОБМП можно у наших специалистов.",
      ],
      image: "/trust1.jpg",
    }
  ];

  const childrenSections: Section[] = [
    
    {
      title: "",
      content: [
        "",
      ],
      image: "",
    }
  ];

  const sections = isChildMode ? childrenSections : adultSections;

  return (
    <>
      <NavLinks />
      <div
        className={`min-h-screen p-6 flex flex-col items-center ${
          isChildMode ? "bg-[#EFF2E1]" : "bg-[#d8d9da]"
        }`}
      >
       
        <AboutSection sections={sections} />
      </div>
    </>
  );
};

export default OsmsGobmp;
