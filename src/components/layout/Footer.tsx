import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import {
  CONTACT_INFO,
  SOCIAL_LINKS,
  NAVIGATION_ITEMS,
} from "../../utils/constants";
import { fadeIn, staggerContainer } from "../../utils/animations";
import Button from "../ui/Button";
import logoImage from "../../assets/FINAL LOGO ABO KAREEM 1 (1).png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = NAVIGATION_ITEMS.filter((item) => !item.subItems);
  const treatmentLinks =
    NAVIGATION_ITEMS.find((item) => item.id === "treatments")?.subItems || [];

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
          {/* Company Info */}
          <motion.div variants={fadeIn} className="space-y-4 sm:space-y-6">
            <div>
              <div className="mb-3 sm:mb-4">
                <img
                  src={logoImage}
                  alt="Saray Estetic Logo"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-sm sm:text-base text-primary-100 leading-relaxed">
                Leading aesthetic clinic in Istanbul offering world-class
                treatments with international standards. Your transformation
                journey starts here.
              </p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-accent-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-primary-100">
                  {CONTACT_INFO.address}
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-accent-400 flex-shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-sm sm:text-base text-primary-100 hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-accent-400 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm sm:text-base text-primary-100 hover:text-white transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-accent-400 flex-shrink-0" />
                <span className="text-sm sm:text-base text-primary-100">
                  {CONTACT_INFO.workingHours.weekdays}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeIn} className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-primary-100 hover:text-white hover:pl-2 transition-all duration-200 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/privacy-policy"
                  className="text-primary-100 hover:text-white hover:pl-2 transition-all duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-conditions"
                  className="text-primary-100 hover:text-white hover:pl-2 transition-all duration-200"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Treatments */}
          <motion.div variants={fadeIn} className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-semibold">Our Treatments</h4>
            <ul className="space-y-2 sm:space-y-3">
              {treatmentLinks.map((treatment) => (
                <li key={treatment.id}>
                  <a
                    href={treatment.href}
                    className="text-sm sm:text-base text-primary-100 hover:text-white hover:pl-2 transition-all duration-200 block"
                  >
                    {treatment.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div variants={fadeIn} className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-semibold">Stay Connected</h4>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-primary-100">
                Subscribe to our newsletter for the latest updates and special
                offers.
              </p>

              {/* Newsletter Form */}
              <div className="space-y-2 sm:space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 sm:px-4 py-3 h-12 text-sm sm:text-base rounded-lg bg-white/10 border border-white/20 text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                />
                <Button variant="accent" size="md" fullWidth>
                  Subscribe
                </Button>
              </div>

              {/* Social Links */}
              <div>
                <h5 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">
                  Follow Us
                </h5>
                <div className="flex space-x-3 sm:space-x-4">
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 min-w-[48px] min-h-[48px] bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 min-w-[48px] min-h-[48px] bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 min-w-[48px] min-h-[48px] bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 min-w-[48px] min-h-[48px] bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeIn}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-primary-500/30 px-4 sm:px-0"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0 text-center md:text-left">
            <div className="text-primary-100 text-xs sm:text-sm">
              © {currentYear} Saray Estetic. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm text-primary-100">
              <a
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-conditions"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookie-policy"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
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
