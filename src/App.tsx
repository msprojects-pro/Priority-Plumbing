/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import { COMPANY_INFO } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen gradient-bg selection:bg-brand-orange/30 selection:text-brand-orange">
      <Navbar />
      
      <main>
        <Hero onQuoteClick={() => setIsQuoteModalOpen(true)} />
        
        {/* About Section */}
        <section id="about" className="py-24 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1620626011761-9963fb79494e?auto=format&fit=crop&q=80&w=1200" 
                  alt="Quality Workmanship"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl hidden md:block shadow-2xl">
                <span className="text-brand-orange text-4xl font-bold block mb-1 accent-glow">15+</span>
                <span className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold">Years of Experience</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Premium Craftsmanship</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Quality & Reliability is <br />
                <span className="text-brand-orange italic">Our Priority.</span>
              </h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  Based in Chesterfield, Priority Plumbing and Heating is built on a foundation of professional excellence and customer trust. We don't just fix pipes; we create beautiful, functional spaces that stand the test of time.
                </p>
                <p>
                  Whether it's a critical heating repair on a cold winter night or a complete high-end bathroom tiling project, we bring the same level of precision and dedication to every task.
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    'Gas Safe Registered Professionals',
                    'High-End Luxury Finishes',
                    'Transparent, Honest Pricing',
                    '24/7 Emergency Support'
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3 text-white font-medium">
                      <div className="w-2 h-2 rounded-full bg-brand-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Floating Call Button for Mobile */}
      <AnimatePresence>
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          href={`tel:${COMPANY_INFO.phone}`}
          className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(249,115,22,0.4)] active:scale-95 transition-transform md:hidden"
        >
          <Phone fill="white" size={28} />
        </motion.a>
      </AnimatePresence>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
}
