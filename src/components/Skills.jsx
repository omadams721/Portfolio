import wallee from '../assets/wallee.jpg'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills and Interest</h2>
        <div className="skills-body">
          <div className="skills-image-wrap">
            <img src={wallee} alt="Wallee" className="skills-image" />
            <p className="skills-image-credit">
              Photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Jason Leung</a> on <a href="https://unsplash.com/photos/yellow-and-gray-robot-toy-1DjbGRDh7-E?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>
            </p>
          </div>
        <div className="skills-content">
          <ul className="skills-list">
            <li className="skill-category-item">
              Robotics
              <ul className="skill-sub-list">
                <li>ROS, DH Parameters, Forward/Inverse Kinematics, Real-time programming</li>
              </ul>
            </li>
            <li className="skill-category-item">Control Systems</li>
            <li className="skill-category-item">Embedded Systems</li>
            <li className="skill-category-item">Socio-technical Systems</li>
            <li className="skill-category-item">
              Business Automation &amp; Quality Management
              <ul className="skill-sub-list">
                <li>Process automation, workflow design, QA practices and continuous improvement</li>
              </ul>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
