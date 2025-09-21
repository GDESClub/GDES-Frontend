import { Routes, Route } from 'react-router-dom'
//import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import GamesPage from './pages/Games'
import LeaderboardPage from './pages/Leaderboard'
import GameInfo from './pages/GameInfo'

function App() {
  return (
    <>
      <Routes>
        <Route path='/gameinfo' element={<GameInfo/>} />
        <Route path="/" element={<HomePage />} />
        <Route path='/games' element={<GamesPage/>}/>
        <Route path='/leaderboard' element={<LeaderboardPage/>}/>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
