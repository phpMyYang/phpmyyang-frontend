import React, { useState, useEffect } from 'react';
import heroImg from '../assets/me.png';

const Hero = () => {
  const fullText = "Hi, I'm Jeremiah Ezekiel Lopeña.";
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    let typingInterval;

    if (isTyping) {
      typingInterval = setInterval(() => {
        setText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(typingInterval);
          setIsTyping(false);

          setTimeout(() => {
            setText('');
            setIsTyping(true);
          }, 10000);
        }
      }, 100);
    }

    return () => clearInterval(typingInterval);
  }, [isTyping]);

  return (
    <section
      id="hero"
      className="min-vh-100 d-flex align-items-center pt-5 mt-5 mt-lg-0"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start">
            <h1
              className="display-4 fw-bold"
              style={{ minHeight: '120px', color: 'var(--text-primary)' }}
            >
              {text}
              <span className="cursor-blink">|</span>
            </h1>

            <p
              className="lead mt-2 mb-4 mx-auto mx-lg-0"
              style={{
                color: 'var(--text-primary)',
                opacity: 0.9,
                maxWidth: '600px',
              }}
            >
              Highly motivated and eager fresh graduate seeking an entry-level
              Web Developer position. Equipped with foundational to practical
              skills in HTML, CSS, PHP, Java Spring Boot, and code management
              using GitHub.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-4">
              <a
                href="#projects"
                className="btn btn-accent px-4 py-2 fw-bold d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-briefcase-fill fs-5"></i>
                <span className="d-none d-sm-inline ms-2">View My Work</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light px-4 py-2 fw-bold d-flex align-items-center justify-content-center"
                style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
              >
                <i className="bi bi-file-earmark-arrow-down-fill fs-5"></i>
                <span className="d-none d-sm-inline ms-2">Download CV</span>
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center text-lg-end">
            <img
              src={heroImg}
              alt="Jeremiah Ezekiel Lopeña - Web Developer"
              className="img-fluid rounded-4 hero-image-float image-glitch"
              style={{
                width: '100%',
                maxWidth: '350px',
                border: '5px solid var(--bg-secondary)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
