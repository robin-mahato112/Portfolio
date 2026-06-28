import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import FeaturedProjects from '../components/FeaturedProjects';
import Skills from '../components/Skills';
import Journey from '../components/Journey';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <FeaturedProjects />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}