import React, { useState } from 'react';
import TermsContent from './TermsContent';

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <footer
      className="py-4 mt-auto"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="d-flex gap-4 mb-3 mb-md-0">
          <a
            href="https://facebook.com/share/187wCEkSn8/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <i className="bi bi-facebook fs-4"></i>
          </a>
          <a
            href="https://instagram.com/hieremias_?igsh=MWI2bDIzbXF5YzcwZ"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <i className="bi bi-instagram fs-4"></i>
          </a>
          <a
            href="https://wa.me/639634942104"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <i className="bi bi-whatsapp fs-4"></i>
          </a>
          <a
            href="https://github.com/phpMyYang"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <i className="bi bi-github fs-4"></i>
          </a>
        </div>

        <div className="mb-3 mb-md-0">
          <span className="small opacity-50">© 2026 phpMyYang</span>
        </div>

        <div>
          <button
            className="btn btn-link text-decoration-none p-0 d-flex align-items-center"
            onClick={handleShow}
            style={{ color: 'var(--text-primary)', opacity: 0.7 }}
          >
            <i className="bi bi-file-earmark-text me-2"></i>
            Terms and Policy
          </button>
        </div>
      </div>

      {show && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 10550,
            backdropFilter: 'blur(5px)',
          }}
        >
          <div
            className="rounded-4 shadow-lg p-4 mx-3 position-relative"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--accent)',
              maxWidth: '500px',
              width: '100%',
            }}
          >
            <button
              type="button"
              className="btn-close btn-close-white position-absolute top-0 end-0 m-4"
              onClick={handleClose}
              aria-label="Close"
            ></button>

            <h3
              className="fw-bold mb-3 text-center"
              style={{ color: 'var(--text-primary)' }}
            >
              Terms and Policy
            </h3>
            <TermsContent onClose={handleClose} />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
