import React from 'react';
import projectImg1 from '../assets/project.svg';
import projectImg2 from '../assets/campusloop.PNG';
import projectImg3 from '../assets/blog.PNG';
import projectImg4 from '../assets/smartenroll.PNG';
import projectImg5 from '../assets/stocksync.PNG';
import projectImg6 from '../assets/taskflow.PNG';

const Projects = () => {
  const projectList = [
    {
      title: 'CampusLoop',
      description:
        'A full-stack web application currently managing over 1,300 student records in production. It features dynamic frontend UI adjustments in React and rigorous backend security hardening in Laravel.',
      techStack: ['React.js', 'Laravel', 'Security'],
      githubRepo: 'https://github.com/HolyFaceTech/campusloop-backend',
      liveDemo: '#',
      image: projectImg2,
    },
    {
      title: 'Online Food Ordering API',
      description:
        'A comprehensive REST API backend system built with Spring Boot, MySQL, and Gradle. It implements role-based access control and a highly structured order workflow.',
      techStack: ['Java', 'Spring Boot', 'MySQL'],
      githubRepo: 'https://github.com/phpMyYang/food-ordering-api',
      liveDemo: '#',
      image: projectImg1,
    },
    {
      title: 'Personal Blog System',
      description:
        'A dynamic personal blog platform designed for seamless content creation and management. It features a clean user interface and a robust backend architecture for handling articles and data.',
      techStack: ['Web Development', 'Full-Stack', 'UI/UX'],
      githubRepo: 'https://github.com/phpMyYang/personal-blog-system',
      liveDemo: '#',
      image: projectImg3,
    },
    {
      title: 'TaskFlow',
      description:
        'A decoupled task management system designed for seamless workflow tracking, utilizing a robust API layer for the backend and a reactive frontend UI.',
      techStack: ['React.js', 'Laravel', 'REST API'],
      githubRepo: 'https://github.com/phpMyYang/taskflow',
      liveDemo: '#',
      image: projectImg6,
    },
    {
      title: 'SmartEnroll',
      description:
        'An institutional enrollment system built to streamline student registration, featuring secure data handling and efficient record management.',
      techStack: ['Web Development', 'Database Management'],
      githubRepo: 'https://github.com/HolyFaceTech/SmartEnroll',
      liveDemo: 'https://portal.holyface.school',
      image: projectImg4,
    },
    {
      title: 'StockSync',
      description:
        'An inventory synchronization platform designed to monitor stock levels and update data dynamically for optimized supply chain management.',
      techStack: ['Full-Stack', 'API Integration'],
      githubRepo: 'https://github.com/phpMyYang/stocksync',
      liveDemo: '#',
      image: projectImg5,
    },
  ];

  return (
    <section
      id="projects"
      className="py-5"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="container py-4">
        <h2
          className="display-5 fw-bold mb-5 text-center text-lg-start"
          style={{ color: 'var(--accent)' }}
        >
          <span className="text-muted fs-4">&lt;</span> Projects{' '}
          <span className="text-muted fs-4">/&gt;</span>
        </h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projectList.map((project, index) => (
            <div className="col" key={index}>
              <div
                className="card h-100 project-card border-0 shadow-lg"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  overflow: 'hidden',
                  borderRadius: '15px',
                }}
              >
                <div
                  style={{
                    overflow: 'hidden',
                    backgroundColor: 'var(--bg-primary)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '200px',
                  }}
                >
                  <img
                    src={project.image}
                    className="card-img-top project-image p-4"
                    alt={project.title}
                    style={{
                      borderBottom: '3px solid var(--accent)',
                      objectFit: 'contain',
                      maxHeight: '200px',
                    }}
                  />
                </div>

                <div className="card-body d-flex flex-column p-4">
                  <div className="mb-3 d-flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="badge rounded-pill"
                        style={{
                          backgroundColor: 'var(--bg-primary)',
                          color: 'var(--text-primary)',
                          border: '1px solid rgba(215,215,215,0.2)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h4
                    className="card-title fw-bold"
                    style={{ color: 'var(--accent)' }}
                  >
                    {project.title}
                  </h4>
                  <p
                    className="card-text flex-grow-1"
                    style={{ color: 'var(--text-primary)', opacity: 0.9 }}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="card-footer bg-transparent border-0 d-flex justify-content-center gap-3 pb-4">
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light px-3 py-2 d-flex align-items-center"
                    style={{
                      borderColor: 'var(--text-primary)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <i className="bi bi-github me-2"></i> Repo
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent px-3 py-2 d-flex align-items-center"
                  >
                    <i className="bi bi-box-arrow-up-right me-2"></i> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
