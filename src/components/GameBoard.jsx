import { Hand } from './Hand.jsx';
import { Card } from './Card.jsx';
import { startNewGame } from '../firebase.js';

export function GameBoard({ gameState, playerId }) {
  const handleNewGame = () => {
    startNewGame();
  };

  const deckCount = gameState?.deck?.length ?? 0;
  const deckEmpty = deckCount === 0;
  const playerCards = gameState?.hands?.[playerId] || [];
  const currentCard = gameState?.currentCard || null;
  const discardPile = gameState?.discardPile || [];

  return (
    <div className="game-board">
      <div className="game-controls">
        <button className="new-game-button" onClick={handleNewGame}>
          New Game
        </button>
        <div className="deck-info">
          <span className="deck-label">Deck:</span>
          <span className="deck-count">{deckCount} cards remaining</span>
        </div>
      </div>

      {gameState ? (
        <>
          <div className="play-area">
            <div className="current-card-area">
              <h3>Current Card</h3>
              {currentCard ? (
                <Card card={currentCard} />
              ) : (
                <div className="empty-slot">No card played</div>
              )}
            </div>
            <div className="discard-pile-area">
              <h3>Discard Pile ({discardPile.length})</h3>
              {discardPile.length > 0 ? (
                <Card card={discardPile[discardPile.length - 1]} />
              ) : (
                <div className="empty-slot">Empty</div>
              )}
            </div>
          </div>
          <Hand
            playerId={playerId}
            cards={playerCards}
            deckEmpty={deckEmpty}
          />
        </>
      ) : (
        <div className="no-game">
          <p>No game in progress. Click "New Game" to start!</p>
        </div>
      )}
    </div>
  );
}
