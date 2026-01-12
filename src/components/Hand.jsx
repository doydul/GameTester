import { Card } from './Card.jsx';
import { drawCard, playCard } from '../firebase.js';

export function Hand({ playerId, cards, deckEmpty }) {
  const playerName = playerId === 'player1' ? 'Player 1' : 'Player 2';

  const handleDraw = () => {
    drawCard(playerId);
  };

  const handlePlay = (cardId) => {
    playCard(playerId, cardId);
  };

  return (
    <div className="hand">
      <div className="hand-header">
        <h2>{playerName}'s Hand</h2>
        <span className="card-count">({cards.length} cards)</span>
      </div>
      <button
        className="draw-button"
        onClick={handleDraw}
        disabled={deckEmpty}
      >
        Draw Card
      </button>
      <div className="cards-container">
        {cards.length === 0 ? (
          <p className="empty-hand">No cards in hand</p>
        ) : (
          cards.map((card) => (
            <Card key={card.id} card={card} onPlay={() => handlePlay(card.id)} />
          ))
        )}
      </div>
    </div>
  );
}
