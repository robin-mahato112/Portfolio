import { profile } from '../../data/profile';

export default function Hero() {
  return (
    <header id="home" className="hero lab-hero">
      <div className="hero-copy">
        <p className="eyebrow">FULL-STACK DEVELOPER / AI HACKATHON WINNER</p>
        <h1>BUILDING<br /><span>USEFUL</span><br />SYSTEMS.</h1>
        <p className="hero-summary">
          I prototype, test and deploy software around problems worth solving. Bachelor of IT student
          at the University of Newcastle, based in Newcastle, Australia.
        </p>
        <div className="hero-actions">
          <a className="text-link" href="#projects">Explore projects <span aria-hidden="true">↓</span></a>
          <a className="text-link" href={profile.resume} download>Download resume <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="skill-orbit" aria-label="Core technical focus: Next.js, Node.js, cloud, Java and AI">
        <span className="orbit-ring ring-outer" aria-hidden="true" />
        <span className="orbit-ring ring-middle" aria-hidden="true" />
        <span className="orbit-ring ring-inner" aria-hidden="true" />
        <span className="orbit-core" aria-hidden="true">RM<small>NEWCASTLE</small></span>
        <span className="orbit-node node-next">NEXT.JS</span>
        <span className="orbit-node node-node">NODE</span>
        <span className="orbit-node node-cloud">CLOUD</span>
        <span className="orbit-node node-java">JAVA</span>
        <span className="orbit-node node-ai">AI</span>
      </div>
    </header>
  );
}
