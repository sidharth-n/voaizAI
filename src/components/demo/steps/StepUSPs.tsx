import React from 'react';
import { Star } from 'lucide-react';
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

export default function StepUSPs({ data, updateData, onNext, onPrevious }: StepProps) {
  const [newUSP, setNewUSP] = React.useState('');

  const handleAddUSP = () => {
    if (newUSP.trim()) {
      updateData({ usps: [...data.usps, newUSP.trim()] });
      setNewUSP('');
    }
  };

  const handleRemoveUSP = (index: number) => {
    updateData({
      usps: data.usps.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUSP.trim()) {
      handleAddUSP();
    }
    onNext();
  };

  return (
    <StepWrapper
      icon={<Star className="w-6 h-6" />}
      title="Unique Selling Points"
      description="What makes your product stand out from the competition?"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="usps" className="block text-sm font-medium text-slate-700 mb-2">
            USPs
          </label>
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              value={newUSP}
              onChange={(e) => setNewUSP(e.target.value)}
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Add a unique selling point"
            />
            <button
              type="button"
              onClick={handleAddUSP}
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Add
            </button>
          </div>
          <div className="space-y-2">
            {data.usps.map((usp, index) => (
              <div key={index} className="flex items-center justify-between bg-slate-50 p-3 rounded-lg">
                <span>{usp}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveUSP(index)}
                  className="text-slate-400 hover:text-red-500 transition-colors"
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