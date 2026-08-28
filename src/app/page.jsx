import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';
import Contact from '../components/sections/Contact';
import BudgetLab from '../components/sections/BudgetLab';

export default function HomePage() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <section className="proof-strip" aria-label="Career highlights">
          <p><span>01 / COMPETITION</span><strong>First place</strong><small>AI Hackathon · 200+ participants</small></p>
          <p><span>02 / PRODUCTION</span><strong>4 featured builds</strong><small>Full-stack · P2P · Java · cloud</small></p>
          <p><span>03 / EDUCATION</span><strong>BIT · 2027</strong><small>University of Newcastle</small></p>
        </section>
        <BudgetLab />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
