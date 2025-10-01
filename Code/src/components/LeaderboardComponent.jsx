import React from "react";
import LeaderboardTags from "./LeaderboardTags";
import './LeaderboardComponent.css';

export default function LeaderboardComponent({ data, onSearchChange }) {
    return (
       <div className="LeaderboardComponent">
            <div className="Leaderbord-Heading-Container">
                <div className="Leaderboard-Heading">Leaderboard</div>
                <div className="angled-searchbar">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 355 36" fill="none" className="angularsearch">
                        <path d="M12.983 1L1 13.1429V35H344.014L354 24.8V1H12.983Z" stroke="#95F6FF"/>
                    </svg>
                    <svg className="mag-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M10 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8c0 1.657-.506 3.194-1.368 4.451l5.459 5.459-1.414 1.414-5.459-5.459A7.963 7.963 0 0 1 10 18zM4 10c0 3.309 2.691 6 6 6s6-2.691 6-6-2.691-6-6-6-6 2.691-6 6z" fill="#EAEAEA" opacity="0.5"/>
                    </svg>
                    <input 
                        className="angled-input" 
                        type="text" 
                        placeholder="Search username" 
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
            </div>
            
            <div className="Leaderboard-Subheading-Container">
                <div className="rank-heading">Rank</div>
                <div className="username-heading">User</div>
                <div className="playtime-heading">Activities</div>
            </div>

            <div className="Leaderboard-Container-wrapper">
                <div className="Leaderboard-Container">
                    {data.length > 0 ? (
                        data.map((entry) => (
                            <LeaderboardTags
                                key={entry.pos}
                                pos={entry.pos}
                                img={entry.img}
                                name={entry.name}
                                activityCount={entry.playtime} // Use a more descriptive prop name
                            />
                        ))
                    ) : (
                        <p className="no-results">No users found.</p>
                    )}
                </div>
            </div>
       </div>
    );
}
