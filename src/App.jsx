// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Light/dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Load from localStorage or system preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return saved === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  // Your links (edit these!)
  const links = [
    { label: 'Portfolio', url: 'https://your-portfolio.com' },
    { label: 'GitHub',    url: 'https://github.com/yourusername' },
    { label: 'X / Twitter', url: 'https://x.com/yourhandle' },
    { label: 'LinkedIn',  url: 'https://linkedin.com/in/yourprofile' },
    // Add more as needed
  ];

  return (
    <div className="app-container">
      <button 
        className="theme-toggle" 
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      <header className="profile-header">
        <img
          src="../src/assets/profile.png"  // Your local image
          alt="Profile"
          className="profile-pic"
        />
        <h1 className="profile-name">yunie</h1>
      </header>

      <nav className="menu">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="menu-item"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <footer className="donation-footer">
        <p>All creator tokens and rewards are burned.</p>
        <p>If you would like to support me, donate USDC to the address:</p>
        <div className="address-box">
          <code>0xYourRealUSDCaddressHere1234567890abcdef1234</code>
        </div>
        <p className="small-note">Any network that supports USDC is fine</p>
      </footer>
    </div>
  );
}

export default App;