import { useState } from 'react'
import './App.css'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import StatsSection from './components/StatsSection'
import HowToApplySection from './components/HowToApplySection'
import StatsCountSection from './components/StatsCountSection'
import BdesSection from './components/BdesSection'
import BdesSection2 from './components/BdesSection2'
import FAQSection from './components/FAQSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Herosection/>
      <AboutSection/>
      {/* <StatsSection/> */}
      <HowToApplySection/>
      <StatsCountSection/>
      <BdesSection/>
            <BdesSection2/>
                        <FAQSection/>

            

      
    </>
  )
}

export default App
