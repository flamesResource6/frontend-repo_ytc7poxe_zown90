import Hero from "./components/Hero"
import Services from "./components/Services"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-white font-bold tracking-tight">Blue Electric</a>
          <nav className="hidden md:flex items-center gap-6 text-slate-200">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold">Get Quote</a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Contact />
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 text-slate-400 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Blue Electric. All rights reserved.</p>
          <p>Emergency call-outs • Rewires • Smoke alarms • Security</p>
        </div>
      </footer>
    </div>
  )
}

export default App
