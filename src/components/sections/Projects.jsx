import SectionShell from '../ui/SectionShell';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <SectionShell id="projects" eyebrow="Featured Projects" title="Mini case studies with honest scope.">
      <div className="project-grid">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
    </SectionShell>
  );
}