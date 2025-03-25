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

const Nidcap = () => {
  const location = useLocation(); // React Router hook to get the current location
  const isChildMode = location.pathname.includes("/aruanakids");
  const adultSections: Section[] = [];

  const childrenSections: Section[] = [
    {
      title: "Что такое NIDCAP?",
      content: [
        "NIDCAP – это программа индивидуализированного ухода и развития новорожденных, разработанная для детей, родившихся раньше срока или с осложнениями. Она основана на наблюдении за малышом и адаптации условий ухода, чтобы минимизировать стресс и поддерживать его естественное развитие.",
        "Как мы используем NIDCAP в 'Aruana Kids'?",
        "Мы создаем комфортные условия для реабилитации недоношенных детей, обучаем родителей техникам мягкого ухода и даем рекомендации для домашней реабилитации. В нашей программе участвуют неврологи, педиатры и реабилитологи, которые помогают малышам пройти этот путь максимально бережно.",
        "NIDCAP – это не просто метод, а философия заботы, где ребенок чувствует себя в безопасности с первых дней жизни. Мы уверены: каждый ребенок заслуживает мягкий и внимательный подход к развитию.",
        "С уважением, Шынар Маликовна!",
      ],
      image: "/kidsTrust3.jpg",
    },
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

export default Nidcap;
