import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiMessageCircle } from 'react-icons/fi'
import { siteSettings } from '../data/siteSettings'

const ContactCTA = () => {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-[800px]"
      >
        <h2
          id="contact-cta-heading"
          className="text-[30px] md:text-[42px] font-normal tracking-[-0.03em] text-[#F2F2F2]"
        >
          Planning a project in Afghanistan?
        </h2>
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-white/70">
          Start a conversation with our team about documentary filming, photography, design, or
          production support.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85"
          >
            Start a conversation
            <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {/* Replace href with your real wa.me link once a number is set up */}
          <a
            href={siteSettings.whatsappUrl || '#'}
            className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/5"
          >
            Contact on WhatsApp
            <FiMessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactCTA
