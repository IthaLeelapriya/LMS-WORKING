import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme} title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
      {isDarkMode ? (
        <span className="moon-icon">🌙</span>
      ) : (
        <span className="sun-icon">☀️</span>
      )}
    </button>
  );
}
