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
        <motion.div variants={slideUp} className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeIn}
          className="flex flex-wrap justify-center gap-4 mb-12"
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
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </Button>
            );
          })}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <BeforeAfterSlider
                  beforeImage={image.beforeImage}
                  afterImage={image.afterImage}
                  className="h-64"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-semibold mb-1">
                      {image.treatment}
                    </h3>
                    <p className="text-white/90 text-sm line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Eye className="w-5 h-5 text-gray-700" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={fadeIn} className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready for Your Transformation?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied patients who have achieved their dream
              results. Book your free consultation today.
            </p>
            <Button size="lg" className="mr-4">
              Free Consultation
            </Button>
            <Button variant="outline" size="lg">
              View All Results
            </Button>
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
              className="w-full max-w-2xl mx-auto"
            />

            <div className="text-center">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {selectedImage.treatment}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {selectedImage.description}
              </p>

              <div className="mt-6 flex justify-center gap-4">
                <Button onClick={() => setSelectedImage(null)}>
                  Book Similar Treatment
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedImage(null)}
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
