import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { navLinks } from '../data/navigation'
import Logo from './Logo'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] bg-[#080808]"
        >
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 md:px-8 py-6">
            <Logo onClick={onClose} />
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white"
            >
              <FiX className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex min-h-screen flex-col items-center justify-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={onClose}
                className="text-3xl md:text-4xl font-normal tracking-tight text-white hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
