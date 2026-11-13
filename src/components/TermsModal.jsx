import React, { useState, useEffect } from 'react';
import TermsContent from './TermsContent';

const TermsModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasAgreed = sessionStorage.getItem('termsAgreed');
    if (!hasAgreed) {
      setShowModal(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  useEffect(() => {
    const handleAgreeEvent = () => {
      setShowModal(false);
      document.body.style.overflow = 'auto';
    };
    window.addEventListener('terms-agreed', handleAgreeEvent);
    return () => window.removeEventListener('terms-agreed', handleAgreeEvent);
  }, []);

  if (!showModal) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        zIndex: 10500,
        backdropFilter: 'blur(5px)',
      }}
    >
      <div
        className="rounded-4 shadow-lg p-4 mx-3"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--accent)',
          maxWidth: '500px',
          width: '100%',
        }}
      >
        <h3
          className="fw-bold mb-3 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          Terms and Policy
        </h3>
        <TermsContent
          onClose={() => {
            setShowModal(false);
            document.body.style.overflow = 'auto';
          }}
        />
      </div>
    </div>
  );
};

export default TermsModal;
