import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { pageTransition, pageTransitionSettings } from "../../utils/animations";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <motion.main
        className={`flex-grow ${className}`}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={pageTransitionSettings}
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
};

export default Layout;
