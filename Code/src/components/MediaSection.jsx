import { useRef, useState, useEffect } from "react";
import "../components/MediaSection.css";

// --- Reusable Icon Components ---

const NavArrow = ({ direction }) => (
    <svg width="26" height="26" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {direction === 'left' ? (
            <>
                <path d="M16.8569 30.6985L2.00769 15.8492L16.8569 1" stroke="#FF73A4" strokeWidth="3" />
                <path d="M25.8567 30.6985L11.0074 15.8492L25.8567 1" stroke="#FF73A4" strokeWidth="3" />
            </>
        ) : (
            <>
                <path d="M23.8506 30.6985L38.6998 15.8492L23.8506 1" stroke="#FF73A4" strokeWidth="3" />
                <path d="M14.8506 30.6985L29.6998 15.8492L14.8506 1" stroke="#FF73A4" strokeWidth="3" />
            </>
        )}
    </svg>
);

const StatsIcon = ({ type }) => {
    const icons = {
        stars: <path d="M8.5 12.241L3.21546 16L5.29852 9.8864L0 6.1136H6.48684L8.5 0L10.5132 6.1136H17L11.7015 9.8864L13.7845 16L8.5 12.241Z" fill="#FF73A4" />,
        plays: <path d="M0 12V0L10 6L0 12Z" fill="#FF73A4" />,
        likes: <path d="M7.5 12L1.137 6.135C-0.041 4.965 -0.041 3.035 1.137 1.865C2.315 0.695 4.245 0.695 5.423 1.865L7.5 3.943L9.577 1.865C10.755 0.695 12.685 0.695 13.863 1.865C15.041 3.035 15.041 4.965 13.863 6.135L7.5 12Z" fill="#FF73A4" />
    };
    const viewBoxes = { stars: "0 0 17 16", plays: "0 0 10 12", likes: "0 0 15 12" };
    return (
        <svg width="14" height="14" viewBox={viewBoxes[type]} fill="none" xmlns="http://www.w3.org/2000/svg" className="stats-icon">
            {icons[type]}
        </svg>
    );
};


// --- Main Component ---

export const mediaSections = [
    { title: "Recently Played", items: new Array(10).fill({ stars: "15.8k", likes: "9.2k", plays: "30.1k" }) },
    { title: "Trending Now", items: new Array(12).fill({ stars: "22.5k", likes: "18.3k", plays: "55.9k" }) },
    { title: "Featured", items: new Array(8).fill({ stars: "101.k", likes: "88.7k", plays: "205.4k" }) },
    { title: "Latest Releases", items: new Array(9).fill({ stars: "5.1k", likes: "3.2k", plays: "8.8k" }) }
];

export const MediaSection = ({ title, items }) => {
    const scrollRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const checkScrollPosition = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setAtStart(scrollLeft < 10); // A small buffer
        setAtEnd(scrollLeft + clientWidth >= scrollWidth - 10); // A small buffer
    };

    useEffect(() => {
        const currentRef = scrollRef.current;
        currentRef?.addEventListener("scroll", checkScrollPosition, { passive: true });
        checkScrollPosition(); // Initial check
        return () => currentRef?.removeEventListener("scroll", checkScrollPosition);
    }, [items]);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const offset = scrollRef.current.clientWidth * 0.7; // Scroll 70% of the visible width
            scrollRef.current.scrollBy({ left: direction === "left" ? -offset : offset, behavior: "smooth" });
        }
    };

    return (
        <div className="media-section">
            <h2 className="section-title">{title}</h2>
            <div className="carousel-wrapper">
                <button className="nav-btn left" onClick={() => scroll("left")} disabled={atStart} aria-label="Scroll Left">
                    <NavArrow direction="left" />
                </button>

                <div className="carousel" ref={scrollRef}>
                    {items.map((item, index) => (
                        <div className="card" key={index}>
                            <div className="thumbnail" />
                            <div className="card-info">
                                <p className="card-title">Game Title Here</p>
                                <div className="stats">
                                    <span><StatsIcon type="stars" /> {item.stars}</span>
                                    <span><StatsIcon type="plays" /> {item.plays}</span>
                                    <span><StatsIcon type="likes" /> {item.likes}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="nav-btn right" onClick={() => scroll("right")} disabled={atEnd} aria-label="Scroll Right">
                    <NavArrow direction="right" />
                </button>
            </div>
        </div>
    );
};