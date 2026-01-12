import { Card } from './Card.jsx';
import { drawCard, playCard, discardFromHand, updateResource } from '../firebase.js';

export function Hand({ playerId, cards, deckEmpty, resources }) {
  const playerName = playerId === 'player1' ? 'Player 1' : 'Player 2';

  const handleDraw = () => {
    drawCard(playerId);
  };

  const handlePlay = (cardId) => {
    playCard(playerId, cardId);
  };

  const handleDiscard = (cardId) => {
    discardFromHand(playerId, cardId);
  };

  const handleResourceChange = (resourceType, delta) => {
    updateResource(playerId, resourceType, delta);
  };

  const damage = resources?.damage ?? 0;
  const gold = resources?.gold ?? 0;
  const mana = resources?.mana ?? 0;

  return (
    <div className="hand">
      <div className="hand-header">
        <div className="hand-title">
          <h2>{playerName}'s Hand</h2>
          <span className="card-count">({cards.length} cards)</span>
        </div>
        <div className="resources">
          <div className="resource damage-resource">
            <button className="resource-btn" onClick={() => handleResourceChange('damage', -1)}>-</button>
            <span className="resource-value">{damage}</span>
            <button className="resource-btn" onClick={() => handleResourceChange('damage', 1)}>+</button>
            <span className="resource-label">Damage</span>
          </div>
          <div className="resource gold-resource">
            <button className="resource-btn" onClick={() => handleResourceChange('gold', -1)}>-</button>
            <span className="resource-value">{gold}</span>
            <button className="resource-btn" onClick={() => handleResourceChange('gold', 1)}>+</button>
            <span className="resource-label">Gold</span>
          </div>
          <div className="resource mana-resource">
            <button className="resource-btn" onClick={() => handleResourceChange('mana', -1)}>-</button>
            <span className="resource-value">{mana}</span>
            <button className="resource-btn" onClick={() => handleResourceChange('mana', 1)}>+</button>
            <span className="resource-label">Mana</span>
          </div>
        </div>
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
            <Card
              key={card.id}
              card={card}
              onPlay={() => handlePlay(card.id)}
              onDiscard={() => handleDiscard(card.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
