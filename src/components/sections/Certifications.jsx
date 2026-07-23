import { certifications } from '../../data/resumeData';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2>Certifications</h2>
      {certifications.map((item) => (
        <article className="card logo-card" key={item.title}>
          <div className="card-header">
            <div className="card-header-left">
              <span className="logo-placeholder" aria-hidden="true">{item.mark}</span>
              <div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc inline">{item.issuer}</p>
              </div>
            </div>
            <span className="card-meta">{item.year}</span>
          </div>
        </article>
      ))}
    </section>
  );
}
