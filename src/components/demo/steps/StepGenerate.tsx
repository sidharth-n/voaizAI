import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import StepWrapper from './StepWrapper';
import { OnboardingData } from '../../../types/onboarding';
import DemoCallModal from '../DemoCallModal';

interface StepProps {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
  onComplete: () => void;
}

export default function StepGenerate({ data, onPrevious, onComplete }: StepProps) {
  const [showCallModal, setShowCallModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <StepWrapper
      icon={<Sparkles className="w-6 h-6" />}
      title="Generate Your AI Call Agent"
      description="Review your configuration and generate your AI call agent"
    >
      <div className="space-y-6">
        <div className="bg-slate-50 rounded-xl p-6 space-y-4">
          <div>
            <h4 className="font-medium text-slate-900">Company</h4>
            <p className="text-slate-600">{data.companyName}</p>
          </div>
          <div>
            <h4 className="font-medium text-slate-900">Product</h4>
            <p className="text-slate-600">{data.productName}</p>
          </div>
          <div>
            <h4 className="font-medium text-slate-900">Features</h4>
            <ul className="list-disc list-inside text-slate-600">
              {data.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-900">USPs</h4>
            <ul className="list-disc list-inside text-slate-600">
              {data.usps.map((usp, index) => (
                <li key={index}>{usp}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-900">Functionalities</h4>
            <ul className="list-disc list-inside text-slate-600">
              {data.functionalities.map((functionality, index) => (
                <li key={index}>{functionality}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-slate-900">Language</h4>
              <p className="text-slate-600">{data.language}</p>
            </div>
            <div>
              <h4 className="font-medium text-slate-900">Call Type</h4>
              <p className="text-slate-600">{data.callType}</p>
            </div>
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
            type="button"
            onClick={() => setShowCallModal(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Make Demo Call
          </button>
        </div>
      </div>

      <DemoCallModal
        isOpen={showCallModal}
        onClose={() => setShowCallModal(false)}
        onSubmit={async () => {
          // Don't close the modal or complete immediately
          // Let the success modal handle that
        }}
        isSubmitting={isSubmitting}
        onSubmitStateChange={setIsSubmitting}
        companyData={data}
        onComplete={onComplete}
      />
    </StepWrapper>
  );
}