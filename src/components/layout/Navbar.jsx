'use client';

import { useEffect, useRef, useState } from 'react';
import ThemeToggle from '../ui/ThemeToggle';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="nav-wrap">
      <nav className="navbar" aria-label="Primary navigation">
        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="primary-nav-links"
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
        <div id="primary-nav-links" className={open ? 'nav-links nav-links-open' : 'nav-links'}>
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
