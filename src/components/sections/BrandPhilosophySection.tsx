import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  staggerContainer,
  slideLeft,
  slideRight,
} from "../../utils/animations";
import { getClinicImages, handleImageError } from "../../utils/imageUtils";
import Button from "../ui/Button";

interface BrandPhilosophySectionProps {
  onNavigateToAbout?: () => void;
}

const BrandPhilosophySection: React.FC<BrandPhilosophySectionProps> = ({
  onNavigateToAbout,
}) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center px-4 sm:px-0">
            {/* Left Content */}
            <motion.div variants={slideLeft} className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-text-primary mb-4 sm:mb-6 lg:mb-8">
                  Our Promise to You
                </h2>
                <div className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed space-y-3 sm:space-y-4 lg:space-y-6">
                  <p>
                    At Saray Estetica, our work is guided by a simple belief:
                    high-quality care should be clear, honest, and accessible.
                    We combine proven medical expertise with the genuine warmth
                    of Turkish hospitality to create a supportive environment
                    where you feel understood and valued.
                  </p>
                  <p>
                    Our entire process is built on transparency and a total
                    commitment to your safety and satisfaction. We're not just a
                    clinic; we're your dedicated partner on your journey.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 sm:pt-8">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
                  className="w-full sm:w-auto"
                  onClick={() => onNavigateToAbout?.()}
                >
                  Learn More About Our Clinic
                </Button>
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div variants={slideRight} className="relative">
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
                <img
                  src={getClinicImages().interior}
                  alt="Saray Estetica Clinic - Professional coordinators and welcoming reception area"
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 hidden sm:block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-text-primary">
                      International Standards
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      JCI Accredited Clinic
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary-100 rounded-full opacity-50 -z-10" />
              <div className="absolute bottom-12 -right-4 w-16 h-16 bg-accent-100 rounded-full opacity-60 -z-10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandPhilosophySection;
