import React from "react";
import { useParams } from "react-router-dom";
import rehabilitationPackages from "../locales/RehabPack";
import NavLinks from "../components/NavLinks";

const PackageDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const packageData = Object.values(rehabilitationPackages).find(
    (pkg) => pkg.id === id
  );

  if (!packageData) {
    return <p>Пакет не найден</p>;
  }

  return (
    <>
      <NavLinks />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{packageData.name}</h1>
        <p className="mb-2">
          <strong>Цена:</strong> {packageData.price.toLocaleString()} тг
        </p>
        <p className="mb-2">
          <strong>Длительность:</strong> {packageData.duration} дней
        </p>
        <p className="mb-4">
          <strong>Для кого:</strong> {packageData.targetPatients}
        </p>

        <h3 className="text-lg font-semibold mb-2">Что входит:</h3>
        <ul className="list-disc ml-6 mb-4">
          {packageData.included.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold mb-2">Дополнительные услуги:</h3>
        <ul className="list-disc ml-6 mb-4">
          {packageData.additionalServices.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h3 className="text-lg font-semibold mb-2">Программа:</h3>
        <h4 className="font-semibold">Медицинское сопровождение:</h4>
        <ul className="list-disc ml-6 mb-4">
          {packageData.program.medicalSupport.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <h4 className="font-semibold">ЛФК и физиотерапия:</h4>
        <ul className="list-disc ml-6 mb-4">
          {packageData.program.therapy.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <h4 className="font-semibold">Массаж и мануальная терапия:</h4>
        <ul className="list-disc ml-6 mb-4">
          {packageData.program.massageAndManualTherapy.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        {packageData.program.psychologicalSupport && (
          <>
            <h4 className="font-semibold">Психологическая поддержка:</h4>
            <ul className="list-disc ml-6 mb-4">
              {packageData.program.psychologicalSupport.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </>
        )}
        <h4 className="font-semibold">Диетическое питание:</h4>
        <p>{packageData.program.nutrition}</p>
      </div>
    </>
  );
};

export default PackageDetailsPage;
