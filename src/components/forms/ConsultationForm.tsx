import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  Clock,
  CheckCircle,
} from "lucide-react";
import type { ConsultationFormData } from "../../types/forms";
import {
  TREATMENT_OPTIONS,
  TIME_SLOTS,
  SUCCESS_MESSAGES,
} from "../../utils/constants";
import { slideUp, formSuccess } from "../../utils/animations";
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
    watch,
    reset,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  const onSubmit = async (data: ConsultationFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", data);
      setIsSubmitted(true);
      reset();

      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
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
      <motion.div
        className={`text-center p-8 ${className}`}
        variants={formSuccess}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
            Thank You!
          </h3>
          <p className="text-gray-600 max-w-md">
            {SUCCESS_MESSAGES.consultation}
          </p>
        </div>
      </motion.div>
    );
  }

  const renderStepContent = () => {
    if (variant === "compact") {
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="First Name"
              leftIcon={<User className="w-5 h-5" />}
              error={errors.firstName?.message}
              {...register("firstName")}
            />
            <Input
              label="Last Name"
              leftIcon={<User className="w-5 h-5" />}
              error={errors.lastName?.message}
              {...register("lastName")}
            />
          </div>

          <Input
            label="Email"
            type="email"
            leftIcon={<Mail className="w-5 h-5" />}
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            label="Phone"
            type="tel"
            leftIcon={<Phone className="w-5 h-5" />}
            error={errors.phone?.message}
            {...register("phone")}
          />

          <div className="form-group">
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Service Interest
            </label>
            <select className="input-field" {...register("service")}>
              <option value="">Select a service</option>
              {TREATMENT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="error-message">{errors.service.message}</p>
            )}
          </div>
        </div>
      );
    }

    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="First Name"
                leftIcon={<User className="w-5 h-5" />}
                error={errors.firstName?.message}
                {...register("firstName")}
              />
              <Input
                label="Last Name"
                leftIcon={<User className="w-5 h-5" />}
                error={errors.lastName?.message}
                {...register("lastName")}
              />
            </div>

            <Input
              label="Email Address"
              type="email"
              leftIcon={<Mail className="w-5 h-5" />}
              error={errors.email?.message}
              {...register("email")}
            />

            <Input
              label="Phone Number"
              type="tel"
              leftIcon={<Phone className="w-5 h-5" />}
              error={errors.phone?.message}
              {...register("phone")}
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">
              Treatment Information
            </h3>

            <div className="form-group">
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Service Interest
              </label>
              <select className="input-field" {...register("service")}>
                <option value="">Select a service</option>
                {TREATMENT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="error-message">{errors.service.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Preferred Date"
                type="date"
                leftIcon={<Calendar className="w-5 h-5" />}
                error={errors.preferredDate?.message}
                {...register("preferredDate")}
              />

              <div className="form-group">
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Preferred Time
                </label>
                <select className="input-field" {...register("preferredTime")}>
                  <option value="">Select time</option>
                  {TIME_SLOTS.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">
              Additional Information
            </h3>

            <div className="form-group">
              <label className="block text-sm font-medium text-text-secondary mb-2">
                Message (Optional)
              </label>
              <textarea
                className="input-field min-h-[100px] resize-vertical"
                placeholder="Tell us about your expectations, medical history, or any questions..."
                {...register("message")}
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                {...register("agreeToTerms")}
              />
              <label className="text-sm text-gray-600">
                I agree to the{" "}
                <a
                  href="/terms-conditions"
                  className="text-primary-500 hover:underline"
                >
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-policy"
                  className="text-primary-500 hover:underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
            {errors.agreeToTerms && (
              <p className="error-message">{errors.agreeToTerms.message}</p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg p-4 sm:p-6 ${className}`}
      variants={slideUp}
      initial="hidden"
      animate="visible"
    >
      {variant !== "compact" && (
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
            Free Consultation
          </h2>
          <p className="text-gray-600">
            Get expert advice on your aesthetic journey
          </p>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round((currentStep / totalSteps) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {renderStepContent()}

        {/* Form Actions */}
        <div className="flex justify-between pt-6">
          {variant !== "compact" && currentStep > 1 ? (
            <Button type="button" variant="outline" onClick={prevStep}>
              Previous
            </Button>
          ) : (
            <div />
          )}

          {variant === "compact" || currentStep === totalSteps ? (
            <Button
              type="submit"
              variant="primary"
              isLoading={isSubmitting}
              className="ml-auto"
            >
              Send Request
            </Button>
          ) : (
            <Button type="button" variant="primary" onClick={nextStep}>
              Next Step
            </Button>
          )}
        </div>
      </form>
    </motion.div>
  );
};

export default ConsultationForm;
