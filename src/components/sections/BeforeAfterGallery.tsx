import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Camera, Award, Heart } from "lucide-react";
import type { BeforeAfterImage } from "../../types";
import BeforeAfterSlider from "../ui/BeforeAfterSlider";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import {
  staggerContainer,
  slideUp,
  fadeIn,
  scaleIn,
} from "../../utils/animations";

interface BeforeAfterGalleryProps {
  images: BeforeAfterImage[];
  title?: string;
  subtitle?: string;
}

const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({
  images,
  title = "Transformation Gallery",
  subtitle = "Real results from our satisfied patients. See the amazing transformations achieved through our advanced treatments.",
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<BeforeAfterImage | null>(
    null
  );

  const categories = [
    { id: "all", label: "All Results", icon: Eye },
    { id: "hair-transplant", label: "Hair Transplant", icon: Camera },
    { id: "dental", label: "Dental", icon: Award },
    { id: "cosmetic-surgery", label: "Cosmetic Surgery", icon: Heart },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        className="container-custom"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div
          variants={slideUp}
          className="text-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
            {title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            {subtitle}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeIn}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "primary" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2 text-sm sm:text-base"
                size="md"
              >
                <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">
                  {category.label.split(" ")[0]}
                </span>
              </Button>
            );
          })}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation">
                <BeforeAfterSlider
                  beforeImage={image.beforeImage}
                  afterImage={image.afterImage}
                  className="h-48 sm:h-56 lg:h-64"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <h3 className="text-white text-base sm:text-lg font-semibold mb-1 leading-tight">
                      {image.treatment}
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 min-w-[40px] min-h-[40px] flex items-center justify-center">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeIn}
          className="text-center mt-8 sm:mt-12 lg:mt-16 px-4 sm:px-0"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary mb-3 sm:mb-4">
              Ready for Your Transformation?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Join thousands of satisfied patients who have achieved their dream
              results. Book your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto">
                Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View All Results
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal for enlarged view */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          title={selectedImage.treatment}
        >
          <div className="space-y-6">
            <BeforeAfterSlider
              beforeImage={selectedImage.beforeImage}
              afterImage={selectedImage.afterImage}
              className="w-full max-w-full sm:max-w-2xl mx-auto"
            />

            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">
                {selectedImage.treatment}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {selectedImage.description}
              </p>

              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button
                  onClick={() => setSelectedImage(null)}
                  className="w-full sm:w-auto"
                >
                  Book Similar Treatment
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedImage(null)}
                  className="w-full sm:w-auto"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default BeforeAfterGallery;
