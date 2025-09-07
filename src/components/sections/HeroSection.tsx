import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  slideRight,
  fadeIn,
  wordStagger,
  wordReveal,
} from "../../utils/animations";

// Contact form validation schema
const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  country: z.string().min(1, "Please select your country"),
  treatment: z.string().min(1, "Please select a treatment"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Countries list
const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Belgium",
  "Switzerland",
  "Austria",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Poland",
  "Czech Republic",
  "Hungary",
  "Romania",
  "Bulgaria",
  "Greece",
  "Portugal",
  "Ireland",
  "Luxembourg",
  "Malta",
  "Cyprus",
  "Estonia",
  "Latvia",
  "Lithuania",
  "Slovenia",
  "Slovakia",
  "Croatia",
  "Serbia",
  "Montenegro",
  "Bosnia and Herzegovina",
  "North Macedonia",
  "Albania",
  "Kosovo",
  "Turkey",
  "Russia",
  "Ukraine",
  "Belarus",
  "Moldova",
  "Georgia",
  "Armenia",
  "Azerbaijan",
  "Kazakhstan",
  "Uzbekistan",
  "Kyrgyzstan",
  "Tajikistan",
  "Turkmenistan",
  "Afghanistan",
  "Pakistan",
  "India",
  "Bangladesh",
  "Sri Lanka",
  "Nepal",
  "Bhutan",
  "Maldives",
  "China",
  "Japan",
  "South Korea",
  "North Korea",
  "Mongolia",
  "Taiwan",
  "Hong Kong",
  "Macau",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Vietnam",
  "Cambodia",
  "Laos",
  "Myanmar",
  "Philippines",
  "Indonesia",
  "Brunei",
  "East Timor",
  "Papua New Guinea",
  "Australia",
  "New Zealand",
  "Fiji",
  "Samoa",
  "Tonga",
  "Vanuatu",
  "Solomon Islands",
  "Palau",
  "Marshall Islands",
  "Micronesia",
  "Kiribati",
  "Tuvalu",
  "Nauru",
  "South Africa",
  "Egypt",
  "Libya",
  "Algeria",
  "Morocco",
  "Tunisia",
  "Sudan",
  "South Sudan",
  "Ethiopia",
  "Kenya",
  "Uganda",
  "Tanzania",
  "Rwanda",
  "Burundi",
  "Democratic Republic of Congo",
  "Republic of Congo",
  "Central African Republic",
  "Chad",
  "Niger",
  "Mali",
  "Burkina Faso",
  "Ghana",
  "Ivory Coast",
  "Liberia",
  "Sierra Leone",
  "Guinea",
  "Guinea-Bissau",
  "Senegal",
  "Gambia",
  "Mauritania",
  "Cape Verde",
  "Sao Tome and Principe",
  "Equatorial Guinea",
  "Gabon",
  "Cameroon",
  "Nigeria",
  "Benin",
  "Togo",
  "Angola",
  "Zambia",
  "Malawi",
  "Mozambique",
  "Zimbabwe",
  "Botswana",
  "Namibia",
  "Lesotho",
  "Swaziland",
  "Madagascar",
  "Mauritius",
  "Seychelles",
  "Comoros",
  "Djibouti",
  "Eritrea",
  "Somalia",
  "Brazil",
  "Argentina",
  "Chile",
  "Peru",
  "Colombia",
  "Venezuela",
  "Ecuador",
  "Bolivia",
  "Paraguay",
  "Uruguay",
  "Guyana",
  "Suriname",
  "French Guiana",
  "Mexico",
  "Guatemala",
  "Belize",
  "El Salvador",
  "Honduras",
  "Nicaragua",
  "Costa Rica",
  "Panama",
  "Cuba",
  "Jamaica",
  "Haiti",
  "Dominican Republic",
  "Puerto Rico",
  "Trinidad and Tobago",
  "Barbados",
  "Saint Lucia",
  "Grenada",
  "Saint Vincent and the Grenadines",
  "Antigua and Barbuda",
  "Dominica",
  "Saint Kitts and Nevis",
  "Bahamas",
].sort();

