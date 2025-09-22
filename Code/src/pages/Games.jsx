import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MediaSection, mediaSections } from "../components/MediaSection"; // We'll move the component and data
import '../page_styles/AllGames.css';

// The "Play Games!" title component, unchanged
const PlayGames = ({ title }) => (
    <div className="play-games">
        <h2>{title}</h2>
    </div>
);

function GamesPage() {
    const username = "Rishi Gupta";

    return (
        <div className="GamesPage">
            <Navbar />
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
                        <MediaSection key={index} title={section.title} items={section.items} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default GamesPage;