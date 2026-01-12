import { Card } from './Card.jsx';
import { discardFromAdventureCardPile } from '../firebase.js';

export function AdventurePileModal({ cards, onClose, playerId  }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  const handleDiscard = (cardId) => {
    discardFromAdventureCardPile(playerId, cardId);
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal adventure-modal">
        <div className="modal-header">
          <h2>Your Adventures ({cards.length} cards)</h2>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">
          {cards.length === 0 ? (
            <p className="empty-modal">No adventures taken yet</p>
          ) : (
            <div className="modal-cards">
              {cards.map((card) => (
                <Card key={card.id} card={card} onDiscard={() => handleDiscard(card.id)}/>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
