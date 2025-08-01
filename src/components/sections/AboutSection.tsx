import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Heart, Shield, CheckCircle, Star } from "lucide-react";
import {
  staggerContainer,
  slideLeft,
  slideRight,
  fadeIn,
  scaleIn,
} from "../../utils/animations";
import { getClinicImages, handleImageError } from "../../utils/imageUtils";
import Button from "../ui/Button";
import Card from "../ui/Card";

interface StatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  value,
  label,
  description,
}) => {
  return (
    <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
      <Card className="text-center p-8 h-full">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
          <Icon className="w-8 h-8 text-primary-500" />
        </div>
        <div className="text-3xl font-bold text-text-primary mb-2">{value}</div>
        <div className="text-lg font-semibold text-primary-500 mb-3">
          {label}
        </div>
        <p className="text-gray-600">{description}</p>
      </Card>
    </motion.div>
  );
};

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <motion.div variants={fadeIn} className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 rounded-lg">
          <Icon className="w-6 h-6 text-accent-600" />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-text-primary mb-2">
          {title}
        </h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const AboutSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Patients",
      description:
        "Satisfied patients from around the world who trust our expertise",
    },
    {
      icon: Award,
      value: "15+",
      label: "Years Experience",
      description: "Years of excellence in aesthetic medicine and patient care",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Patient Rating",
      description:
        "Consistently high ratings from our patients and international reviews",
    },
    {
      icon: Shield,
      value: "JCI",
      label: "Accredited",
      description:
        "International healthcare accreditation ensuring highest standards",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "International Standards",
      description:
        "Our clinic follows international medical standards and protocols, ensuring the highest quality of care for all our patients.",
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "We prioritize your comfort, safety, and satisfaction throughout your entire treatment journey with us.",
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description:
        "We use the latest medical equipment and techniques to deliver exceptional results with minimal downtime.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our experienced surgeons and medical staff are dedicated to providing you with personalized care and attention.",
    },
  ];

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
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Why Choose <span className="text-gradient">Saray Estetic</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine international expertise with Turkish hospitality to
              provide you with world-class aesthetic treatments in a comfortable
              and caring environment.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20"
          >
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div variants={slideLeft} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-text-primary mb-6">
                  Your Transformation Journey Starts Here
                </h3>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    At Saray Estetic, we believe that everyone deserves to feel
                    confident and beautiful. Our state-of-the-art clinic in the
                    heart of Istanbul combines cutting-edge medical technology
                    with the warmth of Turkish hospitality.
                  </p>
                  <p>
                    With over 15 years of experience and more than 10,000
                    successful procedures, our team of internationally trained
                    surgeons and medical professionals is committed to
                    delivering exceptional results that exceed your
                    expectations.
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button variant="primary" size="lg">
                  Meet Our Team
                </Button>
                <Button variant="outline" size="lg">
                  Our Certifications
                </Button>
              </div>
            </motion.div>

            {/* Right Content - Image Grid */}
            <motion.div variants={slideRight} className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Main Image */}
                <div className="col-span-2 aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src={getClinicImages().interior}
                    alt="Saray Estetic Clinic Interior"
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>

                {/* Side Images */}
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={getClinicImages().surgeryRoom}
                    alt="Modern Surgery Room"
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={getClinicImages().consultationRoom}
                    alt="Consultation Room"
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">
                      JCI Accredited
                    </div>
                    <div className="text-sm text-gray-500">
                      International Standards
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary-100 rounded-full opacity-50 -z-10" />
              <div className="absolute bottom-12 -right-4 w-16 h-16 bg-accent-100 rounded-full opacity-60 -z-10" />
            </motion.div>
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            variants={fadeIn}
            className="mt-20 text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-12"
          >
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a free consultation with our expert team and discover how we
              can help you achieve your aesthetic goals with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Book Free Consultation
              </Button>
              <Button variant="outline" size="lg">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
