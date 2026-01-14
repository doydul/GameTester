export const initialDeck = [
  // Actions
  { type: 'Action', title: "Skullduggery", description: "Gain 2 Gold", count: 5 },
  { type: 'Action', title: "Hard Labour", cost: '2 Damage', description: "Gain 3 Gold", count: 4 },
  { type: 'Action', title: "Meditation", description: "Gain 1 Mana", count: 4 },
  { type: 'Action', title: "Attack", description: "Fight another player. For each point the winner wins by (to a maximum of 5), they may deal 1 Damage or take 1 Gold from the loser", count: 3 },
  { type: 'Action', title: "Sneaky Stab", description: "Reaction: add 2 to Strength", count: 5 },
  { type: 'Action', title: "Scout", description: "Discard up to 2 Adventures from the row and replace them", count: 4 },
  { type: 'Action', title: "Maintenance", description: "Discard all Damage markers from 1 Weapon", count: 3 },
  { type: 'Action', title: "Scavenging", description: "Take 1 Card from the discard pile", count: 3 },
  { type: 'Action', title: "Brilliancy", description: "Draw 2 Cards", count: 3 },
  
  // Items
  { type: 'Item', title: "Rogue's Cowl", cost: '10 Gold', description: "Draw 1 extra Card at start of turn", count: 2 },
  { type: 'Item', title: "wizard's robe", cost: '12 Gold', description: "Gain 1 Mana at start of turn", count: 2 },
  { type: 'Item', title: "Thief's Tools", cost: '4 Gold', description: "When scheming, you may draw Cards from the deck or discard pile", count: 2 },
  { type: 'Item', title: "Hidden Weapons", cost: '6 Gold', description: "When you play an Action card other than 'Attack', double it's rewards", count: 2 },
  { type: 'Item', title: "", cost: '2 Gold', description: "+2 max hand size", count: 3 },
  { type: 'Item', title: "Magic Crystal", cost: '2 Gold', description: "+1 max Mana", count: 3 },
  { type: 'Item', title: "Arcane Amulet", cost: '4 Gold', description: "+2 max Mana", count: 2 },
  { type: 'Item', title: "Belt of Strength", cost: '3 Gold', description: "+1 Strength", count: 2 },
  { type: 'Item', title: "Leather Jerkin", cost: '2 Gold', description: "+2 max hp", count: 3 },
  { type: 'Item', title: "Full Plate", cost: '4 Gold', description: "+4 max hp", count: 2 },
  { type: 'Item', title: "Potion of Healing", cost: '5 Gold', description: "Reaction: after taking damage, discard this Item to heal damage equal to half your max HP (rounded down). NB: this happens before checking to see if you're dead", count: 2 },
  
  // Weapons
  { type: 'Item - Weapon', title: "Dagger", cost: '2 Gold', description: "2 Strength", durability: 2, count: 3 },
  { type: 'Item - Weapon', title: "Sword", cost: '4 Gold', description: "3 Strength", durability: 2, count: 3 },
  { type: 'Item - Weapon', title: "Great Axe", cost: '8 Gold', description: "6 Strength, double handed", durability: 2, count: 3 },
  { type: 'Item - Weapon', title: "Battle Axe", cost: '8 Gold', description: "5 Strength", durability: 2, count: 3 },
  { type: 'Item - Weapon', title: "Bastard Sword", cost: '10 Gold', description: "6 Strength", durability: 2, count: 2 },
  { type: 'Item - Weapon', title: "Claymore", cost: '12 Gold', description: "7 Strength", durability: 2, count: 2 },
  { type: 'Item - Weapon', title: "Falcon Blade", cost: '14 Gold', description: "8 Strength", durability: 2, count: 2 },
  { type: 'Item - Weapon', title: "Demon Edge", cost: '16 Gold', description: "9 Strength", durability: 2, count: 1 },
  { type: 'Item - Weapon', title: "Reaver", cost: '19 Gold', description: "10 Strength", durability: 2, count: 1 },
  { type: 'Item - Weapon', title: "Heavenly Halberd", cost: '22 Gold', description: "11 Strength", durability: 2, count: 1 }, 
  { type: 'Item - Weapon', title: "Scythe of Vyse", cost: '25 Gold', description: "12 Strength, passive: +1 max Mana", durability: 2, count: 1 },
  { type: 'Item - Weapon', title: "Abyssal Blade", cost: '28 Gold', description: "13 Strength", durability: 2, count: 1 },
  
  // Spells
  { type: 'Spell', title: "Fire Bolt", cost: '1/2/3/4 Mana', description: "Reaction: add 3/6/9/13 Strength", count: 8 },
  { type: 'Spell', title: "Divination", cost: '1/2 Mana', description: "Draw 2/4 Cards from the deck or discard pile", count: 3 },
  { type: 'Spell', title: "Transmute", cost: '1 Mana', description: "Discard an item from hand to receive 4 Gold", count: 3 },
  { type: 'Spell', title: "Cure Wounds", cost: '1/2 Mana', description: "Remove 3/5 Damage", count: 3 },
  { type: 'Spell', title: "Counterspell", cost: '1 Mana', description: "Reaction: counter a Spell", count: 4 },
  // { type: 'Spell', title: "rust", cost: '1 Mana', description: "destroy a weapon that has at least 1 damage on it", count: 2 },
  { type: 'Spell', title: "Zap", cost: '1/2/3 Mana', description: "Deal 2/3/4 Damage to a player", count: 4 },
  // { type: 'Spell', title: "animate dead", cost: '3 Mana', description: "deal 2 damage to a player then take up to 2 cards from the discard pile", count: 2 },
  { type: 'Spell', title: "Destruction", cost: '2 Mana', description: "Add a Damage token to a Weapon or destroy a non-Weapon Item", count: 3 },
  // { type: 'Spell', title: "Oblivion", cost: '5 Mana', description: "deal damage to a player equal to their maximum hp. this spell cannot be countered", count: 1 },
  
  // Misc
  { title: "Shuffle", description: "shuffle the discard pile (along with this card) into the main deck, then draw a card to replace this one", count: 1 },
];

