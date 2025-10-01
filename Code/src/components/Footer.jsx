import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-bg-noise"></div>
      <div className="footer-grid">
        <div className="footer-left">
          {/* Decorative SVG for the left corner */}
          <svg className="footer-deco-svg" viewBox="0 0 200 60" preserveAspectRatio="none">
            <path d="M200 60 L0 60 L0 0 L20 20 L180 20" className="footer-line anim-draw" />
            <circle cx="10" cy="10" r="3" className="footer-dot" style={{ animationDelay: '1s' }} />
            <circle cx="25" cy="10" r="2" className="footer-dot" style={{ animationDelay: '1.2s' }} />
          </svg>
          <p className="footer-text copyright">© 2025 GDES // ALL RIGHTS RESERVED</p>
        </div>
        
        <div className="footer-center">
            <p className="footer-text version">V.1.0 release</p>
        </div>

        <div className="footer-right">
          <p className="footer-text status">
            <span className="status-indicator"></span>
            SYSTEM STATUS: ONLINE
          </p>
          {/* Decorative SVG for the right corner */}
          <svg className="footer-deco-svg" viewBox="0 0 200 60" preserveAspectRatio="none">
             <path d="M0 60 L200 60 L200 0 L180 20 L20 20" className="footer-line anim-draw" style={{ animationDelay: '0.5s' }}/>
             <circle cx="190" cy="10" r="3" className="footer-dot" style={{ animationDelay: '1.4s' }} />
             <circle cx="175" cy="10" r="2" className="footer-dot" style={{ animationDelay: '1.6s' }} />
          </svg>
        </div>
      </div>
    </footer>
  );
}

