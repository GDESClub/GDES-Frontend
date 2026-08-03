import React, { useState, useEffect } from 'react';
import '../page_styles/RegistrationPage.css';

// fields: [] means no game-specific fields are collected at all (FIFA, Tekken)
const GAME_RULES = {
  "Valorant": { max: 5, type: 'team', fields: ['inGameNameTag', 'rank'] },
  "BGMI": { max: 4, type: 'team', fields: ['inGameId', 'rank'] },
  "Tekken": { max: 1, type: 'solo', fields: [] },
  "Clash Royale": { max: 1, type: 'solo', fields: ['inGameTag', 'trophies'] },
  "FIFA": { max: 1, type: 'solo', fields: [] },
  "Brawl Stars": { max: 3, type: 'team', fields: ['inGameTag', 'trophies'] }
};

const GAME_IMAGES = {
  "Valorant": "/legacy/Valorant.jpeg",
  "BGMI": "/legacy/BGMI.jpeg",
  "Tekken": "/legacy/Tekken.jpeg",
  "Clash Royale": "/legacy/ClashRoyale.jpeg",
  "FIFA": "/legacy/FIFA.jpeg",
  "Brawl Stars": "/legacy/BrawlStars.jpeg"
};

const BGMI_RANKS = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Crown', 'Ace', 'Conqueror'];

const emptyPlayer = () => ({
  name: '',           // Added name field
  collegeEmail: '',
  rollNumber: '',
  contactNumber: ''
});

