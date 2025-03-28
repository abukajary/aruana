import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import NewsList from "./components/NewsSection";
import NewsDetail from "./components/NewsDetail";
import ContactPage from "./pages/Contacts";
import PatientInfoPage from "./pages/PatientInfoPage";
import AppointmentPage from "./pages/AppointmentPage";
import Leadership from "./pages/about/Leadership";
import Mission from "./pages/about/Mission";
import Values from "./pages/about/Values";
import Nidcap from "./pages/about/Nidcap";
import DoctorsList from "./components/Doctors/DoctorsList";
import DoctorPage from "./components/Doctors/DoctorProfile";
import RequirementsOverview from "./components/RequirementsOverview";
import OsmsGobmp from "./pages/about/osmsgobmp";
import Features from "./pages/about/Features";
import IntensiveCarePage from "./pages/IntensiveCarePage";
import PaidDepartmentPage from "./pages/PaidDepartmentPage";
// import JivoChat from "./components/JivoChat";


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

        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsDetail />} />


        <Route path="/aruanaclinic/contacts" element={<ContactPage />} />
        <Route path="/aruanakids/contacts" element={<ContactPage />} />

        
        <Route path="/aruanaclinic/leadBlog" element={<Leadership />} />
        <Route path="/aruanakids/leadBlog" element={<Leadership />} />

        
        <Route path="/aruanaclinic/values" element={<Values />} />
        <Route path="/aruanakids/values" element={<Values />} />

        
        <Route path="/aruanaclinic/mission" element={<Mission />} />
        <Route path="/aruanakids/mission" element={<Mission />} />

        
        <Route path="/aruanaclinic/nidcap" element={<Nidcap />} />
        <Route path="/aruanakids/nidcap" element={<Nidcap />} />

        <Route
          path="/aruanaclinic/requirements"
          element={<PatientInfoPage />}
        />
        <Route path="/aruanakids/requirements" element={<PatientInfoPage />} />


        <Route path="/appointment" element={<AppointmentPage />} />

        
        <Route path="/doctors" element={<DoctorsList />} />
        <Route path="/doctor/:id" element={<DoctorPage />} />

        
        <Route path="/reqsList" element={<RequirementsOverview />} />
        
        <Route path="/aruanaclinic/osmsgobmp" element={<OsmsGobmp />} />
        <Route path="/aruanaclinic/ourFeatures" element={<Features />} />
        <Route path="/aruanaclinic/intensiveCare" element={<IntensiveCarePage />} />
        <Route path="/aruanaclinic/paidDepartmentPage" element={<PaidDepartmentPage />} />

      </Routes>
      <Footer />
      {/* <JivoChat /> */}
    </Router>
  );
}

export default App;
