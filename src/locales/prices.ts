export const prices = {
  ru: {
    adults: {
      outpatient: {
        title: "Амбулаторные услуги",
        headers: ["№", "Специалист", "Услуга", "Цена (тг)"],
        rows: [
          ["1", "Неврология", "Первичный прием невропатолога", "15 000"],
          ["", "Неврология", "Повторный прием невропатолога", "10 000"],
          ["2", "Кардиология", "Первичный прием кардиолога", "15 000"],
          ["", "Кардиология", "Повторный прием кардиолога", "10 000"],
          ["", "Кардиология", "ЭКГ+ расшифровка", "3 500"],
          ["3", "Травматология", "Первичный прием травматолога", "15 000"],
          ["", "Травматология", "Повторный прием травматолога", "10 000"],
          ["4", "Реабилитация", "Первичный прием реабилитолога", "15 000"],
          ["", "Реабилитация", "Повторный прием реабилитолога", "10 000"],
        ],
      },
      stationary: {
        title: "Стационарные услуги",
        headers: ["№", "Специалист", "Услуга", "Цена (тг)"],
        rows: [
          ["1", "Кардиология", "Реабилитационный пакет по кардиологии (10 дней)", "300 000"],
          ["2", "Неврология", "Реабилитационный пакет по неврологии (10 дней)", "300 000"],
          ["3", "Нейрохирургия", "Реабилитационный пакет по нейрохирургии (10 дней)", "300 000"],
          ["4", "Травматология", "Реабилитационный пакет по травматологии (10 дней)", "300 000"],
        ],
      },
    },
    kids: {
      outpatient: {
        title: "Амбулаторные услуги для детей",
        headers: ["№", "Специалист", "Услуга", "Цена (тг)"],
        rows: [
          ["1", "Неврология", "Первичный прием невропатолога", "15 000"],
          ["2", "Кардиология", "Первичный прием кардиолога", "15 000"],
          ["3", "Реабилитация", "Базовый реабилитационный пакет (10 дней)", "100 000"],
        ],
      },
    },
  },
  kz: {
    adults: {
      outpatient: {
        title: "Амбулаториялық қызметтер",
        headers: ["№", "Маман", "Қызмет", "Бағасы (тг)"],
        rows: [
          ["1", "Неврология", "Невропатологтың алғашқы қабылдауы", "15 000"],
          ["", "Неврология", "Невропатологтың қайталама қабылдауы", "10 000"],
          ["2", "Кардиология", "Кардиологтың алғашқы қабылдауы", "15 000"],
          ["", "Кардиология", "Кардиологтың қайталама қабылдауы", "10 000"],
          ["", "Кардиология", "ЭКГ + түсініктеме", "3 500"],
          ["3", "Травматология", "Травматологтың алғашқы қабылдауы", "15 000"],
          ["", "Травматология", "Травматологтың қайталама қабылдауы", "10 000"],
          ["4", "Реабилитация", "Реабилитологтың алғашқы қабылдауы", "15 000"],
          ["", "Реабилитация", "Реабилитологтың қайталама қабылдауы", "10 000"],
        ],
      },
      stationary: {
        title: "Стационарлық қызметтер",
        headers: ["№", "Маман", "Қызмет", "Бағасы (тг)"],
        rows: [
          ["1", "Кардиология", "Кардиология бойынша оңалту пакеті (10 күн)", "300 000"],
          ["2", "Неврология", "Неврология бойынша оңалту пакеті (10 күн)", "300 000"],
          ["3", "Нейрохирургия", "Нейрохирургия бойынша оңалту пакеті (10 күн)", "300 000"],
          ["4", "Травматология", "Травматология бойынша оңалту пакеті (10 күн)", "300 000"],
        ],
      },
    },
    kids: {
      outpatient: {
        title: "Балаларға арналған амбулаториялық қызметтер",
        headers: ["№", "Маман", "Қызмет", "Бағасы (тг)"],
        rows: [
          ["1", "Неврология", "Невропатологтың алғашқы қабылдауы", "15 000"],
          ["2", "Кардиология", "Кардиологтың алғашқы қабылдауы", "15 000"],
          ["3", "Реабилитация", "Негізгі оңалту пакеті (10 күн)", "100 000"],
        ],
      },
    },
  },
  en: {
    adults: {
      outpatient: {
        title: "Outpatient Services",
        headers: ["№", "Specialist", "Service", "Price (₸)"],
        rows: [
          ["1", "Neurology", "Initial neurologist consultation", "15 000"],
          ["", "Neurology", "Follow-up neurologist consultation", "10 000"],
          ["2", "Cardiology", "Initial cardiologist consultation", "15 000"],
          ["", "Cardiology", "Follow-up cardiologist consultation", "10 000"],
          ["", "Cardiology", "ECG + interpretation", "3 500"],
          ["3", "Traumatology", "Initial traumatologist consultation", "15 000"],
          ["", "Traumatology", "Follow-up traumatologist consultation", "10 000"],
          ["4", "Rehabilitation", "Initial rehabilitation consultation", "15 000"],
          ["", "Rehabilitation", "Follow-up rehabilitation consultation", "10 000"],
        ],
      },
      stationary: {
        title: "Inpatient Services",
        headers: ["№", "Specialist", "Service", "Price (₸)"],
        rows: [
          ["1", "Cardiology", "Cardiology rehabilitation package (10 days)", "300 000"],
          ["2", "Neurology", "Neurology rehabilitation package (10 days)", "300 000"],
          ["3", "Neurosurgery", "Neurosurgery rehabilitation package (10 days)", "300 000"],
          ["4", "Traumatology", "Traumatology rehabilitation package (10 days)", "300 000"],
        ],
      },
    },
    kids: {
      outpatient: {
        title: "Outpatient Services for Children",
        headers: ["№", "Specialist", "Service", "Price (₸)"],
        rows: [
          ["1", "Neurology", "Initial neurologist consultation", "15 000"],
          ["2", "Cardiology", "Initial cardiologist consultation", "15 000"],
          ["3", "Rehabilitation", "Basic rehabilitation package (10 days)", "100 000"],
        ],
      },
    },
  },
};