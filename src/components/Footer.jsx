import { FiArrowUpRight } from 'react-icons/fi'
import { contact } from '../data/portfolioData'

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-sm text-zinc-400 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Harshinder Singh. Data Analytics & Data Science Portfolio.</p>
        <div className="flex flex-wrap gap-4">
          <a className="inline-flex items-center gap-1 hover:text-cyan-200" href={contact.github} target="_blank" rel="noreferrer">
            GitHub <FiArrowUpRight />
          </a>
          <a className="inline-flex items-center gap-1 hover:text-cyan-200" href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <FiArrowUpRight />
          </a>
          <a className="hover:text-cyan-200" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
