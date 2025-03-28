import React from "react";
import { useParams } from "react-router-dom";
import { news } from "../locales/news";
import NavLinks from "./NavLinks";

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = news.find((item) => item.id === parseInt(id ?? "", 10));

  if (!newsItem) {
    return <div className="text-center text-red-500">Новость не найдена</div>;
  }

  return (
    <>
      <NavLinks />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">{newsItem.title}</h1>
        <p className="text-sm text-gray-600 mb-4">{newsItem.date}</p>
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        {newsItem.fullText.map((value: string, index: number) => (
          <p key={index} className="text-gray-700 text-lg">
            {value}
          </p>
        ))}
      </div>
    </>
  );
};

export default NewsDetail;
