import './Contact.css'
import headshotImage from '../assets/headshot.png'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-content">
            <div className="contact-headshot">
              <img src={headshotImage} alt="Olivia Adams headshot" />
            </div>
            <p className="contact-description">
              Feel free to reach out if you'd like to collaborate or learn more about my work!
            </p>
            <div className="contact-links">
              <div className="social-row">
                <a href="https://www.linkedin.com/in/omadams721" className="contact-link" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <span className="contact-sep">|</span>
                <a href="https://github.com/omadams721" className="contact-link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <span className="contact-sep">|</span>
                <a href="https://www.youtube.com/@OliviaAdams721" className="contact-link" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </div>
              <a href="/Olivia Adams - Resume.pdf" className="contact-link" download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
