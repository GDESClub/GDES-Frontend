import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/test.png';
import { useState } from "react";


function Navbar({ onLoginClick, onSignupClick }) {
    const location = useLocation();
    const currentPath = location.pathname;

    // State for logged-in and menu
     const [isLoggedIn, setIsLoggedIn] = useState(false);  
     const [showMenu, setShowMenu] = useState(false);     



    const navLinks = [
        {
            name: 'Home',
            path: '/',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.98779 4.2353C4.37314 3.85061 4.94379 3.63219 5.7073 3.61711C6.4743 3.60199 7.40394 3.79392 8.44139 4.19666C10.5149 5.00166 12.9295 6.61289 15.1729 8.85239C17.4162 11.0919 19.0302 13.5025 19.8366 15.5724C20.2401 16.6082 20.433 17.5368 20.4179 18.3025C20.4028 19.0647 20.184 19.6345 19.7986 20.0191C19.4133 20.4038 18.8426 20.6223 18.0791 20.6373C17.3121 20.6524 16.3826 20.4592 15.345 20.0564C13.2715 19.2513 10.8562 17.6409 8.61279 15.4013C6.36946 13.1618 4.75615 10.7506 3.94978 8.6806C3.54641 7.64503 3.35341 6.7175 3.36854 5.95187C3.38361 5.18964 3.60248 4.62002 3.98779 4.2353Z"  />
                    <path d="M20.0122 3.98139C19.6269 3.5967 19.0562 3.37829 18.2927 3.3632C17.5257 3.34808 16.5961 3.54001 15.5586 3.94275C13.4851 4.74775 11.0705 6.35899 8.82706 8.59849C6.58375 10.838 4.96983 13.2486 4.16335 15.3185C3.75987 16.3543 3.56697 17.2829 3.58212 18.0486C3.59725 18.8108 3.81603 19.3805 4.20136 19.7652C4.58673 20.1499 5.15738 20.3683 5.92088 20.3834C6.68793 20.3985 7.61744 20.2053 8.65497 19.8025C10.7285 18.9974 13.1438 17.387 15.3872 15.1474C17.6305 12.9079 19.2438 10.4967 20.0502 8.42669C20.4536 7.39113 20.6466 6.46359 20.6315 5.69797C20.6164 4.93574 20.3975 4.36611 20.0122 3.98139Z"  />
                </svg>


            ),
        },
        {
            name: 'Games',
            path: '/games',
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6.5" y="0.5" width="5" height="5"  />
                    <rect x="12.5" y="6.5" width="5" height="5"  />
                    <rect x="6.5" y="12.5" width="5" height="5"  />
                    <rect x="0.5" y="6.5" width="5" height="5" />
                </svg>

            ),
        },
        {
            name: 'Leaderboard',
            path: '/leaderboard',
            icon: (
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13.4982" cy="13.5007" r="6.00668" transform="rotate(-45 13.4982 13.5007)"  />
                    <line x1="18.0154" y1="8.81332" x2="20.1318" y2="6.6969" />
                    <line x1="18.4532" y1="17.7473" x2="20.5696" y2="19.8637" />
                    <line x1="6.69625" y1="20.1325" x2="8.81267" y2="18.0161" />
                    <line x1="7.13499" y1="6.42902" x2="9.25141" y2="8.54544"  />
                </svg>

            ),
        },
        {
            name: 'About Us',
            path: '/about',
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4.00002" cy="4.00002" r="3.50002" />
                    <circle cx="4.00002" cy="12" r="3.50002" />
                    <circle cx="12" cy="12" r="3.50002" />
                </svg>

            ),
        },
    ];


    const currentIndex = navLinks.findIndex(link => link.path === currentPath);

    const getLinkClass = (index) => {
        if (index === currentIndex) return "nav-link active";
        if (index < currentIndex) return "nav-link left-of-active";
        return "nav-link right-of-active";
    };

    const getPageTheme = () => {
        switch (currentPath) {
            case '/games': return 'navbar-theme-games';
            case '/leaderboard': return 'navbar-theme-leaderboard';
            case '/about': return 'navbar-theme-about';
            default: return 'navbar-theme-home';
        }
    };

    // Each route: a list of 4 backgrounds (Home, Games, Leaderboard, About Us)
    const NAV_BG_VECTORS = {
        "/": [
            {
                svg: <svg width="1440" height="40" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M-565 39.0001H168.57H200L231 0.999847L457.14 1.00009L488 39.0001H1930" stroke="#79FFB6" />
                </svg>
                , minWidth: 140
            },
            {
                svg: <svg width="252" height="32" viewBox="0 0 252 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.00009H226L251 31.5001" stroke="#A8A2FF" />
                </svg>
                , minWidth: 120
            },
            {
                svg: <svg width="252" height="32" viewBox="0 0 252 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.00009H226L251 31.5001" stroke="#A8A2FF" />
                </svg>
                , minWidth: 120
            },
            {
                svg: <svg width="252" height="32" viewBox="0 0 252 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.00009H226L251 31.5001" stroke="#A8A2FF" />
                </svg>
                , minWidth: 120
            }
        ],
        "/games": [
            {
                svg: <svg width="231" height="32" viewBox="0 0 231 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M230.5 1H26L1 31.5" stroke="#FF73A4" />
                </svg>

                , minWidth: 120
            },
            {
                svg: <svg width="1440" height="40" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-222.501 39.0001H401.57H433L464 0.999878L690.14 1.00012L721 39.0001H2606" stroke="#79FFB6" />
                </svg>
                , minWidth: 140
            },
            {
                svg: <svg width="272" height="32" viewBox="0 0 272 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 1H246L271 31.5" stroke="#FF73A4" />
                </svg>
                , minWidth: 120
            },
            {
                svg: <svg width="272" height="32" viewBox="0 0 272 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 1H246L271 31.5" stroke="#FF73A4" />
                </svg>
                , minWidth: 120
            }
        ],

        "/leaderboard": [
            {
                svg: <svg width="236" height="32" viewBox="0 0 236 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M236 1H26L1 31.5" stroke="#95F6FF" />
                </svg>
                , minWidth: 120
            },
            {
                svg: <svg width="269" height="32" viewBox="0 0 269 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M269 1H26L1 31.5" stroke="#95F6FF" />
                </svg>
                , minWidth: 140
            },
            {
                svg: <svg width="1440" height="40" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-405 39H660.57H692L723 0.999756L949.14 1L980 39H2007.5" stroke="#79FFB6" />
                </svg>
                , minWidth: 120
            },
            {
                svg: <svg width="262" height="32" viewBox="0 0 262 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H236L261 31.5" stroke="#95F6FF" />
                </svg>
                , minWidth: 120
            }
        ],
        "/about": [
            {
                svg: <svg width="252" height="32" viewBox="0 0 252 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M251.5 1H25.5L0.5 31.5" stroke="#A8A2FF" />
                </svg>
                , minWidth: 120
            },
            {
                svg: <svg width="252" height="32" viewBox="0 0 252 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M251.5 1.00024H25.5L0.5 31.5002" stroke="#A8A2FF" />
                </svg>
                , minWidth: 140
            },
            {
                svg: <svg width="252" height="32" viewBox="0 0 252 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M251.5 1.00024H25.5L0.5 31.5002" stroke="#A8A2FF" />
                </svg>
                , minWidth: 120
            },
            {
                svg: <svg width="1440" height="40" viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-300 39.0005H926.07H957.5L988.5 1.00024L1214.64 1.00049L1245.5 39.0005H1836" stroke="#79FFB6" />
                </svg>
                , minWidth: 120
            }
        ],
    };


    const vectorSet = NAV_BG_VECTORS[currentPath] || NAV_BG_VECTORS["/"];


    return (
        <div className={`navbar ${getPageTheme()}`}>
            {/* ADD THIS BLOCK */}
            {vectorSet.map((bg, idx) => (
                <div className={`nav-bg-svg nav-bg-svg-${idx} ${getPageTheme()}`} key={idx}>
                    {bg.svg}
                </div>
            ))}

            {/* Left Side */}
            <div className="navbar-left">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" className="logo-img" />
                </div>

                <div className="navbar-left-deco">
                    <svg width="69" height="37" viewBox="0 0 69 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M64.3551 3.43719C62.4996 1.92749 59.7711 2.20726 58.2614 4.06258L39.4371 27.198C37.9275 29.0535 38.2084 31.7819 40.0638 33.2916C41.9193 34.801 44.6471 34.5208 46.1568 32.6655L64.9811 9.53015C66.4906 7.67471 66.2103 4.94692 64.3551 3.43719Z" stroke="#95F6FF" />
                        <path d="M46.3551 3.43719C44.4996 1.92749 41.7711 2.20726 40.2614 4.06258L21.4371 27.198C19.9275 29.0535 20.2084 31.7819 22.0638 33.2916C23.9193 34.801 26.6471 34.5208 28.1568 32.6655L46.9811 9.53015C48.4906 7.67471 48.2103 4.94692 46.3551 3.43719Z" stroke="#95F6FF" />
                        <path d="M28.3551 3.43719C26.4996 1.92749 23.7711 2.20726 22.2614 4.06258L3.43706 27.198C1.92753 29.0535 2.2084 31.7819 4.06383 33.2916C5.91926 34.801 8.64706 34.5208 10.1568 32.6655L28.9811 9.53015C30.4906 7.67471 30.2103 4.94692 28.3551 3.43719Z" stroke="#95F6FF" />
                    </svg>


                </div>
            </div>

            {/* Nav Links */}


            <div className="navbar-pages">
                {navLinks.map((link, index) => (
                    <div
                        className="nav-link-wrapper"
                        key={index}
                        style={{
                            minWidth: vectorSet[index]?.minWidth || 120,
                            position: "relative",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >

                        <Link to={link.path} className={`nav-link nav-link-${index} ${getLinkClass(index)}`}>
                            <span className="nav-icon">{link.icon}</span>
                            <span className="nav-text">{link.name}</span>
                        </Link>

                    </div>
                ))}
            </div>

            {/* Right Side */}
            <div className="navbar-right">
                <div className="navbar-right-deco">
                    <svg className="navbar-right-svg" width="69" height="37" viewBox="0 0 69 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.06289 3.43707C5.91833 1.92738 8.64682 2.20715 10.1566 4.06247L28.9809 27.1979C30.4904 29.0534 30.2096 31.7818 28.3541 33.2914C26.4987 34.8009 23.7709 34.5207 22.2612 32.6654L3.43688 9.53004C1.92738 7.6746 2.20764 4.94681 4.06289 3.43707Z" />
                        <path d="M22.0629 3.43707C23.9183 1.92738 26.6468 2.20715 28.1566 4.06247L46.9809 27.1979C48.4904 29.0534 48.2096 31.7818 46.3541 33.2914C44.4987 34.8009 41.7709 34.5207 40.2612 32.6654L21.4369 9.53004C19.9274 7.6746 20.2076 4.94681 22.0629 3.43707Z" />
                        <path d="M40.0629 3.43707C41.9183 1.92738 44.6468 2.20715 46.1566 4.06247L64.9809 27.1979C66.4904 29.0534 66.2096 31.7818 64.3541 33.2914C62.4987 34.8009 59.7709 34.5207 58.2612 32.6654L39.4369 9.53004C37.9274 7.6746 38.2076 4.94681 40.0629 3.43707Z" />
                    </svg>
                </div>

                {/* LOGIN Button or Menu */}
                {!isLoggedIn ? (
                    <button className="navbar-login-btn" onClick={onLoginClick}>
                        LOGIN
                    </button>
                ) : (
                    <div className="menu-dropdown-wrapper">
                        <svg
                            className="navbar-menu-icon"
                            width="36"
                            height="20"
                            viewBox="0 0 36 20"
                            fill="none"
                            onClick={() => setShowMenu((v) => !v)}
                            style={{ cursor: "pointer" }}
                        >
                            <path d="M0 1H36" stroke="#79FFB6" />
                            <path d="M0 10H36" stroke="#79FFB6" />
                            <path d="M0 19H36" stroke="#79FFB6" />
                        </svg>
                        {showMenu && (
                            <div className="menu-dropdown">
                                <button
                                    className="logout-btn"
                                    onClick={() => {
                                        // your logout logic
                                        setShowMenu(false);
                                        setIsLoggedIn(false);
                                    }}
                                >
                                    LOGOUT
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;

