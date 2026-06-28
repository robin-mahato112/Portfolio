import Badge from './Badge';
import { cn } from '../../lib/utils';

export default function ProjectCard({ project, index }) {
  return (
    <article className={cn('project-card', project.featured && 'project-card-featured')}>
      <div className="project-media">
        <img src={project.image || '/images/project-placeholder.svg'} alt={`${project.title} project preview placeholder`} />
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
        {project.badge && <Badge tone={project.badge.includes('Winner') ? 'winner' : 'default'} className="project-badge">{project.badge}</Badge>}
      </div>
      <div className="project-card-body">
        <h3>{project.title}</h3>
        <dl className="case-study-list">
          <div>
            <dt>Problem</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>Built / Exploring</dt>
            <dd>{project.built}</dd>
          </div>
          {project.idea && (
            <div>
              <dt>Core idea</dt>
              <dd>{project.idea}</dd>
            </div>
          )}
        </dl>
        <ul className="scope-list">
          {project.scope.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="tag-list">
          {project.tech.map((item) => <span key={item}>{item}</span>)}
        </div>
        <p className="project-status">{project.status}</p>
        {project.links.length > 0 && (
          <div className="project-links">
            {project.links.map((link) => (
              link.href ? <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a> : null
            ))}
          </div>
        )}
      </div>
    </article>
  );
}