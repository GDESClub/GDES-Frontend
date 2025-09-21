import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import '../page_styles/GameInfo.css';
import GameInfoComponent from "../components/GameInfoComponent.jsx";
import bannerImage from "../assets/placeholder.png";

function GameInfo(){
const sampleData = {
  banner: bannerImage,
  tags: ["Adventure", "Puzzle", "Multiplayer"],
  name: "Mystic Quest",
  rating: 4.2,               // rating between 0 and 5
  description: "Embark on an epic journey through mystical lands and solve challenging puzzles.",
  liked_count: 1284,
  about: "Mystic Quest is a fantasy adventure game where players explore dungeons, collect treasures, and battle mythical creatures."
};
    return(
        <div className="GameInfo">
            <Navbar/>
            <GameInfoComponent data={sampleData}/>
            <Footer />
        </div>
    );
}

export default GameInfo;
