export const initialActionDeck = [
  { type: 'Action', title: "Skullduggery", description: "Take 1 Gold from another player", count: 4 },
  { type: 'Action', title: "Hard Labour", cost: '1 Damage', description: "Gain 2 Gold", count: 4 },
  { type: 'Action', title: "Sneaky Stab", description: "Take an adventure, reducing it's power by 1", count: 5 },
  { type: 'Action', title: "Scout", description: "Discard up to 2 Adventures from the row and replace them", count: 4 },
  // { type: 'Action', title: "Steal", description: "Take an Item from another player", count: 2 },
  { type: 'Action', title: "Espionage", description: "Look at another player's hand and take 1 card", count: 2 },
  { type: 'Action', title: "Sabotage", description: "Target player loses 1 Health, 1 Gold, and discards 1 Card", count: 2 },
  
  { type: 'Item', title: "Trusty Dagger", cost: '2 Gold', description: "1 Power", durability: 1, count: 4 },
  { type: 'Item', title: "Battle Axe", cost: '5 Gold', description: "2 Power", durability: 1, count: 3 },
  { type: 'Item', title: "Sword", cost: '10 Gold', description: "3 Power", durability: 1, count: 2 },
  
  { type: 'Item', title: "Magic Crystal", cost: '2 Gold', description: "1 Max Mana", durability: 1, count: 4 },
  { type: 'Item', title: "Arcane Amulet", cost: '5 Gold', description: "2 Max Mana", durability: 1, count: 3 },
  { type: 'Item', title: "Wizard Staff", cost: '10 Gold', description: "3 Max Mana", durability: 1, count: 2 },
  
  { type: 'Item', title: "Leather Belt", cost: '2 Gold', description: "1 Max Health", durability: 1, count: 4 },
  { type: 'Item', title: "Helm", cost: '5 Gold', description: "2 Max Health", durability: 1, count: 3 },
  { type: 'Item', title: "Cuirass", cost: '8 Gold', description: "3 Max Health", durability: 1, count: 2 },
  
  { type: 'Item', title: "Fleet Footed Boots", cost: '3 Gold', description: "1 Stamina", durability: 1, count: 4 },
  { type: 'Item', title: "Rogue's Cowl", cost: '6 Gold', description: "2 Stamina", durability: 1, count: 3 },
  
  { type: 'Spell', title: "Magic Missile", cost: '1 Mana', description: "Take an adventure, reducing it's power by 2", count: 3 },
  { type: 'Spell', title: "Divination", cost: '1 Mana', description: "Draw 2 Cards", count: 3 },
  { type: 'Spell', title: "Transmute", cost: '2 Mana', description: "Destroy an Item. It's owner receives Gold equal to half it's value, rounded down", count: 2 },
  { type: 'Spell', title: "Cure Wounds", cost: '1 Mana', description: "Gain 2 Health", count: 3 },
  { type: 'Spell', title: "Zap", cost: '1 Mana', description: "Deal 2 Damage to a player", count: 3 },
  { type: 'Spell', title: "Destruction", cost: '3 Mana', description: "Destroy an Item", count: 2 },
];

export const initialSpellDeck = [
];

