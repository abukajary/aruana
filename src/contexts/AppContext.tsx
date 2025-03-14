import { createContext, useState, useContext, ReactNode, useMemo, useEffect } from "react";
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
  const [language, setLanguage] = useState<Language>("ru");
  const [mode, setMode] = useState<Mode>("adult");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]); 

  const contextValue = useMemo(
    () => ({ language, mode, setLanguage, setMode }),
    [language, mode]
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};


export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within an AppProvider");
  return context;
};
