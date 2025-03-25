import React from "react";
import { Link } from "react-router-dom";
import { news } from "../locales/news";
import NavLinks from "./NavLinks";

const NewsList: React.FC = () => {
  return (
    <>
      <NavLinks />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-center mb-6">Новости и акции</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item) => (
            <div key={item.id} className="bg-gray-100 rounded-lg shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{item.date}</p>
                <p className="text-gray-700 text-sm">{item.description}</p>
                <Link
                  to={`/news/${item.id}`}
                  className="text-blue-500 font-semibold hover:underline mt-2 block"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsList;
