import { motion, type Variants } from 'framer-motion'
import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const ServicesPage = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 pt-40 pb-24 md:pt-48 md:pb-32">
      <p className="text-xs uppercase tracking-[0.2em] text-[#9C9C9C]">Services</p>
      <h1 className="mt-4 max-w-[900px] text-[34px] md:text-[52px] font-normal tracking-[-0.03em] text-[#F2F2F2]">
        Documentary-led visual production, end to end.
      </h1>
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

export default ServicesPage
