import React from 'react';
import { Sun, Zap, Home, TrendingDown, Shield, Clock, Wrench, Battery } from 'lucide-react';

const SolarEnergySection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const howItWorks = [
    {
      icon: <Sun className="h-12 w-12 text-yellow-400" />,
      title: "Panel słoneczny",
      description: "Panele pochłaniają światło słoneczne"
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-500" />,
      title: "Inwerter",
      description: "Prąd stały zmienia się w przemienny"
    },
    {
      icon: <Home className="h-12 w-12 text-green-500" />,
      title: "Twoje urządzenia",
      description: "Energia zasila Twój dom"
    }
  ];

  const benefits = [
    {
      icon: <TrendingDown className="h-8 w-8" />,
      title: "Niższe rachunki",
      description: "Znaczne obniżenie kosztów energii"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Niezależność od cen",
      description: "Ochrona przed rosnącymi taryfami"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Bezobsługowość",
      description: "Minimalne wymagania serwisowe"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Żywotność 25+ lat",
      description: "Długoterminowa inwestycja"
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Integracja z magazynem",
      description: "Możliwość gromadzenia energii"
    }
  ];

  return (
    <section id="solar-energy" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-[#1A1D2E]">
          Fotowoltaika – Twoja własna energia ze słońca
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Wykorzystaj nieograniczoną moc słońca dla swojego domu
        </p>

        {/* Jak działa fotowoltaika */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1D2E]">Jak działa fotowoltaika</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1A1D2E]">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-green-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Korzyści */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1D2E]">Korzyści fotowoltaiki</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4 text-green-500">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#1A1D2E]">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dlaczego my */}
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-bold mb-6 text-[#1A1D2E]">Dlaczego warto wybrać nas?</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">15+</div>
              <p className="text-gray-600">lat doświadczenia</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">500+</div>
              <p className="text-gray-600">zrealizowanych projektów</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">25</div>
              <p className="text-gray-600">lat gwarancji na panele</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Zobacz nasze realizacje
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Skontaktuj się z nami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarEnergySection;