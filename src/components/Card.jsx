import { updateCardDamage } from '../firebase.js';

// Keyword highlighting configuration
const keywordStyles = {
  item: 'keyword-item',
  items: 'keyword-item',
  strength: 'keyword-strength',
  spell: 'keyword-spell',
  spells: 'keyword-spell',
  mana: 'keyword-mana',
  weapon: 'keyword-weapon',
  weapons: 'keyword-weapon',
  gold: 'keyword-gold',
  action: 'keyword-action',
  actions: 'keyword-action',
  damage: 'keyword-damage',
  card: 'keyword-card',
  cards: 'keyword-card',
  "victory point": 'keyword-vp',
  "victory points": 'keyword-vp',
  vp: 'keyword-vp',
  vps: 'keyword-vp',
};

// Create regex pattern for all keywords (case-insensitive, word boundaries)
const keywordPattern = new RegExp(
  `\\b(${Object.keys(keywordStyles).join('|')})\\b`,
  'gi'
);

function highlightKeywords(text) {
  if (!text) return text;

  const parts = text.split(keywordPattern);

  return parts.map((part, index) => {
    const lowerPart = part.toLowerCase();
    if (keywordStyles[lowerPart]) {
      return (
        <span key={index} className={keywordStyles[lowerPart]}>
          {part}
        </span>
      );
    }
    return part;
  });
}

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
          <span className="card-type">{highlightKeywords(card.type)}</span>
        )}
      </div>
      {card.cost && (
        <div className="card-cost-container">
          <span className="card-cost">{highlightKeywords(card.cost)}</span>
        </div>
      )}
      <div className="card-description">{highlightKeywords(card.description)}</div>
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
