export function Card({ card, onPlay }) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">{card.title}</span>
        <span className="card-cost">{card.cost}</span>
      </div>
      <div className="card-description">{card.description}</div>
      {onPlay && (
        <button className="play-button" onClick={onPlay}>
          Play
        </button>
      )}
    </div>
  );
}
