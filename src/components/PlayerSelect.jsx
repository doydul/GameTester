export function PlayerSelect({ onSelect, onSelectOpponent }) {
  return (
    <div className="player-select">
      <h2>Select Your Player</h2>
      <div className="player-buttons">
        <button
          className="player-select-btn"
          onClick={() => { onSelect('player1'); onSelectOpponent('player2'); }}
        >
          Player 1
        </button>
        <button
          className="player-select-btn"
          onClick={() => { onSelect('player2'); onSelectOpponent('player1'); }}
        >
          Player 2
        </button>
      </div>
    </div>
  );
}
