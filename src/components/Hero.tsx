import HeroContent from './HeroContent'
import HeroMedia from './HeroMedia'

const Hero = () => {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 pt-40 pb-24 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40"
    >
      <HeroContent />
      <HeroMedia />
    </section>
  )
}

export default Hero
