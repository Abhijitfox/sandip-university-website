import { useState } from 'react'
import './App.css'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import Cource1 from './components/Cource1'
import Cource2 from './components/Cource2'
import FAQSection from './components/FAQSection'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import RecruiterSlider from './components/RecruiterSlider'
import Cource3 from './components/Cource3'
import WhyUs from './components/WhyUs'

function App() {

  return (
    <>
      <Navbar />

<div id="Home" className="scroll-mt-24">
  <Herosection />
</div>

<div id="About-Us" className="scroll-mt-24">
  <AboutSection />
</div>

<div id="Course" className="scroll-mt-24">
  <Cource1 />
  <Cource2 />
  <Cource3 />
</div>

<div id="Recruiters" className="scroll-mt-24">
  <RecruiterSlider />
</div>

<div id="Campus-Life" className="scroll-mt-24">
  <Carousel />
</div>

<div id="WhyUs" className="scroll-mt-24">
  <WhyUs />
</div>

<div id="FAQ's" className="scroll-mt-24">
  <FAQSection />
</div>

<Footer />


      
    </>
  )
}

export default App
