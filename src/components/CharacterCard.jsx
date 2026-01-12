import { drawRandomCharacter } from '../firebase.js';

export function CharacterCard({ playerId, character }) {
  const handleDrawCharacter = () => {
    drawRandomCharacter(playerId);
  };

  if (!character) {
    return (
      <div className="character-section">
        <h3>Character</h3>
        <div className="no-character">
          <p>No character selected</p>
          <button className="draw-character-btn" onClick={handleDrawCharacter}>
            Draw Random Character
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="character-section">
      <h3>Character</h3>
      <div className="character-card">
        <div className="character-title">{character.title}</div>
        <div className="character-stats">
          {character.stats.split('\n').map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
        <div className="character-ability">
          <span className="ability-label">Ability:</span> {character.ability}
        </div>
      </div>
      <button className="draw-character-btn" onClick={handleDrawCharacter}>
        Reroll Character
      </button>
    </div>
  );
}
