import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Applied analytics, AI, and enterprise systems."
        description="A focused selection of projects that show data engineering, ML inference, operational dashboards, backend architecture, and deployment awareness."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.58 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`group relative overflow-hidden rounded-lg border bg-zinc-900/70 p-6 shadow-2xl shadow-black/30 ${
                project.featured ? 'border-cyan-300/40 lg:col-span-2 lg:p-8' : 'border-white/10'
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-md bg-gradient-to-br from-cyan-300/20 to-violet-400/20 text-2xl text-cyan-200 ring-1 ring-white/10">
                      <Icon />
                    </span>
                    <span className="rounded-md border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-sm font-semibold text-violet-100">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="mt-6 text-3xl font-black text-white">{project.title}</h3>
                  <p className="mt-4 max-w-3xl leading-8 text-zinc-300">{project.summary}</p>
                </div>

                {project.featured && (
                  <span className="w-fit rounded-md bg-cyan-300 px-3 py-1 text-sm font-black text-zinc-950">
                    Industrial Deployment
                  </span>
                )}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {project.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm font-medium text-zinc-300"
                  >
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-md bg-zinc-800 px-3 py-1 text-sm text-cyan-100">
                    {item}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-violet-100 transition hover:text-cyan-200"
                >
                  <FaGithub /> GitHub <FiArrowUpRight />
                </a>
              )}
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
