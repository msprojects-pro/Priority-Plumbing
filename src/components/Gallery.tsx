/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const galleryItems = [
  {
    id: 1,
    title: 'Luxury Tiling',
    category: 'High-End Finish',
    url: '/src/assets/images/premium_tiling_detail_1782143578853.jpg',
    width: 'col-span-2 row-span-2'
  },
  {
    id: 2,
    title: 'Modern Bathroom',
    category: 'Renovation',
    url: '/src/assets/images/luxury_bathroom_hero_1782143559311.jpg',
    width: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    title: 'Precision Fitting',
    category: 'Plumbing',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    width: 'col-span-1 row-span-1'
  },
  {
    id: 4,
    title: 'Boiler Installation',
    category: 'Heating',
    url: 'https://images.unsplash.com/photo-1621905252507-b354bcadc0e9?auto=format&fit=crop&q=80&w=800',
    width: 'col-span-1 row-span-2'
  },
  {
    id: 5,
    title: 'Designer Finish',
    category: 'Tiling',
    url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800',
    width: 'col-span-1 row-span-1'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-brand-gray/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Our Craftsmanship</h2>
            <p className="text-slate-400 text-lg">
              A showcase of our recent bathroom renovations, tiling projects, and technical installations across Chesterfield.
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-brand-orange text-brand-orange font-bold hover:bg-brand-orange hover:text-white transition-all shadow-lg shadow-brand-orange/10"
          >
            FOLLOW ON INSTAGRAM
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-[40px] ${item.width} bg-slate-900 border border-white/10`}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-2">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
