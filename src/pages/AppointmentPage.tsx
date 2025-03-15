import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

const AppointmentPage = () => {
  const { mode } = useAppContext()
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Ваша заявка отправлена! Мы свяжемся с вами.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className={`min-h-screen p-6 flex flex-col items-center`}>
      <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center">Запись на прием</h1>
        <p className="mt-4 text-center text-lg">
          {mode === "adult"
            ? "Запишитесь на консультацию в реабилитационный центр Aruana."
            : "Оставьте заявку на консультацию в детский реабилитационный центр Aruana Kids."}
        </p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Ваш телефон"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Дополнительные комментарии"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            rows={4}
          ></textarea>
          <button type="submit" className="w-full p-3 bg-[#d8d9da] cursor-pointer font-bold rounded-lg">
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPage;
