import { profile } from '../../data/profile';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div className="card contact-card">
        <p className="contact-command">$ ./get-in-touch</p>
        <h3 className="contact-headline">Let&apos;s build something.</h3>
        <p className="contact-sub">
          Whether it is an opportunity, a project idea, or a good technical conversation,
          email or LinkedIn is the fastest way to reach me.
        </p>
        <div className="contact-actions">
          <a className="btn btn-accent" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="btn btn-primary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p className="contact-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub -&gt;</a>
          <span>/</span>
          <a href={profile.resume}>Resume -&gt;</a>
          <span>/</span>
          <a href={profile.phoneHref}>{profile.phone}</a>
        </p>
      </div>
    </section>
  );
}
