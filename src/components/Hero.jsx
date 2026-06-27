import { focusAreas, profile } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="section-inner hero-grid section-frame">
        <div className="hero-copy">
          <p className="eyebrow">Developer / IT Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-tagline">
            Building practical full-stack projects with a focus on real user problems, clean systems, and reliable deployment.
          </p>
          <div className="button-row" aria-label="Primary links">
            <a className="button button-primary" href="#projects">View Projects</a>
            <a className="button button-secondary" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="button button-secondary" href={profile.linkedin}>LinkedIn</a>
            <a className="button button-ghost" href={profile.resume} download>Resume</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Portfolio focus summary">
          <div className="profile-mark" aria-hidden="true">RM</div>
          <div className="focus-list">
            {focusAreas.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}