// Accepts whatever a person pastes — a regular vimeo.com/youtube.com share
// link, a youtu.be short link, or an already-correct embed URL — and
// normalizes it into something safe to drop into an <iframe src>.
export const getVideoEmbedUrl = (url?: string): string | null => {
  if (!url) return null
  const trimmed = url.trim()
  if (!trimmed) return null

  const vimeoMatch = trimmed.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?title=0&byline=0&portrait=0`
  }

  const youtubeMatch = trimmed.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/)
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}?rel=0`
  }

  if (trimmed.startsWith('http')) {
    return trimmed
  }

  return null
}
