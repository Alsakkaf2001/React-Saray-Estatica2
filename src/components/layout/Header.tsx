import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { NAVIGATION_ITEMS, CONTACT_INFO } from "../../utils/constants";
import { slideDown, navItemHover } from "../../utils/animations";
import Button from "../ui/Button";

interface HeaderProps {
  isScrolled?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled: propIsScrolled }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Detect active section based on scroll position
      const sections = [
        "home",
        "treatments",
        "before-after",
        "about",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolled = propIsScrolled ?? isScrolled;

  const handleDropdownToggle = (itemId: string) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    closeMobileMenu();
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-primary text-white py-2 px-4 hidden lg:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center hover:text-primary-200 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              {CONTACT_INFO.phone}
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center hover:text-primary-200 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              {CONTACT_INFO.email}
            </a>
          </div>
          <div className="text-right">
            <span>Working Hours: {CONTACT_INFO.workingHours.weekdays}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#home");
                }}
                className="flex items-center"
              >
                <div className="text-2xl font-bold text-gradient">
                  Saray Estetic
                </div>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item, index) => (
                <div key={item.id} className="relative group">
                  <motion.div
                    className={`font-medium py-2 px-1 transition-colors duration-200 flex items-center ${
                      activeSection === item.id
                        ? "text-primary-500"
                        : "text-text-primary hover:text-primary-500"
                    }`}
                    whileHover={navItemHover}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className="flex items-center"
                    >
                      {item.label}
                      {item.subItems && (
                        <ChevronDown className="w-4 h-4 ml-1" />
                      )}
                    </a>
                  </motion.div>

                  {/* Dropdown Menu */}
                  {item.subItems && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      <div className="py-2">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.id}
                            href={subItem.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(subItem.href);
                            }}
                            className="block px-4 py-3 text-sm text-gray-600 hover:text-primary-500 hover:bg-primary-50 transition-colors duration-200"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <motion.div
              className="hidden lg:flex items-center space-x-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button variant="outline" size="sm">
                Contact Us
              </Button>
              <Button variant="primary" size="sm">
                Free Consultation
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-text-primary hover:text-primary-500 transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />

          {/* Menu Content */}
          <motion.div
            className="absolute top-0 right-0 w-full max-w-xs sm:max-w-sm h-full bg-white shadow-2xl"
            variants={slideDown}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="p-4 sm:p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="text-xl font-bold text-gradient">
                  Saray Estetic
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-gray-500 hover:text-text-primary"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {NAVIGATION_ITEMS.map((item) => (
                  <div key={item.id}>
                    <div className="flex items-center justify-between">
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          if (!item.subItems) {
                            handleNavClick(item.href);
                          }
                        }}
                        className={`block py-3 text-lg font-medium transition-colors ${
                          activeSection === item.id
                            ? "text-primary-500"
                            : "text-text-primary hover:text-primary-500"
                        }`}
                      >
                        {item.label}
                      </a>
                      {item.subItems && (
                        <button
                          onClick={() => handleDropdownToggle(item.id)}
                          className="p-2 text-gray-400"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.id ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Sub Items */}
                    {item.subItems && activeDropdown === item.id && (
                      <motion.div
                        className="ml-4 mt-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.id}
                            href={subItem.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(subItem.href);
                            }}
                            className="block py-2 text-gray-600 hover:text-primary-500 transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-4">
                <Button variant="outline" fullWidth onClick={closeMobileMenu}>
                  Contact Us
                </Button>
                <Button variant="primary" fullWidth onClick={closeMobileMenu}>
                  Free Consultation
                </Button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="space-y-4">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex items-center text-gray-600 hover:text-primary-500"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    {CONTACT_INFO.phone}
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center text-gray-600 hover:text-primary-500"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Header;