/*
Costs:
gold - bribery
damage - enduring hazardous environments; poison
Mana - overcoming magical barriers/traps; utilising intellect
discarding cards - utilising cunning/skill; taking large amounts of time
Strength - fighting enemies/monsters/animals
sacrificing items - acid; going to places where thievery is common (pirate hideouts etc)

Rewards:
gold - finding treasure healing
damage - visiting kind entities, fairies, benevolent deities etc
Mana - magical/enchanted surroundings; fighting magical beings
drawing cards - gaining knowledge/intel
drawing cards from discard pile - plundering crypts; fighting undead
causing other players to take damage - large scale battles
victory points - grand, noteworthy deeds

Experimental Ideas:
discard cards with some total gold value?
discard certain number of cards of a certain type?
*/

export const initialAdventureDeck = [
  { type: 'Adventure', victoryPoints: 1, title: "Investigate the Sunken Catacombs", cost: '2 Damage', description: "1 Victory Point, 3 Gold, 1 Card from deck or discard pile", count: 3 },
  { type: 'Adventure', victoryPoints: 1, title: "Clear the Obsidian Watchtower", cost: '6 Strength', description: "1 Victory Point, 2 Mana, 2 Gold", count: 3 },
  { type: 'Adventure', victoryPoints: 1, title: "Clear a Goblin Nest", cost: '7 Strength', description: "1 Victory Point, 5 Gold", count: 3 },
  { type: 'Adventure', victoryPoints: 1, title: "Raid an Orc Camp", cost: '10 Strength', description: "1 Victory Point, 8 Gold", count: 3 },
  { type: 'Adventure', victoryPoints: 2, title: "Trial of the Astral Guardians", cost: '13 Strength', description: "2 Victory Point, 3 Mana, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 4, title: "Slay an Ogre Chief", cost: '13 Strength', description: "4 Victory Point, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 5, title: "Hunt a Dire Basilisk", cost: '16 Strength', description: "5 Victory Point, 6 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 8, title: "Discover the Codex of Eternity", cost: '19 Strength', description: "8 Victory Points, 4 Mana", count: 1 },
  { type: 'Adventure', victoryPoints: 7, title: "Bring Back the Head of a Dragon", cost: '19 Strength', description: "7 Victory Point", count: 1 },
  
  
  // { type: 'Adventure', victoryPoints: 1, title: "Visit the Grove of Kindly Fey", cost: '1 Mana', description: "1 Victory Point, all players heal 3 Damage", count: 2 },
  // { type: 'Adventure', victoryPoints: 0, title: "Mercenary Contract", cost: '5 Strength', description: "2 Gold", count: 2 },
  // { type: 'Adventure', victoryPoints: 1, title: "The Sunken Catacombs", cost: '2 Cards, 2 Damage', description: "1 Victory Point, 1 Gold, take 2 from discard pile", count: 2 },
  // { type: 'Adventure', victoryPoints: 1, title: "Obsidian Watchtower", cost: '3 Strength, 2 Mana', description: "1 Victory Point, 2 Cards, 3 Gold, 1 Mana", count: 2 },
  // { type: 'Adventure', victoryPoints: 2, title: "Hunt the Dire Basilisk", cost: '6 Strength, 1 Mana', description: "2 Victory Point, 3 Gold", count: 2 },
  // { type: 'Adventure', victoryPoints: 2, title: "Face a stampede of War Beasts", cost: '7 Strength, 3 Damage', description: "2 Victory Point, 2 Damage to other players", count: 2 },
  // { type: 'Adventure', victoryPoints: 2, title: "Mend a Fractured Leyline", cost: '2 Damage, 2 Cards', description: "2 Victory Point, 1 Gold, 3 Mana", count: 2 },
  // { type: 'Adventure', victoryPoints: 3, title: "Trial of the Astral Guardians", cost: '5 Strength, 1 Card, 2 Mana', description: "3 Victory Point, 3 Gold, 2 Card", count: 2 },
  // { type: 'Adventure', victoryPoints: 2, title: "Brave the Pirate King's Hideout", cost: '5 Strength, 1 Item worth 4 Gold or more', description: "2 Victory Points, 3 Gold", count: 2 },
  
  // { type: 'Adventure', victoryPoints: 4, title: "Slay the Ashen Wyrn", cost: '11 Strength, 2 Damage, 1 Mana', description: "4 Victory Points, 5 Gold", count: 1 },
  // { type: 'Adventure', victoryPoints: 5, title: "Encounter the Titan Beneath the Hills", cost: '14 Strength, 3 Cards', description: "5 Victory Points, 2 Gold, 2 Mana, 1 Damage to other players", count: 1 },
  // { type: 'Adventure', victoryPoints: 2, title: "Breach the Adamant Vault", cost: '5 Strength, 4 Cards, 2 Mana', description: "2 Victory Points, 12 Gold", count: 1 },
  // { type: 'Adventure', victoryPoints: 7, title: "Raise an Army for the Final Crusade", cost: '8 Strength, 1 Card, 14 Gold', description: "7 Victory Points, 2 Damage to other players", count: 1 },
  // { type: 'Adventure', victoryPoints: 5, title: "Discover the Codex of Eternity", cost: '5 Strength, 2 Cards', description: "5 Victory Points, 2 Gold, 8 Mana, discard all Items", count: 1 },
  // { type: 'Adventure', victoryPoints: 6, title: "Brave the Void Between Worlds", cost: '10 Strength, Discard Hand', description: "6 Victory Points, 3 Gold, 1 Card", count: 1 },
];

export const characters = [
  { type: 'Character', title: "Warrior", stats: "Strength: 4\nMax Health: 11\nMana: 0", ability: "2 Starting Gold", count: 1 },
  { type: 'Character', title: "Rogue", stats: "Strength: 2\nMax Health: 9\nMana: 2", ability: "2 Starting Gold", count: 1 },
  { type: 'Character', title: "Wizard", stats: "Strength: 1\nMax Health: 8\nMana: 3", ability: "2 Starting Gold", count: 1 },
  { type: 'Character', title: "Fighter", stats: "Strength: 3\nMax Health: 10\nMana: 1", ability: "2 Starting Gold", count: 1 },
  { type: 'Character', title: "Arcanist", stats: "Strength: 1\nMax Health: 8\nMana: 3", ability: "2 Starting Gold", count: 1 },
  { type: 'Character', title: "Ranger", stats: "Strength: 2\nMax Health: 9\nMana: 2", ability: "2 Starting Gold", count: 1 },
]

export function createDeck() {
  const deck = [];
  const cardTypes = {};
  initialDeck.forEach((card, index) => {
    for (let i = 0; i < card.count; i++) {
      if (!cardTypes[card.type]) cardTypes[card.type] = 0;
      cardTypes[card.type] += 1;
      deck.push({
        ...card,
        id: `card-${index}-${i}-${Date.now()}`,
      });
    }
  });
  console.log(cardTypes);
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
