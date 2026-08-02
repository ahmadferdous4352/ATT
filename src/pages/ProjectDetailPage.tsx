import { useParams, Link, Navigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { projects } from '../data/projects'
import VideoEmbed from '../components/VideoEmbed'

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/work" replace />
  }

  return (
    <article className="w-full max-w-[900px] mx-auto px-5 md:px-8 lg:px-12 pt-40 pb-24 md:pt-48 md:pb-32">
      <Link to="/work" className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors">
        <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to work
      </Link>

      <p className="mt-8 text-xs uppercase tracking-[0.16em] text-[#9C9C9C]">{project.category}</p>
      <h1 className="mt-3 text-[32px] md:text-[46px] font-normal tracking-[-0.03em] text-[#F2F2F2]">
        {project.title}
      </h1>
      <p className="mt-2 text-sm text-white/55">
        {project.location} — {project.year}
      </p>

      <VideoEmbed
        url={project.videoUrl}
        poster={project.coverImage}
        title={`${project.title} — intro`}
        className="mt-8"
      />

      <p className="mt-8 max-w-[65ch] text-base leading-relaxed text-white/70">
        {project.description ?? project.summary}
      </p>

      {project.ethicsNote && <p className="mt-6 text-sm text-white/40 italic">{project.ethicsNote}</p>}
    </article>
  )
}

export default ProjectDetailPage
