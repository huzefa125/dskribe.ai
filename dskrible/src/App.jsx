import  useState  from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Problem from './components/Problem'
import Brain from './components/Brain'
import Clinical from './components/Clinical'
function App() {

  return (
    <>
    <Navbar />
    <HeroSection/>
    <Problem />
    <Brain />
    <Clinical />
    </>
  )
}

export default App
