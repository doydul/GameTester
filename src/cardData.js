export const initialDeck = [
  // Actions
  { type: 'Action', title: "skullduggery", description: "gain 2 gold", count: 4 },
  { type: 'Action', title: "hard labour", cost: '2 damage', description: "gain 3 gold", count: 4 },
  { type: 'Action', title: "meditation", description: "gain 3 mana", count: 4 },
  { type: 'Action', title: "mugging", description: "fight another player, winner takes 4 gold from loser, loser takes 2 damage", count: 2 },
  { type: 'Action', title: "duel", description: "fight another player, loser takes 4 damage", count: 2 },
  { type: 'Action', title: "lay low", description: "Reaction: ignore the effects of an action card played by another player", count: 2 },
  { type: 'Action', title: "sneaky stab", description: "Reaction: add 2 to strength", count: 4 },
  { type: 'Action', title: "scout", description: "discard up to 2 adventures from the row and replace them", count: 3 },
  { type: 'Action', title: "maintenance", description: "discard all damage markers from 1 weapon", count: 3 },
  { type: 'Action', title: "scavenging", description: "take a card from the discard pile", count: 2 },
  { type: 'Action', title: "sabotage", description: "Reaction: play at the start of another players turn; they cannot claim adventures this turn", count: 2 },
  
  // Items
  { type: 'Item', title: "rogue's cowl", cost: '7 Gold', description: "draw an extra card at start of turn", count: 1 },
  { type: 'Item', title: "Thief's tools", cost: '6 Gold', description: "once per turn after you play an action card (not a reaction), return it to your hand", count: 1 },
  { type: 'Item', title: "wizard's robe", cost: '5 Gold', description: "you may gain 1 mana at start of turn", count: 1 },
  { type: 'Item', title: "looking glass", cost: '1 Gold', description: "on your turn you may look at the top card of the adventure deck", count: 1 },
  { type: 'Item', title: "berserker pelts", cost: '4 Gold', description: "your strength is doubled. damage you take is doubled", count: 1 },
  { type: 'Item', title: "magic crystal", cost: '2 Gold', description: "+2 max mana", count: 2 },
  { type: 'Item', title: "arcane amulet", cost: '7 Gold', description: "+4 max mana", count: 2 },
  { type: 'Item', title: "belt of strength", cost: '2 Gold', description: "+1 strength", count: 2 },
  { type: 'Item', title: "leather jerkin", cost: '2 Gold', description: "+3 max hp", count: 2 },
  { type: 'Item', title: "full plate", cost: '6 Gold', description: "+7 max hp", count: 2 },
  { type: 'Item', title: "crown of nobility", cost: '25 Gold', description: "7 Victory Points. Cannot be played for free", count: 1 },
  { type: 'Item', title: "potion of rejuvination", cost: '4 Gold', description: "if you would die, discard damage equal to half your max hp (rounded down) instead, and discard this item", count: 2 },
  
  // Weapons
  { type: 'Item - Weapon', title: "dagger", cost: '2 Gold', description: "3 strength", durability: 2, count: 3 },
  { type: 'Item - Weapon', title: "masterwork dagger", cost: '3 Gold', description: "3 strength", durability: 4, count: 1 },
  { type: 'Item - Weapon', title: "sword", cost: '4 Gold', description: "5 strength", durability: 2, count: 2 },
  { type: 'Item - Weapon', title: "great axe", cost: '5 Gold', description: "8 strength, double handed", durability: 2, count: 2 },
  { type: 'Item - Weapon', title: "battle axe", cost: '6 Gold', description: "7 strength", durability: 2, count: 2 },
  { type: 'Item - Weapon', title: "bastard sword", cost: '8 Gold', description: "9 strength", durability: 2, count: 2 },
  { type: 'Item - Weapon', title: "world slayer", cost: '10 Gold', description: "12 strength", durability: 2, count: 1 },
  
  // Spells
  { type: 'Spell', title: "fireball", cost: '3 Mana', description: "add 6 to strength", count: 3 },
  { type: 'Spell', title: "counterspell", cost: '3 Mana', description: "Reaction: counter a spell or scroll", count: 2 },
  { type: 'Spell', title: "turn to rust", cost: '3 Mana', description: "destroy a weapon that has at least 1 damage on it", count: 2 },
  { type: 'Spell', title: "zap", cost: '4 Mana', description: "deal 3 damage to a player", count: 2 },
  { type: 'Spell', title: "divination", cost: '3 Mana', description: "draw 3 cards", count: 2 },
  { type: 'Spell', title: "animate dead", cost: '4 Mana', description: "take up to 2 cards from the discard pile", count: 2 },
  { type: 'Spell', title: "destruction", cost: 'X Mana', description: "destroy an item. mana costs is equal to the target's gold cost", count: 2 },
  { type: 'Spell', title: "reincarnation", cost: '5 Mana', description: "Reaction: play when you die. remove all damage and ignore all usual effects of death", count: 1 },
  { type: 'Spell', title: "god mode", cost: '6 Mana', description: "claim any adventure without comparing strength or paying it's costs", count: 1 },
  { type: 'Spell', title: "power word: death", cost: '8 Mana', description: "deal damage to a player equal to their maximum hp. this spell cannot be countered", count: 1 },
  
  // Scrolls
  { type: 'Spell - Scroll', title: "cone of frost", cost: '2 Mana', description: "Reaction: add 2 to strength", count: 2 },
  { type: 'Spell - Scroll', title: "life drain", cost: '2 Mana', description: "deal 1 damage to another player and remove 1 damage from yourself", count: 2 },
  { type: 'Spell - Scroll', title: "healing hands", cost: '2 Mana', description: "remove 3 damage", count: 2 },
  { type: 'Spell - Scroll', title: "transmute", cost: '2 Mana', description: "discard an item from hand to receive gold equal to half it's cost (rounded down), or discard an item from your inventory for it's full cost", count: 2 },
  { type: 'Spell - Scroll', title: "prismatic ray", cost: '4 Mana', description: "Reaction: add 4 to strength", count: 2 },
  
  // Misc
  { title: "Shuffle", description: "shuffle the discard pile (along with this card) into the main deck, then draw a card to replace this one", count: 1 },
];

