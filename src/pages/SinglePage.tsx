import React from "react";
import Layout from "../components/layout/Layout";
import SEOHead from "../components/ui/SEOHead";
import HeroSection from "../components/sections/HeroSection";
import TreatmentsSection from "../components/sections/TreatmentsSection";
import BeforeAfterGallery from "../components/sections/BeforeAfterGallery";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import { BEFORE_AFTER_IMAGES } from "../utils/constants";

interface SinglePageProps {
  onNavigateToBlog?: () => void;
}

const SinglePage: React.FC<SinglePageProps> = ({ onNavigateToBlog }) => {
  const handleNavigation = (href: string) => {
    if (href === "/blog" && onNavigateToBlog) {
      onNavigateToBlog();
    } else if (href.startsWith("/#")) {
      // Navigate to home page with hash (from blog page)
      const hash = href.substring(1); // Remove the leading /
      window.history.pushState({}, "", href);
      // Small delay to ensure the page loads before scrolling
      setTimeout(() => {
        const targetId = hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else if (href.startsWith("#")) {
      // Handle anchor navigation (already handled in Header)
      return;
    } else {
      // Handle other external links
      window.location.href = href;
    }
  };

  return (
    <>
      <SEOHead
        title="Saray Estetic - Premium Aesthetic Clinic in Istanbul"
        description="Leading aesthetic clinic in Istanbul offering hair transplant, dental treatments, nose surgery, and cosmetic procedures with international standards. Book your free consultation today."
        keywords="hair transplant Istanbul, dental implants Turkey, rhinoplasty surgery, cosmetic surgery clinic, aesthetic treatments, medical tourism Turkey"
        url="https://sarayestetic.com"
      />
      <Layout onNavigate={handleNavigation}>
        {/* Hero Section */}
        <section id="home" className="relative">
          <HeroSection />
        </section>

        {/* Treatments Section */}
        <section id="treatments" className="relative">
          <TreatmentsSection
            showAll={true}
            title="Our Premium Treatments"
            subtitle="Discover our comprehensive range of aesthetic and medical treatments, performed by expert specialists using the latest technology and international standards."
          />
        </section>

        {/* Before & After Gallery Section */}
        <section id="before-after" className="relative">
          <BeforeAfterGallery
            images={BEFORE_AFTER_IMAGES}
            title="Real Results from Real People"
            subtitle="Witness the incredible transformations achieved by our patients. See the life-changing results that make us one of Istanbul's leading aesthetic clinics."
          />
        </section>

        {/* About Section */}
        <section id="about" className="relative">
          <AboutSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative">
          <ContactSection />
        </section>
      </Layout>
    </>
  );
};

export default SinglePage;
