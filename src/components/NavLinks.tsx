import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const NavLinks = () => {
  const { mode } = useAppContext();
  const basePath = mode === "child" ? "/aruanakids" : "/aruanaclinic";

  const navLinks = [
    { key: "home", label: "Главная", url: basePath },
    { key: "about", label: "О нас", url: `${basePath}/about` },
    { key: "mission", label: "Миссия", url: `${basePath}/mission` },
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
      label: "Для родителей",
      url: `${basePath}/requirements`,
      hiddenModes: ["adult"],
    },
    { key: "news", label: "Новости", url: "/news" },
    {
      key: "osmsgobmp",
      label: "ОСМС и ГОБМП",
      url: `${basePath}/osmsgobmp`,
      hiddenModes: ["child"],
    },
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
      hiddenModes: ["child"],
    },
    {
      key: "IntensiveCarePage",
      label: "Палата интенсивной терапии ",
      url: `${basePath}/intensiveCare`,
      hiddenModes: ["child"],
    },
    {
      key: "paidDepartmentPage",
      label: "Платное отделение ",
      url: `${basePath}/paidDepartmentPage`,
      hiddenModes: ["child"],
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