export const initialAdventureDeck = [
  { type: 'Adventure', title: "An Audience with the King", cost: '15 Gold, Discard 3 cards', description: "6 Victory Point", count: 1 },
  { type: 'Adventure', title: "Arcane Library", cost: 'Discard 2 cards', description: "1 Victory Point, Draw 2 Cards, 5 Mana", count: 3 },
  { type: 'Adventure', title: "labyrinth", cost: '3 Strength, Discard 6 cards', description: "3 Victory Points, play 1 item from hand for free", count: 2 },
  { type: 'Adventure', title: "journey through the enchanted forest", cost: '4 Strength', description: "1 Victory Points, 2g, 3m", count: 3 },
  { type: 'Adventure', title: "goblin nest", cost: '3 Strength', description: "1 Victory Points, 3 Gold", count: 3 },
  { type: 'Adventure', title: "abandoned town", cost: '3 Strength', description: "1 Victory Points, 1 Gold, draw 2 cards", count: 3 },
  { type: 'Adventure', title: "orc camp", cost: '4 Strength', description: "2 Victory Points, 3 Gold", count: 3 },
  { type: 'Adventure', title: "troll cave", cost: '5 Strength', description: "2 Victory Points, 5 Gold", count: 2 },
  { type: 'Adventure', title: "undead tomb", cost: '5 Strength', description: "take 1 damage, 2 Victory Points, 2 Gold, take 1 card from discard pile", count: 2 },
  { type: 'Adventure', title: "ogre mound", cost: '6 Strength', description: "2 Victory Points, 6 Gold", count: 2 },
  { type: 'Adventure', title: "witch's lair", cost: '6 Strength', description: "take 2 damage, 3 Victory Points, 3 Gold, 6 Mana", count: 1 },
  { type: 'Adventure', title: "mage's tower", cost: '7 Strength, 3 Mana', description: "3 Victory Points, draw 3 cards", count: 1 },
  { type: 'Adventure', title: "battle the lich", cost: '9 Strength, 2 Mana, 3 Damage', description: "5 Victory Points, take 2 cards from discard pile", count: 1 },
  { type: 'Adventure', title: "dragon hoard", cost: '12 Strength', description: "7 Victory Points, 12 Gold", count: 1 },
  { type: 'Adventure', title: "battle of the 12 clans", cost: '7 Strength', description: "3 Victory Points, 3 Gold, all other players take 2 damage", count: 1 },
];

export const characters = [
  { type: 'Character', title: "Warrior", stats: "Strength: 4\nMax Health: 16\nMana: 0", ability: "You take -1 damage from enemy spells and actions", count: 1 },
  { type: 'Character', title: "Rogue", stats: "Strength: 2\nMax Health: 9\nMana: 2", ability: "You may perform 3 actions per turn", count: 1 },
  { type: 'Character', title: "Wizard", stats: "Strength: 1\nMax Health: 7\nMana: 3", ability: "The first time you play a spell (not a reaction) each turn, draw a card", count: 1 },
  { type: 'Character', title: "Fighter", stats: "Strength: 3\nMax Health: 12\nMana: 1", ability: "+3 Strength when using 2 weapons at once", count: 1 },
  { type: 'Character', title: "Arcanist", stats: "Strength: 1\nMax Health: 8\nMana: 4", ability: "you only have to discard mana down to your limit (and suffer mana burn) at the end of your turn", count: 1 },
  { type: 'Character', title: "Ranger", stats: "Strength: 1\nMax Health: 8\nMana: 3", ability: "All your weapons have +1 durability", count: 1 },
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
