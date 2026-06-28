import SectionWrapper from './SectionWrapper';
import { projects } from '../data/portfolioData';

export default function FeaturedProjects() {
  return (
    <SectionWrapper id="projects" eyebrow="Featured Projects" title="Practical projects with honest scope.">
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-media">
              <img src={project.image} alt={`${project.title} designed project preview placeholder`} />
              <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
              {project.badge && <span className="project-badge">{project.badge}</span>}
            </div>
            <div className="project-card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="scope-list">
                {project.scope.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="tag-list">
                {project.tech.map((item) => <span key={item}>{item}</span>)}
              </div>
              {project.links.length > 0 && (
                <div className="project-links">
                  {project.links.map((link) => (
                    link.href ? <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a> : null
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}