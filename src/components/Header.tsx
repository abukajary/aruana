import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  const { mode } = useAppContext();

  const basePath = mode === "child" ? "/aruanakids" : "/aruanaclinic";
  const logoSrc =
    mode === "child"
      ? "/aruana_kids_logo-03 1.png"
      : "/logo_aivory_Монтажная область 1 копия 1@2x.png";
  const instagramUrl =
    basePath === "/aruanaclinic"
      ? "https://www.instagram.com/aruanakids/"
      : "https://www.instagram.com/aruana_clinic/";

  return (
    <header className="w-full bg-[#85848a] text-white p-4 flex flex-col items-center md:flex-row justify-between md:p-6 lg:px-16">
      <div className="flex items-center justify-between w-full">
        <Link to={basePath}>
          <img src={logoSrc} className="w-20 md:w-56 h-auto" alt="Logo" />
        </Link>
        <div className="flex items-center space-x-4">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <FaInstagram
              size={24}
              className="hover:opacity-80 transition-opacity"
            />
          </a>
          <div className="text-white font-bold">
            <a href="tel:+77710309653" className="hover:underline">
              8 (771) 030 96 53
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
