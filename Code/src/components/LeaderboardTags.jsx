import React from "react";
import './LeaderboardTags.css';

export default function LeaderboardTags({ pos, img, name, activityCount }) {
    // Add a class for top performers
    const rankClass = pos <= 3 ? `rank-${pos}` : '';

    return (
        <div className={`LeaderboardTags ${rankClass}`}>
            <div className="Leaderboard-Position">{pos}</div>
            <div className="Leaderboard-avatar">
                <img src={img} alt={`${name}'s avatar`} />
            </div>
            <div className="Leaderboard-Name">{name}</div>
            <div className="Leaderboard-Playtime">{activityCount}</div>
        </div>
    );
}

