import React from 'react';
import { Users } from 'lucide-react';
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

const agents = [
  {
    id: 'sauphy',
    name: 'Sauphy',
    role: 'Senior Sales Specialist',
    description: 'Experienced in B2B sales with a warm, professional demeanor',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    available: true
  },
  {
    id: 'alex',
    name: 'Alex',
    role: 'Technical Support Lead',
    description: 'Expert in resolving complex technical queries',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    available: false,
    comingSoon: 'Coming soon: Technical support specialist'
  },
  {
    id: 'maya',
    name: 'Maya',
    role: 'Customer Success Manager',
    description: 'Specializes in relationship building and customer retention',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    available: false,
    comingSoon: 'Coming soon: Customer success expert'
  },
  {
    id: 'james',
    name: 'James',
    role: 'Product Specialist',
    description: 'Deep knowledge of product features and implementations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    available: false,
    comingSoon: 'Coming soon: Product demonstration specialist'
  }
];

export default function StepAgent({ data, updateData, onNext, onPrevious }: StepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <StepWrapper
      icon={<Users className="w-6 h-6" />}
      title="Select Your AI Agent"
      description="Choose the AI agent that best fits your needs"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4">
          {agents.map((agent) => (
            <button
              key={agent.id}
              type="button"
              onClick={() => updateData({ selectedAgent: agent.id })}
              disabled={!agent.available}
              className={`flex items-center p-4 rounded-xl border-2 transition-all ${
                data.selectedAgent === agent.id
                  ? 'border-blue-600 bg-blue-50'
                  : agent.available 
                    ? 'border-slate-200 hover:border-blue-200'
                    : 'border-slate-100 bg-slate-50 opacity-60 cursor-not-allowed'
              }`}
            >
              <img 
                src={agent.image} 
                alt={agent.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4 text-left">
                <h3 className={`font-semibold ${
                  data.selectedAgent === agent.id ? 'text-blue-600' : 'text-slate-900'
                }`}>
                  {agent.name}
                </h3>
                <p className="text-sm text-slate-600">{agent.role}</p>
                <p className="text-sm text-slate-500">{agent.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-600">
          <p className="font-medium ">All the agents are available in the full version.</p>
         
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