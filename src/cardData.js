export const initialDeck = [
  // Actions
  { type: 'Action', title: "Skullduggery", description: "Gain 1 Gold", count: 5 },
  { type: 'Action', title: "Hard Labour", cost: '1 Damage', description: "Gain 2 Gold", count: 4 },
  { type: 'Action', title: "Meditation", description: "Gain 1 Mana", count: 4 },
  // { type: 'Action', title: "Attack", description: "Fight another player. For each point the winner wins by (to a maximum of 5), they may deal 1 Damage or take 1 Gold from the loser", count: 3 },
  { type: 'Action', title: "Sneaky Stab", description: "Reaction: add 1 to Strength", count: 6 },
  { type: 'Action', title: "Scout", description: "Discard up to 2 Adventures from the row and replace them", count: 4 },
  { type: 'Action', title: "Maintenance", description: "Discard 1 Damage marker from a Weapon", count: 4 },
  { type: 'Action', title: "Scavenging", description: "Take 1 Card from the discard pile", count: 3 },
  { type: 'Action', title: "Steal", description: "Look at another player's hand and take 1 card from it", count: 2 },
  
  // Items
  // { type: 'Item', title: "Rogue's Cowl", cost: '10 Gold', description: "Draw 1 extra Card at start of turn", count: 2 },
  // { type: 'Item', title: "wizard's robe", cost: '12 Gold', description: "Gain 1 Mana at start of turn", count: 2 },
  // { type: 'Item', title: "Thief's Tools", cost: '4 Gold', description: "When scheming, you may discard 2 cards to draw 1 from the discard pile instead of the usual action", count: 2 },
  // { type: 'Item', title: "Hidden Weapons", cost: '5 Gold', description: "When you play an Action card other than 'Attack' or 'Hard Labour', double it's effects", count: 2 },
  { type: 'Item', title: "Arcane Amulet", cost: '2 Gold', description: "+2 max Mana", count: 5 },
  { type: 'Item', title: "Leather Armour", cost: '2 Gold', description: "+3 max hp", count: 5 },
  // { type: 'Item', title: "Spell Book", cost: '1 Gold', description: "As an Action, you may move a Spell from your hand into your Spell Book. You may play Spell cards from your Spell Book, and they are not discarded after use. If the Spell Book leaves your inventory, the Spells are discarded.", count: 5 },
  // { type: 'Item', title: "Potion of Healing", cost: '5 Gold', description: "Reaction: after taking damage, you may discard this Item to heal damage equal to half your max HP (rounded down). NB: this happens before checking to see if you're dead", count: 2 },
  // { type: 'Item', title: "Hideout", cost: '6 Gold', description: "You cannot be targeted by other player's Actions or Spells", count: 2 },
  
  // Weapons
  { type: 'Item - Weapon', title: "Trusty Dagger", cost: '2 Gold', description: "1 Strength", durability: 3, count: 6 },
  { type: 'Item - Weapon', title: "Gladus", cost: '4 Gold', description: "2 Strength", durability: 3, count: 5 },
  { type: 'Item - Weapon', title: "Sword", cost: '7 Gold', description: "3 Strength", durability: 3, count: 3 },
  { type: 'Item - Weapon', title: "Halberd", cost: '12 Gold', description: "5 Strength", durability: 3, count: 2 },
  { type: 'Item - Weapon', title: "Mega Sword", cost: '16 Gold', description: "8 Strength", durability: 3, count: 2 },
  // { type: 'Item - Weapon', title: "Battle Axe", cost: '8 Gold', description: "5 Strength", durability: 2, count: 3 },
  // { type: 'Item - Weapon', title: "Two Handed Axe", cost: '8 Gold', description: "7 Strength", durability: 2, count: 2 },
  // { type: 'Item - Weapon', title: "Bastard Sword", cost: '10 Gold', description: "6 Strength", durability: 2, count: 2 },
  // { type: 'Item - Weapon', title: "Claymore", cost: '12 Gold', description: "7 Strength", durability: 2, count: 2 },
  // { type: 'Item - Weapon', title: "Falcon Sabre", cost: '14 Gold', description: "8 Strength", durability: 2, count: 2 },
  // { type: 'Item - Weapon', title: "Titan Blade", cost: '14 Gold', description: "10 Strength, double handed", durability: 2, count: 2 },
  
  // Spells
  { type: 'Spell', title: "Magic Missile", cost: '1/2/3 Mana', description: "Reaction: add 2/4/6 Strength", count: 8 },
  { type: 'Spell', title: "Divination", cost: '1 Mana', description: "Draw 2 Cards from the deck or discard pile", count: 3 },
  { type: 'Spell', title: "Transmute", cost: '2 Mana', description: "Destroy an Item. It's owner receives Gold equal to half it's value, rounded down", count: 2 },
  { type: 'Spell', title: "Cure Wounds", cost: '1 Mana', description: "Remove 2 Damage", count: 3 },
  // { type: 'Spell', title: "Counterspell", cost: '1 Mana', description: "Reaction: counter a Spell. Gain 1 Mana", count: 4 },
  { type: 'Spell', title: "Zap", cost: '1 Mana', description: "Deal 2 Damage to a player", count: 1 },
  // { type: 'Spell', title: "Meteor Storm", cost: '2/3/4 Mana', description: "Deal 2/3/5 Damage to each other player", count: 2 },
  { type: 'Spell', title: "Destruction", cost: '2 Mana', description: "Add a Damage token to a Weapon or destroy a non-Weapon Item", count: 2 },
  // { type: 'Spell', title: "Stupify", cost: '1/2 Mana', description: "A player of your choice discards 2/5 Cards", count: 2 },
  { type: 'Spell', title: "Mend", cost: '2 Mana', description: "Remove all damage from a Weapon", count: 3 },
  
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
repair a weapon - urban areas?

Experimental Ideas:
discard certain number of cards of a certain type?
destroy another player's item?
all plauyers (including you) discard their most valuable item
take mana from another player/players
*/

export const initialAdventureDeck = [
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '2 Strength', description: "1 VP, discard 1 Adventure from the row", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '2 Strength', description: "1 VP, 3 Mana", count: 1 },
  
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '3 Strength', description: "1 VP, 2 Mana, discard 1 Adventure from the row", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '3 Strength', description: "1 VP, 2 Cards", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '3 Strength', description: "1 VP, 3 Mana, 1 Card", count: 1 },
  
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '4 Strength', description: "1 VP, 1 Mana, 2 Cards, discard 1 Adventure from the row", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '4 Strength', description: "1 VP, 1 Gold", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '4 Strength', description: "1 VP, 2 Cards", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '4 Strength', description: "1 VP, 1 Gold, 1 Card", count: 1 },
  
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '5 Strength', description: "1 VP, 1 Gold", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '5 Strength', description: "1 VP, 2 Cards", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '5 Strength', description: "1 VP, 1 Gold, 1 Card", count: 1 },
  
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '6 Strength', description: "1 VP, 2 Gold", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '6 Strength', description: "1 VP, 3 Cards", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '6 Strength', description: "1 VP, 1 Gold, 2 Cards", count: 1 },
  
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '7 Strength', description: "1 VP, 2 Gold", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '7 Strength', description: "1 VP, 3 Cards", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '7 Strength', description: "1 VP, 1 Gold, 2 Cards", count: 1 },
  
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '8 Strength', description: "1 VP, 3 Gold", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '8 Strength', description: "1 VP, 1 Gold, 3 Cards", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '8 Strength', description: "1 VP, 2 Gold, 2 Cards", count: 1 },
  
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '9 Strength', description: "1 VP, 3 Gold", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '9 Strength', description: "1 VP, 1 Gold, 3 Cards", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '9 Strength', description: "1 VP, 2 Gold, 2 Cards", count: 1 },
  
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '10 Strength', description: "2 VP", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '10 Strength', description: "1 VP, 4 Gold", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '10 Strength', description: "1 VP, 2 Gold, 3 Cards", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '10 Strength', description: "1 VP, 3 Gold, 2 Cards", count: 1 },
  
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '11 Strength', description: "2 VP", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '11 Strength', description: "1 VP, 4 Gold", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '11 Strength', description: "1 VP, 2 Gold, 3 Cards", count: 1 },
  { type: 'Adventure', victoryPoints: 1, title: "", cost: '11 Strength', description: "1 VP, 3 Gold, 2 Cards", count: 1 },
  
  
  // { type: 'Adventure', victoryPoints: 2, title: "Raid a Pirate Stronghold", cost: '7 Strength, 2 Damage, 1 Item worth 4 Gold or more', description: "2 Victory Points, 3 Cards, choose a player to discard their most valuable item", count: 2 },
  // { type: 'Adventure', victoryPoints: 2, title: "Mend a Fractured Leyline", cost: '2 Damage, 2 Cards, 2 Mana', description: "2 Victory Point, take all Mana from other players", count: 2 },
  
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
  { type: 'Character', title: "Warrior", stats: "Strength: 4\nMax Health: 6\nMana: 0", ability: "1 Starting Gold", count: 1 },
  { type: 'Character', title: "Rogue", stats: "Strength: 2\nMax Health: 5\nMana: 2", ability: "1 Starting Gold", count: 1 },
  { type: 'Character', title: "Wizard", stats: "Strength: 1\nMax Health: 4\nMana: 3", ability: "1 Starting Gold", count: 1 },
  { type: 'Character', title: "Fighter", stats: "Strength: 3\nMax Health: 6\nMana: 1", ability: "1 Starting Gold", count: 1 },
  { type: 'Character', title: "Arcanist", stats: "Strength: 1\nMax Health: 4\nMana: 3", ability: "1 Starting Gold", count: 1 },
  { type: 'Character', title: "Ranger", stats: "Strength: 2\nMax Health: 5\nMana: 2", ability: "1 Starting Gold", count: 1 },
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
