import React from 'react';
import { motion } from 'framer-motion';
import { SALON_DATA } from "../../data/salon";
import { MapPin, Phone, Instagram, MessageCircle, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-24 px-6 bg-primary-dark text-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info and Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-fluid-h2 font-bold mb-6">Onde estamos</h2>
              <p className="text-primary/70 text-fluid-body mb-8 leading-relaxed">
                Visite-nos para uma experiência de cuidado completa. <br />
                Estamos localizados no coração de Cianorte.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary-gold shrink-0" />
                  <p className="text-primary/80">{SALON_DATA.address}</p>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-primary-gold shrink-0" />
                  <p className="text-primary/80">{SALON_DATA.whatsapp}</p>
                </div>
                <div className="flex items-start gap-4">
                  <Instagram className="text-primary-gold shrink-0" />
                  <p className="text-primary/80">{SALON_DATA.instagram}</p>
                </div>
              </div>
            </div>

            {/* Map Embed - Fixed Professional Version */}
            <div className="relative h-80 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10 shadow-2xl group">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(SALON_DATA.address)}&output=embed`}
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                title="Lemes Cabeleireiros Location"
              />
              {/* Fallback Overlay - Removed opacity from main container to fix "black" look */}
              <div className="absolute inset-0 pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
                <div className="absolute inset-0 bg-primary-dark/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary-dark/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                    <p className="text-xs opacity-80 italic text-white">Clique para explorar no Google Maps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours & Actions */}
          <div className="bg-primary text-primary-dark p-10 rounded-3xl shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="text-primary-gold" />
                <h3 className="text-2xl font-serif font-bold">Horários</h3>
              </div>

              <div className="space-y-3 mb-10">
                {Object.entries(SALON_DATA.businessHours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between items-center text-sm border-b border-gray-200 pb-2">
                    <span className="capitalize font-medium">{day === 'monday' ? 'Segunda' : day === 'tuesday' ? 'Terça' : day === 'wednesday' ? 'Quarta' : day === 'thursday' ? 'Quinta' : day === 'friday' ? 'Sexta' : day === 'saturday' ? 'Sábado' : 'Domingo'}</span>
                    <span className="text-gray-500">{hours.open ? `${hours.open} - ${hours.close}` : 'Fechado'}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 relative z-10">
              <a
                href={`https://wa.me/${SALON_DATA.whatsapp}?text=${encodeURIComponent(SALON_DATA.whatsappMessage)}`}
                className="btn-premium bg-primary-dark text-primary py-4 flex items-center justify-center gap-2 hover:bg-primary-graphite transition-all"
              >
                <MessageCircle size={20} /> Chamar no WhatsApp
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SALON_DATA.address)}`}
                className="btn-premium border border-primary-dark text-primary-dark py-4 flex items-center justify-center gap-2 hover:bg-primary-dark hover:text-primary transition-all"
              >
                <MapPin size={20} /> Como chegar
              </a>
            </div>

            {/* Decorative Background Circle */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-gold/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
