import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '/src/page_styles/NotFound.css';

// --- Main 404 "Signal Lost" Page ---
export default function NotFoundPage() {
    const canvasRef = useRef(null);

    // This useEffect handles the glitchy background animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId;

        const setup = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const drawGlitch = () => {
            if (!canvas) return;
            ctx.fillStyle = "rgba(14, 2, 22, 0.1)"; // Faded trail effect
            ctx.fillRect(0, 0, width, height);
            
            for (let i = 0; i < 50; i++) {
                // Horizontal glitch lines
                const x = Math.random() * width;
                const y = Math.random() * height;
                const w = Math.random() * width / 2;
                const h = Math.random() * 2 + 1;
                ctx.fillStyle = `rgba(121, 255, 182, ${Math.random() * 0.1})`; // Faint green
                ctx.fillRect(x, y, w, h);

                // Glitchy blocks
                const bx = Math.random() * width;
                const by = Math.random() * height;
                const bw = Math.random() * 20 + 5;
                const bh = Math.random() * 20 + 5;
                ctx.fillStyle = `rgba(255, 115, 164, ${Math.random() * 0.1})`; // Faint pink
                ctx.fillRect(bx, by, bw, bh);
            }
            animationFrameId = requestAnimationFrame(drawGlitch);
        };

        setup();
        drawGlitch();

        window.addEventListener('resize', setup);
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', setup);
        };
    }, []);

    return (
        <div className="NotFoundPage">
            <canvas ref={canvasRef} className="glitch-canvas"></canvas>
            <div className="not-found-content">
                <h1 className="error-code" data-text="404">404</h1>
                <h2 className="error-subtitle">SIGNAL NOT FOUND</h2>
                <p className="error-description">
                    The data stream you're trying to access has been corrupted or doesn't exist in this sector. Re-routing to a secure connection is advised.
                </p>
                <Link to="/" className="home-button">
                    REBOOT CONNECTION
                </Link>
            </div>
        </div>
    );
}

