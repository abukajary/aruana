import React from "react";
import { useNavigate } from "react-router-dom";

const PromoBanner: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/services/");
  };

  return (
    <div
      style={{
        backgroundColor: "#eeedef",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ color: "#85848a", margin: "0 0 10px" }}>
        Хотите узнать больше об услугах?
      </h2>
      <p style={{ color: "#85848a", margin: "0 0 20px" }}>
        Посетите нашу страницу услуг, чтобы найти то, что нужно именно вам!
      </p>
      <button
        onClick={handleNavigation}
        style={{
          padding: "10px 20px",
          backgroundColor: "#85848a",
          color: "#eeedef",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Узнать больше
      </button>
    </div>
  );
};

export default PromoBanner;
