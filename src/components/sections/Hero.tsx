import React from 'react';
import { motion } from 'framer-motion';
import { SALON_DATA } from "../../data/salon";
import { MessageCircle, ChevronRight } from 'lucide-react';

const Hero = ({ gender }: { gender: 'male' | 'female' }) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700 ${gender === 'male' ? 'bg-primary' : 'bg-[#FDFBFB]'}`}>
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        {/* Overlay: Ajustado para a foto real da fachada */}
        <div className={`absolute inset-0 z-10 transition-colors duration-700 bg-gradient-to-b from-black/70 via-black/30 to-transparent ${gender === 'female' ? 'via-primary-gold/20' : ''}`} />

        <motion.img
          src="/images/fachada.webp.jpeg"
          alt="Fachada Lemes Cabeleireiros"
          className="w-full h-full object-cover animate-ken-burns opacity-90 brightness-90"
          onError={(e) => {
            e.currentTarget.src = gender === 'male'
              ? 'https://images.unsplash.com/photo-1503951906028-ed477ca9766f?auto=format&fit=crop&q=80&w=1920'
              : 'https://images.unsplash.com/photo-1562322140-7575ef56a7ec?auto=format&fit=crop&q=80&w=1920';
          }}
        />
      </div>

      <div className={`container mx-auto px-6 relative z-20 text-center transition-colors duration-700 ${gender === 'male' ? 'text-primary' : 'text-primary-dark'}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-fluid-h1 font-bold leading-tight"
            >
              Estilo e precisão em <br /> cada detalhe
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-fluid-body opacity-90 mb-10 max-w-xl mx-auto font-light tracking-wide"
          >
            {SALON_DATA.positioning} <br />
            <span className="italic font-serif"> {SALON_DATA.experience} anos de excelência.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href={`https://wa.me/${SALON_DATA.whatsapp}?text=${encodeURIComponent(SALON_DATA.whatsappMessage)}`}
              className="btn-premium bg-primary-gold text-white w-full sm:w-auto px-10 py-4 text-lg flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Dúvidas no WhatsApp
              <MessageCircle size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#servicos"
              className="btn-premium bg-white/10 backdrop-blur-md text-inherit border border-white/20 w-full sm:w-auto px-10 py-4 text-lg flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Serviços
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary opacity-60"
      >
        <span className="text-xs uppercase tracking-widest">Descubra</span>
        <div className="w-[1px] h-12 bg-primary relative overflow-hidden">
          <motion.div
            animate={{ y: ['0%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary-gold"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
