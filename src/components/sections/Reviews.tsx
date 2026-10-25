import React from 'react';
import { motion } from 'framer-motion';
import { Marquee } from '../ui/3d-testimonails';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  { name: "Gabe", body: "Muito bom, recomendo para todos!", rating: 5, img: "" },
  { name: "Evandro De Oliveira", body: "Show de bola, sempre corto o cabelo aqui. Corte de qualidade.", rating: 5, img: "" },
  { name: "Flávio", body: "Gostei muito! Recomendo!", rating: 5, img: "" },
  { name: "Ricardo S.", body: "O melhor degradê de Cianorte. Atenção aos detalhes impressionante.", rating: 5, img: "" },
  { name: "Mariana L.", body: "Espaço feminino maravilhoso. A hidratação deixou meu cabelo incrível!", rating: 5, img: "" },
  { name: "Carlos M.", body: "Ambiente limpo, moderno e atendimento de primeira. Recomendo!", rating: 5, img: "" },
];

function TestimonialCard({ img, name, body, rating }: (typeof testimonials)[number]) {
  return (
    <Card className="w-64 bg-white border-gray-100 shadow-sm transition-transform duration-300 hover:scale-105">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="size-8 border-2 border-primary-gold">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback className="bg-primary-dark text-white">{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-primary-dark">{name}</span>
            <div className="flex gap-0.5 text-primary-gold">
              {[...Array(rating)].map((_, i) => <Star key={i} fill="currentColor" size={8} />)}
            </div>
          </div>
        </div>
        <blockquote className="text-xs text-gray-600 italic leading-relaxed">
          "{body}"
        </blockquote>
      </CardContent>
    </Card>
  );
}

const Reviews = () => {
  return (
    <section id="avaliacoes" className="py-24 px-6 bg-primary overflow-hidden">
      <div className="container mx-auto text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="uppercase tracking-widest text-sm font-medium text-primary-gold mb-4 block"
        >
          Reputação
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-fluid-h2 font-bold text-primary-dark"
        >
          Aprovados por quem confia
        </motion.h2>
      </div>

      {/* 3D Container - Altura Controlada e Largura Equilibrada */}
      <div className="relative flex items-center justify-center overflow-hidden [perspective:1000px] max-w-5xl mx-auto -mt-20 h-[600px]">
        <div
          className="flex flex-row items-center justify-center gap-8"
          style={{
            transform: 'rotateX(20deg) rotateY(-10deg) rotateZ(10deg) scale(1)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Coluna 1: Sobe */}
          <Marquee vertical pauseOnHover repeat={2} className="[--duration:30s]">
            {testimonials.map((review, i) => (
              <TestimonialCard key={`col1-${i}`} {...review} />
            ))}
          </Marquee>

          {/* Coluna 2: Desce (Reverse) */}
          <Marquee vertical reverse pauseOnHover repeat={2} className="[--duration:30s]">
            {testimonials.map((review, i) => (
              <TestimonialCard key={`col2-${i}`} {...review} />
            ))}
          </Marquee>

          {/* Coluna 3: Sobe */}
          <Marquee vertical pauseOnHover repeat={2} className="[--duration:30s]">
            {testimonials.map((review, i) => (
              <TestimonialCard key={`col3-${i}`} {...review} />
            ))}
          </Marquee>
        </div>

        {/* Overlay de Gradientes para fechar as bordas suavemente */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-10" />
      </div>

      {/* Google Review CTA */}
      <div className="mt-16 text-center">
        <motion.a
          href="https://share.google/jlrtW2kYJ8R3wgnq0"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white text-primary-dark text-sm font-bold uppercase tracking-widest hover:bg-primary-gold hover:text-white transition-all duration-300 shadow-sm border border-gray-200"
        >
          <Star fill="currentColor" size={16} className="text-primary-gold group-hover:text-white" />
          Avalie-nos no Google
        </motion.a>
      </div>
    </section>
  );
};

export default Reviews;
