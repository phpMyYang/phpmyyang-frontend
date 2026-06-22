import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BinaryBackground from './components/BinaryBackground';
import SkeletonLoader from './components/SkeletonLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SkeletonLoader />;
  }
  return (
    <>
      <div className="glitch-bg-container glitch-effect"></div>
      <BinaryBackground />
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
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
  );
}

export default App;
