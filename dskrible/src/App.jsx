import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Problem from './components/Problem'
import Brain from './components/Brain'
import Clinical from './components/Clinical'
import Designed from './components/Designed'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Problem />
      <Brain />
      <Clinical />
      <Designed />    </>
  )
}

export default App
