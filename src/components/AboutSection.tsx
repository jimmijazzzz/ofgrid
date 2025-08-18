import React from 'react';
import { Users, Wrench, HeadphonesIcon } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="h-12 w-12 text-green-500" />,
      title: "Doradzamy najlepsze rozwiązania",
      description: "Analizujemy Twoje potrzeby i proponujemy optymalne systemy energetyczne"
    },
    {
      icon: <Wrench className="h-12 w-12 text-green-500" />,
      title: "Projektujemy i montujemy",
      description: "Kompleksowa realizacja od projektu po uruchomienie systemu"
    },
    {
      icon: <HeadphonesIcon className="h-12 w-12 text-green-500" />,
      title: "Zapewniamy wsparcie i serwis",
      description: "Pełne wsparcie techniczne i serwis przez cały okres eksploatacji"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1A1D2E]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-green-500 text-white p-6 rounded-lg text-center">
          <p className="text-lg font-semibold mb-4">
            Dowiedz się, jak uzyskać dotacje na własną elektrownię wiatrową
          </p>
          <button 
            onClick={() => scrollToSection('grants')}
            className="bg-white text-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Sprawdź dotacje
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;