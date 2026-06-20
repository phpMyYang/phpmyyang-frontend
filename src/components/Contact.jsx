import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailImg from '../assets/email.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, type: '', message: '' });

  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '', message: '' });
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
    setRecaptchaToken(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          recaptcha_token: recaptchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setToast({
          show: true,
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.',
        });
        handleCancel();
      } else {
        setToast({
          show: true,
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setToast({
        show: true,
        type: 'error',
        message: 'Network Error: Cannot connect to the server.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast({ show: false, type: '', message: '' }), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-5 position-relative"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="container py-4">
        <h2
          className="display-5 fw-bold mb-5 text-center text-lg-start"
          style={{ color: 'var(--accent)' }}
        >
          <span className="text-muted fs-4">&lt;</span> Contact Me{' '}
          <span className="text-muted fs-4">/&gt;</span>
        </h2>

        <div className="row align-items-center">
          <div className="col-lg-5 mb-5 mb-lg-0 text-center text-lg-start">
            <img
              src={emailImg}
              alt="Contact Jeremiah Ezekiel"
              className="img-fluid contact-image-float"
              style={{ maxWidth: '80%' }}
            />
          </div>

          <div className="col-lg-7">
            <div
              className="card border-0 shadow-lg p-4 p-md-5"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '15px',
              }}
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="form-label fw-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control custom-input"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="form-label fw-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control custom-input"
                    placeholder="johndoe@example.com"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="form-label fw-bold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control custom-input"
                    rows="5"
                    placeholder="Hello! I would like to discuss a project..."
                    required
                  ></textarea>
                </div>

                <div className="mb-4 d-flex justify-content-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    onChange={(token) => setRecaptchaToken(token)}
                    theme="dark"
                  />
                </div>

                <div className="d-flex gap-3 justify-content-center">
                  <button
                    type="button"
                    className="btn px-4 fw-bold custom-cancel-btn"
                    onClick={handleCancel}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-accent px-4 fw-bold"
                    disabled={!recaptchaToken || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>{' '}
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send-fill me-2"></i>{' '}
                        <span className="d-none d-sm-inline ms-2">
                          Send Message
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sileo-toast ${toast.show ? 'show' : ''} ${toast.type}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex align-items-center">
          <i
            className={`bi fs-4 me-3 ${toast.type === 'success' ? 'bi-check-circle-fill text-success' : 'bi-exclamation-triangle-fill text-danger'}`}
          ></i>
          <div>
            <h6 className="mb-1 fw-bold">
              {toast.type === 'success' ? 'Success!' : 'System Warning'}
            </h6>
            <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>
              {toast.message}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
