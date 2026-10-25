import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Phone, MapPin, MessageCircle, Instagram, ChevronRight } from 'lucide-react';
import { SALON_DATA } from "../../data/salon";

const Header = ({ currentView, setView }: { currentView: 'male' | 'female', setView: (v: 'male' | 'female') => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-primary-dark/80 backdrop-blur-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-xl md:text-2xl font-serif font-bold tracking-tighter transition-colors duration-500 text-white drop-shadow-sm`}
        >
          {SALON_DATA.name}
        </motion.div>

        {/* Minimalist Nav - Only the Gender Switcher */}
        <nav className="flex items-center gap-4">
          <button
            onClick={() => setView(currentView === 'male' ? 'female' : 'male')}
            className="btn-premium bg-primary-gold text-white px-4 py-2 text-[10px] sm:text-xs uppercase tracking-widest font-bold rounded-full hover:bg-opacity-90 transition-all shadow-lg"
            aria-label={`Mudar para espaço ${currentView === 'male' ? 'feminino' : 'masculino'}`}
          >
            Espaço {currentView === 'male' ? 'Feminino' : 'Masculino'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
