import React from 'react';

const TermsContent = () => {
  return (
    <div className="text-light">
      <h6
        className="text-accent fw-bold mt-3"
        style={{ color: 'var(--accent)' }}
      >
        1. Privacy Policy
      </h6>
      <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>
        Your privacy is important to me. Any information provided through the
        contact form is used solely for the purpose of responding to your
        inquiries and is not shared with third parties.
      </p>

      <h6
        className="text-accent fw-bold mt-3"
        style={{ color: 'var(--accent)' }}
      >
        2. Terms of Use
      </h6>
      <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>
        This website is created for portfolio and demonstration purposes only.
        All projects, code, and content displayed herein are the intellectual
        property of Jeremiah Ezekiel Lopeña.
      </p>

      <h6
        className="text-accent fw-bold mt-3"
        style={{ color: 'var(--accent)' }}
      >
        3. Security Standards
      </h6>
      <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>
        I implement security best practices to protect the integrity of this
        platform, including the use of reCAPTCHA to prevent spam and ensure
        secure communication.
      </p>

      <hr className="my-4 border-secondary" />
      <p className="small text-center opacity-50">
        © 2026 phpMyYang Portfolio | Built with Passion
      </p>
    </div>
  );
};

export default TermsContent;
