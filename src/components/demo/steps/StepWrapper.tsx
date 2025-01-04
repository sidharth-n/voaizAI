import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StepWrapperProps {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
}

export default function StepWrapper({ icon, title, description, children }: StepWrapperProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-start space-x-4 mb-10">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}