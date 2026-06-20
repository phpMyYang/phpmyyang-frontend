import React from 'react';

const Experience = () => {
  const experienceList = [
    {
      title: 'IT Staff / Web Developer',
      company: 'Holy Face of Jesus Lyceum of San Jose Inc.',
      date: '2025 - PRESENT',
      descriptions: [
        'Served as an IT staff member providing technical support and maintenance for school systems.',
        'Applied web development knowledge (using skills like PHP/HTML/CSS) to assist in maintaining or developing school web presence/internal systems.',
      ],
    },
    {
      title: 'IT Staff (SPES)',
      company: 'Municipality of Montalban, Rizal',
      date: '2023',
      descriptions: [
        'Demonstrated responsibility, adherence to professional guidelines, and effective work ethic in a government setting.',
      ],
    },
    {
      title: 'Barista / Service Crew',
      company: "Yireh's Cafe",
      date: '2018 - 2020',
      descriptions: [
        'Developed strong Team-Player and Leadership skills through managing daily cafe operations and customer service.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-5"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="container py-4">
        <h2
          className="display-5 fw-bold mb-5 text-center text-lg-start"
          style={{ color: 'var(--accent)' }}
        >
          <span className="text-muted fs-4">&lt;</span> Experience{' '}
          <span className="text-muted fs-4">/&gt;</span>
        </h2>

        <div className="row row-cols-1 row-cols-lg-3 g-4">
          {experienceList.map((exp, index) => (
            <div className="col" key={index}>
              {/* Experience Card */}
              <div
                className="card h-100 exp-card border-0 shadow-lg p-4"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '15px',
                }}
              >
                <div className="card-body p-0 d-flex flex-column">
                  <h4
                    className="fw-bold mb-2"
                    style={{ color: 'var(--accent)' }}
                  >
                    {exp.title}
                  </h4>

                  <h6
                    className="mb-3 opacity-75 d-flex align-items-center"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    <i className="bi bi-building me-2"></i>
                    {exp.company}
                  </h6>

                  <span
                    className="badge mb-4 align-self-start"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      border: '1px solid rgba(215,215,215,0.2)',
                      padding: '8px 12px',
                    }}
                  >
                    <i className="bi bi-calendar-event me-2"></i>
                    {exp.date}
                  </span>

                  <ul className="list-unstyled mt-2 flex-grow-1">
                    {exp.descriptions.map((desc, idx) => (
                      <li
                        key={idx}
                        className="mb-3 d-flex"
                        style={{
                          color: 'var(--text-primary)',
                          opacity: 0.9,
                          textAlign: 'left',
                        }}
                      >
                        <i
                          className="bi bi-caret-right-fill mt-1 me-2"
                          style={{ color: 'var(--accent)', fontSize: '0.8rem' }}
                        ></i>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
