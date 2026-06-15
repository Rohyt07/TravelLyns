import PlaceCard from '../components/PlaceCard';
import destinations from '../data/destinations';
import '../styles/Explore.css';

function Explore() {
  return (
    <div className="explore">
      <h1>Explore Destinations</h1>
      <p className="explore-subtitle">
        Discover popular places to inspire your next trip.
      </p>
      <div className="explore-grid">
        {destinations.map((place) => (
          <PlaceCard
            key={place.id}
            title={place.title}
            description={place.description}
            image={place.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Explore;