// Treatments list
const treatments = [
  "Dental Treatments",
  "Face & Nose Aesthetics",
  "Body Aesthetics",
  "Hair Restoration",
  "Obesity Treatments",
];

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

  // Gallery state management
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Treatment gallery data with images for each specialty
  const treatmentGallery = {
    Dental: [
      {
        image:
          "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop",
        title: "Dental Implants",
        description: "Advanced dental implant procedures",
      },
      {
        image:
          "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        title: "Teeth Whitening",
        description: "Professional whitening treatments",
      },
      {
        image:
          "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop",
        title: "Orthodontics",
        description: "Braces and alignment solutions",
      },
    ],
    "Face & Nose": [
      {
        image:
          "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop",
        title: "Rhinoplasty",
        description: "Nose reshaping procedures",
      },
      {
        image:
          "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=800&h=600&fit=crop",
        title: "Facelift",
        description: "Facial rejuvenation treatments",
      },
      {
        image:
          "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=600&fit=crop",
        title: "Botox & Fillers",
        description: "Non-surgical facial enhancements",
      },
    ],
    Body: [
      {
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        title: "Liposuction",
        description: "Body contouring procedures",
      },
      {
        image:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
        title: "Tummy Tuck",
        description: "Abdominal reshaping surgery",
      },
      {
        image:
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop",
        title: "Brazilian Butt Lift",
        description: "Buttock enhancement procedures",
      },
    ],
    Hair: [
      {
        image:
          "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
        title: "Hair Transplant",
        description: "Advanced hair restoration",
      },
      {
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop",
        title: "FUE Technique",
        description: "Follicular unit extraction",
      },
      {
        image:
          "https://images.unsplash.com/photo-1559599238-1a9c79673b2d?w=800&h=600&fit=crop",
        title: "Hair Line Design",
        description: "Natural hairline restoration",
      },
    ],
    Obesity: [
      {
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        title: "Gastric Sleeve",
        description: "Weight loss surgery",
      },
      {
        image:
          "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=600&fit=crop",
        title: "Gastric Bypass",
        description: "Bariatric procedures",
      },
      {
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        title: "Lap Band",
        description: "Minimally invasive options",
      },
    ],
  };

  const currentGallery = treatmentGallery["Dental"];

  // Auto-rotate through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % currentGallery.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentGallery.length]);

  const words = title.split(" ");

  const {
    register,
    handleSubmit,
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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#A52C67]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3F1127]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#A52C67]/3 to-[#3F1127]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Mobile-First Layout: Headlines -> Gallery -> Form */}

        {/* Headlines Section - Always first on mobile, hidden on desktop (will be shown in left column) */}
        <motion.div
          className="lg:hidden text-center py-12 space-y-6"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          {/* Main Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight font-sans"
            variants={wordStagger}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2 mb-2"
                variants={wordReveal}
              >
                {word === "Trust." ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A52C67] to-[#3F1127]">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans max-w-2xl mx-auto"
            variants={fadeIn}
            transition={{ delay: 0.6 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Two Column Layout for Desktop */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[60vh] lg:min-h-screen py-8 lg:py-20">
          {/* Left Column - Content + Form (Desktop Only Headlines) */}
          <motion.div
            className="order-2 lg:order-1 space-y-8"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            {/* Headlines - Desktop Only */}
            <div className="space-y-6 hidden lg:block">
              {/* Main Headline */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-sans"
                variants={wordStagger}
                initial="hidden"
                animate="visible"
              >
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-3 mb-2"
                    variants={wordReveal}
                  >
                    {word === "Trust." ? (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A52C67] to-[#3F1127]">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                className="text-lg lg:text-xl text-gray-600 leading-relaxed font-sans max-w-lg"
                variants={fadeIn}
                transition={{ delay: 0.8 }}
              >
                {subtitle}
              </motion.p>
            </div>

            {/* Appointment Form */}
            <div
              id="consultation-form"
              className="bg-gradient-to-br from-[#A52C67] to-[#3F1127] rounded-3xl p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 rounded-3xl"></div>
              <div className="relative z-10">
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-16"
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
                      appointment.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-2 font-sans">
                        Book Your Consultation
                      </h3>
                      <p className="text-sm text-pink-100">
                        Start your transformation journey today
                      </p>
                    </div>

                    {/* Name and Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name Field */}
                      <div>
                        <input
                          {...register("fullName")}
                          type="text"
                          placeholder="Full Name"
                          className="w-full px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-300 outline-none transition-all text-white placeholder-pink-200 shadow-lg"
                        />
                        {errors.fullName && (
                          <p className="text-red-300 text-xs mt-1">
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>

                      {/* Phone Number Input */}
                      <div>
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="Phone Number WhatsApp"
                          className="w-full px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-300 outline-none transition-all text-white placeholder-pink-200 shadow-lg"
                        />
                        {errors.phone && (
                          <p className="text-red-300 text-xs mt-1">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-300 outline-none transition-all text-white placeholder-pink-200 shadow-lg"
                      />
                      {errors.email && (
                        <p className="text-red-300 text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Country and Treatment Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Country Field */}
                      <div>
                        <select
                          {...register("country")}
                          className="w-full px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-300 outline-none transition-all appearance-none text-white shadow-lg"
                        >
                          <option value="" className="bg-gray-800 text-white">
                            Country
                          </option>
                          {countries.map((country) => (
                            <option
                              key={country}
                              value={country}
                              className="bg-gray-800 text-white"
                            >
                              {country}
                            </option>
                          ))}
                        </select>
                        {errors.country && (
                          <p className="text-red-300 text-xs mt-1">
                            {errors.country.message}
                          </p>
                        )}
                      </div>

                      {/* Treatment Field */}
                      <div>
                        <select
                          {...register("treatment")}
                          className="w-full px-4 py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-pink-300 outline-none transition-all appearance-none text-white shadow-lg"
                        >
                          <option value="" className="bg-gray-800 text-white">
                            Treatment
                          </option>
                          {treatments.map((treatment) => (
                            <option
                              key={treatment}
                              value={treatment}
                              className="bg-gray-800 text-white"
                            >
                              {treatment}
                            </option>
                          ))}
                        </select>
                        {errors.treatment && (
                          <p className="text-red-300 text-xs mt-1">
                            {errors.treatment.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-lg border border-white/40 hover:from-white/40 hover:to-white/30 text-white py-4 rounded-xl font-semibold text-base mt-6 disabled:opacity-50 shadow-xl hover:shadow-2xl transition-all duration-300 font-sans"
                      whileHover={{ scale: 1.01, y: -1 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Booking...</span>
                        </div>
                      ) : (
                        "Free Consultation"
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>

            {/* Statistics Section */}
            <motion.div
              className="mt-8"
              variants={fadeIn}
              transition={{ delay: 1.5 }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  className="text-center lg:text-left"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#A52C67] to-[#3F1127] rounded-2xl mb-4 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1 font-sans">
                    4.9/5
                  </div>
                  <div className="text-sm text-gray-600 font-medium font-sans">
                    Verifiable Rating
                  </div>
                </motion.div>

                <motion.div
                  className="text-center lg:text-left"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#A52C67] to-[#3F1127] rounded-2xl mb-4 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1 font-sans">
                    3,000+
                  </div>
                  <div className="text-sm text-gray-600 font-medium font-sans">
                    Successful Procedures
                  </div>
                </motion.div>

                <motion.div
                  className="text-center lg:text-left"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#A52C67] to-[#3F1127] rounded-2xl mb-4 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1 font-sans">
                    7+
                  </div>
                  <div className="text-sm text-gray-600 font-medium font-sans">
                    Years of Experience
                  </div>
                </motion.div>

                <motion.div
                  className="text-center lg:text-left"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#A52C67] to-[#3F1127] rounded-2xl mb-4 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1 font-sans">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600 font-medium font-sans">
                    Support Available
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Gallery (Second on mobile, Right on desktop) */}
          <motion.div
            className="order-1 lg:order-2 relative mb-8 lg:mb-0"
            variants={slideRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
          >
            <div className="relative h-[600px] lg:h-[700px]">
              {/* Dynamic Image Gallery */}
              <motion.div
                className="relative h-full rounded-2xl overflow-hidden shadow-xl"
                key={`Dental-${currentImageIndex}`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={currentGallery[currentImageIndex]?.image}
                  alt={currentGallery[currentImageIndex]?.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>

                {/* Image Info Overlay - Bottom Left */}
                <div className="absolute bottom-6 left-6 text-white">
                  <motion.h3
                    className="text-xl lg:text-2xl font-bold mb-2 font-sans drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {currentGallery[currentImageIndex]?.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-white/90 font-sans drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {currentGallery[currentImageIndex]?.description}
                  </motion.p>
                </div>

                {/* Image Progress Dots */}
                <div className="absolute bottom-6 right-6 flex space-x-2 z-10">
                  {currentGallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating Accent Elements */}
              <motion.div
                className="absolute top-1/2 -left-4 w-8 h-8 bg-pink-100 rounded-full shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.4 }}
              />
              <motion.div
                className="absolute bottom-1/4 -right-4 w-6 h-6 bg-pink-200 rounded-full shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.4 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
