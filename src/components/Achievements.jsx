import SectionWrapper from './SectionWrapper';

const achievements = [
  {
    title: 'Hackathon Winner',
    description: 'Recognised for building a practical technology solution under time constraints, focusing on problem-solving, teamwork, and real-world impact.',
  },
  {
    title: 'Bachelor of Information Technology student at University of Newcastle',
    description: 'Developing academic and personal projects across software, IT, networking, and AI-powered applications.',
  },
];

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" eyebrow="Achievements" title="Key highlights.">
      <div className="achievement-list">
        {achievements.map((achievement) => (
          <article className={achievement.title === 'Hackathon Winner' ? 'achievement-card achievement-featured' : 'achievement-card'} key={achievement.title}>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}