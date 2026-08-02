import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'
import type { Project } from '../data/projects'

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [imageFailed, setImageFailed] = useState(false)
  const imageSrc = project.coverImage

  return (
    <motion.article variants={itemVariants}>
      <Link
        to={`/work/${project.slug}`}
        className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0B] transition-colors duration-300 hover:bg-[#111111]"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#141414] to-[#0B0B0B]">
          {imageSrc && !imageFailed ? (
            <img
              src={imageSrc}
              alt={project.title}
              onError={() => setImageFailed(true)}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-xs uppercase tracking-[0.2em] text-white/25">{project.category}</span>
            </div>
          )}
          {project.videoUrl && (
            <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur-sm">
              <FiPlay className="h-3.5 w-3.5 ml-0.5" aria-hidden="true" />
            </span>
          )}
        </div>
        <div className="p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.16em] text-[#9C9C9C]">{project.category}</p>
          <h3 className="mt-3 text-2xl font-medium text-white">{project.title}</h3>
          <p className="mt-2 text-sm text-white/55">
            {project.location} — {project.year}
          </p>
          <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-white/70">{project.summary}</p>
          {project.ethicsNote && <p className="mt-4 text-xs text-white/40 italic">{project.ethicsNote}</p>}
        </div>
      </Link>
    </motion.article>
  )
}

export default ProjectCard
