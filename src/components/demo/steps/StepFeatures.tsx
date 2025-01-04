import React from 'react';
import { ListChecks } from 'lucide-react';
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

export default function StepFeatures({ data, updateData, onNext, onPrevious }: StepProps) {
  const [newFeature, setNewFeature] = React.useState('');

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      updateData({ features: [...data.features, newFeature.trim()] });
      setNewFeature('');
    }
  };

  const handleRemoveFeature = (index: number) => {
    updateData({
      features: data.features.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newFeature.trim()) {
      handleAddFeature();
    }
    onNext();
  };

  return (
    <StepWrapper
      icon={<ListChecks className="w-6 h-6" />}
      title="Product Features & Details"
      description="List the key features and provide detailed information about your product"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="productDetails" className="block text-sm font-medium text-slate-700 mb-2">
            Product Details
          </label>
          <textarea
            id="productDetails"
            value={data.productDetails}
            onChange={(e) => updateData({ productDetails: e.target.value })}
            placeholder="Provide detailed information about your product, including its purpose, target audience, pricing, and any other relevant details that would help our AI agent better understand and represent your product."
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-h-[120px]"
            required
          />
        </div>

        <div>
          <label htmlFor="features" className="block text-sm font-medium text-slate-700 mb-2">
            Key Features
          </label>
          <div className="flex flex-col space-y-4 mb-4">
            <textarea
              value={newFeature}
              onChange={(e) => setNewFeature(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-h-[120px]"
              placeholder="Enter your feature here. You can paste multiple lines of text."
            />
            <button
              type="button"
              onClick={handleAddFeature}
              className="self-end px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Feature
            </button>
          </div>
          <div className="space-y-2 max-h-[300px] overflow-y-auto">
            {data.features.map((feature, index) => (
              <div key={index} className="flex items-center justify-between bg-slate-50 p-3 rounded-lg">
                <span className="mr-4 flex-1">{feature}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveFeature(index)}
                  className="text-slate-400 hover:text-red-500 transition-colors p-1"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
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