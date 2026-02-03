import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, MapPin, MessageCircle, Wifi, Check } from 'lucide-react';

const SocialLinksSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const password = "A0C1A2F399";

  const handleCopy = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const items = [
    {
      id: 'tripadvisor',
      title: 'Trip Advisor',
      icon: MessageCircle,
      url: 'https://www.tripadvisor.com.br',
      isLink: true
    },
    {
      id: 'instagram',
      title: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com',
      isLink: true
    },
    {
      id: 'rate',
      title: 'Nos avalie',
      icon: MapPin,
      url: '#',
      isLink: true
    },
    {
      id: 'wifi',
      title: 'Wi-Fi Grátis',
      icon: Wifi,
      action: handleCopy,
      isLink: false,
      subtitle: password
    }
  ];

  return (
    <section className="px-4 py-8 w-full flex flex-col items-center">
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        {items.map((item) => {
          const isWifi = item.id === 'wifi';
          const Icon = isWifi && copied ? Check : item.icon;
          
          // Card Content
          const content = (
            <>
              <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors mb-2">
                <Icon size={28} className="text-white" />
              </div>
              <span className="font-display font-medium text-sm text-white text-center leading-tight">
                {isWifi && copied ? "Copiado!" : item.title}
              </span>
              {/* Show password for Wifi card if not copied yet */}
              {isWifi && !copied && (
                <span className="text-[10px] text-white/90 font-mono mt-1 bg-black/10 px-2 py-0.5 rounded tracking-wide">
                  {item.subtitle}
                </span>
              )}
            </>
          );

          // Shared Styling
          const className = "aspect-square bg-[#D99A6C] rounded-2xl shadow-lg flex flex-col items-center justify-center gap-1 hover:bg-[#c5885a] transition-all p-4 group cursor-pointer relative overflow-hidden";

          if (item.isLink) {
            return (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content}
              </motion.a>
            );
          }

          return (
            <motion.button
              key={item.id}
              onClick={item.action}
              className={className}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content}
              
              {/* Overlay Feedback for Wifi Copy */}
              <AnimatePresence>
                {isWifi && copied && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#25D366]/90 flex flex-col items-center justify-center z-10"
                  >
                     <Check size={32} className="text-white mb-2" />
                     <span className="text-white font-bold text-sm">Senha Copiada!</span>
                  </motion.div>
                )}
               </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};

export default SocialLinksSection;