// Utility for handling images in development and production

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
    'fue-hair-transplant': 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&h=400&fit=crop&crop=center',
    'dhi-hair-transplant': 'https://images.unsplash.com/photo-1611095973362-70b1fe46fb08?w=600&h=400&fit=crop&crop=center',
    'beard-transplant': 'https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=600&h=400&fit=crop&crop=face',
    'dental-implants': 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop&crop=center',
    'hollywood-smile': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center',
    'rhinoplasty': 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop&crop=center',
    'breast-augmentation': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center',
    'liposuction': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center',
    'tummy-tuck': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&crop=center',
    'facelift': 'https://images.unsplash.com/photo-1594824721832-8917c1ad1637?w=600&h=400&fit=crop&crop=center',
    'teeth-whitening': 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop&crop=center',
    'all-on-4': 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop&crop=center',
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