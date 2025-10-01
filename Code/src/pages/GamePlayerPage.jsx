import { useState, useEffect, useRef } from 'react'; // 1. Import useRef
import { useParams, Link } from 'react-router-dom';
import '../page_styles/GamePlayerPage.css';
import { useUserState } from '/src/components/UserState.jsx';

export default function GamePlayerPage() {
    const { gameId } = useParams();
    const { userValue } = useUserState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // 2. Create a ref to track if the activity has been logged
    const activityLoggedRef = useRef(false);

    const gameUrl = `/games/${gameId}/index.html`;

    useEffect(() => {
        const logPlayActivity = async () => {
            // Only log if the user is logged in AND it hasn't been logged yet
            if (userValue.status === 2 && userValue.jwtToken && !activityLoggedRef.current) {
                // 3. Set the flag immediately to prevent double calls
                activityLoggedRef.current = true;
                
                try {
                    // --- Call 1: Log the game visit for the cooldown timer ---
                    await fetch(`https://gdesbackend.vercel.app/api/games/${gameId}/visit`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${userValue.jwtToken}`
                        }
                    });
                    console.log("Game visit logged for " + gameId);

                    // --- Call 2: Add this game play to the user's activity feed ---
                    const activityName = gameId.replace(/-/g, ' ');
                    await fetch(`https://gdesbackend.vercel.app/api/addactivity`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${userValue.jwtToken}`
                        },
                        body: JSON.stringify({ Name: `${activityName}` })
                    });
                    console.log("Activity logged for playing " + activityName);

                } catch (err) {
                    console.error("Failed to log game visit or activity:", err);
                    // If logging fails, reset the flag to allow a retry on the next render
                    activityLoggedRef.current = false;
                }
            }
        };
        
        logPlayActivity();

        const timer = setTimeout(() => setIsLoading(false), 1000);
        fetch(gameUrl)
            .then(res => {
                if (!res.ok) throw new Error(`Game not found.`);
            })
            .catch(err => {
                setError(err.message);
            });
        
        return () => clearTimeout(timer);
    }, [gameId, gameUrl, userValue.jwtToken, userValue.status]);

    return (
        <div className="game-player-page">
            <Link to="/games" className="game-back-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 5L4 12M4 12L11 19M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Exit Game</span>
            </Link>

            {isLoading && !error && (
                <div className="loading-overlay">
                    <div className="loader"></div>
                    <span className="loading-text">INITIALIZING GAME ENGINE...</span>
                </div>
            )}

            {error && (
                <div className="error-overlay">
                    <h2 className="error-title">LOAD FAILED</h2>
                    <p className="error-message">{error}</p>
                </div>
            )}

            {!error && (
                <iframe
                    src={gameUrl}
                    title={gameId}
                    className={`game-iframe ${isLoading ? 'hidden' : ''}`}
                    onLoad={() => setIsLoading(false)}
                ></iframe>
            )}
        </div>
    );
}

