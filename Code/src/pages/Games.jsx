import { useState, useEffect } from "react";
import Footer from "/src/components/Footer.jsx";
import { MediaSection } from "/src/components/MediaSection.jsx";
import GameInfoComponent from "/src/components/GameInfoComponent.jsx";
import { BACKENDURL } from "/src/components/backend.jsx";
import '/src/page_styles/AllGames.css';
import { useUserState } from "/src/components/UserState.jsx";
import ExplorePage from "./Explore";

const GamePageSkeleton = () => (
    <div className="skeleton-container">
        <div className="skeleton-hero"></div>
        <div className="skeleton-carousel-title"></div>
        <div className="skeleton-carousel">
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
        </div>
    </div>
);

function GamesPage() {
    const { userValue } = useUserState();
    const [gameInfo, setGameInfo] = useState(null);
    const [games, setGames] = useState([]);
    const [featuredGame, setFeaturedGame] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch(`${BACKENDURL}api/games`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setGames(data);
                if (data.length > 0) {
                    setFeaturedGame(data[data.length - 1]);
                }
            } catch (error) {
                console.error("Failed to fetch games:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchGames();
    }, []);

    if (gameInfo) {
        return <GameInfoComponent data={gameInfo} onClose={() => setGameInfo(null)} />;
    }

    return (
        <div className="GamesPage">
            {/* --- NEW: Animated Circuit Board Background --- */}
            <div className="circuit-board-bg">
                <div className="trace"></div>
                <div className="trace"></div>
                <div className="trace"></div>
                <div className="trace"></div>
                <div className="trace"></div>
            </div>

            <div className="particles">
                {/* ... (particle divs) ... */}
            </div>

            <main className="GamesPage-content">
                {isLoading ? (
                    <GamePageSkeleton />
                ) : (
                    <>
                        {featuredGame && (
                            <div className="hero-section">
                                <div className="hero-background">
                                    <img src={featuredGame.banner} alt={`${featuredGame.name} banner`} />
                                    <div className="hero-gradient-overlay"></div>
                                </div>
                                <div className="hero-content">
                                    <h1 className="hero-title">{featuredGame.name}</h1>
                                    <p className="hero-description">{featuredGame.about}</p>
                                    <button className="hero-button" onClick={() => setGameInfo(featuredGame)}>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        )}
                        
                        <div className="user-info-header">
                             {userValue.status === 2 ? <span>Welcome back, <strong>{userValue.username}</strong></span>: <span>Welcome to GDES Games</span>}
                        </div>

                        <MediaSection
                            title="All Games"
                            items={games}
                            onClick={(info) => setGameInfo(info)}
                        />
                    </>
                )}
            </main>
            <ExplorePage/>
            <Footer />
        </div>
    );
};

export default GamesPage;

