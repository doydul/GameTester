# Game Design Document – Card & Adventure Game

## 1. Overview
This is a competitive card game for **2–4 players**, combining **hand management**, **character progression**, and **risk–reward decision making**. Players take on unique characters, build their capabilities through cards and equipment, and complete adventures to earn **victory points**.

The **first player to begin their turn with enough victory points** wins.

---

## 2. Components

### Decks & Cards
- **Main Deck** – Core gameplay cards (actions, items, spells, etc.)
- **Adventure Deck** – Cards representing adventures players may undertake
- **Character Cards** – One per player, each unique

### Tokens
- **Gold tokens**
- **Mana tokens**
- **Damage tokens**

---

## 3. Setup
1. Each player chooses or is dealt **one unique character card**.
2. Each player draws **5 cards** from the Main Deck.
3. Shuffle the Adventure Deck and place **3 adventure cards face up** to form the **Adventure Row**.
4. Give players **starting resources** as defined by their character cards (if any).
5. Choose a starting player at random. Play proceeds **clockwise**.

---

## 4. Character Stats
Each character card defines the player’s **starting and maximum values** for the following stats:

- **Strength**  
  Used when claiming adventures and during combat.
- **Maximum Health**  
  The most damage a player can sustain.
- **Maximum Mana**  
  The maximum mana a player can hold.

---

## 5. Turn Structure
On a player’s turn, the following steps occur in order:

### Draw Phase
- Draw **1 card** from the Main Deck.

### Action Phase
- The player may take **up to 2 actions**.
- Actions may be taken in **any order**.
- Actions may be **repeated** unless stated otherwise.

---

## 6. Actions

### 6.1 Play a Card
- Play a card from your hand and resolve its effect.
- Card type determines cost and resolution (see **Section 7**).

### 6.2 Standard Actions

#### Scheming
- Discard up to **2 cards** from your hand.
- Draw the **same number of cards** discarded.

#### Visit the Apothecary
- Spend **1 or 2 gold**.
- Remove **1 damage per gold spent** from your character.

#### Visit the Arcanist
- Spend **1 or 2 gold**.
- Gain **1 mana per gold spent** (subject to **Mana Burn** rules).

#### Go on an Adventure
- Choose one card from the **Adventure Row**.
- Pay the listed **cost**.
- Resolve the adventure’s **strength check and reward**.
- Immediately replace the claimed card with a new adventure card from the deck.

---

## 7. Card Types (Main Deck)

### 7.1 Action Cards
- Typically have **no cost**.
- Resolve immediately and are then **discarded**.

### 7.2 Item Cards
- Typically cost **gold** to play.
- Placed face-up in the player’s **Inventory**.
- Provide **persistent effects**.
- A player may have **no more than 3 items** in their inventory at a time.

#### Weapons (Item Subtype)
- Weapons contribute **strength** when used.
- **Types**:
  - **Single-Handed** – Up to 2 may be used at once.
  - **Double-Handed** – Only 1 may be used.
- Each weapon has a **durability value**.

**Weapon Damage**
- Each time a weapon is used, it gains **1 damage token**.
- If **damage ≥ durability**, the weapon is **destroyed**.

### 7.3 Spell Cards
- Similar to action cards but require **mana** to play.
- Mana cost must be paid to resolve the effect.

### 7.4 Scroll Cards
Scrolls function like spells but with special rules:
- May be played **without spending mana**, in which case they are **discarded**.
- If the mana cost is paid, the scroll **returns to the player’s hand** after use instead of being discarded.

### 7.5 Reaction Cards
- Played in response to **specific triggers** described on the card.
- **Do not cost an action**.
- May be played on **any player’s turn**, including during combat or adventures.
- A reaction may be played **in response to another reaction**.

---

## 8. Adventure Cards
- There are always **3 adventure cards** face-up in the Adventure Row.
- **Any player** may claim an available adventure.

Each adventure includes:
- A **strength requirement**
- A **cost**
- A **reward** (often victory points)

### Resolving an Adventure
1. The player declares the adventure they are attempting.
2. The player chooses which **weapons, items, and cards** to activate.
3. Compare the player’s total **strength** to the adventure’s required strength.
4. If the adventure’s strength is higher:
   - The player takes **damage equal to the difference**.
5. The player receives the listed **reward**.

---

## 9. Combat (Fighting)
Some cards instruct players to fight.

### Combat Resolution
1. The attacking player declares the fight.
2. The attacker selects **weapons and action cards** to modify strength.
3. The defender then selects **weapons and action cards**.
4. Compare total strength values:
   - **Higher strength wins**.
   - The card effect determines the outcome for the winner and loser.
   - If strengths are **equal**, nothing happens.

---

## 10. Mana Burn
- Gaining mana is **not optional** unless explicitly stated.
- If gaining mana would exceed a player’s **maximum mana**:
  - Excess mana is **discarded**.
  - The player takes **1 damage per discarded mana**.

---

## 11. Player Death
- When a player’s damage equals or exceeds their **maximum health**, they **die**.
- If it’s their turn, the turn **ends immediately**.
- They revive automatically at the **start of their next turn**.

### Death Penalty
- The player must discard their **most valuable adventure** (by victory points).
- If they have no adventures:
  - They discard **all gold and items**.
- They discard damage equal to their **maximum health**, then **skip their usual turn**.
- If their damage still exceeds maximum health, they remain dead and repeat this process on their next turn.

> The penalty—discarding the most valuable adventure and skipping a turn—is intentionally harsh to encourage cautious planning around damage.

---

## 12. Victory Conditions
- Some adventure cards and rare items provide **victory points**.
- If a player **starts their turn with 15 or more victory points**, they immediately **win the game**.

---

## 13. Design Notes (Optional / For Iteration)
- The game emphasizes **timing**, **risk management**, and **resource efficiency**.
- Adventures provide a **push-your-luck** element through strength checks and damage.
- Weapons introduce **durability-based decision-making**.
- Reaction cards create **interaction and unpredictability**.
