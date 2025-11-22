import './App.css'
import Herosection from './components/Herosection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import FAQSection from './components/FAQSection'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import RecruiterSlider from './components/RecruiterSlider'
import WhyUs from './components/WhyUs'
import Achievements from './components/Achievements'
import CourseTabs from './components/CourseTabs'
import GetInTouch from './components/GetInTouch'

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
<Achievements/>
<div id="Course" className="scroll-mt-24">
  <CourseTabs/>

</div>

<div id="Recruiters" className="scroll-mt-24">
  <RecruiterSlider />
</div>

<div id="Campus-Life" className="scroll-mt-24">
  <Carousel />
</div>

<div id="WhyUs" className="scroll-mt-16">
  <WhyUs />
</div>
<GetInTouch/>
<div id="FAQ's" className="scroll-mt-24">
  <FAQSection />
</div>

<Footer />


      
    </>
  )
}

export default App
