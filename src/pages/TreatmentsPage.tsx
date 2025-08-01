import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import TreatmentsSection from "../components/sections/TreatmentsSection";
import BeforeAfterGallery from "../components/sections/BeforeAfterGallery";
import Button from "../components/ui/Button";
import { BEFORE_AFTER_IMAGES } from "../utils/constants";
import { fadeIn, slideUp } from "../utils/animations";

const TreatmentsPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary-500 to-secondary-500 text-white flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div
          className="container-custom relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Treatments
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Discover our comprehensive range of aesthetic and medical
              treatments, performed by expert specialists using the latest
              technology and techniques.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-500"
            >
              Free Consultation
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Main Treatments Section */}
      <TreatmentsSection
        title="All Treatments"
        subtitle="Explore our full range of aesthetic and medical treatments designed to help you achieve your goals."
      />

      {/* Before/After Gallery */}
      <BeforeAfterGallery
        images={BEFORE_AFTER_IMAGES}
        title="Real Results"
        subtitle="See the incredible transformations our patients have achieved with our expert care and advanced treatments."
      />

      {/* Treatment Process */}
      <section className="section-padding bg-gray-50">
        <motion.div
          className="container-custom"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Our Treatment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A carefully designed process to ensure the best possible outcomes
              and experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Free detailed consultation with our specialists to understand your goals and create a personalized treatment plan.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Comprehensive planning including medical evaluation, treatment timeline, and preparation instructions.",
              },
              {
                step: "03",
                title: "Treatment",
                description:
                  "Expert treatment using the latest technology and techniques in our state-of-the-art facilities.",
              },
              {
                step: "04",
                title: "Follow-up",
                description:
                  "Comprehensive aftercare support and follow-up to ensure optimal healing and results.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <motion.div
          className="container-custom"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Why Choose Saray Estetic?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine medical excellence with personalized care to deliver
              exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Expert Specialists",
                description:
                  "Our team consists of internationally trained specialists with years of experience in their respective fields.",
                features: [
                  "Board-certified surgeons",
                  "International training",
                  "Continuous education",
                  "Latest techniques",
                ],
              },
              {
                title: "Advanced Technology",
                description:
                  "We use the most advanced medical equipment and techniques to ensure the best possible outcomes.",
                features: [
                  "State-of-the-art equipment",
                  "Minimally invasive techniques",
                  "Latest innovations",
                  "Safety protocols",
                ],
              },
              {
                title: "Personalized Care",
                description:
                  "Every treatment plan is customized to your individual needs, goals, and medical history.",
                features: [
                  "Individual assessment",
                  "Custom treatment plans",
                  "Personal attention",
                  "Dedicated support",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <motion.div
          className="container-custom text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and take the first step
            towards achieving your aesthetic goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-500"
            >
              Book Consultation
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary-500 hover:bg-gray-100"
            >
              Get Quote
            </Button>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default TreatmentsPage;