export default function RegistrationPage() {
  const [game, setGame] = useState('Valorant');
  const [players, setPlayers] = useState([emptyPlayer()]); // players[0] is always the leader
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Reset players whenever the game changes, since field requirements differ per game
  useEffect(() => {
    setPlayers([emptyPlayer()]);
  }, [game]);

  const handleGameChange = (e) => {
    setGame(e.target.value);
  };

  const handlePlayerChange = (index, field, value) => {
    const newPlayers = [...players];
    newPlayers[index] = { ...newPlayers[index], [field]: value };
    setPlayers(newPlayers);
  };

  const addPlayer = () => {
    if (players.length < GAME_RULES[game].max) {
      setPlayers([...players, emptyPlayer()]);
    }
  };

  const removePlayer = (index) => {
    // index 0 is the leader and can never be removed
    if (index > 0) {
      const newPlayers = players.filter((_, i) => i !== index);
      setPlayers(newPlayers);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const payload = {
      game,
      players: players.map((p, idx) => {
        const formattedPlayer = { ...p, isLeader: idx === 0 };
        if (formattedPlayer.trophies !== undefined && formattedPlayer.trophies !== '') {
          formattedPlayer.trophies = Number(formattedPlayer.trophies);
        }
        return formattedPlayer;
      })
    };

    try {
      const response = await fetch('https://gdesbackend.vercel.app/api/registrations/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.status === 201) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.error?.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const resetForm = () => {
    setGame('Valorant');
    setPlayers([emptyPlayer()]);
    setStatus('idle');
    setErrorMessage('');
  };

  const currentRules = GAME_RULES[game];

  // Shared renderer for a single player's fields (used for both the leader and teammates)
  const renderPlayerFields = (player, index) => (
    <div key={index} className="player-block">
      <div className="player-header">
        <h4>{index === 0 ? 'Team Leader' : `Player ${index + 1}`}</h4>
        {index > 0 && (
          <button type="button" className="remove-player" onClick={() => removePlayer(index)}>
            ✕ Remove
          </button>
        )}
      </div>

      {/* Added Name Input Field */}
      <div className="input-group">
        <label>Full Name</label>
        <input
          type="text"
          required
          placeholder="John Doe"
          value={player.name}
          onChange={(e) => handlePlayerChange(index, 'name', e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>College Email ID</label>
        <input
          type="email"
          required
          placeholder="student@iitg.ac.in"
          value={player.collegeEmail}
          onChange={(e) => handlePlayerChange(index, 'collegeEmail', e.target.value)}
        />
      </div>

      <div className="input-row">
        <div className="input-group">
          <label>Roll Number</label>
          <input
            type="text"
            required
            placeholder="e.g. 23010XXXX"
            value={player.rollNumber}
            onChange={(e) => handlePlayerChange(index, 'rollNumber', e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Contact Number</label>
          <input
            type="text"
            required
            placeholder="+91"
            value={player.contactNumber}
            onChange={(e) => handlePlayerChange(index, 'contactNumber', e.target.value)}
          />
        </div>
      </div>

      {currentRules.fields.includes('inGameNameTag') && (
        <div className="input-group">
          <label>In-Game Name & Tag (Name#Tag)</label>
          <input
            type="text"
            required
            placeholder="PlayerOne#IND"
            value={player.inGameNameTag || ''}
            onChange={(e) => handlePlayerChange(index, 'inGameNameTag', e.target.value)}
          />
        </div>
      )}

      {currentRules.fields.includes('inGameId') && (
        <div className="input-group">
          <label>In-Game ID / Handle</label>
          <input
            type="text"
            required
            placeholder="5123456789"
            value={player.inGameId || ''}
            onChange={(e) => handlePlayerChange(index, 'inGameId', e.target.value)}
          />
        </div>
      )}

      {currentRules.fields.includes('inGameTag') && (
        <div className="input-group">
          <label>In-Game Tag (Name + Tag)</label>
          <input
            type="text"
            required
            placeholder="#2YLYQ..."
            value={player.inGameTag || ''}
            onChange={(e) => handlePlayerChange(index, 'inGameTag', e.target.value)}
          />
        </div>
      )}

      <div className="input-row">
        {currentRules.fields.includes('rank') && game === 'Valorant' && (
          <div className="input-group">
            <label>Rank</label>
            <input
              type="text"
              required
              placeholder="e.g. Diamond 2"
              value={player.rank || ''}
              onChange={(e) => handlePlayerChange(index, 'rank', e.target.value)}
            />
          </div>
        )}

        {currentRules.fields.includes('rank') && game === 'BGMI' && (
          <div className="input-group">
            <label>Rank</label>
            <div className="select-wrapper">
              <select
                required
                value={player.rank || ''}
                onChange={(e) => handlePlayerChange(index, 'rank', e.target.value)}
              >
                <option value="" disabled>Select Rank</option>
                {BGMI_RANKS.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
          </div>
        )}

        {currentRules.fields.includes('trophies') && (
          <div className="input-group">
            <label>Trophies</label>
            <input
              type="number"
              required
              placeholder="e.g. 5000"
              value={player.trophies || ''}
              onChange={(e) => handlePlayerChange(index, 'trophies', e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="registration-page">
      {/* Background ambient glow matching the active game image */}
      <div 
        className="ambient-background" 
        style={{ backgroundImage: `url("${GAME_IMAGES[game]}")` }}
      />
      
      <div className="premium-wrapper">
        {/* Dynamic Image Panel */}
        <div className="image-panel">
          <img 
            src={GAME_IMAGES[game]} 
            alt={`${game} Poster`} 
            key={game} // Forces re-render animation on game change
            className="game-poster fade-in"
          />
          <div className="image-overlay">
            <div className="overlay-content">
              <h2>LEGACY</h2>
              <p>JULY 28-30</p>
            </div>
          </div>
        </div>

        {/* Glassmorphic Form Panel */}
        <div className="form-panel">
          <div className="form-header">
            <h1 className="registration-title">Tournament Entry</h1>
            <p className="registration-subtitle">Secure your spot in the arena.</p>
          </div>

          {status === 'success' ? (
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h2 className="success-title">Roster Confirmed</h2>
              <p>Your entry has been securely logged in the database.</p>
              <button className="submit-button" onClick={resetForm}>Register Another Team</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-section">
                <div className="section-title">
                  <span className="step-number">01</span>
                  <h3>Select Discipline</h3>
                </div>
                <div className="input-group">
                  <div className="select-wrapper game-select">
                    <select value={game} onChange={handleGameChange} required>
                      {Object.keys(GAME_RULES).map(g => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <div className="section-title">
                  <span className="step-number">02</span>
                  <h3>Team Leader</h3>
                </div>
                {renderPlayerFields(players[0], 0)}
              </div>

              {currentRules.type === 'team' && (
                <div className="form-section">
                  <div className="section-title">
                    <span className="step-number">03</span>
                    <h3>Squad Members</h3>
                    <span className="max-badge">Max {currentRules.max}</span>
                  </div>

                  {players.slice(1).map((player, i) => renderPlayerFields(player, i + 1))}

                  {players.length < currentRules.max && (
                    <button type="button" className="add-player-btn" onClick={addPlayer}>
                      <span>+</span> Add Player
                    </button>
                  )}
                </div>
              )}

              {status === 'error' && (
                <div className="error-message">
                  <span className="error-icon">⚠</span>
                  {errorMessage}
                </div>
              )}

              <div className="submit-container">
                <button type="submit" className={`submit-button ${status === 'submitting' ? 'loading' : ''}`} disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Transmitting...' : 'Confirm Registration'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}