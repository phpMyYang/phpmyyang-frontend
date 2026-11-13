import React, { useState, useEffect, useRef } from 'react';

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

const DragIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ cursor: 'grab', opacity: 0.6 }}
  >
    <circle cx="9" cy="5" r="1" />
    <circle cx="9" cy="12" r="1" />
    <circle cx="9" cy="19" r="1" />
    <circle cx="15" cy="5" r="1" />
    <circle cx="15" cy="12" r="1" />
    <circle cx="15" cy="19" r="1" />
  </svg>
);

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system');
  const [position, setPosition] = useState({
    x: window.innerWidth - 180,
    y: window.innerHeight - 80,
  });
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef(null);
  const startPosRef = useRef({ x: 0, y: 0 });

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

  useEffect(() => {
    const handleResize = () => {
      setPosition((prev) => ({
        x: Math.min(prev.x, window.innerWidth - 150),
        y: Math.min(prev.y, window.innerHeight - 60),
      }));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startPosRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    document.body.style.userSelect = 'none';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    let newX = e.clientX - startPosRef.current.x;
    let newY = e.clientY - startPosRef.current.y;

    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 60;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.userSelect = '';
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const containerStyle = {
    position: 'fixed',
    left: `${position.x}px`,
    top: `${position.y}px`,
    zIndex: 9999,
    background: 'var(--container-bg)',
    padding: '6px',
    borderRadius: '30px',
    boxShadow: isDragging
      ? '0 8px 16px rgba(0,0,0,0.6)'
      : '0 4px 12px rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    border: '1px solid var(--accent)',
    transition: isDragging ? 'none' : 'box-shadow 0.2s ease',
  };

  const dragHandleStyle = {
    padding: '0 4px 0 8px',
    display: 'flex',
    alignItems: 'center',
    cursor: isDragging ? 'grabbing' : 'grab',
    color: 'var(--text-primary)',
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
    <div style={containerStyle} ref={dragRef}>
      <div
        style={dragHandleStyle}
        onMouseDown={handleMouseDown}
        title="Drag to move"
      >
        <DragIcon />
      </div>

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
