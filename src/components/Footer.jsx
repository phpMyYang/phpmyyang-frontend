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
        <>
          <div
            className="modal show d-block"
            tabIndex="-1"
            style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div
                className="modal-content"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  border: '1px solid rgba(254,119,67,0.3)',
                }}
              >
                <div className="modal-header border-0">
                  <h5
                    className="modal-title fw-bold d-flex align-items-center"
                    style={{ color: 'var(--accent)' }}
                  >
                    <i className="bi bi-shield-lock-fill me-2"></i> Terms and
                    Policy
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={handleClose}
                  ></button>
                </div>
                <div className="modal-body">
                  <TermsContent />
                </div>
                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-outline-light"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
