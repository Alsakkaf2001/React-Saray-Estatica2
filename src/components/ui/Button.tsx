import React from "react";
import { motion } from "framer-motion";
import { buttonHover, buttonTap } from "../../utils/animations";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-gradient-primary hover:bg-gradient-primary-hover text-white focus:ring-primary-500 shadow-lg hover:shadow-xl",
    secondary:
      "bg-secondary-100 hover:bg-secondary-200 text-text-primary focus:ring-primary-500",
    accent:
      "bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-500 shadow-lg hover:shadow-xl",
    outline:
      "border-2 border-primary-500 text-text-primary hover:bg-gradient-primary hover:text-white focus:ring-primary-500",
    ghost: "text-text-primary hover:bg-primary-50 focus:ring-primary-500",
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl",
  };

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `.trim();

  return (
    <motion.button
      className={classes}
      disabled={disabled || isLoading}
      whileHover={!disabled && !isLoading ? buttonHover : {}}
      whileTap={!disabled && !isLoading ? buttonTap : {}}
      {...props}
    >
      {isLoading ? (
        <>
          <motion.div
            className="w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          Loading...
        </>
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </motion.button>
  );
};

export default Button;
