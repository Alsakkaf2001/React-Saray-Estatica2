import React from "react";
import Layout from "../components/layout/Layout";
import SEOHead from "../components/ui/SEOHead";
import HeroSection from "../components/sections/HeroSection";
import TreatmentsSection from "../components/sections/TreatmentsSection";
import BeforeAfterGallery from "../components/sections/BeforeAfterGallery";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import { BEFORE_AFTER_IMAGES } from "../utils/constants";

const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Saray Estetic - Premium Aesthetic Clinic in Istanbul"
        description="Leading aesthetic clinic in Istanbul offering hair transplant, dental treatments, nose surgery, and cosmetic procedures with international standards. Book your free consultation today."
        keywords="hair transplant Istanbul, dental implants Turkey, rhinoplasty surgery, cosmetic surgery clinic, aesthetic treatments, medical tourism Turkey"
        url="https://sarayestetic.com"
      />
      <Layout>
        <HeroSection />
        <TreatmentsSection />
        <BeforeAfterGallery images={BEFORE_AFTER_IMAGES} />
        <AboutSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export default HomePage;
