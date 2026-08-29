'use client';

import { useEffect, useRef, useState } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import { portfolio } from '../../data/portfolioContent.js';

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Profile', href: '#experience' },
  { label: 'Stack', href: '#skills' },
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
        <a className="site-mark" href="#home" onClick={closeMenu} aria-label="Robin Mahato, home">
          <span aria-hidden="true">R</span>
          <strong>{portfolio.site.name.toUpperCase()}</strong>
        </a>
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
        <p className="availability"><span aria-hidden="true" /> {portfolio.site.availability}</p>
      </nav>
    </div>
  );
}
