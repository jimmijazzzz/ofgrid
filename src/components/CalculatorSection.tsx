import React, { useState, useEffect } from 'react';

interface PricingData {
  [key: string]: {
    [key: string]: string;
  };
}

interface CalculatorSectionProps {
  id: string;
}

const CalculatorSection: React.FC<CalculatorSectionProps> = ({ id }) => {
  const [selectedProduct, setSelectedProduct] = useState('system1');
  const [selectedMounting, setSelectedMounting] = useState('trapez');
  const [selectedPower, setSelectedPower] = useState('2.7');
  const [selectedStorage, setSelectedStorage] = useState('none');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const [basePrice, setBasePrice] = useState<number | null>(null);

  // Dane z cenników CSV
  const pricingData: { [key: string]: PricingData } = {
    system1: {
      '2.7': { trapez: '11400', blachodachowka: '11778', dachowka: '11940', ekierki: '12075', grunt: '12372' },
      '3.15': { trapez: '12060', blachodachowka: '12501', dachowka: '12690', ekierki: '12847.5', grunt: '13194' },
      '3.6': { trapez: '12540', blachodachowka: '13044', dachowka: '13260', ekierki: '13440', grunt: '13836' },
      '4.05': { trapez: '13600', blachodachowka: '14167', dachowka: '14410', ekierki: '14612.5', grunt: '15058' },
      '4.5': { trapez: '14350', blachodachowka: '14980', dachowka: '15250', ekierki: '15475', grunt: '15970' },
      '4.95': { trapez: '15090', blachodachowka: '15783', dachowka: '16080', ekierki: '16327.5', grunt: '16872' },
      '5.4': { trapez: '15820', blachodachowka: '16576', dachowka: '16900', ekierki: '17170', grunt: '17764' },
      '5.85': { trapez: '16540', blachodachowka: '17359', dachowka: '17710', ekierki: '18002.5', grunt: '18646' },
      '6.3': { trapez: '17250', blachodachowka: '18132', dachowka: '18510', ekierki: '18825', grunt: '19518' },
      '6.75': { trapez: '17950', blachodachowka: '18895', dachowka: '19300', ekierki: '19502.5', grunt: '20380' },
      '7.2': { trapez: '18640', blachodachowka: '19648', dachowka: '20080', ekierki: '20296', grunt: '21232' },
      '7.65': { trapez: '19220', blachodachowka: '20291', dachowka: '20750', ekierki: '20979.5', grunt: '21821' },
      '8.1': { trapez: '19750', blachodachowka: '20884', dachowka: '21370', ekierki: '21613', grunt: '22504' },
      '8.55': { trapez: '20240', blachodachowka: '21437', dachowka: '21950', ekierki: '22206.5', grunt: '22805' },
      '9': { trapez: '20800', blachodachowka: '22060', dachowka: '22600', ekierki: '22870', grunt: '23500' },
      '9.45': { trapez: '21420', blachodachowka: '22743', dachowka: '23310', ekierki: '23593.5', grunt: '24255' },
      '9.9': { trapez: '22070', blachodachowka: '23456', dachowka: '24050', ekierki: '24347', grunt: '25040' },
      '10.35': { trapez: '22660', blachodachowka: '24109', dachowka: '24730', ekierki: '25040.5', grunt: '25765' },
      '10.8': { trapez: '23140', blachodachowka: '24652', dachowka: '25300', ekierki: '25624', grunt: '26380' },
      '11.25': { trapez: '23670', blachodachowka: '25245', dachowka: '25920', ekierki: '26257.5', grunt: '27045' },
      '11.7': { trapez: '24290', blachodachowka: '25928', dachowka: '26630', ekierki: '26981', grunt: '27800' },
      '12.15': { trapez: '24950', blachodachowka: '26651', dachowka: '27380', ekierki: '27744.5', grunt: '28595' },
      '12.6': { trapez: '25500', blachodachowka: '27264', dachowka: '28020', ekierki: '28398', grunt: '29280' },
      '13.05': { trapez: '26100', blachodachowka: '27927', dachowka: '28710', ekierki: '29101.5', grunt: '30015' },
      '13.5': { trapez: '26650', blachodachowka: '28540', dachowka: '29350', ekierki: '29755', grunt: '30700' }
    },
    system2: {
      '2.7': { trapez: '25000', blachodachowka: '25378', dachowka: '25540', ekierki: '25675', grunt: '25972' },
      '3.15': { trapez: '25560', blachodachowka: '26001', dachowka: '26190', ekierki: '26347.5', grunt: '26694' },
      '3.6': { trapez: '26040', blachodachowka: '26544', dachowka: '26760', ekierki: '26940', grunt: '27336' },
      '4.05': { trapez: '27200', blachodachowka: '27767', dachowka: '28010', ekierki: '28212.5', grunt: '28658' },
      '4.5': { trapez: '27950', blachodachowka: '28580', dachowka: '28850', ekierki: '29075', grunt: '29570' },
      '4.95': { trapez: '28690', blachodachowka: '29383', dachowka: '29680', ekierki: '29927.5', grunt: '30472' },
      '5.4': { trapez: '29420', blachodachowka: '30176', dachowka: '30500', ekierki: '30770', grunt: '31364' },
      '5.85': { trapez: '30140', blachodachowka: '30959', dachowka: '31310', ekierki: '31602.5', grunt: '32246' },
      '6.3': { trapez: '30850', blachodachowka: '31732', dachowka: '32110', ekierki: '32425', grunt: '33118' },
      '6.75': { trapez: '31550', blachodachowka: '32495', dachowka: '32900', ekierki: '33102.5', grunt: '33980' },
      '7.2': { trapez: '32240', blachodachowka: '33248', dachowka: '33680', ekierki: '33896', grunt: '34832' },
      '7.65': { trapez: '32820', blachodachowka: '33891', dachowka: '34350', ekierki: '34579.5', grunt: '35421' },
      '8.1': { trapez: '33350', blachodachowka: '34484', dachowka: '34970', ekierki: '35213', grunt: '36104' },
      '8.55': { trapez: '33840', blachodachowka: '35037', dachowka: '35550', ekierki: '35806.5', grunt: '36405' },
      '9': { trapez: '34400', blachodachowka: '35660', dachowka: '36200', ekierki: '36470', grunt: '37100' },
      '9.45': { trapez: '35020', blachodachowka: '36343', dachowka: '36910', ekierki: '37193.5', grunt: '37855' },
      '9.9': { trapez: '35670', blachodachowka: '37056', dachowka: '37650', ekierki: '37947', grunt: '38640' },
      '10.35': { trapez: '36260', blachodachowka: '37709', dachowka: '38330', ekierki: '38640.5', grunt: '39365' },
      '10.8': { trapez: '36740', blachodachowka: '38252', dachowka: '38900', ekierki: '39224', grunt: '39980' },
      '11.25': { trapez: '37270', blachodachowka: '38845', dachowka: '39520', ekierki: '39857.5', grunt: '40645' },
      '11.7': { trapez: '37890', blachodachowka: '39528', dachowka: '40230', ekierki: '40581', grunt: '41400' },
      '12.15': { trapez: '38550', blachodachowka: '40251', dachowka: '40980', ekierki: '41344.5', grunt: '42195' },
      '12.6': { trapez: '39100', blachodachowka: '40864', dachowka: '41620', ekierki: '41998', grunt: '42880' },
      '13.05': { trapez: '39700', blachodachowka: '41527', dachowka: '42310', ekierki: '42701.5', grunt: '43615' },
      '13.5': { trapez: '40250', blachodachowka: '42140', dachowka: '42950', ekierki: '43355', grunt: '44300' }
    },
    system3: {
      '2.7': { trapez: '27000', blachodachowka: '27378', dachowka: '27540', ekierki: '27675', grunt: '27972' },
      '3.15': { trapez: '27660', blachodachowka: '28101', dachowka: '28290', ekierki: '28447.5', grunt: '28794' },
      '3.6': { trapez: '28140', blachodachowka: '28644', dachowka: '28860', ekierki: '29040', grunt: '29436' },
      '4.05': { trapez: '29100', blachodachowka: '29667', dachowka: '29910', ekierki: '30112.5', grunt: '30558' },
      '4.5': { trapez: '29850', blachodachowka: '30480', dachowka: '30750', ekierki: '30975', grunt: '31470' },
      '4.95': { trapez: '30590', blachodachowka: '31283', dachowka: '31580', ekierki: '31827.5', grunt: '32372' },
      '5.4': { trapez: '31320', blachodachowka: '32076', dachowka: '32400', ekierki: '32670', grunt: '33264' },
      '5.85': { trapez: '32040', blachodachowka: '32859', dachowka: '33210', ekierki: '33502.5', grunt: '34146' },
      '6.3': { trapez: '32750', blachodachowka: '33632', dachowka: '34010', ekierki: '34325', grunt: '35018' },
      '6.75': { trapez: '33450', blachodachowka: '34395', dachowka: '34800', ekierki: '35002.5', grunt: '35880' },
      '7.2': { trapez: '34140', blachodachowka: '35148', dachowka: '35580', ekierki: '35796', grunt: '36732' },
      '7.65': { trapez: '34820', blachodachowka: '35891', dachowka: '36350', ekierki: '36579.5', grunt: '37421' },
      '8.1': { trapez: '35350', blachodachowka: '36484', dachowka: '36970', ekierki: '37213', grunt: '38104' },
      '8.55': { trapez: '35840', blachodachowka: '37037', dachowka: '37550', ekierki: '37806.5', grunt: '38405' },
      '9': { trapez: '36400', blachodachowka: '37660', dachowka: '38200', ekierki: '38470', grunt: '39100' },
      '9.45': { trapez: '37020', blachodachowka: '38343', dachowka: '38910', ekierki: '39193.5', grunt: '39855' },
      '9.9': { trapez: '37670', blachodachowka: '39056', dachowka: '39650', ekierki: '39947', grunt: '40640' },
      '10.35': { trapez: '38260', blachodachowka: '39709', dachowka: '40330', ekierki: '40640.5', grunt: '41365' },
      '10.8': { trapez: '38740', blachodachowka: '40252', dachowka: '40900', ekierki: '41224', grunt: '41980' },
      '11.25': { trapez: '39270', blachodachowka: '40845', dachowka: '41520', ekierki: '41857.5', grunt: '42645' },
      '11.7': { trapez: '39890', blachodachowka: '41528', dachowka: '42230', ekierki: '42581', grunt: '43400' },
      '12.15': { trapez: '40550', blachodachowka: '42251', dachowka: '42980', ekierki: '43344.5', grunt: '44195' },
      '12.6': { trapez: '41100', blachodachowka: '42864', dachowka: '43620', ekierki: '43998', grunt: '44880' },
      '13.05': { trapez: '41700', blachodachowka: '43527', dachowka: '44310', ekierki: '44701.5', grunt: '45615' },
      '13.5': { trapez: '42250', blachodachowka: '44140', dachowka: '44950', ekierki: '45355', grunt: '46300' }
    }
  };

  const powerOptions = ['2.7', '3.15', '3.6', '4.05', '4.5', '4.95', '5.4', '5.85', '6.3', '6.75', '7.2', '7.65', '8.1', '8.55', '9', '9.45', '9.9', '10.35', '10.8', '11.25', '11.7', '12.15', '12.6', '13.05', '13.5'];

  const calculatePrice = () => {
    const basePriceStr = pricingData[selectedProduct][selectedPower][selectedMounting];
    if (basePriceStr) {
      const basePriceNum = parseFloat(basePriceStr);
      const margin = 3000; // Marża 3000 zł
      let storageCost = 0;

      // Koszty magazynów
      if (selectedStorage === '10.24') storageCost = 3600;
      else if (selectedStorage === '12.8') storageCost = 6600;
      else if (selectedStorage === '14.21') storageCost = 3000;
      else if (selectedStorage === '17.76') storageCost = 6000;

      const totalPrice = basePriceNum + margin + storageCost;
      
      setBasePrice(basePriceNum);
      setCalculatedPrice(totalPrice);
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [selectedProduct, selectedMounting, selectedPower, selectedStorage]);

  const getProductName = (product: string) => {
    switch (product) {
      case 'system1': return 'System sieciowy (RISEN + DEYE/FOX)';
      case 'system2': return 'System hybrydowy LV (DEYE RISEN 450)';
      case 'system3': return 'System z magazynem DYNESS TOWER T10';
      default: return '';
    }
  };

  const getMountingName = (mounting: string) => {
    switch (mounting) {
      case 'trapez': return 'Trapez';
      case 'blachodachowka': return 'Blachodachówka';
      case 'dachowka': return 'Dachówka';
      case 'ekierki': return 'Ekierki inwazyjne/Balast';
      case 'grunt': return 'Grunt';
      default: return '';
    }
  };

  return (
    <section id={id} className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Kalkulator Cen Systemów Fotowoltaicznych
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sprawdź cenę swojego systemu fotowoltaicznego. Wybierz produkt, typ montażu i moc, a otrzymasz dokładną wycenę.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Lewa kolumna - Wybory */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Wybierz produkt
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="system1">System sieciowy (RISEN + DEYE/FOX)</option>
                  <option value="system2">System hybrydowy LV (DEYE RISEN 450)</option>
                  <option value="system3">System z magazynem DYNESS TOWER T10</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Typ montażu
                </label>
                <select
                  value={selectedMounting}
                  onChange={(e) => setSelectedMounting(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="trapez">Trapez</option>
                  <option value="blachodachowka">Blachodachówka</option>
                  <option value="dachowka">Dachówka</option>
                  <option value="ekierki">Ekierki inwazyjne/Balast</option>
                  <option value="grunt">Grunt</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Moc systemu (kW)
                </label>
                <select
                  value={selectedPower}
                  onChange={(e) => setSelectedPower(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {powerOptions.map((power) => (
                    <option key={power} value={power}>{power} kW</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Opcje dodatkowe - Magazyn
                </label>
                <select
                  value={selectedStorage}
                  onChange={(e) => setSelectedStorage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="none">Bez magazynu</option>
                  <option value="10.24">Magazyn 10.24 kWh (+3 600 zł)</option>
                  <option value="12.8">Magazyn 12.8 kWh (+6 600 zł)</option>
                  <option value="14.21">Magazyn 14.21 kWh (+3 000 zł)</option>
                  <option value="17.76">Magazyn 17.76 kWh (+6 000 zł)</option>
                </select>
              </div>
            </div>

            {/* Prawa kolumna - Wyniki */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Wybrane opcje:</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium">Produkt:</span> {getProductName(selectedProduct)}</p>
                  <p><span className="font-medium">Montaż:</span> {getMountingName(selectedMounting)}</p>
                  <p><span className="font-medium">Moc:</span> {selectedPower} kW</p>
                  {selectedStorage !== 'none' && (
                    <p><span className="font-medium">Magazyn:</span> {selectedStorage} kWh</p>
                  )}
                </div>
              </div>

              {calculatedPrice && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Przewidywany koszt realizacji:</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {calculatedPrice.toLocaleString('pl-PL')} zł
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Podana kwota to sugerowana wycena, która może ulec zmianie po ostatecznym dopasowaniu oferty do Twoich potrzeb.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm text-blue-800 font-medium">
                        Możesz otrzymać dotację z Mój Prąd w wysokości do 27 000 złotych!
                      </p>
                    </div>
                  </div>
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