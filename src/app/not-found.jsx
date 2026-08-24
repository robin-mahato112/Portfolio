import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="card not-found-card">
        <p className="terminal-prompt">404</p>
        <h1>Page not found</h1>
        <p>The portfolio page you are looking for does not exist.</p>
        <Link className="btn btn-accent" href="/">Back to portfolio</Link>
      </section>
    </main>
  );
}
