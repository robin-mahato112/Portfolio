import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import ProofBar from '../components/sections/ProofBar';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Journey from '../components/sections/Journey';
import HowIBuild from '../components/sections/HowIBuild';
import Achievements from '../components/sections/Achievements';
import Contact from '../components/sections/Contact';

export default function HomePage() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <HowIBuild />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}