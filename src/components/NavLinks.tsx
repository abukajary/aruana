import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../contexts/AppContext";

const NavLinks = () => {
  const { t } = useTranslation();
  const { mode } = useAppContext();

  const basePath = mode === "child" ? "/aruanakids" : "/aruanaclinic";

  const navLinks = [
    { key: "home", label: t("nav.home", "Главная"), url: basePath },
    { key: "about", label: t("nav.about", "О нас"), url: `${basePath}/about` },
    {
      key: "mission",
      label: t("nav.mission", "Миссия"),
      url: `${basePath}/mission`,
    },
    {
      key: "values",
      label: t("nav.values", "Ценности"),
      url: `${basePath}/values`,
    },
    {
      key: "leadBlog",
      label: t("nav.leadBlog", "Блог Директора"),
      url: `${basePath}/leadBlog`,
    },
    {
      key: "nidcap",
      label: t(
        mode === "child" ? "nav.nidcap" : "nav.nidcap2",
        mode === "child" ? "Про NIDCAP" : ""
      ),
      url: `${basePath}/NIDCAP`,
    },

    {
      key: "services",
      label: t("nav.services", "Услуги"),
      url: `${basePath}/services`,
    },
    {
      key: "doctors",
      label: t("nav.serdoctorsvices", "Наши Доктора"),
      url: `/doctors`,
    },
    {
      key: "requirements",
      label: t(
        mode === "child" ? "nav.forParents" : "nav.forPatients",
        mode === "child" ? "Для родителей" : "Для пациентов"
      ),
      url: `${basePath}/requirements`,
    },
    { key: "news", label: t("nav.news", "Новости"), url: `/news` },
    {
      key: "contacts",
      label: t("nav.contacts", "Контакты"),
      url: `${basePath}/contacts`,
    },
  ];

  return (
    <nav className="w-full bg-[#36383a] text-[#d8d9da] p-4 grid grid-cols-2 md:flex md:justify-center gap-2 text-nowrap">
      {navLinks.map((link) => (
        <Link key={link.key} to={link.url} className="hover:underline">
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
