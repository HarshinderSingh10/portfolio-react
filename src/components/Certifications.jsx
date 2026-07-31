import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { certifications } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeader
        eyebrow="Certifications"
        title="Credentials across AI, SQL, Tableau, databases, and ML."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((certification, index) => (
          <motion.article
            key={`${certification.issuer}-${certification.title}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.07, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-5"
          >
            <span className="grid h-11 w-11 flex-none place-items-center rounded-md bg-violet-300/10 text-xl text-violet-200">
              <FiAward />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
                {certification.issuer}
              </p>
              <h3 className="mt-2 text-lg font-bold text-white">{certification.title}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Certifications
