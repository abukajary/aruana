import React from "react";
import { Link } from "react-router-dom";
import { doctors } from "../../locales/doctor";
import NavLinks from "../NavLinks";
import { useAppContext } from "../../contexts/AppContext";

const DoctorsList: React.FC = () => {
  const { mode } = useAppContext();

  return (
    <>
      <NavLinks />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Наши врачи</h1>
        <ul className="space-y-6">
          {doctors
            .filter((doctor) => doctor.isKids === (mode === "child"))
            .map((doctor) => (
              <li key={doctor.id} className="flex items-center border-b pb-4">
                <div className="w-24 h-24 overflow-hidden rounded-full flex-shrink-0 bg-gray-200">
                  {doctor.image ? (
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      Нет фото
                    </div>
                  )}
                </div>
                <div className="ml-6 flex-1">
                  <h2 className="text-xl font-semibold">{doctor.name}</h2>
                  <p className="text-gray-700">{doctor.specialty}</p>
                  <p className="text-gray-500">{doctor.experience}</p>

                  <Link
                    to={`/doctor/${doctor.id}`}
                    className="text-blue-500 underline mt-2 block"
                  >
                    Подробнее о враче
                  </Link>
                </div>
              </li>
            ))}
        </ul>
        
      </div>
    </>
  );
};

export default DoctorsList;
