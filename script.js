/* ── MATRIX RAIN ── */
;(function () {
  const canvas = document.getElementById('matrixCanvas')
  const ctx = canvas.getContext('2d')
  function resize() {
    canvas.width = innerWidth
    canvas.height = innerHeight
  }
  resize()
  addEventListener('resize', resize)
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>{}[]|/\\=+-*&^%$#@!;:.,?'
  const fontSize = 13
  let cols = Math.floor(innerWidth / fontSize)
  let drops = Array(cols).fill(1)
  function draw() {
    ctx.fillStyle = 'rgba(2,11,6,0.05)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#00ff6a'
    ctx.font = fontSize + 'px JetBrains Mono,monospace'
    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)]
      ctx.fillStyle = Math.random() > 0.9 ? '#00ffd5' : '#00ff6a'
      ctx.globalAlpha = Math.random() * 0.5 + 0.5
      ctx.fillText(char, i * fontSize, drops[i] * fontSize)
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
        drops[i] = 0
      drops[i]++
    }
    ctx.globalAlpha = 1
  }
  setInterval(draw, 50)
  addEventListener('resize', () => {
    cols = Math.floor(innerWidth / fontSize)
    drops = Array(cols).fill(1)
  })
})()

/* ── CURSOR ── */
;(function () {
  const c = document.getElementById('cursor')
  const t = document.getElementById('cursor-trail')
  let mx = 0,
    my = 0,
    tx = 0,
    ty = 0
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX
    my = e.clientY
    c.style.left = mx + 'px'
    c.style.top = my + 'px'
  })
  function trail() {
    tx += (mx - tx) * 0.15
    ty += (my - ty) * 0.15
    t.style.left = tx + 'px'
    t.style.top = ty + 'px'
    requestAnimationFrame(trail)
  }
  trail()
})()

/* ── TYPING HERO ── */
;(function () {
  const el = document.getElementById('typingEl')
  const phrases = [
    'React Developer',
    'UI Engineer',
    'TypeScript Enthusiast',
    'Frontend Craftsman',
    'Animation Nerd',
  ]
  let pi = 0,
    ci = 0,
    deleting = false
  function tick() {
    const p = phrases[pi % phrases.length]
    if (!deleting) {
      el.textContent = p.slice(0, ++ci)
      if (ci === p.length) {
        deleting = true
        setTimeout(tick, 1800)
        return
      }
    } else {
      el.textContent = p.slice(0, --ci)
      if (ci === 0) {
        deleting = false
        pi++
      }
    }
    setTimeout(tick, deleting ? 35 : 80)
  }
  tick()
})()

/* ── HERO COUNTERS ── */
;(function () {
  const els = document.querySelectorAll('[data-count]')
  function animCount(el, target, dur = 1400) {
    const start = performance.now()
    ;(function step(now) {
      const t = Math.min((now - start) / dur, 1)
      const e = 1 - Math.pow(1 - t, 4)
      el.textContent = Math.round(e * target) + (target >= 10 ? '+' : '+')
      if (t < 1) requestAnimationFrame(step)
    })(performance.now())
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          animCount(en.target, +en.target.dataset.count)
          obs.unobserve(en.target)
        }
      })
    },
    { threshold: 0.5 },
  )
  els.forEach((el) => obs.observe(el))
})()

/* ── SCROLL REVEAL ── */
;(function () {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12 },
  )
  document
    .querySelectorAll('.reveal,.skill-card,.project-card,.timeline-item')
    .forEach((el) => obs.observe(el))
})()

/* ── STAGGER SKILL CARDS ── */
;(function () {
  const cards = document.querySelectorAll('.skill-card')
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = Array.from(cards).indexOf(e.target)
          setTimeout(() => e.target.classList.add('visible'), idx * 80)
          obs.unobserve(e.target)
        }
      })
    },
    { threshold: 0.1 },
  )
  cards.forEach((el) => obs.observe(el))
})()

/* ── STAGGER PROJECT CARDS ── */
;(function () {
  const cards = document.querySelectorAll('.project-card')
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = Array.from(cards).indexOf(e.target)
          setTimeout(() => e.target.classList.add('visible'), idx * 120)
          obs.unobserve(e.target)
        }
      })
    },
    { threshold: 0.1 },
  )
  cards.forEach((el) => obs.observe(el))
})()

/* ── STAGGER TIMELINE ── */
;(function () {
  const items = document.querySelectorAll('.timeline-item')
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const idx = Array.from(items).indexOf(e.target)
          setTimeout(() => e.target.classList.add('visible'), idx * 150)
          obs.unobserve(e.target)
        }
      })
    },
    { threshold: 0.15 },
  )
  items.forEach((el) => obs.observe(el))
})()

/* ── MAGNETIC EFFECT ON BUTTONS ── */
document
  .querySelectorAll('.btn-primary,.btn-outline,.form-submit')
  .forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect()
      const x = (e.clientX - r.left - r.width / 2) * 0.2
      const y = (e.clientY - r.top - r.height / 2) * 0.3
      btn.style.transform = `translate(${x}px,${y}px) translateY(-2px)`
    })
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = ''
    })
  })

/* ── FORM SUBMIT ── */
function handleSubmit(e) {
  e.preventDefault()
  const btn = e.target.querySelector('.form-submit')
  const orig = btn.textContent
  btn.textContent = 'Sent! ✓'
  btn.style.background = '#00cc55'
  setTimeout(() => {
    btn.textContent = orig
    btn.style.background = ''
    e.target.reset()
  }, 2500)
}

/* ── GLOW CARD MOUSE TRACKING ── */
document.querySelectorAll('.skill-card,.about-fact').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect()
    const x = (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '%'
    const y = (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%'
    card.style.setProperty('--mx', x)
    card.style.setProperty('--my', y)
  })
})
