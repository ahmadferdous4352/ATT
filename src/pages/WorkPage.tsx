import { motion, type Variants } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const WorkPage = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 pt-40 pb-24 md:pt-48 md:pb-32">
      <p className="text-xs uppercase tracking-[0.2em] text-[#9C9C9C]">Work</p>
      <h1 className="mt-4 max-w-[900px] text-[34px] md:text-[52px] font-normal tracking-[-0.03em] text-[#F2F2F2]">
        Documentary, photography, and design work from across Afghanistan.
      </h1>
      <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-white/70">
        Client identities and sensitive details are withheld where required. Category filtering
        and full case studies are coming to this page next.
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>
    </section>
  )
}

export default WorkPage
