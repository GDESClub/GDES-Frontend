import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useUserState } from './UserState';
import logo from '/logo.png'; // FIX: Removed local import

// Using a placeholder for the logo to resolve the path error.
//const logo = 'https://placehold.co/36x36/0E0216/79FFB6?text=G';

// Moved icons into their own small components for cleanliness
const IconHome = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.98779 4.2353C4.37314 3.85061 4.94379 3.63219 5.7073 3.61711C6.4743 3.60199 7.40394 3.79392 8.44139 4.19666C10.5149 5.00166 12.9295 6.61289 15.1729 8.85239C17.4162 11.0919 19.0302 13.5025 19.8366 15.5724C20.2401 16.6082 20.433 17.5368 20.4179 18.3025C20.4028 19.0647 20.184 19.6345 19.7986 20.0191C19.4133 20.4038 18.8426 20.6223 18.0791 20.6373C17.3121 20.6524 16.3826 20.4592 15.345 20.0564C13.2715 19.2513 10.8562 17.6409 8.61279 15.4013C6.36946 13.1618 4.75615 10.7506 3.94978 8.6806C3.54641 7.64503 3.35341 6.7175 3.36854 5.95187C3.38361 5.18964 3.60248 4.62002 3.98779 4.2353Z" /><path d="M20.0122 3.98139C19.6269 3.5967 19.0562 3.37829 18.2927 3.3632C17.5257 3.34808 16.5961 3.54001 15.5586 3.94275C13.4851 4.74775 11.0705 6.35899 8.82706 8.59849C6.58375 10.838 4.96983 13.2486 4.16335 15.3185C3.75987 16.3543 3.56697 17.2829 3.58212 18.0486C3.59725 18.8108 3.81603 19.3805 4.20136 19.7652C4.58673 20.1499 5.15738 20.3683 5.92088 20.3834C6.68793 20.3985 7.61744 20.2053 8.65497 19.8025C10.7285 18.9974 13.1438 17.387 15.3872 15.1474C17.6305 12.9079 19.2438 10.4967 20.0502 8.42669C20.4536 7.39113 20.6466 6.46359 20.6315 5.69797C20.6164 4.93574 20.3975 4.36611 20.0122 3.98139Z" /></svg>;
const IconGames = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6.5" y="0.5" width="5" height="5" /><rect x="12.5" y="6.5" width="5" height="5" /><rect x="6.5" y="12.5" width="5" height="5" /><rect x="0.5" y="6.5" width="5" height="5" /></svg>;
const IconLeaderboard = () => <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="13.4982" cy="13.5007" r="6.00668" transform="rotate(-45 13.4982 13.5007)" /><line x1="18.0154" y1="8.81332" x2="20.1318" y2="6.6969" /><line x1="18.4532" y1="17.7473" x2="20.5696" y2="19.8637" /><line x1="6.69625" y1="20.1325" x2="8.81267" y2="18.0161" /><line x1="7.13499" y1="6.42902" x2="9.25141" y2="8.54544" /></svg>;
const IconAbout = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.00002" cy="4.00002" r="3.50002" /><circle cx="4.00002" cy="12" r="3.50002" /><circle cx="12" cy="12" r="3.50002" /></svg>;
const IconAchievements = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C15.866 15 19 11.866 19 8V3H5V8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 8C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 2C20.6569 2 22 3.34315 22 5C22 6.65685 20.6569 8 19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 22H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;

const navLinks = [
    { name: 'Home', path: '/', icon: <IconHome /> },
    { name: 'Games', path: '/games', icon: <IconGames /> },
    { name: 'Leaderboard', path: '/leaderboard', icon: <IconLeaderboard /> },
    { name: 'Hall of Fame', path: '/achievements', icon: <IconAchievements /> },
    { name: 'About Us', path: '/about', icon: <IconAbout /> }, 
];
function Navbar({ onLoginClick }) {
    const location = useLocation();
    const { userValue, logout } = useUserState();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Determines the theme class based on the current URL
    const getPageTheme = () => {
        switch (location.pathname) {
            case '/games': return 'theme-games';
            case '/leaderboard': return 'theme-leaderboard';
            case '/about': return 'theme-about';
            default: return 'theme-home';
        }
    };
    
    const handleLogout = () => {
        logout(); // Clear the user's data from global state
        setIsMenuOpen(false); // Close the menu if it's open
    };


    return (
        <header className={`navbar ${getPageTheme()} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="navbar-content">
                <Link to="/" className="navbar-logo-link">
                    <img src={logo} alt="Logo" className="logo-img" />
                </Link>

                <nav className="navbar-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="nav-icon">{link.icon}</span>
                            <span className="nav-text">{link.name}</span>
                        </Link>
                    ))}
                </nav>

                <div className="navbar-actions">
                    {/* 3. Conditionally render based on login status */}
                    {userValue.status === 2 ? (
                        <div className="navbar-user-info">
                            <span className="username">Welcome, {userValue.username}</span>
                            <button className="logout-btn" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <button className="login-btn" onClick={onLoginClick}>
                            LOGIN
                        </button>
                    )}
                </div>

                <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                   {/* ... (hamburger lines) ... */}
                </button>
            </div>
        </header>
    );
}

export default Navbar;