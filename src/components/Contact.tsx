/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../types';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Contact form submitted');
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Let's Talk</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Whether it's a leaky tap or a dream bathroom renovation, we're here to help. Get in touch for a free, no-obligation quote.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Phone, label: 'Call Us', value: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone}` },
                { icon: Mail, label: 'Email Us', value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
                { icon: MapPin, label: 'Visit Us', value: COMPANY_INFO.location, href: '#' },
              ].map((item) => (
                <div key={item.label} className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center flex-shrink-0 group hover:border-brand-orange transition-colors">
                    <item.icon className="text-brand-orange w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                    <a href={item.href} className="text-xl font-medium text-white hover:text-brand-orange transition-colors font-display">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Social Connect</p>
              <div className="flex space-x-4">
                <a 
                  href={`https://instagram.com/${COMPANY_INFO.instagram}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-orange hover:border-brand-orange transition-all"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-all font-bold"
                >
                  <span className="text-lg">f</span>
                </a>
                <a 
                  href={`https://tiktok.com/@${COMPANY_INFO.tiktok}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all font-bold"
                >
                  <span className="text-xs">TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[40px] glass shadow-2xl relative"
          >
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-brand-gray/95 backdrop-blur-sm rounded-[40px] z-20 flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-green-500 w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-slate-400 max-w-sm">
                  Thank you for reaching out. We've received your inquiry and will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-brand-orange font-bold uppercase tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Your Full Name"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="Your Email Address"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/20 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">Service Needed</label>
                <select className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange transition-all appearance-none">
                  <option>Emergency Plumbing</option>
                  <option>Bathroom Renovation</option>
                  <option>Boiler Installation</option>
                  <option>Tiling Project</option>
                  <option>General Maintenance</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/20 transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-orange hover:bg-orange-600 text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-brand-orange/20 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center space-x-3"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <span>SEND MESSAGE</span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
