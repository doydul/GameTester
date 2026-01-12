import { Card } from './Card.jsx';

export function DiscardPileModal({ cards, onTakeCard, onClose, cardDamage }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <div className="modal-header">
          <h2>Discard Pile ({cards.length} cards)</h2>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">
          {cards.length === 0 ? (
            <p className="empty-modal">No cards in discard pile</p>
          ) : (
            <div className="modal-cards">
              {cards.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  cardDamage={cardDamage}
                  onTake={() => onTakeCard(card.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
