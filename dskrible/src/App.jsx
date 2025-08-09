import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Problem from './components/Problem'
import Brain from './components/Brain'
import Clinical from './components/Clinical'
import Designed from './components/Designed'
import Alongside from './components/AlongSide'
import Therapeutic from './components/Therapeutic'
import Clinician from './components/Clinician'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Problem />
      <Brain />
      <Clinical />
      <Designed /> 
      <Alongside /> 
      <Therapeutic /> 
      <Clinician />
      <Pricing />
      <CTA />
      <Footer />
       </>
  )
}

export default App
