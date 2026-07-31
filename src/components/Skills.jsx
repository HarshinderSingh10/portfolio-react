import { motion } from 'framer-motion'
import { skillGroups } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        eyebrow="Technical Skills"
        title="A practical data stack for insight, automation, and delivery."
        description="Grouped by how the tools are used across analytics, data science, backend systems, databases, and production workflows."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.06 }}
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
      >
        {skillGroups.map(({ title, items, icon: Icon }) => (
          <motion.article
            key={title}
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -7, scale: 1.015 }}
            className="rounded-lg border border-white/10 bg-zinc-900/65 p-5 transition hover:border-cyan-300/40 hover:bg-zinc-900"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-cyan-300/10 text-xl text-cyan-200">
                <Icon />
              </span>
              <h3 className="font-bold text-white">{title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
