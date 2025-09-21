import './GameInfoTags.css';

export default function GameInfoTags({tag}){
    return (
        <div className="GameInfoTags">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122 17" fill="none" className="White-Tag">
                <path d="M109.213 17L0.000976562 17L0.00196934 8.31522L0.000976562 0H109.213L122.001 8.31522L109.213 17Z" fill="#ECF5FF"/>
            </svg>
            <div className="tag-content">{tag}</div>
        </div>
    );
}