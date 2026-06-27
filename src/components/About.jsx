import SectionWrapper from './SectionWrapper';

export default function About() {
  return (
    <SectionWrapper id="about" eyebrow="About" title="Focused on practical technology and steady growth.">
      <div className="text-grid">
        <p>
          I am a Bachelor of Information Technology student at the University of Newcastle, focused on software development, IT support, networking, cybersecurity, and AI-powered applications.
        </p>
        <p>
          My coding journey started with QBasic and C, then expanded into JavaScript, Java, Python, .NET, React, and Node.js.
        </p>
      </div>
    </SectionWrapper>
  );
}