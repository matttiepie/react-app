import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and establishing best practices.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Developed custom web solutions for clients across various industries. Specialized in React, Express, and MongoDB stack.',
      achievements: [
        'Delivered 20+ client projects',
        'Reduced deployment time by 60%',
        'Maintained 99.9% uptime'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Startup Co.',
      period: '2018 - 2020',
      description: 'Built responsive and interactive user interfaces using modern JavaScript frameworks and libraries.',
      achievements: [
        'Redesigned company website',
        'Increased user engagement by 50%',
        'Implemented accessibility standards'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="company">{exp.company}</h4>
                <p className="description">{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
