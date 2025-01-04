import React from 'react';
import { motion } from 'framer-motion';
import OnboardingFlow from '../components/demo/OnboardingFlow';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function DemoPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10"
        >
          <OnboardingFlow onComplete={() => navigate('/')} />
        </motion.div>
      </div>
    </div>
  );
}