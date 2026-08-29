import Image from 'next/image';
import { portfolio } from '../../data/portfolioContent.js';

export default function Topics() {
  if (!portfolio.topics?.length) return null;

  return (
    <section id="topics" className="section topics-section">
      <h2>{portfolio.headings.topics}</h2>
      <div className="topic-list">
        {portfolio.topics.map((topic, index) => (
          <article className="topic-entry" key={`${topic.heading}-${index}`}>
            <div>
              <p className="eyebrow">{topic.kicker || `TOPIC / ${String(index + 1).padStart(2, '0')}`}</p>
              <h3>{topic.heading}</h3>
              {topic.body && <p>{topic.body}</p>}
              <div className="evidence-links">
                {topic.linkUrl && <a href={topic.linkUrl} target="_blank" rel="noopener noreferrer">{topic.linkLabel || 'Open link'} <span aria-hidden="true">↗</span></a>}
                {topic.evidenceFile && <a href={topic.evidenceFile} target="_blank" rel="noopener noreferrer">Open document <span aria-hidden="true">↗</span></a>}
              </div>
            </div>
            {topic.image && <Image src={topic.image} alt={topic.imageAlt || ''} width={800} height={500} unoptimized />}
          </article>
        ))}
      </div>
    </section>
  );
}
