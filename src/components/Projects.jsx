import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with payment integration, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaborative task management tool with drag-and-drop functionality and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard displaying real-time weather data with beautiful visualizations and forecasts.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Social Media App',
      description: 'Full-featured social media platform with posts, comments, likes, and real-time notifications.',
      technologies: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Portfolio CMS',
      description: 'Content Management System for portfolio websites with drag-and-drop page builder and theme customization.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Prisma'],
      github: '#',
      demo: '#'
    },
    {
      title: 'AI Chatbot',
      description: 'Intelligent chatbot with natural language processing capabilities and context-aware responses.',
      technologies: ['React', 'Python', 'OpenAI API', 'Flask'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link">
                  <span>GitHub</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                <a href={project.demo} className="project-link">
                  <span>Live Demo</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
