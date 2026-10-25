import React, { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Reviews from './components/sections/Reviews';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import SEO from './components/seo/SEO';
import { SALON_DATA } from './data/salon';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

function App() {
  const [view, setView] = useState<'male' | 'female'>('male');

  return (
    <div className={`min-h-screen transition-colors duration-1000 ease-in-out ${view === 'male' ? 'bg-primary' : 'bg-[#FDFBFB]'}`}>
      <SEO />
      <Header currentView={view} setView={setView} />
      <main>
        <Hero gender={view} />
        <Services gender={view} />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />

      {/* Mobile Bottom Bar - Fixed with Premium Glassmorphism */}
      <div className="fixed bottom-0 left-0 w-full bg-white/70 backdrop-blur-xl border-t border-primary-gold/30 z-40 md:hidden safe-area-bottom shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around py-3 px-4">
          <a
            href={`https://wa.me/${SALON_DATA.whatsapp}?text=${encodeURIComponent(SALON_DATA.whatsappMessage)}`}
            className="flex flex-col items-center gap-1 text-primary-dark hover:text-primary-gold transition-colors"
            aria-label="Enviar mensagem no WhatsApp"
          >
            <MessageCircle size={24} className="text-primary-gold" />
            <span className="text-[10px] uppercase font-bold tracking-tighter">Dúvidas</span>
          </a>
          <a
            href={`tel:${SALON_DATA.whatsapp}`}
            className="flex flex-col items-center gap-1 text-primary-dark hover:text-primary-gold transition-colors"
            aria-label="Ligar para o salão"
          >
            <Phone size={24} className="text-primary-gold" />
            <span className="text-[10px] uppercase font-bold tracking-tighter">Ligar</span>
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SALON_DATA.address)}`}
            className="flex flex-col items-center gap-1 text-primary-dark hover:text-primary-gold transition-colors"
            aria-label="Abrir localização no Maps"
          >
            <MapPin size={24} className="text-primary-gold" />
            <span className="text-[10px] uppercase font-bold tracking-tighter">Chegar</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
