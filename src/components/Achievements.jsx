const achievements = [
  {
    title: 'Hackathon Winner',
    description:
      'Recognised for building a practical technology solution under time constraints, focusing on problem-solving, teamwork, and real-world impact.',
  },
  {
    title: 'Bachelor of Information Technology student at University of Newcastle',
  },
  {
    title: 'Built academic and personal projects across software development, networking, and AI-powered applications',
  },
];

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Achievements</p>
          <h2>Highlights</h2>
        </div>
        <div className="achievement-list">
          {achievements.map((achievement) => (
            <article className="achievement-card" key={achievement.title}>
              <h3>{achievement.title}</h3>
              {achievement.description && <p>{achievement.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
