import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ onLoginClick, onSignupClick }) {
    return (
        <div className="navbar">
            <div className="navbar-pages">
                <Link to="/">Home</Link>
                <Link to="/games">Games</Link>
                <Link to="/leaderboard">Leaderboard</Link>
                <Link to="/about">About</Link>
            </div>
            <div className='navbar-button'>
                <button onClick={onLoginClick} className="cyber-button bg-red fg-white">Login
                    <span class="glitchtext">ERROR</span>
                    <span class="tag">R25</span>
                </button>
                <button onClick={onSignupClick} className="cyber-button bg-red fg-white">Sign Up
                    <span class="glitchtext">ERROR</span>
                    <span class="tag">R25</span>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
