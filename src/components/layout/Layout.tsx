import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { pageTransition } from "../../utils/animations";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  onNavigate?: (href: string) => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className = "",
  onNavigate,
}) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header onNavigate={onNavigate} />

      <motion.main
        className={`flex-grow mobile-no-scroll pt-16 md:pt-20 lg:pt-36 ${className}`}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
};

export default Layout;
