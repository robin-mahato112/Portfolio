import SectionWrapper from './SectionWrapper';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <SectionWrapper id="skills" eyebrow="Technical Skills" title="Built around full-stack, AI, and deployment foundations.">
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
    </SectionWrapper>
  );
}