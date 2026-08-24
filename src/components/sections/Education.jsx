import { education } from '../../data/resumeData';

export default function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      {education.map((item) => (
        <article className="card logo-card" key={item.degree}>
          <div className="card-header">
            <div className="card-header-left">
              <span className="education-mark" aria-hidden="true">UON</span>
              <div>
                <h3 className="card-title">{item.degree}</h3>
                <p className="card-desc inline">{item.institution}</p>
              </div>
            </div>
            <span className="card-meta">{item.dates}</span>
          </div>
          <div className="term-lines">
            {item.highlights.map((highlight) => <p key={highlight}><span>&gt;</span> {highlight}</p>)}
          </div>
          <p className="courses-label"><strong>Relevant study:</strong></p>
          <div className="tags">
            {item.courses.map((course) => <span className="tag" key={course}>{course}</span>)}
          </div>
        </article>
      ))}
    </section>
  );
}
