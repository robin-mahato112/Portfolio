import SectionWrapper from './SectionWrapper';
import { journey } from '../data/portfolioData';

export default function Journey() {
  return (
    <SectionWrapper id="journey" eyebrow="Learning Journey" title="A practical path from fundamentals to deployable projects.">
      <ol className="journey-list">
        {journey.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{item}</p>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}