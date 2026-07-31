import { motion } from 'framer-motion'
import { FiActivity, FiBriefcase } from 'react-icons/fi'
import { experience } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeader
        eyebrow="Experience"
        title="Industrial exposure with data-driven operations."
        description="Hands-on experience around operational data, industrial workflows, reporting, and ERP development in a large enterprise environment."
      />

      <motion.article
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-lg border border-white/10 bg-zinc-900/70 p-6 shadow-2xl shadow-black/30 sm:p-8"
      >
        <div className="absolute left-8 top-24 hidden h-[calc(100%-8rem)] w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent sm:block" />
        <div className="relative flex flex-col gap-6 sm:flex-row">
          <div className="grid h-14 w-14 flex-none place-items-center rounded-md bg-cyan-300/10 text-2xl text-cyan-200 ring-1 ring-cyan-300/30">
            <FiBriefcase />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">{experience.company}</h3>
                <p className="mt-1 text-lg font-semibold text-cyan-200">{experience.role}</p>
              </div>
              <span className="w-fit rounded-md border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-sm font-semibold text-violet-100">
                {experience.period}
              </span>
            </div>

            <div className="mt-7 grid gap-4">
              {experience.points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className="flex gap-3 rounded-md border border-white/10 bg-white/[0.03] p-4 text-zinc-300"
                >
                  <FiActivity className="mt-1 flex-none text-cyan-300" />
                  <p className="leading-7">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  )
}

export default Experience
