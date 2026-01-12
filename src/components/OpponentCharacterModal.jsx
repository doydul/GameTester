export function OpponentCharacterModal({ character, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal character-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Opponent's Character</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-content">
          {!character ? (
            <p className="empty-modal">Opponent has no character selected</p>
          ) : (
            <div className="character-card modal-character">
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
          )}
        </div>
      </div>
    </div>
  );
}
