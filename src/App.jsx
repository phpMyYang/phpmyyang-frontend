import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BinaryBackground from './components/BinaryBackground';
import SkeletonLoader from './components/SkeletonLoader';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!isGlitching) {
        setIsGlitching(true);
      }

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setIsGlitching(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [isGlitching]);

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
          <div className="glitch-bg-container glitch-effect"></div>
          <BinaryBackground />
          <Navbar />

          {/* Main Content */}
          <main className={isGlitching ? 'scroll-glitch-active' : ''}>
            <Home />
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

            <Contact />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}

export default App;
