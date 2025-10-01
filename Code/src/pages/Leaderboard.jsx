import { useState, useEffect } from "react";
import LeaderboardComponent from "../components/LeaderboardComponent";
import Footer from "../components/Footer";
import '../page_styles/Leaderboard.css';

const LeaderboardSkeleton = () => (
    <div className="leaderboard-skeleton">
        {[...Array(10)].map((_, i) => (
            <div className="skeleton-row" key={i}>
                <div className="skeleton-pos"></div>
                <div className="skeleton-avatar"></div>
                <div className="skeleton-name"></div>
                <div className="skeleton-playtime"></div>
            </div>
        ))}
    </div>
);

export default function LeaderboardPage() {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await fetch("https://gdesbackend.vercel.app/api/leaderboard");
                if (!response.ok) throw new Error("Failed to fetch leaderboard data.");
                const data = await response.json();
                setLeaderboardData(data);
                setFilteredData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchLeaderboard();
    }, []);

    useEffect(() => {
        const results = leaderboardData.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(results);
    }, [searchTerm, leaderboardData]);

    return (
        <div className="LeaderboardPage">
            {/* --- NEW: Floating 3D Shapes --- */}
            <div className="background-shapes">
                <div className="floating-shape"></div>
                <div className="floating-shape"></div>
                <div className="floating-shape"></div>
                <div className="floating-shape"></div>
                <div className="floating-shape"></div>
                <div className="floating-shape"></div>
                <div className="floating-shape"></div>
                <div className="floating-shape"></div>
            </div>

            {isLoading ? (
                <LeaderboardSkeleton />
            ) : (
                <LeaderboardComponent
                    data={filteredData}
                    onSearchChange={setSearchTerm}
                />
            )}
            <Footer />
        </div>
    );
}

