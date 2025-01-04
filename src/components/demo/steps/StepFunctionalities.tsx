import React from 'react';
import { Settings } from 'lucide-react';
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

export default function StepFunctionalities({ data, updateData, onNext, onPrevious }: StepProps) {
  const [newFunctionality, setNewFunctionality] = React.useState('');

  const handleAddFunctionality = () => {
    if (newFunctionality.trim()) {
      updateData({ functionalities: [...data.functionalities, newFunctionality.trim()] });
      setNewFunctionality('');
    }
  };

  const handleRemoveFunctionality = (index: number) => {
    updateData({
      functionalities: data.functionalities.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newFunctionality.trim()) {
      handleAddFunctionality();
    }
    onNext();
  };

  return (
    <StepWrapper
      icon={<Settings className="w-6 h-6" />}
      title="Key Functionalities"
      description="What are the main functionalities you want the AI agent to handle?"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="functionalities" className="block text-sm font-medium text-slate-700 mb-2">
            Functionalities
          </label>
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              value={newFunctionality}
              onChange={(e) => setNewFunctionality(e.target.value)}
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Add a functionality (e.g., Handle product inquiries)"
            />
            <button
              type="button"
              onClick={handleAddFunctionality}
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Add
            </button>
          </div>
          <div className="space-y-2">
            {data.functionalities.map((functionality, index) => (
              <div key={index} className="flex items-center justify-between bg-slate-50 p-3 rounded-lg">
                <span>{functionality}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveFunctionality(index)}
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