export function Footer() {
  return (
    <footer>
      <div className="footer-text">
        © 2026 <span>Sardor</span> — Built with React, Vite &amp; modern CSS
      </div>
      <a href="#" className="footer-back" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
        ↑ back to top
      </a>
    </footer>
  )
}
