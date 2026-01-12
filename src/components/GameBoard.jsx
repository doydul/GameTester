import { useState } from 'react';
import { Hand } from './Hand.jsx';
import { Card } from './Card.jsx';
import { DiscardPileModal } from './DiscardPileModal.jsx';
import { AdventurePileModal } from './AdventurePileModal.jsx';
import {
  startNewGame,
  takeFromDiscard,
  takeCurrentCard,
  discardCurrentCard,
  drawToAdventureRow,
  discardFromAdventureCardRow,
  takeFromAdventureRow
} from '../firebase.js';

export function GameBoard({ gameState, playerId, opponentId }) {
  const [showDiscardModal, setShowDiscardModal] = useState(false);
  const [showAdventurePileModal, setShowAdventurePileModal] = useState(false);

  const handleNewGame = () => {
    startNewGame();
  };

  const handleTakeFromDiscard = (cardId) => {
    takeFromDiscard(playerId, cardId);
  };

  const handleTakeCurrentCard = () => {
    takeCurrentCard(playerId);
  };

  const handleDiscardCurrentCard = () => {
    discardCurrentCard();
  };

  const handleDrawToAdventureRow = () => {
    drawToAdventureRow();
  };

  const handleTakeFromAdventureRow = (cardId) => {
    takeFromAdventureRow(playerId, cardId);
  };

  const handleDiscardFromAdventureRow = (cardId) => {
    discardFromAdventureCardRow(cardId);
  };

  const deckCount = gameState?.deck?.length ?? 0;
  const deckEmpty = deckCount === 0;
  const playerCards = gameState?.hands?.[playerId] || [];
  const currentCard = gameState?.currentCard || null;
  const discardPile = gameState?.discardPile || [];
  const adventureDeckCount = gameState?.adventureDeck?.length ?? 0;
  const adventureDeckEmpty = adventureDeckCount === 0;
  const adventureRow = gameState?.adventureRow || [];
  const adventurePile = gameState?.adventurePiles?.[playerId] || [];
  const playerResources = gameState?.resources?.[playerId] || { damage: 0, gold: 0, mana: 0 };
  const opponentResources = gameState?.resources?.[opponentId] || { damage: 0, gold: 0, mana: 0 };

  return (
    <div className="game-board">
      <div className="game-controls">
        <button className="new-game-button" onClick={handleNewGame}>
          New Game
        </button>
        <div className="deck-info">
          <span className="deck-label">Deck:</span>
          <span className="deck-count">{deckCount} cards remaining</span>
        </div>
        <div className="deck-info">
          <span className="deck-label">Adventure Deck:</span>
          <span className="deck-count">{adventureDeckCount} cards remaining</span>
        </div>
      </div>

      {gameState ? (
        <>
          <div className="adventure-section">
            <div className="adventure-header">
              <h3>Adventure Row</h3>
              <button
                className="draw-adventure-button"
                onClick={handleDrawToAdventureRow}
                disabled={adventureDeckEmpty}
              >
                Draw Adventure Card
              </button>
            </div>
            <div className="adventure-row">
              {adventureRow.length === 0 ? (
                <div className="empty-slot">No adventure cards available</div>
              ) : (
                adventureRow.map((card) => (
                  <Card
                    key={card.id}
                    card={card}
                    onTake={() => handleTakeFromAdventureRow(card.id)}
                    onDiscard={() => handleDiscardFromAdventureRow(card.id)}
                  />
                ))
              )}
            </div>
          </div>
          
          <div className="play-area">
            <div className="current-card-area">
              <h3>Current Card</h3>
              {currentCard ? (
                <Card card={currentCard} onTake={handleTakeCurrentCard} onDiscard={handleDiscardCurrentCard} />
              ) : (
                <div className="empty-slot">No card played</div>
              )}
            </div>
            <div
              className="discard-pile-area clickable"
              onClick={() => setShowDiscardModal(true)}
            >
              <h3>Discard Pile ({discardPile.length})</h3>
              {discardPile.length > 0 ? (
                <Card card={discardPile[discardPile.length - 1]} />
              ) : (
                <div className="empty-slot">Empty</div>
              )}
              <p className="click-hint">Click to view all</p>
            </div>
          </div>
          
          <div className='global-statistics'>
            <div className='opponent'>
              <span className="opponent-label">Opponent:</span>
              <span className="opponent-stat">Cards: {gameState?.hands?.[opponentId]?.length || 0}</span>
              <span className="opponent-stat damage-stat">Damage: {opponentResources.damage}</span>
              <span className="opponent-stat gold-stat">Gold: {opponentResources.gold}</span>
              <span className="opponent-stat mana-stat">Mana: {opponentResources.mana}</span>
              <span className="opponent-stat">Adventures: {gameState?.adventurePiles?.[opponentId]?.length || 0}</span>
            </div>
          </div>

          <div className="player-section">
            <Hand
              playerId={playerId}
              cards={playerCards}
              deckEmpty={deckEmpty}
              resources={playerResources}
            />
            <div
              className="adventure-pile-area clickable"
              onClick={() => setShowAdventurePileModal(true)}
            >
              <h3>Your Adventures ({adventurePile.length})</h3>
              {adventurePile.length > 0 ? (
                <Card card={adventurePile[adventurePile.length - 1]} />
              ) : (
                <div className="empty-slot">No adventures taken</div>
              )}
              <p className="click-hint">Click to view all</p>
            </div>
          </div>
        </>
      ) : (
        <div className="no-game">
          <p>No game in progress. Click "New Game" to start!</p>
        </div>
      )}

      {showDiscardModal && (
        <DiscardPileModal
          cards={discardPile}
          onTakeCard={handleTakeFromDiscard}
          onClose={() => setShowDiscardModal(false)}
        />
      )}

      {showAdventurePileModal && (
        <AdventurePileModal
          cards={adventurePile}
          onClose={() => setShowAdventurePileModal(false)}
          playerId={playerId}
        />
      )}
    </div>
  );
}
