import React from 'react';
import { PhoneCall, ShieldCheck, Bell } from 'lucide-react';
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

const callTypes = [
  {
    id: 'sales',
    icon: <PhoneCall className="w-6 h-6" />,
    title: 'Sales',
    description: 'Product demonstrations and sales inquiries',
    available: true
  },
  {
    id: 'support',
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Support',
    description: 'Technical support and customer service',
    available: false
  },
  {
    id: 'reminder',
    icon: <Bell className="w-6 h-6" />,
    title: 'Reminder',
    description: 'Follow-ups and appointment reminders',
    available: false
  }
] as const;

export default function StepCallType({ data, updateData, onNext, onPrevious }: StepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <StepWrapper
      icon={<PhoneCall className="w-6 h-6" />}
      title="Call Type"
      description="What type of calls would you like the AI to handle?"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4">
          {callTypes.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => updateData({ callType: type.id })}
              disabled={!type.available}
              className={`flex items-center p-4 rounded-xl border-2 transition-all ${
                data.callType === type.id
                  ? 'border-blue-600 bg-blue-50'
                  : type.available 
                    ? 'border-slate-200 hover:border-blue-200'
                    : 'border-slate-100 bg-slate-50 opacity-60 cursor-not-allowed'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                data.callType === type.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {type.icon}
              </div>
              <div className="ml-4 text-left">
                <h3 className={`font-semibold ${
                  data.callType === type.id ? 'text-blue-600' : 'text-slate-900'
                }`}>
                  {type.title}
                </h3>
                <p className="text-sm text-slate-600">{type.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-600">
          <p>Only Sales calls are available in the demo. All call types are supported in the full version.</p>
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