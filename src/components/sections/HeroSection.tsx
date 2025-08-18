import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Award,
  Clock,
  ChevronDown,
  User,
  Mail,
} from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./PhoneInputStyles.css";
import {
  staggerContainer,
  slideRight,
  fadeIn,
  wordStagger,
  wordReveal,
} from "../../utils/animations";

// Contact form validation schema
const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().refine((phone) => isValidPhoneNumber(phone || ""), {
    message: "Please enter a valid phone number",
  }),
  email: z.string().email("Please enter a valid email address"),
  serviceInterest: z.string().min(1, "Please select a service of interest"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Expert Results You Can Trust.",
  subtitle = "At Saray Estetica, we combine proven expertise in dental, hair, and cosmetic surgery with a supportive, all-inclusive journey. Achieve your goals with confidence and clarity.",
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const words = title.split(" ");
  const stats = [
    { icon: Star, value: "4.9/5", label: "Verifiable Rating" },
    { icon: Users, value: "3,000+", label: "Successful Procedures" },
    { icon: Award, value: "7+", label: "Years of Experience" },
    { icon: Clock, value: "24/7", label: "Support Available" },
  ];

  const services = [
    "Hair Transplantation",
    "Dental Treatment",
    "Cosmetic Surgery",
    "Skin Treatment",
    "Weight Loss Surgery",
    "Eye Surgery",
  ];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with Doctor Image */}
      <div className="absolute inset-0">
        {/* Medical background image */}
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&h=1080&fit=crop&crop=center&q=80')`,
            backgroundPosition: "center right",
          }}
        />

        {/* Improved gradient overlay - lighter to show image better */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#A52C67]/85 via-[#A52C67]/50 to-[#3F1127]/40"></div>

        {/* Additional texture overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Main Title - Saray Estetica theme */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
              variants={wordStagger}
              initial="hidden"
              animate="visible"
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-4 mb-2"
                  variants={wordReveal}
                >
                  {word === "Trust." ? (
                    <span className="text-pink-200">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl lg:text-2xl text-pink-100 leading-relaxed max-w-2xl lg:max-w-none"
              variants={fadeIn}
              transition={{ delay: 0.8 }}
            >
              {subtitle}
            </motion.p>

            {/* Stats Grid - Medical themed */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8"
              variants={staggerContainer}
              transition={{ delay: 1 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center lg:text-left"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 shadow-lg border border-white/30">
                    <stat.icon className="w-8 h-8 text-[#A52C67]" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-pink-200 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Medical themed */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              variants={fadeIn}
              transition={{ delay: 1.2 }}
            >
              <motion.button
                className="bg-[#A52C67] hover:bg-[#3F1127] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Watch Our Story</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={slideRight}
            initial="hidden"
            animate="visible"
          >
            <div className="w-full max-w-lg">
              <motion.div
                className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/20 relative overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Gradient Header - Custom theme */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#A52C67] to-[#3F1127]"></div>

                {/* Form Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#A52C67]/20 to-[#3F1127]/20 rounded-2xl mb-4">
                    <User className="w-8 h-8 text-[#A52C67]" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    Get Your Free Consultation
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Take the first step towards your transformation
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <motion.div
                        className="text-green-500 text-3xl font-bold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                          stiffness: 400,
                        }}
                      >
                        ✓
                      </motion.div>
                    </div>
                    <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                      Thank You!
                    </h4>
                    <p className="text-gray-600 text-lg">
                      We'll contact you within 24 hours to schedule your
                      consultation.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Full Name Field */}
                    <div>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          {...register("fullName")}
                          type="text"
                          placeholder="Full Name"
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A52C67] focus:border-transparent outline-none transition-all text-lg"
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    {/* International Phone Number Input */}
                    <div>
                      <Controller
                        name="phone"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <div className="relative">
                            <PhoneInput
                              value={value}
                              onChange={onChange}
                              defaultCountry="US"
                              placeholder="Phone Number"
                              international={false}
                              withCountryCallingCode={true}
                              countryCallingCodeEditable={false}
                              displayInitialValueAsLocalNumber={false}
                            />
                          </div>
                        )}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="Email Address"
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-lg"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <div className="relative">
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                        <select
                          {...register("serviceInterest")}
                          className="w-full pl-4 pr-12 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A52C67] focus:border-transparent outline-none transition-all appearance-none bg-white text-lg"
                        >
                          <option value="">Select Service Interest</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.serviceInterest && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.serviceInterest.message}
                        </p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#A52C67] to-[#3F1127] text-white py-4 rounded-xl font-semibold text-lg mt-8 disabled:opacity-50 shadow-xl hover:shadow-2xl transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending Request...</span>
                        </div>
                      ) : (
                        "Send Request"
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-3 cursor-pointer group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <span className="text-sm font-medium group-hover:text-primary-600 transition-colors">
            Scroll to explore
          </span>
          <motion.div
            className="w-1 h-12 bg-gradient-to-b from-primary-400 to-accent-400 rounded-full"
            animate={{ scaleY: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
