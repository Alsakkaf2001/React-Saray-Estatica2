export interface Treatment {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: string;
  duration?: string;
  category: 'dental' | 'nose-face-aesthetics' | 'body-aesthetics' | 'hair-restoration' | 'weight-loss';
  features?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: string;
}

export interface BeforeAfterImage {
  id: string;
  beforeImage: string;
  afterImage: string;
  treatment: string;
  description: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  review: string;
  image?: string;
  date: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  specialization: string;
  image: string;
  experience: string;
  education: string[];
  languages: string[];
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  youtube: string;
  tiktok: string;
  linkedin: string;
}

export interface TreatmentCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
  views?: number;
  slug: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
  color: string;
  icon: string;
  postCount?: number;
}

export interface BlogAuthor {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  title: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface BlogComment {
  id: string;
  postId: string;
  author: string;
  email: string;
  content: string;
  publishDate: string;
  approved: boolean;
  replies?: BlogComment[];
}

// Navigation types
export interface NavItem {
  id: string;
  label: string;
  href: string;
  subItems?: NavItem[];
}

// Animation types
export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
      staggerChildren?: number;
      delayChildren?: number;
    };
  };
}