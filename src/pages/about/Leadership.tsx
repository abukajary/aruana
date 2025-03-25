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

const Leadership = () => {
  const location = useLocation(); // React Router hook to get the current location
  const isChildMode = location.pathname.includes("/aruanakids");
  const adultSections: Section[] = [
    
    {
      title: "Руководства клиники:",
      content: [
        "Директор Малик Шынар",
        "Заместитель Директора Абдрахмановна Саида Абдрахмановна",
      ],

      image: "/boss.jpg",
    },
  ];

  const childrenSections: Section[] = [
    
    {
      title: "Блог директора-Малик Шынар",
      content: [
        "Почему я создала 'Aruana Kids'",
        "Меня часто спрашивают: почему я решила открыть детский реабилитационный центр? Ответ прост – я хочу, чтобы каждый ребенок, столкнувшийся с болезнью получил шанс на полноценную жизнь",
        "Путь к мечте",
        "Идея 'Aruana Kids' родилась не сразу. Я долго работала в медицинской сфере и видела, как семьи сталкиваются с трудностями реабилитации. Родители ищут лучшие методики, но не всегда могут найти качественную помощь рядом. Я понимала: реабилитация – это не просто лечение, а путь к новой жизни..",
        "Наша цель",
        "В 'Aruana Kids' мы создали среду, где дети восстанавливаются через движение, игру и любовь. Мы работаем не только с телом, но и с психологическим состоянием ребенка, помогая ему вновь поверить в себя.",
        "Я мечтаю, чтобы наш центр стал местом, где дети делают свои первые шаги. И я знаю – мы на правильном пути!",
        "Мы работаем  по программе NIDCAP",
      ],
      image: "/boss.jpg",
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

export default Leadership;
