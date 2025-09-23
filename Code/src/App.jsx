import { Routes, Route } from 'react-router-dom'
//import './App.css'
import React, { useState } from "react";   
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import GamesPage from './pages/Games'
import LeaderboardPage from './pages/Leaderboard'
import GameInfo from './pages/GameInfo'
import Navbar from "./components/Navbar";  
import AuthFlow from "./components/AuthFlow";

function App() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <Navbar
        onLoginClick={() => setShowAuth("login")}
        onSignupClick={() => setShowAuth("signup")}
      />


      <Routes>
        <Route path='/gameinfo' element={<GameInfo/>} />
        <Route path="/" element={<HomePage />} />
        <Route path='/games' element={<GamesPage />} />
        <Route path='/leaderboard' element={<LeaderboardPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      {showAuth && (
        <AuthFlow
          onClose={() => setShowAuth(false)}
        />
      )}
    </>
  )
}

export default App
