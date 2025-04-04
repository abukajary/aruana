import { useLocation } from "react-router-dom";
import NavLinks from "../components/NavLinks";

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

const AboutPage = () => {
  const location = useLocation();
  const isChildMode = location.pathname.includes("/aruanakids");
  const adultSections: Section[] = [
    {
      title: "О нас",
      content: [
        "Добро пожаловать в Aruana Clinic – специализированный медицинский центр, который объединяет передовые методы диагностики, лечения и реабилитации в области кардиологии, неврологии и травматологии. Мы стремимся помочь пациентам восстановить здоровье, улучшить качество жизни и вернуть активность после серьезных заболеваний и травм.",
      ],
      image: "/trust6.jpg",
    },
    {
      title: "Ценности",
      content: [
        "Наш профессионализм – это наша компетентность в науке и в опыте работы, дисциплина во всех аспектах, уважение коллегами и пациентам, сохранение высоких стандартов в медицине и финансах, личностный и профессиональный рост. Наша ответственность – это учитывая свои слабые и сильные стороны понимание своей самооценки, наше теплое и заботливое отношение к пациентам и внутреннее доброжелательное взаимодействие, а также личная ответственность каждого перед семьей, родными и обществом. Самое главное — это наше любимое дело, а не работа. Все вместе разделяем цели, миссию и ценности.",
      ],
      image: "/path-to-adult-image2.jpg",
    }
  ];

  const childrenSections: Section[] = [
    {
      title: "О нас",
      content: [
        "Многопрофильный центр медицинской реабилитации «ARUANA clinic» (далее Центр) на протяжений пяти лет профессионально оказывает квалифицированные медицинские услуги взрослому населению г. Алматы, по части реабилитации в рамках программы ОСМС по шести направлениям – неврология-нейрохирургия, кардиология-кардиохирургия и травматология-ортопедия. ",
        "Также с начала текущего года за счет ресурсов Центра запущено детское отделение ранней диагностики и ранней реабилитации младенцев от 0-1 и детей от 1-3 лет на базе Научного центра акушерства, гинекологии и перинатологии. Запуск проекта основывается на научном международном опыте, который позволяет совместить   высокотехнологическую   медицинскую   помощь и индивидуализированный  подход  к  развитию  ребенка  в  отделении интенсивной терапии новорожденных (ОИТН).",
        "Создаваемое нами новое отделение интенсивной терапии новорожденных (ОИТН) в стенах НЦАГиП будет предусматривать тактику NIDCAP (Newborn Individualized Developmental Care and Assessment Program) - программа развивающего ухода для отделений реанимации и интенсивной терапии для недоношенных детей Американской академии педиатрии.",
        "В коллаборации с НЦГАИП Центр оказывает реабилитационные услуги пациентам с ранними    признаками    повреждения    центральной    нервной системы и потенциально влияет   на развитие младенцев высокого риска с первых дней его жизни. Работа совместной междисциплинарной команды направлена на улучшение постнатального развития, физиологических, неврологических, поведенческих навыков младенца, с обязательным участие в ней родителей.",
        "Центр предусматривает свою траекторию развития, которая   отличается от общепринятых представлений об этом методе. Тактика раннего вмешательства подбирается индивидуально, исходя из уровня развития каждого ребенка и толерантности к ранней реабилитации. Госпитализация из родильных домов города Алматы и за его пределами в ОИТН возможно после стабилизации основных жизненно важных функций младенца с нормальными  показатели   метаболизма и стабильной   центральной   и  периферической  гемодинамикой для проведения индивидуального ухода и развития  у глубоконедоношенных  детей. Постоянное тщательное клиническое, мониторное наблюдение за ребенком обеспечивается. Родители могут находиться все время рядом с ребёнком в комфортабельных в одно-двухместных палатах и пятиразовым питанием.",
        "Центром предусмотрен патронаж со стационарным сопровождением от 0-1 года и амбулаторно от 1-3 лет. Реабилитационные услуги в Центре в мультидисциплинарном формате обеспечиваются профессиональными реабилитологами и молодыми врачами, которые помимо практики имеют возможность обучаться у именитых партнеров Центра за пределами Казахстана",
        "Внедрение принципов NIDCAP — это постепенный, глубокий процесс изменения системы  здравоохранения,  который  затрагивает  все  аспекты ухода за новорожденным в ОИТН.",
      ],
      image: "/kidsTrust7.jpg",
    },
    {
      title: "Ценности",
      content: [
        "Наш профессионализм – это наша компетентность в науке и в опыте работы, дисциплина во всех аспектах, уважение коллегами и пациентам, сохранение высоких стандартов в медицине и финансах, личностный и профессиональный рост. Наша ответственность – это учитывая свои слабые и сильные стороны понимание своей самооценки, наше теплое и заботливое отношение к пациентам и внутреннее доброжелательное взаимодействие, а также личная ответственность каждого перед семьей, родными и обществом. Самое главное — это наше любимое дело, а не работа. Все вместе разделяем цели, миссию и ценности.",
      ],
      image: "/kidsTrust5.jpg",
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

export default AboutPage;
