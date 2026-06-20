import React from 'react';

const Education = () => {
  const educationList = [
    {
      degree: 'Bachelor of Science of Information Technology',
      school: 'Colegio de Montalban',
      year: '2021 - 2025',
    },
    {
      degree: 'Bachelor of Science of Computer Science',
      school: 'Arellano University',
      year: '2015 - 2018',
    },
    {
      degree: 'Secondary Education',
      school: 'Tagumpay National Highschool',
      year: '2015 - 2018',
    },
    {
      degree: 'Primary Education',
      school: 'Thessalonians Montessori School',
      year: '2010 - 2015',
    },
  ];

  return (
    <section
      id="education"
      className="py-5"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="container py-4">
        <h2
          className="display-5 fw-bold mb-5 text-center text-lg-start"
          style={{ color: 'var(--accent)' }}
        >
          <span className="text-muted fs-4">&lt;</span> Education{' '}
          <span className="text-muted fs-4">/&gt;</span>
        </h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-3">
          {educationList.map((edu, index) => (
            <div className="col" key={index}>
              <div
                className="card h-100 edu-card border-0 shadow-sm p-3"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '12px',
                  borderLeft: '4px solid transparent',
                }}
              >
                <div className="card-body p-1 d-flex flex-column">
                  <div className="mb-3">
                    <span
                      className="badge rounded-pill d-inline-flex align-items-center"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        color: 'var(--accent)',
                        border: '1px solid rgba(254,119,67,0.3)',
                        padding: '6px 10px',
                      }}
                    >
                      <i className="bi bi-mortarboard-fill me-2 fs-6"></i>{' '}
                      {edu.year}
                    </span>
                  </div>

                  <h6
                    className="fw-bold mb-2 flex-grow-1"
                    style={{ color: 'var(--text-primary)', lineHeight: '1.4' }}
                  >
                    {edu.degree}
                  </h6>

                  <div
                    className="mt-auto pt-2"
                    style={{ borderTop: '1px dashed rgba(215,215,215,0.2)' }}
                  >
                    <small
                      className="opacity-75 d-block"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      <i className="bi bi-bank me-2"></i>
                      {edu.school}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
