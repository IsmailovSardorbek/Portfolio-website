import { useState } from 'react'
import { CONTACT_LINKS } from '../data/content'
import { useMagnetic } from '../hooks/useMagnetic'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Contact() {
  const headerRef = useScrollReveal()
  const leftRef = useScrollReveal()
  const formRef = useScrollReveal()
  const magnetic = useMagnetic()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      e.target.reset()
    }, 2500)
  }

  return (
    <section id="contact">
      <div className="section-wrap">
        <div ref={headerRef} className="section-header reveal">
          <div className="section-eyebrow">// get in touch</div>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="contact-layout">
          <div ref={leftRef} className="reveal">
            <div className="contact-big">
              Let's build something <span className="glitch-word">great</span> together.
            </div>
            <p className="contact-sub">
              I'm currently open to freelance projects and full-time opportunities. Drop a
              message and I'll get back to you within 24 hours.
            </p>
            <div className="contact-links">
              {CONTACT_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="contact-link">
                  <span className="contact-link-icon">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <form ref={formRef} className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input className="form-input" type="text" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" type="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="form-submit"
              style={submitted ? { background: '#00cc55' } : undefined}
              onMouseMove={magnetic.onMouseMove}
              onMouseLeave={magnetic.onMouseLeave}
            >
              {submitted ? 'Sent! ✓' : 'Send message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
