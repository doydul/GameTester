export const initialActionDeck = [
  { type: 'Action', title: "Skullduggery", description: "Choose a player and take 2 Gold from them", count: 4 },
  { type: 'Action', title: "Sneaky Stab", description: "Take an adventure, reducing it's Strength by 1", count: 4 },
  { type: 'Action', title: "Scout", description: "Discard up to 2 leftmost Adventures from the row and replace them", count: 4 },
  { type: 'Action', title: "Meditate", description: "Gain 2 Mana", count: 3 },
  { type: 'Action', title: "Espionage", description: "Choose a player. Look at their hand and take 1 card", count: 3 },
  { type: 'Action', title: "Sabotage", description: "Choose a player to lose 1 Health, 1 Gold, and discard 1 Card", count: 3 },
  { type: 'Action', title: "Scheme", description: "Draw 3 cards, take 1 of them and discard the others", count: 4 },
  { type: 'Action', title: "Bribe", description: "Choose a player and take one of their items by giving them Gold equal to it's cost", count: 2 },
  
  { type: 'Item', title: "Trusty Dagger", cost: '2 Gold', description: "1 Strength", count: 2 },
  { type: 'Item', title: "Battle Axe", cost: '5 Gold', description: "2 Strength", count: 2 },
  { type: 'Item', title: "Sword", cost: '10 Gold', description: "3 Strength", count: 1 },
  
  { type: 'Item', title: "Magic Crystal", cost: '2 Gold', description: "1 Max Mana", count: 2 },
  { type: 'Item', title: "Arcane Amulet", cost: '5 Gold', description: "2 Max Mana", count: 2 },
  { type: 'Item', title: "Wizard Staff", cost: '10 Gold', description: "3 Max Mana", count: 1 },
  
  { type: 'Item', title: "Leather Belt", cost: '2 Gold', description: "1 Max Health", count: 2 },
  { type: 'Item', title: "Helm", cost: '5 Gold', description: "2 Max Health", count: 2 },
  { type: 'Item', title: "Cuirass", cost: '8 Gold', description: "3 Max Health", count: 1 },
  
  { type: 'Item', title: "Fleet Footed Boots", cost: '3 Gold', description: "1 Stamina", count: 2 },
  { type: 'Item', title: "Rogue's Cowl", cost: '6 Gold', description: "2 Stamina", count: 2 },
  
  // { type: 'Item', title: "Side Quest", cost: '1 Gold', description: "When claiming an Adventure, discard and gain 3 Gold. Discard on rest", count: 3 },
  { type: 'Item', title: "Full Plate", cost: '5 Gold', description: "You take 1 less Damage from other players", count: 1 },
  { type: 'Item', title: "Decoy", cost: '2 Gold', description: "If one of your other Items would be destroyed, this Item is destroyed instead", count: 2 },
  { type: 'Item', title: "Sturdy Lockbox", cost: '4 Gold', description: "Your Gold cannot be taken by other players", count: 2 },
  
  { type: 'Item', title: "Spell Book", cost: '4 Gold', description: "Exhaust: tuck a Spell from your hand under this Item. You may play Spells from your spell book, and they do not get discard when you do. If this Item is destroyed, the Spells are discarded. Refreshes on rest", durability: 1, count: 2 },
  { type: 'Item', title: "Chaos Orb", cost: '6 Gold', description: "Exhaust: choose a player and deal them 2 Damage. Refreshes on rest", durability: 1, count: 1 },
  { type: 'Item', title: "Looking Glass", cost: '2 Gold', description: "Exhaust: Discard leftmost card from the Adventure row. Refreshes on rest", durability: 1, count: 2 },
  { type: 'Item', title: "Rod of Power", cost: '5 Gold', description: "Exhaust: gain 2 Mana. Refreshes on rest", durability: 1, count: 2 },
  { type: 'Item', title: "Faerie in a Bottle", cost: '4 Gold', description: "Exhaust: gain 2 Health. Refreshes on rest", durability: 1, count: 2 },
  { type: 'Item', title: "Magic Goose", cost: '2 Gold', description: "Exhaust: gain 1 Gold. Refreshes on rest", durability: 1, count: 2 },
  
  { type: 'Item', victoryPoints: 2, title: "Trophy", cost: '6 Gold', description: "2 VPs. Doesn't count towards your inventory size limit", count: 2 },
  { type: 'Item', victoryPoints: 3, title: "Trophy", cost: '10 Gold', description: "3 VPs. Doesn't count towards your inventory size limit", count: 2 },
  
  { type: 'Spell', title: "Magic Missile", cost: '1/2 Mana', description: "Take an adventure, reducing it's Strength by 2/4", count: 4 },
  { type: 'Spell', title: "Divination", cost: '1/2/3 Mana', description: "Draw 2/4/7 Cards", count: 4 },
  { type: 'Spell', title: "Zap", cost: '1/2/3/4 Mana', description: "Choose a player and them Deal 1/2/3/4 Damage", count: 4 },
  { type: 'Spell', title: "Cure Wounds", cost: '1/2/3 Mana', description: "Gain 2/4/7 Health", count: 4 },
  { type: 'Spell', title: "Mana Drain", cost: '2 Mana', description: "Choose a player and take all their Mana", count: 3 },
  { type: 'Spell', title: "Reflect", cost: '2 Mana', description: "Reaction: when another player is instructed to 'choose a player', and they choose you - change the target to any player", count: 3 },
  { type: 'Spell', title: "Transmute", cost: '2 Mana', description: "Choose a player and Destroy one of their Items. They receive Gold equal to half it's value, rounded down", count: 3 },
  { type: 'Spell', title: "Meteor Storm", cost: '2/3 Mana', description: "Deal 2/3 Damage to all other players, and they each discard 2/3 Cards", count: 2 },
  { type: 'Spell', title: "Brain Rot", cost: '2/4 Mana', description: "Choose a player and make them discard an Adventure worth 1-2/1-4 VPs", count: 2 },
];

