export default function ProjectCard({ project, index }) {
  return (
    <article className="card project-card">
      <div className="card-glow" aria-hidden="true" />
      <div className="card-header">
        <div>
          <p className="project-index">project_{String(index + 1).padStart(2, '0')}</p>
          <h3 className="card-title">{project.title}</h3>
        </div>
        {project.badge && <span className={project.badge.includes('First place') ? 'badge winner' : 'badge'}>{project.badge}</span>}
      </div>
      <p className="card-desc">{project.built}</p>
      <ul className="details-list compact-list">
        {project.scope.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
      </ul>
      <div className="tags">
        {project.tech.map((item) => <span className="tag" key={item}>{item}</span>)}
      </div>
      <div className="project-footer">
        <span>{project.status}</span>
        {project.links?.length > 0 && (
          <div className="project-links">
            {project.links.map((link) => (
              link.href ? <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} -&gt;</a> : null
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
