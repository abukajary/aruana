import React from "react";

interface ButtonWith2GISLogoProps {
  isChildMode: boolean; // Проверка контекста: сайт для детей или взрослых
}

const ButtonWith2GISLogo: React.FC<ButtonWith2GISLogoProps> = ({ isChildMode }) => {
  const handleClick = () => {
    const url = isChildMode
      ? "https://go.2gis.com/SB4Xg" // Ссылка для детей
      : "https://go.2gis.com/Gxp8Q"; // Ссылка для взрослых

    window.open(url, "_blank"); // Открытие ссылки в новой вкладке
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-md shadow-md transition duration-300"
    >
      <img
        src="/2GIS_logo.svg.png" // Укажите путь к логотипу 2GIS
        alt="2GIS Logo"
        className="h-6 w-20 mr-2"
      />
      Перейти в 2GIS
    </button>
  );
};

export default ButtonWith2GISLogo;