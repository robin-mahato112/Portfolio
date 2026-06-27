import SectionWrapper from './SectionWrapper';

const links = {
  github: 'https://github.com/robin-mahato112',
  linkedin: '#',
  resume: '/resume.pdf',
};

export default function Hero() {
  return (
    <SectionWrapper id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">IT / Software Portfolio</p>
          <h1>Robin Mahato</h1>
          <p className="hero-role">Bachelor of IT Student | Aspiring Software Engineer | IT Support</p>
          <p className="hero-tagline">Building practical software projects that solve real problems.</p>
          <div className="button-row" aria-label="Primary links">
            <a className="button button-primary" href="#projects">View Projects</a>
            <a className="button button-secondary" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="button button-secondary" href={links.linkedin}>LinkedIn</a>
            <a className="button button-ghost" href={links.resume} download>Download Resume</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Developer portfolio visual placeholder">
          <div className="profile-mark">RM</div>
          <div className="hero-focus">
            <span>Software Engineering</span>
            <span>Full-stack Development</span>
            <span>IT Support</span>
            <span>Networking</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}