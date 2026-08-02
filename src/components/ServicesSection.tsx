import { motion, type Variants } from 'framer-motion'
import { services } from '../data/services'
import ServiceCard from './ServiceCard'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const ServicesSection = () => {
  return (
    <section
      aria-labelledby="services-heading"
      className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-xs uppercase tracking-[0.2em] text-[#9C9C9C]"
      >
        What We Do
      </motion.p>

      <motion.h2
        id="services-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mt-4 text-[30px] md:text-[40px] font-normal tracking-[-0.03em] text-[#F2F2F2]"
      >
        Visual Production Services
      </motion.h2>

      <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-white/70">
        We provide documentary-led visual services for organizations, media, and agencies working
        in or focused on Afghanistan.
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px border border-white/10 bg-white/10 rounded-2xl overflow-hidden"
      >
        {services.map((service) => (
          <ServiceCard key={service.number} service={service} />
        ))}
      </motion.div>
    </section>
  )
}

export default ServicesSection
