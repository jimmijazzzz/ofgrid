import React, { useState } from 'react';
import { Wind, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Wind className="h-8 w-8 text-green-500" />
          <span className="text-xl font-bold text-navy-800">TWÓJ OFF-GRID</span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('home')} className="hover:text-green-500 transition-colors">Home</button>
          <button onClick={() => scrollToSection('wind-energy')} className="hover:text-green-500 transition-colors">Energia z wiatru</button>
          <button onClick={() => scrollToSection('solar-energy')} className="hover:text-green-500 transition-colors">Energia ze słońca</button>
          <button onClick={() => scrollToSection('grants')} className="hover:text-green-500 transition-colors">Dotacje</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-green-500 transition-colors">Kontakt</button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-green-500">Home</button>
              <button onClick={() => scrollToSection('wind-energy')} className="text-left hover:text-green-500">Energia z wiatru</button>
              <button onClick={() => scrollToSection('solar-energy')} className="text-left hover:text-green-500">Energia ze słońca</button>
              <button onClick={() => scrollToSection('grants')} className="text-left hover:text-green-500">Dotacje</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-green-500">Kontakt</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;