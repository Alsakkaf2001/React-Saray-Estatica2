import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Star,
  Shield,
  Clock,
  Heart,
} from "lucide-react";
import { fadeIn, slideUp, staggerContainer } from "../../utils/animations";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "How long does the recovery process take?",
    answer:
      "Recovery time varies depending on the specific treatment. Hair transplant procedures typically require 7-10 days for initial healing, while dental treatments may need 3-5 days. Our medical team provides detailed recovery guidelines and 24/7 support throughout your healing journey.",
    category: "Recovery",
  },
  {
    id: "2",
    question: "Are your procedures internationally certified?",
    answer:
      "Yes, absolutely. Our clinic holds international certifications including JCI (Joint Commission International) accreditation. All our surgeons are internationally trained with certifications from Europe and the United States. We maintain the highest medical standards in the industry.",
    category: "Certification",
  },
  {
    id: "3",
    question: "What is included in your all-inclusive packages?",
    answer:
      "Our packages include the medical procedure, pre and post-operative consultations, medications, accommodation at luxury hotels, airport transfers, 24/7 medical support, and dedicated patient coordinator services. We handle every detail of your journey.",
    category: "Packages",
  },
  {
    id: "4",
    question: "Do you provide lifetime guarantees on treatments?",
    answer:
      "We offer comprehensive guarantees on our procedures. Hair transplants come with a lifetime guarantee, dental treatments have warranties ranging from 5-15 years depending on the procedure, and aesthetic surgeries include revision policies. All guarantees are backed by our commitment to excellence.",
    category: "Guarantees",
  },
  {
    id: "5",
    question: "How do I prepare for my procedure?",
    answer:
      "We provide a comprehensive pre-treatment guide tailored to your specific procedure. This includes dietary recommendations, medication adjustments, and lifestyle modifications. Our patient coordinators will guide you through every step of the preparation process.",
    category: "Preparation",
  },
  {
    id: "6",
    question: "What safety protocols do you follow?",
    answer:
      "We adhere to the strictest international safety protocols. Our facilities are equipped with state-of-the-art medical technology, we use only FDA-approved materials, and maintain sterile environments exceeding European medical standards. Patient safety is our absolute priority.",
    category: "Safety",
  },
];

const FAQAccordionItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}> = ({ item, isOpen, onToggle, index }) => {
  return (
    <motion.div variants={slideUp} className="group">
      <div className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200">
        <button
          onClick={onToggle}
          className="w-full px-6 sm:px-8 py-6 sm:py-7 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-300"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${item.id}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-start space-x-4 flex-1">
              <div className="flex-shrink-0 mt-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white"
                      : "bg-gray-100 text-gray-500 group-hover:bg-primary-100 group-hover:text-primary-600"
                  }`}
                >
                  <span className="text-sm font-semibold">{index + 1}</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary pr-4 leading-tight">
                {item.question}
              </h3>
            </div>
            <div className="flex-shrink-0 ml-4">
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  isOpen
                    ? "bg-primary-500 text-white"
                    : "bg-gray-100 text-gray-500 group-hover:bg-primary-100 group-hover:text-primary-600"
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </div>
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id={`faq-answer-${item.id}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 sm:px-8 pb-6 sm:pb-7">
                <div className="pl-12 pr-4">
                  <div className="h-px bg-gradient-to-r from-primary-200 to-transparent mb-6"></div>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const TrustIndicators: React.FC = () => {
  const indicators = [
    {
      icon: Shield,
      title: "JCI Accredited",
      subtitle: "International Standards",
    },
    {
      icon: Star,
      title: "4.9/5 Rating",
      subtitle: "10,000+ Happy Patients",
    },
    {
      icon: Clock,
      title: "15+ Years",
      subtitle: "Medical Excellence",
    },
    {
      icon: Heart,
      title: "24/7 Support",
      subtitle: "Dedicated Care Team",
    },
  ];

  return (
    <motion.div
      variants={fadeIn}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12"
    >
      {indicators.map((indicator, index) => (
        <motion.div
          key={index}
          variants={slideUp}
          className="bg-white rounded-xl p-4 sm:p-6 shadow-soft hover:shadow-medium transition-all duration-300 text-center group cursor-pointer"
          whileHover={{ y: -5 }}
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
            <indicator.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <h4 className="font-bold text-text-primary text-sm sm:text-base mb-1">
            {indicator.title}
          </h4>
          <p className="text-gray-500 text-xs sm:text-sm">
            {indicator.subtitle}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>("1");

  const handleToggle = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/3 to-accent-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #A52C67 1px, transparent 1px),
                               radial-gradient(circle at 75% 75%, #3F1127 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={fadeIn} className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl mb-6 sm:mb-8 shadow-xl">
              <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
                Questions
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Get instant answers to the most common questions about our
              treatments, procedures, and services. Still have questions? Our
              expert team is here to help.
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <TrustIndicators />

          {/* FAQ Items */}
          <motion.div
            variants={staggerContainer}
            className="space-y-4 sm:space-y-6"
          >
            {faqData.map((item, index) => (
              <FAQAccordionItem
                key={item.id}
                item={item}
                isOpen={openItem === item.id}
                onToggle={() => handleToggle(item.id)}
                index={index}
              />
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeIn}
            className="text-center mt-16 p-8 sm:p-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl shadow-xl relative overflow-hidden"
          >
            {/* Background Pattern for CTA */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 20%, white 1px, transparent 1px),
                                     radial-gradient(circle at 80% 80%, white 1px, transparent 1px)`,
                  backgroundSize: "30px 30px",
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Our expert medical consultants are available 24/7 to provide
                personalized answers and help you make the best decision for
                your transformation journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  Get Free Consultation
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
                >
                  Contact Our Team
                </motion.button>
              </div>

              <p className="text-white/70 text-sm mt-6">
                🕒 Available 24/7 • 📞 Multilingual Support • 💬 Instant
                Response
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
