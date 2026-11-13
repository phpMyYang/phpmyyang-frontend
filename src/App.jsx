import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BinaryBackground from './components/BinaryBackground';
import SkeletonLoader from './components/SkeletonLoader';
import ThemeSwitcher from './components/ThemeSwitcher';
import TermsModal from './components/TermsModal';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Certificate = lazy(() => import('./components/Certificate'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scroll = (totalScroll / windowHeight) * 100;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ThemeSwitcher />

      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          <div
            className="neon-scroll-bar"
            style={{ width: `${scrollProgress}%` }}
          ></div>
          <div className="glitch-bg-container glitch-effect"></div>
          <BinaryBackground />
          <TermsModal />
          <Navbar />

          <main>
            <Home />

            <Suspense fallback={<SkeletonLoader />}>
              <About />

              <div className="container">
                <hr
                  style={{
                    borderColor: 'var(--accent)',
                    borderWidth: '2px',
                    opacity: 0.3,
                    borderStyle: 'dashed',
                    margin: '0',
                  }}
                />
              </div>

              <Skills />

              <div className="container">
                <hr
                  style={{
                    borderColor: 'var(--accent)',
                    borderWidth: '2px',
                    opacity: 0.3,
                    borderStyle: 'dashed',
                    margin: '0',
                  }}
                />
              </div>

              <Projects />

              <div className="container">
                <hr
                  style={{
                    borderColor: 'var(--accent)',
                    borderWidth: '2px',
                    opacity: 0.3,
                    borderStyle: 'dashed',
                    margin: '0',
                  }}
                />
              </div>

              <Experience />

              <div className="container">
                <hr
                  style={{
                    borderColor: 'var(--accent)',
                    borderWidth: '2px',
                    opacity: 0.3,
                    borderStyle: 'dashed',
                    margin: '0',
                  }}
                />
              </div>

              <Education />

              <div className="container">
                <hr
                  style={{
                    borderColor: 'var(--accent)',
                    borderWidth: '2px',
                    opacity: 0.3,
                    borderStyle: 'dashed',
                    margin: '0',
                  }}
                />
              </div>

              <Certificate />

              <div className="container">
                <hr
                  style={{
                    borderColor: 'var(--accent)',
                    borderWidth: '2px',
                    opacity: 0.3,
                    borderStyle: 'dashed',
                    margin: '0',
                  }}
                />
              </div>

              <Contact />
              <Footer />
            </Suspense>
          </main>
        </>
      )}
    </>
  );
}

export default App;
