export interface Service {
  id: number;
  category: string;
  serviceName: string;
  ageGroup?: string;
  price: number;
}
export const priceList: Service[] = [
  {
    id: 1,
    category: "Неврология",
    serviceName: "Первичный прием невропатолога",
    price: 15000,
  },
  {
    id: 2,
    category: "Неврология",
    serviceName: "Повторный прием невропатолога",
    price: 10000,
  },
  {
    id: 3,
    category: "Кардиология",
    serviceName: "Первичный прием кардиолога",
    price: 15000,
  },
  {
    id: 4,
    category: "Кардиология",
    serviceName: "Повторный прием кардиолога",
    price: 10000,
  },
  {
    id: 5,
    category: "Массажи",
    serviceName: "Общий массаж",
    ageGroup: "от 0-3 лет",
    price: 5000,
  },
  {
    id: 6,
    category: "Массажи",
    serviceName: "Общий массаж",
    ageGroup: "от 3-7 лет",
    price: 7000,
  },
];
