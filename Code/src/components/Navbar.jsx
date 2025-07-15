import { Link } from 'react-router-dom';

function Navbar({ onLoginClick, onSignupClick }) {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/games">Games</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/about">About</Link>
            <button onClick={onLoginClick}>Login</button>
            <button onClick={onSignupClick}>Sign Up</button>
        </div>
    );
}

export default Navbar;
