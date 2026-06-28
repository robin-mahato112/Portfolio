export default function SkillGroup({ group }) {
  return (
    <article className="skill-card">
      <h3>{group.title}</h3>
      <div className="tag-list">
        {group.items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </article>
  );
}