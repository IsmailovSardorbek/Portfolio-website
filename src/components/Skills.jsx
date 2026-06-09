import { SKILLS } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

function SkillCard({ skill, index }) {
  const ref = useScrollReveal(0.1, index * 80)

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty(
      '--mx',
      `${((e.clientX - rect.left) / rect.width) * 100}%`,
    )
    e.currentTarget.style.setProperty(
      '--my',
      `${((e.clientY - rect.top) / rect.height) * 100}%`,
    )
  }

  return (
    <div
      ref={ref}
      className="skill-card"
      style={{ '--level': `${skill.level}%` }}
      onMouseMove={onMouseMove}
    >
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-name">{skill.name}</div>
      <div className="skill-level-bar">
        <div className="skill-level-fill" />
      </div>
      <div className="skill-tag">{skill.tag}</div>
    </div>
  )
}

export function Skills() {
  const headerRef = useScrollReveal()

  return (
    <section id="skills">
      <div className="section-wrap">
        <div ref={headerRef} className="section-header reveal">
          <div className="section-eyebrow">// tech stack</div>
          <h2 className="section-title">Skills &amp; Tools</h2>
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
