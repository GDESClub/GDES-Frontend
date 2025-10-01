import React, { useState, useEffect, useMemo } from 'react';
import Footer from '/src/components/Footer.jsx';
import '../page_styles/home.css';
import LandingAnimation from '../components/LandingAnimation';
import { Link } from 'react-router-dom';

// Custom hook for the text scramble animation
const useScrambleText = (text, duration = 2000) => {
    const [scrambledText, setScrambledText] = useState('');
    const chars = '!<>-_\\/[]{}—=+*^?#________';

    useEffect(() => {
        let frameRequest;
        let frame = 0;
        const totalFrames = duration / (1000 / 60);

        const animate = () => {
            frame++;
            const progress = frame / totalFrames;
            let output = '';

            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                if (i < text.length * progress) {
                    output += char;
                } else {
                    output += chars[Math.floor(Math.random() * chars.length)];
                }
            }
            setScrambledText(output);

            if (progress < 1) {
                frameRequest = requestAnimationFrame(animate);
            }
        };
        
        animate();
        return () => cancelAnimationFrame(frameRequest);
    }, [text, duration]);

    return scrambledText;
};

const DigitalRain = ({ columns = 60 }) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>-_\\/[]{}—=+*^?#';
    
    const rainColumns = useMemo(() => {
        return Array.from({ length: columns }).map((_, i) => {
            const columnContent = Array.from({ length: 30 }).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
            return (
                <div 
                    key={i} 
                    className="rain-column" 
                    style={{
                        animationDuration: `${Math.random() * 6 + 4}s`, // 4-10 seconds
                        animationDelay: `${Math.random() * 0}s`,   // 0-8 seconds delay
                        opacity: Math.random() * 0.2 + 0.3,   // 0.3-1 opacity
                    }}
                >
                    {columnContent}
                </div>
            );
        });
    }, [columns]);

    return <div className="digital-rain-container">{rainColumns}</div>;
};

function HomePage() {
    const [showLanding, setShowLanding] = useState(true);
    const heroDescription = "GDES, The Game Development and Esports Club of IIT Guwahati.We are a community of creators, developers, and dreamers pushing the boundaries of interactive entertainment.";
    const animatedDescription = useScrambleText(heroDescription);

    // Effect for the interactive mouse-following glow
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            document.documentElement.style.setProperty('--mouse-x', `${clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${clientY}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
        {showLanding && <LandingAnimation onFinish={() => setShowLanding(false)} />}
        <div className="HomePage">
            <div className="home-bg-glow"></div>
            
            {/* --- NEW: Upgraded Background Effects --- */}
            <div className="background-effects">
                <DigitalRain />
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div className="shooting-star-container">
                    <div className="shooting-star"></div>
                    <div className="shooting-star"></div>
                    <div className="shooting-star"></div>
                </div>
            </div>

            <main className="home-content">
                <section className="home-hero">
                    <h1 className="hero-title" data-text="GDES IITG">GDES IITG</h1>
                    <p className="hero-description">{animatedDescription}</p>
                    <Link to="/games" className="hero-cta">
                        <span>Explore</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    </>
    );
    
}

export default HomePage;

