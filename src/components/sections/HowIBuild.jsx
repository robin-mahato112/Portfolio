import SectionShell from '../ui/SectionShell';
import { buildPrinciples } from '../../data/journey';

export default function HowIBuild() {
  return (
    <SectionShell id="how-i-build" eyebrow="How I Build" title="A more mature process than just adding features.">
      <div className="proof-grid">
        {buildPrinciples.map((item) => (
          <article className="proof-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}