import React from 'react';
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

function App() {
  return (
    <>
      <div className="glitch-bg-container glitch-effect"></div>
      <BinaryBackground />
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />

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
