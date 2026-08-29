import { portfolio } from '../../data/portfolioContent.js';

export default function Footer() {
  return (
    <footer className="footer">
      <strong>{portfolio.site.name.toUpperCase()}</strong>
      <p>{portfolio.site.footer}</p>
      <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
    </footer>
  );
}
