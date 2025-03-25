import React, { useEffect } from "react";
declare global {
    interface Window {
      jivo_init?: boolean;
    }
  }
const JivoChat: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://code.jivo.ru/widget/f75Ewb49P2"; // Замените на ваш уникальный код JivoSite
    script.async = true;
    script.onload = () => {
      // Инициализация JivoSite
      window.jivo_init = true;
    };
    document.body.appendChild(script);

    return () => {
      // Удаление скрипта при размонтировании компонента
      document.body.removeChild(script);
    };
  }, []);

  return null; // Компонент не отображает ничего, он просто добавляет скрипт
};

export default JivoChat;