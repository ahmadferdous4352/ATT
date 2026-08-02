import { motion } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'
import { siteSettings } from '../data/siteSettings'
import VideoEmbed from './VideoEmbed'

const ShowreelSection = () => {
  return (
    <section
      aria-labelledby="showreel-heading"
      className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-xs uppercase tracking-[0.2em] text-[#9C9C9C]"
      >
        Showreel
      </motion.p>

      <motion.h2
        id="showreel-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mt-4 text-[30px] md:text-[40px] font-normal tracking-[-0.03em] text-[#F2F2F2]"
      >
        Selected Visual Work
      </motion.h2>

      <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-white/70">
        A short selection of documentary and visual work filmed across Afghanistan. Identities and
        locations are handled carefully depending on context.
      </p>

      {siteSettings.showreelVideoUrl ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mt-12 w-full max-w-[1200px]"
        >
          <VideoEmbed
            url={siteSettings.showreelVideoUrl}
            poster={siteSettings.showreelPoster}
            title="Afghanistan Tales & Trails showreel"
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full max-w-[1200px] mx-auto mt-12 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0B] flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-4 text-center px-6">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 text-white/70">
              <FiPlay className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Showreel coming soon</p>
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default ShowreelSection
