import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const submitButton = document.getElementById('submit-button') as HTMLButtonElement;
    if (submitButton) {
      submitButton.disabled = !e.target.checked;
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16 text-[#1A1D2E]">
          Skontaktuj się z nami
        </h1>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formularz */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-[#1A1D2E]">Wyślij zapytanie</h2>
            
            <form 
              action="https://formspree.io/f/meozwwok" 
              method="POST"
              className="space-y-6"
            >
              {/* Ukryte pole - e-maile będą wysyłane na Twój adres */}
              <input type="hidden" name="_replyto" value="twojoffgrid@gmail.com" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Imię i nazwisko *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Temat
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Wybierz temat</option>
                  <option value="wind">Energia z wiatru</option>
                  <option value="solar">Energia ze słońca</option>
                  <option value="grants">Dotacje</option>
                  <option value="other">Inne</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
                  placeholder="Opisz swoje potrzeby i oczekiwania..."
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  onChange={handleConsentChange}
                  required
                  className="mt-1 mr-3"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z RODO w celu udzielenia odpowiedzi na zapytanie. *
                </label>
              </div>

              <button
                id="submit-button"
                type="submit"
                disabled={true}
                className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Wyślij wiadomość
              </button>
            </form>
          </div>

          {/* Informacje kontaktowe i zdjęcie */}
          <div className="space-y-8">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.1234567890123!2d21.12345678901234!3d52.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDA3JzM0LjQiTiAyMcKwMDcnMzQuNCJF!5e0!3m2!1spl!2spl!4v1234567890123"
                title="Lokalizacja TWÓJ OFF-GRID"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-black/50 text-white p-2 rounded-lg">
                <p className="text-sm font-semibold">ul. Stefana Batorego 18</p>
                <p className="text-xs">02-591 Warszawa</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#1A1D2E]">Dane kontaktowe</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-500 mr-3" />
                  <span>+48 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-green-500 mr-3" />
                  <span>kontakt@twoj-offgrid.pl</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <p>ul. Stefana Batorego 18/108</p>
                    <p>02-591 Warszawa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-500 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Bezpłatna konsultacja</h3>
              <p className="mb-4">
                Umów się na darmową konsultację i wycenę systemu energetycznego dla Twojego domu.
              </p>
              <p className="text-sm opacity-90">
                Czas odpowiedzi: do 24h • Wycena: bezpłatna • Dojazd: w promieniu 50km od Warszawy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;