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

const Features = () => {
  const location = useLocation();
  const isChildMode = location.pathname.includes("/aruanakids");
  const adultSections: Section[] = [
    
    {
      title: "Наши особенности:",
      content: [
        "Комплексный подход – лечение и реабилитация на основе современных медицинских протоколов.",
        "Высококвалифицированные специалисты – команда врачей с многолетним опытом работы в своих областях.",
        "Индивидуальные программы – персонализированные реабилитационные курсы для детей и взрослых.",
        "Современное оборудование – использование инновационных технологий для точной диагностики и эффективного лечения.",
        "Комфортные условия – уютная атмосфера, дружественный персонал и внимание к каждому пациенту.",
        "В Aruana Clinic мы заботимся о здоровье ваших близких и стремимся сделать процесс восстановления максимально эффективным и комфортным.",
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

export default Features;
