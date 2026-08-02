import { motion } from 'framer-motion'

const headingPhrases = [
  'Afghanistan Tales and Trails is a visual production studio',
  'working across Afghanistan, creating documentary,',
  'photography, and design stories for global audiences.',
]

const HeroContent = () => {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-xs uppercase tracking-[0.2em] text-[#9C9C9C]"
      >
        Afghanistan Tales &amp; Trails
      </motion.p>

      <h1 className="mt-6 max-w-[1100px] font-normal leading-[1.05] tracking-[-0.035em] text-[38px] sm:text-[46px] md:text-[58px] lg:text-[72px] xl:text-[82px] text-[#F2F2F2]">
        {headingPhrases.map((phrase, index) => (
          <motion.span
            key={phrase}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 + index * 0.12 }}
            className="block"
          >
            {phrase}
          </motion.span>
        ))}
      </h1>
    </div>
  )
}

export default HeroContent
