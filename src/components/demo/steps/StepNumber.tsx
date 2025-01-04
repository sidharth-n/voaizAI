import React from 'react';
import { Hash } from 'lucide-react';
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

export default function StepNumber({ data, updateData, onNext, onPrevious }: StepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  // Only set the number of calls to 1 when the component mounts
  React.useEffect(() => {
    if (data.numberOfCalls !== 1) {
      updateData({ numberOfCalls: 1 });
    }
  }, []); // Empty dependency array means this only runs once on mount

  return (
    <StepWrapper
      icon={<Hash className="w-6 h-6" />}
      title="Number of Calls"
      description="How many concurrent calls would you like to simulate?"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="numberOfCalls" className="block text-sm font-medium text-slate-700 mb-2">
            Number of Concurrent Calls
          </label>
          <input
            type="number"
            id="numberOfCalls"
            value={1}
            disabled
            className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-slate-50 cursor-not-allowed"
          />
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-600">
          <p>Demo is limited to 1 concurrent call. Unlimited concurrent calls available in the full version.</p>
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