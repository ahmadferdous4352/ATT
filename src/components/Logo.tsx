import { Link } from 'react-router-dom'
import { siteSettings } from '../data/siteSettings'

interface LogoProps {
  onClick?: () => void
  className?: string
}

const Logo = ({ onClick, className = '' }: LogoProps) => {
  return (
    <Link to="/" onClick={onClick} className={`flex items-center gap-2 ${className}`}>
      {siteSettings.logoImage ? (
        <img src={siteSettings.logoImage} alt="" className="h-6 w-auto" />
      ) : (
        <>
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path
              d="M7 23c3-8 5-8 8-14 2 4 3 6 5 6 2 0 3-4 5-8"
              stroke="#C2A477"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-lg font-medium tracking-tight text-white">ATT</span>
        </>
      )}
      <span className="sr-only"> — Afghanistan Tales &amp; Trails</span>
    </Link>
  )
}

export default Logo
