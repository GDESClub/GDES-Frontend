import React, { useEffect, useState } from "react";
import "./LandingAnimation.css";

const LandingAnimation = ({ onFinish }) => {
  const [show, setShow] = useState(true);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particle paths
    const temp = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: `${Math.random() * 800 - 400}px`,
      y: `${Math.random() * 800 - 400}px`,
    }));
    setParticles(temp);

    const timer = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 5000); 
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="landing-overlay">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{ "--x": p.x, "--y": p.y }}
        ></div>
      ))}
      <h1 className="landing-title">GDES IITG</h1>
    </div>
  );
};

export default LandingAnimation;
