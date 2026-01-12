import { useEffect, useState } from 'react';
import { subscribeToGameState } from './firebase.js';
import { GameBoard } from './components/GameBoard.jsx';
import { PlayerSelect } from './components/PlayerSelect.jsx';

export function App() {
  const [gameState, setGameState] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    const unsubscribe = subscribeToGameState((state) => {
      setGameState(state);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="app">
        <div className="loading">Connecting to game...</div>
      </div>
    );
  }

  if (!selectedPlayer) {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Card Game Tester</h1>
        </header>
        <main>
          <PlayerSelect onSelect={setSelectedPlayer} />
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Card Game Tester</h1>
        <div className="player-info">
          Playing as: {selectedPlayer === 'player1' ? 'Player 1' : 'Player 2'}
          <button className="change-player-btn" onClick={() => setSelectedPlayer(null)}>
            Change
          </button>
        </div>
      </header>
      <main>
        <GameBoard gameState={gameState} playerId={selectedPlayer} />
      </main>
    </div>
  );
}