export const initialSpellDeck = [
];

export const initialItemDeck = [
];

export const initialAdventureDeck = [
  { type: 'Adventure', victoryPoints: -1, title: "Loot & Pillage", cost: '6 Strength', description: "-1 VP, 2 Gold & take 2 Gold from each other player", count: 2 },
  { type: 'Adventure', victoryPoints: -1, title: "Obtain a witch's curse", cost: '5 Strength, 3 Spell Cards, 2 Mana', description: "-1 VP, -1 stamina, -1 strength, -1 max mana. When you claim this Adventure, choose a player. That player gets this Adventure", count: 2 },
  { type: 'Adventure', victoryPoints: -1, title: "Secret Passage", cost: '7 Cards, 4 Mana', description: "-1 VP. Take another Adventure from the row without paying it's cost", count: 2 },
  { type: 'Adventure', victoryPoints: -1, title: "Unleash Acid Rain", cost: '5 Strength, 1 Mana', description: "-2 VP. Destroy 1 Item from ALL players (including yourself)", count: 2 },
  
  { type: 'Adventure', victoryPoints: 0, title: "Breach the Adamant Vault", cost: '9 Strength, 3 Action Cards, 2 Mana', description: "Play an Item from your hand without paying it's cost", count: 2 },
  
  { type: 'Adventure', victoryPoints: 0, title: "Visit a Small Town", cost: '3 Item Cards, 2 Cards', description: "5 Gold", count: 4 },
  { type: 'Adventure', victoryPoints: 0, title: "Raid a Monster Camp", cost: '8 Strength', description: "5 Gold", count: 6 },
  { type: 'Adventure', victoryPoints: 0, title: "Open a Sealed Vault", cost: '2 Strength, 4 Mana', description: "5 Gold", count: 6 },
  { type: 'Adventure', victoryPoints: 0, title: "Explore a Dungeon", cost: '3 Strength, 3 Action Cards', description: "4 Gold", count: 6 },
  
  { type: 'Adventure', victoryPoints: 1, title: "Mend a Fractured Leyline", cost: '4 Strength, 2 Cards', description: "1 VP, 2 Gold, take all Mana from all other players", count: 2 },
  { type: 'Adventure', victoryPoints: 1, title: "Train with a Harsh Master", cost: '5 Damage, 4 Gold', description: "1 VP, Draw 2, +2 Strength", count: 2 },
  { type: 'Adventure', victoryPoints: 1, title: "Train with a Ninja Warrior", cost: '3 Action Cards, 4 Gold', description: "1 VP, Heal 2, +1 Stamina", count: 2 },
  { type: 'Adventure', victoryPoints: 1, title: "Train at the School of Wizardry", cost: '3 Mana, 3 Spell Cards', description: "1 VP, 2 Gold, +1 Max Mana", count: 2 },
  
  { type: 'Adventure', victoryPoints: 3, title: "Defeat a Mighty Beast", cost: '10 Strength', description: "3 VPs, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 3, title: "Combat a Ghostly Horror", cost: '8 Strength, 3 Mana', description: "3 VPs, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 3, title: "Hatch a Wyrm Egg", cost: '4 Strength, 5 Mana', description: "3 VPs, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 3, title: "Delve Into the Minataur's Labyrinth", cost: '5 Strength, 4 Action Cards', description: "3 VPs, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 3, title: "Solve a Puzzle Dungeon", cost: '4 Strength, 3 Action Cards, 3 Mana', description: "3 VPs, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 3, title: "Broker Peace between Warring tribes", cost: '8 Strength, 3 Action Cards', description: "3 VPs, 4 Gold", count: 2 },
  
  { type: 'Adventure', victoryPoints: 7, title: "Vanguish a Dragon", cost: '12 Strength', description: "7 VPs, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 7, title: "Close a Rift Between Worlds", cost: '5 Strength, 6 Mana', description: "7 VPs, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 7, title: "Beat Death at Chess", cost: '5 Strength, 5 Action Cards', description: "7 VPs, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 7, title: "Become the Chosen One", cost: '4 Mana, 4 Action Cards, 10 Strength', description: "7 VPs, 4 Gold", count: 2 },
  
  // { type: 'Adventure', victoryPoints: 1, title: "Investigate the Sunken Catacombs", cost: '2 Damage', description: "1 Victory Point, 3 Gold, 1 Card from deck or discard pile", count: 3 },
  // { type: 'Adventure', victoryPoints: 1, title: "Clear the Obsidian Watchtower", cost: '6 Strength', description: "1 Victory Point, 2 Mana, 2 Gold", count: 3 },
  // { type: 'Adventure', victoryPoints: 1, title: "Clear a Goblin Nest", cost: '7 Strength', description: "1 Victory Point, 6 Gold", count: 3 },
  // { type: 'Adventure', victoryPoints: 1, title: "Raid an Orc Camp", cost: '10 Strength', description: "1 Victory Point, 8 Gold", count: 3 },
  // { type: 'Adventure', victoryPoints: 2, title: "Trial of the Astral Guardians", cost: '13 Strength', description: "2 Victory Point, 3 Mana, 4 Gold", count: 2 },
  // { type: 'Adventure', victoryPoints: 4, title: "Slay an Ogre Chief", cost: '13 Strength', description: "4 Victory Point, 4 Gold", count: 2 },
  // { type: 'Adventure', victoryPoints: 5, title: "Hunt a Dire Basilisk", cost: '16 Strength', description: "5 Victory Point, 6 Gold", count: 2 },
  // { type: 'Adventure', victoryPoints: 7, title: "Bring Back the Head of a Dragon", cost: '19 Strength', description: "7 Victory Point", count: 1 },
  // { type: 'Adventure', victoryPoints: 2, title: "Mend a Fractured Leyline", cost: '2 Damage, 2 Cards', description: "2 Victory Point, 1 Gold, 3 Mana", count: 2 },
  // { type: 'Adventure', victoryPoints: 4, title: "Slay the Ashen Wyrn", cost: '11 Strength, 2 Damage, 1 Mana', description: "4 Victory Points, 5 Gold", count: 1 },
  // { type: 'Adventure', victoryPoints: 6, title: "Brave the Void Between Worlds", cost: '10 Strength, Discard Hand', description: "6 Victory Points, 3 Gold, 1 Card", count: 1 },
  // { type: 'Adventure', victoryPoints: 7, title: "Raise an Army for the Final Crusade", cost: '8 Strength, 1 Card, 14 Gold', description: "7 Victory Points, 2 Damage to other players", count: 1 },
  // { type: 'Adventure', victoryPoints: 2, title: "Breach the Adamant Vault", cost: '5 Strength, 4 Cards, 2 Mana', description: "2 Victory Points, 12 Gold", count: 1 },
  
  // { type: 'Adventure', victoryPoints: 1, title: "Investigate the Sunken Catacombs", cost: '2 Damage', description: "1 Victory Point, 3 Gold, 1 Card from deck or discard pile", count: 3 },
  // { type: 'Adventure', victoryPoints: 1, title: "Clear the Obsidian Watchtower", cost: '6 Strength', description: "1 Victory Point, 2 Mana, 2 Gold", count: 3 },
  // { type: 'Adventure', victoryPoints: 1, title: "Clear a Goblin Nest", cost: '7 Strength', description: "1 Victory Point, 5 Gold", count: 3 },
  // { type: 'Adventure', victoryPoints: 1, title: "Raid an Orc Camp", cost: '10 Strength', description: "1 Victory Point, 8 Gold", count: 3 },
  // { type: 'Adventure', victoryPoints: 2, title: "Trial of the Astral Guardians", cost: '13 Strength', description: "2 Victory Point, 3 Mana, 4 Gold", count: 2 },
  // { type: 'Adventure', victoryPoints: 4, title: "Slay an Ogre Chief", cost: '13 Strength', description: "4 Victory Point, 4 Gold", count: 2 },
  // { type: 'Adventure', victoryPoints: 5, title: "Hunt a Dire Basilisk", cost: '16 Strength', description: "5 Victory Point, 6 Gold", count: 2 },
  // { type: 'Adventure', victoryPoints: 8, title: "Discover the Codex of Eternity", cost: '19 Strength', description: "8 Victory Points, 4 Mana", count: 1 },
  // { type: 'Adventure', victoryPoints: 7, title: "Bring Back the Head of a Dragon", cost: '19 Strength', description: "7 Victory Point", count: 1 },
  
  
  // { type: 'Adventure', victoryPoints: 1, title: "Visit the Grove of Kindly Fey", cost: '1 Mana', description: "1 Victory Point, all players heal 3 Damage", count: 2 },
  // { type: 'Adventure', victoryPoints: 0, title: "Mercenary Contract", cost: '5 Strength', description: "2 Gold", count: 2 },
  // { type: 'Adventure', victoryPoints: 1, title: "The Sunken Catacombs", cost: '2 Cards, 2 Damage', description: "1 Victory Point, 1 Gold, take 2 from discard pile", count: 2 },
  // { type: 'Adventure', victoryPoints: 1, title: "Obsidian Watchtower", cost: '3 Strength, 2 Mana', description: "1 Victory Point, 2 Cards, 3 Gold, 1 Mana", count: 2 },
  // { type: 'Adventure', victoryPoints: 2, title: "Hunt the Dire Basilisk", cost: '6 Strength, 1 Mana', description: "2 Victory Point, 3 Gold", count: 2 },
  // { type: 'Adventure', victoryPoints: 2, title: "Face a stampede of War Beasts", cost: '7 Strength, 3 Damage', description: "2 Victory Point, 2 Damage to other players", count: 2 },
  // { type: 'Adventure', victoryPoints: 2, title: "Mend a Fractured Leyline", cost: '2 Damage, 2 Cards', description: "2 Victory Point, 1 Gold, 3 Mana", count: 2 },
  // { type: 'Adventure', victoryPoints: 3, title: "Trial of the Astral Guardians", cost: '5 Strength, 1 Card, 2 Mana', description: "3 Victory Point, 3 Gold, 2 Card", count: 2 },
  
  // { type: 'Adventure', victoryPoints: 4, title: "Slay the Ashen Wyrn", cost: '11 Strength, 2 Damage, 1 Mana', description: "4 Victory Points, 5 Gold", count: 1 },
  // { type: 'Adventure', victoryPoints: 5, title: "Encounter the Titan Beneath the Hills", cost: '14 Strength, 3 Cards', description: "5 Victory Points, 2 Gold, 2 Mana, 1 Damage to other players", count: 1 },
  // { type: 'Adventure', victoryPoints: 2, title: "Breach the Adamant Vault", cost: '5 Strength, 4 Cards, 2 Mana', description: "2 Victory Points, 12 Gold", count: 1 },
  // { type: 'Adventure', victoryPoints: 7, title: "Raise an Army for the Final Crusade", cost: '8 Strength, 1 Card, 14 Gold', description: "7 Victory Points, 2 Damage to other players", count: 1 },
  // { type: 'Adventure', victoryPoints: 5, title: "Discover the Codex of Eternity", cost: '5 Strength, 2 Cards', description: "5 Victory Points, 2 Gold, 8 Mana, discard all Items", count: 1 },
  // { type: 'Adventure', victoryPoints: 6, title: "Brave the Void Between Worlds", cost: '10 Strength, Discard Hand', description: "6 Victory Points, 3 Gold, 1 Card", count: 1 },
];

export const characters = [
  { type: 'Character', title: "Warrior", stats: "Strength: 4\nMax Health: 8\nMana: 0, Stamina: 5", ability: "1 Starting Gold", count: 1 },
  { type: 'Character', title: "Rogue", stats: "Strength: 2\nMax Health: 7\nMana: 2, Stamina: 5", ability: "1 Starting Gold", count: 1 },
  { type: 'Character', title: "Wizard", stats: "Strength: 1\nMax Health: 6\nMana: 3, Stamina: 5", ability: "1 Starting Gold", count: 1 },
  { type: 'Character', title: "Fighter", stats: "Strength: 3\nMax Health: 8\nMana: 1, Stamina: 5", ability: "1 Starting Gold", count: 1 },
  { type: 'Character', title: "Arcanist", stats: "Strength: 1\nMax Health: 6\nMana: 3, Stamina: 5", ability: "1 Starting Gold", count: 1 },
  { type: 'Character', title: "Ranger", stats: "Strength: 2\nMax Health: 7\nMana: 2, Stamina: 5", ability: "1 Starting Gold", count: 1 },
]

export function createActionDeck() {
  const deck = [];
  const things = {};
  initialActionDeck.forEach((card, index) => {
    for (let i = 0; i < card.count; i++) {
      things[card.type] ||= 0;
      things[card.type]++;
      deck.push({
        ...card,
        id: `action-${index}-${i}-${Date.now()}`,
        originDeck: 'action',
      });
    }
  });
  console.log(things);
  return deck;
}

export function createSpellDeck() {
  const deck = [];
  initialSpellDeck.forEach((card, index) => {
    for (let i = 0; i < card.count; i++) {
      deck.push({
        ...card,
        id: `spell-${index}-${i}-${Date.now()}`,
        originDeck: 'spell',
      });
    }
  });
  return deck;
}

export function createItemDeck() {
  const deck = [];
  initialItemDeck.forEach((card, index) => {
    for (let i = 0; i < card.count; i++) {
      deck.push({
        ...card,
        id: `item-${index}-${i}-${Date.now()}`,
        originDeck: 'item',
      });
    }
  });
  return deck;
}

export function createAdventureDeck() {
  const deck = [];
  initialAdventureDeck.forEach((card, index) => {
    for (let i = 0; i < card.count; i++) {
      deck.push({
        ...card,
        id: `card-${index}-${i}-${Date.now()}`,
      });
    }
  });
  return deck;
}

export function shuffleDeck(deck) {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getRandomCharacter() {
  const index = Math.floor(Math.random() * characters.length);
  return {
    ...characters[index],
    id: `character-${index}-${Date.now()}`,
  };
}
