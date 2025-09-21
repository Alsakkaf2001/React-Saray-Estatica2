// Utility to replace hardcoded image URLs with proper treatment images
import { 
  getTreatmentMainImage,
  getTreatmentLearnMoreImage,
  getTreatmentCandidacyImage,
  getTreatmentProcessImage,
  getTreatmentBenefitsImage,
  getTreatmentBeforeImage,
  getTreatmentAfterImage,
  getTreatmentSectionImage
} from './treatmentImages';

// Map treatment IDs used in TreatmentDetailsPage to our constants
const TREATMENT_ID_MAP: { [key: string]: string } = {
  'sapphire-fue': 'sapphire-fue-hair-transplant',
  'dhi-hair-transplant': 'dhi-hair-transplant',
  'hollywood-smile': 'zirconium-crowns',
  'dental-veneers-emax': 'dental-veneers-emax',
  'dental-implants': 'dental-implants',
  'rhinoplasty': 'rhinoplasty',
  'facelift': 'facelift',
  'chin-liposuction': 'double-chin-liposuction',
  'liposuction': 'liposuction',
  'tummy-tuck': 'tummy-tuck',
  'mommy-makeover': 'mommy-makeover',
  'brazilian-butt-lift': 'brazilian-butt-lift',
  'bbl': 'brazilian-butt-lift',
  'breast-lift': 'breast-lift',
  'mastopexy': 'breast-lift',
  'breast-augmentation': 'breast-augmentation',
  'breast-reduction': 'breast-reduction',
  'reduction-mammoplasty': 'breast-reduction',
  'gynecomastia': 'gynecomastia',
  'male-breast-reduction': 'gynecomastia',
  'gastric-sleeve': 'gastric-sleeve',
  'sleeve-gastrectomy': 'gastric-sleeve',
  'gastric-bypass': 'gastric-bypass',
  'roux-en-y': 'gastric-bypass',
  'gastric-balloon': 'gastric-balloon',
  'intragastric-balloon': 'gastric-balloon',
  'arm-lift': 'arm-lift',
  'brachioplasty': 'arm-lift',
  'thigh-lift': 'thigh-lift',
  'thighplasty': 'thigh-lift',
  'eyebrow-lift': 'eyebrow-lift',
  'brow-lift': 'eyebrow-lift'
};

// Get the correct treatment ID
export const mapTreatmentId = (id: string): string => {
  return TREATMENT_ID_MAP[id] || id;
};

// Comprehensive image getter for TreatmentDetailsPage
export const getTreatmentDetailImage = (
  treatmentId: string, 
  imageType: 'hero' | 'candidacy' | 'process' | 'benefits' | 'before' | 'after' | 'section',
  index: number = 0
): string => {
  const mappedId = mapTreatmentId(treatmentId);
  
  switch (imageType) {
    case 'hero':
      return getTreatmentLearnMoreImage(mappedId);
    case 'candidacy':
      return getTreatmentCandidacyImage(mappedId);
    case 'process':
      return getTreatmentProcessImage(mappedId);
    case 'benefits':
      return getTreatmentBenefitsImage(mappedId);
    case 'before':
      return getTreatmentBeforeImage(mappedId);
    case 'after':
      return getTreatmentAfterImage(mappedId);
    case 'section':
      return getTreatmentSectionImage(mappedId, index);
    default:
      return getTreatmentMainImage(mappedId);
  }
};
