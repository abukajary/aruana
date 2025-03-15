import { useAppContext } from "../contexts/AppContext";

const AboutPage = () => {
  const { mode } = useAppContext()

  return (
    <div className={`min-h-screen p-6 flex flex-col items-center ${mode === "adult" ? "bg-[#d8d9da]" : "bg-[#EFF2E1]"}`}>
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center">О нас</h1>
        <img
          src={mode === "adult" ? "/mainclinic.jpg" : "/mainkids.jpg"}
          alt="О нас"
          className="w-full h-64 object-cover rounded-lg shadow-lg mt-6"
        />
        <p className="mt-6 text-lg text-center">
          {mode === "adult"
            ? "Реабилитационный центр Aruana – это многопрофильный центр медицинской реабилитации, специализирующийся на восстановлении пациентов после заболеваний нервной системы, травм, кардиохирургических вмешательств и ортопедических операций."
            : "Детский реабилитационный центр Aruana Kids – это специализированное учреждение, помогающее детям с неврологическими, ортопедическими и респираторными проблемами восстановить здоровье и развиваться."}
        </p>
        <h2 className="text-2xl font-semibold mt-6 text-center">Миссия и ценности</h2>
        <p className="mt-4 text-center">
          {mode === "adult"
            ? "Наша миссия – восстановить здоровье, улучшить качество жизни и вернуть пациентов к нормальной жизни после болезни."
            : "Мы верим, что каждое дитя заслуживает счастливого детства и крепкого здоровья."}
        </p>
        <h2 className="text-2xl font-semibold mt-6 text-center">Почему выбирают нас?</h2>
        <ul className="mt-4 list-disc pl-5 text-lg">
          {mode === "adult" ? (
            <>
              <li>Современные методики и оборудование</li>
              <li>Опытные специалисты</li>
              <li>Индивидуальный подход</li>
              <li>Комфортные условия реабилитации</li>
            </>
          ) : (
            <>
              <li>Индивидуальные программы восстановления</li>
              <li>Поддержка родителей и обучение</li>
              <li>ЛФК, массаж, физиотерапия</li>
              <li>Комплексная диагностика</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
