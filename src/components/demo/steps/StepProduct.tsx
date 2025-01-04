import React from 'react';
import { Package } from 'lucide-react';
import StepWrapper from './StepWrapper';
import { OnboardingData } from '../../../types/onboarding';

interface StepProps {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function StepProduct({ data, updateData, onNext, onPrevious }: StepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <StepWrapper
      icon={<Package className="w-6 h-6" />}
      title="Tell us about your product"
      description="What product or service would you like to promote or support?"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="productName" className="block text-sm font-medium text-slate-700 mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            value={data.productName}
            onChange={(e) => updateData({ productName: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Enter your product name"
            required
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onPrevious}
            className="px-6 py-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Next Step
          </button>
        </div>
      </form>
    </StepWrapper>
  );
}