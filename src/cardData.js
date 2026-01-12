export const initialDeck = [
  { title: 'Fireball', cost: 3, description: 'Deal 6 damage to target creature or player.' },
  { title: 'Lightning Bolt', cost: 1, description: 'Deal 3 damage to any target.' },
  { title: 'Healing Wave', cost: 2, description: 'Restore 5 health to target creature or player.' },
  { title: 'Shield Wall', cost: 2, description: 'Prevent the next 4 damage to target creature.' },
  { title: 'Giant Growth', cost: 1, description: 'Target creature gets +3/+3 until end of turn.' },
  { title: 'Mind Control', cost: 5, description: 'Gain control of target creature.' },
  { title: 'Counterspell', cost: 2, description: 'Counter target spell.' },
  { title: 'Dark Ritual', cost: 1, description: 'Add 3 mana to your mana pool.' },
  { title: 'Goblin Warrior', cost: 2, description: 'A fierce goblin fighter. 2/2 creature.' },
  { title: 'Stone Golem', cost: 4, description: 'A sturdy construct. 4/4 creature with defender.' },
  { title: 'Phoenix', cost: 5, description: 'Flying. When Phoenix dies, return it to your hand. 3/3 creature.' },
  { title: 'Assassin', cost: 3, description: 'Deathtouch. 1/1 creature.' },
  { title: 'Dragon', cost: 7, description: 'Flying. Deal 2 damage when entering play. 5/5 creature.' },
  { title: 'Forest Elf', cost: 1, description: 'Add 1 mana when tapped. 1/1 creature.' },
  { title: 'Holy Knight', cost: 4, description: 'First strike, lifelink. 3/3 creature.' },
  { title: 'Earthquake', cost: 4, description: 'Deal 3 damage to all creatures.' },
  { title: 'Draw Power', cost: 2, description: 'Draw 2 cards.' },
  { title: 'Mana Surge', cost: 0, description: 'Add 2 mana to your pool. Discard a card.' },
  { title: 'Teleport', cost: 3, description: 'Return target creature to its owner\'s hand.' },
  { title: 'Enchant Armor', cost: 2, description: 'Target creature gets +0/+4.' },
];

export function createDeck() {
  return initialDeck.map((card, index) => ({
    ...card,
    id: `card-${index}-${Date.now()}`,
  }));
}

export function shuffleDeck(deck) {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
