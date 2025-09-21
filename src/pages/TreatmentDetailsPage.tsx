import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  DollarSign,
  CheckCircle,
  Phone,
  Plus,
  Minus,
  Star,
  Award,
  Shield,
  Heart,
} from "lucide-react";
import Layout from "../components/layout/Layout";
import SEOHead from "../components/ui/SEOHead";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { TREATMENTS } from "../utils/constants";
import { fadeIn, staggerContainer } from "../utils/animations";
import { getTreatmentDetailImage } from "../utils/treatmentImageReplacements";

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
  const [expandedFAQ, setExpandedFAQ] = React.useState<number | null>(null);

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

  // Treatment specific content
  const isDhiHairTransplant = treatment.id === "dhi-hair-transplant";
  const isSapphireFue = treatment.id === "sapphire-fue-hair-transplant";
  const isHollywoodSmile = treatment.id === "zirconium-crowns";
  const isDentalVeneers = treatment.id === "dental-veneers-emax";
  const isDentalImplants = treatment.id === "dental-implants";
  const isRhinoplasty = treatment.id === "rhinoplasty";
  const isFacelift = treatment.id === "facelift";
  const isChinLiposuction = treatment.id === "double-chin-liposuction";
  const isLiposuction = treatment.id === "liposuction";
  const isTummyTuck = treatment.id === "tummy-tuck";
  const isMommyMakeover = treatment.id === "mommy-makeover";
  const isBBL =
    treatment.id === "brazilian-butt-lift" || treatment.id === "bbl";
  const isBreastLift =
    treatment.id === "breast-lift" || treatment.id === "mastopexy";
  const isBreastAugmentation = treatment.id === "breast-augmentation";
  const isBreastReduction =
    treatment.id === "breast-reduction" ||
    treatment.id === "reduction-mammoplasty";
  const isGynecomastia =
    treatment.id === "gynecomastia" || treatment.id === "male-breast-reduction";
  const isGastricSleeve =
    treatment.id === "gastric-sleeve" || treatment.id === "sleeve-gastrectomy";
  const isGastricBypass =
    treatment.id === "gastric-bypass" || treatment.id === "roux-en-y";
  const isGastricBalloon =
    treatment.id === "gastric-balloon" ||
    treatment.id === "intragastric-balloon";
  const isArmLift =
    treatment.id === "arm-lift" || treatment.id === "brachioplasty";
  const isThighLift =
    treatment.id === "thigh-lift" || treatment.id === "thighplasty";
  const isEyebrowLift =
    treatment.id === "eyebrow-lift" || treatment.id === "brow-lift";
  const isBeardTransplant = treatment.id === "beard-transplant";

  const sapphireFueContent = {
    pageTitle:
      "Sapphire FUE Hair Transplant in Istanbul | Advanced Precision for Natural Results",
    hero: {
      visual:
        "A confident man showing natural, thick hairline with professional appearance and natural hair growth pattern.",
      headline:
        "Sapphire FUE Hair Transplant — The Next Generation of Hair Restoration",
      subheadline:
        "Sapphire FUE is an advanced version of the Follicular Unit Extraction (FUE) method, performed with blades made of sapphire crystal instead of steel. This allows for more precise incisions, denser implantation, and faster healing. At Saray Estetica, it is our most requested technique for natural, permanent results.",
      image: getTreatmentDetailImage("sapphire-fue-hair-transplant", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Who Is It For?",
        content: `Sapphire FUE may be suitable if you:`,
        image: getTreatmentDetailImage("sapphire-fue", "candidacy"),
        checklist: [
          "Have male or female pattern hair loss.",
          "Want a natural-looking hairline with higher density.",
          "Prefer a minimally invasive technique with faster recovery.",
          "Are seeking permanent hair restoration without linear scarring.",
        ],
        subtitle: "What Is Sapphire FUE?",
        footer:
          "Sapphire FUE improves on the traditional FUE method with sapphire blades that are smoother, sharper, and smaller than steel. They create micro-channels with less trauma to the scalp, allowing for higher density and more natural results through closer graft placement.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Approach",
        content:
          "Advanced sapphire blade technology for precise micro-channels and optimal graft placement for natural, permanent hair restoration.",
        subtitle: "Recovery in Istanbul (4-5 Days)",
        image: getTreatmentDetailImage("sapphire-fue", "process"),
        processSteps: [
          {
            title: "Planning & Design",
            description:
              "Every transplant begins with detailed consultation analyzing donor capacity, hair type, and degree of hair loss. The hairline is designed to suit your age, face, and future hair loss pattern.",
          },
          {
            title: "Surgical Details & Advantages",
            description:
              "Advanced sapphire blade technique for superior results and faster recovery.",
            benefits: [
              "Local anesthesia — no general anesthesia required.",
              "Procedure length: 6–8 hours (depending on grafts).",
              "No stitches, no linear scars.",
              "Outpatient — you return to your hotel the same day.",
              "Denser, more natural results.",
              "Reduced trauma → less swelling and faster healing.",
              "Smaller, smoother incisions → minimal scarring.",
              "Suitable for higher graft counts.",
            ],
          },
        ],
        timeline: [
          {
            stage: "Consultation & Procedure",
            timeframe: "Day 1",
            description:
              "Detailed hair analysis, hairline design, and 6-8 hour sapphire FUE procedure.",
            icon: "💎",
          },
          {
            stage: "Post-op Check & First Wash",
            timeframe: "Day 2",
            description:
              "Professional post-operative check and first specialized hair wash.",
            icon: "🧴",
          },
          {
            stage: "Early Healing",
            timeframe: "Days 3-5",
            description:
              "Scabbing begins with minimal discomfort and faster healing than traditional methods.",
            icon: "🏨",
          },
          {
            stage: "Natural Appearance",
            timeframe: "Days 7-10",
            description:
              "Scabs shed naturally and scalp returns to normal appearance.",
            icon: "✅",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "Before and after comparison showing natural hairline restoration with high density, no linear scarring, and permanent hair growth.",
        content:
          "Natural hairline design with high density placement and permanent hair growth that resists future hair loss.",
        image: getTreatmentDetailImage("sapphire-fue", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("sapphire-fue", "before"),
          after: getTreatmentDetailImage("sapphire-fue", "after"),
        },
        benefits: [
          {
            title: "Natural Hairline Design",
            description:
              "Designed to suit your face and age with high density placement thanks to sapphire micro-channels for natural thickness and appearance.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Minimal Scarring",
            description:
              "No linear scar, only micro-dots in the donor area. Smaller, smoother incisions heal faster with reduced trauma to the scalp.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Permanent Growth",
            description:
              "Transplanted hair is resistant to hair loss and grows permanently. Initial shedding is normal, but regrowth is lasting and natural.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Advanced Technology, Natural Results",
        content:
          "Sapphire FUE represents the most advanced hair transplant technique available today. The precision of sapphire blades combined with expert design creates natural density with faster recovery and permanent growth.",
        image: getTreatmentDetailImage("sapphire-fue", "section", 3),
      },
    ],
    faq: [
      {
        question:
          "What is the difference between Classic FUE and Sapphire FUE?",
        answer:
          "Classic FUE uses steel blades to open channels. Sapphire FUE uses sapphire blades, which are sharper and smoother, allowing denser implantation and faster healing.",
      },
      {
        question: "How many grafts will I need?",
        answer:
          "This depends on your degree of hair loss and donor supply. Most procedures range from 2,500 to 4,500 grafts.",
      },
      {
        question: "Will it be painful?",
        answer:
          "Only local anesthesia is used. Most patients feel pressure but not pain during the procedure.",
      },
      {
        question: "When will I see results?",
        answer:
          "Initial growth starts around month 4; final results are visible at 9–12 months.",
      },
      {
        question: "Will the transplanted hair fall out?",
        answer:
          "The transplanted hair is resistant to hair loss. It will shed initially after surgery (normal phase) but regrows permanently.",
      },
      {
        question: "Is it suitable for women?",
        answer:
          "Yes. Sapphire FUE can be used for both male and female pattern hair loss.",
      },
      {
        question: "How long do I need to stay in Istanbul?",
        answer: "Plan for 4–5 days for the procedure and follow-up washes.",
      },
      {
        question: "What is included in the cost?",
        answer:
          "Our packages cover consultation, procedure, medications, first wash, follow-up, hotel, and transfers. No hidden costs.",
      },
    ],
    cta: {
      headline:
        "Sapphire FUE — Natural Density, Faster Recovery, Permanent Growth.",
      subheadline:
        "The most advanced hair transplant technique available today, performed safely and professionally in Istanbul.",
      buttonText: "Get My Free Hair Analysis & Treatment Plan",
    },
  };

  const dhiHairTransplantContent = {
    pageTitle:
      "DHI Hair Transplant in Istanbul | Precision Implantation with the Choi Pen",
    hero: {
      visual:
        "A confident man showing precise, natural hairline with dense implantation pattern and professional appearance demonstrating Choi Pen precision.",
      headline:
        "DHI Hair Transplant — Direct Implantation for Maximum Precision",
      subheadline:
        "Direct Hair Implantation (DHI) is a premium hair transplant method performed with the Choi Implanter Pen. It allows follicles to be implanted directly without creating channels in advance, ensuring higher precision, better control of angle and depth, and a denser, natural-looking result.",
      image: getTreatmentDetailImage("dhi-hair-transplant", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Who Is It For?",
        content: `DHI is suitable for patients who:`,
        image: getTreatmentDetailImage("dhi-hair-transplant", "candidacy"),
        checklist: [
          "Want high-density transplants, especially in the hairline or crown.",
          "Prefer a shorter haircut (since scars are minimal).",
          "Need precise implantation in limited areas (e.g., touch-ups, scar correction).",
          "Have enough donor capacity for dense packing.",
        ],
        subtitle: "What Is DHI Hair Transplant?",
        footer:
          "DHI is an advanced development of the FUE technique. Hair follicles are extracted one by one, loaded directly into the Choi Pen, and implanted immediately in one motion with controlled angle, depth, and direction. This eliminates the need for pre-made channels and ensures better follicle survival.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Approach",
        content:
          "Advanced Choi Pen technology for direct implantation with maximum precision and follicle survival rate.",
        subtitle: "Recovery in Istanbul (4-5 Days)",
        image: getTreatmentDetailImage("dhi-hair-transplant", "process"),
        processSteps: [
          {
            title: "Advantages of DHI vs. Sapphire FUE",
            description:
              "Direct implantation technology offers superior precision and follicle survival compared to traditional channel-creation methods.",
          },
          {
            title: "DHI Benefits & Limitations",
            description:
              "Premium precision technique with specific advantages and considerations.",
            benefits: [
              "No pre-made channels — implantation happens in one step.",
              "Less time outside the body → better follicle survival rate.",
              "Higher precision of angle and direction.",
              "Denser packing possible → especially useful for the hairline.",
              "Limitations: Procedure takes longer.",
              "Fewer grafts per session (typically 2,000–3,500 grafts).",
              "Not always ideal for large bald areas.",
              "Local anesthesia, no general anesthesia required.",
              "Duration: 6–9 hours, depending on graft number.",
            ],
          },
        ],
        timeline: [
          {
            stage: "Consultation & DHI Procedure",
            timeframe: "Day 1",
            description:
              "Detailed analysis and 6-9 hour DHI procedure with Choi Pen precision technology.",
            icon: "🖊️",
          },
          {
            stage: "Post-op Check & First Wash",
            timeframe: "Day 2",
            description:
              "Professional post-operative assessment and specialized first wash procedure.",
            icon: "🧴",
          },
          {
            stage: "Early Recovery",
            timeframe: "Days 3-5",
            description:
              "Mild swelling and scabbing begins with minimal discomfort from precise implantation.",
            icon: "🏨",
          },
          {
            stage: "Natural Healing",
            timeframe: "Days 7-10",
            description:
              "Scabs shed naturally revealing precise implantation results.",
            icon: "✅",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "Before and after comparison showing dense, natural hairline with precise Choi Pen implantation, high follicle survival, and natural growth direction.",
        content:
          "Dense natural hairline with precise angle control and high follicle survival rate for permanent, natural-looking results.",
        image: getTreatmentDetailImage("dhi-hair-transplant", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("dhi-hair-transplant", "before"),
          after: getTreatmentDetailImage("dhi-hair-transplant", "after"),
        },
        benefits: [
          {
            title: "Maximum Precision",
            description:
              "Dense, natural hairline thanks to precise Choi Pen implantation with exact angle control and natural growth direction for optimal results.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "High Survival Rate",
            description:
              "Superior follicle survival rate due to minimal time outside the body. No stitches, minimal scarring — suitable for short hairstyles.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Permanent Results",
            description:
              "Permanent outcome with transplanted hair resistant to shedding. Natural growth direction with exact angle control for lasting satisfaction.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Premium Precision Technology",
        content:
          "DHI Hair Transplant with the Choi Pen method ensures precise control, higher survival, and natural results — especially effective for hairlines and detailed areas requiring maximum precision.",
        image: getTreatmentDetailImage("dhi-hair-transplant", "section", 3),
      },
    ],
    faq: [
      {
        question: "What is the difference between DHI and Sapphire FUE?",
        answer:
          "Sapphire FUE uses sapphire blades to open channels before implantation. DHI implants follicles directly using the Choi Pen, without creating channels in advance. DHI offers more precision but usually covers fewer grafts per session.",
      },
      {
        question: "How many grafts can be transplanted with DHI?",
        answer:
          "Typically 2,000–3,500 grafts in one session, depending on donor supply.",
      },
      {
        question: "Is DHI more painful?",
        answer:
          "No. Both techniques are done under local anesthesia. The experience is similar.",
      },
      {
        question: "Why is DHI more expensive?",
        answer:
          "The procedure is slower, requires more surgical precision, and uses specialized equipment (Choi Pens).",
      },
      {
        question: "When will I see results?",
        answer:
          "Initial growth appears around month 4; final results at 9–12 months.",
      },
      {
        question: "Can women also get DHI?",
        answer:
          "Yes. DHI is often used for female patients because it works well for localized thinning without shaving the whole head.",
      },
      {
        question: "How long do I need to stay in Istanbul?",
        answer:
          "We recommend 4–5 days for procedure, first wash, and follow-up.",
      },
      {
        question: "Will the transplanted hair fall out later?",
        answer: "No. Once the transplanted hair has grown, it is permanent.",
      },
    ],
    cta: {
      headline: "DHI Hair Transplant — Maximum Precision, Natural Density.",
      subheadline:
        "With the Choi Pen method, DHI ensures precise control, higher survival, and natural results — especially for hairlines and detailed areas.",
      buttonText: "Get My Free Hair Analysis & Treatment Plan",
    },
  };

  const hollywoodSmileContent = {
    pageTitle: "Zirconium Crowns in Istanbul | Your Hollywood Smile Makeover",
    hero: {
      visual:
        "A high-quality, radiant close-up of a person with a flawless, bright, and perfectly aligned smile, exuding confidence and happiness.",
      headline: "The Smile You've Always Dreamed Of.",
      subheadline:
        'Zirconium crowns are the secret behind the world\'s most beautiful smiles. Discover how we can craft your perfect "Hollywood Smile" with a durable, brilliant, and completely natural-looking result in just one visit.',
      image: getTreatmentDetailImage("zirconium-crowns", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "The First Step: Is a Smile Makeover Right for You?",
        content: `A full smile makeover with zirconium crowns can be a life-changing decision, creating a perfectly harmonious and brilliant smile. You are likely a strong candidate for this treatment if you wish to address one or more of the following:`,
        image: getTreatmentDetailImage("zirconium-crowns", "candidacy"),
        checklist: [
          "Severe Discoloration: For staining that doesn't respond to whitening.",
          "Worn, Chipped, or Broken Teeth: To restore the original shape and strength of your teeth.",
          "Minor Gaps or Misalignment: To create a perfectly straight and uniform appearance.",
          "Irregularly Shaped Teeth: To achieve a consistent and aesthetically pleasing smile line.",
          'Desire a Complete Transformation: For anyone seeking a comprehensive "Hollywood Smile" result.',
        ],
        footer:
          "The best way to begin is with a free, no-obligation consultation, where our dental experts can design a plan tailored to your unique smile.",
      },
      {
        id: "process",
        headline: "Your Hollywood Smile Journey, Simplified.",
        content:
          "Unlike other procedures, a full smile makeover can often be completed in a single, well-planned visit. Your journey is a creative partnership between you and our dental artists.",
        subtitle: "The Smile Design Visit (5-7 Days in Istanbul)",
        image: getTreatmentDetailImage("zirconium-crowns", "process"),
        timeline: [
          {
            day: "Day 1: Consultation & Digital Design",
            description:
              "Your journey begins with a conversation. You'll discuss your ideal smile with your dentist—the shape, the shade, the character. We then take digital scans and photos to create a 3D model of your new smile, allowing you to preview and approve the design before we even begin.",
            icon: "💬",
          },
          {
            day: "Day 2-3: Preparation & Crafting",
            description:
              "Your teeth are gently prepared by the dentist. While our in-house master technicians use advanced CAD/CAM technology to mill your custom zirconium crowns with incredible precision, you will have temporary crowns fitted, allowing you to be comfortable.",
            icon: "🔧",
          },
          {
            day: "Day 4-5: Trial & Final Fitting",
            description:
              "We conduct a trial fitting to ensure the look, feel, and bite are absolutely perfect. Once you are completely happy, your dentist will permanently bond your new crowns, revealing your final, stunning smile.",
            icon: "✨",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Beyond Beauty: The Benefits of Zirconium",
        visual:
          "A compelling before-and-after slider showing a real patient's dramatic Hollywood Smile transformation.",
        content:
          "A smile makeover with zirconium crowns offers a complete aesthetic and functional transformation.",
        image: getTreatmentDetailImage("zirconium-crowns", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("zirconium-crowns", "before"),
          after: getTreatmentDetailImage("zirconium-crowns", "after"),
        },
        benefits: [
          {
            title: "It Looks Incredibly Natural",
            description:
              "Zirconia has a unique translucency that mimics natural tooth enamel perfectly, reflecting light just like a real tooth for a brilliant, yet believable, result.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "It's Exceptionally Strong & Durable",
            description:
              "Zirconium is one of the strongest materials in modern dentistry, highly resistant to chipping, cracking, and staining, ensuring your smile stays beautiful for years.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "It's a Complete Transformation",
            description:
              'This is the definitive "Hollywood Smile." We can correct color, shape, size, and alignment issues all at once to create your ideal smile.',
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "The Foundation of a Great Result: World-Class Materials",
        content:
          "A beautiful smile must also be a healthy and durable one. We are committed to using only the highest-grade, biocompatible monolithic zirconia blocks from the world's leading dental manufacturers. This ensures your new smile is not only aesthetically flawless but also strong, safe, and built to last. Our in-house laboratory gives us complete control over the quality and artistry of every crown we create.",
        image: getTreatmentDetailImage("zirconium-crowns", "section", 3),
      },
    ],
    faq: [
      {
        question: "Will my new smile look fake or too white?",
        answer:
          "Absolutely not. Our entire process is built around creating a natural look. During your smile design consultation, you choose the exact shade you desire, from a natural white to a brighter Hollywood shade. Our goal is to create a smile that complements your face and looks beautifully authentic.",
      },
      {
        question: "What is the difference between a crown and a veneer?",
        answer:
          'A veneer is a thin shell that covers only the front surface of a tooth, ideal for minor cosmetic changes. A crown (or "cap") covers the entire tooth. For a full "Hollywood Smile" makeover, crowns are often used because they provide more strength and allow for more significant changes in shape and alignment.',
      },
      {
        question: "Is the process painful?",
        answer:
          "No. Your comfort is our priority. The tooth preparation is done under local anesthesia, so you will not feel any pain. You may experience some minor sensitivity for a day or two afterward, but this is temporary and easily managed.",
      },
      {
        question: "How long will my zirconium crowns last?",
        answer:
          "With proper oral hygiene (brushing, flossing, and regular check-ups), your zirconium crowns can last for 15-20 years or even a lifetime. They are highly resistant to staining and chipping.",
      },
      {
        question: "How do I care for my new smile?",
        answer:
          "You care for them just as you would your natural teeth. There are no special requirements. A consistent routine of brushing and flossing is all that's needed to keep your smile bright and healthy.",
      },
      {
        question: 'How many teeth are included in a "Hollywood Smile"?',
        answer:
          "This is personalized to you. A full smile makeover typically involves the teeth that are visible when you smile broadly, which is usually 8 to 10 teeth on the upper arch and sometimes the lower arch as well. We will design a plan that creates the most harmonious and beautiful result for your unique smile.",
      },
      {
        question: "Can I eat normally with my new crowns?",
        answer:
          "Yes. Zirconium is incredibly strong. Once your permanent crowns are bonded, you can eat all of your favorite foods with confidence.",
      },
      {
        question: "How much does a Hollywood Smile cost?",
        answer:
          "We provide a clear, all-inclusive quote after your free digital consultation. The price includes your full set of crowns, all dental work, your hotel stay, and all private transfers. There are no hidden fees.",
      },
    ],
    cta: {
      headline: "The First Step to Your Dream Smile",
      subheadline:
        "Your journey to a radiant, confident smile begins with a simple conversation. Let's design your perfect smile, together.",
      buttonText: "Get My Free Quote & Smile Plan",
    },
  };

  const dentalVeneersContent = {
    pageTitle:
      "Dental Veneers in Istanbul | A Flawless Smile, Minimally Invasive",
    hero: {
      visual:
        "A high-quality, natural-light photo of a person with a bright, beautiful, but authentic-looking smile. The feeling is one of effortless confidence.",
      headline: "Your Natural Smile, Perfected.",
      subheadline:
        "Dental veneers are the artist's choice for cosmetic dentistry, offering a complete smile transformation with a minimally invasive approach. Discover how we can craft your radiant new smile in just one visit.",
      image: getTreatmentDetailImage("dental-veneers-emax", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "The First Step: Understanding if Veneers Are Your Solution",
        content: `Veneers are an ideal solution for correcting cosmetic imperfections while preserving the majority of your natural tooth structure. You are likely a strong candidate for dental veneers if you wish to improve:`,
        image: getTreatmentDetailImage("dental-veneers-emax", "candidacy"),
        checklist: [
          "Stains & Discoloration: To achieve a permanently bright, white smile that resists future staining.",
          "Minor Chips or Cracks: To restore a smooth, whole appearance to your teeth.",
          "Small Gaps or Spacing Issues: To close minor gaps for a more uniform look.",
          "Slight Misalignment or Crookedness: To create the appearance of a perfectly straight smile.",
          "Worn or Irregularly Shaped Teeth: To craft a more harmonious and balanced smile line.",
        ],
        footer:
          "The best way to know for sure is through a simple, no-obligation consultation where our dental artists can assess your smile and discuss your goals.",
      },
      {
        id: "process",
        headline: "Your Smile Transformation Journey, Simplified.",
        content:
          "Achieving a flawless smile with veneers is an efficient and artistic process, often completed in a single, well-planned visit to our clinic in Istanbul.",
        subtitle: "The Veneer Design Visit (5-7 Days in Istanbul)",
        image: getTreatmentDetailImage("dental-veneers-emax", "process"),
        timeline: [
          {
            day: "Day 1: The Art of the Smile Design",
            description:
              "Your journey begins with a detailed consultation. You and your dentist will co-design your new smile, selecting the perfect shape, size, and natural shade. Using digital scans, we can often provide a preview of your expected result.",
            icon: "🎨",
          },
          {
            day: "Day 2-3: Minimal Preparation & Master Crafting",
            description:
              "To ensure a perfect fit, a very thin layer (often less than a millimeter) of enamel is removed from the front of your teeth. While our master technicians in our in-house lab craft your bespoke porcelain veneers, you will wear comfortable temporary ones.",
            icon: "🔬",
          },
          {
            day: "Day 4-5: The Final Reveal",
            description:
              "We conduct a trial fitting to ensure you are completely in love with your new smile. Once you give your final approval, your dentist will permanently bond the veneers to your teeth, unveiling a result that is instant, dramatic, and beautiful.",
            icon: "✨",
          },
        ],
      },
      {
        id: "benefits",
        headline: "The Beauty of a Conservative Transformation",
        visual:
          "A compelling before-and-after slider showing a real patient's natural-looking veneer transformation.",
        content:
          "Dental veneers deliver a powerful aesthetic upgrade while respecting the health of your natural teeth.",
        image: getTreatmentDetailImage("dental-veneers-emax", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("dental-veneers-emax", "before"),
          after: getTreatmentDetailImage("dental-veneers-emax", "after"),
        },
        benefits: [
          {
            title: "It Looks Completely Natural",
            description:
              "High-quality porcelain veneers, like E-max, have a lifelike translucency that perfectly mimics natural tooth enamel, creating a result that is brilliant but never fake.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "It's a Minimally Invasive Approach",
            description:
              "Veneers require only minimal preparation of the tooth surface, preserving the majority of your healthy tooth structure underneath.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "It's Stain-Resistant and Durable",
            description:
              "Porcelain is a non-porous material, making it highly resistant to staining from coffee, tea, and wine, keeping your smile brighter for longer.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline:
          "The Foundation of a Great Result: Master Artistry & Materials",
        content:
          "A truly beautiful veneer is a work of art, and that requires the finest materials. We are committed to using premier porcelain systems like E-max, which is globally recognized as the gold standard for veneers. This advanced lithium disilicate glass-ceramic provides the optimal blend of strength and stunning, lifelike aesthetics. Our in-house dental laboratory ensures that every single veneer is custom-crafted with meticulous attention to detail by our master technicians.",
        image: getTreatmentDetailImage("dental-veneers-emax", "section", 3),
      },
    ],
    faq: [
      {
        question: "What is the main difference between a veneer and a crown?",
        answer:
          "A veneer is a thin shell bonded to the front of a tooth to improve its appearance. A crown covers the entire tooth. Veneers are the preferred choice for cosmetic enhancements, while crowns are used when a tooth has significant structural damage.",
      },
      {
        question: "Is the process painful?",
        answer:
          "No. The tooth preparation is very minimal and is done under local anesthesia to ensure you feel no discomfort. Some patients may experience temporary sensitivity to hot or cold for a few days, but this subsides quickly.",
      },
      {
        question: "How long will my porcelain veneers last?",
        answer:
          "With proper care and regular dental check-ups, high-quality porcelain veneers can last for 15 years or more. They are very durable and resist chipping and staining.",
      },
      {
        question: "Will I have to follow a special diet?",
        answer:
          "No. Once your veneers are permanently bonded, you can eat and drink as you normally would. While veneers are stain-resistant, it's always good practice to maintain good oral hygiene.",
      },
      {
        question: "Can I choose the shade of my veneers?",
        answer:
          'Yes, absolutely. This is a key part of the smile design process. You and your dentist will select the perfect shade from a wide spectrum, whether you want a subtle, natural enhancement or a brighter, more glamorous "Hollywood" white.',
      },
      {
        question: "How many veneers will I need?",
        answer:
          "This is personalized to your smile and your goals. A common approach is to place veneers on the teeth that are visible when you smile, which can be anywhere from 6 to 10 veneers on the upper arch. We will create a plan that delivers the most beautiful and harmonious result for you.",
      },
      {
        question: "Do veneers require a lot of tooth to be removed?",
        answer:
          "No, and this is their main advantage. The preparation is very conservative. We only need to remove a very thin layer of enamel (about 0.5mm, the thickness of a contact lens) to make space for the veneer and ensure a strong bond.",
      },
      {
        question: "How much do dental veneers cost?",
        answer:
          "We provide a clear, all-inclusive quote after your free consultation. The price includes your full set of veneers, all dental work, your hotel stay, and all private transfers. There are no hidden fees.",
      },
    ],
    cta: {
      headline: "The First Step to Your Perfect Smile",
      subheadline:
        "Your journey to a radiant, confident smile begins with a simple conversation. Let's design your perfect smile, together.",
      buttonText: "Get My Free Quote & Smile Plan",
    },
  };

  const dentalImplantsContent = {
    pageTitle:
      "Dental Implants in Istanbul | The Permanent Solution for Missing Teeth",
    hero: {
      headline: "A Permanent Solution for a Complete Smile.",
      subheadline:
        "Dental implants are the modern standard for replacing missing teeth, offering a strong, natural-looking result that lasts a lifetime. Discover our clear, supportive, and expert-led process to restore your smile with confidence.",
      image: getTreatmentDetailImage("dental-implants", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "The First Step: Understanding if You're a Candidate",
        content: `Before we talk about the procedure, let's talk about you. A successful dental implant journey begins with ensuring it's the right and safest solution for your specific needs. You are likely a strong candidate for dental implants if you:`,
        image: getTreatmentDetailImage("dental-implants", "candidacy"),
        checklist: [
          "Are missing one or more teeth: Implants can replace a single tooth, multiple teeth, or even a full arch.",
          "Have a healthy jawbone: A sufficient amount of healthy bone is needed to provide a secure anchor for the implant.",
          "Have good overall oral hygiene: Healthy gums are important for the long-term success of the implant.",
          "Want a permanent, hassle-free solution: Unlike dentures, implants are a fixed solution that you care for just like natural teeth.",
        ],
        footer:
          "The best way to know for sure is through a simple, no-obligation consultation where our team can review your specific case.",
      },
      {
        id: "process",
        headline: "Your Journey to a New Smile, Simplified.",
        content:
          "We've refined our process to be as clear and predictable as possible. Your journey is a partnership, managed by your dedicated coordinator and broken down into two essential visits.",
        subtitle: "The Saray Estetica Implant Process",
        image: getTreatmentDetailImage("dental-implants", "process"),
        processSteps: [
          {
            title:
              "Visit One: The Blueprint & Foundation (3-5 Days in Istanbul)",
            description:
              "We begin with advanced 3D imaging to create a precise digital map of your jaw. This blueprint allows your specialist to plan the placement with surgical accuracy. The procedure itself is gentle and performed under local anesthesia for your comfort. You'll return home with a temporary restoration, allowing the implant to heal and integrate.",
          },
          {
            title: "Visit Two: The Final Restoration (5-7 Days in Istanbul)",
            description:
              "After a healing period of 3-6 months, you will return to complete your smile. In this artistic phase, we craft your permanent crown, meticulously matching it to your natural teeth. Your specialist then secures your new tooth, and the result is a seamless, functional, and beautiful part of your smile.",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Beyond a New Tooth: The Benefits of a Modern Implant",
        visual:
          "A compelling before-and-after slider showing a real patient's dental implant result.",
        content:
          "A dental implant does more than just fill a space. It restores the full integrity of your smile and oral health.",
        image: getTreatmentDetailImage("dental-implants", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("dental-implants", "before"),
          after: getTreatmentDetailImage("dental-implants", "after"),
        },
        benefits: [
          {
            title: "It Looks and Feels Natural",
            description:
              "Your custom-crafted crown is designed to be indistinguishable from your other teeth, giving you a seamless, confident smile.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "It's a Permanent, Fixed Solution",
            description:
              "Eat, speak, and laugh without the worry of something slipping or coming loose. Your implant is a stable, permanent part of you.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "It Protects Your Health",
            description:
              "By replicating a natural root, an implant stimulates the jawbone, preventing bone loss and protecting the structure of your face and the health of your surrounding teeth.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "The Foundation of a Great Result: World-Class Materials",
        content:
          "The long-term success of your implant is fundamentally linked to the quality of the materials used. We are committed to using only the most reputable, scientifically-proven implant systems from the world's leading manufacturers. This ensures your investment is safe, reliable, and durable.",
        subtitle: "Our Commitment to Quality",
        footer:
          "We are proud to partner with a portfolio of premier global brands, and your specialist will guide you to the most appropriate choice for your specific clinical needs. Our selection includes: Straumann, Medigma, Neodent, Osstem, Biotek, Bego, Omega.",
        image: getTreatmentDetailImage("dental-implants", "section", 3),
      },
    ],
    faq: [
      {
        question: "Is the process truly reliable?",
        answer:
          "Absolutely. Dental implants are one of the most successful procedures in modern medicine. According to extensive clinical studies, long-term success rates are consistently over 95% with proper care, making it a predictable and trustworthy solution.",
      },
      {
        question: "What is recovery really like?",
        answer:
          "The recovery is typically straightforward. Most patients report minimal discomfort for only a few days, which is easily managed with over-the-counter pain relief. You can generally return to your normal daily activities the very next day.",
      },
      {
        question: "How long will my dental implants last?",
        answer:
          "With proper care, dental implants are designed to last a lifetime. The titanium post integrates with your bone and becomes a permanent part of you. The crown attached to it may need replacement after 15-20 years due to normal wear, but the implant foundation itself is a lasting solution.",
      },
      {
        question: "How do I care for my new implant?",
        answer:
          "It's simple: you care for it just like a natural tooth. There are no special glues or cleaning routines. Regular brushing, flossing, and attending routine dental check-ups are all that's needed to keep your implant, gums, and crown healthy for many years.",
      },
      {
        question: "What are the implants themselves made of?",
        answer:
          "We use implants made from medical-grade titanium. This is the global standard for dental and medical implants, trusted for decades due to its unique biocompatibility—meaning the human body accepts it as a natural part of itself. This allows for the strong, permanent bond to form with your jawbone, ensuring a safe and durable foundation for your new tooth.",
      },
      {
        question: "What if I don't have enough bone for an implant?",
        answer:
          "This is a common situation that we are well-equipped to handle. If your 3D scan shows insufficient bone volume, your specialist may recommend a preliminary procedure like a bone graft or a sinus lift. These are safe and routine procedures designed to create a strong and healthy foundation to ensure the long-term success of your implant.",
      },
      {
        question: "Why are two visits to Istanbul necessary?",
        answer:
          "The two-visit process is crucial for the long-term success of your implant. The healing period between visits allows for 'osseointegration'—the natural process where your jawbone fuses with the titanium implant. Rushing this critical step can compromise the stability of the implant. Our patient, two-step approach ensures we are building a permanent, reliable foundation for your new smile.",
      },
      {
        question: "How much does it cost?",
        answer:
          "We provide a clear, all-inclusive quote after your free consultation. The price includes your procedure, your high-quality implant and crown, your hotel stay, and all private transfers. There are no hidden fees, so you can plan your budget with complete confidence.",
      },
    ],
    cta: {
      headline: "The First Step to a Permanent Solution",
      subheadline:
        "Your journey back to a full, confident smile begins with clear information. Let's start a conversation about your goals.",
      buttonText: "Get My Free Quote & Plan",
    },
  };

  const rhinoplastyContent = {
    pageTitle: "Rhinoplasty in Istanbul | The Art of Facial Harmony",
    hero: {
      visual:
        "A tasteful, natural-light portrait of a person in profile, looking confident and serene. The focus is on their overall balanced facial features, not just the nose.",
      headline: "The Confidence of a Profile that Feels Truly Yours.",
      subheadline:
        "Rhinoplasty is more than a surgical procedure; it's a journey to facial harmony. Discover our artistic, patient-first approach to creating a beautiful, natural-looking nose that perfectly complements your unique features.",
      image: getTreatmentDetailImage("rhinoplasty", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "The First Step: Your Reasons for Seeking a Change",
        content: `The decision to consider rhinoplasty is a deeply personal one. It often comes from a long-held feeling that your nose doesn't quite reflect the person you see yourself as. You are likely exploring this journey if you wish to:`,
        image: getTreatmentDetailImage("rhinoplasty", "candidacy"),
        checklist: [
          "Refine the Shape or Size: To address a dorsal hump, a wide bridge, or a tip that you feel is disproportionate.",
          "Improve Your Profile: To create a more balanced and harmonious silhouette from every angle.",
          "Correct Asymmetry: To address a nose that may be crooked as a result of genetics or a previous injury.",
          "Improve Your Breathing: To correct functional issues like a deviated septum that can impact your quality of life.",
          "Gain a New Sense of Confidence: To finally stop thinking about your nose and feel completely at ease in photos and in life.",
        ],
        footer:
          "The most important step is a conversation. A confidential, no-obligation consultation allows us to understand your vision and confirm if rhinoplasty is the safest and best path for you.",
      },
      {
        id: "process",
        headline: "Your Journey to a New Profile, Simplified.",
        content:
          "A beautiful result is the product of artistry, precision, and a process built entirely around you. Your journey is a close collaboration between you and your surgeon, managed by your dedicated coordinator.",
        subtitle: "A Look at Your Stay (Total 8-9 Days in Istanbul)",
        image: getTreatmentDetailImage("rhinoplasty", "process"),
        processSteps: [
          {
            title: "Part 1: The Consultation & Artistic Plan",
            description:
              "Your journey begins with a vision. In your consultation, you will have an in-depth discussion with the specialist about your aesthetic goals. This is a crucial step that allows you to align on a shared vision for a nose that is in perfect harmony with your face.",
          },
          {
            title: "Part 2: The Procedure & Recovery",
            description:
              "Your comfort and safety are our highest priorities. The procedure is performed under general anesthesia by your specialist surgeon. After your procedure, you will rest and recover in your comfortable hotel. Your coordinator will be in constant contact, and we will see you for follow-up checks to monitor your healing before you are cleared to fly home.",
          },
        ],
        timeline: [
          {
            stage: "Arrival & Consultation",
            timeframe: "Day 1",
            description:
              "Your private driver greets you at the airport. You'll have your in-person consultation with your surgeon to finalize your artistic plan.",
            icon: "🛬",
          },
          {
            stage: "Procedure & Hospital Stay",
            timeframe: "Day 2 (1 Night)",
            description:
              "Your procedure is performed in the morning. You will stay one night in the hospital for professional monitoring and comfort.",
            icon: "🏥",
          },
          {
            stage: "Hotel Recovery",
            timeframe: "Days 3-6",
            description:
              "After being discharged, you will rest and heal in your hotel. Swelling and bruising are normal. Your coordinator will check in regularly.",
            icon: "🏨",
          },
          {
            stage: "Final Check-up",
            timeframe: "Day 7",
            description:
              "You will visit the clinic for your final check-up. Your surgeon will remove your external splint, revealing the first look at your new profile.",
            icon: "✅",
          },
        ],
      },
      {
        id: "benefits",
        headline: "The Art of an Unnoticeable, Perfect Result",
        visual:
          "A compelling before-and-after slider showing a real patient's rhinoplasty result, highlighting the natural harmony of their new profile.",
        content:
          'The sign of a truly successful rhinoplasty is that no one can tell you\'ve had one. The goal is not to create a "perfect" nose, but your perfect nose.',
        image: getTreatmentDetailImage("rhinoplasty", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("rhinoplasty", "before"),
          after: getTreatmentDetailImage("rhinoplasty", "after"),
        },
        benefits: [
          {
            title: "It Looks Natural and in Harmony",
            description:
              "Your new nose will be in beautiful proportion to your chin, your lips, and your eyes. It won't be the star of the show; it will be a perfectly balanced feature that enhances your overall facial beauty.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "It Respects Your Individuality",
            description:
              'We don\'t believe in "one-size-fits-all" results. Whether you have specific ethnic features you wish to preserve or a unique facial structure, our approach is to refine, not erase, your identity.',
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "It Breathes Beautifully",
            description:
              "For many patients, the result is not just aesthetic. A functional rhinoplasty can dramatically improve airflow, allowing you to breathe more freely and sleep more soundly.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "The Foundation of a Great Result: Surgical Artistry",
        content:
          "Rhinoplasty is a procedure of millimeters, where surgical skill and artistic vision are equally important. We are committed to a philosophy of excellence that is built on a deep understanding of facial anatomy and a passion for creating natural, lasting results. Our specialists are not just surgeons; they are artists who use advanced tools like ultrasonic technology to sculpt with precision and care, minimizing recovery time while maximizing the beauty of the final outcome.",
        image: getTreatmentDetailImage("rhinoplasty", "section", 3),
      },
    ],
    faq: [
      {
        question: 'Will my nose look fake or "done"?',
        answer:
          "Our entire philosophy is built around avoiding this. Through an in-depth consultation, we work with you to design a nose that fits your face. The goal is harmony, not a drastic change that looks unnatural.",
      },
      {
        question: "How long is the recovery period?",
        answer:
          "You can expect to wear a splint for about one week. Most of the initial swelling and bruising will subside within 2-3 weeks, at which point you can comfortably return to social activities. The final, subtle refinements of your nose's shape will continue to emerge over 6-12 months.",
      },
      {
        question: "Is rhinoplasty a painful procedure?",
        answer:
          "The procedure itself is performed under general anesthesia, so you will feel nothing. Post-operatively, most patients report feeling congested and uncomfortable rather than in sharp pain. This is well-managed with prescribed medication.",
      },
      {
        question: "Will I be able to breathe better?",
        answer:
          "If you have a pre-existing issue like a deviated septum, your surgeon can correct it during the procedure. Many of our patients report a significant improvement in their breathing after they have fully healed.",
      },
      {
        question: "What is ultrasonic (Piezo) rhinoplasty?",
        answer:
          "It's an advanced technique that uses high-frequency sound waves to precisely sculpt nasal bones without damaging the surrounding soft tissue. This often results in less swelling, less bruising, and a faster, more comfortable recovery compared to traditional methods.",
      },
      {
        question: "When will I see the final result?",
        answer:
          "You will see a significant change as soon as the splint is removed after one week. However, it's important to be patient. It takes up to a year for all the subtle swelling to fully resolve and for the final, delicate shape of your new nose to be revealed.",
      },
      {
        question: "How do you ensure you understand my aesthetic goals?",
        answer:
          "The consultation is the most important part of the process. It is a deep, collaborative conversation where we listen carefully to your hopes and concerns. We use photos and discuss examples to ensure we have a perfectly clear and shared understanding of the desired outcome before proceeding.",
      },
      {
        question: "How much does rhinoplasty cost?",
        answer:
          "We provide a clear, all-inclusive quote after your free consultation. The price includes your procedure with a specialist surgeon, all hospital fees, your hotel stay, and all private transfers. There are no hidden fees.",
      },
    ],
    cta: {
      headline: "The First Step to a More Confident You",
      subheadline:
        "Your journey to a profile you love begins with a simple, confidential conversation. Let's talk about your vision and explore the possibilities, together.",
      buttonText: "Get My Free Quote & Treatment Plan",
    },
  };

  const faceliftContent = {
    pageTitle: "Facelift in Istanbul | Natural, Lasting Results",
    hero: {
      visual:
        "A tasteful portrait of a person looking confident and serene, showcasing natural facial harmony and youthful vitality.",
      headline: "Look Like Yourself — Only Younger, Rested, and Confident.",
      subheadline:
        "A modern facelift isn't about changing your face. It's about restoring what time has taken away — firm contours, smoother lines, and a fresher expression that matches how you feel inside.",
      image: getTreatmentDetailImage("facelift", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Is a Facelift Right for You?",
        content: `You don't choose a facelift because you want to look different. You choose it because:`,
        image: getTreatmentDetailImage("facelift", "candidacy"),
        checklist: [
          "Your cheeks and jawline have started to sag.",
          "Deep folds around your mouth make you look tired.",
          "Jowls or loose skin in your neck are changing your profile.",
          "Makeup or skincare no longer hides the changes.",
        ],
        footer:
          "The right facelift restores balance between how you feel and how you look — without announcing to the world that you had surgery.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Process",
        content:
          "Our comprehensive approach ensures natural, lasting results through careful planning and advanced surgical techniques.",
        subtitle: "Your Time in Istanbul (10 Days)",
        image: getTreatmentDetailImage("facelift", "process"),
        processSteps: [
          {
            title: "Step 1 — A Careful Plan",
            description:
              "We start with a long, honest conversation. No rushing. Your surgeon maps your facial anatomy, listens to your goals, and builds a surgical plan around your face — not a template.",
          },
          {
            title: "Step 2 — The Deep Plane Facelift",
            description:
              "This is the gold standard. Instead of pulling the skin, we lift the deeper muscle layer (SMAS) and fat pads back where they used to be.",
            benefits: [
              "Natural movement, not tightness.",
              "A younger, softer look that lasts 10+ years.",
              'No "wind-swept" or artificial effect.',
            ],
          },
        ],
        timeline: [
          {
            stage: "Arrival + Consultation",
            timeframe: "Day 1",
            description:
              "Arrival and in-person consultation with your surgeon to finalize your treatment plan.",
            icon: "🛬",
          },
          {
            stage: "Surgery + Hospital Recovery",
            timeframe: "Days 2-3",
            description:
              "Surgery followed by 2 nights in hospital for safe, monitored recovery with professional care.",
            icon: "🏥",
          },
          {
            stage: "Hotel Recovery",
            timeframe: "Days 4-8",
            description:
              "Healing at your hotel with daily coordinator support. Swelling and bruising gradually improve.",
            icon: "🏨",
          },
          {
            stage: "Final Check-up",
            timeframe: "Day 9",
            description:
              "Final check-up and suture removal. Assessment of healing progress.",
            icon: "✅",
          },
          {
            stage: "Clearance to Fly",
            timeframe: "Day 10",
            description:
              "Medical clearance to fly home safely. Complete aftercare instructions provided.",
            icon: "✈️",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "A compelling before-and-after comparison showing natural, subtle facial rejuvenation that enhances rather than changes appearance.",
        content: "A good facelift doesn't draw attention.",
        image: getTreatmentDetailImage("facelift", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("facelift", "before"),
          after: getTreatmentDetailImage("facelift", "after"),
        },
        benefits: [
          {
            title: "Natural, Rested Appearance",
            description:
              'Friends will say you look rested, not "different." The result enhances your natural beauty without creating an artificial appearance.',
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Invisible Scarring",
            description:
              "Scars are hidden around the ears and in the hairline — barely visible once healed. Expert placement ensures discreet results.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Long-lasting Results",
            description:
              "Because we lift deeper structures, your new look holds for a decade or more. Results move with your expressions, not against them.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Our Commitment to Excellence",
        content:
          "Facial surgery is detail work — measured in millimeters. Our surgeons specialize in facelifts, with years of experience and hundreds of successful cases. They combine technical precision with an artistic eye, because the smallest adjustment changes everything.",
        image: getTreatmentDetailImage("facelift", "section", 0),
      },
    ],
    faq: [
      {
        question:
          "How do I know if I need a facelift instead of fillers or threads?",
        answer:
          "Patients often start with non-surgical options. A facelift becomes the right choice when sagging skin and jowls can no longer be corrected with injections or threads, and you want a longer-lasting solution.",
      },
      {
        question: "What technique do you use, and why?",
        answer:
          "We perform the Deep Plane Facelift, which lifts the deeper muscle layer and fat pads. This is the gold standard today — it delivers natural results that last longer than skin-only lifts.",
      },
      {
        question: "How long will I need to stay in Istanbul after surgery?",
        answer:
          "We recommend 9–10 days. This allows time for surgery, hospital recovery, daily follow-up, and safe clearance to fly home.",
      },
      {
        question: "How uncomfortable is recovery?",
        answer:
          "Most patients describe tightness and swelling, not sharp pain. Bruising peaks in the first week, then gradually subsides. By week three, most feel confident returning to daily life.",
      },
      {
        question: "Will people know I had a facelift?",
        answer:
          "Good facelifts don't advertise themselves. Friends and colleagues usually notice you look well-rested, healthier, or \"like yourself again\" — but won't guess surgery unless you tell them.",
      },
      {
        question: "What are the risks I should realistically consider?",
        answer:
          "As with any surgery, there are risks of bleeding, infection, or delayed healing. Visible scarring or nerve injury are rare, especially in the hands of a specialist. We discuss these thoroughly in your consultation.",
      },
      {
        question:
          "Can a facelift be combined with a neck lift or eyelid surgery?",
        answer:
          "Yes, and often it's recommended. Combining procedures in one surgery gives a more harmonious result and avoids multiple recovery periods.",
      },
      {
        question: "How long will my facelift results last?",
        answer:
          "Results typically last 10 years or more. You'll still continue to age naturally, but you will always look younger than if you hadn't had the procedure.",
      },
    ],
    cta: {
      headline: "The First Step is a Conversation.",
      subheadline:
        "No pressure. No commitment. Just answers to your questions and a clear plan for your options.",
      buttonText: "Get My Free Quote & Treatment Plan",
    },
  };

  const chinLiposuctionContent = {
    pageTitle:
      "Chin Liposuction in Istanbul | Define Your Jawline with Confidence",
    hero: {
      visual:
        "A confident man or woman (30s–50s) with a sharp, natural jawline. Not overdone, just refreshed.",
      headline: "Say Goodbye to the Double Chin.",
      subheadline:
        "Chin liposuction removes stubborn fat under the chin and along the jawline — creating definition and balance without changing who you are. In the hands of a skilled surgeon, it's a quick procedure with lasting results.",
      image: getTreatmentDetailImage("double-chin-liposuction", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Is Chin Liposuction Right for You?",
        content: `Excess fat under the chin doesn't always respond to diet or exercise. Many people who are otherwise fit still struggle with a double chin due to genetics, age, or weight changes. You may be a candidate if you:`,
        image: getTreatmentDetailImage("double-chin-liposuction", "candidacy"),
        checklist: [
          "Have fullness under the chin despite a healthy lifestyle.",
          "Feel your jawline lacks definition.",
          "Want a quick recovery compared to other facial surgeries.",
          "Have good skin elasticity (important for best results).",
        ],
        footer:
          "If skin laxity is significant, your surgeon may recommend combining chin lipo with a neck lift or skin tightening for a smoother outcome.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Approach",
        content:
          "Our precise technique ensures natural-looking definition with minimal downtime and maximum safety.",
        subtitle: "Recovery in Istanbul (5-7 Days)",
        image: getTreatmentDetailImage("double-chin-liposuction", "process"),
        processSteps: [
          {
            title: "Step 1: Consultation",
            description:
              "We assess your chin, jawline, and skin elasticity. Together, we set clear expectations and decide if liposuction alone or in combination is best for you.",
          },
          {
            title: "Step 2: The Procedure",
            description:
              "A precise, minimally invasive approach for natural-looking results.",
            benefits: [
              "Performed under local anesthesia (sometimes sedation).",
              "A tiny incision is made under the chin.",
              "Fat is carefully suctioned using fine cannulas for precision.",
              "No visible scarring — incision heals nearly invisibly.",
              "Procedure time: usually less than 1 hour.",
            ],
          },
        ],
        timeline: [
          {
            stage: "Consultation & Prep",
            timeframe: "Day 1",
            description:
              "Comprehensive assessment and procedure planning with your surgeon.",
            icon: "💬",
          },
          {
            stage: "Surgery (Outpatient)",
            timeframe: "Day 2",
            description:
              "Quick procedure completed in under 1 hour. Go home the same day.",
            icon: "⚡",
          },
          {
            stage: "Recovery & Compression",
            timeframe: "Days 3-6",
            description:
              "Rest and wear a chin compression garment. Minimal discomfort.",
            icon: "🏨",
          },
          {
            stage: "Follow-up Check",
            timeframe: "Day 7",
            description:
              "Assessment of healing progress. Most patients cleared to fly home.",
            icon: "✅",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "Before and after comparison showing a defined, natural-looking jawline with improved facial contours.",
        content:
          "Chin liposuction delivers dramatic yet natural-looking improvements with minimal downtime.",
        image: getTreatmentDetailImage("double-chin-liposuction", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("double-chin-liposuction", "before"),
          after: getTreatmentDetailImage("double-chin-liposuction", "after"),
        },
        benefits: [
          {
            title: "Sharper Jawline",
            description:
              "Visible definition once swelling subsides. The improvement creates a more youthful, confident profile that enhances your natural features.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Minimal Downtime",
            description:
              "Many return to work in 3–5 days. Quick recovery compared to other facial surgeries, with most normal activities resumed within a week.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Lasting Improvement",
            description:
              "Fat removed doesn't return, as long as your weight stays stable. Natural look with no overdone or 'surgical' appearance.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Our Commitment to Precision",
        content:
          "Chin liposuction seems simple, but precision matters. Removing too much or too little fat can distort your natural contour. Our surgeons are experienced in balancing results — creating definition without harsh or uneven lines.",
        image: getTreatmentDetailImage("double-chin-liposuction", "section", 0),
      },
    ],
    faq: [
      {
        question: "How long does chin liposuction take?",
        answer:
          "Usually under 1 hour. It's a short procedure with long-term impact.",
      },
      {
        question: "Is it painful?",
        answer:
          "Discomfort is mild and managed with local anesthesia. Patients usually describe it as soreness or tightness, not sharp pain.",
      },
      {
        question: "Will there be scars?",
        answer:
          "Only a 2–3 mm incision under the chin, which heals nearly invisibly.",
      },
      {
        question: "How long is recovery?",
        answer:
          "Swelling and mild bruising are common for the first week. Most patients return to normal activities within 3–5 days.",
      },
      {
        question: "Will the fat come back?",
        answer:
          "No. The removed fat cells are gone permanently. However, gaining weight can cause the remaining fat cells to enlarge, so maintaining a stable weight is important.",
      },
      {
        question: "What if I also have loose skin?",
        answer:
          "If skin laxity is moderate to severe, your surgeon may recommend combining chin lipo with a neck lift or skin tightening for the best result.",
      },
      {
        question: "How long should I stay in Istanbul?",
        answer: "We recommend 5–7 days for the procedure and safe follow-up.",
      },
      {
        question: "How much does it cost?",
        answer:
          "We provide a single, all-inclusive package that covers your surgery, hospital or clinic fees, transfers, and hotel support. No hidden costs.",
      },
    ],
    cta: {
      headline: "A Defined Jawline is Closer Than You Think.",
      subheadline:
        "Take the first step toward a sharper, more confident profile with a simple, safe procedure performed by specialists in Istanbul.",
      buttonText: "Get My Free Quote & Treatment Plan",
    },
  };

  const liposuctionContent = {
    pageTitle: "Liposuction in Istanbul | Reshape, Refine, Redefine",
    hero: {
      visual:
        'A man or woman in their 30s–40s, standing with natural confidence, wearing fitted clothing that highlights balanced proportions. Not overly "perfect" — but realistic and aspirational.',
      headline: "Target Stubborn Fat. Reveal Your Natural Shape.",
      subheadline:
        "Even with diet and exercise, some fat simply doesn't move. Liposuction removes these resistant pockets to contour your body into a more defined, proportionate shape — safely, precisely, and permanently.",
      image: getTreatmentDetailImage("liposuction", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Is Liposuction Right for You?",
        content: `Liposuction isn't about "weight loss." It's about sculpting. The best candidates are close to their ideal weight but struggle with areas that don't respond to lifestyle changes.`,
        image: getTreatmentDetailImage("liposuction", "candidacy"),
        subtitle: "Common treatment zones include:",
        checklist: [
          'Abdomen & waist (belly fat, "love handles")',
          "Thighs (inner & outer)",
          "Hips & flanks",
          "Back rolls & bra fat",
          "Arms",
          "Chin / neck (submental fat)",
        ],
        footer:
          "You may be a good candidate if you are in overall good health, have good skin elasticity, and want long-lasting contour improvements rather than weight reduction.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Approach",
        content:
          "Precision sculpting with advanced techniques for natural, proportionate results.",
        subtitle: "Recovery in Istanbul (6-7 Days)",
        image: getTreatmentDetailImage("liposuction", "process"),
        processSteps: [
          {
            title: "Step 1: Consultation & Assessment",
            description:
              "We review your goals, evaluate your skin quality, and map out the target zones. If skin laxity is present, we may recommend combining liposuction with a skin tightening procedure (e.g., tummy tuck, body lift).",
          },
          {
            title: "Step 2: The Procedure",
            description:
              "Advanced fat removal technique for precise body contouring.",
            benefits: [
              "Performed under general or local anesthesia depending on the area.",
              "Tiny incisions (2–4 mm) hidden in natural creases.",
              "Fat is removed using fine cannulas with controlled suction.",
              "Areas are sculpted to maintain balance and proportion.",
              "Duration: 1–3 hours depending on zones.",
            ],
          },
        ],
        timeline: [
          {
            stage: "Arrival + Consultation",
            timeframe: "Day 1",
            description:
              "Comprehensive assessment and treatment zone mapping with your surgeon.",
            icon: "📋",
          },
          {
            stage: "Surgery Day",
            timeframe: "Day 2",
            description:
              "1-3 hour procedure (outpatient or overnight stay depending on extent).",
            icon: "⚡",
          },
          {
            stage: "Recovery & Compression",
            timeframe: "Days 3-6",
            description:
              "Rest and wear compression garment to reduce swelling and support healing.",
            icon: "🏨",
          },
          {
            stage: "Follow-up Check",
            timeframe: "Day 7",
            description:
              "Assessment of healing progress. Most patients cleared to fly home.",
            icon: "✅",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "Before and after comparison showing refined body contours with natural, proportionate shaping.",
        content:
          "Permanent fat removal with immediate shape improvement and gradual refinement over 3-6 months.",
        image: getTreatmentDetailImage("liposuction", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("liposuction", "before"),
          after: getTreatmentDetailImage("liposuction", "after"),
        },
        benefits: [
          {
            title: "Immediate Shape Change",
            description:
              "Visible improvement once swelling reduces. The removed fat cells are gone for good, creating permanent contouring results.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Refined Contours",
            description:
              "Clothes fit better, proportions feel balanced. Precision sculpting maintains natural body harmony and proportion.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Gradual Improvement",
            description:
              "Final results visible around 3–6 months as swelling subsides. Long-lasting transformation with proper lifestyle maintenance.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Our Commitment to Precision",
        content:
          "Precision in liposuction matters. Removing too much can create hollows; removing too little leaves dissatisfaction. Our surgeons specialize in balanced sculpting — aiming for natural, proportional results, not extremes.",
        image: getTreatmentDetailImage("liposuction", "section", 0),
      },
    ],
    faq: [
      {
        question: "Will the fat come back?",
        answer:
          "No — the fat cells removed are gone permanently. However, gaining significant weight can enlarge the remaining fat cells. Maintaining a stable lifestyle protects your results.",
      },
      {
        question: "How much weight will I lose?",
        answer:
          "Liposuction is not for weight loss. Most patients lose only a few kilos, but the change in shape and contour makes them appear slimmer and more toned.",
      },
      {
        question: "What areas can be treated?",
        answer:
          "Almost any area with stubborn fat: abdomen, thighs, hips, back, arms, chin, and more. Multiple areas can often be treated in one session.",
      },
      {
        question: "How painful is recovery?",
        answer:
          "Mild to moderate soreness, similar to muscle aches after an intense workout. Most patients manage with simple pain medication.",
      },
      {
        question: "Will I have loose skin after?",
        answer:
          "If skin elasticity is good, it naturally tightens. If significant laxity exists, liposuction may be combined with a tummy tuck, thigh lift, or other tightening procedure.",
      },
      {
        question: "How long until I see results?",
        answer:
          "Initial results are visible within weeks. Final contour is typically seen at 3–6 months, once swelling fully subsides.",
      },
      {
        question: "How long do I need to stay in Istanbul?",
        answer: "Plan for 6–7 days for surgery and safe follow-up.",
      },
      {
        question: "How much does it cost?",
        answer:
          "We provide one all-inclusive package that covers surgery, hospital/clinic care, transfers, and hotel support. No hidden costs.",
      },
    ],
    cta: {
      headline: "Shape the Body You've Worked For.",
      subheadline:
        "If stubborn fat is keeping you from feeling your best, liposuction may be the step that finally aligns your effort with your reflection.",
      buttonText: "Get My Free Quote & Treatment Plan",
    },
  };

  const tummyTuckContent = {
    pageTitle:
      "Tummy Tuck in Istanbul | Restore Strength, Shape, and Confidence",
    hero: {
      visual:
        "A woman (30s–40s) in light clothing, showing a naturally flat stomach and good posture. The image should feel healthy and confident — not over-styled or unrealistic.",
      headline:
        "Flatten the Stomach. Strengthen the Core. Restore Your Confidence.",
      subheadline:
        "Pregnancy, weight changes, and time can leave behind stretched skin and weakened abdominal muscles. A tummy tuck removes excess skin, repairs the core, and reshapes the waistline — giving you back strength and confidence that exercise alone can't always achieve.",
      image: getTreatmentDetailImage("tummy-tuck", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Is a Tummy Tuck Right for You?",
        content: `A tummy tuck (abdominoplasty) is not just cosmetic — it's reconstructive. It addresses both appearance and function. You may be a candidate if you:`,
        image: getTreatmentDetailImage("tummy-tuck", "candidacy"),
        checklist: [
          "Have loose or sagging skin around the abdomen.",
          "Struggle with stretched abdominal muscles (diastasis recti), often after pregnancy.",
          "Have stubborn fat combined with skin laxity.",
          "Experience rashes or discomfort due to skin folds.",
          "Want to restore a firmer, smoother waistline after major weight loss.",
        ],
        footer:
          "Not everyone needs a full tummy tuck — some patients benefit from a mini-tummy tuck (lower abdomen only). We determine the right option during consultation.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Approach",
        content:
          "Comprehensive reconstruction combining skin removal, muscle repair, and aesthetic contouring.",
        subtitle: "Recovery in Istanbul (7-9 Days)",
        image: getTreatmentDetailImage("tummy-tuck", "process"),
        processSteps: [
          {
            title: "Step 1: Consultation",
            description:
              "We examine your skin quality, abdominal wall, and fat distribution. We'll also discuss your lifestyle and goals to create a tailored plan (full vs. mini tummy tuck, sometimes combined with liposuction).",
          },
          {
            title: "Step 2: The Procedure",
            description:
              "Advanced abdominoplasty technique for comprehensive reconstruction.",
            benefits: [
              "Performed under general anesthesia.",
              "Incision placed low, just above the pubic line (concealable under clothing).",
              "Excess skin removed; abdominal muscles tightened if separated.",
              "Belly button repositioned for a natural look.",
              "Duration: 2–3 hours.",
            ],
          },
        ],
        timeline: [
          {
            stage: "Arrival + Consultation",
            timeframe: "Day 1",
            description:
              "Comprehensive examination and surgical planning with your specialist.",
            icon: "🩺",
          },
          {
            stage: "Surgery + Hospital Stay",
            timeframe: "Day 2",
            description:
              "2-3 hour procedure followed by 1-2 nights hospital monitoring.",
            icon: "🏥",
          },
          {
            stage: "Hotel Recovery",
            timeframe: "Days 3-7",
            description:
              "Rest with daily coordinator check-ins. Compression garment worn for support.",
            icon: "🏨",
          },
          {
            stage: "Follow-up & Clearance",
            timeframe: "Days 8-9",
            description: "Final assessment and clearance to fly home safely.",
            icon: "✅",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "Before and after comparison showing flatter, tighter stomach with improved posture and core strength.",
        content:
          "Comprehensive transformation addressing both appearance and function for lasting confidence.",
        image: getTreatmentDetailImage("tummy-tuck", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("tummy-tuck", "before"),
          after: getTreatmentDetailImage("tummy-tuck", "after"),
        },
        benefits: [
          {
            title: "Flatter, Tighter Stomach",
            description:
              "Smoother contour with excess skin removal. Results are durable with stable weight and provide long-term confidence.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Stronger Core",
            description:
              "Muscle repair restores support and posture. Addresses diastasis recti for improved functional strength and stability.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Discreet Scarring",
            description:
              "Scars hidden low under underwear/bikini line. Strategic placement ensures concealability while fading naturally over time.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Our Commitment to Excellence",
        content:
          "A tummy tuck is one of the most transformative surgeries, but also one of the most delicate. Our surgeons balance artistry with safety, ensuring scars are discreet, results are natural, and function is restored — not just appearance.",
        image: getTreatmentDetailImage("tummy-tuck", "section", 0),
      },
    ],
    faq: [
      {
        question: "What's the difference between a tummy tuck and liposuction?",
        answer:
          "Liposuction removes fat only. A tummy tuck removes excess skin and tightens muscles, making it ideal after pregnancy or major weight loss.",
      },
      {
        question: "Will I have a big scar?",
        answer:
          "Yes, a horizontal scar is necessary, but it's placed very low (underwear/bikini line) and fades over time. For many patients, the trade-off is worth it for a flat, firm stomach.",
      },
      {
        question: "How painful is recovery?",
        answer:
          "The first week feels tight and sore, especially if muscles are repaired. Pain is manageable with medication, and most patients walk comfortably within a few days.",
      },
      {
        question: "How long until I can return to normal life?",
        answer:
          "Desk work: about 2 weeks. Light exercise: 4 weeks. Full workouts or heavy lifting: 6–8 weeks.",
      },
      {
        question: "Can I get pregnant after a tummy tuck?",
        answer:
          "Yes, but it's best to do the surgery after you're done having children, since pregnancy can stretch muscles and skin again.",
      },
      {
        question: "Will fat come back after surgery?",
        answer:
          "Removed skin and fat are gone permanently, but weight gain can still affect results. Maintaining a stable lifestyle protects your outcome.",
      },
      {
        question: "How long do I need to stay in Istanbul?",
        answer: "Plan for 7–9 days for surgery, recovery, and follow-up.",
      },
      {
        question: "How much does it cost?",
        answer:
          "We provide one all-inclusive quote covering surgery, hospital stay, hotel, transfers, and aftercare. No hidden costs.",
      },
    ],
    cta: {
      headline: "It's More Than a Flat Stomach. It's Confidence and Comfort.",
      subheadline:
        "Take the first step toward restoring your body and confidence with a tummy tuck tailored to your needs.",
      buttonText: "Get My Free Quote & Treatment Plan",
    },
  };

  const mommyMakeoverContent = {
    pageTitle:
      "Mommy Makeover in Istanbul | Restore Your Confidence, Celebrate Your Journey",
    hero: {
      visual:
        "A confident woman in her 30s–40s, casually dressed, smiling naturally, with her children blurred in the background (subtle, not staged).",
      headline:
        "Motherhood Changes Everything. But You Deserve to Feel Like Yourself Again.",
      subheadline:
        "Pregnancy and breastfeeding leave marks of love — and sometimes, changes you can't reverse with diet and exercise. A Mommy Makeover combines procedures tailored to you, restoring your shape and confidence while honoring the incredible journey your body has been through.",
      image: getTreatmentDetailImage("mommy-makeover", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Is a Mommy Makeover Right for You?",
        content: `Every woman's body changes differently after childbirth. The goal isn't perfection — it's to help you feel balanced, confident, and comfortable again. You may be a candidate if you:`,
        image: getTreatmentDetailImage("mommy-makeover", "candidacy"),
        checklist: [
          "Have loose skin or weakened muscles in the abdomen.",
          "Experience sagging or volume loss in the breasts.",
          "Struggle with stubborn fat deposits that won't budge.",
          "Feel your body no longer reflects your energy and spirit.",
        ],
        subtitle:
          "This surgery is fully customizable. Typical combinations include:",
        footer:
          "Tummy tuck → to repair muscles & remove stretched skin. Breast lift or augmentation → to restore fullness and shape. Liposuction → to contour hips, waist, or thighs.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Approach",
        content:
          "Fully customizable combination surgery tailored to your post-pregnancy goals and priorities.",
        subtitle: "Recovery in Istanbul (8-10 Days)",
        image: getTreatmentDetailImage("mommy-makeover", "process"),
        processSteps: [
          {
            title: "Step 1: Consultation",
            description:
              "We start with a detailed discussion about your priorities — what bothers you most, and what you'd like to improve. No two Mommy Makeovers are the same.",
          },
          {
            title: "Step 2: Customized Procedure Plan",
            description:
              "Personalized combination surgery designed around your specific needs.",
            benefits: [
              "Tummy tuck for core strength & flatness.",
              "Breast lift/augmentation for youthful contour.",
              "Liposuction for sculpting.",
              "Sometimes combined with fat transfer for balance.",
            ],
          },
        ],
        timeline: [
          {
            stage: "Arrival + Consultation",
            timeframe: "Day 1",
            description:
              "Comprehensive assessment and customized surgical planning with your specialist.",
            icon: "👶",
          },
          {
            stage: "Surgery + Hospital Stay",
            timeframe: "Day 2",
            description:
              "Combined procedures followed by 1-2 nights hospital monitoring for safety.",
            icon: "🏥",
          },
          {
            stage: "Hotel Recovery",
            timeframe: "Days 3-8",
            description:
              "Rest with compression garment and close follow-up care from your coordinator.",
            icon: "🏨",
          },
          {
            stage: "Surgeon Check-up",
            timeframe: "Day 9",
            description:
              "Final assessment and clearance to travel home safely.",
            icon: "✅",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "Before and after comparison showing restored stomach contour, youthful breasts, and refined body shape with natural harmony.",
        content:
          "Comprehensive transformation that celebrates motherhood while restoring your confidence and comfort.",
        image: getTreatmentDetailImage("mommy-makeover", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("mommy-makeover", "before"),
          after: getTreatmentDetailImage("mommy-makeover", "after"),
        },
        benefits: [
          {
            title: "Restored Body Contour",
            description:
              "No more stretched skin or bulge in the stomach. Youthful, natural-looking breasts that are lifted, fuller, or both.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Refined Body Shape",
            description:
              "Fat removed where you don't want it, added (if desired) where you do. Confidence in clothing again — fitted dresses, swimwear feel comfortable.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Natural Harmony",
            description:
              "Results look natural, balanced, and true to your identity. Harmony, not exaggeration — celebrating motherhood while restoring confidence.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Our Commitment to Celebrating Motherhood",
        content:
          "A Mommy Makeover isn't about \"undoing\" motherhood — it's about celebrating it while giving you back your confidence. Our surgeons design every procedure with safety first and artistry second — ensuring natural, proportional, and lasting outcomes.",
        image: getTreatmentDetailImage("mommy-makeover", "section", 4),
      },
    ],
    faq: [
      {
        question: "Can I have a Mommy Makeover right after pregnancy?",
        answer:
          "No. We recommend waiting at least 6–12 months after childbirth (and after finishing breastfeeding) for safe, stable results.",
      },
      {
        question: "Will I lose weight from surgery?",
        answer:
          "A Mommy Makeover is not weight loss surgery. It restores contour, tightness, and proportion — not overall weight reduction.",
      },
      {
        question: "What is the recovery like?",
        answer:
          "The first week is the toughest, with soreness and swelling. By 2–3 weeks, most patients resume light activity. Full recovery takes 6–8 weeks.",
      },
      {
        question: "Will I be able to have children again?",
        answer:
          "Yes, but results may be affected by future pregnancies. For the best long-term outcome, it's ideal to complete your family first.",
      },
      {
        question: "What scars should I expect?",
        answer:
          "Scars vary depending on procedures (tummy tuck, breast lift, etc.). They're placed discreetly (low on the abdomen, around the areola, or in natural folds) and fade over time.",
      },
      {
        question: "Can procedures be done together safely?",
        answer:
          "Yes — combining them reduces overall recovery time. Patient safety is always our first priority, and your plan is customized to your health and goals.",
      },
      {
        question: "How long do I need to stay in Istanbul?",
        answer: "Typically 8–10 days for surgery and follow-up.",
      },
      {
        question: "How much does it cost?",
        answer:
          "We provide an all-inclusive package (surgery, hospital, hotel, transfers, aftercare). No hidden costs.",
      },
    ],
    cta: {
      headline:
        "Your Body Told a Story of Motherhood. Now Let It Tell a Story of Confidence.",
      subheadline:
        "A Mommy Makeover is not about changing who you are. It's about giving you back comfort, strength, and pride in your reflection.",
      buttonText: "Get My Free Quote & Treatment Plan",
    },
  };

  const bblContent = {
    pageTitle: "Brazilian Butt Lift in Istanbul | Natural Curves",
    hero: {
      visual:
        "A confident woman showing natural, proportionate curves with an hourglass silhouette. Focus on balance and natural enhancement rather than exaggeration.",
      headline: "Brazilian Butt Lift in Istanbul — Natural Curves",
      subheadline:
        "A BBL is a safe surgical procedure that combines liposuction and fat transfer. Fat is removed from areas like the waist, abdomen, or thighs and carefully grafted into the buttocks and hips. The goal is balance — a slimmer waistline, fuller buttocks, and curves that look proportionate to your frame.",
      image: getTreatmentDetailImage("brazilian-butt-lift", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Who Is It For?",
        content: `A BBL may be suitable if you:`,
        image: getTreatmentDetailImage("brazilian-butt-lift", "candidacy"),
        checklist: [
          "Have stubborn fat around the waist, abdomen, or thighs.",
          "Want fuller, lifted buttocks without implants.",
          "Are looking for a more defined waist-to-hip ratio.",
          "Prefer a natural solution that uses your own fat.",
        ],
        subtitle: "What Is a Brazilian Butt Lift?",
        footer:
          "A Brazilian Butt Lift (BBL) is not about exaggeration. It is about using your own fat to enhance the natural shape of your body. This dual approach — reduction in one area, enhancement in another — creates an hourglass effect that cannot be achieved with exercise or weight loss alone.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Approach",
        content:
          "Safety-first BBL technique with international guidelines and customized planning for natural proportions.",
        subtitle: "Recovery in Istanbul (8-9 Days)",
        image: getTreatmentDetailImage("brazilian-butt-lift", "process"),
        processSteps: [
          {
            title: "Safety First",
            description:
              "The Brazilian Butt Lift has received attention worldwide regarding safety. At Saray Estetica, we strictly follow international safety guidelines. Fat is always injected above the muscle layer, never into it, to avoid dangerous complications.",
          },
          {
            title: "Technical Precision",
            description:
              "Advanced fat transfer technique for maximum survival and natural results.",
            benefits: [
              "Liposuction performed with fine cannulas for smooth contouring.",
              "Fat grafted in multiple layers to maximize survival (typically 60–80% of fat remains permanently).",
              "Procedure time: 2–4 hours depending on liposuction areas.",
              "Fat is purified and re-injected in precise layers.",
              "Customized planning for natural proportions.",
            ],
          },
        ],
        timeline: [
          {
            stage: "Arrival + Consultation",
            timeframe: "Day 1",
            description:
              "Comprehensive assessment and customized surgical planning with safety protocols.",
            icon: "📐",
          },
          {
            stage: "Surgery + Hospital Stay",
            timeframe: "Day 2",
            description:
              "2-4 hour procedure followed by 1 night hospital monitoring for safety.",
            icon: "🏥",
          },
          {
            stage: "Hotel Recovery",
            timeframe: "Days 3-8",
            description:
              "Rest with special positioning guidelines and compression garment support.",
            icon: "🏨",
          },
          {
            stage: "Follow-up & Clearance",
            timeframe: "Day 9",
            description:
              "Final assessment and clearance to travel home safely.",
            icon: "✅",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "Before and after comparison showing refined waistline, fuller buttocks, and natural hourglass silhouette with balanced proportions.",
        content:
          "Natural enhancement using your own fat for durable, proportionate results that feel and move naturally.",
        image: getTreatmentDetailImage("brazilian-butt-lift", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("brazilian-butt-lift", "before"),
          after: getTreatmentDetailImage("brazilian-butt-lift", "after"),
        },
        benefits: [
          {
            title: "Waistline Refined",
            description:
              "Liposuction creates a slimmer waistline while buttocks become fuller and lifted with your own fat. Natural hourglass silhouette achieved.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Natural Feel & Movement",
            description:
              "Results are made from your own tissue, ensuring natural feel and movement. No foreign implants, just enhanced natural curves.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Durable Outcome",
            description:
              "Surviving fat (60-80%) is permanent. Maintaining stable weight ensures long-term results with balanced proportions.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Safety & Proportion Focus",
        content:
          "Our focus is proportion and safety. The goal is to enhance your natural frame, not create an exaggerated look. We strictly follow international safety guidelines with fat injected above the muscle layer only.",
        image: getTreatmentDetailImage("brazilian-butt-lift", "section", 4),
      },
    ],
    faq: [
      {
        question: "Will my results look natural?",
        answer:
          "Yes. Our focus is proportion. The goal is to enhance your natural frame, not create an exaggerated look.",
      },
      {
        question: "What if I don't have enough fat?",
        answer:
          "In very slim patients, fat harvesting may be limited. In such cases, your surgeon will discuss realistic expectations.",
      },
      {
        question: "How long will the results last?",
        answer:
          "Most transferred fat survives permanently. Maintaining a stable weight is key for long-term results.",
      },
      {
        question: "Can I sit after surgery?",
        answer:
          "Direct sitting should be avoided for about 2 weeks. A special pillow allows you to sit without pressure on the buttocks.",
      },
      {
        question: "How painful is recovery?",
        answer:
          "The soreness is more noticeable in liposuction areas than in the buttocks. Most patients describe it as bruising and manage it with simple pain relief.",
      },
      {
        question: "When can I see the final result?",
        answer:
          "Initial improvement is visible immediately, but the final settled shape is seen between 3–6 months.",
      },
      {
        question: "How long should I stay in Istanbul?",
        answer:
          "We recommend 8–9 days for safe recovery and follow-up before flying home.",
      },
      {
        question: "What is included in the cost?",
        answer:
          "Our all-inclusive packages cover surgery, hospital stay, transfers, and hotel support. No hidden fees.",
      },
    ],
    cta: {
      headline: "Balanced Curves. Natural Results. Safe Technique.",
      subheadline:
        "The Brazilian Butt Lift reshapes your body using your own fat — reducing the waist, enhancing the hips, and creating natural curves tailored to your frame.",
      buttonText: "Get My Free Quote & Treatment Plan",
    },
  };

  const breastLiftContent = {
    pageTitle: "Breast Lift in Istanbul | Restore Shape and Position Naturally",
    hero: {
      visual:
        "A confident woman showing natural, youthful breast contour and posture. Focus on elegance and natural results rather than enhancement.",
      headline: "Breast Lift in Istanbul — Restoring Shape Without Implants",
      subheadline:
        "A breast lift (mastopexy) raises and reshapes breasts that have sagged due to age, pregnancy, or weight changes. The procedure restores a firmer, more youthful contour without adding implants, unless desired.",
      image: getTreatmentDetailImage("breast-lift", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Who Is It For?",
        content: `You may be a candidate if you:`,
        image: getTreatmentDetailImage("breast-lift", "candidacy"),
        checklist: [
          "Notice sagging or drooping breasts.",
          "Have nipples that point downward or sit below the breast fold.",
          "Experienced changes after pregnancy, breastfeeding, or major weight loss.",
          "Feel that bras no longer provide the support or shape you want.",
        ],
        subtitle: "What Is a Breast Lift?",
        footer:
          "A breast lift corrects ptosis (sagging) by removing excess skin, tightening surrounding tissue, and repositioning the nipple and areola to a more youthful height. The goal is not to make breasts bigger, but to restore their shape, firmness, and natural position.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Approach",
        content:
          "Tailored techniques based on the degree of sagging for optimal results with minimal scarring.",
        subtitle: "Recovery in Istanbul (7-8 Days)",
        image: getTreatmentDetailImage("breast-lift", "process"),
        processSteps: [
          {
            title: "Tailored to the Degree of Sagging",
            description:
              "Not every woman needs the same lift. Techniques vary depending on the amount of excess skin and the nipple's position. Your surgeon will choose the approach that provides the best lift with the least visible scarring.",
          },
          {
            title: "Types of Breast Lift Techniques",
            description:
              "Four main techniques tailored to your specific needs and sagging degree.",
            benefits: [
              "Crescent lift → minor correction.",
              'Periareolar ("donut") lift → mild sagging, scar around the areola only.',
              'Vertical ("lollipop") lift → moderate sagging, scar around areola + vertical line.',
              "Anchor lift → significant sagging, with an additional horizontal scar along the crease.",
            ],
          },
        ],
        timeline: [
          {
            stage: "Arrival + Consultation",
            timeframe: "Day 1",
            description:
              "Comprehensive assessment and technique selection based on your sagging degree.",
            icon: "📏",
          },
          {
            stage: "Surgery Day",
            timeframe: "Day 2",
            description:
              "2-3 hour procedure (outpatient or 1-night hospital stay depending on case).",
            icon: "🏥",
          },
          {
            stage: "Hotel Recovery",
            timeframe: "Days 3-7",
            description:
              "Rest with surgical bra support and gradual activity increase.",
            icon: "🏨",
          },
          {
            stage: "Follow-up & Clearance",
            timeframe: "Day 8",
            description:
              "Final assessment and clearance to travel home safely.",
            icon: "✅",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "Before and after comparison showing lifted, reshaped breasts with corrected nipple position and youthful contour.",
        content:
          "Natural restoration of shape and position without implants, creating long-lasting, proportionate results.",
        image: getTreatmentDetailImage("breast-lift", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("breast-lift", "before"),
          after: getTreatmentDetailImage("breast-lift", "after"),
        },
        benefits: [
          {
            title: "Breasts Lifted and Reshaped",
            description:
              "Firmer, more youthful contour with nipple position corrected to natural and symmetrical placement. No implants needed unless requested.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Long-lasting Outcome",
            description:
              "Results can last many years, especially with stable weight and no pregnancies afterward. Natural proportions restored effectively.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Minimal Scarring",
            description:
              "Scars placed carefully around areola, vertically, or under breast fold. They fade significantly over 6-12 months with proper care.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Restoration Without Enhancement",
        content:
          "Our approach focuses on restoring natural shape and position rather than adding volume. We tailor the technique to your degree of sagging, ensuring the best lift with minimal visible scarring. For those who also want volume, we can combine with implants.",
        image: getTreatmentDetailImage("breast-lift", "section", 3),
      },
    ],
    faq: [
      {
        question: "Will a breast lift make my breasts bigger?",
        answer:
          "No. A lift reshapes and repositions existing tissue. For additional volume, an implant can be combined.",
      },
      {
        question: "Will the scars be visible?",
        answer:
          "Yes, scars are necessary, but they are placed carefully around the areola, vertically, or under the breast fold. They fade significantly over time.",
      },
      {
        question: "How long do the results last?",
        answer:
          "Many years. However, aging, gravity, and future pregnancies can affect results.",
      },
      {
        question: "Will I lose nipple sensation?",
        answer:
          "Temporary numbness is common, but most patients recover normal sensation.",
      },
      {
        question: "Can I breastfeed after a lift?",
        answer:
          "In some cases, breastfeeding may still be possible, but it is not guaranteed. If future breastfeeding is a priority, discuss this with your surgeon.",
      },
      {
        question: "How painful is recovery?",
        answer:
          "Most describe it as soreness and tightness, not sharp pain. Managed with routine pain relief.",
      },
      {
        question: "When can I return to exercise?",
        answer: "Light walking after a few days; full exercise after 6 weeks.",
      },
      {
        question: "How long should I stay in Istanbul?",
        answer:
          "7–8 days is recommended to allow surgery, initial recovery, and follow-up.",
      },
    ],
    cta: {
      headline: "Restore Shape. Restore Confidence. Without Implants.",
      subheadline:
        "A breast lift reshapes sagging breasts, restores firmness, and returns them to a natural, youthful position.",
      buttonText: "Get My Free Quote & Treatment Plan",
    },
  };

  const breastAugmentationContent = {
    pageTitle:
      "Breast Augmentation in Istanbul | Safe, Natural Enhancement with Implants",
    hero: {
      visual:
        "A confident woman showing natural, proportionate breast enhancement with balanced figure and elegant posture.",
      headline:
        "Breast Augmentation in Istanbul — Shape, Volume, and Balance with Implants",
      subheadline:
        "Breast augmentation (augmentation mammoplasty) enhances breast size and shape using silicone implants. At Saray Estetica, the goal is proportion and natural results — creating a balanced figure that feels comfortable and true to your body.",
      image: getTreatmentDetailImage("breast-augmentation", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Who Is It For?",
        content: `You may consider breast augmentation if you:`,
        image: getTreatmentDetailImage("breast-augmentation", "candidacy"),
        checklist: [
          "Feel your breasts are too small for your frame.",
          "Want to restore lost volume after pregnancy or weight loss.",
          "Desire better symmetry between breasts.",
          "Are seeking both size and shape enhancement rather than just a lift.",
        ],
        subtitle: "What Is Breast Augmentation?",
        footer:
          "Breast augmentation increases breast volume using silicone implants placed either under the breast tissue or beneath the chest muscle. The procedure is highly customizable with implant type, shape, and size chosen to match your anatomy and goals.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Approach",
        content:
          "Personalized planning with comprehensive implant options for natural, proportionate results.",
        subtitle: "Recovery in Istanbul (6-7 Days)",
        image: getTreatmentDetailImage("breast-augmentation", "process"),
        processSteps: [
          {
            title: "Personalized Planning",
            description:
              "During consultation, we take detailed measurements and discuss your preferences. Together, we select the implant type, size, and placement that best fit your body and goals.",
          },
          {
            title: "Implant Options & Procedure",
            description:
              "Comprehensive customization for optimal results and safety.",
            benefits: [
              "Silicone implants → preferred for natural feel and safety.",
              'Shapes: Round (more fullness at the top) or Anatomical/"teardrop" (more natural slope).',
              "Surfaces: Smooth or textured, depending on indication.",
              "Placement: Subglandular (above the muscle) or Submuscular (under the muscle).",
              "Duration: 1–2 hours under general anesthesia.",
            ],
          },
        ],
        timeline: [
          {
            stage: "Arrival + Consultation",
            timeframe: "Day 1",
            description:
              "Detailed measurements, implant selection, and personalized surgical planning.",
            icon: "📐",
          },
          {
            stage: "Surgery Day",
            timeframe: "Day 2",
            description:
              "1-2 hour procedure (usually outpatient; 1-night hospital stay if required).",
            icon: "🏥",
          },
          {
            stage: "Hotel Recovery",
            timeframe: "Days 3-6",
            description:
              "Rest with supportive bra and gradual activity increase.",
            icon: "🏨",
          },
          {
            stage: "Follow-up & Clearance",
            timeframe: "Day 7",
            description:
              "Final assessment and clearance to travel home safely.",
            icon: "✅",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "Before and after comparison showing fuller breasts with improved symmetry and natural contour that matches frame and proportions.",
        content:
          "Enhanced volume and projection with improved symmetry, creating natural contour shaped to match your frame.",
        image: getTreatmentDetailImage("breast-augmentation", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("breast-augmentation", "before"),
          after: getTreatmentDetailImage("breast-augmentation", "after"),
        },
        benefits: [
          {
            title: "Fuller Breasts",
            description:
              "Increased volume and projection with improved symmetry for a balanced look across both sides. Natural contour shaped to your frame.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Natural Enhancement",
            description:
              "Implant type and placement carefully chosen for results that suit your frame. Proportion and natural results prioritized over size alone.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Durable Outcome",
            description:
              "Modern silicone implants typically last 10–15 years before considering replacement. Long-term enhancement with proven safety.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Enhancement Designed Around You",
        content:
          "Our approach prioritizes proportion and natural results over size alone. We carefully select implant type, shape, size, and placement to create a balanced figure that feels comfortable and true to your body. Modern silicone implants provide natural feel with proven safety.",
        image: getTreatmentDetailImage("breast-augmentation", "section", 3),
      },
    ],
    faq: [
      {
        question: "Will my breasts look natural?",
        answer:
          "Yes. Implant type and placement are carefully chosen for a result that suits your frame.",
      },
      {
        question: "Are silicone implants safe?",
        answer:
          "Yes. Modern silicone implants are highly safe, well-studied, and approved by international health authorities.",
      },
      {
        question: "Will there be visible scars?",
        answer:
          "The most common incision is placed under the breast fold, where scars are discreet and fade with time.",
      },
      {
        question: "How long do implants last?",
        answer:
          "On average 10–15 years. Replacement may be needed if changes occur over time.",
      },
      {
        question: "Will I lose sensation?",
        answer:
          "Temporary numbness is common, but most patients regain normal sensation. Permanent changes are rare.",
      },
      {
        question: "Can I breastfeed after augmentation?",
        answer:
          "In most cases, yes. Many women are able to breastfeed after surgery, though it cannot be guaranteed.",
      },
      {
        question: "How painful is recovery?",
        answer:
          "Soreness and tightness are common in the first week, especially with submuscular placement. Pain is well controlled with medication.",
      },
      {
        question: "How long do I need to stay in Istanbul?",
        answer:
          "6–7 days is recommended to allow surgery, initial healing, and follow-up.",
      },
    ],
    cta: {
      headline: "Enhancement Designed Around You.",
      subheadline:
        "Breast augmentation restores volume, improves symmetry, and enhances feminine contour — with implants chosen for your body and your goals.",
      buttonText: "Get My Free Quote & Treatment Plan",
    },
  };

  const breastReductionContent = {
    pageTitle:
      "Breast Reduction in Istanbul | Relief, Comfort, and Natural Proportion",
    hero: {
      visual:
        "A confident woman showing natural, proportionate breast size with improved posture and comfortable, relaxed stance.",
      headline:
        "Breast Reduction in Istanbul — Relief from Pain, Balance in Proportion",
      subheadline:
        "Breast reduction (reduction mammoplasty) removes excess breast tissue, fat, and skin to achieve a smaller, lighter, and better-proportioned breast size. The procedure is both functional and aesthetic — easing physical discomfort while restoring shape and confidence.",
      image: getTreatmentDetailImage("breast-reduction", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Who Is It For?",
        content: `You may consider breast reduction if you:`,
        image: getTreatmentDetailImage("breast-reduction", "candidacy"),
        checklist: [
          "Experience daily discomfort from overly large breasts.",
          "Suffer from posture issues or back pain.",
          "Struggle with restricted physical activity.",
          "Feel self-conscious or limited in clothing choices.",
        ],
        subtitle: "What Is Breast Reduction?",
        footer:
          "Breast reduction surgery removes excess breast tissue and skin, repositions the nipple and areola to a natural height, and creates a lighter, firmer, and more proportionate breast shape. The procedure provides medical relief from back, neck, and shoulder pain, skin irritation, and difficulty finding properly fitting clothing.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Approach",
        content:
          "Customized surgical technique based on reduction size and breast anatomy for optimal comfort and proportions.",
        subtitle: "Recovery in Istanbul (7-8 Days)",
        image: getTreatmentDetailImage("breast-reduction", "process"),
        processSteps: [
          {
            title: "Customized Technique",
            description:
              "The surgical approach depends on the size of reduction required and your breast anatomy. Common incision patterns are chosen for optimal results with minimal scarring.",
          },
          {
            title: "Surgical Details & Preservation",
            description:
              "Comprehensive reduction technique with tissue preservation and repositioning.",
            benefits: [
              "Performed under general anesthesia.",
              "Duration: 2–4 hours.",
              "Usually 1-night hospital stay.",
              'Vertical ("lollipop") incision → for moderate reductions.',
              "Anchor incision → for larger reductions, with additional scar along the fold.",
              "Nipple and areola preserved and repositioned (rarely grafted in very large reductions).",
            ],
          },
        ],
        timeline: [
          {
            stage: "Arrival + Consultation",
            timeframe: "Day 1",
            description:
              "Comprehensive assessment and customized reduction planning with your specialist.",
            icon: "📏",
          },
          {
            stage: "Surgery + Hospital Stay",
            timeframe: "Day 2",
            description:
              "2-4 hour procedure followed by 1-night hospital monitoring for safety.",
            icon: "🏥",
          },
          {
            stage: "Hotel Recovery",
            timeframe: "Days 3-7",
            description:
              "Rest with surgical bra support and gradual comfort improvement.",
            icon: "🏨",
          },
          {
            stage: "Follow-up & Clearance",
            timeframe: "Day 8",
            description:
              "Final assessment and clearance to travel home safely.",
            icon: "✅",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "Before and after comparison showing reduced breast size with improved proportions, better posture, and enhanced comfort and mobility.",
        content:
          "Relief from pain and discomfort with improved proportions, better posture, and restored quality of life.",
        image: getTreatmentDetailImage("breast-reduction", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("breast-reduction", "before"),
          after: getTreatmentDetailImage("breast-reduction", "after"),
        },
        benefits: [
          {
            title: "Physical Relief",
            description:
              "Reduced breast size and weight provide relief from back, neck, and shoulder pain. Improved posture and mobility make daily activities and exercise easier.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Better Proportions",
            description:
              "Body silhouette becomes more balanced with improved proportions. Clothing options restored with wider range of fits and enhanced comfort.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Long-lasting Outcome",
            description:
              "Results are permanent, providing lasting relief and comfort. Weight changes or pregnancy may affect shape but core benefits remain.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Relief, Comfort, and Proportion",
        content:
          "Breast reduction is more than an aesthetic choice — it restores physical comfort, balance, and quality of life. Our customized approach considers both the functional relief you need and the proportionate, natural shape you desire.",
        image: getTreatmentDetailImage("breast-reduction", "section", 3),
      },
    ],
    faq: [
      {
        question: "Will I lose nipple sensation?",
        answer:
          "Temporary changes are common; permanent loss is rare but possible, especially in very large reductions.",
      },
      {
        question: "Can I breastfeed after surgery?",
        answer:
          "Some women are able to breastfeed, but it cannot be guaranteed. If future breastfeeding is important, discuss this with your surgeon.",
      },
      {
        question: "Will the scars be large?",
        answer:
          "Scars are necessary, but placed strategically around the areola, vertically, and sometimes under the fold. They fade significantly with time.",
      },
      {
        question: "How painful is recovery?",
        answer:
          "Pain is moderate in the first week, easily managed with medication. Most describe it as tightness rather than sharp pain.",
      },
      {
        question: "Will insurance cover breast reduction?",
        answer:
          "In some countries, breast reduction may be covered when performed for medical reasons. For international patients, our team provides clear, all-inclusive pricing.",
      },
      {
        question: "How long do I need to stay in Istanbul?",
        answer:
          "We recommend 7–8 days to allow for surgery, recovery, and follow-up.",
      },
      {
        question: "How much smaller will my breasts be?",
        answer:
          "This depends on your anatomy and goals. Your surgeon will plan a reduction that balances relief, proportion, and safety.",
      },
      {
        question: "How long do results last?",
        answer:
          "Results are permanent, but weight fluctuations, pregnancy, or aging may alter breast shape.",
      },
    ],
    cta: {
      headline: "Relief, Comfort, and Proportion in One Procedure.",
      subheadline:
        "Breast reduction is more than an aesthetic choice — it restores physical comfort, balance, and quality of life.",
      buttonText: "Get My Free Quote & Treatment Plan",
    },
  };

  const gynecomastiaContent = {
    pageTitle: "Gynecomastia Surgery in Istanbul | Male Breast Reduction",
    hero: {
      visual:
        "A confident man showing flat, masculine chest contour with natural, athletic posture and comfortable stance.",
      headline:
        "Gynecomastia Surgery in Istanbul — A Permanent Solution for Enlarged Male Breasts",
      subheadline:
        "Gynecomastia surgery removes excess gland tissue, fat, and skin from the chest to restore a flatter, firmer, and more masculine contour. The procedure is safe, effective, and offers long-lasting results.",
      image: getTreatmentDetailImage("gynecomastia", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Who Is It For?",
        content: `You may consider surgery if you:`,
        image: getTreatmentDetailImage("gynecomastia", "candidacy"),
        checklist: [
          "Have persistent enlarged breast tissue despite exercise and weight loss.",
          "Feel self-conscious in fitted clothing or when shirtless.",
          "Experience physical discomfort or skin irritation.",
          "Want a firmer, flatter chest contour.",
        ],
        subtitle: "What Is Gynecomastia?",
        footer:
          "Gynecomastia is the enlargement of male breast tissue, often caused by hormonal imbalance, genetics, weight changes, or medication use. In many cases, exercise and dieting do not resolve the issue. Gynecomastia surgery addresses both fat and gland tissue for a permanent correction.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Approach",
        content:
          "Customized technique combining liposuction and glandular excision for masculine chest contour.",
        subtitle: "Recovery in Istanbul (5-6 Days)",
        image: getTreatmentDetailImage("gynecomastia", "process"),
        processSteps: [
          {
            title: "Customized Technique",
            description:
              "Our approach combines the most effective methods for permanent correction of enlarged male breast tissue with minimal scarring.",
          },
          {
            title: "Surgical Details & Methods",
            description:
              "Comprehensive correction technique for optimal masculine contour.",
            benefits: [
              "Liposuction removes excess fat for smoother contour.",
              "Glandular excision removes firm breast tissue through a small incision at the edge of the areola.",
              "Skin tightening may be added in severe cases.",
              "Performed under general anesthesia.",
              "Duration: 1–2 hours.",
              "Outpatient procedure; no overnight stay required in most cases.",
            ],
          },
        ],
        timeline: [
          {
            stage: "Arrival + Consultation",
            timeframe: "Day 1",
            description:
              "Comprehensive assessment and customized surgical planning for optimal masculine contour.",
            icon: "💪",
          },
          {
            stage: "Surgery (Outpatient)",
            timeframe: "Day 2",
            description:
              "1-2 hour day surgery combining liposuction and glandular excision.",
            icon: "🏥",
          },
          {
            stage: "Hotel Recovery",
            timeframe: "Days 3-5",
            description:
              "Rest with compression vest and gradual activity increase.",
            icon: "🏨",
          },
          {
            stage: "Follow-up & Clearance",
            timeframe: "Day 6",
            description:
              "Final assessment and clearance to travel home safely.",
            icon: "✅",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "Before and after comparison showing flatter, firmer chest with masculine contour and improved confidence in clothing and social situations.",
        content:
          "Permanent correction with flatter, firmer chest and restored masculine contour for lasting confidence.",
        image: getTreatmentDetailImage("gynecomastia", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("gynecomastia", "before"),
          after: getTreatmentDetailImage("gynecomastia", "after"),
        },
        benefits: [
          {
            title: "Permanent Correction",
            description:
              "Flatter, firmer chest with masculine contour. Once gland tissue is removed, it does not return, providing lasting results.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Minimal Scarring",
            description:
              "Incisions hidden around the areola, making scars barely noticeable. Advanced techniques ensure optimal healing and discretion.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Improved Confidence",
            description:
              "Enhanced confidence in clothing, sports, and social situations. Freedom to wear fitted shirts and be comfortable shirtless.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Safe, Effective, Permanent Solution",
        content:
          "Gynecomastia surgery is a safe, effective way to restore a masculine chest contour and confidence in your body. Our experienced surgeons use advanced techniques to ensure optimal results with minimal scarring and quick recovery.",
        image: getTreatmentDetailImage("gynecomastia", "section", 3),
      },
    ],
    faq: [
      {
        question: "Is gynecomastia common?",
        answer:
          "Yes. Up to 30–40% of men experience some degree of gynecomastia during their lifetime.",
      },
      {
        question: "Will exercise fix it?",
        answer:
          "Not if glandular tissue is present. Exercise may reduce fat, but gland tissue requires surgical removal.",
      },
      {
        question: "How painful is recovery?",
        answer:
          "Most men describe mild soreness or tightness, easily managed with standard pain medication.",
      },
      {
        question: "Will there be scars?",
        answer:
          "Scars are minimal, usually placed along the edge of the areola, making them barely noticeable.",
      },
      {
        question: "Can the condition come back?",
        answer:
          "The gland tissue removed will not grow back. However, significant weight gain, hormone changes, or certain medications may affect the chest again.",
      },
      {
        question: "How long before I can go back to the gym?",
        answer:
          "Light cardio after 2 weeks; chest and weight training after 4–6 weeks.",
      },
      {
        question: "How long do I need to stay in Istanbul?",
        answer: "We recommend 5–6 days for surgery, recovery, and follow-up.",
      },
      {
        question: "Is this surgery safe?",
        answer:
          "Yes. Complications are rare when performed by experienced surgeons under safe conditions.",
      },
    ],
    cta: {
      headline: "A Flatter, Firmer Chest — Permanently.",
      subheadline:
        "Gynecomastia surgery is a safe, effective way to restore a masculine chest contour and confidence in your body.",
      buttonText: "Get My Free Quote & Treatment Plan",
    },
  };

  const gastricSleeveContent = {
    pageTitle:
      "Gastric Sleeve in Istanbul | Safe, Effective Weight Loss Surgery",
    hero: {
      visual:
        "A confident person showing healthy weight loss results with improved mobility, energy, and overall well-being after successful gastric sleeve surgery.",
      headline:
        "Gastric Sleeve Surgery in Istanbul — A Proven Solution for Lasting Weight Loss",
      subheadline:
        "A gastric sleeve (sleeve gastrectomy) removes around 70–80% of the stomach, reducing its size and limiting food intake. It also lowers hunger hormones, making weight loss more manageable. At Saray Estetica, this procedure is performed by specialist bariatric surgeons in accredited hospitals for maximum safety and results.",
      image: getTreatmentDetailImage("gastric-sleeve", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Who Is It For?",
        content: `Gastric sleeve may be recommended if you:`,
        image: getTreatmentDetailImage("gastric-sleeve", "candidacy"),
        checklist: [
          "Have a BMI over 35, or BMI over 30 with health conditions like diabetes, hypertension, or sleep apnea.",
          "Have struggled to lose weight with diet, exercise, or medication.",
          "Want a permanent, surgical solution to obesity.",
          "Are committed to lifestyle changes and follow-up care after surgery.",
        ],
        subtitle: "What Is Gastric Sleeve Surgery?",
        footer:
          "The stomach is reduced to a narrow 'sleeve' shape using laparoscopic (keyhole) surgery. About 70–80% of the stomach is removed, including the part that produces ghrelin (hunger hormone), helping to naturally reduce appetite. Digestion remains normal with smaller portions, making it one of the most effective bariatric surgeries worldwide.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Approach",
        content:
          "Specialist bariatric surgeons in accredited hospitals with multidisciplinary care for maximum safety and long-term success.",
        subtitle: "Recovery in Istanbul (7-8 Days)",
        image: getTreatmentDetailImage("gastric-sleeve", "process"),
        processSteps: [
          {
            title: "Safety First",
            description:
              "Comprehensive approach ensuring maximum safety and optimal outcomes with experienced specialists and accredited facilities.",
          },
          {
            title: "Surgical Details & Care",
            description:
              "Advanced laparoscopic technique with complete multidisciplinary support.",
            benefits: [
              "Surgery performed by experienced bariatric surgeons.",
              "Accredited hospital with intensive care availability.",
              "Multidisciplinary care: surgery, nutrition, and follow-up support.",
              "Laparoscopic (keyhole) surgery.",
              "Duration: 1–2 hours.",
              "2–3 nights in hospital.",
              "General anesthesia with full monitoring.",
            ],
          },
        ],
        timeline: [
          {
            stage: "Surgery & Hospital Stay",
            timeframe: "Days 1-3",
            description:
              "1-2 hour laparoscopic procedure followed by 2-3 nights hospital monitoring with specialist care.",
            icon: "🏥",
          },
          {
            stage: "Hotel Recovery",
            timeframe: "Days 4-7",
            description:
              "Gradual diet progression from liquids to soft foods with walking encouraged for optimal healing.",
            icon: "🏨",
          },
          {
            stage: "Follow-up & Education",
            timeframe: "Day 8",
            description:
              "Final assessment, nutritional guidance, and long-term lifestyle plan before travel clearance.",
            icon: "📚",
          },
          {
            stage: "Long-term Success",
            timeframe: "Ongoing",
            description:
              "Lifelong commitment to diet, supplements, and follow-up checks for sustained results.",
            icon: "✅",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "Before and after comparison showing significant weight loss, improved health markers, and enhanced quality of life with better mobility and energy.",
        content:
          "Rapid weight loss with improved health outcomes and better quality of life through proven bariatric surgery.",
        image: getTreatmentDetailImage("gastric-sleeve", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("gastric-sleeve", "before"),
          after: getTreatmentDetailImage("gastric-sleeve", "after"),
        },
        benefits: [
          {
            title: "Significant Weight Loss",
            description:
              "Rapid weight loss with most patients losing 60–70% of excess weight within 12–18 months. Long-term results are durable with proper lifestyle.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Improved Health",
            description:
              "Often improves or resolves diabetes, hypertension, and sleep apnea. Significant reduction in obesity-related health risks and complications.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Better Quality of Life",
            description:
              "Easier mobility, higher energy levels, and improved self-image. Enhanced daily functioning and overall life satisfaction.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Proven, Safe, Life-Changing",
        content:
          "Gastric sleeve surgery is a proven, safe way to achieve long-term weight loss and better health. Our comprehensive approach includes full support before and after your procedure for lasting success.",
        image: getTreatmentDetailImage("gastric-sleeve", "section", 3),
      },
    ],
    faq: [
      {
        question: "How much weight will I lose?",
        answer:
          "On average, patients lose 60–70% of excess weight in the first 12–18 months.",
      },
      {
        question: "Is gastric sleeve safe?",
        answer:
          "Yes. It is one of the most common bariatric surgeries worldwide. Risks exist, as with any surgery, but serious complications are rare when performed by specialists in accredited hospitals.",
      },
      {
        question: "Will I gain the weight back?",
        answer:
          "Not if you follow the lifestyle plan. Long-term success depends on diet, exercise, and follow-up.",
      },
      {
        question: "Can I eat normally afterward?",
        answer:
          "Yes — digestion remains normal, but portion sizes are smaller. Patients follow a structured diet plan for recovery.",
      },
      {
        question: "Will I need vitamin supplements?",
        answer:
          "Yes. Vitamin and mineral supplementation is recommended long-term to prevent deficiencies.",
      },
      {
        question: "How long before I can travel back home?",
        answer: "Most patients can safely return after 7–8 days in Istanbul.",
      },
      {
        question: "Is gastric sleeve reversible?",
        answer: "No. It is a permanent procedure.",
      },
      {
        question: "What if I have very severe obesity?",
        answer:
          "For very high BMIs, other options like gastric bypass may also be considered.",
      },
    ],
    cta: {
      headline: "A Smaller Stomach. A Healthier Future.",
      subheadline:
        "Gastric sleeve surgery is a proven, safe way to achieve long-term weight loss and better health — with full support before and after your procedure.",
      buttonText: "Get My Free Quote & Treatment Plan",
    },
  };

  const gastricBypassContent = {
    pageTitle:
      "Gastric Bypass in Istanbul | Effective Weight Loss and Health Improvement",
    hero: {
      visual:
        "A confident person showing dramatic weight loss results with improved metabolic health, mobility, and overall vitality after successful gastric bypass surgery.",
      headline:
        "Gastric Bypass Surgery in Istanbul — Proven Results for Weight Loss and Metabolic Health",
      subheadline:
        "Gastric bypass (Roux-en-Y) is a well-established bariatric procedure that reduces stomach size and reroutes digestion. It limits food intake, decreases calorie absorption, and improves metabolic conditions like type 2 diabetes. At Saray Estetica, it is performed by specialist bariatric surgeons in accredited hospitals with full safety protocols.",
      image: getTreatmentDetailImage("gastric-bypass", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Who Is It For?",
        content: `Gastric bypass may be recommended if you:`,
        image: getTreatmentDetailImage("gastric-bypass", "candidacy"),
        checklist: [
          "Have a BMI over 40, or BMI over 35 with health conditions like diabetes, hypertension, or sleep apnea.",
          "Have severe metabolic issues (e.g., type 2 diabetes) that would benefit from bypass.",
          "Have not succeeded with diet, exercise, or medications.",
          "Require a more powerful procedure than a gastric sleeve.",
        ],
        subtitle: "What Is Gastric Bypass?",
        footer:
          "A small stomach pouch is created, reducing stomach volume to about 30 ml. The small intestine is rerouted, so food bypasses part of the stomach and upper intestine. This combination reduces calorie absorption and appetite while having powerful metabolic effects, often improving type 2 diabetes rapidly.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Approach",
        content:
          "Advanced laparoscopic gastric bypass with specialist bariatric surgeons and full multidisciplinary support for maximum safety and metabolic benefits.",
        subtitle: "Recovery in Istanbul (8-9 Days)",
        image: getTreatmentDetailImage("gastric-bypass", "process"),
        processSteps: [
          {
            title: "Safety & Expertise",
            description:
              "Comprehensive bariatric surgery approach with experienced specialists ensuring maximum safety and optimal metabolic outcomes.",
          },
          {
            title: "Advanced Surgical Technique & Support",
            description:
              "Laparoscopic Roux-en-Y procedure with complete multidisciplinary care team.",
            benefits: [
              "Surgery performed laparoscopically (keyhole).",
              "General anesthesia, duration 2–3 hours.",
              "3–4 nights in hospital for monitoring.",
              "Full multidisciplinary support: surgeon, anesthesiologist, nutritionist, and aftercare team.",
              "More effective for diabetes and metabolic syndrome.",
              "Stronger long-term weight loss compared to gastric sleeve in some patients.",
              "Reduced hunger due to hormonal effects.",
            ],
          },
        ],
        timeline: [
          {
            stage: "Surgery & Extended Hospital Stay",
            timeframe: "Days 1-4",
            description:
              "2-3 hour laparoscopic Roux-en-Y procedure followed by 3-4 nights hospital monitoring with specialist care.",
            icon: "🏥",
          },
          {
            stage: "Hotel Recovery",
            timeframe: "Days 5-8",
            description:
              "Gradual diet progression from liquids to soft foods with walking encouraged for optimal healing and metabolic adjustment.",
            icon: "🏨",
          },
          {
            stage: "Follow-up & Metabolic Education",
            timeframe: "Day 9",
            description:
              "Final assessment, comprehensive nutritional guidance, and lifelong supplement plan before travel clearance.",
            icon: "📚",
          },
          {
            stage: "Long-term Metabolic Success",
            timeframe: "Ongoing",
            description:
              "Lifelong commitment to supplements, diet, and follow-up for sustained weight loss and metabolic health.",
            icon: "✅",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "Before and after comparison showing significant weight loss, dramatic improvement in diabetes and metabolic health, enhanced mobility and energy levels.",
        content:
          "Significant weight loss with powerful metabolic improvements and better quality of life through proven Roux-en-Y gastric bypass.",
        image: getTreatmentDetailImage("gastric-bypass", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("gastric-bypass", "before"),
          after: getTreatmentDetailImage("gastric-bypass", "after"),
        },
        benefits: [
          {
            title: "Superior Weight Loss",
            description:
              "Significant weight loss with patients typically losing 65–80% of excess weight within 12–18 months. Durable results when combined with healthy lifestyle.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Metabolic Health Improvement",
            description:
              "Type 2 diabetes often improves immediately, along with hypertension, sleep apnea, and joint pain. Powerful metabolic effects beyond weight loss.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Enhanced Quality of Life",
            description:
              "Improved mobility, higher energy levels, and increased confidence. Better daily functioning and overall life satisfaction with lasting results.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Proven Effectiveness, Metabolic Benefits",
        content:
          "Gastric bypass surgery is one of the most effective options for long-term weight loss and metabolic health. Our experienced specialists perform this life-changing procedure safely in Istanbul with comprehensive support.",
        image: getTreatmentDetailImage("gastric-bypass", "section", 0),
      },
    ],
    faq: [
      {
        question: "How is gastric bypass different from gastric sleeve?",
        answer:
          "Gastric sleeve only reduces stomach size. Gastric bypass reduces stomach size and reroutes the intestine, reducing absorption and having stronger metabolic effects.",
      },
      {
        question: "How much weight will I lose?",
        answer:
          "Most patients lose 65–80% of excess weight within 12–18 months.",
      },
      {
        question: "Is gastric bypass safe?",
        answer:
          "Yes, when performed by experienced bariatric surgeons. As with any surgery, risks exist, but bypass is considered safe and effective worldwide.",
      },
      {
        question: "Can I regain weight after bypass?",
        answer:
          "If diet and lifestyle changes are not followed, some weight regain is possible. With proper follow-up, results are long-term.",
      },
      {
        question: "Will I need vitamins?",
        answer:
          "Yes. Because absorption is reduced, patients need lifelong vitamin and mineral supplementation.",
      },
      {
        question: "How long until I can travel home?",
        answer:
          "Most patients are cleared to travel after 8–9 days in Istanbul.",
      },
      {
        question: "Is gastric bypass reversible?",
        answer:
          "Technically yes, but reversal is complex and rarely performed. It is considered a permanent procedure.",
      },
      {
        question: "Can gastric bypass cure diabetes?",
        answer:
          "It often leads to rapid improvement or even remission of type 2 diabetes.",
      },
    ],
    cta: {
      headline: "Stronger Weight Loss. Improved Health. Proven Results.",
      subheadline:
        "Gastric bypass surgery is one of the most effective options for long-term weight loss and metabolic health, performed safely in Istanbul by experienced specialists.",
      buttonText: "Get My Free Quote & Treatment Plan",
    },
  };

  const gastricBalloonContent = {
    pageTitle:
      "Gastric Balloon in Istanbul | Non-Surgical Weight Loss Treatment",
    hero: {
      visual:
        "A confident person showing moderate weight loss results with improved health and wellbeing after successful gastric balloon treatment, emphasizing the non-surgical approach.",
      headline:
        "Gastric Balloon in Istanbul — A Non-Surgical Approach to Weight Loss",
      subheadline:
        "The gastric balloon is a temporary, minimally invasive treatment for obesity. A soft silicone balloon is placed in the stomach and filled with saline, creating a feeling of fullness and helping you eat less. No surgery, no scars — just a safe, reversible option for moderate weight loss.",
      image: getTreatmentDetailImage("gastric-balloon", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Who Is It For?",
        content: `The gastric balloon may be recommended if you:`,
        image: getTreatmentDetailImage("gastric-balloon", "candidacy"),
        checklist: [
          "Have a BMI between 27–35 (overweight to moderately obese).",
          "Want to lose 10–25 kg without surgery.",
          "Are not eligible or not ready for bariatric surgery.",
          "Need to lose weight before a major operation (e.g., heart or orthopedic surgery).",
        ],
        subtitle: "What Is a Gastric Balloon?",
        footer:
          "A deflated silicone balloon is inserted into the stomach through the mouth using an endoscope (no incisions, no surgery). The balloon is filled with saline solution to occupy space in the stomach, reducing how much you can eat and slowing gastric emptying. The balloon is temporary and usually removed after 6–12 months. Not suitable for patients with very high BMI who benefit more from Sleeve or Bypass.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Approach",
        content:
          "Non-surgical endoscopic procedure with comprehensive support program and professional follow-up care for optimal weight loss results.",
        subtitle: "Recovery in Istanbul (2-3 Days)",
        image: getTreatmentDetailImage("gastric-balloon", "process"),
        processSteps: [
          {
            title: "Procedure Details",
            description:
              "Minimally invasive endoscopic procedure with no incisions or surgical intervention required.",
          },
          {
            title: "Non-Surgical Approach & Support",
            description:
              "Complete non-surgical weight loss solution with comprehensive follow-up care.",
            benefits: [
              "Done under mild sedation.",
              "Duration: 20–30 minutes.",
              "Outpatient — you return to your hotel the same day.",
              "No incisions, no hospital stay required.",
              "Full nutritional guidance and follow-up from our team.",
              "Support program during the 6–12 months while the balloon is in place.",
              "Removal of the balloon is performed endoscopically in a short outpatient procedure.",
            ],
          },
        ],
        timeline: [
          {
            stage: "Balloon Placement",
            timeframe: "Day 1",
            description:
              "20-30 minute endoscopic procedure under mild sedation with same-day hotel return.",
            icon: "🎈",
          },
          {
            stage: "Initial Adjustment",
            timeframe: "Days 2-3",
            description:
              "Monitoring for initial comfort and adjustment with medication support for any mild discomfort.",
            icon: "🏨",
          },
          {
            stage: "Return Home",
            timeframe: "Day 3",
            description:
              "Final assessment and clearance to travel with comprehensive support program guidance.",
            icon: "✈️",
          },
          {
            stage: "6-12 Month Program",
            timeframe: "Ongoing",
            description:
              "Continuous support and monitoring until balloon removal with lifestyle change development.",
            icon: "📅",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "Before and after comparison showing moderate weight loss (10-25kg), improved health markers, and successful habit formation without surgical intervention.",
        content:
          "Moderate weight loss with improved health markers and better eating habits through safe, reversible non-surgical treatment.",
        image: getTreatmentDetailImage("gastric-balloon", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("gastric-balloon", "before"),
          after: getTreatmentDetailImage("gastric-balloon", "after"),
        },
        benefits: [
          {
            title: "Moderate Weight Loss",
            description:
              "Weight loss of 10–25 kg on average, depending on lifestyle. Temporary tool that helps patients adopt better eating habits for long-term success.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Improved Health Markers",
            description:
              "Often improves blood pressure, cholesterol, and blood sugar levels. Significant health benefits without permanent surgical changes.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Non-Permanent & Reversible",
            description:
              "No permanent changes — stomach returns to normal after balloon removal. Safe, reversible option for those not ready for surgery.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Safe, Reversible, Effective",
        content:
          "The gastric balloon is a temporary, safe way to lose significant weight without surgery — ideal for patients seeking a reversible option. Perfect for moderate weight loss with professional support and monitoring.",
        image: getTreatmentDetailImage("gastric-balloon", "section", 3),
      },
    ],
    faq: [
      {
        question: "Is the gastric balloon surgery?",
        answer:
          "No. It is a non-surgical, endoscopic procedure with no incisions.",
      },
      {
        question: "How long does the balloon stay in place?",
        answer: "Typically 6–12 months, depending on the type of balloon used.",
      },
      {
        question: "How much weight will I lose?",
        answer:
          "Most patients lose 10–25 kg during treatment, but results depend on lifestyle changes.",
      },
      {
        question: "Will I gain the weight back after removal?",
        answer:
          "If you return to old habits, yes. The balloon is a tool to help you change your eating behavior long-term.",
      },
      {
        question: "Is it painful?",
        answer:
          "The procedure itself is not painful. Temporary nausea, bloating, or cramps are common in the first few days.",
      },
      {
        question: "What happens if I cannot tolerate the balloon?",
        answer:
          "In rare cases of intolerance, the balloon can be removed early.",
      },
      {
        question: "Can the balloon burst or leak?",
        answer:
          "Modern balloons are safe. If leakage occurs (rare), it is detected by a color change in urine, and the balloon is removed.",
      },
      {
        question: "How long do I need to stay in Istanbul?",
        answer: "2–3 days for placement and early monitoring.",
      },
    ],
    cta: {
      headline: "A Non-Surgical Tool to Kickstart Weight Loss.",
      subheadline:
        "The gastric balloon is a temporary, safe way to lose significant weight without surgery — ideal for patients seeking a reversible option.",
      buttonText: "Get My Free Quote & Treatment Plan",
    },
  };

  const armLiftContent = {
    pageTitle: "Arm Lift in Istanbul | Brachioplasty for Firmer, Toned Arms",
    hero: {
      visual:
        "A confident person showing toned, firm upper arms with smooth contours and improved proportions after successful arm lift surgery.",
      headline:
        "Arm Lift Surgery in Istanbul — Remove Excess Skin, Restore Confidence",
      subheadline:
        "An arm lift (brachioplasty) removes sagging skin and fat from the upper arms, creating a smoother, firmer contour. It is especially effective after weight loss or aging, when skin elasticity is reduced.",
      image: getTreatmentDetailImage("arm-lift", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Who Is It For?",
        content: `An arm lift may be suitable if you:`,
        image: getTreatmentDetailImage("arm-lift", "candidacy"),
        checklist: [
          'Have "bat wings" — sagging skin hanging from the upper arms.',
          "Lost significant weight and now have loose, stretched skin.",
          "Feel your arms look out of proportion with the rest of your body.",
        ],
        subtitle: "What Is an Arm Lift?",
        footer:
          "Excess skin and fat are removed from the upper arms. The remaining tissue is tightened for a firmer, more defined shape. Can be combined with liposuction for optimal results, creating smoother, more proportionate arm contours.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Approach",
        content:
          "Surgical contouring technique for firmer, more defined arm shape with optimal scar placement and recovery management.",
        subtitle: "Recovery in Istanbul (7 Days)",
        image: getTreatmentDetailImage("arm-lift", "process"),
        processSteps: [
          {
            title: "Surgical Details",
            description:
              "Comprehensive arm contouring approach with careful incision placement for optimal results and minimal visible scarring.",
          },
          {
            title: "Advanced Brachioplasty Technique",
            description:
              "Precise surgical technique for firmer, more defined arm contours.",
            benefits: [
              "Performed under general anesthesia.",
              "Incision placed along the inner arm, from armpit to elbow (hidden as much as possible).",
              "Duration: 2–3 hours.",
              "1-night hospital stay.",
              "Can be combined with liposuction for optimal results.",
            ],
          },
        ],
        timeline: [
          {
            stage: "Surgery & Hospital Stay",
            timeframe: "Days 1-2",
            description:
              "2-3 hour brachioplasty procedure followed by 1-night hospital monitoring for optimal healing.",
            icon: "🏥",
          },
          {
            stage: "Hotel Recovery",
            timeframe: "Days 3-7",
            description:
              "Rest with compression garment and gradual arm movement increase as healing progresses.",
            icon: "🏨",
          },
          {
            stage: "Follow-up Assessment",
            timeframe: "Day 7",
            description:
              "Final assessment and recovery guidance before travel clearance.",
            icon: "✅",
          },
          {
            stage: "Full Recovery",
            timeframe: "6 weeks",
            description:
              "Complete healing with full range of motion and exercise clearance.",
            icon: "💪",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "Before and after comparison showing firmer, slimmer upper arms with improved proportions, better clothing fit, and enhanced confidence.",
        content:
          "Firmer, slimmer upper arms with improved proportions and lasting confidence in clothing choices.",
        image: getTreatmentDetailImage("arm-lift", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("arm-lift", "before"),
          after: getTreatmentDetailImage("arm-lift", "after"),
        },
        benefits: [
          {
            title: "Firmer Arm Contours",
            description:
              "Firmer, slimmer upper arms with improved definition. Long-lasting results with stable weight and better overall body proportions.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Better Clothing Fit",
            description:
              "Clothing fits better with short sleeves worn without self-consciousness. Enhanced comfort and confidence in various clothing styles.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Lasting Transformation",
            description:
              "Long-lasting results with stable weight. Scars fade over time but may remain slightly visible on inner arms with proper care.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Enhanced Proportions, Renewed Confidence",
        content:
          "An arm lift removes sagging skin and restores firmer contours, especially effective after weight loss. Our surgical approach provides lasting transformation with careful attention to scar placement and recovery.",
        image: getTreatmentDetailImage("arm-lift", "section", 3),
      },
    ],
    faq: [
      {
        question: "Where will the scars be?",
        answer:
          "On the inner arm, from armpit to elbow. They fade but will not disappear completely.",
      },
      {
        question: "Can I combine it with liposuction?",
        answer: "Yes. Often liposuction is combined to improve contour.",
      },
      {
        question: "How painful is recovery?",
        answer:
          "Mild to moderate soreness, managed with pain relief. Tightness when lifting arms is common early on.",
      },
      {
        question: "How long before I can raise my arms normally?",
        answer:
          "After 2–3 weeks, movement is more comfortable. Full range of motion returns after 6 weeks.",
      },
      {
        question: "Is it permanent?",
        answer:
          "Yes, but aging and weight fluctuations can affect results over time.",
      },
      {
        question: "How long do I stay in Istanbul?",
        answer: "7 days recommended.",
      },
    ],
    cta: {
      headline: "Slimmer Arms, Lasting Confidence.",
      subheadline:
        "An arm lift removes sagging skin and restores firmer contours, especially after weight loss.",
      buttonText: "Get My Free Quote & Treatment Plan",
    },
  };

  const thighLiftContent = {
    pageTitle: "Thigh Lift in Istanbul | Reshape and Tighten the Thighs",
    hero: {
      visual:
        "A confident person showing tighter, firmer thighs with improved lower body proportions and smoother contours after successful thigh lift surgery.",
      headline:
        "Thigh Lift Surgery in Istanbul — A Firmer, Smoother Lower Body",
      subheadline:
        "A thigh lift (thighplasty) removes loose skin and excess fat from the inner or outer thighs. The procedure restores tighter, more proportionate contours, especially after weight loss or aging.",
      image: getTreatmentDetailImage("thigh-lift", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Who Is It For?",
        content: `You may consider a thigh lift if you:`,
        image:
          "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        checklist: [
          "Have loose, sagging skin on the thighs after weight loss.",
          "Experience rubbing, chafing, or skin irritation.",
          "Want firmer, better-proportioned thighs.",
        ],
        subtitle: "What Is a Thigh Lift?",
        footer:
          "Removes sagging skin from the thighs and tightens and smooths remaining tissue. Can be combined with liposuction for additional contouring, creating firmer, more proportionate lower body contours.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Approach",
        content:
          "Advanced thighplasty technique for tighter, more proportionate lower body contours with strategic incision placement and optimal recovery management.",
        subtitle: "Recovery in Istanbul (7-8 Days)",
        image:
          "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop",
        processSteps: [
          {
            title: "Surgical Details",
            description:
              "Comprehensive thigh contouring approach with strategic incision placement for optimal results and discreet scarring.",
          },
          {
            title: "Advanced Thighplasty Technique",
            description:
              "Precise surgical technique for firmer, more proportionate thigh contours.",
            benefits: [
              "Performed under general anesthesia.",
              "Incisions placed in the groin crease, along inner thigh, or extending down toward the knee (depending on skin laxity).",
              "Duration: 2–3 hours.",
              "1–2 nights hospital stay.",
              "Can be combined with liposuction for additional contouring.",
            ],
          },
        ],
        timeline: [
          {
            stage: "Surgery & Hospital Stay",
            timeframe: "Days 1-2",
            description:
              "2-3 hour thighplasty procedure followed by 1-2 nights hospital monitoring for optimal healing.",
            icon: "🏥",
          },
          {
            stage: "Hotel Recovery",
            timeframe: "Days 3-7",
            description:
              "Rest with compression garment and gentle walking encouraged while avoiding strain.",
            icon: "🏨",
          },
          {
            stage: "Follow-up Assessment",
            timeframe: "Day 8",
            description:
              "Final assessment and recovery guidance before travel clearance.",
            icon: "✅",
          },
          {
            stage: "Full Recovery",
            timeframe: "6 weeks",
            description:
              "Complete healing with full exercise clearance and final contour results.",
            icon: "💪",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "Before and after comparison showing tighter, firmer thighs with improved lower body proportions, better mobility, and smoother contours.",
        content:
          "Tighter, firmer thighs with improved mobility and smoother lower body contours for lasting comfort and confidence.",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        beforeAfter: {
          before:
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
          after:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        },
        benefits: [
          {
            title: "Tighter, Firmer Thighs",
            description:
              "Tighter, firmer thighs with improved definition. Long-lasting results with stable weight and better overall lower body proportions.",
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Better Mobility & Comfort",
            description:
              "Better mobility and less chafing from skin rubbing. Enhanced comfort during daily activities and physical movement.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Improved Body Proportion",
            description:
              "Improved body proportion and smoother lower-body contour. Long-lasting results with proper weight maintenance and healthy lifestyle.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Enhanced Proportion, Restored Comfort",
        content:
          "A thigh lift restores proportion, mobility, and smoother contours for the lower body. Our surgical approach provides lasting transformation with strategic incision placement for optimal results and recovery.",
        image:
          "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop",
      },
    ],
    faq: [
      {
        question: "Where are the scars?",
        answer:
          "Usually hidden in the groin crease. For larger lifts, scars may extend along the inner thigh.",
      },
      {
        question: "Will I lose weight with a thigh lift?",
        answer: "No — this is a contouring procedure, not weight loss surgery.",
      },
      {
        question: "How painful is recovery?",
        answer:
          "Moderate soreness and tightness are expected, especially when walking. Pain is managed with medication.",
      },
      {
        question: "How long until I can walk comfortably?",
        answer:
          "Most patients walk gently after a few days, with more comfort after 2 weeks.",
      },
      {
        question: "Is it permanent?",
        answer:
          "Yes, but aging and weight changes may affect results over time.",
      },
      {
        question: "How long do I need to stay in Istanbul?",
        answer: "7–8 days recommended.",
      },
    ],
    cta: {
      headline: "Shaped Thighs, Improved Comfort.",
      subheadline:
        "A thigh lift restores proportion, mobility, and smoother contours for the lower body.",
      buttonText: "Get My Free Quote & Treatment Plan",
    },
  };

  const eyebrowLiftContent = {
    pageTitle: "Eyebrow Lift in Istanbul | Open & Youthful Eyes",
    hero: {
      visual:
        'A woman in her 40s smiling gently, with naturally arched brows and bright, open eyes. The look should be refreshed, not "pulled."',
      headline: "Lift, Don't Stretch — A Natural Way to Brighten the Eyes.",
      subheadline:
        "An eyebrow lift restores a fresher, more awake look by gently repositioning the brows and smoothing forehead lines. At Saray Estetica, we use modern techniques to enhance your natural expressions — never to freeze or distort them.",
      image: getTreatmentDetailImage("eyebrow-lift", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "Is an Eyebrow Lift Right for You?",
        content: `Over time, the brows can drop, creating heaviness around the eyes and making you look tired or stern — even if you feel energetic inside. You may consider a brow lift if you:`,
        image: getTreatmentDetailImage("eyebrow-lift", "candidacy"),
        checklist: [
          "Notice sagging or drooping of the outer brows.",
          'Feel your eyes look tired, hooded, or "closed off."',
          "Have deep forehead creases or frown lines.",
          "Are seeking a longer-lasting solution than Botox.",
        ],
        footer:
          "The goal isn't to give you \"high arched\" brows — it's to bring them back to their natural, youthful position.",
      },
      {
        id: "process",
        headline: "The Saray Estetica Approach",
        content:
          "Our endoscopic technique provides natural-looking results with minimal scarring and optimal recovery.",
        subtitle: "Recovery in Istanbul (5-7 Days)",
        image: getTreatmentDetailImage("eyebrow-lift", "process"),
        processSteps: [
          {
            title: "Step 1: Consultation",
            description:
              "We assess your forehead, brow position, eyelids, and overall facial harmony. Sometimes, a brow lift is combined with eyelid surgery for the best outcome.",
          },
          {
            title: "Step 2: The Procedure",
            description:
              "Modern endoscopic technique for natural, lasting results.",
            benefits: [
              "Performed under sedation or general anesthesia.",
              "Tiny incisions hidden in the hairline (endoscopic approach) or just above the brow (in selected cases).",
              "The muscles are gently adjusted, and the brows are lifted into a natural position.",
              "Procedure time: about 1–2 hours.",
            ],
          },
        ],
        timeline: [
          {
            stage: "Arrival + Consultation",
            timeframe: "Day 1",
            description:
              "Comprehensive assessment and surgical planning with your specialist.",
            icon: "🛬",
          },
          {
            stage: "Surgery (Outpatient)",
            timeframe: "Day 2",
            description:
              "1-2 hour procedure using endoscopic technique for natural results.",
            icon: "⚡",
          },
          {
            stage: "Recovery & Healing",
            timeframe: "Days 3-6",
            description:
              "Mild swelling and bruising; rest with support from your coordinator.",
            icon: "🏨",
          },
          {
            stage: "Final Check-up",
            timeframe: "Day 7",
            description:
              "Assessment of healing progress. Most patients cleared to travel.",
            icon: "✅",
          },
        ],
      },
      {
        id: "benefits",
        headline: "Results You Can Expect",
        visual:
          "Before and after comparison showing more open, youthful eyes with naturally positioned brows and smoother forehead.",
        content:
          "Natural enhancement that brightens your face while preserving your unique expressions.",
        image: getTreatmentDetailImage("eyebrow-lift", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("eyebrow-lift", "before"),
          after: getTreatmentDetailImage("eyebrow-lift", "after"),
        },
        benefits: [
          {
            title: "More Open, Youthful Eyes",
            description:
              'Natural enhancement without changing your expression. No "surprised look" — our surgeons focus on subtle repositioning for a refreshed appearance.',
            icon: <Star className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Smoother Forehead",
            description:
              "Softer frown lines and reduced forehead creases. The endoscopic technique provides natural muscle adjustment for lasting smoothness.",
            icon: <Heart className="w-8 h-8 text-primary-500" />,
          },
          {
            title: "Long-lasting Results",
            description:
              "Results typically hold for 7–10 years with invisible scars hidden in the hairline. Natural aging continues but from a more youthful baseline.",
            icon: <Shield className="w-8 h-8 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "Our Commitment to Natural Balance",
        content:
          "A brow lift requires balance. Lift too little, and the tired look remains. Lift too much, and the patient looks unnatural. Our surgeons specialize in precise, natural correction that brightens your face while keeping your identity intact.",
        image:
          "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop",
      },
    ],
    faq: [
      {
        question: "How do I know if I need a brow lift or just Botox?",
        answer:
          "Botox can smooth lines temporarily, but if the brow position itself has dropped, only a surgical lift can restore it. Many patients try Botox first; when it no longer gives enough effect, a brow lift becomes the solution.",
      },
      {
        question: 'Will I look "surprised" or frozen?',
        answer:
          "No. Our endoscopic technique repositions the brows naturally. The goal is freshness, not exaggeration.",
      },
      {
        question: "How long do results last?",
        answer:
          "On average, 7–10 years. You'll continue to age naturally, but your brow position will stay more youthful than before.",
      },
      {
        question: "How painful is recovery?",
        answer:
          'Mild discomfort, swelling, and bruising around the forehead and eyes are common in the first week. Most patients describe it as "tightness" rather than pain.',
      },
      {
        question: "Will there be scars?",
        answer:
          "Incisions are hidden in the hairline. With proper healing, they're nearly invisible.",
      },
      {
        question: "How long should I stay in Istanbul?",
        answer: "Plan for 5–7 days for surgery and follow-up.",
      },
      {
        question: "Can I combine a brow lift with other procedures?",
        answer:
          "Yes — commonly with eyelid surgery or facelift, to refresh the upper and lower face together.",
      },
      {
        question: "How much does it cost?",
        answer:
          "We provide one clear, all-inclusive quote covering surgery, hospital/clinic care, hotel, and private transfers. No hidden costs.",
      },
    ],
    cta: {
      headline: "Bright, Rested Eyes Start Here.",
      subheadline:
        "Your eyes are the first thing people notice. Let's bring back their natural openness with a procedure tailored to you.",
      buttonText: "Get My Free Quote & Treatment Plan",
    },
  };

  const beardTransplantContent = {
    pageTitle: "Beard Transplant in Istanbul | A Fuller, Defined Look",
    hero: {
      visual:
        "A high-quality, professional portrait of a confident man with a well-defined, full, and natural-looking beard, styled neatly.",
      headline: "Define Your Look. Frame Your Face.",
      subheadline:
        "A full, well-defined beard is a powerful symbol of style and confidence. Discover how our artistic approach to beard transplantation can create the dense, natural, and permanent result you've been looking for.",
      image: getTreatmentDetailImage("beard-transplant", "hero"),
    },
    sections: [
      {
        id: "candidacy",
        headline: "The First Step: Your Goals for a Fuller Beard",
        content:
          "For many men, genetics, scarring, or simple patchiness can make growing a full beard a frustrating challenge. A beard transplant is a precise, permanent solution designed to address these common concerns. You are likely a strong candidate for this journey if you wish to:",
        image: getTreatmentDetailImage("beard-transplant", "candidacy"),
        checklist: [
          "Fill in Patchy Areas: To achieve consistent, even growth across your cheeks and jawline.",
          "Increase Overall Density: To transform a thin or sparse beard into one that is thick and full.",
          "Create a More Defined Shape: To sculpt a specific style, like a stronger jawline, a fuller goatee, or a connected mustache.",
          "Conceal Scars: To effectively cover scars from acne, injuries, or previous procedures with natural hair growth.",
          "Gain a Low-Maintenance, Permanent Solution: To stop worrying about temporary fixes and enjoy a beard you can shave, trim, and style just like natural hair.",
        ],
        footer:
          "The journey begins with a simple, no-obligation consultation where we can assess your goals and confirm if a beard transplant is the best way to achieve the look you desire.",
      },
      {
        id: "process",
        headline: "Your Journey to a Defined Beard, Simplified.",
        content:
          "A successful beard transplant is a delicate blend of technical precision and artistic skill. Our process is designed to be clear, comfortable, and focused on creating a result that looks completely natural.",
        subtitle: "A Look at Your Stay (Total 4-5 Days in Istanbul)",
        image: getTreatmentDetailImage("beard-transplant", "process"),
        processSteps: [
          {
            title: "Part 1: The Consultation & The Artistic Design",
            description:
              "Your journey starts with designing your ideal beard. In your consultation, you and the specialist will discuss the exact shape, density, and style you want to achieve. We take into account your unique facial structure to design a beard that looks masculine, natural, and perfectly suited to you.",
          },
          {
            title: "Part 2: The FUE Procedure",
            description:
              "We use the advanced FUE (Follicular Unit Extraction) technique. Individual hair follicles are carefully extracted from a donor area at the back of your scalp, chosen for its resilience. These follicles are then meticulously implanted one by one into the beard region by the specialist, paying close attention to the precise angle and direction of growth to mimic a natural beard pattern. The procedure is performed under local anesthesia for your comfort.",
          },
        ],
        timeline: [
          {
            stage: "Arrival & Consultation",
            timeframe: "Day 1",
            description:
              "Your private driver greets you. You'll have your final, in-person design consultation with your specialist.",
          },
          {
            stage: "Procedure Day",
            timeframe: "Day 2",
            description:
              "Your procedure is performed in the morning. You will return to your hotel to rest and begin the simple aftercare routine.",
          },
          {
            stage: "Rest & Recovery",
            timeframe: "Day 3-4",
            description:
              "You will rest in your hotel. Some minor redness and scabbing in the area is normal. Your coordinator will check in with you.",
          },
          {
            stage: "Final Check-up & Wash",
            timeframe: "Day 4",
            description:
              "You will visit the clinic for your first gentle wash and a final check-up with the specialist.",
          },
          {
            stage: "Departure",
            timeframe: "Day 5",
            description:
              "Once cleared by the team, your private driver will take you to the airport for your flight home.",
          },
        ],
      },
      {
        id: "results",
        headline: "The Art of a Natural, Undetectable Result",
        content:
          "The ultimate sign of an expert beard transplant is that it doesn't look like a transplant at all—it simply looks like a great beard.",
        image: getTreatmentDetailImage("beard-transplant", "benefits"),
        beforeAfter: {
          before: getTreatmentDetailImage("beard-transplant", "before"),
          after: getTreatmentDetailImage("beard-transplant", "after"),
        },
        benefits: [
          {
            title: "It Looks Completely Natural",
            description:
              "The artistry is in the details. By implanting each hair at the correct angle, we ensure your new beard grows in the right direction, blending seamlessly with any existing hair.",
            icon: <CheckCircle className="w-12 h-12 text-primary-500" />,
          },
          {
            title: "It's Dense and Well-Defined",
            description:
              "We strategically place grafts to build up density where you need it most, creating the full, strong beard shape you designed with your specialist.",
            icon: <Award className="w-12 h-12 text-primary-500" />,
          },
          {
            title: "It's Permanent and Low-Maintenance",
            description:
              "Once the transplanted hairs take root, they are there for life. You can shave, trim, and grow your new beard just as you would any other.",
            icon: <Shield className="w-12 h-12 text-primary-500" />,
          },
        ],
      },
      {
        id: "quality",
        headline: "The Foundation of a Great Result: Precision & Artistry",
        content:
          "A beard transplant is a procedure where artistry is paramount. The difference between a natural result and a poor one is the specialist's ability to replicate the subtle, unique patterns of facial hair growth. Our philosophy is grounded in this artistic precision. We partner with specialists who have a deep understanding of facial aesthetics and the meticulous skill required to place each graft perfectly, ensuring your result is masculine, authentic, and enhances your features.",
        image: getTreatmentDetailImage("beard-transplant", "section"),
      },
    ],
    faq: [
      {
        question: "Will my new beard look natural?",
        answer:
          "Yes. This is our primary focus. The FUE technique allows the specialist to control the exact angle, direction, and density of each implanted hair, which is the key to creating a result that is indistinguishable from a natural beard.",
      },
      {
        question: "Is the procedure painful?",
        answer:
          "The procedure is performed under local anesthesia, so you will not feel pain in either the donor or recipient areas. Most patients report only minor discomfort for a day or two afterward, which is easily managed.",
      },
      {
        question: "Where does the hair for the transplant come from?",
        answer:
          "The hair is typically taken from a discreet area on the back of your scalp. This hair is genetically resistant to thinning and is an excellent match for facial hair in texture and quality.",
      },
      {
        question: "When will I see the final results?",
        answer:
          "Be patient, as it's a gradual process. The transplanted hairs will shed after a few weeks (this is normal). New, permanent growth will begin in about 3-4 months, with more significant density appearing around 6 months. The final, full result will be visible after about 10-12 months.",
      },
      {
        question: "What is the recovery like?",
        answer:
          "Recovery is quick. You will see small scabs on the implanted follicles for about 7-10 days. There may be some initial redness. Most patients feel comfortable returning to work and normal activities within a few days.",
      },
      {
        question: "Can I shave or trim my new beard?",
        answer:
          "Absolutely. Once the initial healing period is over and the new hairs have grown in, you can treat your new beard exactly like the rest of your facial hair. You can shave it, trim it, or grow it long.",
      },
      {
        question: "How many grafts will I need?",
        answer:
          "This depends entirely on your goals—from filling in small patches to creating a full beard. During your free consultation, we will assess your needs and provide a clear recommendation for the number of grafts required to achieve your desired look.",
      },
      {
        question: "How much does a beard transplant cost?",
        answer:
          "We provide a clear, all-inclusive quote after your free consultation. The price includes your procedure with a specialist, your hotel stay, and all private transfers. There are no hidden fees.",
      },
    ],
    cta: {
      headline: "The First Step to the Beard You've Always Wanted",
      subheadline:
        "Your journey to a fuller, more confident look begins with a simple conversation. Let's talk about your vision and design your ideal beard, together.",
      buttonText: "Get My Free Quote & Beard Design Plan",
    },
  };

  const content = isDhiHairTransplant
    ? dhiHairTransplantContent
    : isSapphireFue
    ? sapphireFueContent
    : isHollywoodSmile
    ? hollywoodSmileContent
    : isDentalVeneers
    ? dentalVeneersContent
    : isDentalImplants
    ? dentalImplantsContent
    : isRhinoplasty
    ? rhinoplastyContent
    : isFacelift
    ? faceliftContent
    : isChinLiposuction
    ? chinLiposuctionContent
    : isLiposuction
    ? liposuctionContent
    : isTummyTuck
    ? tummyTuckContent
    : isMommyMakeover
    ? mommyMakeoverContent
    : isBBL
    ? bblContent
    : isBreastLift
    ? breastLiftContent
    : isBreastAugmentation
    ? breastAugmentationContent
    : isBreastReduction
    ? breastReductionContent
    : isGynecomastia
    ? gynecomastiaContent
    : isGastricSleeve
    ? gastricSleeveContent
    : isGastricBypass
    ? gastricBypassContent
    : isGastricBalloon
    ? gastricBalloonContent
    : isArmLift
    ? armLiftContent
    : isThighLift
    ? thighLiftContent
    : isEyebrowLift
    ? eyebrowLiftContent
    : isBeardTransplant
    ? beardTransplantContent
    : null;

  return (
    <>
      <SEOHead
        title={
          content?.pageTitle || `${treatment.title} - Saray Estetica Istanbul`
        }
        description={`${treatment.description} Professional ${treatment.title} treatment in Istanbul with transparent pricing and authentic patient results.`}
        keywords={`${treatment.title}, ${treatment.category}, Istanbul, aesthetic treatment, cosmetic surgery, medical tourism Turkey`}
        url={`https://sarayestetic.com/treatments/${treatment.id}`}
      />
      <Layout onNavigate={onNavigate}>
        <div className="bg-white">
          {/* SECTION 1: HERO */}
          <section className="relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={content?.hero.image || treatment.image}
                alt={treatment.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>

            <div className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
              <div className="container-custom">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="max-w-3xl px-4 sm:px-0"
                >
                  <motion.h1
                    variants={fadeIn}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                  >
                    {content?.hero.headline || treatment.title}
                  </motion.h1>

                  <motion.p
                    variants={fadeIn}
                    className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-6 sm:mb-8"
                  >
                    {content?.hero.subheadline || treatment.description}
                  </motion.p>

                  {/* Price and Duration Cards */}
                  <motion.div
                    variants={fadeIn}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
                  >
                    {treatment.price && (
                      <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20">
                        <div className="flex items-center text-white/80 mb-1 sm:mb-2">
                          <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary-300" />
                          <span className="font-medium text-sm sm:text-base">
                            Starting Price
                          </span>
                        </div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                          {treatment.price}
                        </div>
                      </div>
                    )}
                    {treatment.duration && (
                      <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20">
                        <div className="flex items-center text-white/80 mb-1 sm:mb-2">
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary-300" />
                          <span className="font-medium text-sm sm:text-base">
                            Duration
                          </span>
                        </div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                          {treatment.duration}
                        </div>
                      </div>
                    )}
                  </motion.div>

                  <motion.div variants={fadeIn} className="flex justify-start">
                    <Button
                      variant="primary"
                      size="md"
                      leftIcon={<Phone className="w-4 h-4 sm:w-5 sm:h-5" />}
                      className="bg-primary-500 hover:bg-primary-600 text-white shadow-xl text-sm sm:text-base"
                      onClick={() => {
                        // Navigate to home page and scroll to consultation form
                        if (onNavigate) {
                          onNavigate("/");
                          // Small delay to ensure navigation completes before scrolling
                          setTimeout(() => {
                            const formElement =
                              document.getElementById("consultation-form");
                            if (formElement) {
                              formElement.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                              });
                            }
                          }, 100);
                        }
                      }}
                    >
                      Book Free Consultation
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* SECTION 2: CANDIDACY (only for Hollywood Smile) */}
          {content?.sections[0] && (
            <section className="section-padding bg-gray-50">
              <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="px-4 sm:px-0"
                  >
                    <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                      {content.sections[0].headline}
                    </h2>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {content.sections[0].content}
                    </p>

                    <div className="space-y-4 mb-8">
                      {content.sections[0].checklist?.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-green-100"
                        >
                          <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          </div>
                          <span className="text-gray-700 text-lg leading-relaxed">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                      <p className="text-lg text-primary-700 leading-relaxed font-medium">
                        {content.sections[0].footer}
                      </p>
                    </div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="px-4 sm:px-0"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={content.sections[0].image}
                        alt="Smile consultation"
                        className="w-full h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          )}

          {/* SECTION 3: PROCESS (only for Hollywood Smile) */}
          {content?.sections[1] && (
            <section className="section-padding">
              <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="px-4 sm:px-0 order-2 lg:order-1"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={content.sections[1].image}
                        alt="Treatment process"
                        className="w-full h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="px-4 sm:px-0 order-1 lg:order-2"
                  >
                    <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                      {content.sections[1].headline}
                    </h2>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {content.sections[1].content}
                    </p>

                    <h3 className="text-2xl font-bold text-primary-600 mb-6">
                      {content.sections[1].subtitle}
                    </h3>

                    {/* Special rendering for process steps (DHI hair transplant, sapphire fue, dental implants, rhinoplasty, facelift, chin liposuction, liposuction, tummy tuck, mommy makeover, BBL, breast lift, breast augmentation, breast reduction, gynecomastia, gastric sleeve, gastric bypass, gastric balloon, arm lift, thigh lift, and eyebrow lift) */}
                    {(isDhiHairTransplant ||
                      isSapphireFue ||
                      isDentalImplants ||
                      isRhinoplasty ||
                      isFacelift ||
                      isChinLiposuction ||
                      isLiposuction ||
                      isTummyTuck ||
                      isMommyMakeover ||
                      isBBL ||
                      isBreastLift ||
                      isBreastAugmentation ||
                      isBreastReduction ||
                      isGynecomastia ||
                      isGastricSleeve ||
                      isGastricBypass ||
                      isGastricBalloon ||
                      isArmLift ||
                      isThighLift ||
                      isEyebrowLift) &&
                      (content.sections[1] as any).processSteps && (
                        <div className="space-y-6 mb-12">
                          {(content.sections[1] as any).processSteps.map(
                            (step: any, index: number) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                              >
                                <Card className="p-6">
                                  <h4 className="text-xl font-bold text-primary-600 mb-4">
                                    {step.title}
                                  </h4>
                                  <p className="text-gray-700 leading-relaxed mb-4">
                                    {step.description}
                                  </p>
                                  {step.benefits && (
                                    <div className="mt-4">
                                      <ul className="space-y-2">
                                        {step.benefits.map(
                                          (
                                            benefit: string,
                                            benefitIndex: number
                                          ) => (
                                            <li
                                              key={benefitIndex}
                                              className="flex items-start"
                                            >
                                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                              <span className="text-gray-700">
                                                {benefit}
                                              </span>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  )}
                                </Card>
                              </motion.div>
                            )
                          )}
                        </div>
                      )}

                    {/* Timeline section */}
                    <div className="space-y-6">
                      {(content.sections[1] as any).timeline?.map(
                        (step: any, index: number) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                          >
                            {isDhiHairTransplant ||
                            isSapphireFue ||
                            isRhinoplasty ||
                            isChinLiposuction ||
                            isLiposuction ||
                            isTummyTuck ||
                            isMommyMakeover ||
                            isBBL ||
                            isBreastLift ||
                            isBreastAugmentation ||
                            isBreastReduction ||
                            isGynecomastia ||
                            isGastricSleeve ||
                            isGastricBypass ||
                            isGastricBalloon ||
                            isArmLift ||
                            isThighLift ? (
                              /* Rhinoplasty timeline with table-like structure */
                              <Card className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                  <div className="flex items-center">
                                    <div className="bg-primary-100 rounded-full p-3 mr-4">
                                      <span className="text-2xl">
                                        {step.icon}
                                      </span>
                                    </div>
                                    <div>
                                      <h4 className="text-lg font-bold text-text-primary">
                                        {(step as any).stage}
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="text-center md:text-left">
                                    <div className="bg-primary-50 rounded-lg px-4 py-2 inline-block">
                                      <span className="font-semibold text-primary-700">
                                        {(step as any).timeframe}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    <p className="text-gray-700 leading-relaxed">
                                      {step.description}
                                    </p>
                                  </div>
                                </div>
                              </Card>
                            ) : (
                              /* Standard timeline for other treatments */
                              <div className="flex items-start">
                                <div className="bg-primary-100 rounded-full p-3 mr-4 mt-1">
                                  <span className="text-2xl">{step.icon}</span>
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-xl font-bold text-primary-600 mb-3">
                                    {(step as any).day || (step as any).stage}
                                  </h4>
                                  <p className="text-gray-700 leading-relaxed">
                                    {step.description}
                                  </p>
                                </div>
                              </div>
                            )}
                            {!isDhiHairTransplant &&
                              !isSapphireFue &&
                              !isRhinoplasty &&
                              !isChinLiposuction &&
                              !isLiposuction &&
                              !isTummyTuck &&
                              !isMommyMakeover &&
                              !isBBL &&
                              !isBreastLift &&
                              !isBreastAugmentation &&
                              !isBreastReduction &&
                              !isGynecomastia &&
                              !isGastricSleeve &&
                              !isGastricBypass &&
                              !isGastricBalloon &&
                              !isArmLift &&
                              !isThighLift &&
                              index <
                                (content.sections[1] as any).timeline!.length -
                                  1 && (
                                <div className="absolute left-6 top-16 w-0.5 h-6 bg-primary-200"></div>
                              )}
                          </motion.div>
                        )
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          )}

          {/* SECTION 4: BENEFITS (only for Hollywood Smile) */}
          {content?.sections[2] && (
            <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
              <div className="container-custom">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12 px-4 sm:px-0"
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                    {content.sections[2].headline}
                  </h2>

                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {content.sections[2].content}
                  </p>
                </motion.div>

                {/* Before/After Comparison */}
                {content.sections[2].beforeAfter && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 px-4 sm:px-0"
                  >
                    <div className="max-w-2xl mx-auto">
                      <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="relative">
                          <img
                            src={content.sections[2].beforeAfter.before}
                            alt="Before treatment"
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg">
                            Before
                          </div>
                        </div>
                        <div className="relative">
                          <img
                            src={content.sections[2].beforeAfter.after}
                            alt="After treatment"
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute bottom-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-lg">
                            After
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-0">
                  {content.sections[2].benefits?.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <Card className="p-8 h-full text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex justify-center mb-6">
                          {benefit.icon}
                        </div>
                        <h4 className="text-xl font-bold text-text-primary mb-4">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {benefit.description}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* SECTION 5: QUALITY (only for Hollywood Smile) */}
          {content?.sections[3] && (
            <section className="section-padding">
              <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="px-4 sm:px-0"
                  >
                    <div className="flex items-center mb-6">
                      <Award className="w-12 h-12 text-primary-500 mr-4" />
                      <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
                        {content.sections[3].headline}
                      </h2>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {content.sections[3].content}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary-50 p-4 rounded-xl text-center">
                        <div className="text-2xl font-bold text-primary-600">
                          15-20
                        </div>
                        <div className="text-sm text-gray-600">
                          Years Lifespan
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-xl text-center">
                        <div className="text-2xl font-bold text-green-600">
                          100%
                        </div>
                        <div className="text-sm text-gray-600">
                          Biocompatible
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="px-4 sm:px-0"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={content.sections[3].image}
                        alt="Quality materials"
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          )}

          {/* Features Section (for treatments without custom content) */}
          {!isDhiHairTransplant &&
            !isSapphireFue &&
            !isHollywoodSmile &&
            !isDentalVeneers &&
            !isDentalImplants &&
            !isRhinoplasty &&
            !isFacelift &&
            !isChinLiposuction &&
            !isLiposuction &&
            !isTummyTuck &&
            !isMommyMakeover &&
            !isBBL &&
            !isBreastLift &&
            !isBreastAugmentation &&
            !isBreastReduction &&
            !isGynecomastia &&
            !isGastricSleeve &&
            !isGastricBypass &&
            !isGastricBalloon &&
            !isArmLift &&
            !isThighLift &&
            !isEyebrowLift &&
            treatment.features &&
            treatment.features.length > 0 && (
              <section className="section-padding bg-gray-50">
                <div className="container-custom">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto px-4 sm:px-0"
                  >
                    {/* Treatment Image */}
                    <div className="mb-12">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={treatment.image}
                          alt={treatment.title}
                          className="w-full h-[400px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-6 left-6">
                          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                            {treatment.title}
                          </h2>
                          <p className="text-white/90 text-lg">
                            {treatment.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-text-primary text-center mb-12">
                      Treatment Features
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {treatment.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          </div>
                          <span className="text-gray-700 text-lg leading-relaxed">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </section>
            )}

          {/* SECTION 6: FAQ (for treatments with custom content) */}
          {content?.faq && (
            <section className="section-padding bg-gray-50">
              <div className="container-custom">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-4xl mx-auto px-4 sm:px-0"
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-text-primary text-center mb-12">
                    Clear Answers to Common Questions
                  </h2>

                  <div className="space-y-4">
                    {content.faq.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                          <button
                            onClick={() =>
                              setExpandedFAQ(
                                expandedFAQ === index ? null : index
                              )
                            }
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-text-primary pr-4">
                              {item.question}
                            </h3>
                            <div className="bg-primary-100 rounded-full p-2">
                              {expandedFAQ === index ? (
                                <Minus className="w-4 h-4 text-primary-600" />
                              ) : (
                                <Plus className="w-4 h-4 text-primary-600" />
                              )}
                            </div>
                          </button>

                          {expandedFAQ === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="px-6 pb-6"
                            >
                              <p className="text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                                {item.answer}
                              </p>
                            </motion.div>
                          )}
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* SECTION 7: FINAL CTA */}
          <section className="relative section-padding overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-primary-400/10"></div>
            </div>

            <div className="relative container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center px-4 sm:px-0"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  {content?.cta.headline || "Ready to Transform Your Look?"}
                </h2>

                <p className="text-xl text-primary-100 mb-12 leading-relaxed max-w-2xl mx-auto">
                  {content?.cta.subheadline ||
                    "Take the first step towards your transformation. Get your personalized consultation today."}
                </p>

                <div className="flex justify-center mb-8">
                  <Button
                    variant="secondary"
                    size="lg"
                    leftIcon={<Phone className="w-5 h-5" />}
                    className="bg-white text-primary-600 hover:bg-gray-50 shadow-xl px-8 py-4 text-lg font-semibold"
                    onClick={() => {
                      // Navigate to home page and scroll to consultation form
                      if (onNavigate) {
                        onNavigate("/");
                        // Small delay to ensure navigation completes before scrolling
                        setTimeout(() => {
                          const formElement =
                            document.getElementById("consultation-form");
                          if (formElement) {
                            formElement.scrollIntoView({
                              behavior: "smooth",
                              block: "center",
                            });
                          }
                        }, 100);
                      }
                    }}
                  >
                    {content?.cta.buttonText || "Book Free Consultation"}
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="bg-white/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white/90 text-sm">Free Consultation</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white/90 text-sm">JCI Accredited</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-2">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white/90 text-sm">All-Inclusive</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default TreatmentDetailsPage;
