import React, { useRef, useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../components/MediaSection.css";
import '../page_styles/AllGames.css';

const mediaSections = [
  {
    title: "Recently Played",
    items: new Array(10).fill({ stars: 15809, likes: 15809, plays: 15809 })
  },
  {
    title: "Trending Now",
    items: new Array(12).fill({ stars: 15809, likes: 15809, plays: 15809 })
  },
  {
    title: "Featured",
    items: new Array(8).fill({ stars: 15809, likes: 15809, plays: 15809 })
  },
  {
    title: "Latest Releases",
    items: new Array(9).fill({ stars: 15809, likes: 15809, plays: 15809 })
  }
];

const MediaSection = ({ title, items }) => {
  const scrollRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const checkScrollPosition = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setAtStart(scrollLeft === 0);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  useEffect(() => {
    checkScrollPosition();
    scrollRef.current?.addEventListener("scroll", checkScrollPosition);
    return () => scrollRef.current?.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -offset : offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="media-section">
      <h2 className="section-title">{title}</h2>
      <div className="carousel-wrapper">
        <button
          className="nav-btn left"
          onClick={() => scroll("left")}
          disabled={atStart}
          aria-label="Scroll Left"
        >
          {atStart ? (
            <svg width="41" height="32" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.2">
                <path d="M16.8569 30.6985L2.00769 15.8492L16.8569 1" stroke="#FF73A4" strokeWidth="2" />
                <path d="M25.8567 30.6985L11.0074 15.8492L25.8567 1" stroke="#FF73A4" strokeWidth="2" />
              </g>
            </svg>
          ) : (
            <svg width="41" height="32" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.8564 30.6985L2.0072 15.8492L16.8564 1" stroke="#FF73A4" strokeWidth="2" />
              <path d="M25.8564 30.6985L11.0072 15.8492L25.8564 1" stroke="#FF73A4" strokeWidth="2" />
            </svg>
          )}
        </button>

        <div className="carousel" ref={scrollRef}>
          {items.map((item, index) => (
            <div
              className={`card${hoveredIndex === index ? " active" : ""}`}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="thumbnail" />
              <div className="stats">
                <span><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="stats-icon">
                  <path d="M8.5 12.241L3.21546 16L5.29852 9.8864L0 6.1136H6.48684L8.5 0L10.5132 6.1136H17L11.7015 9.8864L13.7845 16L8.5 12.241Z" fill="#FF73A4" />
                </svg>
                  {item.stars}</span>
                <span><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="stats-icon">
                  <path d="M0 12V0L10 6L0 12Z" fill="#FF73A4" />
                </svg>
                  {item.plays}</span>
                <span><svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="stats-icon">
                  <path d="M7.50078 12L1.13744 6.13549C0.629854 5.6677 0.291466 5.12384 0.122272 4.50392C-0.0427952 3.884 -0.0407319 3.26789 0.128462 2.65557C0.297656 2.03946 0.633981 1.50321 1.13744 1.04683C1.65327 0.579035 2.24132 0.269075 2.90159 0.116948C3.56599 -0.0389827 4.22832 -0.0389827 4.88859 0.116948C5.55299 0.272878 6.1431 0.582838 6.65894 1.04683L7.50078 1.79986L8.34263 1.04683C8.86259 0.582838 9.45271 0.272878 10.113 0.116948C10.7732 -0.0389827 11.4335 -0.0389827 12.0938 0.116948C12.7582 0.269075 13.3483 0.579035 13.8641 1.04683C14.3676 1.50321 14.7039 2.03946 14.8731 2.65557C15.0423 3.26789 15.0423 3.884 14.8731 4.50392C14.708 5.12384 14.3717 5.6677 13.8641 6.13549L7.50078 12Z" fill="#FF73A4" />
                </svg>
                  {item.likes}</span>
              </div>
            </div>
          ))}
        </div>

        <button
          className="nav-btn right"
          onClick={() => scroll("right")}
          disabled={atEnd}
          aria-label="Scroll Right"
        >
          {atEnd ? (
            <svg width="41" height="32" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.2">
                <path d="M23.8506 30.6985L38.6998 15.8492L23.8506 1" stroke="#FF73A4" strokeWidth="2" />
                <path d="M14.8506 30.6985L29.6998 15.8492L14.8506 1" stroke="#FF73A4" strokeWidth="2" />
              </g>
            </svg>
          ) : (
            <svg width="41" height="32" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.8506 30.6985L38.6998 15.8492L23.8506 1" stroke="#FF73A4" strokeWidth="2" />
              <path d="M14.8506 30.6985L29.6998 15.8492L14.8506 1" stroke="#FF73A4" strokeWidth="2" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

function GamesPage() {
  const username = "Rishi Gupta";
  const padding = 40;
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
            viewBox={`0 0 ${approxTextWidth + padding} 36`}
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
              fontFamily="'Orbitron', sans-serif"
              fontSize="14"
              fontWeight="bold"
            >
              Logged in as : {username}
            </text>
          </svg>
        </div>
      </div>
      <div>{mediaSections.map((section, index) => (
        <MediaSection key={index} title={section.title} items={section.items} />
      ))}
      </div>
      <Footer />
    </div>
  );
};

const PlayGames = ({ title }) => (
  <div className="play-games">
    <h2>{title}</h2>
  </div>
);


export default GamesPage;
