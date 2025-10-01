import React, { useRef } from 'react';
import SectionHeader from './SectionHeader';
import './AboutComponents.css';

// --- Data Structure with Hierarchy ---
const leadership = [
    { name: 'ShadowSlayer', role: 'Secretary', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'CrimsonWolf', role: 'Coordinator', avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'PixelPunk', role: 'Coordinator', avatar: 'https://i.pravatar.cc/150?img=3' },
];

const clubMembers = [
    // Array of 27 members for the carousel
    { name: 'CyberNinja', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=4' },
    { name: 'ArcadeKing', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=5' },
    { name: 'BlitzByte', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=6' },
    { name: 'VenomViper', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=7' },
    { name: 'NeonGhost', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=8' },
    { name: 'RogueStorm', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=9' },
    { name: 'CodeWizard', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=10' },
    { name: 'QuantumDuck', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=11' },
    { name: 'DarkKnight', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=12' },
    { name: 'LaserFalcon', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=13' },
    { name: 'FrostHex', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=14' },
    { name: 'IronPhantom', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=15' },
    { name: 'SolarFlare', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=16' },
    { name: 'VoidWalker', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=17' },
    { name: 'GravityGun', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=18' },
    { name: 'Hexaflux', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=19' },
    { name: 'CircuitBreak', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=20' },
    { name: 'DataDaemon', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=21' },
    { name: 'EchoSphere', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=22' },
    { name: 'PulseRider', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=23' },
    { name: 'SynthWave', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=24' },
    { name: 'GridRunner', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=25' },
    { name: 'BinaryBard', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=26' },
    { name: 'ChronoShift', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=27' },
    { name: 'GlitchMaster', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=28' },
    { name: 'NetSorcerer', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=29' },
    { name: 'TechnoTroll', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=30' },
];

const NavArrow = ({ direction }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={direction === 'left' ? "M15 18L9 12L15 6" : "M9 18L15 12L9 6"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


const MembersSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
        const offset = scrollRef.current.clientWidth * 0.7;
        scrollRef.current.scrollBy({ left: direction === "left" ? -offset : offset, behavior: "smooth" });
    }
  };

  return (
    <section className="members-section">
      <SectionHeader title="Our Members" iconType="flipped-L" />
      
      {/* --- Leadership Section --- */}
      <div className="leadership-container">
        {leadership.map((member, index) => (
          <div className="member-card featured" key={index}>
            <div className="member-box">
              <svg viewBox="0 0 100 100" className="border"><polygon points="50,0 100,25 100,75 50,100 0,75 0,25" /></svg>
              <img src={member.avatar} alt={member.name} className="avatar" />
            </div>
            <div className="member-info">
              <p>{member.name}</p>
              <span>{member.role}</span>
            </div>
          </div>
        ))}
      </div>

      {/* --- Members Carousel Section --- */}
      <div className="members-carousel-wrapper">
        <button className="carousel-nav-btn left" onClick={() => scroll('left')}>
            <NavArrow direction="left" />
        </button>
        <div className="member-cards-container" ref={scrollRef}>
          {clubMembers.map((member, index) => (
            <div className="member-card" key={index}>
              <div className="member-box">
                <svg viewBox="0 0 100 100" className="border"><polygon points="50,0 100,25 100,75 50,100 0,75 0,25" /></svg>
                <img src={member.avatar} alt={member.name} className="avatar" />
              </div>
              <div className="member-info">
                <p>{member.name}</p>
                <span>{member.role}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-nav-btn right" onClick={() => scroll('right')}>
            <NavArrow direction="right" />
        </button>
      </div>

    </section>
  );
};

export default MembersSection;

