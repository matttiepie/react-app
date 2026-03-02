import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Full Stack Developer & Problem Solver</h3>
            <p>
              I'm a passionate full stack developer and veteran with a strong foundation in both frontend and backend technologies.
              I love creating elegant solutions to complex problems, making a positive impact through technology, serving my community, and continuously learning and growing as a developer.
            </p>
            <p>
              With experience in modern web development frameworks and a keen eye for design, I strive to create
              seamless user experiences while maintaining clean, efficient code.
            </p>
            {/* <div className="about-stats">
              <div className="stat">
                <h4>2+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>50+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Happy Clients</p>
              </div>
            </div> */}
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="#667eea" opacity="0.1"/>
                <text x="100" y="100" textAnchor="middle" dy=".3em" fontSize="60" fill="#667eea">👨‍💻</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
