import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';
import Contact from '../components/sections/Contact';

export default function HomePage() {
  return (
    <div className="site-shell container">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
