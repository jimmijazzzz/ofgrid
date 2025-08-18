import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/background.jpg" 
          alt="Turbiny wiatrowe i panele słoneczne" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1D2E] via-[#1A1D2E]/70 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Energia dla Twojej niezależności –<br />
          <span className="text-yellow-400">Twój OFF-GRID</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
          Systemy wiatrowe, fotowoltaika i magazyny energii – projektujemy i montujemy 
          rozwiązania, które uniezależnią Cię od sieci.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('wind-energy')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Sprawdź ofertę
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-800 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Skontaktuj się z nami
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white/80" />
      </div>
    </section>
  );
};

export default HeroSection;