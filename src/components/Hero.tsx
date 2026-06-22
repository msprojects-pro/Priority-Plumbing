/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../types';

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full flex items-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8 relative z-10"
        >
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-brand-orange/20 text-brand-orange border border-brand-orange/30 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Chesterfield, UK
            </span>
            <h2 className="text-5xl md:text-8xl font-extrabold leading-[0.9] tracking-tighter text-white accent-glow">
              EXCELLENCE <br /> IS OUR <br />
              <span className="text-brand-orange">PRIORITY.</span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-md">
            Professional plumbing, heating, and bespoke high-end tiling for premium bathroom renovations. Quality and reliability are our core priorities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onQuoteClick}
              className="bg-brand-orange hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold uppercase text-sm transition-all hover:scale-105 shadow-[0_0_30px_rgba(249,115,22,0.4)]"
            >
              Get a Free Quote
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="glass px-8 py-4 rounded-xl font-bold uppercase text-sm text-white hover:border-brand-orange transition-all flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Image with Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[480px] lg:h-[600px] w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark to-transparent rounded-[40px] z-10" />
          <div className="absolute inset-0 border-2 border-white/10 rounded-[40px]" />
          
          {/* Status Badge */}
          <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl z-20 shadow-2xl flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/20 flex items-center justify-center rounded-full text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-tighter">Status</p>
              <p className="text-lg font-bold text-white uppercase leading-none">Available Now</p>
            </div>
          </div>

          <div className="w-full h-full bg-slate-800 rounded-[40px] overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center opacity-70" 
              style={{ backgroundImage: "url('/src/assets/images/luxury_bathroom_hero_1782143559311.jpg')" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
