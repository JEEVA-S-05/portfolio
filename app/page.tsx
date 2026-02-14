import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Experience from '@/components/Experience/Experience';
import Contact from '@/components/Contact/Contact';
import Navigation from '@/components/Common/Navigation';
import ScrollToTop from '@/components/Common/ScrollToTop';
import LoadingScreen from '@/components/Common/LoadingScreen';
import CustomCursor from '@/components/Common/CustomCursor';
import ParticleBackground from '@/components/3D/ParticleBackground';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ParticleBackground />
      <Navigation />
      
      <main className="relative">
        <div id="home">
          <Hero />
        </div>
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <ScrollToTop />

      {/* Footer */}
      <footer className="relative py-8 px-6 text-center glass">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Your Name. Built with Next.js, Three.js & Framer Motion.
        </p>
      </footer>
    </>
  );
}

