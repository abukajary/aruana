import React from 'react';
import { useParams } from 'react-router-dom';
import { doctors } from '../../locales/doctor';
import NavLinks from '../NavLinks';

const DoctorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const doctor = doctors.find((doc) => doc.id === parseInt(id ?? ''));

  if (!doctor) {
    return <div className="text-center text-red-500">Доктор не найден</div>;
  }

  return (
    <>
    <NavLinks />
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="flex items-start mb-6">
        <div className="w-32 h-32 overflow-hidden rounded-full">
          <img src={doctor.image} alt={doctor.name} title={doctor.name} />
        </div>
        <div className="ml-6">
          <h1 className="text-2xl font-bold">{doctor.name}</h1>
          <p className="text-gray-700">
            {doctor.experience}, <span className="text-blue-500">{doctor.specialty}</span>
          </p>
          <p className="text-gray-600 mt-2">{doctor.title}</p>
          
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold">Контактная информация</h2>
        <p className="text-gray-600 mt-2">{doctor.address}</p>
        <p className="text-gray-600 mt-2">{doctor.schedule}</p>
        <p className="text-gray-600">
          Стоимость: <span className="font-bold">{doctor.price}</span>
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold">Опыт работы</h2>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          {doctor.workExperience.map((exp, idx) => (
            <li key={idx}>{exp}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold">Образование</h2>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          {doctor.education.map((edu, idx) => (
            <li key={idx}>{edu}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default DoctorPage;