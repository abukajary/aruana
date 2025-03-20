import { useAppContext } from "../contexts/AppContext";
import NavLinks from "../components/NavLinks";

const FaqKids = () => {
  const faqs = [
    {
      question: "Что такое NIDCAP?",
      answer:
        "NIDCAP (Neonatal Individualized Developmental Care and Assessment Program) — это программа индивидуального ухода и развития недоношенных и больных новорожденных. Она помогает создать комфортные условия, минимизировать стресс и поддерживать естественное развитие малыша.",
    },
    {
      question: "Кому подходит метод NIDCAP?",
      answer:
        "Программа разработана для недоношенных детей, а также малышей с неврологическими нарушениями, кардиологическими проблемами или после тяжелых родов.",
    },
    {
      question: "Как работает NIDCAP?",
      answer:
        "Метод основан на наблюдении за поведением ребенка: Анализируется, как малыш реагирует на свет, звук, прикосновения. Специалисты корректируют среду, чтобы снизить нагрузку на нервную систему. Родители активно вовлекаются в уход, помогая ребенку адаптироваться.",
    },
    {
      question: "В чем отличие NIDCAP от стандартного ухода?",
      answer:
        "В традиционных подходах основное внимание уделяется медицинскому уходу. В NIDCAP упор делается на снижение стресса у ребенка и создание максимально естественных условий развития даже в условиях интенсивной терапии.",
    },
    {
      question: "Какие преимущества у этого метода?",
      answer:
        "✅ Улучшает развитие мозга и нервной системы. ✅ Снижает уровень стресса и боли у ребенка. ✅ Ускоряет набор веса и развитие моторики. ✅ Способствует лучшей эмоциональной связи с родителями. ✅ Снижает риск осложнений, связанных с недоношенностью.",
    },
    {
      question: "Как родители участвуют в NIDCAP?",
      answer:
        'Метод включает активное участие родителей: Обучение правильному уходу за малышом. Создание благоприятных условий дома. Контакт "кожа к коже" (метод кенгуру). Участие в кормлении и развитии сенсорных навыков.',
    },
    {
      question: "Можно ли применять NIDCAP дома?",
      answer:
        "Да! После выписки специалисты обучают родителей, как адаптировать принципы NIDCAP в домашних условиях, чтобы поддерживать развитие ребенка.",
    },
    {
      question: "Как записаться на программу?",
      answer:
        "Свяжитесь с нами, чтобы пройти первичную консультацию и узнать. Наша большая команда всегда готовы помочь!!!",
    },
  ];

  return (
    <div className="mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Для родителей (Ответы на частые вопросы)
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <h2 className="text-xl font-medium mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const FaqAdult = () => {
  const faqs = [
    {
      question: "dsa",
      answer: "dsa"
    },
  ]
  return (
    <div className="mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Для Пациентов (Ответы на частые вопросы)
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <h2 className="text-xl font-medium mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PatientInfoPage = () => {
  const { mode } = useAppContext();

  return (
    <>
      <NavLinks />
      <div className="w-full p-4 md:p-6 lg:px-16">
        {mode === "child" ? <FaqKids /> : <FaqAdult />}
      </div>
    </>
  );
};

export default PatientInfoPage;
