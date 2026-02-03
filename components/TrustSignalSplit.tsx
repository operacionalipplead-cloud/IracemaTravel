import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Star } from 'lucide-react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { value: "+5k", label: "Clientes Felizes" },
  { value: "4.9", label: "Avaliação Média" }
];

const TrustSignalSplit: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 overflow-hidden" id="about_section">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block bg-secondary text-primary px-4 py-1 rounded-full text-sm font-semibold mb-6">
            Sobre Nós
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-darkText mb-6 leading-tight">
            Por que viajar com a <span className="text-primary">Iracema Travel?</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed font-sans">
            Com mais de 10 anos de estrada, somos especialistas em transformar viagens em memórias inesquecíveis. Guias credenciados, segurança total e roteiros personalizados para você e sua família aproveitarem o melhor do Nordeste sem preocupações.
          </p>
          
          <div className="flex gap-8 border-t border-gray-100 pt-8">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-bold text-accent font-display">{stat.value}</div>
                <div className="text-gray-500 text-sm font-sans uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
             <div className="flex items-center gap-2 text-darkText font-medium">
               <ShieldCheck className="text-primary" /> Seguro Viagem
             </div>
             <div className="flex items-center gap-2 text-darkText font-medium">
               <Heart className="text-primary" /> Atendimento 24h
             </div>
          </div>
        </motion.div>

        {/* Right: Images */}
        <motion.div 
          className="relative h-[500px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Main Image */}
          <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-[2rem] overflow-hidden shadow-2xl z-10 rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://picsum.photos/seed/northeast/600/800" 
              alt="Turistas felizes" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Secondary Image */}
          <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-[2rem] overflow-hidden shadow-2xl z-20 -rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
            <img 
              src="https://picsum.photos/seed/beachfun/500/500" 
              alt="Passeio de barco" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Badge */}
          <div className="absolute top-1/2 left-10 bg-white p-4 rounded-2xl shadow-xl z-30 flex items-center gap-2 animate-bounce">
             <div className="bg-yellow-100 p-2 rounded-full text-yellow-500">
               <Star fill="currentColor" size={24} />
             </div>
             <div>
               <p className="text-xs text-gray-500">Avaliado</p>
               <p className="font-bold text-darkText">5 Estrelas</p>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TrustSignalSplit;