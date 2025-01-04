import React from 'react';
import { Globe2, Lock } from 'lucide-react';
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

const languages = [
  { name: 'English', available: true },
  { name: 'Spanish', available: false },
  { name: 'French', available: false },
  { name: 'German', available: false },
  { name: 'Chinese', available: false },
  { name: 'Japanese', available: false },
  { name: 'Korean', available: false },
  { name: 'Arabic', available: false },
  { name: 'Hindi', available: false }
];

export default function StepLanguage({ data, updateData, onNext, onPrevious }: StepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <StepWrapper
      icon={<Globe2 className="w-6 h-6" />}
      title="Choose Language"
      description="Select the primary language for your AI agent"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {languages.map((language) => (
            <button
              key={language.name}
              type="button"
              onClick={() => updateData({ language: language.name })}
              disabled={!language.available}
              className={`relative p-4 rounded-lg border-2 transition-all ${
                data.language === language.name
                  ? 'border-blue-600 bg-blue-50 text-blue-600'
                  : language.available
                    ? 'border-slate-200 hover:border-blue-200'
                    : 'border-slate-100 bg-slate-50 opacity-60 cursor-not-allowed'
              }`}
            >
              {!language.available && (
                <Lock className="absolute top-2 right-2 w-4 h-4 text-slate-400" />
              )}
              {language.name}
            </button>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-600">
          <p>Only English is available in the demo. All languages are supported in the full version.</p>
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