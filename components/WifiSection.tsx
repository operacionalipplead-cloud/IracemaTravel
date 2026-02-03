import React from 'react';
import { motion } from 'framer-motion';

const WifiSection: React.FC = () => {
  return (
    <section className="px-4 pb-12 pt-4 max-w-lg mx-auto w-full flex flex-col items-center justify-center">
      {/* Branding with Logo (Moved from SocialLinksSection) */}
      <div className="flex flex-col items-center justify-center opacity-90">
        <motion.img 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="https://painel.lipplead.com/wp-content/uploads/2026/01/ChatGPT-Image-14-de-jan.-de-2026-16_17_00.png"
          alt="Hotel Iracema Travel Logo"
          className="w-48 md:w-64 object-contain mix-blend-multiply filter contrast-125"
        />
        <div className="mt-2 w-16 h-px bg-darkText/20 mx-auto rounded-full"></div>
      </div>
    </section>
  );
};

export default WifiSection;