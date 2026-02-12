import './Contact.css'
import headshotImage from '../assets/headshot.png'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-headshot">
            <img src={headshotImage} alt="Olivia Adams headshot" />
          </div>
          <div className="contact-content">
            <p className="contact-description">
              Feel free to reach out if you'd like to collaborate or learn more about my work!
            </p>
            <div className="contact-links">
              <a href="mailto:omadams721@gmail.com" className="contact-link">
                <span className="contact-icon">📧</span>
                omadams721@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/omadams721" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon">💼</span>
                LinkedIn
              </a>
              <a href="https://www.youtube.com/@OliviaAdams721" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon">▶️</span>
                YouTube
              </a>
              <a href="/Olivia Adams - Resume.pdf" className="contact-link" download>
                <span className="contact-icon">📄</span>
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
