import { motion, type Variants } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const FeaturedWorkSection = () => {
  const featured = projects.filter((project) => project.featured)

  return (
    <section
      aria-labelledby="featured-work-heading"
      className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-xs uppercase tracking-[0.2em] text-[#9C9C9C]"
      >
        Featured Work
      </motion.p>

      <motion.h2
        id="featured-work-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mt-4 text-[30px] md:text-[40px] font-normal tracking-[-0.03em] text-[#F2F2F2]"
      >
        Selected Projects
      </motion.h2>

      <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-white/70">
        A small selection of recent visual work. Client identities and sensitive details are
        withheld where required.
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
      >
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>
    </section>
  )
}

export default FeaturedWorkSection
