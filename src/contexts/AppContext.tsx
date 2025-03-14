import { createContext, useState, useContext, ReactNode } from "react";
import i18n from "../i18n";

export type Language = "ru" | "en" | "kz";
export type Mode = "adult" | "child";

interface AppContextProps {
  language: Language;
  mode: Mode;
  setLanguage: (lang: Language) => void;
  setMode: (mode: Mode) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLangState] = useState<Language>("ru");
  const [mode, setModeState] = useState<Mode>("adult");

  const setLanguage = (lang: Language) => {
    setLangState(lang);
    i18n.changeLanguage(lang);
  };

  const setMode = (mode: Mode) => {
    setModeState(mode);
  };

  return (
    <AppContext.Provider value={{ language, mode, setLanguage, setMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within an AppProvider");
  return context;
};
