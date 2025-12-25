import React, { useState, useEffect, useRef } from 'react';
import Footer from '/src/components/Footer.jsx';
import '/src/page_styles/About.css';

// --- HOOKS ---

// "Decoding" Text Effect
const useScrambleText = (text, duration = 2000) => {
    const [display, setDisplay] = useState('');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
    
    useEffect(() => {
        let frame = 0;
        const totalFrames = duration / 16;
        let requestId;

        const animate = () => {
            frame++;
            const progress = frame / totalFrames;
            let output = '';
            
            for (let i = 0; i < text.length; i++) {
                if (i < text.length * progress) {
                    output += text[i];
                } else {
                    output += chars[Math.floor(Math.random() * chars.length)];
                }
            }
            setDisplay(output);
            
            if (progress < 1) {
                requestId = requestAnimationFrame(animate);
            }
        };

        animate();
        return () => cancelAnimationFrame(requestId);
    }, [text, duration]);

    return display;
};

// --- SUB-COMPONENTS ---

const SectionHeader = ({ title, iconType }) => (
    <div className="section-header">
        <div className={`header-icon icon-${iconType}`}></div>
        <h2 data-text={title}>{title}</h2>
        <div className="header-line"></div>
    </div>
);

const MemberCard = ({ member, isFeatured = false }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 20;
        const y = (e.clientY - rect.top - rect.height / 2) / 20;
        cardRef.current.style.setProperty('--rx', `${-y}deg`);
        cardRef.current.style.setProperty('--ry', `${x}deg`);
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.setProperty('--rx', `0deg`);
        cardRef.current.style.setProperty('--ry', `0deg`);
    };

    return (
        <div 
            className={`member-card ${isFeatured ? 'featured' : ''}`} 
            ref={cardRef} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-content-3d">
                <div className="member-hex">
                    <svg viewBox="0 0 100 100" className="hex-svg">
                        <path d="M50 0 L95 25 L95 75 L50 100 L5 75 L5 25 Z" fill="none" strokeWidth="2" />
                    </svg>
                    <div className="hex-mask">
                         <img src={member.avatar} alt={member.name} className="avatar-img" />
                    </div>
                </div>
                <div className="member-details">
                    <h3>{member.name}</h3>
                    <span className="role-badge">{member.role}</span>
                    {/* NEW: Render Tagline if it exists */}
                    {member.tagline && <span className="member-tagline">"{member.tagline}"</span>}
                </div>
            </div>
            <div className="holo-base"></div>
        </div>
    );
};

// --- MAIN COMPONENT ---

