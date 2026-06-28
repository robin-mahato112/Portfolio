import SectionShell from '../ui/SectionShell';
import Badge from '../ui/Badge';
import { achievements } from '../../data/journey';

export default function Achievements() {
  return (
    <SectionShell id="achievements" eyebrow="Achievements" title="Real proof points, kept concise.">
      <div className="achievement-grid">
        {achievements.map((item) => (
          <article className="achievement-card" key={item.title}>
            {item.title.includes('Hackathon') && <Badge tone="winner">Winner</Badge>}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}