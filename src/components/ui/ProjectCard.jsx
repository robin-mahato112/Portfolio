export default function ProjectCard({ project, index }) {
  const code = String(index + 2).padStart(2, '0');
  const visualClass = ['budget', 'transfer', 'fleet', 'unix'][index] || 'system';

  return (
    <article className={`project-card project-${visualClass}`}>
      <div className="project-visual" aria-hidden="true">
        <span className="visual-code">SYSTEM / {code}</span>
        <div className="visual-stage">
          <span className="visual-node node-a" />
          <span className="visual-node node-b" />
          <span className="visual-node node-c" />
          <span className="visual-line line-a" />
          <span className="visual-line line-b" />
          <strong>{project.title === 'UniX Course Enrolment System' ? 'UniX' : project.title}</strong>
        </div>
      </div>
      <div className="project-content">
        <div className="project-heading">
          <div>
            <p className="project-index">CASE {code}</p>
            <h3>{project.title}</h3>
          </div>
          {project.badge && <span className={project.badge.includes('First place') ? 'badge winner' : 'badge'}>{project.badge}</span>}
        </div>
        <p className="project-desc">{project.built}</p>
        <ul className="project-scope">
          {project.scope.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="tags">
          {project.tech.map((item) => <span className="tag" key={item}>{item}</span>)}
        </div>
        <p className="project-status">{project.status}</p>
        {project.links?.length > 0 && (
          <div className="project-links">
            {project.links.map((link) => link.href ? (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ) : null)}
          </div>
        )}
      </div>
    </article>
  );
}
