'use client';

import { useEffect, useSyncExternalStore } from 'react';

const themeEvent = 'portfolio-theme-change';

function getStoredTheme() {
  try {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // System preference remains available when storage is blocked.
  }

  return 'dark';
}

function subscribe(callback) {
  window.addEventListener(themeEvent, callback);
  window.addEventListener('storage', callback);

  return () => {
    window.removeEventListener(themeEvent, callback);
    window.removeEventListener('storage', callback);
  };
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getStoredTheme, () => 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('portfolio-theme', next);
    } catch {
      // The selected theme still applies for this page when storage is unavailable.
    }
    window.dispatchEvent(new Event(themeEvent));
  }

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === 'light'}
      onClick={toggleTheme}
    >
      <span aria-hidden="true">{nextTheme === 'light' ? 'L' : 'D'}</span>
    </button>
  );
}
