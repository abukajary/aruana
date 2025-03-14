import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/AppContext";
import { HiOutlineMenu, HiOutlineChevronDown } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { mode, setLanguage } = useAppContext();
  const [langDropdown, setLangDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const basePath = mode === "child" ? "/aruanakids" : "/aruanaclinic";

  const logoSrc = mode === "child" ? "/aruana_kidsx1.png" : "/aruanax1.png";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lang: string) => {
    setLanguage(lang as any);
    i18n.changeLanguage(lang);
    setLangDropdown(false);
  };

  const navLinks = [
    { key: "home", label: t("nav.home", "Главная"), url: basePath },
    { key: "about", label: t("nav.about", "О нас"), url: `${basePath}/about` },
    { key: "services", label: t("nav.services", "Услуги"), url: `${basePath}/services` },
    {
      key: "requirements",
      label: t(
        mode === "child" ? "nav.forParents" : "nav.forPatients",
        mode === "child" ? "Для родителей" : "Для пациентов"
      ),
      url: `${basePath}/requirements`
    },
    { key: "news", label: t("nav.news", "Новости"), url: `${basePath}/news` },
    { key: "contacts", label: t("nav.contacts", "Контакты"), url: `${basePath}/contacts` },
  ];
  

  return (
    <header className="w-full bg-[#85848a] text-white p-4 md:p-6 lg:px-16 flex items-center justify-between relative">
      <Link to={basePath}>
        <img src={logoSrc} className="w-24 md:w-36 lg:w-44 h-auto" alt="Logo" />
      </Link>
      <nav className="hidden md:flex space-x-6 text-lg font-medium">
        {navLinks.map((link) => (
          <Link key={link.key} to={link.url} className="hover:underline">
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} className="hover:opacity-80 transition-opacity" />
        </a>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setLangDropdown(!langDropdown)}
            className="flex items-center hover:opacity-80"
          >
            {t("nav.lang", "Язык")} <HiOutlineChevronDown size={20} className="ml-1" />
          </button>
          {langDropdown && (
            <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-md z-10">
              <button
                onClick={() => changeLanguage("ru")}
                className="block px-4 py-2 w-full text-left hover:bg-gray-200"
              >
                Рус
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className="block px-4 py-2 w-full text-left hover:bg-gray-200"
              >
                Eng
              </button>
              <button
                onClick={() => changeLanguage("kz")}
                className="block px-4 py-2 w-full text-left hover:bg-gray-200"
              >
                Қаз
              </button>
            </div>
          )}
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          <HiOutlineMenu size={28} />
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#85848a] text-white p-4 md:hidden">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.url}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
