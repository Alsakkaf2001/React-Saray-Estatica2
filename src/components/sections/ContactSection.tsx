import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";
import type { ContactFormData } from "../../types/forms";
import { CONTACT_INFO, SUCCESS_MESSAGES } from "../../utils/constants";
import {
  staggerContainer,
  slideLeft,
  slideRight,
  fadeIn,
  formSuccess,
} from "../../utils/animations";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Card from "../ui/Card";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^\+?[\d\s-()]+$/, "Please enter a valid phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  preferredContact: z.enum(["email", "phone", "whatsapp"]).optional(),
});

interface ContactInfoCardProps {
  icon: React.ElementType;
  title: string;
  details: string[];
  action?: {
    label: string;
    href: string;
  };
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  icon: Icon,
  title,
  details,
  action,
}) => {
  return (
    <motion.div variants={fadeIn}>
      <Card className="text-center p-4 sm:p-6 lg:p-8 h-full hover:shadow-lg transition-shadow duration-300">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary-100 rounded-full mb-4 sm:mb-6">
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary-500" />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-3 sm:mb-4">
          {title}
        </h3>
        <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
          {details.map((detail, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-600">
              {detail}
            </p>
          ))}
        </div>
        {action && (
          <Button variant="outline" size="md" fullWidth>
            <a
              href={action.href}
              className="flex items-center justify-center w-full"
            >
              {action.label}
            </a>
          </Button>
        )}
      </Card>
    </motion.div>
  );
};

const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Contact form submitted:", data);
      setIsSubmitted(true);
      reset();

      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: [CONTACT_INFO.phone, "Available 24/7"],
      action: {
        label: "Call Now",
        href: `tel:${CONTACT_INFO.phone}`,
      },
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: [CONTACT_INFO.whatsapp, "Quick Response"],
      action: {
        label: "Chat Now",
        href: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, "")}`,
      },
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [CONTACT_INFO.email, "Response within 24h"],
      action: {
        label: "Send Email",
        href: `mailto:${CONTACT_INFO.email}`,
      },
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: [CONTACT_INFO.address, "Istanbul, Turkey"],
      action: {
        label: "Get Directions",
        href: "#",
      },
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div
            variants={fadeIn}
            className="text-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-text-primary mb-3 sm:mb-4 lg:mb-6">
              Ready to See Your Personalized Plan?
            </h2>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0"
          >
            {contactInfo.map((info, index) => (
              <ContactInfoCard key={index} {...info} />
            ))}
          </motion.div>

          {/* Main Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-0">
            {/* Left Column - Reassurance Text */}
            <motion.div variants={slideLeft} className="space-y-6">
              <div>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                  The first step is a simple, friendly conversation. There's no
                  cost and no obligation. Tell us what you're hoping to achieve,
                  and one of our dedicated coordinators will get back to you
                  with a clear plan and an all-inclusive quote.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-base text-gray-700">
                      100% Free & Confidential
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-base text-gray-700">
                      Personalized Expert Advice
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-base text-gray-700">
                      A Clear, No-Surprises Quote
                    </span>
                  </div>
                </div>
              </div>

              {/* Alternative Contact */}
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                  <span className="text-lg font-semibold text-gray-900">
                    Prefer to talk?
                  </span>
                </div>
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 w-full"
                  leftIcon={
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                    </svg>
                  }
                >
                  Chat Now on WhatsApp
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Simplified Form */}
            <motion.div variants={slideRight}>
              <Card className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-4 sm:mb-6">
                  Start Your Free Consultation
                </h3>

                {isSubmitted ? (
                  <motion.div
                    variants={formSuccess}
                    initial="hidden"
                    animate="visible"
                    className="text-center py-6 sm:py-8"
                  >
                    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-semibold text-text-primary">
                        Message Sent!
                      </h4>
                      <p className="text-sm sm:text-base text-gray-600 max-w-md">
                        {SUCCESS_MESSAGES.contact}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 sm:space-y-6"
                  >
                    <Input
                      label="Full Name"
                      placeholder="Enter your full name"
                      error={errors.name?.message}
                      size="md"
                      {...register("name")}
                    />

                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="your@email.com"
                      error={errors.email?.message}
                      size="md"
                      {...register("email")}
                    />

                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service of Interest
                      </label>
                      <select
                        className="input-field text-base"
                        {...register("subject")}
                      >
                        <option value="">Select a service</option>
                        <option value="Hair Restoration">
                          Hair Restoration
                        </option>
                        <option value="Dental Treatments">
                          Dental Treatments
                        </option>
                        <option value="Rhinoplasty">Rhinoplasty</option>
                        <option value="Liposuction">Liposuction</option>
                        <option value="Facelift">Facelift</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.subject && (
                        <p className="error-message mt-2">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      isLoading={isSubmitting}
                      rightIcon={<Send className="w-4 h-4 sm:w-5 sm:h-5" />}
                    >
                      Get My Free Quote & Plan
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
