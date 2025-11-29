import React from 'react';
import './Header.css';
import { useTheme } from '../context/ThemeContext';

const Header = ({ isLoggedIn, onLogout }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="main-header">
      <div className="header-left">
        <h1 className="logo-text">Samyak</h1>
        <div className="logo-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#fff"/>
            <path d="M12 6L6 12L12 18L18 12L12 6Z" fill="#ff0057"/>
          </svg>
        </div>
      </div>
      <ul className="nav-links">
        <li><a href="#">HOME</a></li>
        <li><a href="#">GALLERY</a></li>
        <li><a href="#">EVENTS</a></li>
        <li><a href="#">REGISTERED EVENTS</a></li>
      </ul>
      <div className="auth-buttons">
        {isLoggedIn && (
          <>
            {/* Theme Toggle Button */}
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label={isDarkMode ? 'Light mode' : 'Dark mode'}
            >
              {isDarkMode ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>

            {/* Logout Button */}
            <button className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </>
        )}
        {!isLoggedIn && (
          <>
            <button className="nav-btn login-btn">Login</button>
            <button className="nav-btn register-btn">Register</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;