import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useAppContext } from '../contexts/AppContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { mode } = useAppContext();

  const basePath = mode === 'child' ? '/aruanakids' : '/aruanaclinic';

  const footerLinks = [
    { key: 'home', label: t('footer.home', 'Главная'), url: basePath },
    { key: 'about', label: t('footer.about', 'О нас'), url: `${basePath}/about` },
    { key: 'services', label: t('footer.services', 'Услуги'), url: `${basePath}/services` },
    { key: 'doctors', label: t('footer.doctors', 'Наши Доктора'), url: '/doctors' },
    { key: 'news', label: t('footer.news', 'Новости'), url: '/news' },
    { key: 'contacts', label: t('footer.contacts', 'Контакты'), url: `${basePath}/contacts` },
  ];

  const socialIcons = mode === 'child'
  ? [
      { key: 'facebook', icon: <FaFacebookF />, url: 'https://www.facebook.com/aruanakids' },
      { key: 'instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/aruanakids' },
      { key: 'twitter', icon: <FaTwitter />, url: 'https://www.twitter.com/aruanakids' },
    ]
  : [
      { key: 'facebook', icon: <FaFacebookF />, url: 'https://www.facebook.com/aruanaclinic' },
      { key: 'instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/aruanaclinic' },
      { key: 'linkedin', icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/aruanaclinic' },
      { key: 'twitter', icon: <FaTwitter />, url: 'https://www.twitter.com/aruanaclinic' },
    ];

  return (
    <footer className="bg-[#1d1f20] text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Колонка 1: Логотип и описание */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/aivory/знак/png/logo_aivory_Монтажная область 1.png" alt="Aruana Logo" className="w-32 h-auto mb-4" />
          <p className="text-center md:text-left text-sm text-gray-400">
            {t('footer.description', 'Ваше здоровье — наша главная цель! Мы готовы заботиться о вас и вашей семье.')}
          </p>
        </div>

        {/* Колонка 2: Ссылки на страницы */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">{t('footer.links', 'Навигация')}</h3>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.key}>
                <Link
                  to={link.url}
                  className="text-sm text-gray-400 hover:text-white transition duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Колонка 3: Социальные сети */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">{t('footer.follow_us', 'Следите за нами')}</h3>
          <div className="flex space-x-4">
            {socialIcons.map((icon) => (
              <a
                key={icon.key}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-gray-500 transition duration-200"
              >
                {icon.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {t('footer.rights', 'Все права защищены')}
      </div>
    </footer>
  );
};

export default Footer;