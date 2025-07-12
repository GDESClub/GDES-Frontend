import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/games">Games</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navbar;