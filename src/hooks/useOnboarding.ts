import { useState, useEffect } from 'react';
import { OnboardingData } from '../types/onboarding';

const STORAGE_KEY = 'voaiz_onboarding_data';

const defaultData: OnboardingData = {
  companyName: '',
  productName: '',
  features: [],
  usps: [],
  functionalities: [],
  language: 'English',
  callType: 'sales',
  numberOfCalls: 1,
  productDetails: '',
  selectedAgent: 'sauphy'
};

export function useOnboarding() {
  const [data, setData] = useState<OnboardingData>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateData = (updates: Partial<OnboardingData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const resetData = () => {
    setData(defaultData);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { data, updateData, resetData };
}