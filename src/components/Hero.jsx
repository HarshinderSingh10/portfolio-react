import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiMail } from 'react-icons/fi'
import { contact, socialLinks, stats } from '../data/portfolioData'

const words = ['Analytics Solutions', 'ML Workflows', 'Enterprise ERP', 'Data Dashboards']

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame
    const duration = 1500
    const start = performance.now()

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      setCount(value * (1 - Math.pow(1 - progress, 3)))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value])

  const formatted = value % 1 === 0 ? Math.round(count) : count.toFixed(2)
  return <span>{formatted}{suffix}</span>
}

function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((index) => (index + 1) % words.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-8 top-1/3 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-16 left-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
        {[...Array(22)].map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-cyan-200/50"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${18 + ((index * 53) % 68)}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -18, 0] }}
            transition={{ duration: 3 + (index % 5), repeat: Infinity, delay: index * 0.15 }}
          />
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            AI & Data Science Portfolio
          </p>

          <h1 className="mt-6 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Harshinder Singh
          </h1>

          <div className="mt-4 min-h-20 text-2xl font-bold text-zinc-100 sm:text-3xl">
            Data Analytics & Data Science Enthusiast
            <motion.span
              key={words[wordIndex]}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="mt-2 block bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent"
            >
              {words[wordIndex]}
            </motion.span>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Building intelligent applications, analytics solutions, and enterprise
            systems that transform data into actionable insights.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="glow-button group">
              View Projects <FiArrowDown className="transition group-hover:translate-y-0.5" />
            </a>
            <a href="/resume.pdf" className="secondary-button">
              Download Resume <FiDownload />
            </a>
            <a href="#contact" className="secondary-button">
              Contact Me <FiMail />
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-lg text-zinc-200 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:text-cyan-200"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-lg border border-white/10 bg-zinc-900/60 p-5 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="rounded-md border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="text-3xl font-black text-white">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{stat.label}</p>
                  <div className={`mt-5 h-1 rounded-full bg-gradient-to-r ${index % 2 ? 'from-violet-400 to-fuchsia-400' : 'from-cyan-300 to-violet-400'}`} />
                </motion.div>
              ))}
            </div>
            <div className="mt-4 rounded-md border border-cyan-300/20 bg-cyan-300/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Current Focus
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                ERP systems, predictive workflows, workforce analytics, and industrial reporting.
              </p>
              <p className="mt-3 text-sm text-zinc-400">{contact.location}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
