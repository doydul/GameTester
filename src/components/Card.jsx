export function Card({ card, onPlay, onTake, onDiscard }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">{card.title}</span>
        {card.type && (
          <span className="card-type">{card.type}</span>
        )}
      </div>
      {card.cost && (
        <div className="card-cost-container">
          <span className="card-cost">{card.cost}</span>
        </div>
      )}
      <div className="card-description">{card.description}</div>
      <div className="card-actions">
        {onPlay && (
          <button className="play-button" onClick={onPlay}>
            Play
          </button>
        )}
        {onTake && (
          <button className="take-button" onClick={onTake}>
            Take
          </button>
        )}
        {onDiscard && (
          <button className="discard-button" onClick={onDiscard}>
            Discard
          </button>
        )}
      </div>
    </div>
  );
}
