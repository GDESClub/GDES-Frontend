import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer.jsx';
import '../page_styles/explore.css';

export default function ExplorePage() {
  const canvasRef = useRef(null);

  // Visible UI state (updated at a throttle)
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const v = localStorage.getItem('vectorDashHighScore');
    return v ? parseInt(v, 10) : 0;
  });
  const [isGameOver, setIsGameOver] = useState(false);

  // Refs for game internals (mutated inside animation loop)
  const animationFrameIdRef = useRef(null);
  const widthRef = useRef(window.innerWidth);
  const heightRef = useRef(400);

  const scoreRef = useRef(0);       // internal score (increment each frame)
  const frameRef = useRef(0);       // frame counter
  const gameSpeedRef = useRef(8);   // speed increases over time
  const gameRunningRef = useRef(false);

  const obstaclesRef = useRef([]);
  const playerRef = useRef(null);

  // Named handlers so we can properly add/remove them
  function handleJump() {
    const player = playerRef.current;
    if (!player) return;
    if (player.jumps < player.maxJumps) {
      player.velocityY = player.jumpForce;
      player.jumps++;
    }
  }

  function keyDownHandler(e) {
    if (e.code === 'Space') {
      e.preventDefault();
      handleJump();
    }
  }

  // Start / stop game effect. Re-runs when isGameOver toggles.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Initialize sizes
    let width = widthRef.current;
    let height = heightRef.current;
    canvas.width = width;
    canvas.height = height;

    // Reset internal refs on (re)start
    scoreRef.current = 0;
    frameRef.current = 0;
    gameSpeedRef.current = 8;
    obstaclesRef.current = [];

    // Player object (triangle) stored in ref
    playerRef.current = {
      x: 100,
      y: height - 50,
      width: 30,
      height: 30,
      velocityY: 0,
      gravity: 0.8,
      jumpForce: -16,
      jumps: 0,
      maxJumps: 2,
      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.height / 2);
        ctx.lineTo(this.x + this.width, this.y);
        ctx.lineTo(this.x, this.y + this.height / 2);
        ctx.closePath();
        ctx.fillStyle = '#79FFB6';
        ctx.fill();
        ctx.shadowColor = 'rgba(121, 255, 182, 0.8)';
        ctx.shadowBlur = 15;
      }
    };

    class Obstacle {
      constructor() {
        this.width = Math.random() * 40 + 20;
        this.height = Math.random() * 80 + 30;
        this.x = width;
        this.y = height - this.height;
      }
      update() { this.x -= gameSpeedRef.current; }
      draw() {
        ctx.fillStyle = '#FF73A4';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.shadowColor = 'rgba(255, 115, 164, 0.8)';
        ctx.shadowBlur = 15;
      }
    }

    // Resize handler
    const resizeHandler = () => {
      width = window.innerWidth;
      widthRef.current = width;
      canvas.width = width;
    };

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('mousedown', handleJump);
    window.addEventListener('keydown', keyDownHandler);

    gameRunningRef.current = !isGameOver; // start only if not game over

    function animate() {
      if (!gameRunningRef.current) return;

      animationFrameIdRef.current = requestAnimationFrame(animate);

      // clear
      ctx.clearRect(0, 0, width, height);
      ctx.shadowBlur = 0;

      // background grid
      ctx.strokeStyle = 'rgba(149, 246, 255, 0.1)';
      for (let i = 0; i < height; i += 40) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
      }
      for (let i = -(frameRef.current % 40); i < width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }

      // player physics
      const player = playerRef.current;
      player.velocityY += player.gravity;
      player.y += player.velocityY;
      if (player.y >= height - player.height / 2) {
        player.y = height - player.height / 2;
        player.velocityY = 0;
        player.jumps = 0;
      }
      player.draw();
      ctx.shadowBlur = 0;

      // spawn obstacles periodically
      if (frameRef.current % 90 === 0) {
        obstaclesRef.current.push(new Obstacle());
        // slowly increase speed
        gameSpeedRef.current += 0.1;
      }

      // update obstacles
      const obsArr = obstaclesRef.current;
      for (let i = obsArr.length - 1; i >= 0; i--) {
        const obs = obsArr[i];
        obs.update();
        obs.draw();
        ctx.shadowBlur = 0;

        // collision detection (AABB approx)
        if (
          player.x < obs.x + obs.width &&
          player.x + player.width > obs.x &&
          player.y - player.height / 2 < obs.y + obs.height &&
          player.y + player.height / 2 > obs.y
        ) {
          // collision! stop the game
          gameRunningRef.current = false;
          setIsGameOver(true);

          // ensure final score is shown
          setScore(scoreRef.current);

          // update high score if needed
          if (scoreRef.current > highScore) {
            localStorage.setItem('vectorDashHighScore', String(scoreRef.current));
            setHighScore(scoreRef.current);
          }
          cancelAnimationFrame(animationFrameIdRef.current);
          break;
        }

        // remove off-screen
        if (obs.x + obs.width < 0) {
          obsArr.splice(i, 1);
        }
      }

      // score increment (internal)
      scoreRef.current += 1;
      frameRef.current += 1;

      // Throttle React state updates for score to avoid too many re-renders.
      // Update visible score every 6 frames (~100 updates/sec at 60fps -> far less than every frame).
      if (frameRef.current % 6 === 0) {
        setScore(scoreRef.current);
      }
    }

    // start animation if not gameOver
    if (!isGameOver) {
      gameRunningRef.current = true;
      animate();
    }

    // cleanup on unmount or when effect re-runs
    return () => {
      gameRunningRef.current = false;
      cancelAnimationFrame(animationFrameIdRef.current);
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('mousedown', handleJump);
      window.removeEventListener('keydown', keyDownHandler);
    };
    // Intentionally only re-run when isGameOver changes.
  }, [isGameOver, highScore]);

  // Retry: reset UI state and refs; toggling isGameOver will restart the effect.
  const handleRetry = () => {
    // Reset visible score quickly
    setScore(0);
    // Reset internal refs (they will also be re-initialized inside useEffect)
    scoreRef.current = 0;
    frameRef.current = 0;
    gameSpeedRef.current = 8;
    obstaclesRef.current = [];
    // Clear game over and let useEffect restart
    setIsGameOver(false);
  };

  return (
    <div className='explore-page'>
      <div className="game-ui">
        <div className="score-display">SCORE: <span className="score-value">{score}</span></div>
        <div className="score-display">HI: <span className="score-value">{highScore}</span></div>
      </div>

      <canvas ref={canvasRef} className="game-canvas"></canvas>

      {isGameOver && (
        <div className="game-over-overlay">
          <h1 className="game-over-title" data-text="CONNECTION LOST">CONNECTION LOST</h1>
          <p className="final-score">Final Score: {score}</p>
          <button onClick={handleRetry} className="retry-button">RE-ESTABLISH</button>
        </div>
      )}

      <Footer />
    </div>
  );
}
