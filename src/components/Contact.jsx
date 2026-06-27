import { useState } from 'react';
import SectionWrapper from './SectionWrapper';

const links = {
  email: 'mhtrobin123@gmail.com',
  github: 'https://github.com/robin-mahato112',
  linkedin: 'https://www.linkedin.com/in/robin-mahato-50a19a345/',
};

export default function Contact() {
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Thanks, I'll get back to you soon.");
    event.currentTarget.reset();
  }

  return (
    <SectionWrapper id="contact" eyebrow="Contact" title="Let’s connect.">
      <div className="contact-grid">
        <div className="contact-links">
          <a href={`mailto:${links.email}`}>{links.email}</a>
          <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button className="button button-primary" type="submit">Send Message</button>
          {message && <p className="form-message">{message}</p>}
        </form>
      </div>
    </SectionWrapper>
  );
}