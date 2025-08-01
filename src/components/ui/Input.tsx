import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "default" | "filled" | "underlined";
  size?: "sm" | "md" | "lg";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      variant = "default",
      size = "md",
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses = "w-full transition-all duration-300 focus:outline-none";

    const variantClasses = {
      default: `border rounded-lg px-4 ${
        error
          ? "border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent"
          : "border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      }`,
      filled: `bg-gray-50 border-0 rounded-lg px-4 ${
        error
          ? "focus:ring-2 focus:ring-red-500 bg-red-50"
          : "focus:ring-2 focus:ring-primary-500 focus:bg-white"
      }`,
      underlined: `border-0 border-b-2 px-0 rounded-none ${
        error
          ? "border-red-500 focus:border-red-600"
          : "border-gray-300 focus:border-primary-500"
      }`,
    };

    const sizeClasses = {
      sm: "py-2 text-sm",
      md: "py-3 text-base",
      lg: "py-4 text-lg",
    };

    const iconPadding = {
      left: leftIcon
        ? size === "sm"
          ? "pl-10"
          : size === "lg"
          ? "pl-14"
          : "pl-12"
        : "",
      right:
        rightIcon || error
          ? size === "sm"
            ? "pr-10"
            : size === "lg"
            ? "pr-14"
            : "pr-12"
          : "",
    };

    const inputClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${iconPadding.left}
    ${iconPadding.right}
    ${className}
  `.trim();

    return (
      <div className="form-group">
        {label && (
          <label className="block text-sm font-medium text-text-secondary mb-2">
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${
                size === "sm"
                  ? "w-4 h-4"
                  : size === "lg"
                  ? "w-6 h-6"
                  : "w-5 h-5"
              }`}
            >
              {leftIcon}
            </div>
          )}

          <motion.input
            ref={ref}
            className={inputClasses}
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            {...(({ onDrag, onDragEnd, onDragStart, onAnimationStart, onAnimationEnd, ...rest }) => rest)(props)}
          />

          {(rightIcon || error) && (
            <div
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                size === "sm"
                  ? "w-4 h-4"
                  : size === "lg"
                  ? "w-6 h-6"
                  : "w-5 h-5"
              }`}
            >
              {error ? (
                <AlertCircle className="text-red-500" />
              ) : (
                <span className="text-gray-400">{rightIcon}</span>
              )}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2"
          >
            {error && (
              <p className="error-message flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {error}
              </p>
            )}
            {helperText && !error && (
              <p className="text-sm text-gray-500">{helperText}</p>
            )}
          </motion.div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
