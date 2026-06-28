import SectionShell from '../ui/SectionShell';

export default function About() {
  return (
    <SectionShell id="about" eyebrow="About" title="Focused on practical software, systems, and deployment-ready foundations.">
      <div className="about-copy">
        <p>
          I am a Bachelor of Information Technology student at the University of Newcastle, building projects across full-stack development, AI-powered applications, IT systems, networking, and cloud-ready deployment.
        </p>
        <p>
          My coding journey started from a young age with QBasic, then moved through C, JavaScript, Java, Python, .NET, and full-stack web development. I try to keep the work practical, structured, and honest about scope.
        </p>
      </div>
    </SectionShell>
  );
}