import { Card } from './Card.jsx';
import { discardFromInventory } from '../firebase.js';

export function Inventory({ playerId, cards, cardDamage }) {
  const playerName = playerId === 'player1' ? 'Player 1' : 'Player 2';

  const handleDiscard = (cardId) => {
    discardFromInventory(playerId, cardId);
  };

  return (
    <div className="inventory">
      <div className="inventory-header">
        <div className="inventory-title">
          <h2>{playerName}'s Inventory</h2>
          <span className="card-count">({cards.length} cards)</span>
        </div>
      </div>
      <div className="cards-container">
        {cards.length === 0 ? (
          <p className="empty-hand">No cards in inventory</p>
        ) : (
          cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              cardDamage={cardDamage}
              onDiscard={() => handleDiscard(card.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
