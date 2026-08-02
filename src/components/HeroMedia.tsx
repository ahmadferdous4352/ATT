import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { siteSettings } from '../data/siteSettings'

const HeroMedia = () => {
  const shouldReduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const [imageFailed, setImageFailed] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })
  const translateX = useTransform(springX, [-1, 1], [-10, 10])
  const translateY = useTransform(springY, [-1, 1], [-10, 10])

  useEffect(() => {
    const canHover = window.matchMedia('(pointer: fine)').matches
    if (shouldReduceMotion || !canHover) return

    const el = containerRef.current
    if (!el) return

    const handleMouseMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      mouseX.set(((event.clientX - rect.left) / rect.width) * 2 - 1)
      mouseY.set(((event.clientY - rect.top) / rect.height) * 2 - 1)
    }
    const handleMouseLeave = () => {
      mouseX.set(0)
      mouseY.set(0)
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY, shouldReduceMotion])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
      className="relative w-full aspect-[16/9] min-h-[420px] md:min-h-[620px] overflow-hidden rounded-2xl mt-12 md:mt-16 bg-gradient-to-br from-[#141414] to-[#0B0B0B]"
    >
      {!imageFailed && (
        <motion.img
          src={siteSettings.heroImage}
          alt="Documentary field work in Afghanistan"
          style={{ x: translateX, y: translateY, scale: 1.08 }}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setImageFailed(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
    </motion.div>
  )
}

export default HeroMedia
