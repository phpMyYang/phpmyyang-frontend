import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <div className="glitch-bg-container glitch-effect">
        {/* Dito natin ilalagay ang dynamic binary numbers mamaya */}
      </div>

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
      </main>
    </>
  );
}

export default App;
