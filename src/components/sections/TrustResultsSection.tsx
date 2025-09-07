import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { staggerContainer, fadeIn, scaleIn } from "../../utils/animations";
import Card from "../ui/Card";

interface TrustBarItemProps {
  value: string;
  label: string;
}

const TrustBarItem: React.FC<TrustBarItemProps> = ({ value, label }) => {
  return (
    <motion.div variants={scaleIn} className="text-center">
      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-1">
        {value}
      </div>
      <div className="text-sm sm:text-base text-gray-600">{label}</div>
    </motion.div>
  );
};

const TrustResultsSection: React.FC = () => {
  const trustItems = [
    { value: "4.9/5 stars", label: "Verifiable Rating" },
    { value: "3,000+", label: "Successful Procedures" },
    { value: "7+", label: "Years of Experience" },
  ];

  return (
    <section id="trust-results" className="section-padding bg-white">
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
            className="text-center mb-8 sm:mb-12 px-4 sm:px-0"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-text-primary mb-3 sm:mb-4 lg:mb-6">
              Real Results, Backed by Real Trust
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              We are proud of the results we achieve for our patients. See our
              work below, supported by thousands of positive reviews and years
              of experience.
            </p>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0"
          >
            {trustItems.map((item, index) => (
              <TrustBarItem key={index} {...item} />
            ))}
          </motion.div>

          {/* Gallery Section */}
          <motion.div variants={fadeIn} className="space-y-6 sm:space-y-8">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-3 sm:mb-4">
                Our Patient Transformations
              </h3>
            </div>

            {/* Video Testimonials Row */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0"
            >
              {/* Video Testimonial 1 */}
              <motion.div variants={scaleIn} className="relative group">
                <Card className="overflow-hidden h-full p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center relative">
                    <div className="text-center text-white space-y-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold">
                          Hair Transplant Success
                        </div>
                        <div className="text-sm opacity-90">
                          Patient Testimonial
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 cursor-pointer" />
                  </div>
                </Card>
              </motion.div>

              {/* Video Testimonial 2 */}
              <motion.div variants={scaleIn} className="relative group">
                <Card className="overflow-hidden h-full p-0">
                  <div className="aspect-video bg-gradient-to-br from-secondary-500 to-primary-500 flex items-center justify-center relative">
                    <div className="text-center text-white space-y-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold">
                          Dental Transformation
                        </div>
                        <div className="text-sm opacity-90">
                          Real Patient Story
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 cursor-pointer" />
                  </div>
                </Card>
              </motion.div>

              {/* Video Testimonial 3 */}
              <motion.div variants={scaleIn} className="relative group">
                <Card className="overflow-hidden h-full p-0">
                  <div className="aspect-video bg-gradient-to-br from-accent-500 to-secondary-500 flex items-center justify-center relative">
                    <div className="text-center text-white space-y-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold">
                          Cosmetic Surgery Journey
                        </div>
                        <div className="text-sm opacity-90">
                          Complete Experience
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 cursor-pointer" />
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustResultsSection;
