import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, Award, Clock } from "lucide-react";
import {
  staggerContainer,
  slideLeft,
  slideRight,
  fadeIn,
  wordStagger,
  wordReveal,
} from "../../utils/animations";
import { getHeroImage } from "../../utils/imageUtils";
import Button from "../ui/Button";
import ConsultationForm from "../forms/ConsultationForm";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Transform Your Life with Premium Aesthetic Treatments",
  subtitle = "Leading clinic in Istanbul offering world-class hair transplant, dental, and cosmetic procedures with international standards.",
  backgroundImage = getHeroImage(),
}) => {
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = title.split(" ");
  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Patients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Star, value: "4.9/5", label: "Patient Rating" },
    { icon: Clock, value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(165, 44, 103, 0.85) 0%, rgba(143, 35, 85, 0.9) 30%, rgba(122, 38, 76, 0.85) 70%, rgba(165, 44, 103, 0.8) 100%), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-accent-400/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 bg-primary-300/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container-custom relative z-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen lg:min-h-0 px-4 sm:px-0"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div
            className="text-white space-y-4 sm:space-y-6 lg:space-y-8 text-center md:text-left pt-16 sm:pt-20 lg:pt-0 md:col-span-2 lg:col-span-1"
            variants={slideLeft}
          >
            {/* Main Title with Word Animation */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight px-2 sm:px-0"
              variants={wordStagger}
              initial="hidden"
              animate="visible"
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-3"
                  variants={wordReveal}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-100 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
              variants={fadeIn}
              transition={{ delay: 0.8 }}
            >
              {subtitle}
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-0"
              variants={staggerContainer}
              transition={{ delay: 1 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-2"
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg mb-2 sm:mb-3">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400" />
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-primary-200">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start px-2 sm:px-0"
              variants={fadeIn}
              transition={{ delay: 1.2 }}
            >
              <Button
                variant="accent"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
                className="text-sm sm:text-base lg:text-lg w-full sm:w-auto"
              >
                Get Free Consultation
              </Button>

              <Button
                variant="outline"
                size="lg"
                leftIcon={<Play className="w-4 h-4 sm:w-5 sm:h-5" />}
                className="text-sm sm:text-base lg:text-lg border-white text-white hover:bg-white hover:text-primary-600 w-full sm:w-auto"
              >
                Watch Our Story
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6 sm:pt-8 px-2 sm:px-0 justify-center md:justify-start"
              variants={fadeIn}
              transition={{ delay: 1.4 }}
            >
              <div className="flex items-center space-x-2 text-center sm:text-left">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-300 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-primary-100 text-xs sm:text-sm">
                  Join 10,000+ satisfied patients
                </span>
              </div>

              <div className="flex items-center space-x-1 text-center sm:text-left">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 fill-current"
                  />
                ))}
                <span className="text-primary-100 text-xs sm:text-sm ml-2">
                  4.9/5 Rating
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Consultation Form */}
          <motion.div
            className="relative order-first lg:order-last px-4 sm:px-0 hidden md:block"
            variants={slideRight}
          >
            {/* Glassmorphism Container */}
            <div className="relative">
              {/* Background Blur */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20" />

              {/* Form Container */}
              <div className="relative p-4 sm:p-6 lg:p-8">
                <ConsultationForm
                  variant="compact"
                  className="bg-transparent shadow-none p-0"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary-300/30 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>

            {/* Trust Badge */}
            <motion.div
              className="absolute -bottom-4 sm:-bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
            >
              <div className="bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold text-gray-900">
                    JCI Accredited
                  </div>
                  <div className="text-gray-500">International Standards</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <span className="text-sm text-primary-200">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
