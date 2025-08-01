import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
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
      <Card className="text-center p-8 h-full hover:shadow-lg transition-shadow duration-300">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
          <Icon className="w-8 h-8 text-primary-500" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          {title}
        </h3>
        <div className="space-y-2 mb-6">
          {details.map((detail, index) => (
            <p key={index} className="text-gray-600">
              {detail}
            </p>
          ))}
        </div>
        {action && (
          <Button variant="outline" size="sm" fullWidth>
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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your transformation journey? Contact us today for a
              free consultation with our expert team.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
          >
            {contactInfo.map((info, index) => (
              <ContactInfoCard key={index} {...info} />
            ))}
          </motion.div>

          {/* Main Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div variants={slideLeft}>
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Send Us a Message
                </h3>

                {isSubmitted ? (
                  <motion.div
                    variants={formSuccess}
                    initial="hidden"
                    animate="visible"
                    className="text-center py-8"
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <h4 className="text-xl font-semibold text-text-primary">
                        Message Sent!
                      </h4>
                      <p className="text-gray-600 max-w-md">
                        {SUCCESS_MESSAGES.contact}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <Input
                      label="Full Name"
                      placeholder="Enter your full name"
                      error={errors.name?.message}
                      {...register("name")}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="your@email.com"
                        error={errors.email?.message}
                        {...register("email")}
                      />
                      <Input
                        label="Phone Number"
                        type="tel"
                        placeholder="+90 XXX XXX XXXX"
                        error={errors.phone?.message}
                        {...register("phone")}
                      />
                    </div>

                    <Input
                      label="Subject"
                      placeholder="What is this regarding?"
                      error={errors.subject?.message}
                      {...register("subject")}
                    />

                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        className="input-field min-h-[120px] resize-vertical"
                        placeholder="Tell us how we can help you..."
                        {...register("message")}
                      />
                      {errors.message && (
                        <p className="error-message mt-2">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        className="input-field"
                        {...register("preferredContact")}
                      >
                        <option value="">Select preference</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone Call</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      isLoading={isSubmitting}
                      rightIcon={<Send className="w-5 h-5" />}
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div variants={slideRight} className="space-y-8">
              {/* Map Placeholder */}
              <Card className="p-8">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Our Location
                </h3>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Interactive Map</p>
                    <p className="text-sm text-gray-400">
                      Google Maps integration
                    </p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-text-primary">Address</p>
                      <p className="text-gray-600">{CONTACT_INFO.address}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Working Hours */}
              <Card className="p-8">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  Working Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-text-primary">
                      {CONTACT_INFO.workingHours.weekdays}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-text-primary">
                      {CONTACT_INFO.workingHours.saturday}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-text-primary">
                      {CONTACT_INFO.workingHours.sunday}
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary-500 mr-2" />
                    <span className="text-sm font-medium text-primary-500">
                      Emergency consultations available 24/7
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
