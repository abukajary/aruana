import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import CertificatesSection from "../components/CertificatesSection";
import HighlightedServices from "../components/HighlightedServices";
import NewsSection from "../components/NewsSection";
import ContactForm from "../components/ContactForm";
import NavLinks from "../components/NavLinks";

const Home = () => {
  return (
    <>
      <Hero />
      <NavLinks />
      <TrustSection />
      {/* <DirectionsSection /> */}
      <CertificatesSection />
      <HighlightedServices />
      <NewsSection />
      <ContactForm />
    </>
  );
};

export default Home;
