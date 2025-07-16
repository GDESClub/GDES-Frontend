import Navbar from "../components/Navbar";
import '../page_styles/AllGames.css';

function GamesPage() {
	const username = "Rishi Gupta";
	const padding = 50;
	const approxTextWidth = username.length * 8 + 100;

	return (
		<div className="GamesPage">
			<Navbar />
			<div className="GamesPage-Header">
				<PlayGames title="Play Games!" />
				<div className="logged-in-box">
					<svg
						width={approxTextWidth + padding}
						height="36"
						viewBox={`0 0 ${approxTextWidth + padding + 1} 36`}
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d={`M13 1L1 13.14V35H${approxTextWidth + padding - 11}L${approxTextWidth + padding} 24.8V1H13Z`}
							stroke="#FF73A4"
						/>
						<text
							x={(approxTextWidth + padding) / 2}
							y="24"
							textAnchor="middle"
							fill="#ECF5FF"
						>
							Logged in as : {username}
						</text>
					</svg>
				</div>
			</div>
		</div>
	);
};

const PlayGames = ({ title }) => (
	<div className="play-games">
		<h2>{title}</h2>
	</div>
);

export default GamesPage;