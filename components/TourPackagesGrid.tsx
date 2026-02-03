import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { TourPackage } from '../types';

const packages: TourPackage[] = [
  {
    id: '1',
    title: "Passeio de Buggy",
    description: "Aventura nas dunas com emoção garantida e pôr do sol inesquecível.",
    price: "R$ 250,00",
    imageKeyword: "dunes"
  },
  {
    id: '2',
    title: "Litoral Leste",
    description: "Falésias coloridas, águas cristalinas e tranquilidade total.",
    price: "R$ 180,00",
    imageKeyword: "cliffs"
  },
  {
    id: '3',
    title: "Jericoacoara VIP",
    description: "Transfer 4x4 e visita à Pedra Furada e Lagoa do Paraíso.",
    price: "R$ 350,00",
    imageKeyword: "hammock"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const TourPackagesGrid: React.FC = () => {
  return (
    <section className="bg-secondary py-24 px-6 md:px-16" id="packages_section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Nossos Roteiros Exclusivos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans text-lg">
            Escolha sua próxima aventura e deixe que a gente cuida de todos os detalhes.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {packages.map((pkg) => (
            <motion.div 
              key={pkg.id} 
              variants={cardVariants}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${pkg.imageKeyword}/600/400`} 
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm font-bold text-primary">
                  {pkg.price}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display text-2xl font-bold text-darkText mb-3">{pkg.title}</h3>
                <p className="text-gray-600 font-sans mb-6 flex-grow">{pkg.description}</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-accent text-sm font-semibold">
                    <MapPin size={16} className="mr-1" />
                    Ceará, Brasil
                  </div>
                  <button className="text-primary font-bold inline-flex items-center group-hover:translate-x-1 transition-transform">
                    Saiba Mais <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TourPackagesGrid;