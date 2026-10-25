import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SALON_DATA } from "../../data/salon";

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="sobre" className="py-24 px-6 bg-primary overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="uppercase tracking-widest text-sm font-medium text-primary-gold mb-4 block">
              Nossa História
            </span>
            <h2 className="text-fluid-h2 font-bold text-primary-dark">
              {SALON_DATA.experience} anos transformando <br /> a autoestima em Cianorte
            </h2>
            <p className="text-fluid-body text-gray-600 leading-relaxed">
              Com mais de uma década de dedicação à arte da barbearia e do design de cabelo,
              o <span className="font-bold text-primary-dark">{SALON_DATA.name}</span> tornou-se uma referência em precisão e estilo.
            </p>
            <p className="text-fluid-body text-gray-600 leading-relaxed">
              Nosso espaço foi projetado para oferecer não apenas um serviço, mas um momento de relaxamento.
              Com espelhos de LED, bancadas de madeira e um ambiente minimalista, focamos no que realmente importa:
              o detalhe final que define a sua imagem.
            </p>
          </motion.div>

          {/* Image with Light Parallax */}
          <motion.div
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            style={{ y }}
          >
            <img
              src="/images/WhatsApp Image 2026-10-25 at 16.48.33.jpeg"
              alt="Interior Lemes Cabeleireiros"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1585747860715-217a99764773?auto=format&fit=crop&q=80&w=800';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-primary">
              <p className="font-serif italic text-xl">"A precisão é a nossa assinatura."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
