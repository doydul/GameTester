# Card Game Tester

A 2-player card game testing application built with React and Firebase Realtime Database.

## Features

- Shared deck of cards synchronized in real-time between players
- Each player has their own hand
- "New Game" button initializes a shuffled deck of 20 cards
- "Draw" button lets players draw cards from the shared deck
- Cards display title, cost, and description

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- A Firebase project with Realtime Database enabled

### Installation

```bash
npm install
```

### Running the App

```bash
npm run dev
```

Open the URL in two browser windows to simulate two players.

## Firebase Setup

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the setup wizard
3. Once created, click "Web" to add a web app
4. Copy the config object and update `src/firebase.ts`

### 2. Enable Realtime Database

1. In Firebase Console, go to "Build" > "Realtime Database"
2. Click "Create Database"
3. Choose your database location (e.g., europe-west1)
4. Start in "test mode" for development (you'll secure it below)

### 3. Configure Database Rules

In Firebase Console, go to "Realtime Database" > "Rules" and replace the default rules with:

```json
{
  "rules": {
    "games": {
      "$gameId": {
        ".read": true,
        ".write": true,
        "deck": {
          ".validate": "newData.isArray() || !newData.exists()"
        },
        "hands": {
          "player1": {
            ".validate": "newData.isArray() || !newData.exists()"
          },
          "player2": {
            ".validate": "newData.isArray() || !newData.exists()"
          }
        }
      }
    }
  }
}
```

Click "Publish" to save the rules.

#### Rules Explanation

| Rule | Purpose |
|------|---------|
| `"games"` | Root node containing all game sessions |
| `"$gameId"` | Wildcard for individual game IDs (e.g., "game1") |
| `".read": true` | Allows anyone to read game state |
| `".write": true` | Allows anyone to write game state |
| `".validate"` | Ensures data structure is correct (arrays for deck/hands) |

#### Production Rules (with Authentication)

For a production app with Firebase Authentication:

```json
{
  "rules": {
    "games": {
      "$gameId": {
        ".read": "auth != null",
        ".write": "auth != null",
        "deck": {
          ".validate": "newData.isArray() || !newData.exists()"
        },
        "hands": {
          "player1": {
            ".validate": "newData.isArray() || !newData.exists()"
          },
          "player2": {
            ".validate": "newData.isArray() || !newData.exists()"
          }
        }
      }
    }
  }
}
```

## Project Structure

```
src/
├── components/
│   ├── Card.tsx        # Card display component
│   ├── Hand.tsx        # Player hand with draw button
│   └── GameBoard.tsx   # Main game board
├── types.ts            # TypeScript interfaces
├── cardData.ts         # Sample card definitions
├── firebase.ts         # Firebase configuration
├── App.tsx             # Main application
├── App.css             # Styling
└── main.tsx            # Entry point
```

## Data Structure

The Firebase Realtime Database stores game state in this structure:

```
games/
└── game1/
    ├── deck: Card[]
    └── hands/
        ├── player1: Card[]
        └── player2: Card[]
```

Each card has:
- `id`: Unique identifier
- `title`: Card name
- `cost`: Mana cost (number)
- `description`: Card effect text

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
