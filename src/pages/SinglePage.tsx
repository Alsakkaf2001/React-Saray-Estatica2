import React from "react";
import Layout from "../components/layout/Layout";
import SEOHead from "../components/ui/SEOHead";
import HeroSection from "../components/sections/HeroSection";
import TreatmentsSection from "../components/sections/TreatmentsSection";
import TrustResultsSection from "../components/sections/TrustResultsSection";
import PatientJourneySection from "../components/sections/PatientJourneySection";
import BrandPhilosophySection from "../components/sections/BrandPhilosophySection";
import FAQSection from "../components/sections/FAQSection";
import ContactSection from "../components/sections/ContactSection";

interface SinglePageProps {
  onNavigateToBlog?: () => void;
  onNavigateToTreatment?: (treatmentId: string) => void;
  onNavigateToAbout?: () => void;
}

const SinglePage: React.FC<SinglePageProps> = ({
  onNavigateToBlog,
  onNavigateToTreatment,
  onNavigateToAbout,
}) => {
  const handleNavigation = (href: string) => {
    if (href === "/blog" && onNavigateToBlog) {
      onNavigateToBlog();
    } else if (href === "/about" && onNavigateToAbout) {
      onNavigateToAbout();
    } else if (href.startsWith("/#")) {
      // Navigate to home page with hash (from blog page)
      const base = import.meta.env.BASE_URL || "/";
      const hash = href.substring(1); // Remove the leading /
      window.history.pushState({}, "", `${base}${hash}`);
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
      const base = import.meta.env.BASE_URL || "/";
      window.location.href = href.startsWith("/")
        ? `${base}${href.replace(/^\//, "")}`
        : href;
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
            title="High-Quality Treatments with Clear, Honest Pricing"
            subtitle="We believe great results should be accessible. Here you'll find our full range of treatments, complete with transparent starting from prices and real patient galleries, so you can make a smart, informed decision."
            onTreatmentClick={onNavigateToTreatment}
          />
        </section>

        {/* Trust & Results Hub Section */}
        <section id="trust-results" className="relative">
          <TrustResultsSection />
        </section>

        {/* Patient Journey Section */}
        <section id="patient-journey" className="relative">
          <PatientJourneySection />
        </section>

        {/* Brand Philosophy Section */}
        <section id="about" className="relative">
          <BrandPhilosophySection />
        </section>

        {/* FAQ Section */}
        <section id="faq" className="relative">
          <FAQSection />
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
