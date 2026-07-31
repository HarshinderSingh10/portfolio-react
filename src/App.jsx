import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import About from './components/About'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 850)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-[#09090B]"
          >
            <div className="h-14 w-14 rounded-full border-2 border-cyan-300/20 border-t-cyan-300" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed left-0 top-0 z-[60] h-1 bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400" style={{ width: `${progress}%` }} />

      <main className="min-h-screen overflow-hidden bg-[#09090B] text-zinc-100">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Achievements />
        <Contact />
        <Footer />
      </main>

      {progress > 18 && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-md border border-cyan-300/30 bg-zinc-900/85 text-cyan-100 shadow-lg shadow-cyan-950/40 backdrop-blur transition hover:-translate-y-1 hover:bg-cyan-300 hover:text-zinc-950"
        >
          <FiArrowUp />
        </button>
      )}
    </>
  )
}

export default App
