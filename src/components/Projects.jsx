import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'ReaderPal',
      description: 'Utilizing Android Studio and Kotlin in creating an app that utilizes Firebase for it’s user authentication and storage to allow multiple users to create an account and customize their own reading checklists to have as they pursue their reading endeavors and allows for users to view what other users have saved.',
      technologies: ['Android Studio', 'Kotlin', 'Firebase'],
      github: 'https://github.com/matttiepie/side-projects/tree/main/ReaderPal/Project2025',
    },
    {
      title: 'Botanical Buddies',
      description: 'Programmed the entire backend with a team in creating an e-commerce website that will actively access a database on the cloud using PHP to perform all the cart and product search functions and allowing for users to create an account and login to save their cart and checkout information for future purchases.',
      technologies: ['PHP', 'MySQL', 'JS'],
      github: 'https://github.com/matttiepie/pastProjects/tree/main/Botanical-Buddies',
    },
    {
      title: 'Sirens Songs',
      description: 'Website that utilizes Spotify API to create a personalized playlist along with Flask API and python backend for additional functionality and allowing users to save their playlists to their own personal accounts that they can create, log into, and manage themselves at any time, while also incorporating session tracking.',
      technologies: ['Python', 'JS', 'MySQL', 'HTML/CSS'],
      github: 'https://github.com/matttiepie/side-projects/tree/main/2024RowdyHacksUTSA',
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
