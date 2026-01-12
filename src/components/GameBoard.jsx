import { useState } from 'react';
import { Hand } from './Hand.jsx';
import { Inventory } from './Inventory.jsx';
import { Card } from './Card.jsx';
import { CharacterCard } from './CharacterCard.jsx';
import { DiscardPileModal } from './DiscardPileModal.jsx';
import { AdventurePileModal } from './AdventurePileModal.jsx';
import { OpponentHandModal } from './OpponentHandModal.jsx';
import { OpponentInventoryModal } from './OpponentInventoryModal.jsx';
import { OpponentCharacterModal } from './OpponentCharacterModal.jsx';
import {
  startNewGame,
  takeFromDiscard,
  takeCurrentCard,
  discardCurrentCard,
  drawToAdventureRow,
  discardFromAdventureCardRow,
  takeFromAdventureRow,
  shuffleDiscardIntoDeck,
  endTurn
} from '../firebase.js';

export function GameBoard({ gameState, playerId, opponentId }) {
  const [showDiscardModal, setShowDiscardModal] = useState(false);
  const [showAdventurePileModal, setShowAdventurePileModal] = useState(false);
  const [showOpponentHandModal, setShowOpponentHandModal] = useState(false);
  const [showOpponentInventoryModal, setShowOpponentInventoryModal] = useState(false);
  const [showOpponentCharacterModal, setShowOpponentCharacterModal] = useState(false);
  const [showPeekAdventureModal, setShowPeekAdventureModal] = useState(false);

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

  const handleShuffleDiscardIntoDeck = () => {
    shuffleDiscardIntoDeck();
  };

  const handleEndTurn = () => {
    endTurn();
  };

  const deckCount = gameState?.deck?.length ?? 0;
  const deckEmpty = deckCount === 0;
  const playerCards = gameState?.hands?.[playerId] || [];
  const playerInventory = gameState?.inventories?.[playerId] || [];
  const currentCard = gameState?.currentCard || null;
  const discardPile = gameState?.discardPile || [];
  const adventureDeckCount = gameState?.adventureDeck?.length ?? 0;
  const adventureDeckEmpty = adventureDeckCount === 0;
  const topAdventureCard = gameState?.adventureDeck?.[0] || null;
  const adventureRow = gameState?.adventureRow || [];
  const adventurePile = gameState?.adventurePiles?.[playerId] || [];
  const playerResources = gameState?.resources?.[playerId] || { damage: 0, gold: 0, mana: 0 };
  const opponentResources = gameState?.resources?.[opponentId] || { damage: 0, gold: 0, mana: 0 };
  const opponentHand = gameState?.hands?.[opponentId] || [];
  const opponentInventory = gameState?.inventories?.[opponentId] || [];
  const playerCharacter = gameState?.characters?.[playerId] || null;
  const opponentCharacter = gameState?.characters?.[opponentId] || null;
  const cardDamage = gameState?.cardDamage || {};
  const currentTurn = gameState?.currentTurn || 'player1';
  const isMyTurn = currentTurn === playerId;

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
          <div className="play-area">
            <div className="adventure-section">
              <div className="adventure-header">
                <h3>Adventure Row</h3>
                <div className="adventure-buttons">
                  <button
                    className="peek-adventure-button"
                    onClick={() => setShowPeekAdventureModal(true)}
                    disabled={adventureDeckEmpty}
                  >
                    Peek Top Card
                  </button>
                  <button
                    className="draw-adventure-button"
                    onClick={handleDrawToAdventureRow}
                    disabled={adventureDeckEmpty}
                  >
                    Draw Adventure Card
                  </button>
                </div>
              </div>
              <div className="adventure-row">
                {adventureRow.length === 0 ? (
                  <div className="empty-slot">No adventure cards available</div>
                ) : (
                  adventureRow.map((card) => (
                    <Card
                      key={card.id}
                      card={card}
                      cardDamage={cardDamage}
                      onTake={() => handleTakeFromAdventureRow(card.id)}
                      onDiscard={() => handleDiscardFromAdventureRow(card.id)}
                    />
                  ))
                )}
              </div>
            </div>
            <div className="current-card-area">
              <h3>Current Card</h3>
              {currentCard ? (
                <Card card={currentCard} cardDamage={cardDamage} onTake={handleTakeCurrentCard} onDiscard={handleDiscardCurrentCard} />
              ) : (
                <div className="empty-slot">No card played</div>
              )}
            </div>
            <div className="discard-pile-area">
              <div
                className="clickable"
                onClick={() => setShowDiscardModal(true)}
              >
                <h3>Discard Pile ({discardPile.length})</h3>
                {discardPile.length > 0 ? (
                  <Card card={discardPile[discardPile.length - 1]} cardDamage={cardDamage} />
                ) : (
                  <div className="empty-slot">Empty</div>
                )}
                <p className="click-hint">Click to view all</p>
              </div>
              <button
                className="shuffle-discard-button"
                onClick={handleShuffleDiscardIntoDeck}
                disabled={discardPile.length === 0}
              >
                Shuffle into Deck
              </button>
            </div>
          </div>
          
          <div className={`global-statistics${!isMyTurn ? " highlighted" : ''}`}>
            <div className='opponent'>
              <span className="opponent-label">Opponent:</span>
              <button
                className="opponent-view-btn character-btn"
                onClick={() => setShowOpponentCharacterModal(true)}
              >
                {opponentCharacter ? opponentCharacter.title : 'No Character'}
              </button>
              <button
                className="opponent-view-btn"
                onClick={() => setShowOpponentHandModal(true)}
              >
                Hand: {opponentHand.length}
              </button>
              <span className="opponent-stat damage-stat">Damage: {opponentResources.damage}</span>
              <span className="opponent-stat gold-stat">Gold: {opponentResources.gold}</span>
              <span className="opponent-stat mana-stat">Mana: {opponentResources.mana}</span>
              <span className="opponent-stat">Adventures: {gameState?.adventurePiles?.[opponentId]?.length || 0}</span>
              <button
                className="opponent-view-btn inventory-stat"
                onClick={() => setShowOpponentInventoryModal(true)}
              >
                Inventory: {opponentInventory.length}
              </button>
            </div>
            <div className="turn-indicator">
              <span className={`turn-status ${isMyTurn ? 'my-turn' : 'opponent-turn'}`}>
                {isMyTurn ? "Your Turn" : "Opponent's Turn"}
              </span>
              {isMyTurn && (
                <button className="end-turn-button" onClick={handleEndTurn}>
                  End Turn
                </button>
              )}
            </div>
          </div>

          <div className={`player-section${isMyTurn ? " highlighted" : ''}`}>
            <Hand
              playerId={playerId}
              cards={playerCards}
              deckEmpty={deckEmpty}
              resources={playerResources}
              cardDamage={cardDamage}
            />
          </div>

          <div className={`inventory-section`}>
            <CharacterCard
              playerId={playerId}
              character={playerCharacter}
            />
            <Inventory
              playerId={playerId}
              cards={playerInventory}
              cardDamage={cardDamage}
            />
            <div
              className="adventure-pile-area clickable"
              onClick={() => setShowAdventurePileModal(true)}
            >
              <h3>Your Adventures ({adventurePile.length})</h3>
              {adventurePile.length > 0 ? (
                <Card card={adventurePile[adventurePile.length - 1]} cardDamage={cardDamage} />
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
          cardDamage={cardDamage}
        />
      )}

      {showAdventurePileModal && (
        <AdventurePileModal
          cards={adventurePile}
          onClose={() => setShowAdventurePileModal(false)}
          playerId={playerId}
          cardDamage={cardDamage}
        />
      )}

      {showOpponentHandModal && (
        <OpponentHandModal
          cards={opponentHand}
          opponentId={opponentId}
          onClose={() => setShowOpponentHandModal(false)}
          cardDamage={cardDamage}
        />
      )}

      {showOpponentInventoryModal && (
        <OpponentInventoryModal
          cards={opponentInventory}
          opponentId={opponentId}
          onClose={() => setShowOpponentInventoryModal(false)}
          cardDamage={cardDamage}
        />
      )}

      {showOpponentCharacterModal && (
        <OpponentCharacterModal
          character={opponentCharacter}
          onClose={() => setShowOpponentCharacterModal(false)}
        />
      )}

      {showPeekAdventureModal && (
        <div className="modal-backdrop" onClick={() => setShowPeekAdventureModal(false)}>
          <div className="modal peek-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Top of Adventure Deck</h2>
              <button className="modal-close" onClick={() => setShowPeekAdventureModal(false)}>&times;</button>
            </div>
            <div className="modal-content">
              {topAdventureCard ? (
                <Card card={topAdventureCard} cardDamage={cardDamage} />
              ) : (
                <p className="empty-modal">Adventure deck is empty</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
