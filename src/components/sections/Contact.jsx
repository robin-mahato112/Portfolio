'use client';

import { useState } from 'react';
import SectionShell from '../ui/SectionShell';
import { profile } from '../../data/profile';

export default function Contact() {
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const body = form.get('message');
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const mailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${body}`);

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${mailBody}`;
    setMessage('Your email app should open with the message ready to send. You can also call or email me directly.');
    event.currentTarget.reset();
  }

  return (
    <SectionShell id="contact" eyebrow="Contact" title="Open to full-stack, AI, and deployment-focused opportunities.">
      <div className="contact-grid">
        <address className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.phoneHref}>{profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <span>{profile.location}</span>
        </address>
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
          <button className="button button-primary" type="submit">Open Email</button>
          {message && <p className="form-message">{message}</p>}
        </form>
      </div>
    </SectionShell>
  );
}