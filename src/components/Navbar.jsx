import { useState } from 'react';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="navbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Robin Mahato home">
          RM
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
        <nav className={open ? 'nav-links nav-links-open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}