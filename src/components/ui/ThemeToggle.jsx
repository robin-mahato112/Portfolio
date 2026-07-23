'use client';

import { useEffect, useState } from 'react';

function getInitialTheme() {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.dataset.theme || 'dark';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === 'light'}
      onClick={() => setTheme(nextTheme)}
    >
      <span aria-hidden="true">{nextTheme === 'light' ? 'L' : 'D'}</span>
    </button>
  );
}
