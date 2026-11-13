import React, { useState } from 'react';

const Certificate = () => {
  const [hoveredCert, setHoveredCert] = useState(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const certificates = [
    {
      title: 'Programming (Java) NC III',
      issuer: 'TESDA (Technical Education and Skills Development Authority)',
      date: 'May 2026',
      file: '/TesdaJava.pdf',
      dimensions: { width: 395, height: 280 },
    },
    {
      title: 'Supervised Industry Learning in Programming (JAVA) NC III',
      issuer: 'Spring Valley Tech Corp.',
      date: 'June 1-6, 2026',
      file: '/SpringValley.pdf',
      dimensions: { width: 350, height: 200 },
    },
    {
      title: 'AWS Cloud Quest: Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'June 8, 2026',
      file: '/aws_certificate.pdf',
      dimensions: { width: 360, height: 280 },
    },
    {
      title: 'Securing the Digital Realm: MongoDB NoSQL from Scratch',
      issuer: 'La Consolacion University Philippines',
      date: 'July 27, 2024',
      file: '/MongoDB.pdf',
      dimensions: { width: 395, height: 280 },
    },
    {
      title: 'Artificial Intelligence in Higher Education',
      issuer: 'La Consolacion University Philippines',
      date: 'July 27, 2024',
      file: '/ArtificialIntellegence.pdf',
      dimensions: { width: 395, height: 280 },
    },
  ];

  const handleMouseEnter = (e, cert) => {
    setHoveredCert(cert);
    updateModalPosition(e, cert);
  };

  const handleMouseMove = (e, cert) => {
    updateModalPosition(e, cert);
  };

  const handleMouseLeave = () => {
    setHoveredCert(null);
  };

  const updateModalPosition = (e, cert) => {
    if (!cert) return;

    const modalWidth = cert.dimensions.width;
    const modalHeight = cert.dimensions.height;
    const offset = 20;

    let newX = e.clientX + offset;
    let newY = e.clientY + offset;

    if (newX + modalWidth > window.innerWidth) {
      newX = e.clientX - modalWidth - offset;
    }

    if (newY + modalHeight > window.innerHeight) {
      newY = e.clientY - modalHeight - offset;
    }

    setModalPosition({
      x: newX,
      y: newY,
    });
  };

  return (
    <section
      id="certificates"
      className="py-5 position-relative"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="container py-4">
        <h2
          className="display-5 fw-bold mb-5 text-center text-lg-start"
          style={{ color: 'var(--accent)' }}
        >
          <span className="text-muted fs-4">&lt;</span> Certifications{' '}
          <span className="text-muted fs-4">/&gt;</span>
        </h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
          {certificates.map((cert, index) => (
            <div className="col" key={index}>
              <div
                className="card h-100 edu-card border-0 shadow-sm p-3"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '12px',
                  borderLeft: '4px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => handleMouseEnter(e, cert)}
                onMouseMove={(e) => handleMouseMove(e, cert)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="card-body p-1 d-flex flex-column">
                  <div className="mb-3">
                    <span
                      className="badge rounded-pill d-inline-flex align-items-center"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        color: 'var(--accent)',
                        border: '1px solid rgba(254,119,67,0.3)',
                        padding: '6px 10px',
                      }}
                    >
                      <i className="bi bi-award-fill me-2 fs-6"></i> {cert.date}
                    </span>
                  </div>

                  <h6
                    className="fw-bold mb-2 flex-grow-1"
                    style={{ color: 'var(--text-primary)', lineHeight: '1.4' }}
                  >
                    {cert.title}
                  </h6>

                  <div
                    className="mt-auto pt-2"
                    style={{ borderTop: '1px dashed var(--border-color)' }}
                  >
                    <small
                      className="opacity-75 d-block"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      <i className="bi bi-building me-2"></i>
                      {cert.issuer}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {certificates.map((cert, index) => {
        const isActive = hoveredCert && hoveredCert.title === cert.title;

        return (
          <div
            key={`modal-${index}`}
            className="position-fixed shadow-lg rounded"
            style={{
              opacity: isActive ? 1 : 0,
              visibility: isActive ? 'visible' : 'hidden',
              transition: 'opacity 0.2s ease, visibility 0.2s ease',
              top: isActive ? modalPosition.y : -9999,
              left: isActive ? modalPosition.x : -9999,
              width: `${cert.dimensions.width}px`,
              height: `${cert.dimensions.height}px`,
              backgroundColor: '#fff',
              border: '2px solid var(--accent)',
              overflow: 'hidden',
              pointerEvents: 'none',
              zIndex: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <iframe
              src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
              title={cert.title}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              scrolling="no"
            />
          </div>
        );
      })}
    </section>
  );
};

export default Certificate;
