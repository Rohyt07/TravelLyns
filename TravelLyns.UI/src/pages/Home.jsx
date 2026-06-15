import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Plan Smarter Trips with TravelLyns</h1>
        <p>
          Turn your destination, dates, budget, and interests into a
          realistic itinerary — without juggling dozens of tabs.
        </p>
        <button
          className="hero-btn"
          onClick={() => navigate('/signup')}
        >
          Create Your Trip
        </button>
      </div>
    </section>
  );
}

export default Home;