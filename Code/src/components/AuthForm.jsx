import React from 'react';
import './AuthForm.css';

function AuthForm({ title, fields, buttonText, switchText, onSwitch, onSubmit, variant }) {
  return (
    <div className={`auth-form ${variant}`}>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        {fields.map((field, index) => (
          <div className={`auth-input-block ${field.small ? 'small-input-block' : ''}`} key={index}>
            <label>{field.label}</label>
            <div className={`custom-input-wrapper ${field.small ? 'small-input' : ''}`}>
              {field.small ? (
                <svg width="340" height="36" viewBox="0 0 340 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.10075 35L1 22.8571V1H332.249L339 11.2V35H9.10075Z" stroke="#79FFB6" />
                </svg>
              ) : (
                <svg width="502" height="36" viewBox="0 0 502 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.983 35L1 22.8571V1H491L500.986 11.2V35H12.983Z" stroke="#79FFB6" />
                </svg>
              )}
              <input
                type={field.type}
                placeholder={field.placeholder}
              />
            </div>
          </div>
        ))}

        <div className="custom-button-wrapper">
          <svg width="234" height="34" viewBox="0 0 234 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.983 34L0 21.8571V0L223.5 0.00012207L233.486 10.2001V34.0001L11.983 34Z" fill="#79FFB6" />
          </svg>
          <button type="submit">{buttonText}</button>
        </div>
      </form>

      <div className="switch-link">
        <span>{switchText[0]}</span>
        <span onClick={onSwitch}>{switchText[1]}</span>
      </div>
    </div>
  );
}

export default AuthForm;
