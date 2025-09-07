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
      { id: 'dental', label: 'Dental Treatments', href: '#treatments' },
      { id: 'nose-face-aesthetics', label: 'Nose & Face Aesthetics', href: '#treatments' },
      { id: 'body-aesthetics', label: 'Body Aesthetics', href: '#treatments' },
      { id: 'hair-restoration', label: 'Hair Restoration', href: '#treatments' },
      { id: 'weight-loss', label: 'Weight-Loss Treatments', href: '#treatments' }
    ]
  },
  {
    id: 'before-after',
    label: 'Before & After',
    href: '#trust-results'
  },
  {
    id: 'faq',
    label: 'FAQ',
    href: '#faq'
  },
  {
    id: 'about',
    label: 'About Us',
    href: '/about'
  },
  {
    id: 'blog',
    label: 'Blog',
    href: '/blog'
  }
];

// Treatment categories
export const TREATMENT_CATEGORIES = {
  DENTAL: 'dental',
  NOSE_FACE_AESTHETICS: 'nose-face-aesthetics',
  BODY_AESTHETICS: 'body-aesthetics',
  HAIR_RESTORATION: 'hair-restoration',
  WEIGHT_LOSS: 'weight-loss'
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
  // Dental Treatments
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
    id: 'zirconium-crowns',
    title: 'Zirconium Crowns (Hollywood Smile)',
    description: 'Transform your smile with premium zirconium crowns for a perfect, radiant appearance.',
    image: getTreatmentImage('hollywood-smile'),
    price: 'Starting from €3,500',
    duration: '5-7 days',
    category: 'dental',
    features: ['Zirconium crowns', 'Custom design', 'Color matching', 'Instant transformation']
  },
  {
    id: 'dental-veneers-emax',
    title: 'Dental Veneers (E-MAX)',
    description: 'Premium E-MAX ceramic veneers for the most natural and durable smile transformation.',
    image: getTreatmentImage('dental-veneers'),
    price: 'Starting from €400',
    duration: '3-5 days',
    category: 'dental',
    features: ['E-MAX ceramic', 'Ultra-thin design', 'Natural translucency', 'Long-lasting']
  },
  
  // Nose & Face Aesthetics
  {
    id: 'rhinoplasty',
    title: 'Rhinoplasty',
    description: 'Enhance your facial harmony with our expert nose reshaping procedures.',
    image: getTreatmentImage('rhinoplasty'),
    price: 'Starting from €3,500',
    duration: '2-3 hours',
    category: 'nose-face-aesthetics',
    features: ['Facial harmony', 'Breathing improvement', 'Natural results', 'Expert surgeons']
  },
  {
    id: 'facelift',
    title: 'Face Lift',
    description: 'Turn back the clock with our advanced facelift procedures for a more youthful appearance.',
    image: getTreatmentImage('facelift'),
    price: 'Starting from €5,000',
    duration: '4-6 hours',
    category: 'nose-face-aesthetics',
    features: ['Youthful appearance', 'Natural results', 'Minimal scarring', 'Expert technique']
  },
  {
    id: 'double-chin-liposuction',
    title: 'Double Chin Liposuction',
    description: 'Define your jawline and eliminate double chin with targeted chin liposuction.',
    image: getTreatmentImage('chin-liposuction'),
    price: 'Starting from €2,000',
    duration: '1-2 hours',
    category: 'nose-face-aesthetics',
    features: ['Defined jawline', 'Quick procedure', 'Minimal downtime', 'Natural results']
  },
  {
    id: 'eyebrow-lift',
    title: 'Eyebrow Lift',
    description: 'Restore youthful, open eyes with precision eyebrow lift surgery.',
    image: getTreatmentImage('eyebrow-lift'),
    price: 'Starting from €3,000',
    duration: '2-3 hours',
    category: 'nose-face-aesthetics',
    features: ['Youthful appearance', 'Open eyes', 'Natural results', 'Minimal downtime']
  },
  
  // Body Aesthetics
  {
    id: 'liposuction',
    title: 'Liposuction',
    description: 'Remove stubborn fat deposits and achieve your ideal body contour with advanced liposuction techniques.',
    image: getTreatmentImage('liposuction'),
    price: 'Starting from €2,500',
    duration: '2-4 hours',
    category: 'body-aesthetics',
    features: ['Body contouring', 'Minimal downtime', 'Precise results', 'Advanced technology']
  },
  {
    id: 'tummy-tuck',
    title: 'Tummy Tuck',
    description: 'Achieve a flatter, more toned abdomen by removing excess skin and tightening muscles.',
    image: getTreatmentImage('tummy-tuck'),
    price: 'Starting from €3,500',
    duration: '3-5 hours',
    category: 'body-aesthetics',
    features: ['Muscle tightening', 'Excess skin removal', 'Improved contour', 'Long-lasting results']
  },
  {
    id: 'mommy-makeover',
    title: 'Mommy Makeover',
    description: 'Comprehensive body transformation combining multiple procedures to restore pre-pregnancy body.',
    image: getTreatmentImage('mommy-makeover'),
    price: 'Starting from €8,000',
    duration: '4-6 hours',
    category: 'body-aesthetics',
    features: ['Complete transformation', 'Combined procedures', 'Restored confidence', 'Expert care']
  },
  {
    id: 'brazilian-butt-lift',
    title: 'Brazilian Butt Lift',
    description: 'Enhance your curves with fat transfer for natural, beautiful buttock augmentation.',
    image: getTreatmentImage('brazilian-butt-lift'),
    price: 'Starting from €4,500',
    duration: '3-4 hours',
    category: 'body-aesthetics',
    features: ['Natural enhancement', 'Fat transfer', 'Improved curves', 'Long-lasting results']
  },
  {
    id: 'arm-lift',
    title: 'Arm Lift',
    description: 'Remove excess skin and fat from upper arms for firmer, more toned contours.',
    image: getTreatmentImage('arm-lift'),
    price: 'Starting from €3,500',
    duration: '2-3 hours',
    category: 'body-aesthetics',
    features: ['Firmer contours', 'Excess skin removal', 'Improved confidence', 'Long-lasting results']
  },
  {
    id: 'breast-lift',
    title: 'Breast Lift',
    description: 'Restore youthful breast shape and position with our advanced breast lift procedures.',
    image: getTreatmentImage('breast-lift'),
    price: 'Starting from €3,500',
    duration: '2-3 hours',
    category: 'body-aesthetics',
    features: ['Youthful position', 'Natural shape', 'Long-lasting results', 'Minimal scarring']
  },
  {
    id: 'breast-augmentation',
    title: 'Breast Augmentation',
    description: 'Enhance your confidence with safe, natural-looking breast augmentation.',
    image: getTreatmentImage('breast-augmentation'),
    price: 'Starting from €4,000',
    duration: '2-3 hours',
    category: 'body-aesthetics',
    features: ['Natural appearance', 'Various implant options', 'Minimal scarring', 'Expert care']
  },
  {
    id: 'breast-reduction',
    title: 'Breast Reduction',
    description: 'Reduce breast size and improve comfort with our expert breast reduction surgery.',
    image: getTreatmentImage('breast-reduction'),
    price: 'Starting from €4,500',
    duration: '3-4 hours',
    category: 'body-aesthetics',
    features: ['Improved comfort', 'Better proportions', 'Reduced back pain', 'Enhanced confidence']
  },
  {
    id: 'gynecomastia',
    title: 'Gynecomastia',
    description: 'Male breast reduction surgery to restore masculine chest contours.',
    image: getTreatmentImage('gynecomastia'),
    price: 'Starting from €3,000',
    duration: '2-3 hours',
    category: 'body-aesthetics',
    features: ['Masculine contour', 'Permanent results', 'Minimal scarring', 'Quick recovery']
  },
  
  // Hair Restoration
  {
    id: 'sapphire-fue-hair-transplant',
    title: 'Sapphire FUE Hair Transplant',
    description: 'Advanced hair transplant using sapphire blades for natural results with minimal scarring.',
    image: getTreatmentImage('sapphire-fue'),
    price: 'Starting from €2,500',
    duration: '6-8 hours',
    category: 'hair-restoration',
    features: ['Sapphire blade technology', 'Natural hairline design', 'Minimally invasive', 'Quick recovery']
  },
  {
    id: 'dhi-hair-transplant',
    title: 'DHI Hair Transplant',
    description: 'Direct Hair Implantation offers precise placement and higher density for optimal results.',
    image: getTreatmentImage('dhi-hair-transplant'),
    price: 'Starting from €3,000',
    duration: '7-9 hours',
    category: 'hair-restoration',
    features: ['Precise implantation', 'Higher density', 'Faster healing', 'No shaving required']
  },
  {
    id: 'beard-transplant',
    title: 'Beard Transplant',
    description: 'Achieve a fuller, more defined beard with our advanced transplant techniques.',
    image: getTreatmentImage('beard-transplant'),
    price: 'Starting from €2,000',
    duration: '4-6 hours',
    category: 'hair-restoration',
    features: ['Natural beard design', 'Permanent results', 'Custom density', 'Facial symmetry']
  },
  
  // Weight-Loss (Obesity) Treatments
  {
    id: 'gastric-bypass',
    title: 'Gastric Bypass Surgery',
    description: 'Advanced bariatric surgery combining restriction and malabsorption for maximum weight loss.',
    image: getTreatmentImage('gastric-bypass'),
    price: 'Starting from €6,000',
    duration: '2-3 hours',
    category: 'weight-loss',
    features: ['Maximum weight loss', 'Diabetes improvement', 'Metabolic benefits', 'Long-term success']
  },
  {
    id: 'gastric-balloon',
    title: 'Gastric Balloon',
    description: 'Non-surgical weight loss solution with temporary balloon placement for appetite reduction.',
    image: getTreatmentImage('gastric-balloon'),
    price: 'Starting from €3,000',
    duration: '30 minutes',
    category: 'weight-loss',
    features: ['Non-surgical', 'Temporary solution', 'Quick procedure', 'Effective results']
  },
  {
    id: 'gastric-sleeve',
    title: 'Gastric Sleeve',
    description: 'Safe and effective weight loss surgery removing 70-80% of stomach for lasting results.',
    image: getTreatmentImage('gastric-sleeve'),
    price: 'Starting from €4,500',
    duration: '1-2 hours',
    category: 'weight-loss',
    features: ['Lasting weight loss', 'Improved health', 'Reduced appetite', 'Life-changing results']
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
  { value: 'dental', label: 'Dental Treatments' },
  { value: 'nose-face-aesthetics', label: 'Nose & Face Aesthetics' },
  { value: 'body-aesthetics', label: 'Body Aesthetics' },
  { value: 'hair-restoration', label: 'Hair Restoration' },
  { value: 'weight-loss', label: 'Weight-Loss Treatments' },
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

// Blog data moved to Supabase. Local mock categories removed.

// Blog authors moved to Supabase (future table). Local mocks removed.

// Sample Blog Posts
/* Blog posts moved to Supabase. Local mocks removed.
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ultimate-guide-hair-transplant-2024',
    title: 'The Ultimate Guide to Hair Transplant in 2024: FUE vs DHI',
    excerpt: 'Discover the latest advances in hair transplant technology and learn about the differences between FUE and DHI techniques to make the best choice for your hair restoration journey.',
    content: `# The Ultimate Guide to Hair Transplant in 2024: FUE vs DHI

Hair loss affects millions of people worldwide, impacting not just appearance but also confidence and self-esteem. Fortunately, modern hair transplant techniques have revolutionized the field, offering natural-looking results with minimal downtime.

## Understanding Hair Transplant Basics

Hair transplantation involves moving healthy hair follicles from a donor area (typically the back of the head) to areas experiencing hair loss. The two most popular techniques today are:

### FUE (Follicular Unit Extraction)
- Individual follicles are extracted one by one
- No linear scarring
- Faster recovery time
- Natural-looking results

### DHI (Direct Hair Implantation)
- Advanced version of FUE
- Direct implantation without pre-made channels
- Higher precision and density
- Minimal handling of grafts

## Choosing the Right Technique

The choice between FUE and DHI depends on several factors:
- Extent of hair loss
- Hair type and characteristics
- Desired density
- Budget considerations

## Recovery and Results

Most patients can return to work within 3-5 days, with full results visible after 12-18 months. The key to success lies in choosing an experienced surgeon and following post-operative care instructions.

Ready to start your hair restoration journey? Contact us for a free consultation.`,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=400&fit=crop',
    author: 'dr-ahmet-kareem',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'hair-care',
    tags: ['hair transplant', 'FUE', 'DHI', 'hair loss'],
    featured: true,
    views: 1250,
    slug: 'ultimate-guide-hair-transplant-2024'
  },
  {
    id: 'hollywood-smile-makeover-guide',
    title: 'Hollywood Smile Makeover: Transform Your Smile in 7 Days',
    excerpt: 'Learn about the complete Hollywood smile makeover process, from consultation to final results, and discover how you can achieve a perfect smile in just one week.',
    content: `# Hollywood Smile Makeover: Transform Your Smile in 7 Days

A Hollywood smile makeover can completely transform your appearance and boost your confidence. This comprehensive treatment combines various dental procedures to create the perfect smile.

## What is a Hollywood Smile?

A Hollywood smile makeover typically includes:
- Porcelain veneers or crowns
- Teeth whitening
- Gum contouring
- Orthodontic alignment if needed

## The 7-Day Process

### Day 1-2: Consultation and Planning
- Comprehensive dental examination
- Digital smile design
- Treatment plan customization

### Day 3-4: Preparation
- Tooth preparation
- Temporary veneers placement
- Color and shape selection

### Day 5-7: Final Results
- Final veneers placement
- Adjustments and polishing
- Care instructions

## Maintenance Tips

- Regular dental hygiene
- Avoid staining foods and drinks
- Use a night guard if recommended
- Regular dental check-ups

Your dream smile is just a week away!`,
    image: 'https://images.unsplash.com/photo-1606811941271-0f8f9b2da6a7?w=800&h=400&fit=crop',
    author: 'dr-michael-brown',
    publishDate: '2024-01-10',
    readTime: '6 min read',
    category: 'dental-health',
    tags: ['hollywood smile', 'veneers', 'dental makeover', 'cosmetic dentistry'],
    featured: true,
    views: 890,
    slug: 'hollywood-smile-makeover-guide'
  },
  {
    id: 'rhinoplasty-recovery-tips',
    title: 'Rhinoplasty Recovery: Essential Tips for Best Results',
    excerpt: 'Complete guide to rhinoplasty recovery, including timeline, do\'s and don\'ts, and expert tips to ensure optimal healing and results.',
    content: `# Rhinoplasty Recovery: Essential Tips for Best Results

Rhinoplasty recovery is crucial for achieving optimal results. Following proper post-operative care ensures faster healing and better outcomes.

## Recovery Timeline

### Week 1-2: Initial Healing
- Swelling and bruising peak
- Nasal splint removal
- Basic activities resume

### Week 3-4: Continued Improvement
- Most swelling subsides
- Return to normal activities
- Exercise restrictions lifted gradually

### Month 2-12: Final Results
- Subtle refinements continue
- Final shape emerges
- Complete healing achieved

## Essential Care Tips

1. **Sleep Elevated**: Use 2-3 pillows for the first week
2. **Ice Application**: 20 minutes on/off for first 48 hours
3. **Avoid Pressure**: No glasses or sunglasses for 6 weeks
4. **Gentle Cleansing**: Follow surgeon's cleaning instructions
5. **Medication Compliance**: Take prescribed medications as directed

## What to Expect

- Initial results visible after splint removal
- 80% of swelling resolves in 2-3 weeks
- Final results take up to 1 year
- Patience is key to success

Remember, every patient heals differently. Trust the process and follow your surgeon's guidance.`,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop',
    author: 'dr-sara-thompson',
    publishDate: '2024-01-05',
    readTime: '7 min read',
    category: 'cosmetic-surgery',
    tags: ['rhinoplasty', 'nose surgery', 'recovery', 'post-operative care'],
    featured: false,
    views: 670,
    slug: 'rhinoplasty-recovery-tips'
  },
  {
    id: 'dental-implants-vs-dentures',
    title: 'Dental Implants vs Dentures: Making the Right Choice',
    excerpt: 'Comprehensive comparison between dental implants and dentures to help you make an informed decision about tooth replacement options.',
    content: `# Dental Implants vs Dentures: Making the Right Choice

When facing tooth loss, choosing between dental implants and dentures can be challenging. Understanding the differences helps make an informed decision.

## Dental Implants

### Advantages:
- Permanent solution
- Natural feel and function
- Preserve jawbone health
- No dietary restrictions
- Easy maintenance

### Considerations:
- Higher initial cost
- Surgical procedure required
- Longer treatment timeline
- Not suitable for everyone

## Dentures

### Advantages:
- Lower initial cost
- Non-surgical option
- Faster treatment
- Suitable for most patients
- Removable for cleaning

### Considerations:
- May affect speech and eating
- Require special care
- Need periodic adjustments
- May become loose over time

## Making Your Decision

Consider these factors:
- Overall health
- Bone density
- Budget
- Lifestyle preferences
- Long-term goals

## Our Recommendation

For most patients with adequate bone density and good oral health, dental implants offer the best long-term solution. However, dentures remain an excellent option for those seeking a more affordable or non-surgical alternative.

Schedule a consultation to determine the best option for your specific needs.`,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=400&fit=crop',
    author: 'dr-michael-brown',
    publishDate: '2023-12-28',
    readTime: '5 min read',
    category: 'dental-health',
    tags: ['dental implants', 'dentures', 'tooth replacement', 'oral health'],
    featured: false,
    views: 445,
    slug: 'dental-implants-vs-dentures'
  },
  {
    id: 'patient-story-hair-transformation',
    title: 'Patient Story: John\'s Amazing Hair Transformation Journey',
    excerpt: 'Follow John\'s inspiring hair transplant journey from initial consultation to final results, including challenges, recovery, and life-changing outcomes.',
    content: `# Patient Story: John's Amazing Hair Transformation Journey

Meet John, a 35-year-old professional who struggled with hair loss for over a decade. His journey to hair restoration is truly inspiring.

## The Beginning

John first noticed hair thinning at age 25. By 35, he had significant hair loss that affected his confidence, especially in professional settings.

> "I tried everything - medications, shampoos, even hairpieces. Nothing worked long-term. I finally decided to invest in a permanent solution."

## The Decision

After extensive research, John chose our clinic for his hair transplant. Factors that influenced his decision:
- Experienced surgeons
- Natural-looking results in our gallery
- Comprehensive consultation process
- Transparent pricing
- Excellent patient reviews

## The Procedure

John opted for the DHI technique:
- **Grafts transplanted**: 3,200
- **Procedure time**: 7 hours
- **Areas treated**: Frontal hairline and crown
- **Technique**: DHI (Direct Hair Implantation)

## Recovery Experience

### Week 1:
"The first week was the toughest. There was some swelling and discomfort, but nothing unbearable. The team's support was incredible."

### Month 1:
"Transplanted hair started falling out - this scared me initially, but the doctor explained it's normal. I trusted the process."

### Month 6:
"New hair growth was becoming visible. I was excited but tried to stay patient."

### Month 12:
"Amazing results! The hair looks completely natural. Even my barber couldn't tell where the transplanted hair ends."

## Life After Hair Transplant

John's confidence has soared:
- Received a promotion at work
- Started dating again
- Feels 10 years younger
- Recommends the procedure to friends

## John's Advice

"Research thoroughly, choose the right clinic, and be patient. The results are worth the wait. This investment changed my life."

## Final Results

- **Natural hairline**: Perfectly designed for his face
- **Density**: Excellent coverage and volume
- **Satisfaction**: 10/10 would do it again

Ready to start your own transformation? Contact us for a free consultation like John did.`,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=face',
    author: 'dr-ahmet-kareem',
    publishDate: '2023-12-20',
    readTime: '10 min read',
    category: 'patient-stories',
    tags: ['patient story', 'hair transplant', 'transformation', 'DHI', 'testimonial'],
    featured: true,
    views: 1850,
    slug: 'patient-story-hair-transformation'
  },
  {
    id: 'wellness-tips-recovery',
    title: '10 Wellness Tips for Faster Post-Surgery Recovery',
    excerpt: 'Essential wellness and lifestyle tips to accelerate your recovery after cosmetic surgery and ensure optimal healing.',
    content: `# 10 Wellness Tips for Faster Post-Surgery Recovery

Recovery is as important as the surgery itself. These wellness tips will help you heal faster and achieve better results.

## 1. Prioritize Sleep

Quality sleep is crucial for healing:
- Aim for 8-9 hours nightly
- Sleep elevated for facial procedures
- Create a comfortable environment
- Avoid screens before bed

## 2. Stay Hydrated

Water supports healing:
- Drink 8-10 glasses daily
- Avoid alcohol and caffeine
- Include herbal teas
- Monitor urine color

## 3. Nutrition for Healing

Focus on healing foods:
- Protein for tissue repair
- Vitamin C for collagen production
- Zinc for wound healing
- Anti-inflammatory foods

## 4. Gentle Movement

Light activity promotes circulation:
- Short walks as approved
- Avoid strenuous exercise
- Gentle stretching
- Listen to your body

## 5. Stress Management

Reduce stress for better healing:
- Practice meditation
- Deep breathing exercises
- Listen to calming music
- Maintain social connections

## 6. Follow Medication Instructions

Proper medication use:
- Take as prescribed
- Set reminders
- Don't skip doses
- Report side effects

## 7. Wound Care

Proper wound management:
- Keep areas clean
- Follow dressing changes
- Watch for infection signs
- Protect from sun

## 8. Avoid Smoking

Smoking impairs healing:
- Stop before surgery
- Continue abstinence during recovery
- Avoid secondhand smoke
- Consider nicotine replacement

## 9. Temperature Therapy

Use hot/cold therapy:
- Ice for swelling (first 48 hours)
- Warm compresses for circulation
- Follow surgeon's guidelines
- Never apply directly to skin

## 10. Mental Health

Recovery affects mood:
- Be patient with progress
- Seek support when needed
- Focus on end goals
- Celebrate small improvements

## When to Contact Your Surgeon

Call immediately if you experience:
- Excessive bleeding
- Signs of infection
- Severe pain
- Unexpected symptoms
- Concerns about healing

Remember, recovery is a journey. Be patient with yourself and trust the process.`,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop',
    author: 'dr-sara-thompson',
    publishDate: '2023-12-15',
    readTime: '6 min read',
    category: 'health-wellness',
    tags: ['recovery', 'wellness', 'post-surgery', 'healing', 'health tips'],
    featured: false,
    views: 720,
    slug: 'wellness-tips-recovery'
  }
];
*/