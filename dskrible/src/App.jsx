import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Problem from './components/Problem';
import Brain from './components/Brain';
import Clinical from './components/Clinical';
import Designed from './components/Designed';
import Alongside from './components/Alongside';
import Therapeutic from './components/Therapeutic';
import Clinician from './components/Clinician';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Contact from './components/Contact';

// Home page component with all sections
function Home() {
  return (
    <>
      <section id="product"><HeroSection /></section>
      <section id="why"><Problem /></section>
      <section id="solutions"><Brain /></section>
      <section id="clinical"><Clinical /></section>
      <section id="designed"><Designed /></section>
      <section id="alongside"><Alongside /></section>
      <section id="therapeutic"><Therapeutic /></section>
      <section id="clinician"><Clinician /></section>
      <section id="pricing"><Pricing /></section>
      <section id="cta"><CTA /></section>
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
