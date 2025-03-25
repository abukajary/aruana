import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();


  const logoSrc = "/aivory/знак/png/logo_aivory-04.png";

  const footerColumns = [
    {
      heading: t("footer.column1.heading", "О компании"),
      links: [
        { label: t("footer.column1.link1", "О нас"), url: "#" },
        { label: t("footer.column1.link2", "Наша команда"), url: "#" },
        { label: t("footer.column1.link3", "Карьера"), url: "#" },
        { label: t("footer.column1.link4", "Новости"), url: "#" },
      ],
    },
    {
      heading: t("footer.column2.heading", "Услуги"),
      links: [
        { label: t("footer.column2.link1", "ЛФК"), url: "#" },
        { label: t("footer.column2.link2", "Массаж"), url: "#" },
        { label: t("footer.column2.link3", "Цены"), url: "#" },
        { label: t("footer.column2.link4", "Отзывы"), url: "#" },
      ],
    },
    {
      heading: t("footer.column3.heading", "Поддержка"),
      links: [
        { label: t("footer.column3.link1", "FAQ"), url: "#" },
        { label: t("footer.column3.link2", "Контакты"), url: "#" },
        { label: t("footer.column3.link3", "Поддержка"), url: "#" },
        { label: t("footer.column3.link4", "Документы"), url: "#" },
      ],
    },
  ];

  const socialIcons = [
    { icon: <FaFacebookF className="text-white" />, url: "#" },
    { icon: <FaTwitter className="text-white" />, url: "#" },
    { icon: <FaInstagram className="text-white" />, url: "#" },
    { icon: <FaLinkedinIn className="text-white" />, url: "#" },
  ];

  return (
    <footer className="bg-[#f8f8f8] text-neutral-800 font-montserrat">
      <div className="bg-[#85848a] text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-2xl font-medium">
              {t("footer.cta.heading", "Хотите больше информации?")}
            </h4>
            <p className="text-lg">
              {t(
                "footer.cta.subheading",
                "Напишите нам для консультации и подробной информации."
              )}
            </p>
          </div>
          <button
            onClick={() => navigate("/appointment")}
            className="px-6 py-3 bg-white text-[#85848a] font-semibold rounded-lg hover:bg-gray-200 transition"
          >
            {t("footer.cta.button", "Написать")}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {footerColumns.map((col, index) => (
            <div key={index}>
              <h3 className="text-xl font-medium mb-4">{col.heading}</h3>
              <ul className="space-y-2">
                {col.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.url}
                      className="text-base opacity-60 hover:opacity-80 transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col items-start space-y-6">
            <h3 className="text-xl font-medium">
              {t("footer.social.heading", "Наши соц сети")}
            </h3>
            <div className="flex space-x-4">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="w-10 h-10 bg-[#d8d9da] rounded-full flex items-center justify-center hover:bg-[#b3b3b3] transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <div>
              <img src={logoSrc} alt="Logo" className="w h-auto" />
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
