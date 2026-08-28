import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section page-band projects-section">
      <header className="section-intro">
        <p className="eyebrow">SELECTED SYSTEMS / 02—05</p>
        <h2>Projects built beyond the happy path.</h2>
        <span>SCROLL TO INSPECT</span>
      </header>
      <div className="project-list">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
    </section>
  );
}
