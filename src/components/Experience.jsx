import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: 'Software Developer III',
      company: 'Paycom',
      period: 'June 2024 - Present',
      description: 'Developing and maintaining SaaS using modern technologies to enhance user experience and streamline business processes, while collaborating with cross-functional teams.',
      achievements: [
        'Lead developer on implementation of Logical Dependencies for our onboarding team, significantly enhancing the onboarding experience for both clients and employees by minimizing errors and incomplete setups, resulting in smoother and more efficient hiring process, resulting in a 15% reduction in errors and 10% increase in time-to-hire.',
        'Served as key developer on the Gender and Biological Sex at Birth project, ensuring seamless implementation, thorough testing, and accurate storage and processing of sensitive data while prioritizing user privacy and adherence to relevant US laws and regulations for 100% of our US-based client portfolio.',
        'Served as both Product Manager and Developer on the New Hire Improve REview Page Design, set the product strategy, prioritized the feature, and developed the solution to meet our customer needs.',
      ]
    },
    {
      title: 'Engineering Intern',
      company: 'Atkinson Aeronautics',
      period: 'Jan 2024 - July 2024',
      description: 'Developed and analyzed code/data along with other engineers to improve processes and products in the engineering department.',
      achievements: [
        'Helped team house signal automation and process large signal bursts via data through state-of-the-art radios using C# and C++',
        'Aided in the creation and development of the company website',
        'Assisted in the structure of ADRS signal emitter prototype,'
      ]
    },
        {
      title: 'Computer Science Tutor',
      company: 'The University of Texas at San Antonio',
      period: 'July 2023 - May 2024',
      description: 'Provided tutoring and academic support to students in computer science courses, helping them understand complex concepts and improve their coding skills.',
      achievements: [
        'Meet with approximately 150-200 students to clarify and review concepts taught in class, (ex. Data Structures, Application Programming, etc.), explain processes and help students solve specific problems',
        'Collaborate with professors teaching Data Structures, Programming 1 and Programming II, in deciding the most effective methods of tutoring and assistance needed to better assist students in any way.',
        'Organized study groups and review sessions to enhance collaborative learning'
      ]
    },
    {
      title: 'S-6A: Leading Petty Officer',
      company: 'US Navy',
      period: 'July 2016 - July 2021',
      description: 'Oversaw and managed Repairable Management Branch work center on USS Abraham Lincoln (CVN 72).',
      achievements: [
        'Successfully managed logistics and maintenance for over $10 million worth of equipment',
        'Promoted to E-5 (Petty Officer Second Class) in 2019',
        'Navy and Marine Corps Achievement Medal recipient for impeccable performance and effectively running and managing the Repairable Management Branch work center during 2019 world deployment while in a combat zone.'
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
