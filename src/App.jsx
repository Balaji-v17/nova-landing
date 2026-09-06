import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import TrustedBy from './components/sections/TrustedBy'
import Features from './components/sections/Features'
import About from './components/sections/About'
import HowItWorks from './components/sections/HowItWorks'
import Stats from './components/sections/Stats'
import Solutions from './components/sections/Solutions'
import Testimonials from './components/sections/Testimonials'
import Pricing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'
import BackToTop from './components/ui/BackToTop'

function App() {
  return (
    <div className="min-h-screen bg-canvas dark:bg-ink text-ink dark:text-canvas font-body scroll-smooth relative transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <div id="features"><Features /></div>
        <About />
        <HowItWorks />
        <Stats />
        <div id="solutions"><Solutions /></div>
        <Testimonials />
        <div id="pricing"><Pricing /></div>
        <div id="faq"><FAQ /></div>
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App