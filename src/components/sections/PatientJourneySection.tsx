import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Stethoscope, Heart } from "lucide-react";
import { staggerContainer, slideUp, fadeIn } from "../../utils/animations";

interface JourneyStepProps {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
}

const JourneyStep: React.FC<JourneyStepProps & { index: number }> = ({
  number,
  icon: Icon,
  title,
  description,
  image,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={slideUp}
      className="relative mb-12 sm:mb-16 lg:mb-20"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div
        className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16 ${
          !isEven ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Image Side */}
        <div className="flex-1">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#A52C67]/20 to-[#3F1127]/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Step Number Overlay */}
              <div className="absolute top-6 left-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#A52C67] to-[#3F1127] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">
                    {number}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="flex-1 w-full">
          <div className="space-y-4 sm:space-y-6">
            {/* Icon and Title */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#A52C67] to-[#3F1127] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs sm:text-sm font-semibold text-[#A52C67] uppercase tracking-wide mb-1">
                  Step {number}
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  {title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Connecting Line (except for last item) */}
      {index < 3 && (
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            className="w-1 h-20 bg-gradient-to-b from-[#A52C67] to-[#3F1127] rounded-full"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
          />
        </div>
      )}
    </motion.div>
  );
};

const PatientJourneySection: React.FC = () => {
  const journeySteps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Free Online Consultation",
      description:
        "Begin your transformation journey with a comprehensive online consultation. Share your photos, discuss your goals, and receive a personalized treatment plan with transparent pricing - all from the comfort of your home.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center&q=80",
    },
    {
      number: "2",
      icon: MapPin,
      title: "All-Inclusive Trip Planning",
      description:
        "Once you're ready to proceed, we handle every detail of your medical journey. From luxury accommodation to airport transfers and clinic visits - you just book your flight and we take care of the rest.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&crop=center&q=80",
    },
    {
      number: "3",
      icon: Stethoscope,
      title: "Expert Medical Care",
      description:
        "Receive world-class treatment from Turkey's leading specialists in state-of-the-art facilities. With personal translators and dedicated coordinators, you'll feel supported throughout your entire procedure.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop&crop=center&q=80",
    },
    {
      number: "4",
      icon: Heart,
      title: "Recovery & Lifelong Support",
      description:
        "Your care continues long after you return home. We provide detailed aftercare instructions, schedule regular follow-up calls, and offer 24/7 support to ensure your complete satisfaction and success.",
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop&crop=center&q=80",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#A52C67]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3F1127]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#A52C67]/3 to-[#3F1127]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={fadeIn} className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#A52C67] to-[#3F1127] rounded-3xl mb-8 shadow-xl">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              A Simple Path to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A52C67] to-[#3F1127]">
                Your Results
              </span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Follow our proven 4-step process designed to make your
              transformation journey as smooth and successful as possible.
            </p>
          </motion.div>

          {/* Journey Steps - Organized Layout */}
          <div className="max-w-6xl mx-auto">
            {journeySteps.map((step, index) => (
              <JourneyStep key={index} {...step} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-20"
            variants={fadeIn}
            transition={{ delay: 1 }}
          >
            <motion.button
              className="bg-gradient-to-r from-[#A52C67] to-[#3F1127] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const formElement =
                  document.getElementById("consultation-form");
                if (formElement) {
                  formElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }
              }}
            >
              Start Your Journey Today
            </motion.button>
            <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base">
              No obligation • Free consultation • Transparent pricing
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PatientJourneySection;
