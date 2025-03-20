import { ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footerButtons?: { label: string; onClick: () => void; className?: string }[];
}

const Popup = ({ isOpen, onClose, title, children, footerButtons = [] }: PopupProps) => {
  useEffect(() => {
    // Отключение прокрутки при открытом попапе
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Очистка стилей при размонтировании компонента
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Улучшенный задний фон с градиентом */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Содержимое попапа */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-white p-6 rounded-2xl shadow-2xl max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри
          >
            {/* Кнопка "Закрыть" */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
              onClick={onClose}
              aria-label="Close popup"
            >
              <X size={24} aria-hidden="true" />
            </button>

            {/* Заголовок */}
            {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}

            {/* Основное содержимое */}
            <div>{children}</div>

            {/* Нижние кнопки */}
            {footerButtons.length > 0 && (
              <div className="mt-4 flex justify-end space-x-2">
                {footerButtons.map((button, index) => (
                  <button
                    key={index}
                    onClick={button.onClick}
                    className={`px-4 py-2 rounded ${button.className}`}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
