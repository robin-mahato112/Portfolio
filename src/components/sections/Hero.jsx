import { profile } from '../../data/profile';

export default function Hero() {
  return (
    <header id="home" className="hero">
      <p className="terminal-prompt">&gt; whoami</p>
      <h1>
        {profile.name}
        <span className="cursor-block" aria-hidden="true" />
      </h1>
      <p className="alias-line">
        <span>&gt;</span> alias robin=<strong>&quot;Full-Stack Developer&quot;</strong>
      </p>
      <p className="bio-text">
        <strong>Bachelor of IT student and AI Hackathon Winner</strong> building practical full-stack,
        AI, and cloud-ready software from architecture to deployment.
      </p>
      <div className="social-links" aria-label="Profile links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">GH</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">in</a>
        <a href={`mailto:${profile.email}`} aria-label="Email Robin">@</a>
        <a href={profile.resume} aria-label="Open Robin's resume">CV</a>
      </div>
    </header>
  );
}
