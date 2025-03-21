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
  const location = useLocation(); // React Router hook to get the current location
  const isChildMode = location.pathname.includes("/aruanakids");
  const adultSections: Section[] = [
    {
      title: "О нас",
      content: [
        "Многопрофильный центр медицинской реабилитации «ARUANA clinic» – это первый в Казахстане уникальный узкопрофильный центр, ориентированный на оказание высококлассной клинической реабилитационной помощи пациентам с заболеванием центральной и периферической нервной системы, перенесшим оперативные вмешательства на головном и спинном мозге, а также травматические повреждения опорно-двигательного аппарата и кардиохирургические вмешательства. Центр специализируется на диагностике, лечении и реабилитации фаз A, В и С, на основе доказательной и интегративной медицины. На протяжении пяти лет клиника регулярно демонстрирует высокие показатели успешности восстановительного лечения, поэтому пользуется авторитетностью в г.Алматы и за его пределами. ",
        "Почему наша клиника Ваш выбор:",
        "Спектр предоставляемых услуг: диагностика, лечение, реабилитация",
        "Клиника считается лучшей в своей области, используя собственные уникальные разработки и реабилитационные программы в рамках исследовательской деятельности направленных на разработку новых эффективных методик лечения, выводит состояние каждого пациента на принципиально новый уровень. Высококвалифицированные врачи со значительным стажем проводят диагностику и лечение различных заболеваний, что позволяет оказывать медицинскую помощь высочайшего уровня даже самым сложным пациентам. В лечебных программах используются современные инновационные методики и технологии. Центр воплощает в жизнь принцип индивидуального подхода. Независимо от того, является ли поставленный пациенту диагноз распространенным, или же это редкое сложное заболевание – каждый может рассчитывать на то, что лечащий врач создаст схему лечения, подходящую именно ему и учитывающую все индивидуальные особенности его организма. Каждая реабилитационная программа разрабатывается на основании конкретных клинических показаний и потребностей пациента. Центр неоднократно доказывал качество своей работы, успешно пройдя множество проверок контролирующих органов.",
      ],
      image: "/trust6.jpg",
    },
    {
      title: "Миссия",
      content: [
        "Восстановить здоровье, улучшить качество жизни и вернуть пациентов к нормальной жизни после болезни.",
        "Мы дарим счастье!",
      ],
      image: "/trust1.jpg",
    },
    {
      title: "Ценности",
      content: [
        "Наш профессионализм – это наша компетентность в науке и в опыте работы, дисциплина во всех аспектах, уважение коллегами и пациентам, сохранение высоких стандартов в медицине и финансах, личностный и профессиональный рост. Наша ответственность – это учитывая свои слабые и сильные стороны понимание своей самооценки, наше теплое и заботливое отношение к пациентам и внутреннее доброжелательное взаимодействие, а также личная ответственность каждого перед семьей, родными и обществом. Самое главное — это наше любимое дело, а не работа. Все вместе разделяем цели, миссию и ценности.",
      ],
      image: "/path-to-adult-image2.jpg",
    },
    {
      title: "Руководства клиники:",
      content: [
        "Директор Малик Шынар",
        "Заместитель Директора Абдрахмановна Саида Абдрахмановна",
      ],

      image: "/path-to-adult-image2.jpg",
    },
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
      title: "Миссия",
      content: [
        "Восстановить здоровье, улучшить качество жизни и вернуть пациентов к нормальной жизни после болезни",
      ],
      image: "/kidsTrust2.jpg",
    },
    {
      title: "Ценности",
      content: [
        "Наш профессионализм – это наша компетентность в науке и в опыте работы, дисциплина во всех аспектах, уважение коллегами и пациентам, сохранение высоких стандартов в медицине и финансах, личностный и профессиональный рост. Наша ответственность – это учитывая свои слабые и сильные стороны понимание своей самооценки, наше теплое и заботливое отношение к пациентам и внутреннее доброжелательное взаимодействие, а также личная ответственность каждого перед семьей, родными и обществом. Самое главное — это наше любимое дело, а не работа. Все вместе разделяем цели, миссию и ценности.",
      ],
      image: "/kidsTrust5.jpg",
    },
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
      image: "/kidsTrust6.jpg",
    },
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
        <h1 className="text-4xl font-bold mb-8">
          {isChildMode ? "Для детей" : "Для взрослых"}
        </h1>
        <AboutSection sections={sections} />
      </div>
    </>
  );
};

export default AboutPage;
