import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Users, Clock, CheckCircle, Star } from "lucide-react";
import Layout from "../components/layout/Layout";
import AboutSection from "../components/sections/AboutSection";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { fadeIn, slideUp, staggerContainer } from "../utils/animations";

const AboutPage: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "15,000+",
      label: "Happy Patients",
      description: "Satisfied clients worldwide",
    },
    {
      icon: Award,
      value: "12+",
      label: "Years Experience",
      description: "In aesthetic medicine",
    },
    {
      icon: Heart,
      value: "98%",
      label: "Success Rate",
      description: "Patient satisfaction",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support",
      description: "Available assistance",
    },
  ];

  const achievements = [
    {
      icon: CheckCircle,
      title: "ISO 9001 Certified",
      description: "International quality standards",
    },
    {
      icon: Award,
      title: "Medical Excellence Award",
      description: "Recognized for outstanding care",
    },
    {
      icon: Star,
      title: "International Accreditation",
      description: "Globally recognized standards",
    },
    {
      icon: Users,
      title: "Expert Medical Team",
      description: "Highly qualified specialists",
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Mehmet Saray",
      title: "Medical Director & Chief Surgeon",
      specialization: "Hair Transplant & Cosmetic Surgery",
      experience: "15+ years",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      qualifications: [
        "MD - General Surgery",
        "Fellowship in Hair Transplantation",
        "International Board Certification",
      ],
    },
    {
      name: "Dr. Ayşe Demir",
      title: "Senior Dental Surgeon",
      specialization: "Cosmetic Dentistry & Implants",
      experience: "12+ years",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      qualifications: [
        "DDS - Dental Surgery",
        "Specialization in Oral Implantology",
        "Advanced Cosmetic Dentistry",
      ],
    },
    {
      name: "Dr. Can Özkan",
      title: "Plastic & Reconstructive Surgeon",
      specialization: "Rhinoplasty & Facial Surgery",
      experience: "10+ years",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      qualifications: [
        "MD - Plastic Surgery",
        "European Board Certification",
        "Advanced Rhinoplasty Training",
      ],
    },
  ];

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
              About Saray Estetic
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Leading the way in aesthetic medicine with cutting-edge
              technology, world-class expertise, and a commitment to
              transforming lives through exceptional medical care.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-500"
            >
              Our Story
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Main About Section */}
      <AboutSection />

      {/* Detailed Stats */}
      <section className="section-padding bg-gray-50">
        <motion.div
          className="container-custom"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={slideUp} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak for our commitment to excellence and patient
              satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="text-center p-8 h-full hover:shadow-lg transition-shadow">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                      <Icon className="w-8 h-8 text-primary-500" />
                    </div>
                    <div className="text-4xl font-bold text-text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-primary-500 mb-3">
                      {stat.label}
                    </div>
                    <p className="text-gray-600">{stat.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Certifications & Awards */}
      <section className="section-padding">
        <motion.div
          className="container-custom"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={slideUp} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Certifications & Awards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized globally for our excellence in medical care and patient
              safety.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="text-center p-6 h-full">
                    <Icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Medical Team */}
      <section className="section-padding bg-gray-50">
        <motion.div
          className="container-custom"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={slideUp} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Our Expert Medical Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our internationally trained specialists who are dedicated to
              providing you with the highest quality care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="text-center p-8 h-full">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover max-w-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-500 font-semibold mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-600 mb-3">{member.specialization}</p>
                  <p className="text-sm text-primary-500 font-medium mb-4">
                    {member.experience}
                  </p>
                  <div className="space-y-1">
                    {member.qualifications.map((qual, idx) => (
                      <p key={idx} className="text-sm text-gray-600">
                        {qual}
                      </p>
                    ))}
                  </div>
                </Card>
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
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have trusted us with their
            aesthetic journey. Experience the Saray Estetic difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-500"
            >
              Free Consultation
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary-500 hover:bg-gray-100"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default AboutPage;
