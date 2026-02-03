import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Coffee, Umbrella, Utensils, ConciergeBell } from 'lucide-react';

interface ServiceDetail {
  id: number;
  title: string;
  fullDesc: string;
  image: string;
  icon: React.ElementType;
  features: string[];
}

const services: ServiceDetail[] = [
  {
    id: 1,
    title: "Café da Manhã",
    fullDesc: "Nosso café da manhã é uma verdadeira celebração dos sabores do Nordeste. Buffet completo com frutas, sucos, pães e tapioca feita na hora.",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop",
    icon: Coffee,
    features: ["Tapioca na hora", "Frutas tropicais", "Sucos naturais", "Bolos regionais"]
  },
  {
    id: 2,
    title: "Lazer",
    fullDesc: "Localizadas no 20º andar, desfrute de nossa cobertura com piscina e sauna para renovar as energias.",
    image: "https://painel.lipplead.com/wp-content/uploads/2026/01/edd07a45-73ee-45d2-b870-a46c9b06945d_converted.webp",
    icon: Umbrella,
    features: ["Piscina panorâmica", "Sauna", "Vista para o mar", "Área de relaxamento"]
  },
  {
    id: 3,
    title: "Restaurante",
    fullDesc: "Experiência gastronômica única, combinando culinária regional cearense com pratos internacionais.",
    image: "https://painel.lipplead.com/wp-content/uploads/2026/01/ec967959-2513-48d3-ad20-a862eeb202f7.jpg",
    icon: Utensils,
    features: ["À la carte", "Frutos do mar", "Vinhos selecionados", "Climatizado"]
  },
  {
    id: 4,
    title: "Serviço de Quarto",
    fullDesc: "Conforto e privacidade. Lanches, jantar ou bebidas no conforto da sua suíte.",
    image: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=800&auto=format&fit=crop",
    icon: ConciergeBell,
    features: ["Até 23h", "Menu exclusivo", "Rapidez", "Privacidade"]
  }
];

const ServicesFeatures: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedService = services.find(s => s.id === selectedId);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedId]);

  return (
    <section className="py-8 md:px-8" id="services">
      {/* 
        Layout Container:
        Grid de 4 colunas mantido.
        Padding reduzido (px-1) para maximizar espaço para os ícones maiores.
      */}
      <div className="grid grid-cols-4 gap-2 md:gap-10 max-w-5xl mx-auto px-1 md:px-0">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="flex flex-col items-center gap-2 cursor-pointer group"
            onClick={() => setSelectedId(service.id)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Imagem: Aumentada para w-20 (80px) no mobile para maior destaque */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 md:border-4 border-white shadow-xl">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
            
            {/* Texto: Aumentado levemente para text-xs (12px) */}
            <span className="text-center font-display font-bold text-darkText text-xs md:text-base leading-tight uppercase tracking-wide drop-shadow-sm px-0.5 break-words w-full">
              {service.title}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            />
            
            <motion.div 
              layoutId={`card-container-${selectedService.id}`}
              className="bg-white w-full max-w-md md:max-w-xl rounded-2xl overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[85vh]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                className="absolute top-3 right-3 z-20 bg-black/30 hover:bg-black/50 p-1.5 rounded-full text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="h-48 md:h-64 shrink-0">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8 overflow-y-auto">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2 text-primary">
                  <selectedService.icon size={28} />
                  {selectedService.title}
                </h3>
                <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
                  {selectedService.fullDesc}
                </p>
                <div className="bg-secondary/50 p-4 rounded-xl mb-6">
                  <h4 className="font-bold text-darkText mb-3 text-sm uppercase tracking-wide">Comodidades:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <Check size={14} className="text-accent shrink-0" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={() => setSelectedId(null)}
                  className="w-full bg-primary text-white font-bold py-3 md:py-4 rounded-xl hover:bg-teal-700 transition-colors shadow-lg"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesFeatures;