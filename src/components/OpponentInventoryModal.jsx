import { Card } from './Card.jsx';
import { discardFromInventory } from '../firebase.js';

export function OpponentInventoryModal({ cards, opponentId, onClose, cardDamage }) {
  const handleDiscard = (cardId) => {
    discardFromInventory(opponentId, cardId);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Opponent's Inventory ({cards.length})</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-content">
          {cards.length === 0 ? (
            <p className="empty-modal">No cards in opponent's inventory</p>
          ) : (
            <div className="modal-cards">
              {cards.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  cardDamage={cardDamage}
                  onDiscard={() => handleDiscard(card.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
