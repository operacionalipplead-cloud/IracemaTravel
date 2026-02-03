import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden md:rounded-t-[2.5rem] shadow-xl">
      <div className="absolute inset-0">
        <img 
          src="https://painel.lipplead.com/wp-content/uploads/2026/01/Gemini_Generated_Image_xat5y9xat5y9xat5_converted-scaled.webp" 
          alt="Recepção do Hotel" 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[20s]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center pt-8">
        <motion.h1 
          className="font-display text-5xl md:text-7xl text-white tracking-[0.2em] uppercase font-light drop-shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Recepção
        </motion.h1>
        <motion.div
          className="mt-4 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="h-px w-8 bg-white/60"></div>
          <span className="text-white/90 font-sans text-xs md:text-sm tracking-widest uppercase font-medium">Hotel Iracema Travel</span>
          <div className="h-px w-8 bg-white/60"></div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;