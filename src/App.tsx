import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WindEnergySection from './components/WindEnergySection';
import SolarEnergySection from './components/SolarEnergySection';
import ProjectsSection from './components/ProjectsSection';
import GrantsSection from './components/GrantsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      <WindEnergySection />
      <SolarEnergySection />
      <ProjectsSection />
      <GrantsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;