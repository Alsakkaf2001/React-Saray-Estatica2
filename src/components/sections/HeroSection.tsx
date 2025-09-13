import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import dentalImplantsImage from "../../assets/images/heroSection/1.png";
import teethWhiteningImage from "../../assets/images/heroSection/2.png";
import orthodonticsImage from "../../assets/images/heroSection/3.png";
import dentalCareImage from "../../assets/images/heroSection/4.png";
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
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
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

  // Enhanced Gallery state management
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Treatment gallery data with images for each specialty
  const treatmentGallery = {
    Dental: [
      {
        image: dentalImplantsImage,
        title: "Dental Implants",
        description: "Advanced dental implant procedures",
      },
      {
        image: teethWhiteningImage,
        title: "Teeth Whitening",
        description: "Professional whitening treatments",
      },
      {
        image: orthodonticsImage,
        title: "Orthodontics",
        description: "Braces and alignment solutions",
      },
      {
        image: dentalCareImage,
        title: "Dental Care",
        description: "Comprehensive dental health services",
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

  // Enhanced auto-play with pause on hover and touch support
  useEffect(() => {
    if (isPlaying && !isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % currentGallery.length
        );
      }, 4000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isHovered, currentGallery.length]);

  // Touch/swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  // Navigation functions
  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % currentGallery.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? currentGallery.length - 1 : prevIndex - 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

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
    <section className="pt-8 pb-4 sm:pt-12 sm:pb-6 lg:pt-16 lg:pb-8 bg-white relative overflow-hidden">
      {/* Background Pattern - Compact */}
      <div className="absolute inset-0">
        <div className="absolute top-12 sm:top-16 left-4 sm:left-8 w-32 sm:w-48 h-32 sm:h-48 bg-[#A52C67]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-12 sm:bottom-16 right-4 sm:right-8 w-40 sm:w-64 h-40 sm:h-64 bg-[#3F1127]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-r from-[#A52C67]/3 to-[#3F1127]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 h-full">
        {/* Mobile-First Layout: Headlines -> Gallery -> Form */}

        {/* Headlines Section - Always first on mobile, hidden on desktop (will be shown in left column) */}
        <motion.div
          className="lg:hidden text-center py-4 sm:py-6 space-y-3 sm:space-y-4"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          {/* Main Headline - Responsive */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-sans"
            variants={wordStagger}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1 mb-1"
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

          {/* Subheadline - Responsive */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-sans max-w-2xl mx-auto px-4"
            variants={fadeIn}
            transition={{ delay: 0.6 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Compact Two Column Layout for Desktop - Space Efficient */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch py-2 sm:py-4 lg:py-6">
          {/* Left Column - Content + Form (Desktop Only Headlines) */}
          <motion.div
            className="order-2 lg:order-1 space-y-4 sm:space-y-6"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            {/* Headlines - Desktop Only */}
            <div className="space-y-3 sm:space-y-4 hidden lg:block">
              {/* Main Headline - Responsive */}
              <motion.h1
                className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 leading-tight font-sans"
                variants={wordStagger}
                initial="hidden"
                animate="visible"
              >
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-2 mb-1"
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

              {/* Subheadline - Responsive */}
              <motion.p
                className="text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed font-sans max-w-lg"
                variants={fadeIn}
                transition={{ delay: 0.8 }}
              >
                {subtitle}
              </motion.p>
            </div>

            {/* Compact Appointment Form - Space Efficient */}
            <motion.div
              id="consultation-form"
              className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-xl max-w-2xl mx-auto border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {isSubmitted ? (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                      stiffness: 400,
                      duration: 0.8,
                    }}
                  >
                    <motion.div
                      className="text-white text-4xl font-bold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.6,
                        type: "spring",
                        stiffness: 500,
                      }}
                    >
                      ✓
                    </motion.div>
                  </motion.div>
                  <motion.h4
                    className="text-3xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    Thank You!
                  </motion.h4>
                  <motion.p
                    className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    We'll contact you within 24 hours to schedule your
                    appointment.
                  </motion.p>
                  <motion.div
                    className="w-full bg-gray-200 rounded-full h-2 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <motion.div
                      className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 1.4 }}
                    />
                  </motion.div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* Compact Form Title */}
                  <motion.div
                    className="text-center mb-4 sm:mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#7a1430] to-[#b52d65] bg-clip-text text-transparent mb-1 sm:mb-2 font-sans">
                      Start Your Free Consultation
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
                      Get expert advice on your aesthetic journey
                    </p>
                  </motion.div>

                  {/* Compact Name and Phone Row */}
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {/* Full Name Field */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Full Name
                      </label>
                      <input
                        {...register("fullName")}
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-3 py-2 sm:py-2.5 bg-white border-2 border-gray-200 rounded-lg focus:border-[#7a1430] focus:ring-2 focus:ring-[#7a1430]/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400 hover:border-gray-300 text-sm"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-2 flex items-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {errors.fullName.message}
                        </p>
                      )}
                    </motion.div>

                    {/* Phone Number Input */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Phone Number WhatsApp
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full px-3 py-2 sm:py-2.5 bg-white border-2 border-gray-200 rounded-lg focus:border-[#7a1430] focus:ring-2 focus:ring-[#7a1430]/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400 hover:border-gray-300 text-sm"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-2 flex items-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {errors.phone.message}
                        </p>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Compact Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 sm:py-2.5 bg-white border-2 border-gray-200 rounded-lg focus:border-[#7a1430] focus:ring-2 focus:ring-[#7a1430]/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400 hover:border-gray-300 text-sm"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2 flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {errors.email.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Compact Country and Treatment Row */}
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {/* Country Field */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Country
                      </label>
                      <div className="relative">
                        <select
                          {...register("country")}
                          className="w-full px-3 py-2 sm:py-2.5 bg-white border-2 border-gray-200 rounded-lg focus:border-[#7a1430] focus:ring-2 focus:ring-[#7a1430]/20 outline-none transition-all duration-200 text-gray-900 appearance-none cursor-pointer hover:border-gray-300 text-sm"
                        >
                          <option value="">Select your country</option>
                          {countries.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                      {errors.country && (
                        <p className="text-red-500 text-sm mt-2 flex items-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {errors.country.message}
                        </p>
                      )}
                    </motion.div>

                    {/* Treatment Field */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Treatment
                      </label>
                      <div className="relative">
                        <select
                          {...register("treatment")}
                          className="w-full px-3 py-2 sm:py-2.5 bg-white border-2 border-gray-200 rounded-lg focus:border-[#7a1430] focus:ring-2 focus:ring-[#7a1430]/20 outline-none transition-all duration-200 text-gray-900 appearance-none cursor-pointer hover:border-gray-300 text-sm"
                        >
                          <option value="">Select a service</option>
                          {treatments.map((treatment) => (
                            <option key={treatment} value={treatment}>
                              {treatment}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                      {errors.treatment && (
                        <p className="text-red-500 text-sm mt-2 flex items-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {errors.treatment.message}
                        </p>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Compact Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#7a1430] to-[#b52d65] hover:from-[#8a1a3a] hover:to-[#c53d75] text-white py-3 sm:py-3.5 rounded-lg font-bold text-sm mt-4 sm:mt-6 disabled:opacity-50 shadow-lg hover:shadow-xl transition-all duration-300 font-sans border-0 flex items-center justify-center space-x-2 group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </div>
                      ) : (
                        <>
                          <span>Get My Free Quote & Plan</span>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              )}
            </motion.div>

            {/* Centered Statistics Section */}
            <motion.div
              className="mt-4 sm:mt-6 flex justify-center"
              variants={fadeIn}
              transition={{ delay: 1.5 }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-4xl">
                <motion.div
                  className="text-center"
                  variants={fadeIn}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-[#A52C67] to-[#3F1127] rounded-lg sm:rounded-xl mb-2 sm:mb-3 shadow-lg">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 font-sans">
                    4.9/5
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium font-sans">
                    Verifiable Rating
                  </div>
                </motion.div>

                <motion.div
                  className="text-center"
                  variants={fadeIn}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-[#A52C67] to-[#3F1127] rounded-lg sm:rounded-xl mb-2 sm:mb-3 shadow-lg">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white"
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
                  <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 font-sans">
                    3,000+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium font-sans">
                    Successful Procedures
                  </div>
                </motion.div>

                <motion.div
                  className="text-center"
                  variants={fadeIn}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-[#A52C67] to-[#3F1127] rounded-lg sm:rounded-xl mb-2 sm:mb-3 shadow-lg">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white"
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
                  <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 font-sans">
                    7+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium font-sans">
                    Years of Experience
                  </div>
                </motion.div>

                <motion.div
                  className="text-center"
                  variants={fadeIn}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-[#A52C67] to-[#3F1127] rounded-lg sm:rounded-xl mb-2 sm:mb-3 shadow-lg">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white"
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
                  <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 font-sans">
                    24/7
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium font-sans">
                    Support Available
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Compact Gallery (Second on mobile, Right on desktop) */}
          <motion.div
            className="order-1 lg:order-2 relative mb-4 sm:mb-6 lg:mb-0 flex flex-col"
            variants={slideRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
          >
            <div className="relative h-[400px] sm:h-[450px] lg:h-[600px] xl:h-[700px]">
              {/* Enhanced Dynamic Image Gallery */}
              <motion.div
                className="relative h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
                key={`gallery-${currentImageIndex}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={currentGallery[currentImageIndex]?.image}
                    alt={currentGallery[currentImageIndex]?.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    loading="lazy"
                  />
                </AnimatePresence>

                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Treatment Name Overlay - Top Center - Responsive */}
                <motion.div
                  className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 inline-block border border-white/20">
                    <span className="text-white font-semibold text-xs sm:text-sm tracking-wide">
                      {currentGallery[currentImageIndex]?.title}
                    </span>
                  </div>
                </motion.div>

                {/* Enhanced Image Info Overlay - Bottom Left - Responsive */}
                <motion.div
                  className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white max-w-[70%]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.h3
                    className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 font-sans drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {currentGallery[currentImageIndex]?.title}
                  </motion.h3>
                  <motion.p
                    className="text-xs sm:text-sm text-white/90 font-sans drop-shadow-md leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    {currentGallery[currentImageIndex]?.description}
                  </motion.p>
                </motion.div>

                {/* Enhanced Navigation Controls - Responsive */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    onClick={prevImage}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white/30 transition-all duration-300 border border-white/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </motion.button>
                  <motion.button
                    onClick={nextImage}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white/30 transition-all duration-300 border border-white/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </motion.button>
                </div>

                {/* Enhanced Play/Pause Control - Responsive */}
                <motion.button
                  onClick={togglePlayPause}
                  className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white/30 transition-all duration-300 border border-white/30 opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  ) : (
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  )}
                </motion.button>

                {/* Enhanced Thumbnail Navigation Dots - Responsive */}
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex space-x-1.5 sm:space-x-2 z-10">
                  {currentGallery.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-white scale-125 shadow-lg"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Floating Accent Elements */}
              <motion.div
                className="absolute top-1/2 -left-4 w-8 h-8 bg-gradient-to-r from-[#A52C67]/20 to-[#3F1127]/20 rounded-full shadow-lg backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.4 }}
              />
              <motion.div
                className="absolute bottom-1/4 -right-4 w-6 h-6 bg-gradient-to-r from-[#A52C67]/30 to-[#3F1127]/30 rounded-full shadow-lg backdrop-blur-sm"
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
