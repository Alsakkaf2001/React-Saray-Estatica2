import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Mail, Phone, Calendar, CheckCircle, Send } from "lucide-react";
import type { ConsultationFormData } from "../../types/forms";
import {
  TREATMENT_OPTIONS,
  TIME_SLOTS,
  SUCCESS_MESSAGES,
} from "../../utils/constants";
import { slideUp, formSuccess } from "../../utils/animations";
import { submitCustomerContact } from "../../utils/blogApi";
import Button from "../ui/Button";
import Input from "../ui/Input";

// Validation schema
const consultationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^\+?[\d\s-()]+$/, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  agreeToTerms: z
    .boolean()
    .refine((val) => val === true, "Please agree to terms and conditions"),
});

interface ConsultationFormProps {
  variant?: "default" | "compact" | "modal";
  onSuccess?: () => void;
  className?: string;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({
  variant = "default",
  onSuccess,
  className = "",
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = variant === "compact" ? 1 : 3;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  const onSubmit = async (data: ConsultationFormData) => {
    try {
      // Save to database
      await submitCustomerContact({
        fullName: `${data.firstName} ${data.lastName}`,
        phoneWhatsapp: data.phone,
        email: data.email,
        country: "Not specified", // This form doesn't have country field
        treatment: data.service,
      });

      console.log("Form submitted:", data);
      setIsSubmitted(true);
      reset();

      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Still show success to user even if database save fails
      setIsSubmitted(true);
      reset();
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <motion.div
          className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-12 max-w-2xl mx-auto border border-white/20 text-center ${className}`}
          variants={formSuccess}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-col items-center space-y-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Thank You!
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                {SUCCESS_MESSAGES.consultation}
              </p>
            </div>
            <motion.div
              className="w-full bg-gray-200 rounded-full h-2 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.7 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  const renderStepContent = () => {
    if (variant === "compact") {
      return (
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-[#7a1430] to-[#b52d65] rounded-full flex items-center justify-center mr-2">
                <User className="w-3 h-3 text-white" />
              </div>
              Quick Consultation
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Input
                label="First Name"
                leftIcon={<User className="w-4 h-4 text-gray-400" />}
                error={errors.firstName?.message}
                className="text-sm"
                size="sm"
                {...register("firstName")}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Input
                label="Last Name"
                leftIcon={<User className="w-4 h-4 text-gray-400" />}
                error={errors.lastName?.message}
                className="text-sm"
                size="sm"
                {...register("lastName")}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Input
              label="Phone Number WhatsApp"
              type="tel"
              leftIcon={<Phone className="w-4 h-4 text-gray-400" />}
              error={errors.phone?.message}
              className="text-sm"
              size="sm"
              {...register("phone")}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Input
              label="Email Address"
              type="email"
              leftIcon={<Mail className="w-4 h-4 text-gray-400" />}
              error={errors.email?.message}
              className="text-sm"
              size="sm"
              {...register("email")}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Treatment
              </label>
              <div className="relative">
                <select
                  className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg focus:border-[#7a1430] focus:ring-1 focus:ring-[#7a1430]/20 outline-none transition-all duration-200 text-sm text-gray-900 appearance-none cursor-pointer hover:border-gray-400"
                  {...register("service")}
                >
                  <option value="">Select a service</option>
                  {TREATMENT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {errors.service && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.service.message}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      );
    }

    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#7a1430] to-[#b52d65] rounded-full flex items-center justify-center mr-3">
                  <User className="w-4 h-4 text-white" />
                </div>
                Personal Information
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Input
                  label="First Name"
                  leftIcon={<User className="w-5 h-5 text-gray-400" />}
                  error={errors.firstName?.message}
                  className="text-base group"
                  {...register("firstName")}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Input
                  label="Last Name"
                  leftIcon={<User className="w-5 h-5 text-gray-400" />}
                  error={errors.lastName?.message}
                  className="text-base group"
                  {...register("lastName")}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Input
                label="Email Address"
                type="email"
                leftIcon={<Mail className="w-5 h-5 text-gray-400" />}
                error={errors.email?.message}
                className="text-base group"
                {...register("email")}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Input
                label="Phone Number"
                type="tel"
                leftIcon={<Phone className="w-5 h-5 text-gray-400" />}
                error={errors.phone?.message}
                className="text-base group"
                {...register("phone")}
              />
            </motion.div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#7a1430] to-[#b52d65] rounded-full flex items-center justify-center mr-3">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                Treatment Information
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Service Interest
                </label>
                <div className="relative">
                  <select
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-[#7a1430] focus:ring-2 focus:ring-[#7a1430]/20 outline-none transition-all duration-200 text-gray-900 appearance-none cursor-pointer hover:border-gray-300"
                    {...register("service")}
                  >
                    <option value="">Select a service</option>
                    {TREATMENT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {errors.service.message}
                  </p>
                )}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Input
                  label="Preferred Date"
                  type="date"
                  leftIcon={<Calendar className="w-5 h-5 text-gray-400" />}
                  error={errors.preferredDate?.message}
                  className="text-base group"
                  {...register("preferredDate")}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <select
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-[#7a1430] focus:ring-2 focus:ring-[#7a1430]/20 outline-none transition-all duration-200 text-gray-900 appearance-none cursor-pointer hover:border-gray-300"
                      {...register("preferredTime")}
                    >
                      <option value="">Select time</option>
                      {TIME_SLOTS.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-[#7a1430] to-[#b52d65] rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                Additional Information
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Message (Optional)
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-[#7a1430] focus:ring-2 focus:ring-[#7a1430]/20 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400 min-h-[120px] resize-vertical"
                  placeholder="Tell us about your expectations, medical history, or any questions..."
                  {...register("message")}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <input
                  type="checkbox"
                  className="mt-1 w-5 h-5 text-[#7a1430] border-gray-300 rounded focus:ring-[#7a1430] focus:ring-2"
                  {...register("agreeToTerms")}
                />
                <label className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                  I agree to the{" "}
                  <a
                    href="/terms-conditions"
                    className="text-[#7a1430] hover:underline font-medium"
                  >
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy-policy"
                    className="text-[#7a1430] hover:underline font-medium"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-red-500 text-sm mt-2 flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.agreeToTerms.message}
                </p>
              )}
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className={`${className}`}
      variants={slideUp}
      initial="hidden"
      animate="visible"
    >
      {variant !== "compact" && (
        <div className="mb-8">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#7a1430] to-[#b52d65] bg-clip-text text-transparent mb-3 font-sans">
                Start Your Free Consultation
              </h2>
              <p className="text-gray-600 text-lg">
                Get expert advice on your aesthetic journey
              </p>
            </motion.div>
          </div>

          {/* Enhanced Progress Bar */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm font-medium text-[#7a1430]">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-[#7a1430] to-[#b52d65] h-3 rounded-full shadow-sm"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {renderStepContent()}
        </motion.div>

        {/* Enhanced Form Actions */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between pt-6 sm:pt-8 gap-4 sm:gap-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {variant !== "compact" && currentStep > 1 ? (
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              size="lg"
              className="w-full sm:w-auto"
            >
              Previous
            </Button>
          ) : (
            <div className="hidden sm:block" />
          )}

          {variant === "compact" || currentStep === totalSteps ? (
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#7a1430] to-[#b52d65] hover:from-[#8a1a3a] hover:to-[#c53d75] text-white py-4 rounded-lg font-bold text-base disabled:opacity-50 shadow-lg hover:shadow-xl transition-all duration-300 font-sans border-0 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                <>
                  <span>Get My Free Quote & Plan</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          ) : (
            <Button
              type="button"
              variant="primary"
              onClick={nextStep}
              size="lg"
              className="w-full sm:w-auto"
            >
              Next Step
            </Button>
          )}
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ConsultationForm;
