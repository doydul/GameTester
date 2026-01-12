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

export const initialAdventureDeck = [
  { title: 'Explore the Cave', cost: 2, description: 'Gain 3 gold and draw a card.' },
  { title: 'Slay the Beast', cost: 4, description: 'Defeat a monster to gain 5 victory points.' },
  { title: 'Rescue the Villager', cost: 3, description: 'Save a villager for 3 victory points and a reward.' },
  { title: 'Find the Treasure', cost: 5, description: 'Discover hidden treasure worth 8 gold.' },
  { title: 'Defend the Town', cost: 4, description: 'Protect the town for 4 victory points.' },
  { title: 'Hunt for Artifacts', cost: 3, description: 'Search for ancient artifacts. Draw 2 cards.' },
  { title: 'Cross the Bridge', cost: 1, description: 'Navigate the treacherous bridge for 2 victory points.' },
  { title: 'Climb the Mountain', cost: 6, description: 'Reach the summit for 10 victory points.' },
  { title: 'Escort the Merchant', cost: 2, description: 'Safely escort for 4 gold reward.' },
  { title: 'Investigate Ruins', cost: 3, description: 'Explore ancient ruins. Gain a random item.' },
  { title: 'Defeat the Bandits', cost: 3, description: 'Clear the road of bandits for 3 victory points.' },
  { title: 'Retrieve the Relic', cost: 5, description: 'Recover a sacred relic for 6 victory points.' },
  { title: 'Map the Forest', cost: 2, description: 'Chart the wilderness. All players draw a card.' },
  { title: 'Negotiate Peace', cost: 4, description: 'Broker a truce for 5 victory points.' },
  { title: 'Gather Supplies', cost: 1, description: 'Stock up on provisions. Gain 2 gold.' },
];

export function createDeck() {
  return initialDeck.map((card, index) => ({
    ...card,
    id: `card-${index}-${Date.now()}`,
  }));
}

export function createAdventureDeck() {
  return initialAdventureDeck.map((card, index) => ({
    ...card,
    id: `adventure-${index}-${Date.now()}`,
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
