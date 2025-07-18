import React from "react";
import GameInfoTags from './GameInfoTags';
import './GameInfoComponent.css';


export default function GameInfoComponent({data}) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        const fillPercent = Math.min(Math.max(data.rating - i, 0), 1) * 100;

        stars.push(
        <svg
            key={i}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
            <linearGradient id={`grad${i}`}>
                <stop offset={`${fillPercent}%`} stopColor="#FF73A4" />
                <stop offset={`${fillPercent}%`} stopColor="#FF73A4" stopOpacity="0" />    
            </linearGradient>
            </defs>
            <path
            d="M14.9844 9.32422L15.0967 9.66992H23.4609L16.9141 14.4248L16.6182 14.6406L16.7334 14.9883L19.3027 22.6797L12.7939 17.957L12.5 17.7441L12.2061 17.957L5.69629 22.6797L8.2666 14.9883L8.38184 14.6406L8.08594 14.4248L1.53906 9.66992H9.90332L10.0156 9.32422L12.5 1.62598L14.9844 9.32422Z"
            fill={`url(#grad${i})`}
            />
        </svg>
        );
    }
    
    return(
        <div className="GameInfoComponent">
            <div className="Closing_Section">
                <div className="Closing_Section_Main_Block_Wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 626" fill="none" className="Closing_Section_Main_Block" >
                        <path d="M80.5 586.458L0.5 624.368V0.5H80.5V586.458Z" stroke= "#FF73A4" />
                    </svg>
                    <a href="" className="Back-btn-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 38" fill="none" className="Back-Btn">
                            <path d="M6.93934 12.9393C6.35355 13.5251 6.35355 14.4749 6.93934 15.0607L16.4853 24.6066C17.0711 25.1924 18.0208 25.1924 18.6066 24.6066C19.1924 24.0208 19.1924 23.0711 18.6066 22.4853L10.1213 14L18.6066 5.51472C19.1924 4.92893 19.1924 3.97918 18.6066 3.3934C18.0208 2.80761 17.0711 2.80761 16.4853 3.3934L6.93934 12.9393ZM29 14V12.5L8 12.5V14V15.5L29 15.5V14Z" fill="#FF73A4"/>
                        </svg>
                    </a>
                </div>
                {[...Array(4)].map((_, i) => (
                    <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 81 71"
                        className="GameInfo_Closing_Section_Side_Block"
                        preserveAspectRatio="none"
                    >
                        <path
                        d="M80.5 31.7168L0.5 69.6279V38.7002L80.5 0.790039V31.7168Z"
                        stroke="#FF73A4"
                        fill="none"
                        />
                    </svg>
                ))}
            </div>
            <div className="Info_Section">
                <div className="Info_Section_Main">
                    <div className="Game_Banner_Wrapper">
                        <img src={data.banner} alt="" className="Game_Banner" />
                        <div className="Game_Banner_Tags_Container">
                            {
                                data.tags.map(
                                    (tag, index) => (
                                        <GameInfoTags
                                            key = {index}
                                            tag = {tag}
                                        />
                                    )
                                )
                            }
                        </div>
                        <div className="Game_Name">
                            {data.name}
                        </div>
                    </div>
                    <div className="Rating_SubSection">
                        <div className="star-container"> {stars} </div>
                        <div className="rating-txt">GDes Studios</div>
                    </div>
                    <div className="Description_SubSection">
                        {data.description}
                    </div>
                    <div className="Like_SubSection">💟 Liked by <span className="Like_Count">{data.liked_count}</span> others</div>
                </div>
                <div className="Play_Section">
                    <div className="Play_Section_Header">
                        {[...Array(11)].map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 55 42"
                                className="Play_Section_Header-Footer_Elements"
                                preserveAspectRatio="none"
                            >
                                <path
                                d="M54.0098 0.5L23.748 41.5H0.990234L31.252 0.5H54.0098Z"
                                stroke="#FF73A4"
                                fill="none"
                                />
                            </svg>
                        ))}
                    </div>
                    <div className="Play_Section_Main">
                        <div className="Play_Section_Btns_Container">
                            <div className="Play_Section_Btn_Wrapper">
                                <a href="" id="Play-Now_Btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 313 36" fill="none" className="Play-Area-Btn">
                                        <path d="M11.5573 1L1 13.1429V35H303.202L312 24.8V1H11.5573Z" fill="#FF73A4" stroke="#FF73A4"/>
                                    </svg>
                                </a>
                                <div className="Play_Section_Btn_Txt">Play Now!</div>
                            </div>
                            <div className="Play_Section_Btn_Wrapper">
                                <a href="" id="Save-for-later_Btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 313 36" fill="none" className="Play-Area-Btn">
                                        <path d="M11.5573 1L1 13.1429V35H303.202L312 24.8V1H11.5573Z" fill="#FF73A4" stroke="#FF73A4"/>
                                    </svg>
                                </a>
                                <div className="Play_Section_Btn_Txt">Save for Later</div>
                            </div>
                        </div>
                        <div className="Play_Section_About">
                            <div className="info-icon">ⓘ</div>
                            <div className="Play_Section_About_Heading">About</div>
                            <div></div>
                            <div className="Play_Section_About_Body">{data.about}</div>
                        </div>
                    </div>
                    <div className="Play_Section_Footer">
                        {[...Array(11)].map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 55 42"
                                className="Play_Section_Header-Footer_Elements"
                                preserveAspectRatio="none"
                            >
                                <path
                                d="M0.990234 0.5L31.252 41.5H54.0098L23.748 0.5H0.990234Z"
                                stroke="#FF73A4"
                                fill="none"
                                />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}