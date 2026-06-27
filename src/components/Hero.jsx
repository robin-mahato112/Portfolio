const links = {
  github: 'https://github.com/robin-mahato112',
  linkedin: '#',
  resume: '/resume.pdf',
};

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="section-inner hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1>Robin Mahato</h1>
          <p className="hero-role">Bachelor of IT Student | Aspiring Software Engineer | IT Support</p>
          <p className="hero-tagline">Building practical software projects that solve real problems.</p>
          <div className="button-row" aria-label="Primary links">
            <a className="button button-primary" href="#projects">
              View Projects
            </a>
            <a className="button button-secondary" href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button button-secondary" href={links.linkedin}>
              LinkedIn
            </a>
            <a className="button button-ghost" href={links.resume} download>
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Portfolio focus areas">
          <span>Software Engineering</span>
          <span>Full-Stack Development</span>
          <span>IT Support</span>
          <span>Networking</span>
          <span>Cybersecurity</span>
          <span>AI Applications</span>
        </div>
      </div>
    </section>
  );
}
