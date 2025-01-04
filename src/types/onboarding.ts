export interface OnboardingData {
  companyName: string;
  productName: string;
  features: string[];
  usps: string[];
  functionalities: string[];
  language: string;
  callType: 'sales' | 'support' | 'reminder';
  numberOfCalls: number;
  productDetails: string;
  selectedAgent: string;
}

export type OnboardingStep = 
  | 'company'
  | 'product'
  | 'features'
  | 'usps'
  | 'functionalities'
  | 'language'
  | 'callType'
  | 'number'
  | 'agent'
  | 'generate';