import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { NAVIGATION_ITEMS, CONTACT_INFO } from "../../utils/constants";
import { navItemHover } from "../../utils/animations";
import logoImage from "../../assets/FINAL LOGO ABO KAREEM 1 (1).png";

interface HeaderProps {
  isScrolled?: boolean;
  onNavigate?: (href: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  isScrolled: propIsScrolled,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [hasAnimated, setHasAnimated] = useState(() => {
    // Check if header has already animated in this session
    return sessionStorage.getItem("headerAnimated") === "true";
  });

  // Handle scroll effect and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Detect active section based on scroll position
      const sections = [
        { id: "home", navId: "home" },
        { id: "treatments", navId: "treatments" },
        { id: "trust-results", navId: "before-after" },
        { id: "faq", navId: "faq" },
        { id: "contact", navId: "contact" },
      ];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.navId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track if this is initial load to prevent re-animations on navigation
  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
      sessionStorage.setItem("headerAnimated", "true");
    }
  }, [hasAnimated]);

  // Detect current page to set active section for external pages
  useEffect(() => {
    const path = window.location.pathname.replace(
      import.meta.env.BASE_URL || "/",
      "/"
    );

    if (path.includes("/blog")) {
      setActiveSection("blog");
    } else if (path === "/about" || path === "/about/") {
      // Only set about as active when on the actual about page
      setActiveSection("about");
    } else {
      // For single page, active section will be handled by scroll detection
      // Set default to home if no scroll position
      if (window.scrollY === 0) {
        setActiveSection("home");
      }
    }
  }, []);

  const scrolled = propIsScrolled ?? isScrolled;

  const handleDropdownToggle = (itemId: string) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    // Re-enable body scroll
    document.body.style.overflow = "unset";
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Element exists on current page, scroll to it
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else if (onNavigate) {
        // Element doesn't exist (probably on blog page), navigate to home with hash
        onNavigate("/" + href);
      } else {
        // Fallback to normal navigation
        const base = import.meta.env.BASE_URL || "/";
        window.location.href = base + href.replace(/^#/, "#");
      }
    } else if (onNavigate) {
      // Handle external navigation (like /blog)
      onNavigate(href);
    } else {
      // Fallback to normal navigation
      const base = import.meta.env.BASE_URL || "/";
      window.location.href = href.startsWith("/")
        ? base + href.replace(/^\//, "")
        : href;
    }
    closeMobileMenu();
  };

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-[#A52C67] to-[#3F1127] text-white h-10 px-3 hidden lg:flex z-50 items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
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
        className="fixed top-0 lg:top-10 left-0 right-0 w-full z-50 transition-all duration-300"
        initial={hasAnimated ? { y: 0 } : { y: -100 }}
        animate={{ y: 0 }}
        transition={
          hasAnimated ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }
        }
      >
        {/* Vitalease-style rounded container */}
        <div className="container-custom py-3 lg:py-4">
          <div
            className={`
            ${
              scrolled
                ? "bg-white/95 backdrop-blur-md shadow-xl border border-gray-200/50"
                : "bg-white/90 backdrop-blur-sm shadow-lg border border-gray-100/50"
            } 
            rounded-2xl lg:rounded-3xl transition-all duration-300 px-4 lg:px-6
          `}
          >
            <div className="flex items-center justify-between h-14 lg:h-16">
              {/* Logo */}
              <motion.div
                className="flex-shrink-0"
                initial={
                  hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                animate={{ opacity: 1, x: 0 }}
                transition={
                  hasAnimated ? { duration: 0 } : { duration: 0.6, delay: 0.2 }
                }
              >
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#home");
                  }}
                  className="flex items-center"
                >
                  <img
                    src={logoImage}
                    alt="Saray Estetic Logo"
                    className="h-8 md:h-10 lg:h-11 w-auto object-contain"
                  />
                </a>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-2">
                {NAVIGATION_ITEMS.map((item, index) => (
                  <div key={item.id} className="relative group">
                    <motion.div
                      className={`font-medium py-2 px-4 rounded-xl transition-all duration-200 flex items-center ${
                        activeSection === item.id
                          ? "text-[#A52C67] bg-[#A52C67]/10"
                          : "text-gray-700 hover:text-[#A52C67] hover:bg-gray-50"
                      }`}
                      whileHover={navItemHover}
                      initial={
                        hasAnimated
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: -20 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      transition={
                        hasAnimated
                          ? { duration: 0 }
                          : { duration: 0.6, delay: 0.3 + index * 0.1 }
                      }
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className="flex items-center text-sm font-medium"
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
                className="hidden lg:flex items-center space-x-3"
                initial={
                  hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                animate={{ opacity: 1, x: 0 }}
                transition={
                  hasAnimated ? { duration: 0 } : { duration: 0.6, delay: 0.4 }
                }
              >
                {/* Language Switcher with modern styling */}
                <div className="mr-2">
                  {/* Language switcher would go here - placeholder for now */}
                  <button className="p-2 text-gray-600 hover:text-[#A52C67] rounded-lg hover:bg-gray-50 transition-all duration-200">
                    <span className="text-sm font-medium">EN</span>
                  </button>
                </div>

                <button className="text-gray-700 hover:text-[#A52C67] px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200 text-sm font-medium">
                  Contact Us
                </button>

                <button className="bg-gradient-to-r from-[#A52C67] to-[#3F1127] text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 text-sm font-medium">
                  Free Consultation
                </button>
              </motion.div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative p-2 w-10 h-10 flex items-center justify-center text-text-primary hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-all duration-300 touch-manipulation"
                  whileTap={{ scale: 0.95 }}
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                >
                  <motion.div
                    animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Menu className="w-5 h-5" />
                    )}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Vitalease Style Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-[60] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={closeMobileMenu}
          />

          {/* Menu Content */}
          <motion.div
            className="absolute top-4 left-4 right-4 bg-white rounded-2xl shadow-2xl max-h-[calc(100vh-2rem)] overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div className="flex flex-col max-h-[calc(100vh-2rem)]">
              {/* Header Section */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <img
                  src={logoImage}
                  alt="Saray Estetic Logo"
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 bg-gray-800 hover:bg-gray-900 rounded-xl transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Navigation Section */}
              <div className="flex-1 overflow-y-auto">
                <nav className="px-6 py-4">
                  <div className="space-y-0">
                    {NAVIGATION_ITEMS.map((item) => (
                      <div key={item.id}>
                        <div className="flex items-center justify-between border-b border-gray-100 last:border-b-0">
                          <a
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault();
                              if (!item.subItems) {
                                handleNavClick(item.href);
                              }
                            }}
                            className={`flex items-center py-4 px-2 text-base font-normal flex-1 transition-colors duration-200 ${
                              activeSection === item.id
                                ? "text-[#A52C67]"
                                : "text-gray-800 hover:text-[#A52C67]"
                            }`}
                          >
                            {item.label}
                          </a>
                          {item.subItems && (
                            <button
                              onClick={() => handleDropdownToggle(item.id)}
                              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
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
                            className="bg-gray-50 mx-2 rounded-lg mt-2 mb-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.subItems.map((subItem, index) => (
                              <a
                                key={subItem.id}
                                href={subItem.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNavClick(subItem.href);
                                }}
                                className={`block py-3 px-4 text-sm text-gray-600 hover:text-[#A52C67] transition-colors duration-200 ${
                                  index !== item.subItems!.length - 1 ? "border-b border-gray-200" : ""
                                }`}
                              >
                                {subItem.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>
              </div>

              {/* Bottom Section - Optional CTA */}
              <div className="p-6 border-t border-gray-100">
                <button
                  onClick={closeMobileMenu}
                  className="w-full py-3 px-6 bg-gradient-to-r from-[#A52C67] to-[#3F1127] text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
                >
                  Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Header;
