import React from 'react';

const Skills = () => {
  const techStack = [
    { name: 'HTML5', icon: 'bi-filetype-html', color: '#E34F26' },
    { name: 'CSS3', icon: 'bi-filetype-css', color: '#1572B6' },
    { name: 'React.js', icon: 'bi-code-slash', color: '#61DAFB' },
    { name: 'JavaScript', icon: 'bi-filetype-js', color: '#F7DF1E' },
    { name: 'Bootstrap 5', icon: 'bi-bootstrap', color: '#7952B3' },
    { name: 'Tailwind CSS', icon: 'bi-palette', color: '#06B6D4' },
    { name: 'PHP', icon: 'bi-filetype-php', color: '#777BB4' },
    { name: 'Laravel', icon: 'bi-box-seam', color: '#FF2D20' },
    { name: 'Java', icon: 'bi-cup-hot', color: '#E76F00' },
    { name: 'Spring Boot', icon: 'bi-gear-wide-connected', color: '#6DB33F' },
    { name: 'SQL', icon: 'bi-database-dash', color: '#F29111' },
    { name: 'MySQL', icon: 'bi-database', color: '#00758F' },
    { name: 'Git', icon: 'bi-git', color: '#F05032' },
    {
      name: 'GitHub',
      icon: 'bi-github',
      color: '#D7D7D7',
    },
    { name: 'Postman', icon: 'bi-send', color: '#FF6C37' },
    { name: 'API Integration', icon: 'bi-plug', color: '#00C7B7' },
  ];

  const seamlessTicker = [...techStack, ...techStack];

  return (
    <section
      id="skills"
      className="py-5"
      style={{ backgroundColor: 'transparent', overflow: 'hidden' }}
    >
      <div className="container py-4">
        <h2
          className="display-5 fw-bold mb-5 text-center text-lg-start"
          style={{ color: 'var(--accent)' }}
        >
          <span className="text-muted fs-4">&lt;</span> Tech Stack{' '}
          <span className="text-muted fs-4">/&gt;</span>
        </h2>
      </div>

      <div className="ticker-wrapper">
        <div className="ticker-track">
          {seamlessTicker.map((skill, index) => (
            <div
              key={index}
              className="ticker-item px-3 py-2 rounded-3 shadow-sm d-flex align-items-center"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: `1px solid ${skill.color}40`,
                color: skill.color,
              }}
            >
              <i className={`bi ${skill.icon} fs-4 me-3`}></i>
              <span className="fw-bold fs-5">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
