import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SALON_DATA } from "../../data/salon";
import { ChevronRight } from 'lucide-react';

const Services = ({ gender }: { gender: 'male' | 'female' }) => {
  const currentServices = SALON_DATA.services[gender];
  const accentColor = gender === 'male' ? 'text-primary-gold' : 'text-primary-champagne';

  return (
    <section id="servicos" className="py-32 px-6 bg-primary relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={`uppercase tracking-[0.3em] text-xs font-semibold ${accentColor} mb-4 block`}
          >
            Curadoria de Estilo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-fluid-h2 font-serif font-bold text-primary-dark leading-tight"
          >
            A precisão que define <br /> a sua imagem
          </motion.h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={gender}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4"
            >
              {currentServices.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex justify-between items-center py-4 px-2 border-b border-gray-200 hover:border-primary-gold transition-all duration-500 cursor-default"
                >
                  <div className="flex flex-col">
                    <p className="font-serif text-lg text-primary-dark group-hover:text-primary-gold transition-colors duration-300">
                      {service.name}
                    </p>
                    <p className="text-xs text-gray-500 font-light tracking-wide italic opacity-70 group-hover:opacity-100 transition-opacity">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className={`font-serif font-medium text-sm ${accentColor}`}>
                      {service.price ? `R$ ${service.price}` : 'Sob consulta'}
                    </p>
                    <ChevronRight size={14} className="text-gray-300 group-hover:text-primary-gold transition-colors" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
