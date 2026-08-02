import { motion, type Variants } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import type { Service } from '../data/services'

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <motion.article
      variants={itemVariants}
      className="group bg-[#0B0B0B] p-8 md:p-10 min-h-[240px] transition-colors duration-300 hover:bg-[#111111] flex flex-col justify-between"
    >
      <div className="flex items-start justify-between">
        <span className="text-sm text-white/40">{service.number}</span>
        <FiArrowUpRight
          className="h-4 w-4 text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
          aria-hidden="true"
        />
      </div>
      <div className="mt-10">
        <h3 className="text-xl font-medium text-[#F2F2F2]">{service.title}</h3>
        <p className="mt-3 max-w-[38ch] text-sm leading-relaxed text-white/60">{service.description}</p>
      </div>
    </motion.article>
  )
}

export default ServiceCard
