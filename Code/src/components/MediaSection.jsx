import { useRef, useState, useEffect } from "react";
import "./MediaSection.css";

// 1. Restore the NavArrow Component
const NavArrow = ({ direction }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={direction === 'left' ? "M15 18L9 12L15 6" : "M9 18L15 12L9 6"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

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

        cardRef.current.style.setProperty('--rotate-y', `${x * 10}deg`);
        cardRef.current.style.setProperty('--rotate-x', `${y * -10}deg`);
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


export const MediaSection = ({ title, items, onClick }) => {
    // Duplicate items for the infinite loop
    const infiniteItems = [...items, ...items];
    const scrollRef = useRef(null);
    const animationRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    // 2. Add the Manual Scroll Function back
    const scroll = (direction) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollAmount = 400; // Amount to scroll per click
            
            // Logic to handle "Infinite Left"
            // If we are at the very start (0) and click left, jump to the middle first
            if (direction === "left" && container.scrollLeft <= 0) {
                 container.scrollLeft = container.scrollWidth / 2;
            }

            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scrollSpeed = 0.8; 

        const animate = () => {
            if (!isPaused && scrollContainer) {
                scrollContainer.scrollLeft += scrollSpeed;

                // Reset logic: seamless loop
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [isPaused, items]);

    return (
        <div className="media-section">
            <h2 className="section-title">{title}</h2>
            
            <div 
                className="carousel-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* 3. Add Buttons Back */}
                {/* We removed the disabled logic because in an infinite loop, you can always go left or right */}
                <button className="nav-btn left" onClick={() => scroll("left")}>
                    <NavArrow direction="left" />
                </button>

                <div className="carousel" ref={scrollRef}>
                    {infiniteItems.map((item, index) => (
                        <GameCard 
                            item={item} 
                            onClick={onClick} 
                            key={`${item._id || item.name}-${index}`} 
                        />
                    ))}
                </div>

                <button className="nav-btn right" onClick={() => scroll("right")}>
                    <NavArrow direction="right" />
                </button>
            </div>
        </div>
    );
};