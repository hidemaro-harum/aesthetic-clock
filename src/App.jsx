import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Clock from './components/Clock';
import ThemeSwitcher from './components/ThemeSwitcher';
import Controls from './components/Controls';
import './styles/index.css';
import './styles/animations.css';

const AppContent = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isUiVisible, setIsUiVisible] = useState(true);
  const [is24Hour, setIs24Hour] = useState(true);
  const [showSeconds, setShowSeconds] = useState(true);
  const timeoutRef = useRef(null);

  // Parallax effect logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });

      // Show UI on mouse move
      setIsUiVisible(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      // Hide UI after 3 seconds of inactivity
      timeoutRef.current = setTimeout(() => setIsUiVisible(false), 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const backgroundStyle = {
    background: `
      radial-gradient(
        circle at ${50 + mousePos.x * 10}% ${50 + mousePos.y * 10}%, 
        var(--accent-primary) 0%, 
        transparent 50%
      ),
      radial-gradient(
        circle at ${80 - mousePos.x * 10}% ${20 + mousePos.y * 10}%, 
        var(--accent-secondary) 0%, 
        transparent 40%
      ),
      radial-gradient(
        circle at ${20 + mousePos.x * 10}% ${80 - mousePos.y * 10}%, 
        var(--accent-tertiary) 0%, 
        transparent 40%
      )
    `,
    backgroundColor: 'var(--bg-color)',
    transition: 'background-color 0.5s ease', // Smooth theme transition
  };

  return (
    <div className="app-container" style={backgroundStyle}>
      <div className="aurora-layer"></div>
      <Controls
        isVisible={isUiVisible}
        is24Hour={is24Hour}
        showSeconds={showSeconds}
        onToggle24Hour={() => setIs24Hour((prev) => !prev)}
        onToggleSeconds={() => setShowSeconds((prev) => !prev)}
      />
      <Clock is24Hour={is24Hour} showSeconds={showSeconds} />
      <div className={`theme-switcher-wrapper ${!isUiVisible ? 'hidden' : ''}`}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
