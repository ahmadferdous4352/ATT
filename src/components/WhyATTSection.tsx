import { motion, type Variants } from 'framer-motion'

interface TrustPoint {
  number: string
  title: string
  body: string
}

const trustPoints: TrustPoint[] = [
  {
    number: '01',
    title: 'Nationwide Coverage',
    body: 'We operate across multiple provinces in Afghanistan, adapting production plans to local conditions, access limitations, and security considerations.',
  },
  {
    number: '02',
    title: 'Ethical Filming Approach',
    body: 'We prioritize informed consent, cultural sensitivity, and legal awareness. Faces, identities, and locations are handled carefully depending on context.',
  },
  {
    number: '03',
    title: 'Professional Production Workflow',
    body: 'From pre-production planning to post-production delivery, our workflow aligns with the international standards expected by NGOs, media, and agencies.',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const WhyATTSection = () => {
  return (
    <section
      aria-labelledby="why-att-heading"
      className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-xs uppercase tracking-[0.2em] text-[#9C9C9C]"
      >
        Why Work With Us
      </motion.p>

      <motion.h2
        id="why-att-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mt-4 max-w-[900px] text-[30px] md:text-[40px] font-normal tracking-[-0.03em] text-[#F2F2F2]"
      >
        Local access. Ethical storytelling. Professional execution.
      </motion.h2>

      <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-white/70">
        Working in Afghanistan requires local knowledge, ethical judgment, and careful production
        planning. We combine on-the-ground access with a professional workflow designed for
        sensitive environments.
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16"
      >
        {trustPoints.map((point) => (
          <motion.div key={point.number} variants={itemVariants} className="pt-6 border-t border-white/10">
            <span className="text-sm text-white/40">{point.number}</span>
            <h3 className="mt-4 text-lg font-medium text-[#F2F2F2]">{point.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{point.body}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default WhyATTSection
