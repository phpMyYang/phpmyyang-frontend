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
          <Navbar />

          {/* Main Content */}
          <main>
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
