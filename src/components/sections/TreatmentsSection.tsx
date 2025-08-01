import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, DollarSign, Star, Eye } from "lucide-react";
import type { Treatment } from "../../types";
import { TREATMENTS } from "../../utils/constants";
import {
  staggerContainer,
  slideUp,
  galleryImageHover,
} from "../../utils/animations";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Modal from "../ui/Modal";

interface TreatmentCardProps {
  treatment: Treatment;
  onViewDetails: (treatment: Treatment) => void;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({
  treatment,
  onViewDetails,
}) => {
  return (
    <motion.div
      variants={slideUp}
      whileHover="hover"
      className="group cursor-pointer"
    >
      <Card
        className="overflow-hidden h-full bg-white border-0 shadow-soft hover:shadow-large transition-all duration-300"
        padding="none"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <motion.img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover"
            variants={{
              hover: galleryImageHover,
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
              {treatment.category.replace("-", " ").toUpperCase()}
            </span>
          </div>

          {/* View Details Button - Appears on Hover */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1 }}
          >
            <Button
              variant="accent"
              leftIcon={<Eye className="w-4 h-4" />}
              onClick={() => onViewDetails(treatment)}
            >
              View Details
            </Button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2 sm:mb-3 group-hover:text-primary-500 transition-colors leading-tight">
            {treatment.title}
          </h3>

          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
            {treatment.description}
          </p>

          {/* Features */}
          {treatment.features && treatment.features.length > 0 && (
            <div className="mb-3 sm:mb-4">
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {treatment.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary-50 text-text-primary text-xs font-medium rounded"
                  >
                    {feature}
                  </span>
                ))}
                {treatment.features.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                    +{treatment.features.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Meta Information */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
            {treatment.duration && (
              <div className="flex items-center">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="truncate">{treatment.duration}</span>
              </div>
            )}
            {treatment.price && (
              <div className="flex items-center">
                <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                <span className="truncate">{treatment.price}</span>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <Button
            variant="outline"
            fullWidth
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            onClick={() => onViewDetails(treatment)}
            className="text-sm sm:text-base"
          >
            Learn More
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  isOpen: boolean;
  onClose: () => void;
}

const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  isOpen,
  onClose,
}) => {
  if (!treatment) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={treatment.title} size="lg">
      <div className="p-6">
        {/* Image */}
        <div className="aspect-video mb-6 rounded-lg overflow-hidden">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover max-w-full"
          />
        </div>

        {/* Description */}
        <div className="prose max-w-none mb-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            {treatment.description}
          </p>
        </div>

        {/* Features */}
        {treatment.features && treatment.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-text-primary mb-3">
              Treatment Features
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {treatment.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Star className="w-4 h-4 text-accent-500 mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Price and Duration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
          {treatment.price && (
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
              <div className="flex items-center text-gray-600 mb-1 text-sm sm:text-base">
                <DollarSign className="w-4 h-4 mr-2" />
                Price
              </div>
              <div className="text-lg sm:text-xl font-semibold text-text-primary">
                {treatment.price}
              </div>
            </div>
          )}
          {treatment.duration && (
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
              <div className="flex items-center text-gray-600 mb-1 text-sm sm:text-base">
                <Clock className="w-4 h-4 mr-2" />
                Duration
              </div>
              <div className="text-lg sm:text-xl font-semibold text-text-primary">
                {treatment.duration}
              </div>
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="primary" size="lg" fullWidth className="w-full">
            Book Consultation
          </Button>
          <Button variant="outline" size="lg" fullWidth className="w-full">
            Get Quote
          </Button>
        </div>
      </div>
    </Modal>
  );
};

interface TreatmentsSectionProps {
  showAll?: boolean;
  category?: string;
  title?: string;
  subtitle?: string;
}

const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  showAll = false,
  category,
  title = "Our Premium Treatments",
  subtitle = "Discover our comprehensive range of aesthetic treatments designed to enhance your natural beauty and boost your confidence.",
}) => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Filter treatments
  let filteredTreatments = TREATMENTS;
  if (category) {
    filteredTreatments = TREATMENTS.filter((t) => t.category === category);
  } else if (activeCategory !== "all") {
    filteredTreatments = TREATMENTS.filter(
      (t) => t.category === activeCategory
    );
  }

  // Limit treatments if not showing all
  if (!showAll && !category) {
    filteredTreatments = filteredTreatments.slice(0, 6);
  }

  const categories = [
    { id: "all", label: "All Treatments" },
    { id: "hair-transplant", label: "Hair Transplant" },
    { id: "dental", label: "Dental" },
    { id: "nose-surgery", label: "Nose Surgery" },
    { id: "cosmetic-surgery", label: "Cosmetic Surgery" },
  ];

  const handleViewDetails = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTreatment(null);
  };

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
          <motion.div
            variants={slideUp}
            className="text-center mb-8 sm:mb-12 px-4 sm:px-0"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
              {title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              {subtitle}
            </p>
          </motion.div>

          {/* Category Filter */}
          {!category && (
            <motion.div
              variants={slideUp}
              className="flex justify-center mb-8 sm:mb-12 px-4 sm:px-0"
            >
              <div className="flex flex-wrap gap-2 bg-white p-2 rounded-xl shadow-soft max-w-full overflow-x-auto">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base whitespace-nowrap min-h-[48px] flex items-center ${
                      activeCategory === cat.id
                        ? "bg-primary-500 text-white shadow-md"
                        : "text-gray-600 hover:text-primary-500 hover:bg-primary-50"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Treatments Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0"
          >
            {filteredTreatments.map((treatment) => (
              <TreatmentCard
                key={treatment.id}
                treatment={treatment}
                onViewDetails={handleViewDetails}
              />
            ))}
          </motion.div>

          {/* View All Button */}
          {!showAll && !category && (
            <motion.div
              variants={slideUp}
              className="text-center mt-8 sm:mt-12 px-4 sm:px-0"
            >
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
                className="w-full sm:w-auto"
              >
                View All Treatments
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Treatment Detail Modal */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default TreatmentsSection;
