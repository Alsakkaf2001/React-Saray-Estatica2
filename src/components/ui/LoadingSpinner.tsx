import React from "react";
import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "white" | "gray";
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  color = "primary",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  const colorClasses = {
    primary: "border-primary-500",
    secondary: "border-secondary-500",
    white: "border-white",
    gray: "border-gray-500",
  };

  const classes = `
    ${sizeClasses[size]}
    ${colorClasses[color]}
    border-2 border-t-transparent rounded-full
    ${className}
  `.trim();

  return (
    <motion.div
      className={classes}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default LoadingSpinner;
