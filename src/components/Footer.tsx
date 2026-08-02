import { Link } from 'react-router-dom'
import { FiMail, FiInstagram, FiYoutube } from 'react-icons/fi'
import { navLinks } from '../data/navigation'
import { services } from '../data/services'
import { siteSettings } from '../data/siteSettings'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-16 md:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="text-lg font-medium tracking-tight text-white">ATT</span>
            <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-white/55">
              Afghanistan Tales &amp; Trails is a visual production studio creating documentary
              films, photography, design, and visual stories across Afghanistan.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-xs uppercase tracking-[0.16em] text-white/40">Navigate</p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/65 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/ethics" className="text-sm text-white/65 hover:text-white transition-colors">
                  Ethical Filming Policy
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-white/40">Services</p>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.number} className="text-sm text-white/65">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10 pt-8">
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${siteSettings.email}`}
              aria-label="Email"
              className="text-white/55 hover:text-white transition-colors"
            >
              <FiMail className="h-4 w-4" aria-hidden="true" />
            </a>
            {/* Placeholder social links — point these at the real accounts before launch */}
            <a href="#" aria-label="Instagram" className="text-white/55 hover:text-white transition-colors">
              <FiInstagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#" aria-label="YouTube" className="text-white/55 hover:text-white transition-colors">
              <FiYoutube className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Afghanistan Tales &amp; Trails. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
