export const initialDeck = [
  // Actions
  { type: 'Action', title: "skullduggery", description: "gain 2 gold", count: 4 },
  { type: 'Action', title: "hard labour", cost: '2 damage', description: "gain 3 gold", count: 4 },
  { type: 'Action', title: "meditation", description: "gain 3 mana", count: 4 },
  { type: 'Action', title: "mugging", description: "fight another player, winner takes 4 gold from loser, loser takes 2 damage", count: 2 },
  { type: 'Action', title: "duel", description: "fight another player, loser takes 4 damage", count: 2 },
  { type: 'Action', title: "lay low", description: "Reaction: ignore the effects of an action card played by another player", count: 2 },
  { type: 'Action', title: "sneaky stab", description: "Reaction: add 1 to strength", count: 4 },
  { type: 'Action', title: "scout", description: "discard up to 2 adventures from the row and replace them", count: 3 },
  { type: 'Action', title: "maintenance", description: "discard all damage markers from 1 weapon", count: 3 },
  { type: 'Action', title: "scavenging", description: "take a card from the discard pile", count: 2 },
  { type: 'Action', title: "sabotage", description: "Reaction: play at the start of another players turn; they cannot claim adventures this turn, and they take 1 damage", count: 2 },
  
  // Items
  { type: 'Item', title: "rogue's cowl", cost: '7 Gold', description: "draw an extra card at start of turn", count: 1 },
  { type: 'Item', title: "Thief's tools", cost: '6 Gold', description: "once per turn after you play an action card (not a reaction), return it to your hand", count: 1 },
  { type: 'Item', title: "wizard's robe", cost: '5 Gold', description: "gain 1 mana at start of turn", count: 1 },
  { type: 'Item', title: "looking glass", cost: '1 Gold', description: "on your turn you may look at the top card of the adventure deck", count: 1 },
  { type: 'Item', title: "Berzerker Pelts", cost: '3 Gold', description: "Your strength is doubled. Damage you take is doubled", count: 1 },
  { type: 'Item', title: "magic crystal", cost: '2 Gold', description: "+2 max mana", count: 3 },
  { type: 'Item', title: "arcane amulet", cost: '5 Gold', description: "+4 max mana", count: 2 },
  { type: 'Item', title: "belt of strength", cost: '4 Gold', description: "+1 strength", count: 2 },
  { type: 'Item', title: "leather jerkin", cost: '2 Gold', description: "+2 max hp", count: 2 },
  { type: 'Item', title: "full plate", cost: '5 Gold', description: "+4 max hp", count: 2 },
  { type: 'Item', title: "potion of rejuvination", cost: '4 Gold', description: "if you would die, discard damage equal to half your max hp (rounded down) instead, and discard this item", count: 2 },
  
  // Weapons
  { type: 'Item - Weapon', title: "dagger", cost: '2 Gold', description: "1 strength", durability: 2, count: 3 },
  { type: 'Item - Weapon', title: "masterwork dagger", cost: '3 Gold', description: "1 strength", durability: 4, count: 1 },
  { type: 'Item - Weapon', title: "sword", cost: '5 Gold', description: "2 strength", durability: 2, count: 2 },
  { type: 'Item - Weapon', title: "short bow", cost: '6 Gold', description: "2 strength, isn't discarded when durability is reached", durability: 2, count: 2 },
  { type: 'Item - Weapon', title: "great axe", cost: '8 Gold', description: "4 strength, double handed", durability: 2, count: 2 },
  { type: 'Item - Weapon', title: "battle axe", cost: '8 Gold', description: "3 strength", durability: 2, count: 2 },
  { type: 'Item - Weapon', title: "bastard sword", cost: '14 Gold', description: "5 strength", durability: 2, count: 2 },
  { type: 'Item - Weapon', title: "world slayer", cost: '17 Gold', description: "10 strength", durability: 1, count: 1 },
  
  // Spells
  { type: 'Spell', title: "flaming hands", cost: '1 Mana', description: "Reaction: add 2 to strength", count: 3 },
  { type: 'Spell', title: "magic missile", cost: '2 Mana', description: "Reaction: add 3 to strength", count: 3 },
  { type: 'Spell', title: "fireball", cost: '3 Mana', description: "Reaction: add 4 to strength", count: 3 },
  { type: 'Spell', title: "counterspell", cost: '2 Mana', description: "Reaction: counter a spell or scroll", count: 4 },
  { type: 'Spell', title: "turn to rust", cost: '2 Mana', description: "destroy a weapon that has at least 1 damage on it", count: 2 },
  { type: 'Spell', title: "zap", cost: '2 Mana', description: "deal 3 damage to a player", count: 2 },
  { type: 'Spell', title: "animate dead", cost: '3 Mana', description: "deal 2 damage to a player then take up to 2 cards from the discard pile", count: 2 },
  { type: 'Spell', title: "destruction", cost: 'X Mana', description: "destroy an item. mana cost is equal to half the target's gold value, rounded up", count: 2 },
  { type: 'Spell', title: "reincarnation", cost: '4 Mana', description: "Reaction: play when you die. remove all damage and ignore all usual effects of death", count: 1 },
  { type: 'Spell', title: "divine form", cost: '5 Mana', description: "claim any adventure without comparing strength or paying it's costs", count: 1 },
  { type: 'Spell', title: "Oblivion", cost: '7 Mana', description: "deal damage to a player equal to their maximum hp. this spell cannot be countered", count: 1 },
  
  // Scrolls
  { type: 'Spell - Scroll', title: "cone of frost", cost: '1 Mana', description: "Reaction: add 1 to strength", count: 4 },
  { type: 'Spell - Scroll', title: "life drain", cost: '2 Mana', description: "deal 1 damage to another player and remove 1 damage from yourself", count: 2 },
  { type: 'Spell - Scroll', title: "healing hands", cost: '2 Mana', description: "remove 3 damage", count: 2 },
  { type: 'Spell - Scroll', title: "transmute", cost: '2 Mana', description: "discard an item from hand to receive gold equal to half it's cost (rounded down), or discard an item from your inventory for it's full cost", count: 2 },
  { type: 'Spell - Scroll', title: "prismatic ray", cost: '2 Mana', description: "Reaction: add 2 to strength", count: 2 },
  { type: 'Spell - Scroll', title: "divination", cost: '2 Mana', description: "draw 3 cards", count: 2 },
  
  // Misc
  { title: "Shuffle", description: "shuffle the discard pile (along with this card) into the main deck, then draw a card to replace this one", count: 1 },
];

