'use client';

import { useState } from 'react';
import ThemeToggle from '../ui/ThemeToggle';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="nav-wrap">
      <nav className="navbar" aria-label="Primary navigation">
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
        <div className={open ? 'nav-links nav-links-open' : 'nav-links'}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
