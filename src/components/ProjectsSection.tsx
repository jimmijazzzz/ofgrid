import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const projects = [
    {
      image: "/1.png"
    },
    {
      image: "/2.png"
    },
    {
      image: "/3.png"
    },
    {
      image: "/4.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-[#1A1D2E]">
          Nasze Realizacje
        </h1>

        {/* Karuzela */}
        <div className="relative mb-12">
          <div className="relative overflow-hidden w-full max-w-[940px] h-[300px] sm:h-[400px] md:h-[600px] lg:h-[788px] mx-auto">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full h-full flex-shrink-0 relative">
                  <img 
                    src={project.image} 
                    alt="Realizacja projektu"
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={() => setLightboxImage(project.image)}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>

                </div>
              ))}
            </div>
          </div>

          {/* Nawigacja */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-1.5 sm:p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-1.5 sm:p-2 rounded-full shadow-lg transition-colors"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Wskaźniki */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
          >
            Sprawdź, jak możemy zaprojektować system dla Ciebie
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={lightboxImage} 
              alt="Powiększone zdjęcie realizacji"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;