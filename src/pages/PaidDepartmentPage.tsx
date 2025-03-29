import React from "react";
import NavLinks from "../components/NavLinks";
import rehabilitationPackages from "../locales/RehabPack";
import { Link } from "react-router-dom";

const RehabPackages = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Реабилитационные пакеты
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.values(rehabilitationPackages).map((pkg) => (
          <div
            key={pkg.name}
            className="p-4 border rounded-lg shadow-lg flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold">{pkg.name}</h2>
              <p className="text-gray-600 mb-4">{pkg.targetPatients}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-4">{pkg.price} тг</p>
              <Link
                to={`/aruanaclinic/paidDepartmentPage/${pkg.id}`}
                className="border-2 px-4 py-2 w-32 self-center rounded-md cursor-pointer"
              >
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PaidDepartmentPage: React.FC = () => {
  return (
    <>
      <NavLinks />
      <div className="container mx-auto px-6 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Платное отделение</h1>
        </header>
        <main className="space-y-4 text-gray-800">
          <p>Платное отделение Aruana Clinic</p>
          <p>
            В платном отделении Aruana Clinic пациенты могут получить
            высококачественную медицинскую помощь без ожидания в очереди и без
            необходимости оформления направлений. Мы предлагаем индивидуальный
            подход, комфортные условия и доступ к современным методам
            диагностики и реабилитации.
          </p>
          <p>Преимущества платного отделения:</p>
          <ul className="list-none ml-4 space-y-2">
            <li>
              ✅ Быстрая запись – без длительного ожидания и бюрократических
              процедур.
            </li>
            <li>
              ✅ Индивидуальные программы – персонализированные реабилитационные
              курсы, разработанные с учетом состояния пациента.
            </li>
            <li>
              ✅ Современные технологии – доступ к инновационным методам
              восстановления.
            </li>
            <li>
              ✅ Повышенный комфорт – удобные палаты, дружественная атмосфера и
              внимательный персонал.
            </li>
            <li>
              ✅ Консультации ведущих специалистов – возможность выбора врача и
              удобного графика приема.
            </li>
          </ul>
          <p>Какие услуги доступны?</p>
          <ul className="list-disc list-inside">
            <li>Комплексная реабилитация после инсульта, инфаркта, травм.</li>
            <li>Восстановление после операций и тяжелых заболеваний.</li>
            <li>Оздоровительные и профилактические программы.</li>
            <li>Физиотерапия, массаж, ЛФК и другие методы восстановления.</li>
          </ul>
          <p>
            Мы заботимся о вашем здоровье и комфорте. В платном отделении Aruana
            Clinic вы получите медицинскую помощь, соответствующую высоким
            стандартам качества.
          </p>
          <p>📞 Запись и консультации: 8 (7272) 62 12 08</p>
        </main>
        <RehabPackages />
      </div>
    </>
  );
};

export default PaidDepartmentPage;
