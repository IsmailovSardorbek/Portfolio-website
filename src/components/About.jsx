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

function AboutFact({ label, value, valueStyle }) {
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
    <div className="about-fact" onMouseMove={onMouseMove}>
      <div className="about-fact-label">{label}</div>
      <div className="about-fact-value" style={valueStyle}>
        {value}
      </div>
    </div>
  )
}

export function About() {
  const headerRef = useScrollReveal()
  const terminalRef = useScrollReveal()
  const contentRef = useScrollReveal()

  return (
    <section id="about">
      <div className="section-wrap">
        <div ref={headerRef} className="section-header reveal">
          <div className="section-eyebrow">// who i am</div>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-layout">
          <div ref={terminalRef} className="about-terminal reveal">
            <div className="terminal-header">
              <WindowDots />
              <div className="terminal-title">sardor.config.json</div>
            </div>
            <div className="terminal-body">
              <span className="t-line">
                <span className="t-prompt">$</span> <span className="t-cmd">cat sardor.json</span>
              </span>
              <span className="t-line">{'{'}</span>
              <span className="t-line">
                &nbsp;&nbsp;<span className="t-key">"name"</span>:{' '}
                <span className="t-string">"Sardor"</span>,
              </span>
              <span className="t-line">
                &nbsp;&nbsp;<span className="t-key">"role"</span>:{' '}
                <span className="t-string">"Frontend Developer"</span>,
              </span>
              <span className="t-line">
                &nbsp;&nbsp;<span className="t-key">"location"</span>:{' '}
                <span className="t-string">"Uzbekistan 🇺🇿"</span>,
              </span>
              <span className="t-line">
                &nbsp;&nbsp;<span className="t-key">"languages"</span>: [
              </span>
              <span className="t-line">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-string">"Uzbek"</span>,{' '}
                <span className="t-string">"Russian"</span>,{' '}
                <span className="t-string">"English"</span>
              </span>
              <span className="t-line">&nbsp;&nbsp;],</span>
              <span className="t-line">
                &nbsp;&nbsp;<span className="t-key">"focus"</span>:{' '}
                <span className="t-string">"UI, Animation, DX"</span>,
              </span>
              <span className="t-line">
                &nbsp;&nbsp;<span className="t-key">"available"</span>:{' '}
                <span className="t-value">true</span>,
              </span>
              <span className="t-line">
                &nbsp;&nbsp;<span className="t-key">"coffee"</span>:{' '}
                <span className="t-value">Infinity</span>
              </span>
              <span className="t-line">{'}'}</span>
              <span className="t-line">&nbsp;</span>
              <span className="t-line">
                <span className="t-prompt">$</span>{' '}
                <span className="t-cmd">
                  _<span className="cursor-blink">|</span>
                </span>
              </span>
            </div>
          </div>

          <div ref={contentRef} className="about-content reveal">
            <p className="about-paragraph">
              Hey, I'm <strong>Sardor</strong> — a frontend developer who obsesses over the
              details that most people don't notice: the 60fps scroll, the spring physics on a
              button press, the 2ms difference that makes an interaction feel{' '}
              <strong>alive</strong>.
            </p>
            <p className="about-paragraph">
              I specialize in building fast, accessible, and beautifully animated web
              applications using the <strong>React ecosystem</strong>. TypeScript for safety,
              Redux for scale, Tailwind for speed.
            </p>
            <p className="about-paragraph">
              When I'm not pushing pixels, I explore new browser APIs, contribute to open source,
              and study the art of motion design to bring it into the web.
            </p>
            <div className="about-facts">
              <AboutFact label="Based in" value="Tashkent, UZ" />
              <AboutFact label="Specialty" value="React & TS" />
              <AboutFact label="Experience" value="3+ years" />
              <AboutFact
                label="Status"
                value="Open to work"
                valueStyle={{ color: 'var(--green)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
