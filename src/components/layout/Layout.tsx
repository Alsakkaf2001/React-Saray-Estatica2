import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { pageTransition } from "../../utils/animations";

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
        transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
};

export default Layout;
