import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, DollarSign, Eye } from "lucide-react";
import type { Treatment } from "../../types";
import { TREATMENTS } from "../../utils/constants";
import {
  staggerContainer,
  slideUp,
  galleryImageHover,
} from "../../utils/animations";
import Button from "../ui/Button";
import Card from "../ui/Card";

interface TreatmentCardProps {
  treatment: Treatment;
  onViewDetails: (treatmentId: string) => void;
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
              onClick={() => onViewDetails(treatment.id)}
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
            onClick={() => onViewDetails(treatment.id)}
            className="text-sm sm:text-base"
          >
            Learn More
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

interface TreatmentsSectionProps {
  showAll?: boolean;
  category?: string;
  title?: string;
  subtitle?: string;
  onTreatmentClick?: (treatmentId: string) => void;
}

const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  showAll = false,
  category,
  title = "Our Premium Treatments",
  subtitle = "Discover our comprehensive range of aesthetic treatments designed to enhance your natural beauty and boost your confidence.",
  onTreatmentClick,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("dental");

  // Filter treatments
  let filteredTreatments = TREATMENTS;
  if (category) {
    filteredTreatments = TREATMENTS.filter((t) => t.category === category);
  } else if (showAll) {
    // When showAll is true, show all treatments but still allow filtering
    if (activeCategory) {
      filteredTreatments = TREATMENTS.filter(
        (t) => t.category === activeCategory
      );
    }
  } else {
    filteredTreatments = TREATMENTS.filter(
      (t) => t.category === activeCategory
    );
  }

  // Limit treatments if not showing all
  if (!showAll && !category) {
    filteredTreatments = filteredTreatments.slice(0, 6);
  }

  const categories = [
    { id: "dental", label: "Dental Treatments" },
    { id: "nose-surgery", label: "Face & Nose Aesthetics" },
    { id: "cosmetic-surgery", label: "Body Aesthetics" },
    { id: "hair-transplant", label: "Hair Restoration" },
  ];

  const handleViewDetails = (treatmentId: string) => {
    if (onTreatmentClick) {
      onTreatmentClick(treatmentId);
    }
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
    </section>
  );
};

export default TreatmentsSection;
