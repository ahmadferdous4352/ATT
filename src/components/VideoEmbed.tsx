import { useState } from 'react'
import { FiPlay } from 'react-icons/fi'
import { getVideoEmbedUrl } from '../utils/video'

interface VideoEmbedProps {
  url?: string
  poster?: string
  title: string
  className?: string
}

// Renders nothing if there's no valid video URL, so callers can show their
// own empty/coming-soon state instead.
const VideoEmbed = ({ url, poster, title, className = '' }: VideoEmbedProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const embedUrl = getVideoEmbedUrl(url)

  if (!embedUrl) return null

  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0B] ${className}`}
    >
      {isPlaying ? (
        <iframe
          src={`${embedUrl}${embedUrl.includes('?') ? '&' : '?'}autoplay=1`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="group absolute inset-0 flex items-center justify-center"
          aria-label={`Play ${title}`}
        >
          {poster && <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />}
          <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/30" />
          <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-white/60">
            <FiPlay className="ml-1 h-6 w-6" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  )
}

export default VideoEmbed
