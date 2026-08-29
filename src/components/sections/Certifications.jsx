import Image from 'next/image';
import { portfolio } from '../../data/portfolioContent.js';

export default function Certifications() {
  if (!portfolio.certifications?.length) return null;

  return (
    <section id="certifications" className="section evidence-section">
      <h2>{portfolio.headings.certifications}</h2>
      <div className="evidence-grid">
        {portfolio.certifications.map((item) => (
          <article className="evidence-card" key={`${item.title}-${item.issuer}`}>
            {item.image && (
              <Image className="evidence-image" src={item.image} alt={item.imageAlt || `${item.title} certificate`} width={800} height={500} unoptimized />
            )}
            <div className="evidence-content">
              <p className="eyebrow">{item.issuer}{item.issuedDate ? ` / ${item.issuedDate}` : ''}</p>
              <h3>{item.title}</h3>
              {item.summary && <p>{item.summary}</p>}
              {item.credentialId && <small>Credential ID: {item.credentialId}</small>}
              <div className="evidence-links">
                {item.credentialUrl && <a href={item.credentialUrl} target="_blank" rel="noopener noreferrer">Verify credential <span aria-hidden="true">↗</span></a>}
                {item.evidenceFile && <a href={item.evidenceFile} target="_blank" rel="noopener noreferrer">Open proof <span aria-hidden="true">↗</span></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