/*
Costs:
gold - bribery
damage - enduring hazardous environments; poison
mana - overcoming magical barriers/traps; utilising intellect
discarding cards - utilising cunning/skill; taking large amounts of time
strength - fighting enemies/monsters/animals
sacrificing items - acid; going to places where thievery is common (pirate hideouts etc)

Rewards:
gold - finding treasure healing
damage - visiting kind entities, fairies, benevolent deities etc
mana - magical/enchanted surroundings; fighting magical beings
drawing cards - gaining knowledge/intel
drawing cards from discard pile - plundering crypts; fighting undead
causing other players to take damage - large scale battles
victory points - grand, noteworthy deeds

Experimental Ideas:
discard cards with some total gold value?
*/

export const initialAdventureDeck = [
  { type: 'Adventure', victoryPoints: 1, title: "Visit the Grove of Kindly Fey", cost: '1 Mana, 1 Card', description: "1 Victory Point, all players heal 3 Damage", count: 2 },
  { type: 'Adventure', victoryPoints: 0, title: "Mercenary Contract", cost: '5 Strength', description: "2 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 1, title: "The Sunken Catacombs", cost: '2 Cards, 2 Damage', description: "1 Victory Point, 1 Gold, take 2 from discard pile", count: 2 },
  { type: 'Adventure', victoryPoints: 1, title: "Obsidian Watchtower", cost: '3 Strength, 3 Mana', description: "1 Victory Point, 1 Card, 1 Gold, 2 Mana", count: 2 },
  { type: 'Adventure', victoryPoints: 2, title: "Hunt the Dire Basilisk", cost: '6 Strength, 2 Mana', description: "2 Victory Point, 3 Gold", count: 2 },
  { type: 'Adventure', victoryPoints: 2, title: "Face a stampede of War Beasts", cost: '7 Strength, 3 Damage', description: "2 Victory Point, 2 Damage to other players", count: 2 },
  { type: 'Adventure', victoryPoints: 2, title: "Mend a Fractured Leyline", cost: '2 Damage, 2 Cards', description: "2 Victory Point, 1 Gold, 6 Mana", count: 2 },
  { type: 'Adventure', victoryPoints: 3, title: "Trial of the Astral Guardians", cost: '5 Strength, 1 Card, 2 Mana', description: "3 Victory Point, 1 Gold, 1 Card", count: 2 },
  { type: 'Adventure', victoryPoints: 2, title: "Brave the Pirate King's Hideout", cost: '5 Strength, 1 Item worth 4 Gold or more', description: "2 Victory Points, 3 Gold", count: 2 },
  
  { type: 'Adventure', victoryPoints: 4, title: "Slay the Ashen Wyrn", cost: '11 Strength, 2 Damage, 1 Mana', description: "4 Victory Points, 5 Gold", count: 1 },
  { type: 'Adventure', victoryPoints: 5, title: "Encounter the Titan Beneath the Hills", cost: '14 Strength, 3 Cards', description: "5 Victory Points, 2 Gold, 2 Mana, 1 Damage to other players", count: 1 },
  { type: 'Adventure', victoryPoints: 2, title: "Breach the Adamant Vault", cost: '5 Strength, 4 Cards, 2 Mana', description: "2 Victory Points, 12 Gold", count: 1 },
  { type: 'Adventure', victoryPoints: 7, title: "Raise an Army for the Final Crusade", cost: '8 Strength, 1 Card, 14 Gold', description: "7 Victory Points, 2 Damage to other players", count: 1 },
  { type: 'Adventure', victoryPoints: 5, title: "Discover the Codex of Eternity", cost: '5 Strength, 2 Cards', description: "5 Victory Points, 2 Gold, 8 Mana, discard all Items", count: 1 },
  { type: 'Adventure', victoryPoints: 6, title: "Brave the Void Between Worlds", cost: '10 Strength, Discard Hand', description: "6 Victory Points, 3 Gold, 1 Card", count: 1 },
];

export const characters = [
  { type: 'Character', title: "Warrior", stats: "Strength: 4\nMax Health: 11\nMana: 0", ability: "No special ability", count: 1 },
  { type: 'Character', title: "Rogue", stats: "Strength: 2\nMax Health: 9\nMana: 2", ability: "2 Starting Gold. You may perform 3 actions per turn", count: 1 },
  { type: 'Character', title: "Wizard", stats: "Strength: 1\nMax Health: 8\nMana: 3", ability: "3 Starting Gold. The first time you play a spell (not a reaction) each turn, draw a card", count: 1 },
  { type: 'Character', title: "Fighter", stats: "Strength: 3\nMax Health: 10\nMana: 1", ability: "2 Starting Gold. +3 Strength when using 2 weapons at once", count: 1 },
  { type: 'Character', title: "Arcanist", stats: "Strength: 1\nMax Health: 8\nMana: 3", ability: "2 Starting Gold. you only have to discard mana down to your limit (and suffer mana burn) at the end of your turn", count: 1 },
  { type: 'Character', title: "Ranger", stats: "Strength: 2\nMax Health: 8\nMana: 3", ability: "1 Starting Gold. All your weapons have +1 durability", count: 1 },
]

export function createDeck() {
  const deck = [];
  initialDeck.forEach((card, index) => {
    for (let i = 0; i < card.count; i++) {
      deck.push({
        ...card,
        id: `card-${index}-${i}-${Date.now()}`,
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
