import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills and Interest</h2>
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
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
