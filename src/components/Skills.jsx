import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Technical areas</h2>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
