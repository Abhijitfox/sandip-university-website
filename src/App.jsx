import { useState } from 'react'
import './App.css'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import StatsSection from './components/StatsSection'
import HowToApplySection from './components/HowToApplySection'
import StatsCountSection from './components/StatsCountSection'
import Cource1 from './components/Cource1'
import Cource2 from './components/Cource2'
import FAQSection from './components/FAQSection'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import RecruiterSlider from './components/RecruiterSlider'
import Cource3 from './components/Cource3'
import Awards from './components/Awards'
import WhyUs from './components/WhyUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Herosection/>
      <AboutSection/>
      <Cource1/>
      <Cource2/>
      <Cource3/>


      {/* <StatsSection/> */}
      {/* <HowToApplySection/> */}
      {/* <Awards/> */}
      <StatsCountSection/>
      <RecruiterSlider/>
      <Carousel/>
      <WhyUs/>
      <FAQSection/>
      <Footer/>

            

      
    </>
  )
}

export default App
