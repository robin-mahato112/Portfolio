import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = ['About', 'Skills', 'Projects', 'Journey', 'Achievements', 'Contact'];

export default function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
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
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
        <nav className={isOpen ? 'nav-links nav-links-open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </nav>
      </div>
    </header>
  );
}