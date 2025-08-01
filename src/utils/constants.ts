import type { NavItem, Treatment, Service, ContactInfo, SocialLinks } from '../types';
import { getTreatmentImage } from './imageUtils';

// Navigation constants for single-page layout
export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '#home'
  },
  {
    id: 'treatments',
    label: 'Treatments',
    href: '#treatments',
    subItems: [
      { id: 'hair-transplant', label: 'Hair Transplant', href: '#treatments' },
      { id: 'dental', label: 'Dental', href: '#treatments' },
      { id: 'nose-surgery', label: 'Nose Surgery', href: '#treatments' },
      { id: 'cosmetic-surgery', label: 'Cosmetic Surgery', href: '#treatments' }
    ]
  },
  {
    id: 'about',
    label: 'About Us',
    href: '#about'
  },
  {
    id: 'before-after',
    label: 'Before & After',
    href: '#before-after'
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact'
  }
];

// Treatment categories
export const TREATMENT_CATEGORIES = {
  HAIR_TRANSPLANT: 'hair-transplant',
  DENTAL: 'dental',
  NOSE_SURGERY: 'nose-surgery',
  COSMETIC_SURGERY: 'cosmetic-surgery'
} as const;

// Sample before/after images data
export const BEFORE_AFTER_IMAGES = [
  {
    id: "hair-1",
    beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop&crop=face",
    afterImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=400&fit=crop&crop=face",
    treatment: "Hair Transplant - FUE Method",
    description: "Complete hair restoration using advanced FUE technique. 3000 grafts transplanted with natural hairline design.",
    category: "hair-transplant"
  },
  {
    id: "hair-2", 
    beforeImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=400&fit=crop&crop=face",
    afterImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=400&fit=crop&crop=face",
    treatment: "Hair Transplant - DHI Technique",
    description: "Advanced DHI hair transplantation for natural density and perfect hairline. 2500 grafts with minimal scarring.",
    category: "hair-transplant"
  },
  {
    id: "dental-1",
    beforeImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=400&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&h=400&fit=crop",
    treatment: "Complete Smile Makeover",
    description: "Full dental rehabilitation with porcelain veneers and crowns. Perfect smile transformation in just 7 days.",
    category: "dental"
  },
  {
    id: "dental-2",
    beforeImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=400&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=400&fit=crop",
    treatment: "All-on-4 Dental Implants",
    description: "Complete teeth replacement with All-on-4 implant system. Full mouth restoration with immediate results.",
    category: "dental"
  },
  {
    id: "cosmetic-1",
    beforeImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=400&fit=crop&crop=face",
    afterImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=400&fit=crop&crop=face",
    treatment: "Rhinoplasty Surgery",
    description: "Natural nose reshaping with advanced surgical techniques. Enhanced facial harmony and improved breathing.",
    category: "cosmetic-surgery"
  },
  {
    id: "cosmetic-2",
    beforeImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=400&fit=crop&crop=face",
    afterImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=400&fit=crop&crop=face",
    treatment: "Facelift Surgery",
    description: "Natural facelift with advanced techniques for youthful appearance. Minimal scarring with dramatic results.",
    category: "cosmetic-surgery"
  }
];

