import "./HobbyCard.css";

function HobbyCard({ phrase, imageSrc }) {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <h3>{phrase}</h3>
        </div>
        <div className="card-back">
          <img src={imageSrc} alt="Captured" className="hobby-image" />
        </div>
      </div>
    </div>
  );
}

export default HobbyCard;
