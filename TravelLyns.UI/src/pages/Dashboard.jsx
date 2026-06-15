import { useState } from 'react';
import '../styles/Dashboard.css';

function Dashboard() {
  const [trip, setTrip] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    travelStyle: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setTrip((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Trip plan:', trip);
    alert('Trip saved! (Demo — no API yet)');
  }

  return (
    <div className="dashboard">
      <h1>Plan Your Trip</h1>
      <p className="dashboard-subtitle">
        Enter your details and we&apos;ll build your itinerary.
      </p>
      <form className="trip-form" onSubmit={handleSubmit}>
        <label>
          Destination
          <input
            type="text"
            name="destination"
            value={trip.destination}
            onChange={handleChange}
            placeholder="e.g. Goa"
            required
          />
        </label>
        <div className="trip-form-row">
          <label>
            Start Date
            <input
              type="date"
              name="startDate"
              value={trip.startDate}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            End Date
            <input
              type="date"
              name="endDate"
              value={trip.endDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label>
          Budget (USD)
          <input
            type="number"
            name="budget"
            value={trip.budget}
            onChange={handleChange}
            placeholder="e.g. 1500"
            min="0"
            required
          />
        </label>
        <label>
          Travel Style
          <select
            name="travelStyle"
            value={trip.travelStyle}
            onChange={handleChange}
            required
          >
            <option value="">Select a style</option>
            <option value="relaxed">Relaxed</option>
            <option value="adventure">Adventure</option>
            <option value="culture">Culture</option>
            <option value="food">Food &amp; Dining</option>
            <option value="mixed">Mixed</option>
          </select>
        </label>
        <button type="submit">Generate Itinerary</button>
      </form>
    </div>
  );
}

export default Dashboard;