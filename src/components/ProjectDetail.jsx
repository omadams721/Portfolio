import { useParams, Link } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import Navigation from './Navigation'
import Gallery from './Gallery'
import './ProjectDetail.css'

function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <>
        <Navigation />
        <div className="project-not-found">
          <div className="container">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/" className="back-link">← Back to Home</Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navigation />
      <section className={`project-detail project-${project.slug}`}>
        <div className="container">
          <Link to="/" className="back-link">← Back to Projects</Link>
          
          <div className="project-detail-header" style={{ backgroundImage: `url(${project.image})` }}>
            <div className="project-detail-overlay"></div>
            <div className="project-detail-info">
              <h1 className="project-detail-title">{project.title}</h1>
              <div className="project-detail-meta">
                <span className="year-badge">{project.year}</span>
                <div className="project-detail-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <p className="project-detail-description">{project.description}</p>
            </div>
          </div>

          <div 
            className="project-detail-content"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />

          {project.gallery && (
            <Gallery images={project.gallery} sortByDate={!!project.gallery[0]?.shotDate} />
          )}
          {project.gallerySections?.map((section, i) => (
            <div key={i} className="gallery-section">
              <h3 className="gallery-section-title">{section.title}</h3>
              <Gallery images={section.images} sortByDate={false} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ProjectDetail
