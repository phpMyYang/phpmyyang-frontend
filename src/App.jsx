import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// Ang Bootstrap ay naka-import na sa main.jsx kaya hindi na kailangan dito

function App() {
  return (
    <>
      {/* Glitch Background Wrapper */}
      <div className="glitch-bg-container glitch-effect">
        {/* Dito natin ilalagay ang dynamic binary numbers mamaya */}
      </div>

      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
