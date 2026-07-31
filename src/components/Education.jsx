import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import { education } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeader eyebrow="Education" title="Academic foundation." />

      <div className="grid gap-5 lg:grid-cols-3">
        {education.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="rounded-lg border border-white/10 bg-zinc-900/65 p-6"
          >
            <FiBookOpen className="text-3xl text-cyan-300" />
            <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-4 font-medium text-zinc-200">{item.institution}</p>
            <p className="mt-2 text-sm text-zinc-400">{item.board}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-md bg-cyan-300/10 px-3 py-1 text-sm font-semibold text-cyan-100">
                {item.period}
              </span>
              <span className="rounded-md bg-violet-300/10 px-3 py-1 text-sm font-semibold text-violet-100">
                {item.result}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Education
