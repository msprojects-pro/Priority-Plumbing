/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass-morphism rounded-[32px] p-8 overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full text-slate-400 transition-colors"
            >
              <X size={20} />
            </button>

            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="text-white w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                <p className="text-slate-400">We'll provide your free quote within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Free Quote Request</h3>
                  <p className="text-slate-400">Please provide some details for your project.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-brand-orange transition-all"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-brand-orange transition-all"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Postcode"
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-brand-orange transition-all"
                    />
                    <select className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-brand-orange transition-all appearance-none">
                      <option>Tiling</option>
                      <option>Boiler</option>
                      <option>Heating</option>
                      <option>Bathroom</option>
                    </select>
                  </div>
                  <textarea
                    placeholder="Small description of the job..."
                    rows={3}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-brand-orange transition-all resize-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-orange hover:bg-orange-600 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <span>SEND REQUEST</span>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
