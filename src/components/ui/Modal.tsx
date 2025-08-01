import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { modalBackdrop } from "../../utils/animations";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
}) => {
  const sizeClasses = {
    sm: "max-w-md mx-4",
    md: "max-w-lg mx-4",
    lg: "max-w-2xl mx-4",
    xl: "max-w-4xl mx-4",
    full: "max-w-7xl mx-4",
  };

  // Handle escape key
  useEffect(() => {
    if (!closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose, closeOnEscape]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeOnBackdropClick ? onClose : undefined}
          />

          {/* Modal Content */}
          <motion.div
            className={`relative bg-white rounded-lg sm:rounded-xl shadow-2xl w-full ${sizeClasses[size]} max-h-[95vh] sm:max-h-[90vh] overflow-hidden`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            {(title || showCloseButton) && (
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
                {title && (
                  <h3 className="text-lg sm:text-xl font-semibold text-text-primary pr-2">
                    {title}
                  </h3>
                )}
                {showCloseButton && (
                  <button
                    onClick={onClose}
                    className="p-2 sm:p-1 min-w-[44px] min-h-[44px] sm:min-w-auto sm:min-h-auto flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg sm:rounded-none transition-colors duration-200"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                )}
              </div>
            )}

            {/* Body */}
            <div className="overflow-y-auto max-h-[calc(95vh-6rem)] sm:max-h-[calc(90vh-8rem)]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  // Render modal in portal
  return createPortal(modalContent, document.body);
};

export default Modal;
