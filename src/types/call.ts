export interface DemoCallFormData {
  name: string;
  phone: string;
  countryCode: string;
  maxDuration: number;
}

export interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: DemoCallFormData) => Promise<void>;
  isSubmitting: boolean;
}