// Sample treatments data
export const TREATMENTS: Treatment[] = [
  // Hair Transplant
  {
    id: 'fue-hair-transplant',
    title: 'FUE Hair Transplant',
    description: 'Follicular Unit Extraction is a minimally invasive hair transplant technique that provides natural-looking results.',
    image: getTreatmentImage('fue-hair-transplant'),
    price: 'Starting from €2,500',
    duration: '6-8 hours',
    category: 'hair-transplant',
    features: ['Natural hairline design', 'Minimally invasive', 'No linear scarring', 'Quick recovery']
  },
  {
    id: 'dhi-hair-transplant',
    title: 'DHI Hair Transplant',
    description: 'Direct Hair Implantation offers precise placement and higher density for optimal results.',
    image: getTreatmentImage('dhi-hair-transplant'),
    price: 'Starting from €3,000',
    duration: '7-9 hours',
    category: 'hair-transplant',
    features: ['Precise implantation', 'Higher density', 'Faster healing', 'No shaving required']
  },
  {
    id: 'beard-transplant',
    title: 'Beard Transplant',
    description: 'Achieve a fuller, more defined beard with our advanced transplant techniques.',
    image: getTreatmentImage('beard-transplant'),
    price: 'Starting from €2,000',
    duration: '4-6 hours',
    category: 'hair-transplant',
    features: ['Natural beard design', 'Permanent results', 'Custom density', 'Facial symmetry']
  },
  
  // Dental
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    description: 'Replace missing teeth with titanium implants for a permanent, natural-looking solution.',
    image: getTreatmentImage('dental-implants'),
    price: 'Starting from €800',
    duration: '1-2 hours per implant',
    category: 'dental',
    features: ['Lifetime warranty', 'Natural appearance', 'Bone preservation', 'Improved function']
  },
  {
    id: 'hollywood-smile',
    title: 'Hollywood Smile',
    description: 'Transform your smile with porcelain veneers for a perfect, radiant appearance.',
    image: getTreatmentImage('hollywood-smile'),
    price: 'Starting from €3,500',
    duration: '5-7 days',
    category: 'dental',
    features: ['Custom design', 'Porcelain veneers', 'Color matching', 'Instant transformation']
  },
  
  // Nose Surgery
  {
    id: 'rhinoplasty',
    title: 'Rhinoplasty',
    description: 'Enhance your facial harmony with our expert nose reshaping procedures.',
    image: getTreatmentImage('rhinoplasty'),
    price: 'Starting from €3,500',
    duration: '2-3 hours',
    category: 'nose-surgery',
    features: ['Facial harmony', 'Breathing improvement', 'Natural results', 'Expert surgeons']
  },
  
  // Cosmetic Surgery
  {
    id: 'breast-augmentation',
    title: 'Breast Augmentation',
    description: 'Enhance your confidence with safe, natural-looking breast augmentation.',
    image: getTreatmentImage('breast-augmentation'),
    price: 'Starting from €4,000',
    duration: '2-3 hours',
    category: 'cosmetic-surgery',
    features: ['Natural appearance', 'Various implant options', 'Minimal scarring', 'Expert care']
  },
  {
    id: 'liposuction',
    title: 'Liposuction',
    description: 'Remove stubborn fat deposits and achieve your ideal body contour with advanced liposuction techniques.',
    image: getTreatmentImage('liposuction'),
    price: 'Starting from €2,500',
    duration: '2-4 hours',
    category: 'cosmetic-surgery',
    features: ['Body contouring', 'Minimal downtime', 'Precise results', 'Advanced technology']
  },
  {
    id: 'tummy-tuck',
    title: 'Tummy Tuck',
    description: 'Achieve a flatter, more toned abdomen by removing excess skin and tightening muscles.',
    image: getTreatmentImage('tummy-tuck'),
    price: 'Starting from €3,500',
    duration: '3-5 hours',
    category: 'cosmetic-surgery',
    features: ['Muscle tightening', 'Excess skin removal', 'Improved contour', 'Long-lasting results']
  },
  {
    id: 'facelift',
    title: 'Facelift Surgery',
    description: 'Turn back the clock with our advanced facelift procedures for a more youthful appearance.',
    image: getTreatmentImage('facelift'),
    price: 'Starting from €5,000',
    duration: '4-6 hours',
    category: 'cosmetic-surgery',
    features: ['Youthful appearance', 'Natural results', 'Minimal scarring', 'Expert technique']
  },
  
  // Additional Dental Treatments
  {
    id: 'teeth-whitening',
    title: 'Professional Teeth Whitening',
    description: 'Achieve a brighter, whiter smile with our professional-grade whitening treatments.',
    image: getTreatmentImage('teeth-whitening'),
    price: 'Starting from €300',
    duration: '1-2 hours',
    category: 'dental',
    features: ['Immediate results', 'Safe procedure', 'Long-lasting', 'Professional grade']
  },
  {
    id: 'all-on-4',
    title: 'All-on-4 Implants',
    description: 'Complete teeth replacement with just 4 implants per arch for immediate full mouth restoration.',
    image: getTreatmentImage('all-on-4'),
    price: 'Starting from €8,000',
    duration: '1 day procedure',
    category: 'dental',
    features: ['Same day teeth', 'Full arch restoration', 'Immediate function', 'High success rate']
  }
];

