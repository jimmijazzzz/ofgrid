import React, { useState } from 'react';
import { Calculator, MapPin, Zap } from 'lucide-react';

const CalculatorSection = () => {
  const [consumption, setConsumption] = useState('');
  const [location, setLocation] = useState('');
  const [results, setResults] = useState<any>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const calculateSystem = () => {
    const monthlyConsumption = parseFloat(consumption);
    const yearlyConsumption = monthlyConsumption * 12;
    
    let windMultiplier = 1;
    let solarMultiplier = 1;
    
    switch(location) {
      case 'north':
        windMultiplier = 1.2;
        solarMultiplier = 0.9;
        break;
      case 'central':
        windMultiplier = 1.0;
        solarMultiplier = 1.0;
        break;
      case 'south':
        windMultiplier = 0.8;
        solarMultiplier = 1.1;
        break;
      case 'coast':
        windMultiplier = 1.4;
        solarMultiplier = 0.95;
        break;
    }

    const recommendedWindPower = Math.ceil((yearlyConsumption / 2200) * windMultiplier);
    const recommendedSolarPower = Math.ceil((yearlyConsumption / 1000) * solarMultiplier);
    const batteryCapacity = Math.ceil(monthlyConsumption / 30 * 2);
    
    const windCost = recommendedWindPower * 15000;
    const solarCost = recommendedSolarPower * 4000;
    const batteryCost = batteryCapacity * 2500;
    const hybridCost = windCost * 0.7 + solarCost * 0.7 + batteryCost;

    setResults({
      windPower: recommendedWindPower,
      solarPower: recommendedSolarPower,
      batteryCapacity,
      windCost,
      solarCost,
      hybridCost
    });
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-[#1A1D2E]">
          Kalkulator systemu energetycznego
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Sprawdź, jaki system będzie optymalny dla Twojego domu
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formularz */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Calculator className="h-8 w-8 text-green-500 mr-3" />
                <h2 className="text-2xl font-bold text-[#1A1D2E]">Oblicz swój system</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="consumption" className="block text-lg font-semibold mb-2 text-[#1A1D2E]">
                    <Zap className="inline h-5 w-5 mr-2" />
                    Zużycie energii (kWh/miesiąc)
                  </label>
                  <input
                    type="number"
                    id="consumption"
                    value={consumption}
                    onChange={(e) => setConsumption(e.target.value)}
                    placeholder="np. 300"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-lg font-semibold mb-2 text-[#1A1D2E]">
                    <MapPin className="inline h-5 w-5 mr-2" />
                    Lokalizacja
                  </label>
                  <select
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Wybierz region</option>
                    <option value="north">Północna Polska (dobre warunki wiatrowe)</option>
                    <option value="central">Środkowa Polska (przeciętne warunki)</option>
                    <option value="south">Południowa Polska (dobre nasłonecznienie)</option>
                    <option value="coast">Wybrzeże (bardzo dobre warunki wiatrowe)</option>
                  </select>
                </div>

                <button
                  onClick={calculateSystem}
                  disabled={!consumption || !location}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Oblicz optymalny system
                </button>
              </div>
            </div>

            {/* Wyniki */}
            <div className="space-y-6">
              {results ? (
                <>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h3 className="text-xl font-bold mb-4 text-green-700">Rekomendowane rozwiązania</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Turbina wiatrowa:</span>
                        <span className="text-green-600 font-bold">{results.windPower} kW</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Panele fotowoltaiczne:</span>
                        <span className="text-green-600 font-bold">{results.solarPower} kW</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Magazyn energii:</span>
                        <span className="text-green-600 font-bold">{results.batteryCapacity} kWh</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="text-xl font-bold mb-4 text-blue-700">Orientacyjne koszty</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>System wiatrowy:</span>
                        <span className="font-bold">{results.windCost.toLocaleString()} zł</span>
                      </div>
                      <div className="flex justify-between">
                        <span>System fotowoltaiczny:</span>
                        <span className="font-bold">{results.solarCost.toLocaleString()} zł</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-semibold">System hybrydowy:</span>
                        <span className="font-bold text-blue-600">{results.hybridCost.toLocaleString()} zł</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-800">
                      <strong>Uwaga:</strong> Przedstawione wartości są orientacyjne. Dokładny dobór systemu wymaga analizy lokalizacji i warunków technicznych.
                    </p>
                  </div>

                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Umów darmową konsultację
                  </button>
                </>
              ) : (
                <div className="bg-gray-100 p-12 rounded-xl text-center">
                  <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Wypełnij formularz, aby zobaczyć rekomendacje dla Twojego domu</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;