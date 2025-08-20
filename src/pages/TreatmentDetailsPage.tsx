import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  DollarSign,
  CheckCircle,
  Phone,
  MessageCircle,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import SEOHead from "../components/ui/SEOHead";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { TREATMENTS, BEFORE_AFTER_IMAGES } from "../utils/constants";
import { fadeIn, staggerContainer, slideUp } from "../utils/animations";

interface TreatmentDetailsPageProps {
  treatmentId: string;
  onBack: () => void;
  onNavigate?: (href: string) => void;
}

const TreatmentDetailsPage: React.FC<TreatmentDetailsPageProps> = ({
  treatmentId,
  onBack,
  onNavigate,
}) => {
  const treatment = TREATMENTS.find((t) => t.id === treatmentId);

  // Scroll to top when component mounts or treatmentId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [treatmentId]);

  if (!treatment) {
    return (
      <Layout onNavigate={onNavigate}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Treatment Not Found
            </h1>
            <Button onClick={onBack} variant="primary">
              Back to Treatments
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  // Get related before/after images for this treatment
  const relatedImages = BEFORE_AFTER_IMAGES.filter(
    (img) =>
      img.treatment.toLowerCase().includes(treatment.title.toLowerCase()) ||
      img.category === treatment.category
  ).slice(0, 4);

  return (
    <>
      <SEOHead
        title={`${treatment.title} - Saray Estetica Istanbul`}
        description={`${treatment.description} Professional ${treatment.title} treatment in Istanbul with transparent pricing and authentic patient results.`}
        keywords={`${treatment.title}, ${treatment.category}, Istanbul, aesthetic treatment, cosmetic surgery, medical tourism Turkey`}
        url={`https://sarayestetic.com/treatments/${treatment.id}`}
      />
      <Layout onNavigate={onNavigate}>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Back Button */}
              <motion.div variants={fadeIn} className="mb-6 px-4 sm:px-0">
                <Button
                  variant="outline"
                  leftIcon={<ArrowLeft className="w-4 h-4" />}
                  onClick={onBack}
                  className="mb-4"
                >
                  Back to Treatments
                </Button>
              </motion.div>

              {/* Treatment Header */}
              <motion.div
                variants={fadeIn}
                className="text-center mb-8 sm:mb-12 px-4 sm:px-0"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
                  {treatment.title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                  {treatment.description}
                </p>
              </motion.div>

              {/* Main Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-0">
                {/* Left Column - Treatment Image */}
                <motion.div variants={slideUp}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Before & After Gallery */}
                  {relatedImages.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-4">
                        Patient Results
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {relatedImages.map((image) => (
                          <div key={image.id} className="space-y-2">
                            <div className="aspect-square rounded-lg overflow-hidden">
                              <div className="flex h-full">
                                <div className="w-1/2 relative">
                                  <img
                                    src={image.beforeImage}
                                    alt="Before"
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute bottom-1 left-1 bg-black/70 text-white text-xs px-1 py-0.5 rounded">
                                    Before
                                  </div>
                                </div>
                                <div className="w-1/2 relative">
                                  <img
                                    src={image.afterImage}
                                    alt="After"
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute bottom-1 right-1 bg-primary-500 text-white text-xs px-1 py-0.5 rounded">
                                    After
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Right Column - Treatment Details */}
                <motion.div variants={slideUp} className="space-y-6">
                  {/* Pricing & Duration */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {treatment.price && (
                      <Card className="p-4 sm:p-6">
                        <div className="flex items-center text-gray-600 mb-2">
                          <DollarSign className="w-5 h-5 mr-2 text-primary-500" />
                          <span className="font-medium">Starting Price</span>
                        </div>
                        <div className="text-2xl font-bold text-text-primary">
                          {treatment.price}
                        </div>
                      </Card>
                    )}
                    {treatment.duration && (
                      <Card className="p-4 sm:p-6">
                        <div className="flex items-center text-gray-600 mb-2">
                          <Clock className="w-5 h-5 mr-2 text-primary-500" />
                          <span className="font-medium">Duration</span>
                        </div>
                        <div className="text-2xl font-bold text-text-primary">
                          {treatment.duration}
                        </div>
                      </Card>
                    )}
                  </div>

                  {/* Features */}
                  {treatment.features && treatment.features.length > 0 && (
                    <Card className="p-4 sm:p-6">
                      <h3 className="text-lg font-semibold text-text-primary mb-4">
                        Treatment Features
                      </h3>
                      <div className="space-y-3">
                        {treatment.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  )}

                  {/* Detailed Description */}
                  <Card className="p-4 sm:p-6">
                    <h3 className="text-lg font-semibold text-text-primary mb-4">
                      About This Treatment
                    </h3>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 leading-relaxed">
                        {treatment.description}
                      </p>
                      <p className="text-gray-700 leading-relaxed mt-4">
                        Our expert team uses the latest techniques and equipment
                        to ensure you receive the highest quality care. Every
                        procedure is performed by qualified specialists with
                        years of experience in aesthetic medicine.
                      </p>
                    </div>
                  </Card>

                  {/* CTA Buttons */}
                  <div className="space-y-4">
                    <Button
                      variant="primary"
                      size="lg"
                      fullWidth
                      leftIcon={<Phone className="w-5 h-5" />}
                    >
                      Book Free Consultation
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      fullWidth
                      leftIcon={<MessageCircle className="w-5 h-5" />}
                    >
                      Get Instant Quote
                    </Button>
                  </div>

                  {/* Trust Indicators */}
                  <Card className="p-4 sm:p-6 bg-green-50 border-green-200">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">
                          100% Free Consultation
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">
                          All-Inclusive Packages
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">
                          JCI Accredited Clinic
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default TreatmentDetailsPage;
