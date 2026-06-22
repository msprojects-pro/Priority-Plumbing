/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Flame, 
  Droplets, 
  Wrench, 
  ShieldAlert, 
  Layers, 
  Bath, 
  Search, 
  Thermometer, 
  Hammer 
} from 'lucide-react';

const services = [
  {
    title: 'Boiler Installation & Repairs',
    description: 'Expert fitting of energy-efficient boilers and swift repairs for all major brands.',
    icon: Flame,
  },
  {
    title: 'Central Heating Systems',
    description: 'Complete heating system design, installation, and maintenance for total comfort.',
    icon: Thermometer,
  },
  {
    title: 'Gas & LPG Work',
    description: 'Certified engineers for safe gas installations, testing, and LPG conversions.',
    icon: Droplets,
  },
  {
    title: 'Emergency Plumbing',
    description: 'Rapid response for bursts, severe leaks, and plumbing crises anytime, anywhere.',
    icon: ShieldAlert,
  },
  {
    title: 'High-End Bathroom Tiling',
    description: 'Bespoke tiling with precision patterns and luxury finishes for a designer look.',
    icon: Layers,
  },
  {
    title: 'Bathroom Renovations',
    description: 'Full-service transformation from outdated to extraordinary modern sanctuaries.',
    icon: Bath,
  },
  {
    title: 'Leak Detection & Repairs',
    description: 'Non-invasive tracking and precision fixes for hidden pipe leaks.',
    icon: Search,
  },
  {
    title: 'Radiator Installation',
    description: 'Designer radiators and towel rails installed to enhance both heat and style.',
    icon: Hammer,
  },
  {
    title: 'General Plumbing',
    description: 'Reliable everyday fixes for taps, toilets, and drains with no job too small.',
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent underline decoration-brand-orange/50 underline-offset-8 font-display text-4xl md:text-5xl font-bold mb-6">Expert Solutions</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We provide a comprehensive range of professional plumbing, heating, and tiling services tailored to the highest standards.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl glass card-hover transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <service.icon className="w-24 h-24 text-brand-orange/5 -mr-8 -mt-8" />
              </div>

              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-brand-orange w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-orange transition-colors uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-[13px] uppercase tracking-wider">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
