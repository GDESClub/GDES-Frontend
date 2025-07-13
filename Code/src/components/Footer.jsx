import React from "react";
import './Footer.css';

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footer-line-group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1256 19"
          preserveAspectRatio="none"
          className="footer-line"
        >
          <path d="M1239.77 0.5L1254.92 18.5H0.5V0.5H1239.77Z" stroke="#79FFB6" fill="none" />
        </svg>

        {[...Array(7)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33 19"
            className="footer-icon"
            preserveAspectRatio="none"
          >
            <path
              d="M16.7666 0.5L31.9248 18.5H16.2334L1.0752 0.5H16.7666Z"
              stroke="#79FFB6"
              fill="none"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}
