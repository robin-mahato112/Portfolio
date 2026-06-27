import { useState } from 'react';

export default function Contact() {
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Thanks, I'll get back to you soon.");
    event.currentTarget.reset();
  }

  return (
    <section className="section" id="contact">
      <div className="section-inner contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s connect</h2>
          <div className="contact-links">
            <a href="mailto:mhtrobin123@gmail.com">mhtrobin123@gmail.com</a>
            <a href="https://github.com/robin-mahato112" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" required />
          </label>
          <label>
            Email
            <input name="email" type="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button className="button button-primary" type="submit">
            Send Message
          </button>
          {message && <p className="form-message">{message}</p>}
        </form>
      </div>
    </section>
  );
}
