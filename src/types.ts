export interface Programme {
  id: string;
  name: string;
  badge?: string;
  isFlagship?: boolean;
  duration: string;
  mode: string;
  totalCredits: string;
  eligibility: string;
  specialisationsTitle?: string;
  specialisations?: string[];
  tracksTitle?: string;
  tracks?: string[];
}

export interface Accolade {
  id: string;
  title: string;
  highlight?: string;
  badgeType: 'naac' | 'ugc' | 'nirf' | 'zone' | 'private' | 'spirit' | 'asia' | 'award' | 'aicte' | 'wes';
}

export interface WhyFeature {
  id: string;
  title: string;
  description?: string;
}

export interface ScholarshipItem {
  category: string;
  discount: string;
  highlight?: boolean;
}

export interface AdmissionStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface LeadFormData {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  programme: string;
}
