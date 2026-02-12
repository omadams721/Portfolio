import './Hero.css'
import forestOverlook from '../assets/gallery/A forest overlook.JPEG'

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${forestOverlook})` }}>
      <div className="hero-inner">
        <h1 className="hero-name">Olivia Adams</h1>
        <p className="hero-tagline">Engineering & creative work</p>
        <a href="#projects" className="hero-scroll" aria-label="Scroll to projects">
          <span className="hero-scroll-dot" />
        </a>
      </div>
    </section>
  )
}

export default Hero
