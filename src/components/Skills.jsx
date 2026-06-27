import SectionWrapper from './SectionWrapper';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <SectionWrapper id="skills" eyebrow="Skills" title="Short grouped technical foundations.">
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tag-list">
              {group.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}