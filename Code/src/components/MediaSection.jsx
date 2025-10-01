import { useRef, useState, useEffect } from "react";
import "./MediaSection.css";

const NavArrow = ({ direction }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={direction === 'left' ? "M15 18L9 12L15 6" : "M9 18L15 12L9 6"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const StatsIcon = ({ type }) => {
    const icons = {
        stars: <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z" />,
        // NEW: Replaced the old "eye" icon with a cleaner "views" icon
        views: <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zm11 5c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z" fillRule="evenodd" clipRule="evenodd"><circle cx="12" cy="12" r="3"/></path>
    };
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="stats-icon" fill="currentColor">
            {icons[type]}
        </svg>
    );
};

// --- New Card Component with Parallax Logic ---
const GameCard = ({ item, onClick }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / (width / 2);
        const y = (e.clientY - top - height / 2) / (height / 2);

        cardRef.current.style.setProperty('--rotate-y', `${x * 10}deg`);
        cardRef.current.style.setProperty('--rotate-x', `${y * -10}deg`);
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.setProperty('--rotate-y', '0deg');
        cardRef.current.style.setProperty('--rotate-x', '0deg');
    };

    // THE FIX: Provide a default value for visit_count to prevent errors
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
                    {/* Use the new "views" icon and the safe visitCount variable */}
                    <span><StatsIcon type="views" /> {visitCount.toLocaleString()}</span>
                </div>
            </div>
            <div className="card-glow"></div>
        </div>
    );
};


export const MediaSection = ({ title, items, onClick }) => {
    const scrollRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const checkScrollPosition = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setAtStart(scrollLeft < 10);
        setAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
    };

    useEffect(() => {
        checkScrollPosition();
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener("scroll", checkScrollPosition, { passive: true });
            window.addEventListener('resize', checkScrollPosition);
        }
        return () => {
            if (currentRef) {
                currentRef.removeEventListener("scroll", checkScrollPosition);
                window.removeEventListener('resize', checkScrollPosition);
            }
        };
    }, [items]);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const offset = scrollRef.current.clientWidth * 0.8;
            scrollRef.current.scrollBy({ left: direction === "left" ? -offset : offset, behavior: "smooth" });
        }
    };

    const hasOverflow = scrollRef.current ? scrollRef.current.scrollWidth > scrollRef.current.clientWidth : false;

    return (
        <div className="media-section">
            <h2 className="section-title">{title}</h2>
            <div className="carousel-wrapper">
                {hasOverflow && <button className="nav-btn left" onClick={() => scroll("left")} disabled={atStart}><NavArrow direction="left" /></button>}
                <div className="carousel" ref={scrollRef}>
                    {items.map((item) => (
                        <GameCard item={item} onClick={onClick} key={item._id || item.name} />
                    ))}
                </div>
                {hasOverflow && <button className="nav-btn right" onClick={() => scroll("right")} disabled={atEnd}><NavArrow direction="right" /></button>}
            </div>
        </div>
    );
};

