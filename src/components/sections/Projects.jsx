import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
    </section>
  );
}
