import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import InstagramNews from "./components/NewsSection";
import ContactPage from "./pages/Contacts";
import PatientInfoPage from "./pages/PatientInfoPage";
import AppointmentPage from "./pages/AppointmentPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aruanaclinic" element={<Home />} />
        <Route path="/aruanakids" element={<Home />} />

        <Route path="/aruanaclinic/about" element={<About />} />
        <Route path="/aruanakids/about" element={<About />} />

        <Route path="/aruanaclinic/services" element={<ServicesPage />} />
        <Route path="/aruanakids/services" element={<ServicesPage />} />

        <Route path="/aruanaclinic/news" element={<InstagramNews />} />
        <Route path="/aruanakids/news" element={<InstagramNews />} />

        <Route path="/aruanaclinic/contacts" element={<ContactPage />} />
        <Route path="/aruanakids/contacts" element={<ContactPage />} />

        <Route
          path="/aruanaclinic/requirements"
          element={<PatientInfoPage />}
        />
        <Route path="/aruanakids/requirements" element={<PatientInfoPage />} />


        <Route path="/appointment" element={<AppointmentPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
