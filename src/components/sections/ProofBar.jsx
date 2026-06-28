import SectionShell from '../ui/SectionShell';
import { proofItems } from '../../data/profile';

export default function ProofBar() {
  return (
    <SectionShell id="proof" eyebrow="Proof" title="Clear signals before the recruiter scrolls too far.">
      <div className="proof-grid">
        {proofItems.map((item) => (
          <article className="proof-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}