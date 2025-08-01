import React from "react";
import { motion } from "framer-motion";
import { cardHover, cardTap } from "../../utils/animations";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "outline" | "glass";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  hover?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
  padding = "md",
  hover = false,
  clickable = false,
  onClick,
}) => {
  const baseClasses = "transition-all duration-300";

  const variantClasses = {
    default: "bg-white border border-gray-200 rounded-xl",
    elevated: "bg-white shadow-soft hover:shadow-medium rounded-xl",
    outline: "bg-transparent border-2 border-gray-200 rounded-xl",
    glass: "glass",
  };

  const paddingClasses = {
    none: "",
    sm: "p-3",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  const interactiveClasses = clickable ? "cursor-pointer" : "";

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${paddingClasses[padding]}
    ${interactiveClasses}
    ${className}
  `.trim();

  const MotionCard = motion.div;

  return (
    <MotionCard
      className={classes}
      onClick={onClick}
      whileHover={hover || clickable ? cardHover : {}}
      whileTap={clickable ? cardTap : {}}
      layout
    >
      {children}
    </MotionCard>
  );
};

export default Card;
