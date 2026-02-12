import squidImage from '../assets/squid.jpg'
import turtleImage from '../assets/turtle.jpg'
import robotImage from '../assets/UR3e-BT.jpg'
import sunsetImage from '../assets/sunset in lagos.jpeg'
import churchImage from '../assets/camino_church.jpg'
import controlFeedback from '../assets/projects/autonomous submarine/control feedback diagram.png'
import submarineMech from '../assets/projects/autonomous submarine/squid_mechanical.png'
import finalReport from '../assets/projects/autonomous submarine/Final Report Documentation - Team S.Q.U.I.D..pdf'
import turtleReport from '../assets/projects/turtlebot/ENAE450_Final_Report_Group_14.pdf'
import turtleBotZoning from '../assets/projects/turtlebot/turtlebot_zoning.png'
import { getGallerySortedByDate } from './galleryPhotos'
import { artGallerySections } from './artPhotos'

export const projects = [
  {
    id: 1,
    slug: 'autonomous-submarine-capstone',
    title: 'Autonomous Submarine Capstone Project',
    description: 'A capstone project building a compact autonomous underwater robot for object detection and navigation.',
    year: '2025',
    technologies: ['Robotics', 'Embedded Systems', 'Control Systems'],
    image: squidImage,
    gallery: [
      { src: controlFeedback, alt: 'Control feedback diagram' },
      { src: submarineMech, alt: 'Submarine mechanical drawing' },
    ],
    content: `
      <h3>Project Overview</h3>
      <p>We’re building a fully autonomous underwater robot designed to find and approach a small object (a Testudo statue) within 1 cm accuracy. The vehicle must fit within a 20×20×20 cm constraint, remain watertight to 1 meter, and navigate completely on its own.</p>
      <p>Our work involves designing the vessel, integrating thrusters for movement, and using sonar sensors together with IMU-based positioning and signal-processing algorithms for detecting and localizing the target. Along the way, we’ve focused on making the robot stable in the water, balancing power and control, and ensuring it can reliably move and locate targets underwater.</p>
      <p><strong>Stretch goal:</strong> exploring underwater acoustic communication for future use cases.</p>

      <h3>Progress</h3>
      <div style="max-width:880px;">
        <h4>12/9/2025: Depth Regulation</h4>
        <div style="width:100%; height:auto; margin-bottom:0.75rem;">
          <iframe width="100%" height="495" src="https://www.youtube.com/embed/FXTq8g5h__0" title="Submarine Capstone Depth Regulation Test" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p>Control system feedback diagram:<br/><img src="${controlFeedback}" alt="control feedback diagram" style="max-width:420px; width:100%; height:auto; border:1px solid #ddd;" /></p>

        <h4>12/4/2025: Remote Operation</h4>
        <div style="width:100%; height:auto; margin-bottom:0.75rem;">
          <iframe width="100%" height="495" src="https://www.youtube.com/embed/5LaevbLPF0g" title="Remote operation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <h4>10/8: Milestone 1 — Proof of concept</h4>
        <div style="width:100%; height:auto; margin-bottom:0.75rem;">
          <iframe width="100%" height="495" src="https://www.youtube.com/embed/fqB79y_hSg0" title="Proof-of-concept demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p>The submarine is powered by two waterproof motors for forward/backward and left/right movement. The motors were tethered to an external H-bridge and power supply, and we controlled them using an Arduino running a C/C++ program with keyboard input from a laptop.</p>
      </div>

      <h3>Mechanical Overview</h3>
      <p>The mechanical design centers on a compact, pressure-tolerant hull sized to the 20×20×20 cm constraint. Structural components include a lightweight internal frame, a sealed gland for cabling, and mounting points for two waterproof thrusters that provide forward/reverse and lateral control. Silicone potting and a gland cap are used at critical penetrations to ensure the vehicle remains watertight to 1 m. Balance and buoyancy were tuned using internal ballast and component placement to achieve neutral or slightly positive buoyancy for stable operation.</p>

      <h3>Electrical Overview</h3>
      <p>The electrical system provides power distribution, motor drivers, sensor interfaces, and the onboard compute platform. Core components include waterproof DC motors controlled via an H-bridge during early tethered testing, a battery pack and power-management circuitry sized to balance runtime vs weight, sonar transducer connections, and an IMU for orientation and acceleration sensing. Sensor signals are routed through isolation and filtering stages where needed, and connectors are sealed with gland fittings to maintain the enclosure integrity.</p>

      <h3>Software Overview</h3>
      <p>The software stack is the central focus for autonomy: it fuses sensor data, maintains vehicle state, performs perception, and issues motion commands. Key software components are:</p>
      <ul>
        <li><strong>Perception & object detection:</strong> Sonar signal processing and detection algorithms are used to identify and localize the Testudo statue. Processing includes matched-filtering and peak detection on sonar returns, along with heuristics to reject spurious echoes. Algorithms are optimized to run on the onboard compute platform with low latency.</li>
        <li><strong>Navigation & control:</strong> A hierarchical control architecture executes high-level waypoint planning and low-level PID-based thruster commands. Depth regulation is handled by an inner loop (fast sampling rate) while lateral navigation and approach behaviors run in a higher-level planner that uses refined sonar detections to update the target estimate.</li>
        <li><strong>Behavior & mission logic:</strong> Finite-state behaviors manage mission phases (search, approach, fine-approach, and hold). During search the vehicle performs a lawnmower or spiral pattern; when a sonar detection is reported, the approach controller switches to a fine-approach routine using sonar-guided servoing to reach the 1 cm final accuracy.</li>
        <li><strong>Onboard tooling & data flow:</strong> Data flows from sensors → fusion → localization → planner → controller. Telemetry and diagnostic logs are buffered and can be streamed during tethered or remote operation for debugging. The project includes a data-flow diagram in the report illustrating these pipelines.</li>
      </ul>
      <p>Software choices prioritized real-time responsiveness, robustness to noise, and ability to run on embedded hardware. Early development used Arduino/C++ for motor control and prototyping; higher-level autonomy runs on a more capable single-board computer where the perception and state-estimation stacks execute. The repository and code artifacts are linked from the final report for reproducibility and future development.</p>

      <p><a href="${finalReport}" target="_blank" rel="noopener" download>Download final report (PDF)</a></p>

      <h3>Credits</h3>
      <p>Team S.Q.U.I.D.: Marco Albano, Olivia Adams, Brian Wu, Marg Gouker.</p>

      <p>Project images are stored in the <em>projects/autonomous submarine</em> assets folder.</p>
    `
  },
  {
    id: 2,
    slug: 'turtlebot-navigation',
    title: 'TurtleBot Navigation Project',
    description: 'Maze navigation on Turtlebot3 Waffle Pi using LIDAR-based zone nav.',
    year: '2025',
    technologies: ['ROS2', 'Robotics', 'LIDAR', 'Navigation'],
    image: turtleImage,
    content: `
      <h3>Project overview</h3>
      <p>The goal of this project was to implement an algorithm in ROS2 to autonomously navigate a Turtlebot3 Waffle Pi robot out of a maze while using LIDAR data to avoid obstacles.</p>

      <div style="width:100%; max-width:880px; margin:0.5rem 0;">
        <iframe width="100%" height="495" src="https://www.youtube.com/embed/6uFUIKFPzCM" title="TurtleBot maze navigation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <h3>Software Design</h3>
      <p>The maze navigation algorithm we implemented is called <em>zone nav</em>. We collect LIDAR scans from the front of the robot and group the scan ranges into three regions: left, center, and right. For each region we compute the average distance to obstacles; these averages drive a simple decision structure.</p>
      <p>If the average distance in the center region is shorter than a threshold, the robot stops and compares left vs right to turn toward the side with more space. If the center is clear, the robot compares all three regions and moves forward while veering toward the region with the most space. This decision logic runs repeatedly inside <code>scan_callback()</code>, which receives <code>sensor_msgs/LaserScan</code> messages so the robot dynamically adapts to new LIDAR data.</p>

      <p><strong>Diagram:</strong></p>
      <p><img src="${turtleBotZoning}" alt="zone nav diagram" style="max-width:640px; width:100%; height:auto; border:1px solid #ddd;" /></p>

      <h3>Report</h3>
      <p><a href="${turtleReport}" target="_blank" rel="noopener" download>Download ENAE450 Final Report (PDF)</a></p>

      <h3>Team Members</h3>
      <p>Olivia Adams, Swetha Pallerla, Kevin Yen, Kush Patel</p>
    `
  },
  {
    id: 3,
    slug: 'robotic-block-manipulation',
    title: 'Robotic Block Manipulation Project',
    description: 'Robotic manipulation project involving block handling and precise control.',
    year: '2024',
    technologies: ['Robotics', 'Manipulation', 'Control Systems'],
    image: robotImage,
    content: `
      <p>This robotic block manipulation project explores the complexities of robotic manipulation and precise control systems.</p>
      <p>Working with industrial robotic arms, the project focuses on developing algorithms for accurate block handling, demonstrating the intersection of mechanical engineering, control theory, and computer vision.</p>
      <h3>Key Features</h3>
      <ul>
        <li>Precise robotic manipulation</li>
        <li>Forward and inverse kinematics</li>
        <li>Computer vision integration</li>
        <li>Real-time control systems</li>
      </ul>
    `
  },
  {
    id: 4,
    slug: 'photography',
    title: 'Photography',
    description: 'Creative photography projects exploring visual storytelling and composition.',
    year: '2020 - 2025',
    technologies: ['Photography', 'Visual Arts'],
    image: sunsetImage,
    gallery: getGallerySortedByDate(),
    content: `
      <p>My photography work spans multiple years of exploration in visual storytelling and composition.</p>
      <p>Through various projects, I've explored different techniques, lighting conditions, and subjects, developing a unique perspective on capturing moments and emotions through the lens.</p>
      <h3>Focus Areas</h3>
      <ul>
        <li>Landscape and nature photography</li>
        <li>Portrait photography</li>
        <li>Street photography</li>
        <li>Experimental techniques</li>
      </ul>
    `
  },
  {
    id: 5,
    slug: 'art-projects',
    title: 'Art Projects',
    description: 'Various creative art projects spanning multiple mediums and techniques.',
    year: '2020-2025',
    technologies: ['Art', 'Creative Design'],
    image: churchImage,
    gallerySections: artGallerySections,
    content: `
      <p>My art projects represent a diverse exploration of creative expression across multiple mediums and techniques.</p>
      <p>From traditional drawing and painting to digital art and mixed media, these projects reflect my passion for creative expression and the intersection of art and technology.</p>
      <h3>Mediums Explored</h3>
      <ul>
        <li>Traditional drawing and painting</li>
        <li>Digital art</li>
        <li>Mixed media</li>
        <li>Installation art</li>
      </ul>
    `
  }
]

export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug)
}
