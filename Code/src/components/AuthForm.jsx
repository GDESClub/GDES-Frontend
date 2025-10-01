import React from 'react';
import './AuthForm.css';

export default function AuthForm({ title, fields, buttonText, switchText, onSwitch, onSubmit, error, variant }) {
  return (
    <div className={`auth-form ${variant}`}>
      {/* The title now has a data-text attribute for the glitch effect */}
      <h2 className="auth-title" data-text={title}>{title}</h2>
      
      <form onSubmit={onSubmit} className="auth-form-body">
        {fields.map((field, index) => (
          <div className="auth-input-block" key={index}>
            <label className="auth-label">{field.label}</label>
            {/* The complex SVG wrapper has been removed for a cleaner input */}
            <input
              className="auth-input"
              type={field.type}
              placeholder={field.placeholder}
              onChange={(e) => field.oninput(e.target.value)}
              required
            />
          </div>
        ))}

        {error && <p className="error-message">{error}</p>}

        {/* The SVG wrapper is gone, this is now a standard button */}
        <button type="submit" className="auth-button">
          {buttonText}
        </button>
      </form>

      {onSwitch && (
        <div className="switch-link">
          <span>{switchText[0]}</span>
          <span onClick={onSwitch}>{switchText[1]}</span>
        </div>
      )}
    </div>
  );
}

