import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOnboarding } from '../../hooks/useOnboarding';
import { OnboardingStep } from '../../types/onboarding';
import StepCompany from './steps/StepCompany';
import StepProduct from './steps/StepProduct';
import StepFeatures from './steps/StepFeatures';
import StepUSPs from './steps/StepUSPs';
import StepFunctionalities from './steps/StepFunctionalities';
import StepLanguage from './steps/StepLanguage';
import StepCallType from './steps/StepCallType';
import StepNumber from './steps/StepNumber';
import StepAgent from './steps/StepAgent';
import StepGenerate from './steps/StepGenerate';

interface OnboardingFlowProps {
  onComplete: () => void;
}

const steps: OnboardingStep[] = [
  'company',
  'product',
  'features',
  'usps',
  'functionalities',
  'language',
  'callType',
  'number',
  'agent',
  'generate'
];

export default function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const { data, updateData } = useOnboarding();

  const goToNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const renderStep = () => {
    const step = steps[currentStepIndex];
    const commonProps = {
      data,
      updateData,
      onNext: goToNext,
      onPrevious: goToPrevious,
      isFirst: currentStepIndex === 0,
      isLast: currentStepIndex === steps.length - 1,
      onComplete
    };

    switch (step) {
      case 'company':
        return <StepCompany {...commonProps} />;
      case 'product':
        return <StepProduct {...commonProps} />;
      case 'features':
        return <StepFeatures {...commonProps} />;
      case 'usps':
        return <StepUSPs {...commonProps} />;
      case 'functionalities':
        return <StepFunctionalities {...commonProps} />;
      case 'language':
        return <StepLanguage {...commonProps} />;
      case 'callType':
        return <StepCallType {...commonProps} />;
      case 'number':
        return <StepNumber {...commonProps} />;
      case 'agent':
        return <StepAgent {...commonProps} />;
      case 'generate':
        return <StepGenerate {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="h-1 bg-slate-100 rounded-full overflow-hidden mb-6">
        <motion.div
          className="h-full bg-blue-600"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="text-sm text-slate-500 mb-8">
        Step {currentStepIndex + 1} of {steps.length}
      </div>

      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStepIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}