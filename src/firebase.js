import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, get } from 'firebase/database';
import { createDeck, shuffleDeck } from './cardData.js';

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
  const deck = shuffleDeck(createDeck());
  const initialState = {
    deck,
    hands: {
      player1: [],
      player2: [],
    },
    currentCard: null,
    discardPile: [],
  };
  await set(getGameRef(), initialState);
}

export async function drawCard(playerId) {
  const gameRef = getGameRef();
  const snapshot = await get(gameRef);
  const state = snapshot.val();

  if (!state || state.deck.length === 0) {
    return;
  }

  const [drawnCard, ...remainingDeck] = state.deck;
  const updatedHand = [...(state.hands?.[playerId] || []), drawnCard];

  await set(gameRef, {
    ...state,
    deck: remainingDeck,
    hands: {
      ...state.hands,
      [playerId]: updatedHand,
    },
  });
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

  const discardPile = state.discardPile || [];
  const updatedDiscardPile = state.currentCard
    ? [...discardPile, state.currentCard]
    : discardPile;

  await set(gameRef, {
    ...state,
    hands: {
      ...state.hands,
      [playerId]: updatedHand,
    },
    currentCard: playedCard,
    discardPile: updatedDiscardPile,
  });
}
