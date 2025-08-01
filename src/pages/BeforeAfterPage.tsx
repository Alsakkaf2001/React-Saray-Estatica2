import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import BeforeAfterGallery from "../components/sections/BeforeAfterGallery";
import Button from "../components/ui/Button";
import { BEFORE_AFTER_IMAGES } from "../utils/constants";
import { fadeIn, slideUp } from "../utils/animations";

const BeforeAfterPage: React.FC = () => {
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
              Before & After Gallery
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Witness the incredible transformations achieved by our patients.
              Real results from real people who trusted us with their aesthetic
              journey.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-500"
            >
              Your Transformation Awaits
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Main Gallery Section */}
      <BeforeAfterGallery
        images={BEFORE_AFTER_IMAGES}
        title="Real Patient Results"
        subtitle="Each transformation tells a unique story of renewed confidence and satisfaction. See the life-changing results our expert team has achieved."
      />

      {/* Statistics Section */}
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
              Results That Speak for Themselves
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our patient
              satisfaction and success rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "98%",
                label: "Patient Satisfaction",
                description: "Excellent results",
              },
              {
                number: "15,000+",
                label: "Successful Treatments",
                description: "Happy patients",
              },
              {
                number: "12+",
                label: "Years of Excellence",
                description: "Proven experience",
              },
              {
                number: "100%",
                label: "Safety Record",
                description: "Zero complications",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center bg-white rounded-xl shadow-lg p-8"
              >
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-text-primary mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Patient Testimonials */}
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
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read testimonials from patients who have experienced life-changing
              transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                treatment: "Hair Transplant",
                rating: 5,
                comment:
                  "The results exceeded my expectations. The team was professional, caring, and the facility was world-class. I finally have my confidence back!",
                image:
                  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "James K.",
                treatment: "Dental Makeover",
                rating: 5,
                comment:
                  "Amazing transformation! The dental team created the perfect smile I always wanted. The process was comfortable and the results are incredible.",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              },
              {
                name: "Maria L.",
                treatment: "Rhinoplasty",
                rating: 5,
                comment:
                  "Dr. Saray and his team are true artists. My new nose looks completely natural and suits my face perfectly. Couldn't be happier!",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-text-primary">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-primary-500">
                      {testimonial.treatment}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process Guarantee */}
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
              Our Guarantee to You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand behind our work with comprehensive guarantees and ongoing
              support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Results Guarantee",
                description:
                  "We guarantee satisfaction with your results or we'll work with you to make it right.",
                points: [
                  "Satisfaction guarantee",
                  "Revision policy",
                  "Expert consultation",
                  "Quality assurance",
                ],
              },
              {
                title: "Safety First",
                description:
                  "Your safety is our top priority with comprehensive medical protocols.",
                points: [
                  "Medical screening",
                  "Sterile environment",
                  "Emergency protocols",
                  "24/7 support",
                ],
              },
              {
                title: "Lifetime Support",
                description:
                  "Our relationship doesn't end after treatment - we provide ongoing care and support.",
                points: [
                  "Follow-up care",
                  "Touch-up services",
                  "Maintenance advice",
                  "Patient community",
                ],
              },
            ].map((guarantee, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600 mb-6">{guarantee.description}</p>
                <ul className="space-y-2">
                  {guarantee.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {point}
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
            Your Transformation Story Starts Here
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to join our gallery of successful transformations? Schedule
            your free consultation and begin your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-500"
            >
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary-500 hover:bg-gray-100"
            >
              View More Results
            </Button>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default BeforeAfterPage;
