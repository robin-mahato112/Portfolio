import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="section-panel">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The portfolio page you are looking for does not exist.</p>
        <Link className="button button-primary" href="/">Back to portfolio</Link>
      </section>
    </main>
  );
}