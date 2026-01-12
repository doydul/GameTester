import { updateCardDamage } from '../firebase.js';

export function Card({ card, onPlay, onTake, onDiscard, onMoveToInventory, cardDamage }) {
  const currentDamage = cardDamage?.[card.id] ?? 0;

  const handleDamageChange = (delta) => {
    updateCardDamage(card.id, delta);
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">{card.title}</span>
        {card.type && (
          <span className="card-type">{card.type}</span>
        )}
      </div>
      {card.cost && (
        <div className="card-cost-container">
          <span className="card-cost">{card.cost}</span>
        </div>
      )}
      <div className="card-description">{card.description}</div>
      {card.durability && (
        <div className="card-durability">
          <span className="durability-label">Durability:</span>
          <div className="durability-tracker">
            <button
              className="durability-btn"
              onClick={() => handleDamageChange(-1)}
              disabled={currentDamage <= 0}
            >
              -
            </button>
            <span className="durability-value">
              <span className={currentDamage > 0 ? "damage-taken" : ""}>{currentDamage}</span>
              <span className="durability-separator">/</span>
              <span>{card.durability}</span>
            </span>
            <button
              className="durability-btn"
              onClick={() => handleDamageChange(1)}
            >
              +
            </button>
          </div>
        </div>
      )}
      <div className="card-actions">
        {onPlay && (
          <button className="play-button" onClick={onPlay}>
            Play
          </button>
        )}
        {onTake && (
          <button className="take-button" onClick={onTake}>
            Take
          </button>
        )}
        {onMoveToInventory && (
          <button className="inventory-button" onClick={onMoveToInventory}>
            To Inventory
          </button>
        )}
        {onDiscard && (
          <button className="discard-button" onClick={onDiscard}>
            Discard
          </button>
        )}
      </div>
    </div>
  );
}
