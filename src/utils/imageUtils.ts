// Utility for handling images in development and production

// Import all treatment images
import dentalImplant1 from '../assets/images/treatment/Dental Treatments/Dental Implant 1.jpg';
import zirconiumCrown1 from '../assets/images/treatment/Dental Treatments/Zirconium Crown 1.jpg';
import emaxVeneers from '../assets/images/treatment/Dental Treatments/E-MAX VENEERS.png';

import rhinoplasty from '../assets/images/treatment/Face & Nose Aesthetics/Rhinoplasty.png';
import faceliftSurgery6 from '../assets/images/treatment/Face & Nose Aesthetics/Facelift Surgery 6.jpg';
import chinLiposuction from '../assets/images/treatment/Face & Nose Aesthetics/Chin Liposuction.png';
import eyebrowLift3 from '../assets/images/treatment/Face & Nose Aesthetics/Eyebrow Lift (Brow Lift) 3.jpg';

import liposuction1 from '../assets/images/treatment/Body Aesthetics/Liposuction 1.jpg';
import tummyTuck2 from '../assets/images/treatment/Body Aesthetics/Tummy Tuck (Abdominoplasty) 2.jpg';
import mommyMakeover1 from '../assets/images/treatment/Body Aesthetics/Mommy Makeover 1.jpg';
import brazilianButtLift5 from '../assets/images/treatment/Body Aesthetics/Brazilian Butt Lift (BBL) 5.jpg';
import armLift3 from '../assets/images/treatment/Body Aesthetics/Arm Lift (Brachioplasty) 3.jpg';
import breastLift from '../assets/images/treatment/Body Aesthetics/Breast Lift (Mastopexy).jpg';
import breastAugmentation1 from '../assets/images/treatment/Body Aesthetics/Breast Augmentation 1.jpg';
import breastReduction from '../assets/images/treatment/Body Aesthetics/Breast Reduction.jpg';
import gynecomastiaSurgery from '../assets/images/treatment/Body Aesthetics/Gynecomastia Surgery.jpg';

import sapphireFue1 from '../assets/images/treatment/Hair Restoration/Sapphire FUE Hair Transplant 1.jpg';
import dhiHairTransplant from '../assets/images/treatment/Hair Restoration/DHI Hair Transplant.jpg';
import beardTransplant3 from '../assets/images/treatment/Hair Restoration/Beard Transplant 3.jpg';

import gastricBypassSurgery from '../assets/images/treatment/Obesity Treatment/Gastric Bypass Surgery.jpg';
import gastricBypassSurgeryWebp from '../assets/images/treatment/Obesity Treatment/Gastric Bypass Surgery.webp';
import gastricSleeveSurgery1 from '../assets/images/treatment/Obesity Treatment/Gastric Sleeve Surgery 1.jpg';

