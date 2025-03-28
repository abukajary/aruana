import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const NavLinks = () => {
  const { mode } = useAppContext();
  const basePath = mode === "child" ? "/aruanakids" : "/aruanaclinic";

  const navLinks = [
    { key: "home", label: "Главная", url: basePath },
    { key: "about", label: "О нас", url: `${basePath}/about` },
    { key: "mission", label: "Миссия", url: `${basePath}/mission` },
    { key: "values", label: "Ценности", url: `${basePath}/values` },
    { key: "leadBlog", label: "Блог Директора", url: `${basePath}/leadBlog` },
    {
      key: "nidcap",
      label: "Про NIDCAP",
      url: `${basePath}/NIDCAP`,
      hiddenModes: ["adult"],
    },
    { key: "services", label: "Услуги", url: `${basePath}/services` },
    { key: "doctors", label: "Наши Доктора", url: "/doctors" },
    {
      key: "requirements",
      label: mode === "child" ? "Для родителей" : "Для пациентов",
      url: `${basePath}/requirements`,
    },
    { key: "news", label: "Новости", url: "/news" },
    {
      key: "reqsList",
      label: "Обследование для госпитализации",
      url: "/reqsList",
      hiddenModes: ["child"],
    },
    {
      key: "ourFeatures",
      label: "Наши особенности",
      url: `${basePath}/ourFeatures`,
    },
    { key: "osmsgobmp", label: "ОСМС и ГОБМП", url: `${basePath}/osmsgobmp` },
    {
      key: "IntensiveCarePage",
      label: "Палата интенсивной терапии ",
      url: `${basePath}/intensiveCare`,
    },
    {
      key: "paidDepartmentPage",
      label: "Платное отделение ",
      url: `${basePath}/paidDepartmentPage`,
    },
    { key: "contacts", label: "Контакты", url: `${basePath}/contacts` },
  ];

  return (
    <nav
      className="w-full bg-[#36383a] text-[#d8d9da] p-4 grid gap-2 
                grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:justify-center lg:flex-wrap"
    >
      {navLinks
        .filter((link) => !link.hiddenModes?.includes(mode))
        .map(({ key, label, url }) => (
          <Link key={key} to={url} className="hover:underline">
            {label}
          </Link>
        ))}
    </nav>
  );
};

export default NavLinks;
