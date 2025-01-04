import React from 'react';
import { Bot, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" 
             style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(59 130 246 / 0.05)\'%3E%3Cpath d=\'M0 .5H31.5V32\'/%3E%3C/svg%3E")' }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              AI-Powered Customer Interactions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Conversations{' '}
              <span className="relative">
                Reimagined
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200/30 -rotate-1"></div>
              </span>
              ,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Connections Amplified
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your customer interactions with our intelligent AI-powered platform.
              Available 24/7, handling multiple languages and emotions with consistent
              professionalism.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button
                onClick={() => navigate('/demo')}
                className="group inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                Try Demo 
                <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-200 transform hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                <img
                  src="https://richinnovationsplc.com/wp-content/uploads/2024/12/voaiz.com_.png"
                  alt="AI Communication Platform"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="text-blue-600 font-bold text-xl">24/7</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}