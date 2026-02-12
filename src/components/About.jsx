import './About.css'
import headshot from '../assets/headshot.png'

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <div className="about-grid">
          <div className="about-image-wrap">
            <img src={headshot} alt="Olivia Adams" className="about-image" />
          </div>
          <div className="about-text-wrap">
            <h2 className="section-title">About</h2>
            <p className="about-lead">
              I'm a senior computer engineering student at the University of Maryland, passionate about
              projects that bring hardware and software together. I love anything that moves!
            </p>
            <p className="about-body">
              I'm also deeply interested in the intersection of technology and society. Here's a collection
              of projects I've been working on in the classroom, and stuff outside to satisfy my creative itch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
