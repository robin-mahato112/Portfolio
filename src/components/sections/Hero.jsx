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
        <span>&gt;</span> role=<strong>&quot;Full-Stack Developer&quot;</strong>
      </p>
      <p className="hero-headline">Full-Stack Developer building practical software across web, AI and systems.</p>
      <p className="bio-text">
        I&apos;m a Bachelor of Information Technology student at the University of Newcastle with
        experience building full-stack web applications, peer-to-peer tools and AI-assisted products.
        My background also includes network support experience and a first-place AI hackathon result.
      </p>
      <div className="social-links" aria-label="Profile links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">GH</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">in</a>
        <a href={`mailto:${profile.email}`} aria-label="Email Robin">@</a>
        <a href={profile.resume} aria-label="Download Robin's resume" download>CV</a>
      </div>
    </header>
  );
}
