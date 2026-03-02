import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Matthew Martinez</span>
        </h1>
        <h2 className="hero-subtitle">Full Stack Developer</h2>
        <p className="hero-description">
          I build exceptional digital experiences that combine beautiful design with powerful functionality.
          Specializing in modern web technologies and creating scalable solutions.
        </p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className="hero-animation">
        <div className="code-block">
          <pre>
            <code>{`const developer = {
  name: "Matthew Martinez",
  Languages: ["HTML/CSS", "JavaScript", "Python", "SQL", "MVC", "C/C++/C#"],
  Tools & Frameworks: ["Visual Studio", "Git", "GitHub", "React", "Docker"],
};`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export default Hero;
