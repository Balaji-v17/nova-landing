import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import TrustedBy from './components/sections/TrustedBy'
import Features from './components/sections/Features'
import About from './components/sections/About'
import HowItWorks from './components/sections/HowItWorks'

function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-body overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <About />
        <HowItWorks />
      </main>
    </div>
  )
}

export default App