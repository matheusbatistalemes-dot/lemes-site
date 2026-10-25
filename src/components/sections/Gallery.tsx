import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

const GALLERY_DATA = [
  { id: 1, category: 'Cortes', url: '/images/cut1.webp', alt: 'Corte degradê moderno' },
  { id: 2, category: 'Barba', url: '/images/beard1.webp', alt: 'Barba alinhada com navalha' },
  { id: 3, category: 'Coloração', url: '/images/color1.webp', alt: 'Platinado premium' },
  { id: 4, category: 'Ambiente', url: '/images/env1.webp', alt: 'Interior do salão Lemes' },
  { id: 5, category: 'Cortes', url: '/images/cut2.webp', alt: 'Corte masculino social' },
  { id: 6, category: 'Barba', url: '/images/beard2.webp', alt: 'Design de barba' },
  { id: 7, category: 'Coloração', url: '/images/color2.webp', alt: 'Coloração feminina' },
  { id: 8, category: 'Ambiente', url: '/images/env2.webp', alt: 'Bancadas com LED' },
];

const Gallery = () => {
  const [filter, setFilter] = useState('Todos');
  const [selectedImg, setSelectedImg] = useState<null | string>(null);

  const categories = ['Todos', 'Cortes', 'Barba', 'Coloração', 'Ambiente'];
  const filteredImages = filter === 'Todos'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(img => img.category === filter);

  return (
    <section id="galeria" className="py-24 px-6 bg-primary-dark text-primary overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="uppercase tracking-widest text-sm font-medium text-primary-gold mb-4 block"
          >
            Portfólio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-fluid-h2 font-bold"
          >
            Arte em cada fio
          </motion.h2>
        </div>

        {/* Filter Buttons - Taste Skill: Discrete Refinement */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border ${
                filter === cat
                ? 'bg-primary-gold border-primary-gold text-white'
                : 'border-white/20 text-primary hover:border-primary-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid - Impeccable Skill: Perfect Spacing */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((img) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
                onClick={() => setSelectedImg(img.url)}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/seed/${img.id + 10}/600`;
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize2 className="text-white" size={24} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-16">
          <a
            href="https://instagram.com/lemes_cabeleireiros"
            target="_blank"
            className="btn-premium border border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-white transition-all"
          >
            Ver mais no Instagram
          </a>
        </div>
      </div>

      {/* Lightbox - Impeccable Skill: Precision Motion */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-xl"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-white p-2 hover:rotate-90 transition-transform duration-300"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImg}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
