import { Card } from './Card.jsx';
import { drawCard, playCard, discardFromHand, updateResource, moveToInventory } from '../firebase.js';

export function Hand({ playerId, cards, actionDeckEmpty, spellDeckEmpty, itemDeckEmpty, resources, cardDamage }) {
  const playerName = playerId === 'player1' ? 'Player 1' : 'Player 2';

  const handleDrawAction = () => {
    drawCard(playerId, 'action');
  };

  const handleDrawSpell = () => {
    drawCard(playerId, 'spell');
  };

  const handleDrawItem = () => {
    drawCard(playerId, 'item');
  };

  const handlePlay = (cardId) => {
    playCard(playerId, cardId);
  };

  const handleDiscard = (cardId) => {
    discardFromHand(playerId, cardId);
  };

  const handleMoveToInventory = (cardId) => {
    moveToInventory(playerId, cardId);
  };

  const handleResourceChange = (resourceType, delta) => {
    updateResource(playerId, resourceType, delta);
  };

  const damage = resources?.damage ?? 0;
  const gold = resources?.gold ?? 0;
  const mana = resources?.mana ?? 0;
  const maxHealth = resources?.maxHealth ?? 6;
  const maxMana = resources?.maxMana ?? 2;
  const stamina = resources?.stamina ?? 5;
  const strength = resources?.strength ?? 2;

  return (
    <div className="hand">
      <div className="hand-header">
        <div className="hand-title">
          <h2>{playerName}'s Hand</h2>
          <span className="card-count">({cards.length} cards)</span>
        </div>
        <div className="resources">
          <div className="resource gold-resource">
            <button className="resource-btn" onClick={() => handleResourceChange('gold', -1)}>-</button>
            <span className="resource-value">{gold}</span>
            <button className="resource-btn" onClick={() => handleResourceChange('gold', 1)}>+</button>
            <span className="resource-label">Gold</span>
          </div>
          <div className="resource stamina-resource">
            <button className="resource-btn" onClick={() => handleResourceChange('stamina', -1)}>-</button>
            <span className="resource-value">{stamina}</span>
            <button className="resource-btn" onClick={() => handleResourceChange('stamina', 1)}>+</button>
            <span className="resource-label">Stamina</span>
          </div>
          <div className="resource damage-resource">
            <button className="resource-btn" onClick={() => handleResourceChange('damage', -1)}>-</button>
            <span className="resource-value">{damage}</span>
            <button className="resource-btn" onClick={() => handleResourceChange('damage', 1)}>+</button>
            <span className="resource-label">Health</span>
          </div>
          <div className="resource maxhealth-resource">
            <button className="resource-btn" onClick={() => handleResourceChange('maxHealth', -1)}>-</button>
            <span className="resource-value">{maxHealth}</span>
            <button className="resource-btn" onClick={() => handleResourceChange('maxHealth', 1)}>+</button>
            <span className="resource-label">Max Health</span>
          </div>
          <div className="resource mana-resource">
            <button className="resource-btn" onClick={() => handleResourceChange('mana', -1)}>-</button>
            <span className="resource-value">{mana}</span>
            <button className="resource-btn" onClick={() => handleResourceChange('mana', 1)}>+</button>
            <span className="resource-label">Mana</span>
          </div>
          <div className="resource maxmana-resource">
            <button className="resource-btn" onClick={() => handleResourceChange('maxMana', -1)}>-</button>
            <span className="resource-value">{maxMana}</span>
            <button className="resource-btn" onClick={() => handleResourceChange('maxMana', 1)}>+</button>
            <span className="resource-label">Max Mana</span>
          </div>
          <div className="resource strength-resource">
            <button className="resource-btn" onClick={() => handleResourceChange('strength', -1)}>-</button>
            <span className="resource-value">{strength}</span>
            <button className="resource-btn" onClick={() => handleResourceChange('strength', 1)}>+</button>
            <span className="resource-label">Strength</span>
          </div>
        </div>
      </div>
      <div className="draw-buttons">
        <button
          className="draw-button action-draw"
          onClick={handleDrawAction}
          disabled={actionDeckEmpty}
        >
          Draw Action
        </button>
        <button
          className="draw-button spell-draw"
          onClick={handleDrawSpell}
          disabled={spellDeckEmpty}
        >
          Draw Spell
        </button>
        <button
          className="draw-button item-draw"
          onClick={handleDrawItem}
          disabled={itemDeckEmpty}
        >
          Draw Item
        </button>
      </div>
      <div className="cards-container">
        {cards.length === 0 ? (
          <p className="empty-hand">No cards in hand</p>
        ) : (
          cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              cardDamage={cardDamage}
              onPlay={() => handlePlay(card.id)}
              onDiscard={() => handleDiscard(card.id)}
              onMoveToInventory={() => handleMoveToInventory(card.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
