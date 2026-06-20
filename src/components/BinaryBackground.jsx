import React, { useEffect, useRef } from 'react';

const BinaryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Setup canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    // Initialize drops (random starting position)
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      // Fade effect (background color opacity)
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)'; // Adjust based on your --bg-primary
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Binary text color (Accent color with opacity)
      ctx.fillStyle = '#FE7743';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random 0 or 1
        const text = Math.random() > 0.5 ? '1' : '0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1, // Nasa likod ng lahat
        opacity: 0.12, // Subtle opacity
        pointerEvents: 'none', // Para hindi maka-block ng clicks
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default BinaryBackground;
