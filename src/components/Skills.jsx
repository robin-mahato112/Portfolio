import Section from './Section';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Grouped technical foundations.">
      <div className="skill-grid">
        {skills.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tag-list">
              {group.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}