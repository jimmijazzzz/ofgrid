
import { Wind, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1D2E] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo i opis */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Wind className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold">TWÓJ OFF-GRID</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Specjalizujemy się w projektowaniu i montażu systemów energii odnawialnej. 
              Pomagamy w uzyskaniu pełnej niezależności energetycznej dzięki turbinom wiatrowym, 
              fotowoltaice i magazynom energii.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-green-500" />
                <span>ul. Stefana Batorego 18/108, 02-591 Warszawa</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-green-500" />
                <span>+48 506 628 898</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-green-500" />
                <span>kontakt@twoj-offgrid.org</span>
              </div>
            </div>
          </div>

          {/* Szybkie linki */}
          <div>
            <h3 className="text-lg font-bold mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('wind-energy')}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Energia z wiatru
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solar-energy')}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Energia ze słońca
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('grants')}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Dotacje
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Dane firmowe i social media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Dane firmowe</h3>
            <div className="space-y-2 text-sm text-gray-300 mb-6">
              <p>ADAM ZAWISTOWSKI TWÓJ OFF-GRID</p>
              <p>NIP: 5671807063</p>
              <p>ul. Stefana Batorego 18/108, 02-591 Warszawa</p>
            </div>

          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 TWÓJ OFF-GRID. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;