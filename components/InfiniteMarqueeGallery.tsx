import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://picsum.photos/seed/travel1/300/400",
  "https://picsum.photos/seed/travel2/300/400",
  "https://picsum.photos/seed/travel3/300/400",
  "https://picsum.photos/seed/travel4/300/400",
  "https://picsum.photos/seed/travel5/300/400",
  "https://picsum.photos/seed/travel6/300/400",
  "https://picsum.photos/seed/travel7/300/400",
  "https://picsum.photos/seed/travel8/300/400",
];

// Duplicate the array to ensure seamless looping
const marqueeImages = [...images, ...images];

const InfiniteMarqueeGallery: React.FC = () => {
  return (
    <section className="bg-primary py-20 overflow-hidden" id="gallery_section">
      <div className="text-center mb-12 px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Momentos Inesquecíveis</h2>
        <p className="text-secondary mt-2">Registros de quem já viveu essa experiência</p>
      </div>

      <div className="relative w-full flex">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {marqueeImages.map((src, index) => (
            <div 
              key={index} 
              className="relative w-64 h-80 flex-shrink-0 rounded-xl overflow-hidden shadow-lg border-4 border-white/10"
            >
              <img 
                src={src} 
                alt={`Galeria ${index}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InfiniteMarqueeGallery;