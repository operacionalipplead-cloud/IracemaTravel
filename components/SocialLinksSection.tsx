import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, MapPin, MessageCircle, Wifi, Copy, Check } from 'lucide-react';

const SocialLinksSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const password = "A0C1A2F399";

  const handleCopy = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const socialLinks = [
    {
      id: 'tripadvisor',
      title: 'Trip Advisor',
      icon: MessageCircle,
      url: 'https://www.tripadvisor.com.br',
    },
    {
      id: 'instagram',
      title: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com',
    },
    {
      id: 'rate',
      title: 'Nos avalie',
      icon: MapPin,
      url: '#',
    }
  ];

  return (
    <section className="px-6 py-6 w-full flex flex-col items-center gap-6 max-w-lg mx-auto">
      {/* Social Buttons: Grid of 3 */}
      <div className="grid grid-cols-3 gap-4 w-full">
        {socialLinks.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square bg-[#D99A6C] rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 hover:bg-[#c5885a] transition-all p-2 group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
             <div className="p-2.5 rounded-full border-2 border-white/30 bg-white/10 group-hover:bg-white/20 transition-colors">
                <item.icon size={24} className="text-white" />
             </div>
             <span className="font-display font-medium text-xs text-white text-center leading-tight">
               {item.title}
             </span>
          </motion.a>
        ))}
      </div>

      {/* Wi-Fi Card: Full Width */}
      <motion.button
        onClick={handleCopy}
        className="relative w-full bg-[#B08968] rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center gap-1 group overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest mb-1">
           <Wifi size={16} /> Wi-Fi Grátis
        </div>
        <div className="text-3xl font-display font-bold text-white tracking-widest drop-shadow-md">
           {password}
        </div>
        <div className="w-10 h-1 bg-white/20 rounded-full mt-3"></div>
        
        {/* Copy Icon Overlay (Top Right) */}
        <div className="absolute top-4 right-4 text-white/40 group-hover:text-white/80 transition-colors">
           <Copy size={20} />
        </div>

        {/* Success Overlay */}
        <AnimatePresence>
          {copied && (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 bg-[#25D366] flex flex-col items-center justify-center z-10"
             >
                <Check size={36} className="text-white mb-2" />
                <span className="text-white font-bold text-lg">Senha Copiada!</span>
             </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </section>
  );
};

export default SocialLinksSection;