export const getPlaceholderImage = (
  width: number, 
  height: number, 
  text?: string,
  bgColor?: string,
  textColor?: string
): string => {
  // Create a local data URI placeholder instead of using external service
  const bg = bgColor || 'A0244D';
  const fg = textColor || 'FFFFFF';
  const displayText = text || `${width}×${height}`;
  
  // Convert hex colors to RGB
  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return `${r},${g},${b}`;
  };
  
  const bgRgb = hexToRgb(bg);
  const fgRgb = hexToRgb(fg);
  
  // Create SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="rgb(${bgRgb})"/>
      <text 
        x="50%" 
        y="50%" 
        dominant-baseline="middle" 
        text-anchor="middle" 
        fill="rgb(${fgRgb})" 
        font-family="Arial, sans-serif" 
        font-size="${Math.min(width, height) * 0.1}"
      >
        ${displayText}
      </text>
    </svg>
  `;
  
  // Convert SVG to data URI
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export const getTreatmentImage = (treatmentType: string): string => {
  const images = {
    // Dental Treatments - Using imported local images
    'dental-implants': dentalImplant1,
    'zirconium-crowns': zirconiumCrown1,
    'dental-veneers-emax': emaxVeneers,
    
    // Nose & Face Aesthetics - Using imported local images
    'rhinoplasty': rhinoplasty,
    'facelift': faceliftSurgery6,
    'double-chin-liposuction': chinLiposuction,
    'eyebrow-lift': eyebrowLift3,
    
    // Body Aesthetics - Using imported local images
    'liposuction': liposuction1,
    'tummy-tuck': tummyTuck2,
    'mommy-makeover': mommyMakeover1,
    'brazilian-butt-lift': brazilianButtLift5,
    'arm-lift': armLift3,
    'breast-lift': breastLift,
    'breast-augmentation': breastAugmentation1,
    'breast-reduction': breastReduction,
    'gynecomastia': gynecomastiaSurgery,
    
    // Hair Restoration - Using imported local images
    'sapphire-fue-hair-transplant': sapphireFue1,
    'dhi-hair-transplant': dhiHairTransplant,
    'beard-transplant': beardTransplant3,
    
    // Weight-Loss (Obesity) Treatments - Using imported local images
    'gastric-bypass': gastricBypassSurgery,
    'gastric-balloon': gastricBypassSurgeryWebp,
    'gastric-sleeve': gastricSleeveSurgery1,
  };
  
  return images[treatmentType as keyof typeof images] || getPlaceholderImage(600, 400, 'Treatment');
};

export const getHeroImage = (): string => {
  // High-quality medical/clinic images - specifically for aesthetic/cosmetic surgery
  const clinicImages = [
    'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&h=1080&fit=crop&crop=center&q=80', // Modern medical clinic interior
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&fit=crop&crop=center&q=80', // Professional medical team
    'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=1920&h=1080&fit=crop&crop=center&q=80', // Clean modern clinic
    'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&h=1080&fit=crop&crop=center&q=80', // Medical consultation room
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&h=1080&fit=crop&crop=center&q=80', // Professional healthcare
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&h=1080&fit=crop&crop=center&q=80', // Modern medical facility
  ];
  
  // Return the first (most professional) image
  return clinicImages[0];
};

export const getAlternativeHeroImages = () => {
  return [
    'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&h=1080&fit=crop&crop=center&q=80', // Modern clinic
    'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=1920&h=1080&fit=crop&crop=center&q=80', // Clean medical environment  
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&fit=crop&crop=center&q=80', // Medical team
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&h=1080&fit=crop&crop=center&q=80', // Healthcare professional
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&h=1080&fit=crop&crop=center&q=80', // Medical facility
  ];
};

export const getClinicImages = () => ({
  interior: getPlaceholderImage(800, 600, 'Clinic Interior'),
  surgeryRoom: getPlaceholderImage(400, 400, 'Surgery Room'),
  consultationRoom: getPlaceholderImage(400, 400, 'Consultation Room'),
  reception: getPlaceholderImage(800, 600, 'Reception Area'),
  waiting: getPlaceholderImage(600, 400, 'Waiting Area'),
});

export const getBeforeAfterImages = () => [
  {
    id: '1',
    beforeImage: getPlaceholderImage(400, 400, 'Before 1'),
    afterImage: getPlaceholderImage(400, 400, 'After 1'),
    treatment: 'Hair Transplant',
    description: 'FUE Hair Transplant - 3000 grafts'
  },
  {
    id: '2',
    beforeImage: getPlaceholderImage(400, 400, 'Before 2'),
    afterImage: getPlaceholderImage(400, 400, 'After 2'),
    treatment: 'Rhinoplasty',
    description: 'Nose Surgery - Natural looking results'
  },
  {
    id: '3',
    beforeImage: getPlaceholderImage(400, 400, 'Before 3'),
    afterImage: getPlaceholderImage(400, 400, 'After 3'),
    treatment: 'Dental',
    description: 'Hollywood Smile - 20 veneers'
  },
];

export const isValidImageUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
): void => {
  const img = event.currentTarget;
  // Use the local placeholder instead of external service
  img.src = getPlaceholderImage(400, 300, 'Image Not Found', 'CCCCCC', '666666');
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const optimizeImageUrl = (url: string): string => {
  // In production, this would integrate with image optimization services
  // For now, return the original URL
  return url;
};

export const getLearnMoreImage = (treatmentType: string): string => {
  const learnMoreImages = {
    // Hair Transplant - Natural, thick hairlines showing confidence
    'sapphire-fue': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&h=600&fit=crop&crop=face',
    'dhi-hair-transplant': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1200&h=600&fit=crop&crop=face',
    'beard-transplant': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop&crop=face',
    
    // Dental - Beautiful, confident smiles (40s-50s for implants)
    'dental-implants': 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&h=600&fit=crop&crop=center',
    'hollywood-smile': 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&h=600&fit=crop&crop=center',
    'dental-veneers': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=600&fit=crop&crop=center',
    'teeth-whitening': 'https://images.unsplash.com/photo-1594824721832-8917c1ad1637?w=1200&h=600&fit=crop&crop=center',
    'all-on-4': 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&h=600&fit=crop&crop=center',
    
    // Nose Surgery - Profile portraits showing facial harmony
    'rhinoplasty': 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=1200&h=600&fit=crop&crop=face',
    
    // Cosmetic Surgery - Natural confidence and proportions
    'breast-augmentation': 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=600&fit=crop&crop=center',
    'breast-lift': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop&crop=center',
    'breast-reduction': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop&crop=center',
    'gynecomastia': 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=600&fit=crop&crop=center',
    'liposuction': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=600&fit=crop&crop=center',
    'chin-liposuction': 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=1200&h=600&fit=crop&crop=face',
    'tummy-tuck': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&crop=center',
    'mommy-makeover': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&h=600&fit=crop&crop=face',
    'brazilian-butt-lift': 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&h=600&fit=crop&crop=center',
    'facelift': 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&h=600&fit=crop&crop=face',
    'eyebrow-lift': 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=600&fit=crop&crop=face',
    'arm-lift': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop&crop=center',
    'thigh-lift': 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=600&fit=crop&crop=center',
    
    // Obesity Treatment - Health transformation and wellness
    'gastric-sleeve': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop&crop=center',
    'gastric-bypass': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&crop=center',
    'gastric-balloon': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&h=600&fit=crop&crop=center',
  };
  
  return learnMoreImages[treatmentType as keyof typeof learnMoreImages] || getPlaceholderImage(1200, 600, 'Learn More');
};