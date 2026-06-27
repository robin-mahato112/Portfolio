import Section from './Section';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Visible signals without overclaiming.">
      <div className="achievement-list">
        {achievements.map((achievement) => (
          <article className={achievement.title === 'Hackathon Winner' ? 'achievement-card achievement-card-featured' : 'achievement-card'} key={achievement.title}>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}