import React from 'react';
import '../page_styles/RegistrationPage.css';

export default function RegistrationPage() {
  // Using one of the existing images as the default background for the closed page
  const defaultImage = "/legacy/Valorant.jpeg";

  return (
    <div className="registration-page">
      {/* Background ambient glow */}
      <div 
        className="ambient-background" 
        style={{ backgroundImage: `url("${defaultImage}")` }}
      />
      
      <div className="premium-wrapper">
        {/* Static Image Panel */}
        <div className="image-panel">
          <img 
            src={defaultImage} 
            alt="Tournament Poster" 
            className="game-poster"
          />
          <div className="image-overlay">
            <div className="overlay-content">
              <h2>LEGACY</h2>
              <p>JULY 28-30</p>
            </div>
          </div>
        </div>

        {/* Glassmorphic Panel - Replaced Form with Closed Message */}
        <div className="form-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="form-header">
            <h1 className="registration-title">Registrations Closed</h1>
            <p className="registration-subtitle">The tournament roster is now locked.</p>
          </div>

          <div className="success-card" style={{ marginTop: '2rem' }}>
            <div className="success-icon" style={{ color: '#ff4b4b' }}>🔒</div>
            <h2 className="success-title">Entry Closed</h2>
            <p style={{ marginBottom: '2rem' }}>
              We are no longer accepting new entries for this event. Thank you for the overwhelming response! 
              Keep an eye out for our upcoming tournaments.
            </p>
            
            <button 
              className="submit-button" 
              onClick={() => window.location.href = '/'}
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}