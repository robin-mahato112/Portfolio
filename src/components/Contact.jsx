'use client';

import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { profile } from '../data/portfolioData';

export default function Contact() {
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Thanks, I'll get back to you soon.");
    event.currentTarget.reset();
  }

  return (
    <SectionWrapper id="contact" eyebrow="Contact" title="Open to full-stack, AI, and deployment-focused opportunities.">
      <div className="contact-grid">
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.resume} download>Resume</a>
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