import React from 'react';
import Header from './components/Header';
import ServicesFeatures from './components/ServicesFeatures';
import SocialLinksSection from './components/SocialLinksSection';
import WifiSection from './components/WifiSection';
import AdsSection from './components/AdsSection';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#EAE0D5] to-[#D6C6B0] text-darkText font-sans selection:bg-accent selection:text-white pb-10 md:pb-20">
      {/* Container principal ajustado para Mobile (full) e Desktop (Dashboard style) */}
      <div className="w-full md:max-w-3xl lg:max-w-4xl mx-auto bg-[#EAE0D5]/50 min-h-screen shadow-2xl overflow-hidden relative md:my-8 md:rounded-[2.5rem]">
        <Header />
        <div className="relative -mt-8 z-20 rounded-t-[2rem] bg-gradient-to-b from-[#EAE0D5] to-[#EAE0D5]/80 pt-6 pb-12">
            <ServicesFeatures />
            <SocialLinksSection />
            <WifiSection />
            <AdsSection />
        </div>
      </div>
      <WhatsAppFAB />
    </main>
  );
}

export default App;