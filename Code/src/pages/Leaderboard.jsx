import Navbar from "../components/Navbar";
import LeaderboardComponent from "../components/LeaderboardComponent";
import Footer from "../components/Footer";
import '../page_styles/Leaderboard.css';

function* generateLeaderboardData(n = 10) {
    const names = [
        "ShadowSlayer", "CrimsonWolf", "PixelPunk", "CyberNinja", "ArcadeKing",
        "BlitzByte", "VenomViper", "NeonGhost", "RogueStorm", "CodeWizard",
        "QuantumDuck", "DarkKnight", "LaserFalcon", "FrostHex", "IronPhantom"
    ];

    const avatarBase = "https://i.pravatar.cc/150?img=";

    for (let i = 1; i <= n; i++) {
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomAvatar = `${avatarBase}${Math.floor(Math.random() * 70) + 1}`;
        const totalSeconds = Math.floor(Math.random() * 10 * 3600); // Up to 10 hours

        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');

        yield {
            pos: i,
            img: randomAvatar,
            name: randomName,
            playtime: `${hours}:${minutes}:${seconds}`
        };
    }
}

const Leaderboard_data = [...generateLeaderboardData(100)];


function LeaderboardPage(){
    return(
        <div className="LeaderboardPage">
            
            <LeaderboardComponent data={Leaderboard_data}/>
            <Footer />
        </div>
    );
}

export default LeaderboardPage;