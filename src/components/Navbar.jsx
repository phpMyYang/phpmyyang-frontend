import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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
        'home',
        'about-me',
        'skills',
        'projects',
        'experience',
        'education',
        'certificates',
        'contact',
      ];
      let current = 'home';

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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: 'bi-house-door' },
    { name: 'About Me', icon: 'bi-person' },
    { name: 'Skills', icon: 'bi-lightning-charge' },
    { name: 'Projects', icon: 'bi-briefcase' },
    { name: 'Experience', icon: 'bi-building' },
    { name: 'Education', icon: 'bi-mortarboard' },
    { name: 'Certificates', icon: 'bi-award' },
    { name: 'Contact', icon: 'bi-envelope' },
  ];

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top shadow-sm"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <div className="container">
          <a
            className="navbar-brand fst-italic d-none d-lg-flex align-items-center gap-2"
            href="#home"
            style={{
              color: 'var(--text-primary)',
              fontWeight: 'bold',
              textDecoration: 'none',
            }}
          >
            <img
              src={logoImg}
              alt="Brand Logo"
              style={{
                width: '35px',
                height: '35px',
                objectFit: 'cover',
              }}
            />
            phpMyYang
          </a>

          <span
            className="navbar-brand fst-italic d-lg-none d-flex align-items-center gap-2"
            onClick={toggleMenu}
            style={{
              color: 'var(--text-primary)',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            <img
              src={logoImg}
              alt="Brand Logo"
              style={{
                width: '35px',
                height: '35px',
                objectFit: 'cover',
              }}
            />
            phpMyYang
          </span>

          <div className="collapse navbar-collapse justify-content-end d-none d-lg-flex">
            <ul className="navbar-nav">
              {navItems.map((item) => {
                const sectionId = item.name.toLowerCase().replace(' ', '-');
                const isActive = activeSection === sectionId;

                return (
                  <li className="nav-item mx-1" key={item.name}>
                    <a
                      className="nav-link px-3 fw-bold d-flex flex-column align-items-center justify-content-center"
                      href={`#${sectionId}`}
                      title={item.name}
                      style={{
                        color: isActive
                          ? 'var(--accent)'
                          : 'var(--text-primary)',
                        transition: 'all 0.3s ease',
                        borderBottom: isActive
                          ? '2px solid var(--accent)'
                          : '2px solid transparent',
                        paddingBottom: '8px',
                        height: '100%',
                      }}
                    >
                      <i className={`bi ${item.icon} fs-5`}></i>
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
              const sectionId = item.name.toLowerCase().replace(' ', '-');
              const isActive = activeSection === sectionId;

              return (
                <li className="nav-item mb-3" key={item.name}>
                  <a
                    className="nav-link px-3 fs-5 d-flex align-items-center"
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
                    {/* Show icon AND text on mobile */}
                    <i className={`bi ${item.icon} me-3`}></i>
                    {item.name}
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
