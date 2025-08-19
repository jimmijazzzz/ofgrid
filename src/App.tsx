import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Energia Odnawialna - Projekty i Dotacje</title>
        <meta name="description" content="Specjalizujemy się w projektach energii odnawialnej - wiatrowej i słonecznej. Oferujemy kompleksowe usługi oraz pomoc w pozyskiwaniu dotacji." />
        <meta name="keywords" content="energia odnawialna, energia wiatrowa, energia słoneczna, dotacje, projekty ekologiczne" />
        <meta name="author" content="Energia Odnawialna" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Energia Odnawialna - Projekty i Dotacje" />
        <meta property="og:description" content="Specjalizujemy się w projektach energii odnawialnej - wiatrowej i słonecznej." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://twoja-domena.pl" />
        <link rel="canonical" href="https://twoja-domena.pl" />
      </Helmet>
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