import SectionWrapper from './SectionWrapper';
import { profile } from '../data/portfolioData';

export default function Hero() {
  return (
    <SectionWrapper id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Developer / IT Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.title}</p>
          <p className="hero-tagline">{profile.summary}</p>
          <div className="button-row" aria-label="Primary links">
            <a className="button button-primary" href="#projects">View Projects</a>
            <a className="button button-secondary" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="button button-ghost" href={profile.resume} download>Resume</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Robin Mahato portfolio focus areas">
          <div className="profile-mark">RM</div>
          <div className="signal-grid">
            <span><strong>01</strong> Full-stack project builder</span>
            <span><strong>02</strong> AI Hackathon Winner</span>
            <span><strong>03</strong> Cloud/deployment focused</span>
            <span><strong>04</strong> Practical problem solving</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}