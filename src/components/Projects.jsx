import SectionWrapper from './SectionWrapper';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <SectionWrapper id="projects" eyebrow="Projects" title="Selected practical work.">
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-media">
              <img src={project.image} alt={`${project.title} project placeholder`} />
              <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="project-card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tech.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}