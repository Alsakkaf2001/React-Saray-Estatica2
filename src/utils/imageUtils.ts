// Utility for handling images in development and production

export const getPlaceholderImage = (
  width: number, 
  height: number, 
  text?: string,
  bgColor?: string,
  textColor?: string
): string => {
  const baseUrl = 'https://via.placeholder.com';
  const colorParams = bgColor && textColor ? `/${bgColor}/${textColor}` : '/A0244D/FFFFFF';
  const textParam = text ? `?text=${encodeURIComponent(text)}` : '';
  
  return `${baseUrl}/${width}x${height}${colorParams}${textParam}`;
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
  return 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1920&h=1080&fit=crop&crop=center';
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

export const optimizeImageUrl = (
  url: string, 
  width?: number, 
  height?: number, 
  quality?: number
): string => {
  // In production, this would integrate with image optimization services
  // For now, return the original URL
  return url;
};