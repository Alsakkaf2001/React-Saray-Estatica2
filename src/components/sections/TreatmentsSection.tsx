import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, DollarSign, Eye } from "lucide-react";
import type { Treatment } from "../../types";
import { TREATMENTS } from "../../utils/constants";
import {
  staggerContainer,
  slideUp,
  galleryImageHover,
} from "../../utils/animations";
import { useNavigation } from "../../contexts/NavigationContext";
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
        className="overflow-hidden h-full bg-white border-0 shadow-soft hover:shadow-large transition-all duration-300 flex flex-col"
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
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1.5 bg-primary-500 text-white text-xs font-semibold rounded-full shadow-sm">
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
        <div className="p-6 flex flex-col h-full space-y-4">
          {/* Title Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2 group-hover:text-primary-500 transition-colors leading-tight">
              {treatment.title}
            </h3>
          </div>

          {/* Description Section */}
          <div className="flex-grow">
            <p className="text-base text-gray-600 leading-relaxed line-clamp-2">
              {treatment.description}
            </p>
          </div>

          {/* Features Section */}
          {treatment.features && treatment.features.length > 0 && (
            <div>
              <div className="flex flex-wrap gap-2">
                {treatment.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                  >
                    {feature}
                  </span>
                ))}
                {treatment.features.length > 3 && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    +{treatment.features.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Meta Information Section */}
          <div className="flex justify-between items-center text-xs text-gray-500">
            {treatment.duration && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className="truncate font-medium">
                  {treatment.duration}
                </span>
              </div>
            )}
            {treatment.price && (
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                <span className="truncate font-medium">{treatment.price}</span>
              </div>
            )}
          </div>

          {/* CTA Button Section */}
          <div className="mt-2">
            <Button
              variant="primary"
              fullWidth
              size="sm"
              rightIcon={<ArrowRight className="w-3 h-3" />}
              onClick={() => onViewDetails(treatment.id)}
              className="text-sm font-semibold"
            >
              Learn More
            </Button>
          </div>
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
  const { activeTreatmentCategory, setActiveTreatmentCategory } =
    useNavigation();

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

  const categories = useMemo(
    () => [
      { id: "dental", label: "Dental Treatments" },
      { id: "nose-face-aesthetics", label: "Nose & Face Aesthetics" },
      { id: "body-aesthetics", label: "Body Aesthetics" },
      { id: "hair-restoration", label: "Hair Restoration" },
      { id: "weight-loss", label: "Weight-Loss Treatments" },
    ],
    []
  );

  const handleViewDetails = (treatmentId: string) => {
    if (onTreatmentClick) {
      onTreatmentClick(treatmentId);
    }
  };

  // Handle external navigation to specific categories
  useEffect(() => {
    const handleCategoryNavigation = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const targetCategory = urlParams.get("category");
      if (
        targetCategory &&
        categories.find((cat) => cat.id === targetCategory)
      ) {
        setActiveCategory(targetCategory);
        setActiveTreatmentCategory(targetCategory);
        // Don't remove the parameter immediately - let it stay for a bit
        setTimeout(() => {
          const newUrl = new URL(window.location.href);
          newUrl.searchParams.delete("category");
          window.history.replaceState({}, "", newUrl.toString());
        }, 1000);
      }
    };

    // Listen for custom events from Header
    const handleTreatmentCategorySelected = (event: CustomEvent) => {
      const { categoryId } = event.detail;
      if (categories.find((cat) => cat.id === categoryId)) {
        setActiveCategory(categoryId);
        setActiveTreatmentCategory(categoryId);
      }
    };

    handleCategoryNavigation();

    window.addEventListener(
      "treatmentCategorySelected",
      handleTreatmentCategorySelected as EventListener
    );

    return () => {
      window.removeEventListener(
        "treatmentCategorySelected",
        handleTreatmentCategorySelected as EventListener
      );
    };
  }, [categories, setActiveTreatmentCategory]);

  // Sync with navigation context
  useEffect(() => {
    if (
      activeTreatmentCategory &&
      categories.find((cat) => cat.id === activeTreatmentCategory)
    ) {
      setActiveCategory(activeTreatmentCategory);
    }
  }, [activeTreatmentCategory, categories]);

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
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-text-primary mb-3 sm:mb-4 lg:mb-6">
              {title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
              {subtitle}
            </p>
          </motion.div>

          {/* Category Filter */}
          {!category && (
            <motion.div
              variants={slideUp}
              className="flex justify-center mb-6 sm:mb-8 px-4 sm:px-0"
            >
              <div className="w-full max-w-6xl">
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2 bg-white p-2 sm:p-3 rounded-lg shadow-soft">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      data-category={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-medium transition-all duration-300 text-xs sm:text-sm whitespace-nowrap flex items-center justify-center ${
                        activeCategory === cat.id
                          ? "bg-primary-500 text-white shadow-sm"
                          : "text-gray-600 hover:text-primary-500 hover:bg-primary-50"
                      }`}
                    >
                      <span className="text-center leading-tight">
                        {cat.label}
                      </span>
                    </button>
                  ))}
                </div>
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
