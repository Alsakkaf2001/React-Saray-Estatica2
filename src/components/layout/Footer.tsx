import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../utils/constants";
import { fadeIn, staggerContainer } from "../../utils/animations";
import logoImage from "../../assets/FINAL LOGO ABO KAREEM 1 (1).png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const keyProcedures = [
    { label: "Hair Restoration", href: "#treatments" },
    { label: "Dental Treatments", href: "#treatments" },
    { label: "Rhinoplasty", href: "#treatments" },
    { label: "Liposuction", href: "#treatments" },
    { label: "Facelift", href: "#treatments" },
    { label: "See All Treatments →", href: "#treatments" },
  ];

  const importantLinks = [
    { label: "About Saray Estetica", href: "/about" },
    { label: "Before & After Gallery", href: "#trust-results" },
    { label: "Patient Reviews", href: "#" },
    { label: "Your Journey & Pricing", href: "#patient-journey" },
    { label: "Contact Us", href: "#contact" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <footer className="bg-gradient-primary text-white">
      <motion.div
        className="container-custom section-padding"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          {/* Column 1: Brand & Socials */}
          <motion.div variants={fadeIn} className="space-y-4 sm:space-y-6">
            <div>
              <div className="mb-3 sm:mb-4">
                <img
                  src={logoImage}
                  alt="Saray Estetica Logo"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-sm sm:text-base text-primary-100 leading-relaxed mb-4">
                The smarter way to achieve your aesthetic goals.
              </p>

              {/* Social Links */}
              <div>
                <div className="flex space-x-3 sm:space-x-4">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 min-w-[48px] min-h-[48px] bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 min-w-[48px] min-h-[48px] bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 min-w-[48px] min-h-[48px] bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.987 11.988 11.987s11.987-5.363 11.987-11.987C24.004 5.367 18.641.001 12.017.001zM17.66 15.577c-.16.389-.67.622-1.097.622-.17 0-.353-.026-.537-.08-1.29-.376-1.717-.682-3.454-.682s-2.164.306-3.454.682c-.565.164-1.171-.062-1.354-.622-.183-.56.062-1.171.622-1.354 1.878-.55 2.722-.842 4.186-.842s2.308.292 4.186.842c.56.183.805.794.622 1.354zM8.364 12.5c-.823 0-1.49-.68-1.49-1.49s.667-1.49 1.49-1.49 1.49.68 1.49 1.49-.667 1.49-1.49 1.49zm7.271 0c-.823 0-1.49-.68-1.49-1.49s.667-1.49 1.49-1.49 1.49.68 1.49 1.49-.667 1.49-1.49 1.49z" />
                    </svg>
                  </a>
                  <a
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 min-w-[48px] min-h-[48px] bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Key Procedures */}
          <motion.div variants={fadeIn} className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-semibold">Key Procedures</h4>
            <ul className="space-y-2 sm:space-y-3">
              {keyProcedures.map((procedure, index) => (
                <li key={index}>
                  <a
                    href={procedure.href}
                    className={`text-sm sm:text-base text-primary-100 hover:text-white hover:pl-2 transition-all duration-200 block ${
                      procedure.label.includes("→")
                        ? "font-medium text-accent-400"
                        : ""
                    }`}
                  >
                    {procedure.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Important Links */}
          <motion.div variants={fadeIn} className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-semibold">
              Important Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-primary-100 hover:text-white hover:pl-2 transition-all duration-200 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Get in Touch */}
          <motion.div variants={fadeIn} className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-semibold">Get In Touch</h4>
            <div className="space-y-3 sm:space-y-4">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(
                  /[^0-9]/g,
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-100 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-accent-400" />
                <span className="text-sm sm:text-base">Chat With Us</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center space-x-3 text-primary-100 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-accent-400" />
                <span className="text-sm sm:text-base">
                  {CONTACT_INFO.phone}
                </span>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center space-x-3 text-primary-100 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-accent-400" />
                <span className="text-sm sm:text-base break-all">
                  {CONTACT_INFO.email}
                </span>
              </a>

              <div className="flex items-start space-x-3 text-primary-100">
                <MapPin className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm sm:text-base">
                    Nisantaşı, Istanbul, Turkey
                  </div>
                  <a
                    href="#"
                    className="text-xs sm:text-sm text-accent-400 hover:text-white transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sub-Footer Bar */}
        <motion.div
          variants={fadeIn}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-primary-500/30 px-4 sm:px-0"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-primary-100">
              <span>© {currentYear} Saray Estetica. All Rights Reserved.</span>
              <span className="hidden sm:inline">|</span>
              <a
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <span className="hidden sm:inline">|</span>
              <a
                href="/terms-conditions"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
            <div className="flex items-center space-x-4">
              {/* JCI Logo Placeholder */}
              <div className="bg-white/10 px-3 py-1 rounded text-xs font-medium">
                JCI
              </div>
              {/* Other Accreditation Logo Placeholder */}
              <div className="bg-white/10 px-3 py-1 rounded text-xs font-medium">
                ISO
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 300 }}
      >
        <a
          href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 touch-manipulation"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
          </svg>
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
