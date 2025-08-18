import React from 'react';
import { ExternalLink, CheckCircle, Euro, Calendar, FileText } from 'lucide-react';

const GrantsSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="grants" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-[#1A1D2E]">
          Dotacje – Moja Elektrownia Wiatrowa
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Skorzystaj z rządowego wsparcia finansowego na budowę własnego systemu energetycznego
        </p>

        {/* Najważniejsze informacje */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Euro className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2 text-[#1A1D2E]">Dotacja do 50%</h3>
            <p className="text-gray-600">kosztów kwalifikowanych</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2 text-[#1A1D2E]">Do 30 tys. zł</h3>
            <p className="text-gray-600">na turbiną wiatrową</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <CheckCircle className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2 text-[#1A1D2E]">Do 17 tys. zł</h3>
            <p className="text-gray-600">na magazyn energii</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Calendar className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2 text-[#1A1D2E]">Do 2028 roku</h3>
            <p className="text-gray-600">lub wyczerpania środków</p>
          </div>
        </div>

        {/* Szczegóły programu */}
        <div className="bg-white p-8 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-6 text-[#1A1D2E]">Szczegóły programu</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-500">Wsparcie obejmuje:</h3>
              <ul className="space-y-2">
                {[
                  "Zakup i montaż mikroelektrowni wiatrowej (1–20 kW)",
                  "Magazyny energii (min. 2 kWh pojemności)",
                  "Systemy hybrydowe (wiatr + fotowoltaika)",
                  "Instalacje towarzyszące i pomiary"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-500">Maksymalne kwoty:</h3>
              <ul className="space-y-2">
                {[
                  "Mikroelektrownia wiatrowa: 30 000 zł",
                  "Magazyn energii: 17 000 zł", 
                  "System hybrydowy: łącznie do 47 000 zł",
                  "Budżet programu: 400 mln zł"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Euro className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>



        {/* FAQ mini */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-3 text-[#1A1D2E]">Kto może skorzystać?</h3>
            <p className="text-gray-600">Osoby fizyczne posiadające nieruchomość, na której zostanie zainstalowana mikroelektrownia</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-3 text-[#1A1D2E]">Jakie koszty są kwalifikowane?</h3>
            <p className="text-gray-600">Zakup, dostawa, montaż urządzeń oraz niezbędne prace towarzyszące</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-3 text-[#1A1D2E]">Kiedy złożyć wniosek?</h3>
            <p className="text-gray-600">Nabór trwa od 17.06.2024 do 31.12.2028 lub do wyczerpania środków</p>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
          >
            Skontaktuj się – pomożemy w wypełnieniu wniosku
          </button>
        </div>
      </div>
    </section>
  );
};

export default GrantsSection;