import React from 'react';

const SkeletonLoader = () => {
  const pulseStyle = `
    @keyframes pulse {
      0% { opacity: 0.3; }
      50% { opacity: 0.7; }
      100% { opacity: 0.3; }
    }
  `;

  const blockStyle = {
    backgroundColor: 'var(--border-color)',
    borderRadius: '6px',
    animation: 'pulse 1.5s infinite ease-in-out',
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-primary)',
        minHeight: '100vh',
        padding: '5%',
        boxSizing: 'border-box',
        width: '100%',
        transition: 'background-color 0.3s ease',
      }}
    >
      <style>{pulseStyle}</style>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '80px',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div style={{ width: '150px', height: '35px', ...blockStyle }}></div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ width: '70px', height: '20px', ...blockStyle }}></div>
          <div style={{ width: '70px', height: '20px', ...blockStyle }}></div>
          <div style={{ width: '70px', height: '20px', ...blockStyle }}></div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '50px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            flex: '1',
            minWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
          }}
        >
          <div style={{ width: '70%', height: '60px', ...blockStyle }}></div>
          <div style={{ width: '100%', height: '18px', ...blockStyle }}></div>
          <div style={{ width: '90%', height: '18px', ...blockStyle }}></div>
          <div style={{ width: '80%', height: '18px', ...blockStyle }}></div>

          <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
            <div
              style={{ width: '130px', height: '45px', ...blockStyle }}
            ></div>
            <div
              style={{ width: '130px', height: '45px', ...blockStyle }}
            ></div>
          </div>
        </div>

        <div style={{ width: '320px', height: '400px', ...blockStyle }}></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
