import React, { useRef } from 'react';
import Footer from '/src/components/Footer.jsx';
import '/src/page_styles/About.css'; // All styles are now in this single file

// --- Sub-Components (Now inside the main file) ---

const DotIcon = ({ type }) => {
    // ... (SVG logic for icons remains the same)
    switch (type) {
    case 'L':
      return ( <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="8.25003" cy="8.25003" r="7.75003" stroke="#79FFB6" /> <circle cx="8.25003" cy="24.75" r="7.75003" stroke="#79FFB6" /> <circle cx="24.75" cy="24.75" r="7.75003" stroke="#79FFB6" /> </svg> );
    case 'flipped-L':
      return ( <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="24.75" cy="24.75" r="7.75003" transform="rotate(180 24.75 24.75)" stroke="#79FFB6" /> <circle cx="24.75" cy="8.24997" r="7.75003" transform="rotate(180 24.75 8.24997)" stroke="#79FFB6" /> <circle cx="8.24997" cy="8.24997" r="7.75003" transform="rotate(180 8.24997 8.24997)" stroke="#79FFB6" /> </svg> );
    case 'diagonal':
      return ( <svg width="33" height="50" viewBox="0 0 33 50" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="24.75" cy="24.75" r="7.75003" transform="rotate(180 24.75 24.75)" stroke="#79FFB6" /> <circle cx="24.75" cy="8.24997" r="7.75003" transform="rotate(180 24.75 8.24997)" stroke="#79FFB6" /> <circle cx="8.25009" cy="8.24997" r="7.75003" transform="rotate(180 8.25009 8.24997)" stroke="#79FFB6" /> <circle cx="8.24997" cy="25.25" r="7.75003" transform="rotate(180 8.24997 25.25)" stroke="#79FFB6" /> <circle cx="8.25009" cy="41.25" r="7.75003" transform="rotate(180 8.25009 41.25)" stroke="#79FFB6" /> </svg> );
    case 'triangle':
      return ( <svg width="33" height="50" viewBox="0 0 33 50" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="24.7501" cy="24.75" r="7.75003" transform="rotate(180 24.7501 24.75)" stroke="#79FFB6" /> <circle cx="8.25021" cy="8.24997" r="7.75003" transform="rotate(180 8.25021 8.24997)" stroke="#79FFB6" /> <circle cx="8.25009" cy="25.25" r="7.75003" transform="rotate(180 8.25009 25.25)" stroke="#79FFB6" /> <circle cx="24.2502" cy="41.25" r="7.75003" transform="rotate(180 24.2502 41.25)" stroke="#79FFB6" /> </svg> );
    default:
      return null;
  }
};

const SectionHeader = ({ title, iconType }) => (
  <div className="section-header">
    <DotIcon type={iconType} />
    <h2>{title}</h2>
  </div>
);

const AboutSection = () => (
  <section className="about-section glass-panel">
    <SectionHeader title="About GDES" iconType="L" />
    <p>
      GDES - the Game Development and Esports Club of IIT Guwahati, is a community of passionate gamers, developers, and designers. We aim to foster a culture of creativity and innovation in the gaming world. We organize workshops, game jams, and tournaments to help our members learn and grow their skills. Join us to create, play, and compete!
    </p>
  </section>
);

