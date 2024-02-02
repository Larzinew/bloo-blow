import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        {/* Your hero image */}
        <img src="path/to/hero-image.jpg" alt="Blowdry Hero" />
        {/* Hero body copy */}
        <div className="hero-text">
          <h1>Bl-oo Bar Appointments</h1>
          <p>Experience the best blowdry services in town.</p>
        </div>
      </div>

      {/* Service List */}
      <div className="service-list">
        <h2>Available Services</h2>
        <ul>
          <li>Wash and Style</li>
          <li>Updo</li>
          <li>Braiding</li>
          {/* Add more services as needed */}
        </ul>
      </div>

      {/* Call-to-Action Cards */}
      <div className="cta-cards">
        {/* Add Appointment Card */}
        <div className="card">
          <h3>Add Appointment</h3>
          <p>Schedule your next blowdry appointment with us.</p>
          <Link to="/add-appointment">Schedule Now</Link>
        </div>

        {/* Check Schedule Card */}
        <div className="card">
          <h3>Check Schedule</h3>
          <p>View and manage your upcoming appointments.</p>
          <Link to="/check-schedule">Check Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
