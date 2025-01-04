import React, { useState } from 'react';
import { X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DemoCallFormData } from '../../types/call';
import { initiateCall } from '../../services/api';
import { OnboardingData } from '../../types/onboarding';
import CallSuccessModal from './CallSuccessModal';

interface DemoCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => Promise<void>;
  isSubmitting: boolean;
  onSubmitStateChange: (state: boolean) => void;
  companyData: OnboardingData;
  onComplete: () => void;
}

const countryCodes = [
  // GCC Countries
  { code: '+973', label: 'Bahrain (BH)' },
  { code: '+965', label: 'Kuwait (KW)' },
  { code: '+968', label: 'Oman (OM)' },
  { code: '+974', label: 'Qatar (QA)' },
  { code: '+966', label: 'Saudi Arabia (SA)' },
  { code: '+971', label: 'UAE (AE)' },
  
  // Major Asian Countries
  { code: '+91', label: 'India (IN)' },
  { code: '+86', label: 'China (CN)' },
  { code: '+81', label: 'Japan (JP)' },
  { code: '+82', label: 'South Korea (KR)' },
  { code: '+65', label: 'Singapore (SG)' },
  { code: '+60', label: 'Malaysia (MY)' },
  { code: '+66', label: 'Thailand (TH)' },
  { code: '+84', label: 'Vietnam (VN)' },
  { code: '+62', label: 'Indonesia (ID)' },
  
  // North America
  { code: '+1', label: 'USA/Canada (US/CA)' },
  
  // Europe
  { code: '+44', label: 'United Kingdom (UK)' },
  { code: '+49', label: 'Germany (DE)' },
  { code: '+33', label: 'France (FR)' },
  { code: '+39', label: 'Italy (IT)' },
  { code: '+34', label: 'Spain (ES)' },
  { code: '+31', label: 'Netherlands (NL)' },
  { code: '+46', label: 'Sweden (SE)' },
  { code: '+47', label: 'Norway (NO)' },
  
  // Australia & New Zealand
  { code: '+61', label: 'Australia (AU)' },
  { code: '+64', label: 'New Zealand (NZ)' },
  
  // Other Major Countries
  { code: '+55', label: 'Brazil (BR)' },
  { code: '+52', label: 'Mexico (MX)' },
  { code: '+27', label: 'South Africa (ZA)' },
  { code: '+20', label: 'Egypt (EG)' },
  { code: '+234', label: 'Nigeria (NG)' },
  { code: '+7', label: 'Russia (RU)' },
  { code: '+90', label: 'Turkey (TR)' },
  { code: '+972', label: 'Israel (IL)' }
];

export default function DemoCallModal({ 
  isOpen, 
  onClose, 
  onSubmit, 
  isSubmitting,
  onSubmitStateChange,
  companyData,
  onComplete
}: DemoCallModalProps) {
  const [formData, setFormData] = useState<DemoCallFormData>({
    name: '',
    phone: '',
    countryCode: '+971',
    maxDuration: 2
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      onSubmitStateChange(true);
      await initiateCall({
        ...companyData,
        phone_number: `${formData.countryCode}${formData.phone}`,
        first_sentence: `Hello, am I speaking with ${formData.name}?`,
        max_duration: formData.maxDuration
      });
      setShowSuccessModal(true);
      await onSubmit();
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to initiate call');
    } finally {
      onSubmitStateChange(false);
    }
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    onClose();
    onComplete();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && !showSuccessModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={onClose}
            />
            <div className="fixed inset-0 overflow-y-auto z-50">
              <div className="min-h-full flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="w-full max-w-md bg-white rounded-2xl shadow-2xl relative"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-slate-900">Demo Call Details</h3>
                      <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Customer Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <div className="flex gap-2">
                          <select
                            value={formData.countryCode}
                            onChange={e => setFormData(prev => ({ ...prev, countryCode: e.target.value }))}
                            className="w-44 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          >
                            {countryCodes.map(country => (
                              <option key={country.code} value={country.code}>
                                {country.label}
                              </option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="duration" className="block text-sm font-medium text-slate-700 mb-2">
                          Maximum Call Duration
                        </label>
                        <select
                          id="duration"
                          value={formData.maxDuration}
                          onChange={e => setFormData(prev => ({ ...prev, maxDuration: Number(e.target.value) }))}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value={2}>2 minutes</option>
                          <option value={4}>4 minutes</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        {isSubmitting ? 'Initiating Call...' : 'Start Demo Call'}
                      </button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>

      <CallSuccessModal 
        isOpen={showSuccessModal} 
        onClose={handleSuccessModalClose} 
      />
    </>
  );
}