import SectionWrapper from './SectionWrapper';
import { highlights } from '../data/portfolioData';

export default function Highlights() {
  return (
    <SectionWrapper id="proof" eyebrow="Proof" title="Clear signals for recruiters and collaborators.">
      <div className="proof-grid">
        {highlights.map((item) => (
          <article className="proof-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}