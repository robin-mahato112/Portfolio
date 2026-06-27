export default function SectionWrapper({ id, eyebrow, title, children, className = '' }) {
  return (
    <section className={`section-wrapper ${className}`} id={id}>
      <div className="section-panel">
        {(eyebrow || title) && (
          <div className="section-heading">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}