const leadership = [
    { name: 'Chakshu Jindal', role: 'Secretary', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334644/IMG_20251001_071620_-_Chakshu_jindal_f3nuvs.jpg' },
    { name: 'Farhan Naisqq', role: 'Research & Projects Head', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334657/Pfp_-_Farhan_niasqq.png' },
    { name: 'Armaan', role: 'eSports Head', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334647/Armaan_oqq95c.jpg' },
    { name: 'ADARSH UD', role: 'eSports Design Head ', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334640/ADARSH_UD_qi7kxs.jpg' }
];
const clubMembers = [
  { name: 'Samarth Gupta', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759335976/ProfilePhotoJuly25_xgosgl.jpg' },
  { name: 'Rishi Gupta', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334654/IMG_20250930_115243_-_Rishi_Gupta_c5znk1.jpg' },
  { name: 'Kripa Ramachandran', role: 'Member', avatar: 'https://res.cloudinary.com/dvbzgoz9m/image/upload/v1759334638/IMG_20250930_112742_-_Kripa_Ramachandran_nnsiid.jpg' },
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
]

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
        <section className="members-section glass-panel">
          <SectionHeader title="Our Members" iconType="flipped-L" />
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
          <div className="members-carousel-wrapper">
            <button className="carousel-nav-btn left" onClick={() => scroll('left')}><NavArrow direction="left" /></button>
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
            <button className="carousel-nav-btn right" onClick={() => scroll('right')}><NavArrow direction="right" /></button>
          </div>
        </section>
      );
};

//const credits = new Array(28).fill({ name: 'Name', role: 'Role' });
const credits = [
    { name: 'Samarth Gupta', role: 'Project Lead/FullStack Developer' }, 
    { name: 'Annu Kumari', role: 'Frontend Developer' },
    { name: 'Aditya Prabhakar', role: 'Frontend Developer' },
    { name: 'Rishi Gupta', role: 'Frontend Developer' },
    { name: 'Raman Agrawal', role: 'Frontend Developer' },
    { name: 'Kripa', role: 'UI/UX Designer' },
    { name: 'Arushi Deshpande', role: 'UI/UX Designer' },
    { name: 'Rupiga', role: 'UI/UX Designer' },
];
const CreditsSection = () => (
  <section className="credits-section glass-panel">
    <SectionHeader title="Website Credits" iconType="diagonal" />
    <div className="credits-grid">
      {credits.map((credit, index) => (
        <div className="credit-item" key={index}>
          {credit.name} : {credit.role}
        </div>
      ))}
    </div>
  </section>
);

const socialLinksData = [
    { href: "https://www.instagram.com/gdes_gamedeviitg/", text: "gdes_gamedeviitg", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className='social-icon'><path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" fill="#A8A2FF" /></svg> },
    { href: "https://discord.gg/MgScKhwQfq", text: "Discord", icon: <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='social-icon'><path d="M17.7682 1.33C16.4382 0.71 14.9982 0.26 13.4982 0C13.4718 0.000375705 13.4466 0.0111588 13.4282 0.0300002C13.2482 0.36 13.0382 0.79 12.8982 1.12C11.3072 0.880151 9.68918 0.880151 8.09816 1.12C7.95816 0.78 7.74816 0.36 7.55816 0.0300002C7.54816 0.0100002 7.51816 0 7.48816 0C5.98816 0.26 4.55816 0.71 3.21816 1.33C3.20816 1.33 3.19816 1.34 3.18816 1.35C0.468164 5.42 -0.281836 9.38 0.0881641 13.3C0.0881641 13.32 0.0981641 13.34 0.118164 13.35C1.91816 14.67 3.64816 15.47 5.35816 16C5.38816 16.01 5.41816 16 5.42816 15.98C5.82816 15.43 6.18816 14.85 6.49816 14.24C6.51816 14.2 6.49816 14.16 6.45816 14.15C5.88816 13.93 5.34816 13.67 4.81816 13.37C4.77816 13.35 4.77816 13.29 4.80816 13.26C4.91816 13.18 5.02816 13.09 5.13816 13.01C5.15816 12.99 5.18816 12.99 5.20816 13C8.64816 14.57 12.3582 14.57 15.7582 13C15.7782 12.99 15.8082 12.99 15.8282 13.01C15.9382 13.1 16.0482 13.18 16.1582 13.27C16.1982 13.3 16.1982 13.36 16.1482 13.38C15.6282 13.69 15.0782 13.94 14.5082 14.16C14.4682 14.17 14.4582 14.22 14.4682 14.25C14.7882 14.86 15.1482 15.44 15.5382 15.99C15.5682 16 15.5982 16.01 15.6282 16C17.3482 15.47 19.0782 14.67 20.8782 13.35C20.8982 13.34 20.9082 13.32 20.9082 13.3C21.3482 8.77 20.1782 4.84 17.8082 1.35C17.7982 1.34 17.7882 1.33 17.7682 1.33ZM7.01816 10.91C5.98816 10.91 5.12816 9.96 5.12816 8.79C5.12816 7.62 5.96816 6.67 7.01816 6.67C8.07817 6.67 8.91816 7.63 8.90816 8.79C8.90816 9.96 8.06816 10.91 7.01816 10.91ZM13.9882 10.91C12.9582 10.91 12.0982 9.96 12.0982 8.79C12.0982 7.62 12.9382 6.67 13.9882 6.67C15.0482 6.67 15.8882 7.63 15.8782 8.79C15.8782 9.96 15.0482 10.91 13.9882 10.91Z" fill="#A8A2FF" /></svg> },
    { href: "https://www.youtube.com/@gamedevandesportsclubiitgu6499", text: "YouTube", icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='social-icon'><path d="M10.8333 16.2498L16.4558 12.9998L10.8333 9.74984V16.2498ZM23.3566 7.76734C23.4975 8.2765 23.595 8.959 23.66 9.82567C23.7358 10.6923 23.7683 11.4398 23.7683 12.0898L23.8333 12.9998C23.8333 15.3723 23.66 17.1165 23.3566 18.2323C23.0858 19.2073 22.4575 19.8357 21.4825 20.1065C20.9733 20.2473 20.0416 20.3448 18.6116 20.4098C17.2033 20.4857 15.9141 20.5182 14.7225 20.5182L13 20.5832C8.46079 20.5832 5.63329 20.4098 4.51746 20.1065C3.54246 19.8357 2.91413 19.2073 2.64329 18.2323C2.50246 17.7232 2.40496 17.0407 2.33996 16.174C2.26413 15.3073 2.23163 14.5598 2.23163 13.9098L2.16663 12.9998C2.16663 10.6273 2.33996 8.88317 2.64329 7.76734C2.91413 6.79234 3.54246 6.164 4.51746 5.89317C5.02663 5.75234 5.95829 5.65484 7.38829 5.58984C8.79663 5.514 10.0858 5.4815 11.2775 5.4815L13 5.4165C17.5391 5.4165 20.3666 5.58984 21.4825 5.89317C22.4575 6.164 23.0858 6.79234 23.3566 7.76734Z" fill="#A8A2FF" /></svg> },
];

const SocialLinks = () => (
  <section className="socials-section glass-panel">
    <SectionHeader title="Socials" iconType="triangle" />
    <ul>
      {socialLinksData.map(link => (
        <li key={link.text}><a href={link.href} target="_blank" rel="noopener noreferrer">{link.icon} {link.text}</a></li>
      ))}
    </ul>
  </section>
);

// --- Main Page Component ---

export default function AboutPage() {
    return (
        <div className="AboutPage">
            <div className="about-bg-grid"></div>
            <div className="about-bg-vignette"></div>
            <main className="about-content">
                <div className="about-grid">
                    <div className="grid-item about-main">
                        <AboutSection />
                        <MembersSection />
                    </div>
                    <div className="grid-item about-sidebar">
                        <CreditsSection />
                        <SocialLinks />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

