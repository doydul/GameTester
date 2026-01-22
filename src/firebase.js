import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, get } from 'firebase/database';
import { createActionDeck, createSpellDeck, createItemDeck, createAdventureDeck, shuffleDeck, getRandomCharacter } from './cardData.js';

const firebaseConfig = {
  apiKey: "AIzaSyAm8uZMkpR9mNsWetQ4Amn9oskeLn2YFUk",
  authDomain: "gametester-36468.firebaseapp.com",
  databaseURL: "https://gametester-36468-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gametester-36468",
  storageBucket: "gametester-36468.firebasestorage.app",
  messagingSenderId: "40537010714",
  appId: "1:40537010714:web:68c8c0e0a573ebcc6817a3"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const GAME_ID = 'game1';

export function getGameRef() {
  return ref(database, `games/${GAME_ID}`);
}

export function subscribeToGameState(callback) {
  const gameRef = getGameRef();

  const unsubscribe = onValue(gameRef, (snapshot) => {
    callback(snapshot.val());
  });
  return unsubscribe;
}

export async function startNewGame() {
  const actionDeck = shuffleDeck(createActionDeck());
  const spellDeck = shuffleDeck(createSpellDeck());
  const itemDeck = shuffleDeck(createItemDeck());
  const adventureDeck = shuffleDeck(createAdventureDeck());
  const initialState = {
    actionDeck,
    spellDeck,
    itemDeck,
    hands: {
      player1: [],
      player2: [],
    },
    inventories: {
      player1: [],
      player2: [],
    },
    characters: {
      player1: null,
      player2: null,
    },
    currentCard: null,
    actionDiscardPile: [],
    spellDiscardPile: [],
    itemDiscardPile: [],
    adventureDeck,
    adventureRow: [],
    adventurePiles: {
      player1: [],
      player2: [],
    },
    resources: {
      player1: { damage: 7, gold: 4, mana: 2, maxHealth: 7, maxMana: 2, stamina: 5, strength: 2 },
      player2: { damage: 7, gold: 4, mana: 2, maxHealth: 7, maxMana: 2, stamina: 5, strength: 2 },
    },
    cardDamage: {},
    currentTurn: 'player1',
  };
  await set(getGameRef(), initialState);
}

export async function updateResource(playerId, resourceType, delta) {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();

  if (!state) return;

  const currentValue = state.resources?.[playerId]?.[resourceType] ?? 0;
  const newValue = Math.max(0, currentValue + delta);

  await set(gameRef, {
    ...state,
    resources: {
      ...state.resources,
      [playerId]: {
        ...state.resources?.[playerId],
        [resourceType]: newValue,
      },
    },
  });
}

export async function drawCard(playerId, deckType) {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();

  const deckKey = `${deckType}Deck`;
  const deck = state?.[deckKey];

  if (!state || !deck || deck.length === 0) {
    return;
  }

  const [drawnCard, ...remainingDeck] = deck;
  const updatedHand = [...(state.hands?.[playerId] || []), drawnCard];

  await set(gameRef, {
    ...state,
    [deckKey]: remainingDeck,
    hands: {
      ...state.hands,
      [playerId]: updatedHand,
    },
  });
}

function getDiscardPileKey(cardType) {
  if (cardType === 'Spell') return 'spellDiscardPile';
  if (cardType === 'Item' || cardType === 'Item - Weapon') return 'itemDiscardPile';
  return 'actionDiscardPile';
}

export async function playCard(playerId, cardId) {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();

  if (!state) return;

  const playerHand = state.hands?.[playerId] || [];
  const cardIndex = playerHand.findIndex(card => card.id === cardId);

  if (cardIndex === -1) return;

  const [playedCard] = playerHand.splice(cardIndex, 1);
  const updatedHand = [...playerHand];

  // If there's a current card, move it to the appropriate discard pile
  let updatedState = { ...state };
  if (state.currentCard) {
    const discardKey = getDiscardPileKey(state.currentCard.type);
    const discardPile = state[discardKey] || [];
    updatedState[discardKey] = [...discardPile, state.currentCard];
  }

  await set(gameRef, {
    ...updatedState,
    hands: {
      ...state.hands,
      [playerId]: updatedHand,
    },
    currentCard: playedCard,
  });
}

export async function takeFromDiscard(playerId, cardId, deckType) {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();

  if (!state) return;

  const discardKey = `${deckType}DiscardPile`;
  const discardPile = state[discardKey] || [];
  const cardIndex = discardPile.findIndex(card => card.id === cardId);

  if (cardIndex === -1) return;

  const [takenCard] = discardPile.splice(cardIndex, 1);
  const updatedDiscardPile = [...discardPile];
  const updatedHand = [...(state.hands?.[playerId] || []), takenCard];

  await set(gameRef, {
    ...state,
    hands: {
      ...state.hands,
      [playerId]: updatedHand,
    },
    [discardKey]: updatedDiscardPile,
  });
}

export async function takeCurrentCard(playerId) {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();

  if (!state || !state.currentCard) return;

  const updatedHand = [...(state.hands?.[playerId] || []), state.currentCard];

  await set(gameRef, {
    ...state,
    hands: {
      ...state.hands,
      [playerId]: updatedHand,
    },
    currentCard: null,
  });
}

export async function discardFromHand(playerId, cardId) {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();

  if (!state) return;

  const playerHand = state.hands?.[playerId] || [];
  const cardIndex = playerHand.findIndex(card => card.id === cardId);

  if (cardIndex === -1) return;

  const [discardedCard] = playerHand.splice(cardIndex, 1);
  const updatedHand = [...playerHand];
  const discardKey = getDiscardPileKey(discardedCard.type);
  const updatedDiscardPile = [...(state[discardKey] || []), discardedCard];

  await set(gameRef, {
    ...state,
    hands: {
      ...state.hands,
      [playerId]: updatedHand,
    },
    [discardKey]: updatedDiscardPile,
  });
}

export async function discardCurrentCard() {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();

  if (!state || !state.currentCard) return;

  const discardKey = getDiscardPileKey(state.currentCard.type);
  const updatedDiscardPile = [...(state[discardKey] || []), state.currentCard];

  await set(gameRef, {
    ...state,
    currentCard: null,
    [discardKey]: updatedDiscardPile,
  });
}

export async function drawToAdventureRow() {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();

  if (!state || !state.adventureDeck || state.adventureDeck.length === 0) return;

  const [drawnCard, ...remainingDeck] = state.adventureDeck;
  const updatedRow = [...(state.adventureRow || []), drawnCard];

  await set(gameRef, {
    ...state,
    adventureDeck: remainingDeck,
    adventureRow: updatedRow,
  });
}

export async function discardFromAdventureCardRow(cardId) {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();

  if (!state || !state.adventureRow || state.adventureRow.length <= 0) return;

  const cardIndex = state.adventureRow.findIndex(card => card.id === cardId);

  if (cardIndex === -1) return;

  const [discardedCard] = state.adventureRow.splice(cardIndex, 1);
  const updatedRow = [...state.adventureRow];
  const updatedAdventureDeck = [...(state.adventureDeck || []), discardedCard];

  await set(gameRef, {
    ...state,
    adventureRow: updatedRow,
    adventureDeck: updatedAdventureDeck
  });
}

export async function discardFromAdventureCardPile(playerId, cardId) {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();
  
  if (!state || !state.adventurePiles[playerId] || state.adventurePiles[playerId].length <= 0) return;

  const cardIndex = state.adventurePiles[playerId].findIndex(card => card.id === cardId);
  
  if (cardIndex === -1) return;
  
  const [discardedCard] = state.adventurePiles[playerId].splice(cardIndex, 1);
  const updatedAdventureCardPile = [...state.adventurePiles[playerId]];
  const updatedAdventureDeck = [...(state.adventureDeck || []), discardedCard];

  await set(gameRef, {
    ...state,
    adventureDeck: updatedAdventureDeck,
    adventurePiles: {
      ...(state.adventurePiles || {}),
      [playerId]: updatedAdventureCardPile,
    },
  });
}

export async function takeFromAdventureRow(playerId, cardId) {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();

  if (!state) return;

  const adventureRow = state.adventureRow || [];
  const cardIndex = adventureRow.findIndex(card => card.id === cardId);

  if (cardIndex === -1) return;

  const [takenCard] = adventureRow.splice(cardIndex, 1);
  const updatedRow = [...adventureRow];
  const updatedPile = [...(state.adventurePiles?.[playerId] || []), takenCard];

  await set(gameRef, {
    ...state,
    adventureRow: updatedRow,
    adventurePiles: {
      ...state.adventurePiles,
      [playerId]: updatedPile,
    },
  });
}

export async function shuffleDiscardIntoDeck(deckType) {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();

  if (!state) return;

  const discardKey = `${deckType}DiscardPile`;
  const deckKey = `${deckType}Deck`;
  const discardPile = state[discardKey] || [];
  if (discardPile.length === 0) return;

  const currentDeck = state[deckKey] || [];
  const combinedDeck = shuffleDeck([...currentDeck, ...discardPile]);

  await set(gameRef, {
    ...state,
    [deckKey]: combinedDeck,
    [discardKey]: [],
  });
}

export async function moveToInventory(playerId, cardId) {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();

  if (!state) return;

  const playerHand = state.hands?.[playerId] || [];
  const cardIndex = playerHand.findIndex(card => card.id === cardId);

  if (cardIndex === -1) return;

  const [movedCard] = playerHand.splice(cardIndex, 1);
  const updatedHand = [...playerHand];
  const updatedInventory = [...(state.inventories?.[playerId] || []), movedCard];

  await set(gameRef, {
    ...state,
    hands: {
      ...state.hands,
      [playerId]: updatedHand,
    },
    inventories: {
      ...state.inventories,
      [playerId]: updatedInventory,
    },
  });
}

export async function discardFromInventory(playerId, cardId) {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();

  if (!state) return;

  const playerInventory = state.inventories?.[playerId] || [];
  const cardIndex = playerInventory.findIndex(card => card.id === cardId);

  if (cardIndex === -1) return;

  const [discardedCard] = playerInventory.splice(cardIndex, 1);
  const updatedInventory = [...playerInventory];
  const discardKey = getDiscardPileKey(discardedCard.type);
  const updatedDiscardPile = [...(state[discardKey] || []), discardedCard];

  await set(gameRef, {
    ...state,
    inventories: {
      ...state.inventories,
      [playerId]: updatedInventory,
    },
    [discardKey]: updatedDiscardPile,
  });
}

export async function drawRandomCharacter(playerId) {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();

  if (!state) return;

  const character = getRandomCharacter();

  await set(gameRef, {
    ...state,
    characters: {
      ...state.characters,
      [playerId]: character,
    },
  });
}

export async function updateCardDamage(cardId, delta) {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();

  if (!state) return;

  const currentDamage = state.cardDamage?.[cardId] ?? 0;
  const newDamage = Math.max(0, currentDamage + delta);

  await set(gameRef, {
    ...state,
    cardDamage: {
      ...state.cardDamage,
      [cardId]: newDamage,
    },
  });
}

export async function endTurn() {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();

  if (!state) return;

  const nextTurn = state.currentTurn === 'player1' ? 'player2' : 'player1';

  await set(gameRef, {
    ...state,
    currentTurn: nextTurn,
  });
}
