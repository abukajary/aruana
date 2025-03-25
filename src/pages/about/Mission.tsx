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

const Mission = () => {
  const location = useLocation(); // React Router hook to get the current location
  const isChildMode = location.pathname.includes("/aruanakids");
  const adultSections: Section[] = [
    
    {
      title: "Миссия",
      content: [
        "Восстановить здоровье, улучшить качество жизни и вернуть пациентов к нормальной жизни после болезни.",
        "Мы дарим счастье!",
      ],
      image: "/trust1.jpg",
    }
  ];

  const childrenSections: Section[] = [
    
    {
      title: "Миссия",
      content: [
        "Восстановить здоровье, улучшить качество жизни и вернуть пациентов к нормальной жизни после болезни",
      ],
      image: "/kidsTrust2.jpg",
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

export default Mission;
