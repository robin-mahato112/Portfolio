import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';
import Contact from '../components/sections/Contact';
import BudgetLab from '../components/sections/BudgetLab';
import Certifications from '../components/sections/Certifications';
import Topics from '../components/sections/Topics';
import { portfolio } from '../data/portfolioContent.js';

export default function HomePage() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <section className="proof-strip" aria-label="Career highlights">
          {portfolio.highlights.map((highlight) => (
            <p key={highlight.label}><span>{highlight.label}</span><strong>{highlight.value}</strong><small>{highlight.detail}</small></p>
          ))}
        </section>
        <BudgetLab />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Topics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
