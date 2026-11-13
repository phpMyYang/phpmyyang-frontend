import React, { useState } from 'react';

const TermsContent = ({ onClose }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleAgreeClick = () => {
    if (isChecked) {
      sessionStorage.setItem('termsAgreed', 'true');
      window.dispatchEvent(new Event('terms-agreed'));

      if (onClose) {
        onClose();
      } else {
        const closeBtn = document.getElementById('footer-terms-close-btn');
        if (closeBtn) closeBtn.click();
      }
    }
  };

  return (
    <div className="d-flex flex-column h-100">
      <div
        className="mb-3 px-3 py-2 custom-scrollbar flex-grow-1"
        style={{
          maxHeight: '40vh',
          overflowY: 'auto',
          border: '1px solid var(--border-color)',
          borderRadius: '8px',
          backgroundColor: 'var(--bg-primary)',
        }}
      >
        <div style={{ color: 'var(--text-primary)' }}>
          <h6 className="fw-bold mt-3" style={{ color: 'var(--accent)' }}>
            1. Privacy Policy
          </h6>
          <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>
            Your privacy is important to me. Any information provided through
            the contact form is used solely for the purpose of responding to
            your inquiries and is not shared with third parties.
          </p>

          <h6 className="fw-bold mt-3" style={{ color: 'var(--accent)' }}>
            2. Terms of Use
          </h6>
          <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>
            This website is created for portfolio and demonstration purposes
            only. All projects, code, and content displayed herein are the
            intellectual property of Jeremiah Ezekiel Lopeña.
          </p>

          <h6 className="fw-bold mt-3" style={{ color: 'var(--accent)' }}>
            3. Security Standards
          </h6>
          <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>
            I implement security best practices to protect the integrity of this
            platform, including the use of reCAPTCHA to prevent spam and ensure
            secure communication.
          </p>

          <hr className="my-4" style={{ borderColor: 'var(--border-color)' }} />
          <p className="small text-center opacity-50">
            © 2026 phpMyYang | Built with Passion
          </p>
        </div>
      </div>

      {/* Checkbox at Button */}
      <div className="d-flex flex-column gap-3 mt-2">
        <div className="form-check d-flex align-items-center gap-2">
          <input
            className="form-check-input m-0"
            type="checkbox"
            id="agreeCheckbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            style={{ cursor: 'pointer', borderColor: 'var(--accent)' }}
          />
          <label
            className="form-check-label"
            htmlFor="agreeCheckbox"
            style={{
              color: 'var(--text-primary)',
              cursor: 'pointer',
              userSelect: 'none',
              fontSize: '0.95rem',
            }}
          >
            I have read and agree to the Terms and Privacy Policy.
          </label>
        </div>

        <button
          className="btn fw-bold py-2"
          onClick={handleAgreeClick}
          disabled={!isChecked}
          style={{
            backgroundColor: isChecked ? 'var(--accent)' : 'transparent',
            color: isChecked ? '#fff' : 'var(--text-primary)',
            border: `2px solid ${isChecked ? 'var(--accent)' : 'gray'}`,
            opacity: isChecked ? 1 : 0.5,
            transition: 'all 0.3s ease',
            cursor: isChecked ? 'pointer' : 'not-allowed',
          }}
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

export default TermsContent;
