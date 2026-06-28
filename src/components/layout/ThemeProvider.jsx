'use client';

import { useEffect } from 'react';

export default function ThemeProvider({ children }) {
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) document.documentElement.dataset.theme = saved;
  }, []);

  return children;
}