// Services
export const SERVICES: Service[] = [
  {
    id: 'hotel-accommodation',
    title: 'Hotel Accommodation',
    description: 'Luxury hotel stays near our clinic for your comfort and convenience.',
    icon: 'hotel',
    features: ['5-star hotels', 'Close to clinic', 'Breakfast included', 'Patient-friendly'],
    category: 'accommodation'
  },
  {
    id: 'airport-transfers',
    title: 'Airport Transfers',
    description: 'Complimentary VIP transfers from and to the airport.',
    icon: 'car',
    features: ['VIP vehicles', 'Professional drivers', 'Meet & greet', 'Luggage assistance'],
    category: 'transport'
  },
  {
    id: 'medical-translator',
    title: 'Medical Translator',
    description: 'Professional medical interpreters to ensure clear communication.',
    icon: 'language',
    features: ['Certified translators', 'Medical terminology', 'Multiple languages', '24/7 support'],
    category: 'support'
  },
  {
    id: 'extended-warranty',
    title: 'Extended Warranty',
    description: 'Comprehensive warranty coverage for your peace of mind.',
    icon: 'shield',
    features: ['Lifetime coverage', 'Free revisions', 'Global support', 'Quality guarantee'],
    category: 'warranty'
  }
];

// Contact information
export const CONTACT_INFO: ContactInfo = {
  phone: '+90 212 555 0123',
  whatsapp: '+90 532 555 0123',
  email: 'info@sarayestetic.com',
  address: 'Nisantasi, Istanbul, Turkey',
  workingHours: {
    weekdays: '09:00 - 18:00',
    saturday: '10:00 - 16:00',
    sunday: 'Closed'
  }
};

// Form constants
export const TREATMENT_OPTIONS = [
  { value: 'hair-transplant', label: 'Hair Transplant' },
  { value: 'dental-treatment', label: 'Dental Treatment' },
  { value: 'nose-surgery', label: 'Nose Surgery' },
  { value: 'cosmetic-surgery', label: 'Cosmetic Surgery' },
  { value: 'consultation', label: 'General Consultation' }
];

export const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' }
];

export const CONTACT_PREFERENCES = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
  { value: 'whatsapp', label: 'WhatsApp' }
];

export const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
];

// Responsive breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

// Animation durations
export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.6,
  extraSlow: 1.0
};

// Social media links
export const SOCIAL_LINKS: SocialLinks = {
  facebook: 'https://facebook.com/sarayestetic',
  instagram: 'https://instagram.com/sarayestetic',
  youtube: 'https://youtube.com/sarayestetic',
  tiktok: 'https://tiktok.com/@sarayestetic',
  linkedin: 'https://linkedin.com/company/sarayestetic'
};

// SEO constants
export const SEO_DEFAULTS = {
  title: 'Saray Estetic - Premium Aesthetic Clinic in Istanbul',
  description: 'Leading aesthetic clinic in Istanbul offering hair transplant, dental treatments, nose surgery, and cosmetic procedures with international standards.',
  keywords: 'hair transplant, dental implants, rhinoplasty, cosmetic surgery, aesthetic clinic, Istanbul, Turkey',
  image: '/images/og-image.jpg',
  url: 'https://sarayestetic.com'
};

// API endpoints (for future backend integration)
export const API_ENDPOINTS = {
  consultation: '/api/consultation',
  contact: '/api/contact',
  newsletter: '/api/newsletter',
  booking: '/api/booking',
  quote: '/api/quote'
};

// File upload constants
export const UPLOAD_LIMITS = {
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
  maxFiles: 5
};

// Language constants
export const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

// Error messages
export const ERROR_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  minLength: (min: number) => `Minimum ${min} characters required`,
  maxLength: (max: number) => `Maximum ${max} characters allowed`,
  fileSize: 'File size too large (max 5MB)',
  fileType: 'Invalid file type (only JPG, PNG, WebP allowed)',
  network: 'Network error. Please try again.',
  server: 'Server error. Please try again later.',
  validation: 'Please check your input and try again'
};

// Success messages
export const SUCCESS_MESSAGES = {
  consultation: 'Consultation request submitted successfully! We will contact you soon.',
  contact: 'Message sent successfully! We will get back to you within 24 hours.',
  newsletter: 'Successfully subscribed to our newsletter!',
  booking: 'Booking request submitted successfully!',
  quote: 'Quote request submitted successfully!'
};