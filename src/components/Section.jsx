export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section className={`section ${className}`} id={id} tabIndex="-1">
      <div className="section-inner section-frame">
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