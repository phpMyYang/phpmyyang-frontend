import React from 'react';

const About = () => {
  return (
    <section
      id="about-me"
      className="py-5"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="container py-5">
        <h2
          className="display-5 fw-bold mb-5 text-center text-lg-start"
          style={{ color: 'var(--accent)' }}
        >
          <span className="text-muted fs-4">&lt;</span> About Me{' '}
          <span className="text-muted fs-4">/&gt;</span>
        </h2>

        <div className="row">
          <div className="col-12">
            <div
              className="p-4 p-md-5 rounded-4 shadow-lg letter-container"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderLeft: '5px solid var(--accent)',
                color: 'var(--text-primary)',
                lineHeight: '1.8',
              }}
            >
              <p className="fs-5 mb-4">Hello, World.</p>

              <p className="fs-5 mb-4 text-justify">
                I am Jeremiah Ezekiel Lopeña, a highly motivated and eager fresh
                graduate seeking an entry-level Web Developer position.
                Currently, I apply my web development and technical skills as an
                IT Staff and Web Developer at Holy Face of Jesus Lyceum of San
                Jose Inc.
              </p>

              <p className="fs-5 mb-4 text-justify">
                My passion lies in building scalable, decoupled applications
                with a strict focus on clean code architecture and efficient
                problem-solving. Beyond just making things work, I prioritize
                software security from the ground up. I consistently implement
                strict input validation, secure data handling, and robust logic
                to protect systems against common vulnerabilities like data
                leakage and XSS.
              </p>

              <p className="fs-5 mb-5 text-justify">
                I am equipped with foundational to practical skills in HTML,
                CSS, PHP, Java Spring Boot, and code management using GitHub.
                Whether I am configuring complex REST APIs or building dynamic
                user interfaces, my goal is to deliver secure and
                high-performing digital solutions.
              </p>

              <div
                className="mt-5 pt-3 border-top"
                style={{ borderColor: 'rgba(215, 215, 215, 0.2) !important' }}
              >
                <p className="fs-5 mb-1">Sincerely,</p>
                <p
                  className="fs-4 fw-bold fst-italic"
                  style={{ color: 'var(--accent)' }}
                >
                  Jeremiah Ezekiel Lopeña
                </p>
                <p className="fs-6 opacity-75">Full-Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
