import { skills } from '../../data/skills';
import { portfolio } from '../../data/portfolioContent.js';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>{portfolio.headings.skills}</h2>
      <div className="skill-groups">
        {skills.map((group) => (
          <div className="skill-group" key={group.title}>
            <span className="skill-label">{group.title}</span>
            <div className="tags">
              {group.items.map((item) => <span className="tag" key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
