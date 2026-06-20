import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about-me',
        'skills',
        'projects',
        'experience',
        'education',
        'contact',
      ];
      let current = 'hero';

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // I-run agad sa initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'Hero',
    'About Me',
    'Skills',
    'Projects',
    'Experience',
    'Education',
    'Contact',
  ];

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top shadow-sm"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <div className="container">
          <a
            className="navbar-brand fst-italic d-none d-lg-block"
            href="#hero"
            style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}
          >
            phpMyYang
          </a>

          <span
            className="navbar-brand fst-italic d-lg-none"
            onClick={toggleMenu}
            style={{
              color: 'var(--text-primary)',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            phpMyYang
          </span>

          <div className="collapse navbar-collapse justify-content-end d-none d-lg-flex">
            <ul className="navbar-nav">
              {navItems.map((item) => {
                const sectionId = item.toLowerCase().replace(' ', '-');
                const isActive = activeSection === sectionId;

                return (
                  <li className="nav-item mx-1" key={item}>
                    <a
                      className="nav-link px-3 fw-bold"
                      href={`#${sectionId}`}
                      style={{
                        color: isActive
                          ? 'var(--accent)'
                          : 'var(--text-primary)',
                        transition: 'all 0.3s ease',
                        borderBottom: isActive
                          ? '2px solid var(--accent)'
                          : '2px solid transparent',
                      }}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      <div
        className={`offcanvas offcanvas-start d-lg-none ${isOpen ? 'show' : ''}`}
        tabIndex="-1"
        style={{
          backgroundColor: 'var(--bg-primary)',
          visibility: isOpen ? 'visible' : 'hidden',
          zIndex: 1045,
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <div
          className="offcanvas-header"
          style={{ borderBottom: '1px solid var(--bg-secondary)' }}
        >
          <h5
            className="offcanvas-title fw-bold"
            style={{ color: 'var(--accent)' }}
          >
            Menu
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={closeMenu}
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 mt-3">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase().replace(' ', '-');
              const isActive = activeSection === sectionId;

              return (
                <li className="nav-item mb-3" key={item}>
                  <a
                    className="nav-link px-3 fs-5"
                    href={`#${sectionId}`}
                    style={{
                      color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                      fontWeight: isActive ? 'bold' : 'normal',
                      borderLeft: isActive
                        ? '4px solid var(--accent)'
                        : '4px solid transparent',
                      transition: 'all 0.3s ease',
                    }}
                    onClick={closeMenu}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          className="offcanvas-backdrop fade show d-lg-none"
          onClick={closeMenu}
          style={{ zIndex: 1040 }}
        ></div>
      )}
    </>
  );
};

export default Navbar;
