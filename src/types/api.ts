export interface CallRequestData {
  // Company and product info
  companyName: string;
  productName: string;
  features: string[];
  usps: string[];
  functionalities: string[];
  
  // Call settings
  phone_number: string;
  language: string;
  callType: 'sales' | 'support' | 'reminder';
  max_duration: number;
  first_sentence: string;
  
  // Optional metadata
  customerName?: string;
}