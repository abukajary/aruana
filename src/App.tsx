// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import InstagramNews from "./components/NewsSection";
import ContactPage from "./pages/Contacts";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Главная страница – одинаковая для взрослых и детей */}
        <Route path="/" element={<Home />} />
        <Route path="/aruanaclinic" element={<Home />} />
        <Route path="/aruanakids" element={<Home />} />

        {/* Страница "О нас" для каждой базовой ссылки */}
        <Route path="/aruanaclinic/about" element={<About />} />
        <Route path="/aruanakids/about" element={<About />} />

        {/* Страница "Услуги" для каждой базовой ссылки */}
        <Route path="/aruanaclinic/services" element={<ServicesPage />} />
        <Route path="/aruanakids/services" element={<ServicesPage />} />
        
        <Route path="/aruanaclinic/news" element={<InstagramNews />} />
        <Route path="/aruanakids/news" element={<InstagramNews />} />
        
        <Route path="/aruanaclinic/contacts" element={<ContactPage />} />
        <Route path="/aruanakids/contacts" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
