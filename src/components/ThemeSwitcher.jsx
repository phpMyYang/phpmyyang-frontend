import React, { useState, useEffect } from 'react';

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MonitorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="14" x="2" y="3" rx="2" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system');

  useEffect(() => {
    const root = document.documentElement;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (currentTheme) => {
      if (currentTheme === 'dark') {
        root.setAttribute('data-theme', 'dark');
      } else if (currentTheme === 'light') {
        root.setAttribute('data-theme', 'light');
      } else {
        if (systemPrefersDark.matches) {
          root.setAttribute('data-theme', 'dark');
        } else {
          root.setAttribute('data-theme', 'light');
        }
      }
    };

    applyTheme(theme);
    localStorage.setItem('theme', theme);

    const handleSystemChange = () => {
      if (theme === 'system') applyTheme('system');
    };

    systemPrefersDark.addEventListener('change', handleSystemChange);
    return () =>
      systemPrefersDark.removeEventListener('change', handleSystemChange);
  }, [theme]);

  const containerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 9999,
    background: 'var(--container-bg)',
    padding: '6px',
    borderRadius: '30px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
    display: 'flex',
    gap: '4px',
    border: '1px solid var(--accent)',
  };

  const btnStyle = (activeTheme) => ({
    background: theme === activeTheme ? 'var(--accent)' : 'transparent',
    color: theme === activeTheme ? '#fff' : 'var(--text-primary)',
    border: 'none',
    padding: '8px 10px',
    borderRadius: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  });

  return (
    <div style={containerStyle}>
      <button
        onClick={() => setTheme('light')}
        style={btnStyle('light')}
        title="Light Mode"
      >
        <SunIcon />
      </button>
      <button
        onClick={() => setTheme('system')}
        style={btnStyle('system')}
        title="System Theme"
      >
        <MonitorIcon />
      </button>
      <button
        onClick={() => setTheme('dark')}
        style={btnStyle('dark')}
        title="Dark Mode"
      >
        <MoonIcon />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
