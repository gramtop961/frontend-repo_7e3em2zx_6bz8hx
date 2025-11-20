import { useRef } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'

function App() {
  const contactRef = useRef(null)
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-white font-semibold tracking-tight">Pega Consulting</a>
          <nav className="hidden md:flex items-center gap-6 text-blue-100">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="/test" className="hover:text-white">System</a>
          </nav>
          <button onClick={scrollToContact} className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold">Talk to us</button>
        </div>
      </header>

      <Hero onContactClick={scrollToContact} />
      <Services />
      <CaseStudies />
      <Contact ref={contactRef} />

      <footer className="py-10 text-center text-sm text-blue-200/70 border-t border-white/10">
        <p>Pega is a registered trademark of Pegasystems Inc. We are an independent consulting firm.</p>
      </footer>
    </div>
  )
}

export default App
