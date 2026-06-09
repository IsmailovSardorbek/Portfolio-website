import { PROJECTS } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

function WindowDots() {
  return (
    <div className="project-dots">
      <span className="dot-r" />
      <span className="dot-y" />
      <span className="dot-g" />
    </div>
  )
}

function ProjectCard({ project, index }) {
  const ref = useScrollReveal(0.1, index * 120)

  return (
    <div ref={ref} className="project-card">
      <div className="project-header">
        <WindowDots />
        <div className="project-filename">{project.filename}</div>
      </div>
      <div className="project-body">
        <div className="project-number">{project.number}</div>
        <div className="project-title">{project.title}</div>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.liveUrl} className="project-link">
            ⬡ Live demo
          </a>
          <a href={project.githubUrl} className="project-link">
            ⌥ GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const headerRef = useScrollReveal()

  return (
    <section id="projects">
      <div className="section-wrap">
        <div ref={headerRef} className="section-header reveal">
          <div className="section-eyebrow">// selected work</div>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