export const initialItemDeck = [
  // Items
  // { type: 'Item', title: "wizard's robe", cost: '12 Gold', description: "Gain 1 Mana at start of turn", count: 2 },
  // { type: 'Item', title: "Thief's Tools", cost: '4 Gold', description: "When scheming, you may discard 2 cards to draw 1 from the discard pile instead of the usual action", count: 2 },
  // { type: 'Item', title: "Hidden Weapons", cost: '5 Gold', description: "When you play an Action card other than 'Attack' or 'Hard Labour', double it's effects", count: 2 },
  // { type: 'Item', title: "Arcane Amulet", cost: '2 Gold', description: "+2 max Mana", count: 5 },
  // { type: 'Item', title: "Leather Armour", cost: '2 Gold', description: "+3 max hp", count: 5 },
  // { type: 'Item', title: "Spell Book", cost: '1 Gold', description: "As an Action, you may move a Spell from your hand into your Spell Book. You may play Spell cards from your Spell Book, and they are not discarded after use. If the Spell Book leaves your inventory, the Spells are discarded.", count: 5 },
  // { type: 'Item', title: "Potion of Healing", cost: '5 Gold', description: "Reaction: after taking damage, you may discard this Item to heal damage equal to half your max HP (rounded down). NB: this happens before checking to see if you're dead", count: 2 },
  // { type: 'Item', title: "Hideout", cost: '6 Gold', description: "You cannot be targeted by other player's Actions or Spells", count: 2 },

  // Weapons
  // { type: 'Item', title: "Trusty Dagger", cost: '2 Gold', description: "1 Power", durability: 1, count: 6 },
  // { type: 'Item', title: "Battle Axe", cost: '5 Gold', description: "2 Power", durability: 1, count: 4 },
  // { type: 'Item', title: "Sword", cost: '10 Gold', description: "4 Power", durability: 1, count: 2 },
  // { type: 'Item', title: "Mega Sword", cost: '16 Gold', description: "8 Power", durability: 1, count: 1 },
  
  // { type: 'Item', title: "Trusty Dagger", cost: '2 Gold', description: "Additional Power during Battles/Dungeons: LEVEL 1: +1, LEVEL 2: +3", durability: 1, count: 6 },
  // { type: 'Item', title: "Battle Axe", cost: '4 Gold', description: "Additional Power during Battles: LEVEL 1: +3, LEVEL 2: +6", durability: 1, count: 5 },
  // { type: 'Item', title: "Sword", cost: '7 Gold', description: "3 Strength", durability: 3, count: 3 },
  // { type: 'Item', title: "Halberd", cost: '12 Gold', description: "5 Strength", durability: 3, count: 2 },
  // { type: 'Item', title: "Mega Sword", cost: '16 Gold', description: "8 Strength", durability: 3, count: 2 },
  
  // { type: 'Item - Weapon', title: "Battle Axe", cost: '8 Gold', description: "5 Strength", durability: 2, count: 3 },
  // { type: 'Item - Weapon', title: "Two Handed Axe", cost: '8 Gold', description: "7 Strength", durability: 2, count: 2 },
  // { type: 'Item - Weapon', title: "Bastard Sword", cost: '10 Gold', description: "6 Strength", durability: 2, count: 2 },
  // { type: 'Item - Weapon', title: "Claymore", cost: '12 Gold', description: "7 Strength", durability: 2, count: 2 },
  // { type: 'Item - Weapon', title: "Falcon Sabre", cost: '14 Gold', description: "8 Strength", durability: 2, count: 2 },
  // { type: 'Item - Weapon', title: "Titan Blade", cost: '14 Gold', description: "10 Strength, double handed", durability: 2, count: 2 },
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
repair a weapon - urban areas?

Experimental Ideas:
discard certain number of cards of a certain type?
destroy another player's item?
all plauyers (including you) discard their most valuable item
take mana from another player/players
*/

export const initialAdventureDeck = [
  { type: 'Adventure', victoryPoints: 0, title: "", cost: '8 Strength', description: "5 Gold", count: 6 },
  { type: 'Adventure', victoryPoints: 0, title: "", cost: '4 Mana', description: "5 Gold", count: 6 },
  { type: 'Adventure', victoryPoints: 0, title: "", cost: '3 Action Cards', description: "4 Gold", count: 6 },
  
  { type: 'Adventure', victoryPoints: 3, title: "", cost: '12 Strength', description: "3 VPs, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 3, title: "", cost: '8 Strength, 3 Mana', description: "3 VPs, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 3, title: "", cost: '6 Mana', description: "3 VPs, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 3, title: "", cost: '5 Action Cards', description: "3 VPs, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 3, title: "", cost: '3 Action Cards, 3 Mana', description: "3 VPs, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 3, title: "", cost: '8 Strength, 3 Action Cards', description: "3 VPs, 4 Gold", count: 2 },
  
  { type: 'Adventure', victoryPoints: 7, title: "", cost: '16 Strength', description: "7 VPs, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 7, title: "", cost: '8 Mana', description: "7 VPs, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 7, title: "", cost: '7 Action Cards', description: "7 VPs, 4 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 7, title: "", cost: '4 Mana, 5 Action Cards, 12 Strength', description: "7 VPs, 4 Gold", count: 2 },
  
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
  initialActionDeck.forEach((card, index) => {
    for (let i = 0; i < card.count; i++) {
      deck.push({
        ...card,
        id: `action-${index}-${i}-${Date.now()}`,
      });
    }
  });
  return deck;
}

export function createSpellDeck() {
  const deck = [];
  initialSpellDeck.forEach((card, index) => {
    for (let i = 0; i < card.count; i++) {
      deck.push({
        ...card,
        id: `spell-${index}-${i}-${Date.now()}`,
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
