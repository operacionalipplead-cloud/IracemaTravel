import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AdsSection: React.FC = () => {
  // State for the carousel of square cards
  const [currentIndex, setCurrentIndex] = useState(0);

  // Static Banners (Always visible)
  const banners = [
    { 
      id: 1, 
      title: "Passeio de Buggy", 
      subtitle: "Off-road nas dunas",
      image: "https://images.unsplash.com/photo-1541575850625-f5b248a31828?q=80&w=800&auto=format&fit=crop"
    },
    { 
      id: 2, 
      title: "Jantar Romântico", 
      subtitle: "Reserva Especial",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop"
    }
  ];

  // Grid Ads (Carousel items)
  const gridAds = [
    { 
      id: 1, 
      title: "Spa", 
      icon: "💆‍♀️", 
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      id: 2, 
      title: "Drinks", 
      icon: "🍹", 
      image: "https://images.unsplash.com/photo-1536935338788-843bb4d72982?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      id: 3, 
      title: "Kids", 
      icon: "🧸", 
      image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      id: 4, 
      title: "Transfer", 
      icon: "🚐", 
      image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=600&auto=format&fit=crop" 
    },
    // More items to enable pagination with 4 items per page
    { 
      id: 5, 
      title: "Mergulho", 
      icon: "🤿", 
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      id: 6, 
      title: "Kitesurf", 
      icon: "🪁", 
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      id: 7, 
      title: "Yoga", 
      icon: "🧘‍♀️", 
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=600&auto=format&fit=crop" 
    },
    { 
      id: 8, 
      title: "Shows", 
      icon: "🎭", 
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600&auto=format&fit=crop" 
    }
  ];

  // Configuration for carousel
  const itemsPerPage = 4; // Display 4 items (2x2) per slide
  const totalPages = Math.ceil(gridAds.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  // Direction state for animation
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    nextSlide();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevSlide();
  };

  return (
    <section className="px-4 pb-12 w-full max-w-lg mx-auto flex flex-col items-center">
      <h2 className="font-display text-xl font-bold text-darkText/80 uppercase tracking-widest mb-6 text-center">
        Anúncios
      </h2>

      {/* Static Banners Section */}
      <div className="w-full flex flex-col gap-3 mb-6">
        {banners.map((banner, idx) => (
          <motion.div
            key={banner.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full h-24 rounded-xl overflow-hidden shadow-md cursor-pointer group"
          >
            <img 
              src={banner.image} 
              alt={banner.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-6">
              <h3 className="text-white font-bold text-lg font-display leading-tight">{banner.title}</h3>
              <span className="text-gray-200 text-xs uppercase tracking-wider">{banner.subtitle}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Carousel Section for Square Cards (2x2 Grid) */}
      <div className="w-full relative min-h-[380px]"> {/* Height adjusted for 2 rows of aspect-square cards */}
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                handleNext();
              } else if (swipe > swipeConfidenceThreshold) {
                handlePrev();
              }
            }}
            className="w-full grid grid-cols-2 gap-3 absolute top-0 left-0"
          >
            {gridAds.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map((ad) => (
               <div
                  key={ad.id}
                  className="relative aspect-square rounded-xl shadow-lg cursor-pointer overflow-hidden group bg-gray-200"
               >
                  <img 
                    src={ad.image}
                    alt={ad.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center justify-end pb-4 p-2 transition-colors">
                    <span className="text-3xl mb-1 drop-shadow-md transform group-hover:-translate-y-1 transition-transform">{ad.icon}</span>
                    <span className="font-display font-bold text-white text-lg tracking-wide drop-shadow-lg text-center leading-none">{ad.title}</span>
                  </div>
               </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination / Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-6 w-full">
         <button onClick={handlePrev} className="p-1.5 rounded-full bg-white/40 hover:bg-white/80 transition-colors text-darkText">
            <ChevronLeft size={16} />
         </button>
         <div className="flex gap-1.5">
          {Array.from({ length: totalPages }).map((_, idx) => (
             <div 
                key={idx}
                onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex ? 'w-4 bg-accent' : 'w-1.5 bg-gray-400/50'}`}
             />
          ))}
         </div>
         <button onClick={handleNext} className="p-1.5 rounded-full bg-white/40 hover:bg-white/80 transition-colors text-darkText">
            <ChevronRight size={16} />
         </button>
      </div>
      
    </section>
  );
};

export default AdsSection;