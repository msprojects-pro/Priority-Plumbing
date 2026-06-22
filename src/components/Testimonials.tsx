/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner in Chesterfield",
    content: "Priority Plumbing transformed our dated bathroom into a luxury spa. The tiling work is absolutely flawless. Highly recommend their professional approach!",
    rating: 5
  },
  {
    name: "Mark Thompson",
    role: "Property Developer",
    content: "I've used them for several boiler installations now. Reliable, efficient, and they always leave the site spotless. The best in Chesterfield.",
    rating: 5
  },
  {
    name: "Emma Wright",
    role: "Local Resident",
    content: "Called for an emergency leak on a Sunday and they were here within the hour. Professional service at a fair price. Life savers!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
          <div className="flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-brand-orange text-brand-orange" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[40px] glass card-hover relative group"
            >
              <Quote className="absolute top-8 right-8 text-brand-orange/5 w-12 h-12 transition-transform group-hover:scale-110" />
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed">
                "{t.content}"
              </p>
              <div>
                <h4 className="text-white font-bold">{t.name}</h4>
                <p className="text-slate-500 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
