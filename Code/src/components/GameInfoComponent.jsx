import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GameInfoTags from './GameInfoTags.jsx';
import './GameInfoComponent.css';
import { useUserState } from './UserState.jsx';

// A custom hook for the "count-up" animation effect with easing
const useCountUp = (end, duration = 1.5) => {
    const [count, setCount] = useState(0);
    const endValue = parseInt(end, 10) || 0;

    useEffect(() => {
        let startTime = null;
        const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

        const animationFrame = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const easedProgress = easeOutCubic(progress);
            setCount(Math.floor(easedProgress * endValue));

            if (progress < 1) {
                requestAnimationFrame(animationFrame);
            }
        };

        requestAnimationFrame(animationFrame);
    }, [endValue, duration]);

    return count;
};

// Component for the interactive rating stars
const InteractiveRating = ({ currentRating, onRate }) => {
    const [rating, setRating] = useState(currentRating);
    const [hoverRating, setHoverRating] = useState(0);

    useEffect(() => {
        setRating(currentRating);
    }, [currentRating]);

    return (
        <div className="interactive-rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`star ${(hoverRating || rating) >= star ? 'filled' : ''}`}
                    onClick={() => {
                        setRating(star);
                        onRate(star);
                    }}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                >
                    ★
                </span>
            ))}
        </div>
    );
};


export default function GameInfoComponent({ data, onClose }) {
    const [scrollDepth, setScrollDepth] = useState(0);
    const navigate = useNavigate();
    // 1. REMOVED: No longer need toggleLikeGame from state
    const { userValue, rateGame } = useUserState();

    useEffect(() => {
        const handleScroll = () => setScrollDepth(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!data) return null;

    const gameId = data.name.toLowerCase().replace(/\s+/g, '-');
    const ratedGames = userValue.ratedGames || {};
    const userRating = ratedGames[gameId] || 0;

    const handlePlayNow = () => navigate(`/play/${gameId}`);
    
    // 2. CHANGE: Use visit_count directly for the animation
    const baseVisits = data.visit_count || 0;
    const animatedVisits = useCountUp(baseVisits);

    return (
        <div className="GameInfoComponent">
            <button className="back-button" onClick={onClose}>
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11 5L4 12M4 12L11 19M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Back</span>
            </button>

            <div className="game-hero-banner" style={{ transform: `translateY(${scrollDepth * 0.4}px)` }}>
                <img src={data.banner} alt={data.name} className="banner-image" />
                <div className="banner-overlay"></div>
            </div>

            <div className="game-content-wrapper">
                <div className="game-header">
                    <h1 className="game-title">{data.name}</h1>
                    <div className="game-stats-bar">
                        <div className="stat-item rating">
                            <span className="stat-value">{(data.rating || 0).toFixed(1)}</span>
                            <span className="stat-label">Community Rating</span>
                        </div>
                        {/* 3. CHANGE: Display visits instead of likes */}
                        <div className="stat-item visits">
                            <span className="stat-value">{animatedVisits.toLocaleString()}</span>
                            <span className="stat-label">Visits</span>
                        </div>
                    </div>
                </div>

                <div className="game-tags-container">
                    {data.tags?.map((tag, index) => <GameInfoTags key={index} tag={tag} />)}
                </div>
                
                {userValue.status === 2 ? (
                    <>
                        {/* 5. REMOVED: The "Like Game" button is gone */}
                        <div className="action-buttons">
                            <button className="play-now-btn" onClick={handlePlayNow}>PLAY NOW</button>
                        </div>
                        <div className="glass-panel rating-panel">
                            <h3>Your Rating</h3>
                            <InteractiveRating 
                                currentRating={userRating} 
                                onRate={(newRating) => rateGame(gameId, newRating)} 
                            />
                        </div>
                    </>
                ) : (
                    <div className="glass-panel rating-panel">
                        <h3>Login to Play & Rate</h3>
                    </div>
                )}
                
                {/* 4. CHANGE: Simplified the conditional logic */}
                <div className="info-panels">
                    <div className="glass-panel description"><p>{data.description}</p></div>
                    <div className="glass-panel about"><h3>About the Game</h3><p>{data.about}</p></div>
                </div>
            </div>
        </div>
    );
}

