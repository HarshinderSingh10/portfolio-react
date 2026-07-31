import { motion } from 'framer-motion'
import { FiBarChart2, FiCpu, FiTrendingUp } from 'react-icons/fi'
import SectionHeader from './SectionHeader'

const pillars = [
  { title: 'Analytics', icon: FiBarChart2, text: 'Transforms raw operational data into reports, dashboards, and business-ready insight.' },
  { title: 'AI Systems', icon: FiCpu, text: 'Builds ML-powered applications with clean data pipelines and practical model integration.' },
  { title: 'Enterprise Thinking', icon: FiTrendingUp, text: 'Designs workflows for ERP, RBAC, databases, and deployment in real organizations.' },
]

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader
          eyebrow="About Me"
          title="Data science mindset with production engineering habits."
          description="Data Analytics and Data Science enthusiast with hands-on experience developing AI-powered applications, enterprise ERP solutions, and inventory management systems."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg border border-white/10 bg-zinc-900/60 p-6 sm:p-8"
        >
          <p className="text-lg leading-8 text-zinc-300">
            Skilled in Python, SQL, Tableau, Machine Learning, and data visualization
            with experience building scalable applications and transforming operational
            data into actionable insights.
          </p>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Passionate about solving real-world problems through analytics,
            automation, and predictive modeling.
          </p>
        </motion.div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {pillars.map(({ title, text, icon: Icon }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="rounded-lg border border-white/10 bg-white/[0.035] p-6"
          >
            <Icon className="text-3xl text-cyan-300" />
            <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
            <p className="mt-3 leading-7 text-zinc-400">{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default About
