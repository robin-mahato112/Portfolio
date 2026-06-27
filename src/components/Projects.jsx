import Section from './Section';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Projects" title="Practical work with honest scope.">
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-visual" aria-label={`${project.title} preview`}>
              <span>{project.initials}</span>
            </div>
            <div className="project-card-body">
              <div className="project-title-row">
                <h3>{project.title}</h3>
                {project.badge && <span className="badge">{project.badge}</span>}
              </div>
              <p>{project.description}</p>
              <p className="positioning-line">{project.positioning}</p>
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
    </Section>
  );
}