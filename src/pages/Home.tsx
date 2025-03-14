import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import DirectionsSection from "../components/DirectionSection";
import CertificatesSection from "../components/CertificatesSection";
import HighlightedServices from "../components/HighlightedServices";
import NewsSection from "../components/NewsSection";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustSection />
      <DirectionsSection />
      <CertificatesSection />
      <HighlightedServices />
      <NewsSection />
      <ContactForm />
    </>
  );
};

export default Home;
