import { NAV_LINKS } from '../data/content'

export function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        SARDOR<span>.DEV</span>
      </div>
      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <div className="nav-status">
        <div className="status-dot" />
        available for work
      </div>
    </nav>
  )
}
