import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { contact } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

const contactItems = [
  { label: 'Location', value: contact.location, href: null, icon: FiMapPin },
  { label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}`, icon: FiPhone },
  { label: 'GitHub', value: 'github.com/HarshinderSingh10', href: contact.github, icon: FiGithub },
  { label: 'LinkedIn', value: 'harshinder-singh-9a25b4356', href: contact.linkedin, icon: FiLinkedin },
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: FiMail },
]

function Contact() {
  return (
    <section id="contact" className="section-shell pb-28">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-lg border border-cyan-300/20 bg-zinc-900/70 p-6 shadow-2xl shadow-black/40 sm:p-10"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
        <SectionHeader
          eyebrow="Contact"
          title="Open to data analytics, data science, AI-ML, and ERP internship opportunities."
          description="Based in Ghaziabad, India. Available for recruiter conversations, data-focused startup projects, and enterprise analytics roles."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {contactItems.map(({ label, value, href, icon: Icon }) => {
            const content = (
              <div className="flex items-center gap-4 rounded-md border border-white/10 bg-white/[0.035] p-4 transition hover:border-cyan-300/40">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-md bg-cyan-300/10 text-xl text-cyan-200">
                  <Icon />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-zinc-400">{label}</p>
                  <p className="break-words font-semibold text-white">{value}</p>
                </div>
              </div>
            )

            return href ? (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
