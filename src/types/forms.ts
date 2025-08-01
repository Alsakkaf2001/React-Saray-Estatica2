export interface ConsultationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
  age?: string;
  gender?: 'male' | 'female' | 'other';
  medicalHistory?: string;
  currentMedications?: string;
  previousSurgeries?: string;
  expectations?: string;
  howDidYouHear?: string;
  agreeToTerms: boolean;
  agreeToMarketing?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact?: 'email' | 'phone' | 'whatsapp';
}

export interface NewsletterFormData {
  email: string;
  firstName?: string;
  interests?: string[];
  agreeToTerms: boolean;
}

export interface BookingFormData {
  patientInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: 'male' | 'female' | 'other';
    nationality: string;
    address: string;
    city: string;
    country: string;
    passportNumber?: string;
  };
  treatmentInfo: {
    selectedTreatment: string;
    preferredDate: string;
    alternativeDate?: string;
    specialRequests?: string;
  };
  medicalInfo: {
    medicalHistory: string;
    currentMedications: string;
    allergies: string;
    previousSurgeries: string;
    emergencyContact: {
      name: string;
      relationship: string;
      phone: string;
    };
  };
  travelInfo?: {
    arrivalDate: string;
    departureDate: string;
    accommodationNeeded: boolean;
    transferNeeded: boolean;
    companionCount: number;
  };
  agreements: {
    termsAndConditions: boolean;
    privacyPolicy: boolean;
    medicalConsent: boolean;
    photographyConsent?: boolean;
  };
}

export interface QuoteRequestData {
  treatment: string;
  age: string;
  gender: 'male' | 'female' | 'other';
  medicalHistory: string;
  expectations: string;
  budgetRange?: string;
  timeframe?: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
    country: string;
  };
}

// Form validation error types
export interface FormError {
  field: string;
  message: string;
}

export interface FormState<T> {
  data: T;
  errors: FormError[];
  isValid: boolean;
  isSubmitting: boolean;
  isSubmitted: boolean;
  isDirty: boolean;
}

// Form step types for multi-step forms
export interface FormStep {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  isActive: boolean;
  isValid: boolean;
}

export interface MultiStepFormState {
  currentStep: number;
  steps: FormStep[];
  totalSteps: number;
  canProceed: boolean;
  canGoBack: boolean;
}