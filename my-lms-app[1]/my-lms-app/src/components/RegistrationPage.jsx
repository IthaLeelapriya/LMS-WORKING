import React, { useState } from 'react';
import './RegistrationPage.css';

const RegistrationPage = ({ onRegistrationComplete, onBackToLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Student',
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Validation rules
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const requirements = {
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    };
    return requirements;
  };

  const calculatePasswordStrength = (password) => {
    const requirements = validatePassword(password);
    const metRequirements = Object.values(requirements).filter(Boolean).length;
    return (metRequirements / 5) * 100;
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          error = 'Full name is required.';
        } else if (value.trim().length < 2) {
          error = 'Full name must be at least 2 characters.';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required.';
        } else if (!validateEmail(value)) {
          error = 'Please enter a valid email address.';
        }
        break;

      case 'password':
        if (!value) {
          error = 'Password is required.';
        } else {
          const requirements = validatePassword(value);
          const unmetRequirements = [];
          if (!requirements.minLength) unmetRequirements.push('at least 8 characters');
          if (!requirements.hasUppercase) unmetRequirements.push('one uppercase letter');
          if (!requirements.hasLowercase) unmetRequirements.push('one lowercase letter');
          if (!requirements.hasNumber) unmetRequirements.push('one number');
          if (!requirements.hasSpecialChar) unmetRequirements.push('one special character');

          if (unmetRequirements.length > 0) {
            error = `Password must contain ${unmetRequirements.join(', ')}.`;
          }
        }
        break;

      case 'confirmPassword':
        if (!value) {
          error = 'Please confirm your password.';
        } else if (value !== formData.password) {
          error = 'Passwords do not match.';
        }
        break;

      case 'phone':
        if (value && !/^\d{10,}$/.test(value.replace(/\D/g, ''))) {
          error = 'Phone number must be at least 10 digits.';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Calculate password strength
    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }

    // Real-time validation if field was touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (field !== 'phone' || formData[field]) {
        const error = validateField(field, formData[field]);
        if (error) newErrors[field] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        fullName: true,
        email: true,
        password: true,
        confirmPassword: true,
        phone: true,
      });
      return;
    }

    // All validation passed
    console.log('Registration successful:', formData);
    alert('Registration successful! You can now log in.');
    onRegistrationComplete();
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 40) return '#f44336';
    if (passwordStrength < 70) return '#ff9800';
    return '#4caf50';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 40) return 'Weak';
    if (passwordStrength < 70) return 'Fair';
    return 'Strong';
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        <div className="registration-header">
          <h2>Create Your Account</h2>
          <p>Join our learning community</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your full name"
              className={errors.fullName ? 'input-error' : ''}
            />
            {errors.fullName && touched.fullName && (
              <span className="error-message">{errors.fullName}</span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="your.email@example.com"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && touched.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="••••••••"
              className={errors.password ? 'input-error' : ''}
            />
            {formData.password && (
              <div className="password-strength">
                <div className="strength-bar">
                  <div
                    className="strength-fill"
                    style={{
                      width: `${passwordStrength}%`,
                      backgroundColor: getPasswordStrengthColor(),
                    }}
                  ></div>
                </div>
                <span
                  className="strength-text"
                  style={{ color: getPasswordStrengthColor() }}
                >
                  {getPasswordStrengthText()}
                </span>
              </div>
            )}
            {errors.password && touched.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="••••••••"
              className={errors.confirmPassword ? 'input-error' : ''}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          {/* Role Selection */}
          <div className="form-group">
            <label htmlFor="role">Role *</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="Student">Student</option>
              <option value="Faculty">Faculty</option>
              <option value="Content Creator">Content Creator</option>
            </select>
          </div>

          {/* Phone (Optional) */}
          <div className="form-group">
            <label htmlFor="phone">Phone (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="+1 (555) 123-4567"
              className={errors.phone ? 'input-error' : ''}
            />
            {errors.phone && touched.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="register-btn"
            disabled={Object.keys(errors).length > 0 && Object.keys(touched).length > 0}
          >
            Create Account
          </button>
        </form>

        {/* Back to Login */}
        <div className="back-to-login">
          <p>Already have an account? <button type="button" onClick={onBackToLogin} className="back-link">Login here</button></p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
