import { TYPING_PHRASES } from '../data/content'
import { useCounter } from '../hooks/useCounter'
import { useMagnetic } from '../hooks/useMagnetic'
import { useTypewriter } from '../hooks/useTypewriter'

function Stat({ target, label }) {
  const { count, ref } = useCounter(target)

  return (
    <div className="hero-stat">
      <div ref={ref} className="hero-stat-num" data-count={target}>
        {count}+
      </div>
      <div className="hero-stat-label">{label}</div>
    </div>
  )
}

export function Hero() {
  const typedText = useTypewriter(TYPING_PHRASES)
  const magnetic = useMagnetic()

  return (
    <section className="hero">
      <p className="hero-tag">frontend developer // uzbekistan</p>
      <h1 className="hero-name">
        SAR<span className="highlight">DOR</span>
      </h1>
      <p className="hero-role">
        <span className="typing-text">{typedText}</span>
      </p>
      <p className="hero-desc">
        Crafting high-performance, pixel-perfect interfaces with React, TypeScript &amp; modern
        CSS. Passionate about animation, DX, and shipping products that feel <em>alive</em>.
      </p>
      <div className="hero-actions">
        <a
          href="#projects"
          className="btn-primary"
          onMouseMove={magnetic.onMouseMove}
          onMouseLeave={magnetic.onMouseLeave}
        >
          view my work
        </a>
        <a
          href="#contact"
          className="btn-outline"
          onMouseMove={magnetic.onMouseMove}
          onMouseLeave={magnetic.onMouseLeave}
        >
          get in touch
        </a>
      </div>

      <div className="hero-grid-right">
        <Stat target={3} label="yrs experience" />
        <Stat target={20} label="projects shipped" />
        <Stat target={8} label="tech stack" />
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        scroll to explore
      </div>
    </section>
  )
}
