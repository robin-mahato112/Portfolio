import SectionShell from '../ui/SectionShell';
import { journey } from '../../data/journey';

export default function Journey() {
  return (
    <SectionShell id="journey" eyebrow="Learning Journey" title="From fundamentals to deployment-ready projects.">
      <ol className="journey-list">
        {journey.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{item}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}