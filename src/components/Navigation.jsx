import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        // If we're on a different page, navigate to home first
        e.preventDefault()
        window.location.href = `/${href}`
      }
    }
    setIsMobileMenuOpen(false)
  }

  const projects = [
    { slug: 'autonomous-submarine-capstone', label: 'Autonomous Submarine' },
    { slug: 'turtlebot-navigation', label: 'TurtleBot Navigation' },
    { slug: 'robotic-block-manipulation', label: 'Robotic Block Manipulation' },
    { slug: 'photography', label: 'Photography' },
    { slug: 'art-projects', label: 'Art Projects' }
  ]

  const navLinks = [
    { href: '#about', label: 'About' },
    { label: 'Projects', isDropdown: true },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">Olivia Adams</Link>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label} className={link.isDropdown ? 'dropdown' : ''}>
              {link.isDropdown ? (
                <>
                  <button
                    className="dropdown-toggle"
                    onClick={() => setIsProjectsDropdownOpen(!isProjectsDropdownOpen)}
                    aria-expanded={isProjectsDropdownOpen}
                  >
                    {link.label}
                    <span className="dropdown-arrow">▼</span>
                  </button>
                  {isProjectsDropdownOpen && (
                    <ul className="dropdown-menu">
                      {projects.map((project) => (
                        <li key={project.slug}>
                          <Link to={`/project/${project.slug}`} onClick={() => setIsProjectsDropdownOpen(false)}>
                            {project.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
