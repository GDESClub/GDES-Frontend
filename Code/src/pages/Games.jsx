import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MediaSection, mediaSections } from "../components/MediaSection"; // We'll move the component and data
import '../page_styles/AllGames.css';
import GameInfo from "./GameInfo";
import { useState } from "react";

// The "Play Games!" title component, unchanged

const PlayGames = ({ title }) => (
    <div className="play-games">
        <h2>{title}</h2>
    </div>
);

function GamesPage() {
    const username = "Rishi Gupta";

    var [gameInfo, setGameInfo] = useState(null);

    return (
        <div className="GamesPage">
            {gameInfo != null ? <GameInfo data={gameInfo} /> : <></>}
            <main className="GamesPage-content">
                <div className="GamesPage-Header">
                    <PlayGames title="Play Games!" />
                    {/* REPLACEMENT: Simple, robust div instead of a complex SVG */}
                    <div className="logged-in-box">
                        Logged in as : {username}
                    </div>
                </div>

                <div className="media-sections-container">
                    {mediaSections.map((section, index) => (
                        <MediaSection key={index} title={section.title} items={section.items} onClick={(GameInfo) => {setGameInfo(GameInfo); console.log(gameInfo)}} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default GamesPage;