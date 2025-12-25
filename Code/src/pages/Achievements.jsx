import React, { useEffect } from 'react';
import Footer from '/src/components/Footer.jsx';
import '/src/page_styles/achievements.css';

const achievementsData = [
    {
        id: 1,
        year: "2024",
        title: "Inter-IIT Gold Medal",
        category: "Technical",
        description: "Secured the Gold Medal in the highly competitive Inter-IIT Technical Meet, showcasing excellence in game development."
    },
    {
        id: 2,
        year: "2024",
        title: "KRAV Champions",
        category: "Esports",
        description: "Dominated the arena to become the champions of the KRAV Inter-IIT Valorant Tournament."
    },
    {
        id: 3,
        year: "2025",
        title: "Sparkball Runner Up",
        category: "Esports",
        description: "Secured 2nd place in the Sparkball Beta Game India tournament, competing against top national teams."
    },
    {
        id: 4,
        year: "2023",
        title: "Inter-IIT Silver Medal",
        category: "Technical",
        description: "Awarded the Silver Medal in the Inter-IIT Technical Meet for innovative game design solutions."
    },
    {
        id: 5,
        year: "2023",
        title: "Valorush Champions",
        category: "Esports",
        description: "Victorious champions of the Valorush Inter-IIT Valorant tournament."
    },
    {
        id: 6,
        year: "2022",
        title: "Techevince Best Project",
        category: "Software",
        description: "Won 'Best Project under Software' at Techevince 2022 for the game 'Campus Rush'."
    },
    {
        id: 7,
        year: "Ongoing",
        title: "IGDC Partnership",
        category: "Community",
        description: "Official partners with IGDC for game jams and showcases. Awarded free tickets for outstanding contributions."
    }
];

const AchievementCard = ({ item, index }) => (
    <div className="achievement-card" style={{ animationDelay: `${index * 0.1}s` }}>
        <div className="card-border"></div>
        <div className="card-content">
            <div className="card-header">
                <span className="achievement-year">{item.year}</span>
                <span className={`achievement-category ${item.category.toLowerCase()}`}>{item.category}</span>
            </div>
            <h3 className="achievement-title">{item.title}</h3>
            <p className="achievement-desc">{item.description}</p>
        </div>
        <div className="card-corner"></div>
    </div>
);

export default function AchievementsPage() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            document.documentElement.style.setProperty('--mouse-x', `${clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${clientY}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="AchievementsPage">
            <div className="achievements-bg-glow"></div>
            <div className="achievements-bg-grid"></div>
            
            {/* --- NEW: Rising Gold Shards --- */}
            <div className="achievement-particles">
                <div className="gold-shard"></div>
                <div className="gold-shard"></div>
                <div className="gold-shard"></div>
                <div className="gold-shard"></div>
                <div className="gold-shard"></div>
                <div className="gold-shard"></div>
                <div className="gold-shard"></div>
                <div className="gold-shard"></div>
                <div className="gold-shard"></div>
                <div className="gold-shard"></div>
                <div className="gold-shard"></div>
                <div className="gold-shard"></div>
                <div className="gold-shard"></div>
                <div className="gold-shard"></div>
                <div className="gold-shard"></div>
                <div className="gold-shard"></div>
                <div className="gold-shard"></div>
                <div className="gold-shard"></div>
            </div>

            <main className="achievements-content">
                <div className="page-header">
                    <h1 className="glitch-text" data-text="Hall of Fame">Hall of Fame</h1>
                    <p className="header-subtitle">Legacy of GDes Excellence</p>
                </div>

                <div className="achievements-grid">
                    {achievementsData.map((item, index) => (
                        <AchievementCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </main>
            <div className='footer-spacer'/>
            <Footer />
        </div>
    );
}