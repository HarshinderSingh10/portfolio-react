import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { achievements } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <SectionHeader
        eyebrow="Achievements"
        title="Competitive, leadership, and extracurricular highlights."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {achievements.map((achievement, index) => (
          <motion.article
            key={achievement}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.08, duration: 0.52 }}
            whileHover={{ y: -8, rotateX: 3 }}
            className="rounded-lg border border-white/10 bg-zinc-900/65 p-6"
          >
            <FiStar className="text-3xl text-cyan-300" />
            <h3 className="mt-5 text-xl font-bold text-white">{achievement}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Achievements
