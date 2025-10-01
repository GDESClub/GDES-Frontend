import '../page_styles/GameInfo.css'; // We'll create this new CSS file

// A simple component to render stars for the rating
// A more advanced component to render full, half, and empty stars
const StarRating = ({ rating }) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
        if (i <= rating) {
            // Full star
            stars.push(<span key={i} className="star filled">★</span>);
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            // Half star
            stars.push(<span key={i} className="star half">★</span>);
        } else {
            // Empty star
            stars.push(<span key={i} className="star">★</span>);
        }
    }
    return <div className="star-rating">{stars}</div>;
};


// Note: The parent component now passes an `onClose` function.
// We are also destructuring the `data` prop directly.
function GameInfoComponent({ data, onClose }) {
    // If no data is passed, render nothing.
    if (!data) return null;

    const { banner, tags, name, rating, description, liked_count, about } = data;
    return (
        <div className="game-info-card">
            {/* Close button for the modal */}
            <button className="close-button" onClick={onClose}>X</button>

            <div className="game-banner">
                <img src={banner} alt={`${name} banner`} />
            </div>

            <div className="game-details">
                <h1 className="game-name">{name}</h1>

                <div className="game-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>

                <div className="game-stats">
                    <div className="stat-item">
                        <StarRating rating={rating} />
                        <span>({rating.toFixed(1)})</span>
                    </div>
                    <div className="stat-item">
                        <span className="heart-icon">❤</span>
                        <span>{liked_count.toLocaleString()} Likes</span>
                    </div>
                </div>

                <p className="game-description">{description}</p>
                
                <button className="play-button">▶ PLAY NOW</button>
                
                <div className="game-about">
                    <h2>About The Game</h2>
                    <p>{about}</p>
                </div>
            </div>
        </div>
    );
}

export default GameInfoComponent;