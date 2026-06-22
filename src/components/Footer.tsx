/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { COMPANY_INFO } from '../types';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-brand-orange bg-white flex items-center justify-center">
                <span className="text-brand-dark font-display font-bold text-sm">PP</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-none text-white">PRIORITY</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-orange font-semibold">Plumbing & Heating</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Serving Chesterfield with elite plumbing and high-end bathroom tiling solutions. Quality and reliability is our priority.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-brand-orange transition-colors">Our Work</a></li>
              <li><a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Our Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>High-End Bathroom Tiling</li>
              <li>Boiler Installation</li>
              <li>Emergency Plumbing</li>
              <li>Gas & LPG Systems</li>
              <li>Bathroom Renovations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Availability</h4>
            <p className="text-slate-400 text-sm mb-4">Always Open for your convenience and emergency needs in Chesterfield.</p>
            <div className="p-4 rounded-2xl bg-brand-orange/5 border border-brand-orange/20">
              <p className="text-brand-orange font-bold text-lg">{COMPANY_INFO.phone}</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest">24/7 Priority Support</p>
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-slate-500 text-xs">
          <p>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
