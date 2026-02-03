import React from 'react';
import { Instagram, Facebook, MapPin } from 'lucide-react';
import { SocialLink } from '../types';

const socialLinks: SocialLink[] = [
  { platform: "Instagram", url: "#", icon: "Instagram" },
  { platform: "Facebook", url: "#", icon: "Facebook" }
];

const FooterSimple: React.FC = () => {
  return (
    <footer className="bg-darkText text-gray-400 py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="font-display text-2xl font-bold text-white mb-2">Iracema Travel</h3>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <MapPin size={14} className="text-accent" />
            <span>Fortaleza, Ceará</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a 
              key={link.platform} 
              href={link.url}
              className="p-3 bg-gray-800 rounded-full hover:bg-accent hover:text-white transition-all duration-300"
              aria-label={link.platform}
            >
              {link.icon === 'Instagram' && <Instagram size={20} />}
              {link.icon === 'Facebook' && <Facebook size={20} />}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-sm font-sans text-center md:text-right">
          <p>© 2024 Iracema Travel.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSimple;