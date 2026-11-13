import React, { useState, useEffect } from 'react';
import heroImg from '../assets/me.png';

const Home = () => {
  const fullText = "Hi, I'm Jeremiah Ezekiel Lopeña.";
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const [isHoveringResume, setIsHoveringResume] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

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

  const handleMouseEnter = (e) => {
    setIsHoveringResume(true);
    updateModalPosition(e);
  };

  const handleMouseMove = (e) => {
    updateModalPosition(e);
  };

  const handleMouseLeave = () => {
    setIsHoveringResume(false);
  };

  const updateModalPosition = (e) => {
    const modalWidth = 320;
    const modalHeight = 450;
    const offset = 20;

    let newX = e.clientX + offset;
    let newY = e.clientY + offset;

    if (newX + modalWidth > window.innerWidth) {
      newX = e.clientX - modalWidth - offset;
    }

    if (newY + modalHeight > window.innerHeight) {
      newY = e.clientY - modalHeight - offset;
    }

    setModalPosition({ x: newX, y: newY });
  };

  return (
    <section
      id="home"
      className="min-vh-100 d-flex align-items-center pt-5 mt-5 mt-lg-0 position-relative"
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
              Impact-driven Full-Stack Web Developer specializing in the
              React.js and Laravel ecosystem. Proven track record of
              architecting scalable web applications, secure RESTful APIs, and
              systems that drive immense operational efficiency.
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
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
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

      <div
        className="position-fixed shadow-lg rounded"
        style={{
          opacity: isHoveringResume ? 1 : 0,
          visibility: isHoveringResume ? 'visible' : 'hidden',
          transition: 'opacity 0.2s ease, visibility 0.2s ease',
          top: modalPosition.y,
          left: modalPosition.x,
          width: '320px',
          height: '450px',
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
          src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=Fit"
          title="Resume Preview"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          scrolling="no"
        />
      </div>
    </section>
  );
};

export default Home;
