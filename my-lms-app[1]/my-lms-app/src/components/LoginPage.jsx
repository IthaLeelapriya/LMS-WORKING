import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLogin, onRegisterClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const isPasswordValid = (pw) => {
    // At least one uppercase, one lowercase, one digit and one special character
    const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+/;
    return re.test(pw);
  };

  const handleLogin = () => {
    if (!email || !password || !selectedRole) {
      alert('Please enter your email, password, and select a role.');
      return;
    }

    if (!isPasswordValid(password)) {
      alert('Password does not meet complexity requirements.');
      return;
    }

    onLogin(selectedRole);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-logo">
          <h2>LMS<span>.</span></h2>
        </div>
        <h2>Access Your Learning Hub</h2>
        <p>Log in to access your personalized learning experience.</p>

        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="your.email@example.com"
              required 
            />
          </div>

          <div className="input-group">
            <div className="password-header">
              <label htmlFor="password">Password</label>
              <a href="#" className="forgot-password-link">Forgot Password?</a>
            </div>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••"
              required 
            />

            {/* Small red warning shown when password value exists but does not meet requirements */}
            {password && !isPasswordValid(password) && (
              <div className="password-warning" role="alert">
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                  <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                </svg>
                <span>Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.</span>
              </div>
            )}
          </div>

          <div className="role-selection">
            <p className="role-selection-title">
              I am a:
              {selectedRole && <span className="selected-role-name"> {selectedRole}</span>}
            </p>
            <div className="role-cards">
              <label className={`role-card ${selectedRole === 'Student' ? 'active-role' : ''}`}>
                <input 
                  type="radio" 
                  name="role" 
                  value="Student" 
                  checked={selectedRole === 'Student'} 
                  onChange={(e) => setSelectedRole(e.target.value)}
                  required
                />
                <span>🎓 Student</span>
              </label>
              
              <label className={`role-card ${selectedRole === 'Instructor' ? 'active-role' : ''}`}>
                <input 
                  type="radio" 
                  name="role" 
                  value="Instructor" 
                  checked={selectedRole === 'Instructor'} 
                  onChange={(e) => setSelectedRole(e.target.value)}
                />
                <span>📝 Instructor</span>
              </label>

              <label className={`role-card ${selectedRole === 'Content Creator' ? 'active-role' : ''}`}>
                <input 
                  type="radio" 
                  name="role" 
                  value="Content Creator" 
                  checked={selectedRole === 'Content Creator'} 
                  onChange={(e) => setSelectedRole(e.target.value)}
                />
                <span>✍️ Content Creator</span>
              </label>
              
              <label className={`role-card ${selectedRole === 'Admin' ? 'active-role' : ''}`}>
                <input 
                  type="radio" 
                  name="role" 
                  value="Admin" 
                  checked={selectedRole === 'Admin'} 
                  onChange={(e) => setSelectedRole(e.target.value)}
                />
                <span>📊 Admin</span>
              </label>
            </div>
          </div>
          
          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>

        {/* Register Link */}
        <div className="register-section">
          <p>Don't have an account? <button type="button" className="register-btn-link" onClick={onRegisterClick}>Sign up here</button></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;