export default function AboutPage() {
    const description = "GDES - the Game Development and Esports Club of IIT Guwahati, is a community of passionate gamers, developers, and designers. We aim to foster a culture of creativity and innovation in the gaming world. We organize workshops, game jams, and tournaments to help our members learn and grow their skills. Join us to create, play, and compete!";
    const scrambledDesc = useScrambleText(description);
    
    const Founders = [
        { name: ' Utsav Bhardwaj', tagline: 'the meta is whatever you make it', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1766644337/WhatsApp_Image_2025-12-18_at_5.53.25_PM_muy4uz.jpg' },
        { name: 'Kaushtubh Kanishk', tagline: 'glhf', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1766644336/WhatsApp_Image_2025-12-18_at_3.46.53_PM_lg2dfy.jpg' },
    ]
    // Data
    const leadership = [
        { name: 'Chakshu Jindal', role: 'Secretary', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334644/IMG_20251001_071620_-_Chakshu_jindal_f3nuvs.jpg' },
        { name: 'Farhan Sheikh', role: 'Research Lead', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334657/Pfp_-_Farhan_niasqq.png' },
        { name: 'Armaan', role: 'eSports Head', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334647/Armaan_oqq95c.jpg' },
        { name: 'ADARSH UD', role: 'Design Head', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334640/ADARSH_UD_qi7kxs.jpg' },
        { name: 'Anish Mishra', role: 'eSports Head', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1765973391/WhatsApp_Image_2025-11-30_at_18.38.36_835ff85a_-_ANISH_MISHRA_vutghd.jpg' },
        { name: 'Samarth Gupta', role: 'Web Lead', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759335976/ProfilePhotoJuly25_xgosgl.jpg' },
    ];
    
    const clubMembers = [   
        { name: 'Rishi Gupta', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334654/IMG_20250930_115243_-_Rishi_Gupta_c5znk1.jpg' },
        { name: 'Kripa Ramachandran', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334638/IMG_20250930_112742_-_Kripa_Ramachandran_nnsiid.jpg' },
        { name: 'Annu Kumari', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1765973392/me2_-_Annu_Kumari_cb3nuo.jpg' },
        { name: 'Akanksha', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1765973393/DocScanner_Dec_29_2022_3-58_PM_-_Akanksha_ofudyt.jpg' },
        { name: 'Shaashwata Paul', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334656/17592118118553146216642144363349_-_Shaashwata_Paul_zlz0fg.jpg' },
        { name: 'Aditya Vishwakarma', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334654/IMG20250922112319_-_Aditya_Vishwakarma_dgevww.jpg' },
        { name: 'Charvit Rajani', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334657/IMG_20250930_131155_-_Magestic_Plan_thyrvb.jpg' },
        { name: 'Harshvardhan Patil', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334649/Harshvardhan_Patil_nbpwnf.png' },
        { name: 'Shreyash Anand', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334639/IMG-20250930-WA0016_-_Shreyash_Anand_lkggbx.jpg' },
        { name: 'Gurchet Singh Thind', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334637/IMG_20250719_195249_498_-_gurchet_thind_iylh0x.jpg' },
        { name: 'Dheeraj vankudothu', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334640/IMG-20250930-WA0121_2_-_VANKUDOTHU_DHEERAJ_v3hemy.jpg' },
        { name: 'Dhiraj Adhikary', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334645/IMG_20250930_235400_-_Dhiraj_Adhikary_aa9doh.jpg' },
        { name: 'Raman Agrawal', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334643/Raman_agrawal_p9h0rn.jpg' },
        { name: 'Sidharth Saipreeth', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334647/IMG_8482_-_Sidharth_Saipreeth_ubynyo.jpg' },
        { name: 'Chinmay Arora', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334650/f32dda1e-362f-4320-bfab-9126072f0618_-_Chinmay_Arora_wi7zw9.jpg' },
        { name: 'Mayur Ghadge', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334651/IMG_20251001_141435_-_Mayur_18_snqoca.jpg' },
        { name: 'Hari Prasad A', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334644/IMG_0711_-_hari_prasad_fp93q7.jpg' },
        { name: 'Shourya Chaudhari', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334641/20251001_172641_-_Shourya_Chaudhari_fqt5he.jpg' },
    ];

    const credits = [
        { name: 'Samarth Gupta', role: 'Lead Developer' }, 
        { name: 'Annu Kumari', role: 'Frontend' },
        { name: 'Aditya Prabhakar', role: 'Frontend' },
        { name: 'Rishi Gupta', role: 'Frontend' },
        { name: 'Raman Agrawal', role: 'Frontend' },
        { name: 'Kripa', role: 'Design' },
        { name: 'Arushi Deshpande', role: 'Design' },
        { name: 'Rupiga', role: 'Design' },
    ];

    const infiniteMembers = [...clubMembers, ...clubMembers];

    // 2. Refs for controlling animation
    const scrollRef = useRef(null);
    const animationRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    // 3. Auto-Scroll Effect
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scrollSpeed = 0.5; // Adjust speed (higher = faster)

        const animate = () => {
            if (!isPaused && scrollContainer) {
                scrollContainer.scrollLeft += scrollSpeed;

                // Seamless Reset Logic:
                // If we have scrolled past the first half (the original list), reset to 0
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        // Start animation
        animationRef.current = requestAnimationFrame(animate);

        // Cleanup
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [isPaused]); // Re-run effect if pause state changes

    // Manual Scroll Buttons (Optional: keep if you want users to skip ahead)
    const scroll = (dir) => {
        if(scrollRef.current) {
            const amount = 300;
            scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
        }
    };
    // Scroll logic for member carousel
    

    // Mouse Glow Effect
    useEffect(() => {
        const moveLight = (e) => {
            document.documentElement.style.setProperty('--x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--y', `${e.clientY}px`);
        };
        window.addEventListener('mousemove', moveLight);
        return () => window.removeEventListener('mousemove', moveLight);
    }, []);

    return (
        <div className="AboutPage">
            <div className="cyber-grid-bg"></div>
            <div className="mouse-spotlight"></div>

            <main className="about-container">
                
                {/* 1. DESCRIPTION PANEL */}
                <section className="cyber-panel about-desc">
                    <SectionHeader title="SYSTEM OVERVIEW" iconType="info" />
                    <div className="terminal-text">
                        <span className="prompt">{'>'}</span> {scrambledDesc}
                        <span className="cursor">_</span>
                    </div>
                </section>
                <section className="cyber-panel founders-section">
                    <SectionHeader title="INITIATORS" iconType="star" /> {/* "Star" icon implies legacy */}
                    <div className="founders-grid">
                        {Founders.map((f, i) => (
                            <MemberCard 
                                key={i} 
                                member={{ ...f, role: 'Founder' }} // Manually assign role 'Founder'
                                isFeatured={true} 
                            />
                        ))}
                    </div>
                </section>

                {/* 2. MEMBERS PANEL */}
                <section className="cyber-panel members-section">
                    <SectionHeader title="OPERATIVES" iconType="users" />
                    
                    {/* Leadership Grid */}
                    <div className="leadership-grid">
                        {leadership.map((m, i) => <MemberCard key={i} member={m} isFeatured={true} />)}
                    </div>

                    {/* Carousel for Members */}
                    <div 
    className="members-carousel" 
    onMouseEnter={() => setIsPaused(true)} 
    onMouseLeave={() => setIsPaused(false)}
>
    <button className="nav-arrow left" onClick={() => scroll('left')}>‹</button>
    
    <div className="carousel-track" ref={scrollRef}>
        {/* Render the duplicated list */}
        {infiniteMembers.map((m, i) => (
            // Use index in key to ensure unique keys for the duplicate items
            <MemberCard key={`${m.name}-${i}`} member={m} />
        ))}
    </div>
    
    <button className="nav-arrow right" onClick={() => scroll('right')}>›</button>
</div>
                </section>

                {/* 3. CREDITS & SOCIALS (SPLIT) */}
                <div className="split-row">
                    <section className="cyber-panel credits-panel">
                        <SectionHeader title="CREDITS" iconType="code" />
                        <div className="credits-list">
                            {credits.map((c, i) => (
                                <div key={i} className="credit-row">
                                    <span className="c-name">{c.name}</span>
                                    <div className="c-dots"></div>
                                    <span className="c-role">{c.role}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="cyber-panel socials-panel">
                        <SectionHeader title="UPLINK" iconType="link" />
                        <div className="social-buttons">
                            <a href="https://www.instagram.com/gdes_gamedeviitg/" target="_blank" className="social-btn insta">
                                <span>INSTAGRAM</span>
                                <div className="btn-glitch"></div>
                            </a>
                            <a href="https://discord.com/invite/MgScKhwQfq" target="_blank" className="social-btn discord">
                                <span>DISCORD</span>
                                <div className="btn-glitch"></div>
                            </a>
                            <a href="https://www.youtube.com/@gamedevandesportsclubiitgu6499" target="_blank" className="social-btn yt">
                                <span>YOUTUBE</span>
                                <div className="btn-glitch"></div>
                            </a>
                        </div>
                    </section>
                </div>
                <div className='footer-spacer'/>
            </main>
            <Footer />
        </div>
    );
}