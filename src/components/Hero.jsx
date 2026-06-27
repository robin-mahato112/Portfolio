import SectionWrapper from './SectionWrapper';

const links = {
  github: 'https://github.com/robin-mahato112',
  linkedin: 'https://www.linkedin.com/in/robin-mahato-50a19a345/',
  resume: '/resume.docx',
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
            <a className="button button-secondary" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="button button-ghost" href={links.resume} download>Download Resume</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Developer portfolio visual summary">
          <div className="profile-mark">RM</div>
          <div className="signal-grid">
            <span><strong>01</strong> Software Engineering</span>
            <span><strong>02</strong> Full-stack Development</span>
            <span><strong>03</strong> IT Support</span>
            <span><strong>04</strong> Networking</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}