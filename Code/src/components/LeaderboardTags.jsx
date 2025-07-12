import React from "react";
import './LeaderboardTags.css';


export default function LeaderboardTags({pos , img, name, playtime}) {
    return (
        <div className="LeaderboardTags">
            <div className="Leaderboard-Position">{pos}</div>
            <div className="Leaderboard-avatar"><img src={img}  alt="" /></div>
            <div className="Leaderboard-Name">{name}</div>
            <div className="Leaderboard-Playtime">{playtime}</div>
        </div>
    );
}