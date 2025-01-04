import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X, Mail, MessageCircle } from 'lucide-react';

interface CallSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallSuccessModal({ isOpen, onClose }: CallSuccessModalProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hey, I would like to know more about Voaiz AI');
    window.open(`https://wa.me/918281505609?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:sales@voaiz.com';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <div className="fixed inset-0 overflow-y-auto z-50">
            <div className="min-h-full flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-md bg-white rounded-2xl shadow-2xl relative"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-6">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Call Initiated Successfully!</h3>
                    <p className="text-slate-600">Want to learn more about how Voaiz AI can help your business?</p>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Chat on WhatsApp
                    </button>
                    <button
                      onClick={handleEmailClick}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      Contact via Email
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}