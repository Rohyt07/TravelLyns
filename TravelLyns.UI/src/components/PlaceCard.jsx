import '../styles/PlaceCard.css';

function PlaceCard({ title, description, image }) {
  return (
    <article className="place-card">
      <img
        className="place-card-image"
        src={image}
        alt={title}
      />
      <div className="place-card-body">
        <h2 className="place-card-title">{title}</h2>
        <p className="place-card-description">{description}</p>
      </div>
    </article>
  );
}

export default PlaceCard;