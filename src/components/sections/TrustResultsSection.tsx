import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { staggerContainer, fadeIn, scaleIn } from "../../utils/animations";
import { BEFORE_AFTER_IMAGES } from "../../utils/constants";
import Button from "../ui/Button";
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

  // Get first 6 images for gallery
  const galleryImages = BEFORE_AFTER_IMAGES.slice(0, 6);

  return (
    <section className="section-padding bg-white">
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
              Real Results, Backed by Real Trust
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
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
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                Our Patient Transformations
              </h3>
            </div>

            {/* Gallery Grid */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0"
            >
              {/* First item - Video Testimonial Placeholder */}
              <motion.div variants={scaleIn} className="relative group">
                <Card className="overflow-hidden h-full p-0">
                  <div className="aspect-square bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center relative">
                    <div className="text-center text-white space-y-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold">
                          Video Testimonial
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

              {/* Before & After Images */}
              {galleryImages.slice(0, 5).map((image) => (
                <motion.div
                  key={image.id}
                  variants={scaleIn}
                  className="group cursor-pointer"
                >
                  <Card className="overflow-hidden h-full p-0">
                    <div className="aspect-square relative">
                      <div className="flex h-full">
                        <div className="w-1/2 relative">
                          <img
                            src={image.beforeImage}
                            alt={`${image.treatment} - Before`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            Before
                          </div>
                        </div>
                        <div className="w-1/2 relative">
                          <img
                            src={image.afterImage}
                            alt={`${image.treatment} - After`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-2 right-2 bg-primary-500 text-white text-xs px-2 py-1 rounded">
                            After
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                    <div className="p-3">
                      <div className="text-sm font-medium text-text-primary truncate">
                        {image.treatment}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={fadeIn}
              className="text-center mt-8 sm:mt-12 px-4 sm:px-0"
            >
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
                className="w-full sm:w-auto"
              >
                See Our Full Before & After Gallery
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustResultsSection;
