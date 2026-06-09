import { EXPERIENCES } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

function TimelineItem({ item, index }) {
  const ref = useScrollReveal(0.15, index * 150)

  return (
    <div ref={ref} className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-period">{item.period}</div>
      <div className="timeline-role">{item.role}</div>
      <div className="timeline-company">{item.company}</div>
      <p className="timeline-desc">{item.description}</p>
      <div className="timeline-techs">
        {item.techs.map((tech) => (
          <span key={tech} className="timeline-tech">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Experience() {
  const headerRef = useScrollReveal()

  return (
    <section id="experience">
      <div className="section-wrap">
        <div ref={headerRef} className="section-header reveal">
          <div className="section-eyebrow">// work history</div>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="timeline">
          {EXPERIENCES.map((item, index) => (
            <TimelineItem key={item.period} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
