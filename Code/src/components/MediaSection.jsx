import { useRef } from "react";
import "./MediaSection.css";

// --- SUB-COMPONENTS ---

const StatsIcon = ({ type }) => {
    const icons = {
        stars: <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z" />,
        views: <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zm11 5c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z" fillRule="evenodd" clipRule="evenodd"><circle cx="12" cy="12" r="3"/></path>
    };
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="stats-icon" fill="currentColor">
            {icons[type]}
        </svg>
    );
};

const GameCard = ({ item, onClick }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / (width / 2);
        const y = (e.clientY - top - height / 2) / (height / 2);

        // Multiplier controls the intensity of the tilt
        cardRef.current.style.setProperty('--rotate-y', `${x * 8}deg`); 
        cardRef.current.style.setProperty('--rotate-x', `${y * -8}deg`);
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.setProperty('--rotate-y', '0deg');
        cardRef.current.style.setProperty('--rotate-x', '0deg');
    };

    const visitCount = item.visit_count || 0;

    return (
        <div 
            className="card" 
            ref={cardRef}
            onClick={() => onClick(item)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-background" style={{ backgroundImage: `url(${item.banner})` }}></div>
            <div className="card-info">
                <p className="card-title">{item.name}</p>
                <div className="stats">
                    <span><StatsIcon type="stars" /> {(item.rating || 0).toFixed(1)}</span>
                    <span><StatsIcon type="views" /> {visitCount.toLocaleString()}</span>
                </div>
            </div>
            <div className="card-glow"></div>
        </div>
    );
};

// --- MAIN COMPONENT ---

export const MediaSection = ({ title, items, onClick }) => {
    return (
        <div className="media-section">
            <h2 className="section-title">{title}</h2>
            
            <div className="media-grid">
                {items.map((item, index) => (
                    <GameCard 
                        item={item} 
                        onClick={onClick} 
                        key={`${item._id || item.name}-${index}`} 
                    />
                ))}
            </div>
        </div>
    );
};