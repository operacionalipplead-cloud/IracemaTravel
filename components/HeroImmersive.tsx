import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroImmersive: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={ref} 
      className="relative w-full min-h-[85vh] overflow-hidden flex items-center justify-center"
      id="hero_section"
    >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-10" />
        <img 
          src="https://painel.lipplead.com/wp-content/uploads/2026/01/Gemini_Generated_Image_xat5y9xat5y9xat5_converted-scaled.webp" 
          alt="Praia paradisíaca no Nordeste" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-20 text-center px-6 md:px-12 max-w-5xl mx-auto"
        style={{ y: textY, opacity }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
          Descubra o <span className="text-accent">Paraíso</span>
        </h1>
        <p className="font-sans text-lg md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          As melhores experiências e praias do Nordeste esperam por você. Viva o verão o ano todo com a Iracema Travel.
        </p>
        
        <motion.a 
          href="https://wa.me/550000000000"
          className="inline-flex items-center gap-2 bg-accent text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:bg-orange-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reserve Agora no WhatsApp
          <ArrowRight size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroImmersive;