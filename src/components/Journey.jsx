import Section from './Section';
import { journey } from '../data/portfolioData';

export default function Journey() {
  return (
    <Section id="journey" eyebrow="Learning Journey" title="From early coding curiosity to deployable projects.">
      <ol className="journey-list">
        {journey.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{item}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}