import { experience } from '../../data/resumeData';
import { portfolio } from '../../data/portfolioContent.js';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2>{portfolio.headings.experience}</h2>
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={item.role}>
            <div className="timeline-heading">
              <h3>{item.role} <span>- {item.company}</span></h3>
              <p>{item.dates}</p>
            </div>
            <ul className="details-list">
              {item.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
            <div className="tags">
              {item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
