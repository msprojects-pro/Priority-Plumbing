/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../types';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center ${
        isScrolled ? 'glass shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center font-bold text-xl text-white">
            P
          </div>
          <div className="leading-none">
            <h1 className="text-lg font-bold tracking-tight text-white uppercase">Priority</h1>
            <p className="text-[10px] tracking-widest text-brand-orange uppercase font-semibold">Plumbing & Heating</p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-medium uppercase tracking-widest">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center space-x-2 bg-brand-orange hover:bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-orange/20"
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span>GET A QUOTE</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-6 flex flex-col space-y-4 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-brand-orange py-2 border-b border-slate-800/50"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center space-x-2 bg-brand-orange text-white py-4 rounded-xl font-bold shadow-lg shadow-brand-orange/20"
            >
              <Phone size={20} />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
