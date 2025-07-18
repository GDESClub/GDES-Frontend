import React, { useRef, useState, useEffect } from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import "../components/GameInfoComponent.jsx";
import '../page_styles/GameInfo.css';

function GameInfo(){
    return(
        <div className="GameInfo">
            <Navbar/>
            <GameInfoComponent/>
            <Footer />
        </div>
    );
}

export default GameInfo;
