import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import SEOHead from "../components/ui/SEOHead";
import ContactSection from "../components/sections/ContactSection";
import Button from "../components/ui/Button";
import { fadeIn, slideUp } from "../utils/animations";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Calendar,
} from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Contact Saray Estetica - Get Your Free Consultation"
        description="Contact Saray Estetica for your free consultation. Located in Istanbul, Turkey. Call +90 212 555 0123 or book online. 24/7 support available for international patients."
        keywords="contact saray estetica, free consultation, istanbul clinic, medical tourism contact, aesthetic clinic istanbul, hair transplant consultation"
        url="https://sarayestetic.com/contact"
      />
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
              Contact Us
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Ready to start your transformation journey? Get in touch with our
              expert team for a free consultation and personalized treatment
              plan.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-500"
            >
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Quick Contact Options */}
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
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us - choose what's most convenient for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Call Us",
                description: "Speak directly with our patient coordinators",
                action: "Call Now",
                details: [
                  "+90 212 555 0123",
                  "Available 24/7",
                  "Multilingual support",
                ],
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                description: "Quick and convenient messaging",
                action: "Message Us",
                details: [
                  "+90 555 123 4567",
                  "Instant responses",
                  "Photo consultations",
                ],
              },
              {
                icon: Calendar,
                title: "Online Booking",
                description: "Schedule your appointment online",
                action: "Book Now",
                details: [
                  "Instant confirmation",
                  "Choose your time",
                  "Free consultation",
                ],
              },
            ].map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-4">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <ul className="space-y-2 mb-6">
                    {option.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">{option.action}</Button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Clinic Location & Hours */}
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
              Visit Our Clinic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art facility is conveniently located in the heart
              of Istanbul.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location Info */}
            <motion.div variants={fadeIn} className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      Clinic Address
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Nisantasi District, Tesvikiye Neighborhood
                      <br />
                      Valikonagi Street No: 123
                      <br />
                      Sisli, Istanbul 34367, Turkey
                    </p>
                    <Button variant="outline" size="sm">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-primary mb-4">
                      Opening Hours
                    </h3>
                    <div className="space-y-3">
                      {[
                        { day: "Monday - Friday", hours: "09:00 - 18:00" },
                        { day: "Saturday", hours: "10:00 - 16:00" },
                        { day: "Sunday", hours: "Closed" },
                        { day: "Emergency", hours: "24/7 Available" },
                      ].map((schedule, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center"
                        >
                          <span className="text-gray-600">{schedule.day}</span>
                          <span className="font-medium text-text-primary">
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Transportation
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Metro: Osmanbey Station (5 min walk)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Bus: Multiple routes to Nisantasi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Parking: Available on-site</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span>Airport: 45 min from IST Airport</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div variants={fadeIn}>
              <div className="bg-gray-200 rounded-xl h-96 lg:h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Interactive Map</p>
                  <p className="text-gray-400">Google Maps integration</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and
              procedures.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "Do you offer free consultations?",
                answer:
                  "Yes, we provide free initial consultations for all our treatments. This includes a thorough assessment and personalized treatment plan.",
              },
              {
                question: "What languages do you speak?",
                answer:
                  "Our team speaks English, Turkish, Arabic, Russian, and German to serve our international patients.",
              },
              {
                question: "Do you provide airport transfers?",
                answer:
                  "Yes, we offer complimentary airport transfer services for our international patients staying for treatment packages.",
              },
              {
                question: "What are your payment options?",
                answer:
                  "We accept cash, credit cards, bank transfers, and offer financing options for treatment packages.",
              },
              {
                question: "How far in advance should I book?",
                answer:
                  "We recommend booking at least 2-4 weeks in advance, especially during peak seasons (spring and fall).",
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={fadeIn} className="mb-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-gradient-primary text-white">
        <motion.div
          className="container-custom text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">24/7 Emergency Support</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our medical team is available around the clock for any urgent
            questions or concerns about your treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-500"
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency Hotline
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary-500 hover:bg-gray-100"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Support
            </Button>
          </div>
        </motion.div>
      </section>
    </Layout>
    </>
  );
};

export default ContactPage;
