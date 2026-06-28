import SectionShell from '../ui/SectionShell';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { candidateSignals, profile } from '../../data/profile';

export default function Hero() {
  return (
    <SectionShell id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Developer / IT Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.title}</p>
          <p className="hero-tagline">{profile.intro}</p>
          <div className="button-row" aria-label="Primary links">
            <Button href="#projects" variant="primary">View Projects</Button>
            <Button href={profile.github} external>GitHub</Button>
            <Button href={profile.linkedin} external>LinkedIn</Button>
            <Button href={profile.resume} variant="ghost" download>Resume</Button>
          </div>
        </div>
        <aside className="candidate-panel" aria-label="Candidate signals">
          <Badge tone="winner">AI Hackathon Winner</Badge>
          <h2>Candidate Signals</h2>
          <ul>
            {candidateSignals.map((signal) => <li key={signal}>{signal}</li>)}
          </ul>
        </aside>
      </div>
    </SectionShell>
  );
}