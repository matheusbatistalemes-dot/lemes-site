import React from 'react';
import { SALON_DATA } from "../../data/salon";
import { Instagram, Facebook, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary py-12 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2">{SALON_DATA.name}</h3>
            <p className="text-primary/60 text-sm max-w-xs">
              A excelência em corte e barba no coração de Cianorte-PR.
            </p>
          </div>

          <div className="flex gap-6">
            <a href={`https://instagram.com/${SALON_DATA.instagram.replace('@', '')}`} target="_blank" className="text-primary/60 hover:text-primary-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-primary/60 hover:text-primary-gold transition-colors">
              <Facebook size={20} />
            </a>
            <a href={`https://wa.me/${SALON_DATA.whatsapp}`} target="_blank" className="text-primary/60 hover:text-primary-gold transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>

          <div className="text-primary/40 text-xs tracking-widest">
            © {new Date().getFullYear()} {SALON_DATA.name}. <br />
            Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

import { MessageCircle } from 'lucide-react';

export default Footer;
