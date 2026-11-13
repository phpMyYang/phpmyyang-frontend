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
                I am Jeremiah Ezekiel Lopeña, an impact-driven Full-Stack Web
                Developer. I currently apply my expertise as a Web Developer and
                IT Specialist at Holy Face of Jesus Lyceum of San Jose Inc.,
                where I have architected institutional platforms serving over
                1,500 users and successfully digitized manual workflows.
              </p>

              <p className="fs-5 mb-4 text-justify">
                My passion lies in building scalable, decoupled applications
                with a strict focus on clean code architecture and efficient
                problem-solving. Beyond just making things work, I prioritize
                software security from the ground up, implementing strict input
                validation, role-based access control (RBAC), and robust logic
                to protect systems against common vulnerabilities.
              </p>

              <p className="fs-5 mb-5 text-justify">
                I specialize in the React.js and Laravel ecosystem, alongside
                strong proficiency in HTML5, CSS3, Bootstrap 5, Tailwind CSS,
                PHP, Java Spring Boot, and MySQL. Whether I am engineering
                secure REST APIs, managing local network infrastructures, or
                building dynamic user interfaces, my goal is to deliver
                high-availability solutions that drive operational efficiency.
              </p>

              <div
                className="mt-5 pt-3 border-top"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <p className="fs-5 mb-1">Sincerely,</p>
                <p
                  className="fs-4 fw-bold fst-italic"
                  style={{ color: 'var(--accent)' }}
                >
                  Jeremiah Ezekiel Lopeña
                </p>
                <p className="fs-6 opacity-75">Full-Stack Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
