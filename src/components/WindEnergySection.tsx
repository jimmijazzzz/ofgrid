import React from 'react';
import { Wind, Battery, Home, Shield, Zap, Settings } from 'lucide-react';

const WindEnergySection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const howItWorks = [
    {
      icon: <Wind className="h-12 w-12 text-green-500" />,
      title: "Turbina wytwarza prąd",
      description: "Energia wiatru jest przekształcana w elektryczność"
    },
    {
      icon: <Battery className="h-12 w-12 text-yellow-400" />,
      title: "Energia trafia do magazynu",
      description: "Wyprodukowana energia jest gromadzona w magazynie"
    },
    {
      icon: <Home className="h-12 w-12 text-blue-500" />,
      title: "Twój dom ma prąd zawsze",
      description: "Niezależnie od sieci, masz dostęp do energii 24/7"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Pełna niezależność",
      description: "Uniezależnienie od sieci energetycznej"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Bezpieczeństwo zasilania",
      description: "Ciągłość dostaw energii"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Hybryda z fotowoltaiką",
      description: "Możliwość łączenia z panelami słonecznymi"
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Elastyczność systemu",
      description: "Rozbudowa zgodnie z potrzebami"
    }
  ];

  return (
    <section id="wind-energy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-[#1A1D2E]">
          Energia z wiatru – pełna niezależność od sieci
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Odkryj moc wiatru i uniezależnij się od rosnących cen energii
        </p>

        {/* Jak to działa */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1D2E]">Jak to działa</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1A1D2E]">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dlaczego warto */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1D2E]">Dlaczego warto?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4 text-green-500">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#1A1D2E]">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Co zapewniamy */}
        <div className="bg-gray-50 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[#1A1D2E]">Co zapewniamy?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Profesjonalną analizę wiatrową lokalizacji",
              "Dobór optymalnej turbiny do Twoich potrzeb",
              "Kompleksowy projekt techniczny",
              "Montaż przez wykwalifikowanych specjalistów",
              "Integrację z systemami magazynowania energii",
              "Wsparcie w uzyskaniu dotacji",
              "Serwis i konserwację przez cały okres użytkowania",
              "Gwarancję na urządzenia i wykonane prace"
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
          >
            Skontaktuj się – przygotujemy projekt turbiny dopasowany do Twojej lokalizacji
          </button>
        </div>
      </div>
    </section>
  );
};

export default WindEnergySection;