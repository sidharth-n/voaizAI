import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ReactNode;
}

export default function StatCard({ title, value, subtitle, icon }: StatCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-blue-600">{value}</span>
            {subtitle && (
              <span className="ml-1 text-slate-600">{subtitle}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}