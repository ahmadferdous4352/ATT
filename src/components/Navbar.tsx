import { useState } from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'
import { navLinks } from '../data/navigation'
import MobileMenu from './MobileMenu'
import Logo from './Logo'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed top-4 left-0 w-full z-50 px-4 md:px-6 lg:px-10"
      >
        <nav
          aria-label="Primary"
          className="max-w-[1280px] mx-auto flex items-center justify-between rounded-2xl border border-white/10 bg-black/75 backdrop-blur-xl px-4 md:px-6 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
        >
          <Logo />

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <RouterNavLink
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-[0.14em] font-medium transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-white/65 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </RouterNavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white lg:hidden"
          >
            <FiMenu className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </motion.header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

export default Navbar
