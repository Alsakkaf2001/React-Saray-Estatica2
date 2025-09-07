import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Heart,
  Shield,
  Clock,
  Star,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Stethoscope,
  Globe,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import SEOHead from "../components/ui/SEOHead";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { fadeIn, staggerContainer, slideUp } from "../utils/animations";
import {
  getClinicImages,
  getTreatmentImage,
  handleImageError,
} from "../utils/imageUtils";
import { CONTACT_INFO } from "../utils/constants";

interface AboutPageProps {
  onNavigate?: (href: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const stats = [
    {
      icon: Users,
      value: "3,000+",
      label: "Happy Patients",
      description: "Successful transformations worldwide",
    },
    {
      icon: Award,
      value: "7+",
      label: "Years Experience",
      description: "Proven expertise in aesthetic medicine",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Patient Rating",
      description: "Consistently excellent reviews",
    },
    {
      icon: Shield,
      value: "JCI",
      label: "Accredited",
      description: "International healthcare standards",
    },
  ];

  const services = [
    {
      icon: Heart,
      title: "Hair Restoration",
      description: "Advanced FUE and DHI techniques for natural results",
      treatments: ["Sapphire FUE", "DHI Method", "Beard Transplant"],
      image: getTreatmentImage("fue-hair-transplant"),
    },
    {
      icon: Stethoscope,
      title: "Dental Excellence",
      description: "Complete smile makeovers with premium materials",
      treatments: ["Hollywood Smile", "Dental Implants", "Veneers"],
      image: getTreatmentImage("hollywood-smile"),
    },
    {
      icon: Users,
      title: "Cosmetic Surgery",
      description: "Body contouring and facial aesthetics",
      treatments: ["Rhinoplasty", "Liposuction", "Brazilian Butt Lift"],
      image: getTreatmentImage("rhinoplasty"),
    },
    {
      icon: Globe,
      title: "International Care",
      description: "All-inclusive packages for medical tourists",
      treatments: ["Airport Transfer", "Hotel Stay", "24/7 Support"],
      image: getClinicImages().reception,
    },
  ];

  return (
    <>
      <SEOHead
        title="Our Commitment to Patient Excellence | About Saray Estetica"
        description="Saray Estetica was founded on a commitment to redefine the standard of care for international patients. Our entire practice is built on clinical excellence, operational transparency, and unwavering patient support."
        keywords="about saray estetica, patient excellence, international patient care, clinical excellence, aesthetic clinic istanbul, medical tourism"
        url="https://sarayestetic.com/about"
      />
      <Layout onNavigate={onNavigate}>
        {/* SECTION 1: HERO - New Content */}
        <section className="relative overflow-hidden bg-white pt-20 sm:pt-24 lg:pt-28">
          <div className="container-custom py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center"
            >
              {/* Hero Content */}
              <motion.div
                variants={fadeIn}
                className="space-y-4 sm:space-y-6 lg:space-y-8"
              >
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4 lg:mb-6">
                    A Higher Standard of{" "}
                    <span className="text-primary-600">
                      International Patient Care
                    </span>
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed max-w-2xl">
                    Saray Estetica was founded on a commitment to redefine the
                    standard of care for international patients. Our entire
                    practice is built on a foundation of clinical excellence,
                    operational transparency, and unwavering patient support.
                  </p>
                </div>
              </motion.div>

              {/* Hero Image */}
              <motion.div variants={slideUp} className="relative">
                <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                  <img
                    src={getClinicImages().reception}
                    alt="Saray Estetica Modern Reception Area"
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-100 rounded-2xl opacity-80 hidden lg:block"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl opacity-10 hidden lg:block"></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Cards - Original Content */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 sm:px-0"
              >
                {stats.map((stat, index) => (
                  <motion.div key={index} variants={slideUp}>
                    <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow duration-300 bg-white border-primary-100 hover:border-primary-200">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                        <stat.icon className="w-8 h-8 text-primary-500" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-lg font-semibold text-gray-800 mb-2">
                        {stat.label}
                      </div>
                      <p className="text-sm text-gray-600">
                        {stat.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: OUR OPERATING PHILOSOPHY */}
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Section Header */}
              <motion.div variants={fadeIn} className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  The Principles That Define Our Practice
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  A successful aesthetic outcome is the result of a meticulously
                  managed process, guided by an unwavering commitment to the
                  patient. Our operating philosophy is transparent and direct,
                  centered on three core principles that ensure quality, safety,
                  and confidence at every stage of the patient journey.
                </p>
              </motion.div>

              {/* Principles Grid */}
              <div className="space-y-8 lg:space-y-12">
                {/* Principle I: Clinical Excellence & Safety */}
                <motion.div variants={slideUp}>
                  <Card className="p-8 lg:p-12 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                          <Shield className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-4">
                          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                            Principle I
                          </span>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">
                            Clinical Excellence & Safety
                          </h3>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          We maintain an uncompromising standard of medical
                          care. Every procedure is performed by a top-tier
                          specialist with a proven track record of success in
                          their dedicated field. All treatments are conducted
                          within modern, fully-equipped, and
                          government-certified medical facilities that adhere to
                          the highest international protocols for safety and
                          hygiene.
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                {/* Principle II: Logistical Integrity & Transparency */}
                <motion.div variants={slideUp}>
                  <Card className="p-8 lg:p-12 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-4">
                          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                            Principle II
                          </span>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">
                            Logistical Integrity & Transparency
                          </h3>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          We believe an informed patient is an empowered
                          patient. We eliminate ambiguity by providing clear,
                          all-inclusive treatment plans and pricing with no
                          hidden costs. Our process is designed for maximum
                          efficiency and clarity, managed by a dedicated Patient
                          Coordinator who oversees all logistical details—from
                          scheduling to private transfers—ensuring a seamless
                          and predictable experience.
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                {/* Principle III: Comprehensive Patient Support */}
                <motion.div variants={slideUp}>
                  <Card className="p-8 lg:p-12 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                          <Clock className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-4">
                          <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                            Principle III
                          </span>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">
                            Comprehensive Patient Support
                          </h3>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          We provide a continuum of care that extends far beyond
                          the procedure itself. Each patient is assigned a
                          multilingual coordinator who serves as a single,
                          consistent point of contact. This ensures clear
                          communication and provides a constant source of
                          support, available 24/7 during the patient's stay. Our
                          commitment is to provide a supportive, professional
                          relationship built on trust.
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section - Original Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 sm:mb-16 px-4 sm:px-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 mb-6">
                    Our Story & Mission
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Founded with a vision to make world-class aesthetic
                      treatments accessible to everyone, Saray Estetica has
                      become a trusted name in medical tourism. Our
                      state-of-the-art facility in Istanbul combines
                      cutting-edge technology with the warmth of Turkish
                      hospitality.
                    </p>
                    <p>
                      We believe that everyone deserves to feel confident and
                      beautiful. Our comprehensive approach includes not just
                      the medical procedure, but complete care from consultation
                      to recovery, ensuring you feel supported every step of the
                      way.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-6">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-sm font-medium">
                          JCI Accredited
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-sm font-medium">
                          ISO Certified
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-sm font-medium">
                          24/7 Support
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={getClinicImages().interior}
                      alt="Saray Estetica Modern Clinic Interior"
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 hidden sm:block border border-green-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Excellence Award
                        </div>
                        <div className="text-sm text-gray-500">
                          Medical Tourism
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Overview - Original Content */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 sm:mb-16 px-4 sm:px-0"
            >
              <motion.div variants={fadeIn} className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 mb-4">
                  Our Specializations
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Comprehensive aesthetic and medical services performed by
                  expert specialists
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div key={index} variants={slideUp}>
                    <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 bg-white border-primary-100 hover:border-primary-200 hover:scale-105">
                      {/* Service Image */}
                      <div className="aspect-[16/10] relative overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <service.icon className="w-5 h-5 text-primary-600" />
                          </div>
                        </div>
                      </div>

                      {/* Service Content */}
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.treatments.map((treatment, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded border border-primary-100"
                            >
                              {treatment}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Get In Touch - Original Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-12 sm:mb-16 px-4 sm:px-0"
            >
              <motion.div variants={fadeIn} className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 mb-4">
                  Get In Touch
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Ready to start your transformation journey? Contact us today
                  for a free consultation with our expert team.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Call Us */}
                <motion.div variants={slideUp}>
                  <Card className="text-center p-6 h-full hover:shadow-lg transition-all duration-300 bg-white border-primary-100 hover:border-primary-200">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Call Us
                    </h3>
                    <p className="text-primary-600 font-medium mb-2">
                      {CONTACT_INFO.phone}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">Available 24/7</p>
                    <Button variant="outline" size="sm" fullWidth>
                      Call Now
                    </Button>
                  </Card>
                </motion.div>

                {/* WhatsApp */}
                <motion.div variants={slideUp}>
                  <Card className="text-center p-6 h-full hover:shadow-lg transition-all duration-300 bg-white border-primary-100 hover:border-primary-200">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      WhatsApp
                    </h3>
                    <p className="text-green-600 font-medium mb-2">
                      {CONTACT_INFO.whatsapp}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">Quick Response</p>
                    <Button
                      variant="outline"
                      size="sm"
                      fullWidth
                      className="border-green-200 text-green-600 hover:bg-green-50"
                    >
                      Chat Now
                    </Button>
                  </Card>
                </motion.div>

                {/* Email Us */}
                <motion.div variants={slideUp}>
                  <Card className="text-center p-6 h-full hover:shadow-lg transition-all duration-300 bg-white border-primary-100 hover:border-primary-200">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Email Us
                    </h3>
                    <p className="text-blue-600 font-medium mb-2">
                      {CONTACT_INFO.email}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      Response within 24h
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      fullWidth
                      className="border-blue-200 text-blue-600 hover:bg-blue-50"
                    >
                      Send Email
                    </Button>
                  </Card>
                </motion.div>

                {/* Visit Us */}
                <motion.div variants={slideUp}>
                  <Card className="text-center p-6 h-full hover:shadow-lg transition-all duration-300 bg-white border-primary-100 hover:border-primary-200">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Visit Us
                    </h3>
                    <p className="text-purple-600 font-medium mb-2">
                      Nisantasi, Istanbul
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      Istanbul, Turkey
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      fullWidth
                      className="border-purple-200 text-purple-600 hover:bg-purple-50"
                    >
                      Get Directions
                    </Button>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information - Visit Our Clinic Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="px-4 sm:px-0"
            >
              <motion.div variants={fadeIn} className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 mb-4">
                  Visit Our Clinic
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Located in the heart of Istanbul, our modern facility welcomes
                  patients from around the world
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Clinic Info */}
                <motion.div variants={slideUp}>
                  <Card className="p-6 h-full bg-white border-primary-100">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">
                      Clinic Information
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Address</p>
                          <p className="text-gray-600">
                            Nisantaşı, Istanbul, Turkey
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Phone</p>
                          <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Email</p>
                          <p className="text-gray-600">{CONTACT_INFO.email}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">
                            Working Hours
                          </p>
                          <p className="text-gray-600">
                            Monday - Friday: 09:00 - 18:00
                          </p>
                          <p className="text-gray-600">
                            Saturday: 10:00 - 16:00
                          </p>
                          <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-sm font-medium text-green-700">
                          Emergency consultations available 24/7
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                {/* Map & CTA */}
                <motion.div variants={slideUp}>
                  <Card className="p-6 h-full bg-white border-primary-100">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">
                      Our Location
                    </h3>

                    <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center border border-gray-300">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500 font-medium">
                          Interactive Map
                        </p>
                        <p className="text-sm text-gray-400">
                          Google Maps Integration
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button
                        variant="primary"
                        size="lg"
                        fullWidth
                        className="bg-primary-500 hover:bg-primary-600"
                      >
                        Get Directions
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: FINAL CALL-TO-ACTION */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-700 section-padding">
          <div className="container-custom">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <motion.div variants={fadeIn} className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Begin Your Confidential Assessment
                </h2>
                <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                  We invite you to experience our standard of care firsthand.
                  Contact us to begin a confidential, no-obligation consultation
                  with one of our coordinators. We will provide a detailed
                  assessment and a personalized treatment plan tailored to your
                  specific objectives.
                </p>
                <motion.div variants={slideUp}>
                  <Button
                    variant="primary"
                    size="xl"
                    className="bg-white text-primary-600 hover:bg-gray-50 hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold px-8 py-4"
                    onClick={() => {
                      const formElement =
                        document.getElementById("consultation-form");
                      if (formElement) {
                        formElement.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }
                    }}
                  >
                    Request a Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AboutPage;
