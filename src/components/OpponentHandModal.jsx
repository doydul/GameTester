import { Card } from './Card.jsx';
import { discardFromHand } from '../firebase.js';

export function OpponentHandModal({ cards, opponentId, onClose, cardDamage }) {
  const handleDiscard = (cardId) => {
    discardFromHand(opponentId, cardId);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Opponent's Hand ({cards.length})</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-content">
          {cards.length === 0 ? (
            <p className="empty-modal">No cards in opponent's hand</p>
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
